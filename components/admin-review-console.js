"use client";

import { useState } from "react";

function downloadCsv(fileName, csvText) {
  const blob = new Blob([csvText], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function AdminReviewConsole() {
  const [adminKey, setAdminKey] = useState("");
  const [status, setStatus] = useState("Enter your admin key to load review data.");
  const [stakeholderItems, setStakeholderItems] = useState([]);
  const [trackerItems, setTrackerItems] = useState([]);

  function buildAuthHeaders() {
    const key = adminKey.trim();
    return {
      "x-admin-key": key,
      Authorization: `Bearer ${key}`
    };
  }

  async function parseJsonSafe(response) {
    try {
      return await response.json();
    } catch {
      return null;
    }
  }

  async function loadData() {
    if (!adminKey.trim()) {
      setStatus("Admin key required.");
      return;
    }

    setStatus("Loading records...");

    const [stakeholderResponse, trackerResponse] = await Promise.all([
      fetch("/api/stakeholder-intake", {
        headers: buildAuthHeaders(),
        cache: "no-store"
      }),
      fetch("/api/tracker-contributions", {
        headers: buildAuthHeaders(),
        cache: "no-store"
      })
    ]);

    if (!stakeholderResponse.ok || !trackerResponse.ok) {
      const [stakeholderError, trackerError] = await Promise.all([
        parseJsonSafe(stakeholderResponse),
        parseJsonSafe(trackerResponse)
      ]);

      const stakeholderMessage = stakeholderError?.error || "unknown error";
      const trackerMessage = trackerError?.error || "unknown error";

      setStatus(
        `Load failed | stakeholder: ${stakeholderResponse.status} (${stakeholderMessage}) | tracker: ${trackerResponse.status} (${trackerMessage})`
      );
      return;
    }

    const stakeholderPayload = await stakeholderResponse.json();
    const trackerPayload = await trackerResponse.json();

    setStakeholderItems(stakeholderPayload.items || []);
    setTrackerItems(trackerPayload.items || []);
    setStatus("Loaded successfully.");
  }

  async function exportCsv(endpoint, fileName) {
    if (!adminKey.trim()) {
      setStatus("Admin key required for export.");
      return;
    }

    const response = await fetch(`${endpoint}?format=csv`, {
      headers: buildAuthHeaders(),
      cache: "no-store"
    });

    if (!response.ok) {
      const errorPayload = await parseJsonSafe(response);
      const message = errorPayload?.error || "unknown error";
      setStatus(`CSV export failed (${response.status}: ${message}).`);
      return;
    }

    const csv = await response.text();
    downloadCsv(fileName, csv);
    setStatus(`Exported ${fileName}`);
  }

  return (
    <section className="panel section admin-console">
      <p className="section-kicker">Admin review</p>
      <h2>Review and export intake data</h2>
      <p className="body-copy">
        This console reads from the same API endpoints that back public intake collection and tracker contributions.
      </p>

      <div className="admin-controls">
        <label>
          Admin key
          <input
            type="password"
            value={adminKey}
            onChange={(event) => setAdminKey(event.target.value)}
            placeholder="Paste ADMIN_REVIEW_KEY"
          />
        </label>
        <div className="row">
          <button className="button button-primary" type="button" onClick={loadData}>Load Data</button>
          <button
            className="button button-secondary"
            type="button"
            onClick={() => exportCsv("/api/stakeholder-intake", "stakeholder-intakes.csv")}
          >
            Export Stakeholder CSV
          </button>
          <button
            className="button button-secondary"
            type="button"
            onClick={() => exportCsv("/api/tracker-contributions", "tracker-contributions.csv")}
          >
            Export Tracker CSV
          </button>
        </div>
        <p className="muted">{status}</p>
      </div>

      <div className="split-grid">
        <article className="panel section">
          <p className="section-kicker">Stakeholder intake</p>
          <h3>{stakeholderItems.length} records</h3>
          <div className="admin-list">
            {stakeholderItems.slice(0, 40).map((item) => (
              <details key={`stakeholder-${item.id}`}>
                <summary>
                  {item.created_at} | {item.stakeholder_type} | {item.organization}
                </summary>
                <p><strong>Name:</strong> {item.full_name}</p>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>Goal:</strong> {item.primary_goal}</p>
                <p><strong>Categories:</strong> {item.material_categories || "N/A"}</p>
                <p><strong>Document link:</strong> {item.document_link || "N/A"}</p>
                <p><strong>Notes:</strong> {item.notes || "N/A"}</p>
              </details>
            ))}
          </div>
        </article>

        <article className="panel section">
          <p className="section-kicker">Tracker contributions</p>
          <h3>{trackerItems.length} records</h3>
          <div className="admin-list">
            {trackerItems.slice(0, 40).map((item) => (
              <details key={`tracker-${item.id}`}>
                <summary>
                  {item.created_at} | {item.geography || "No geography"} | {item.stakeholder_type || "General"}
                </summary>
                <p><strong>Contributor:</strong> {item.contributor_name}</p>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>Data type:</strong> {item.data_type || "N/A"}</p>
                <p><strong>Summary:</strong> {item.summary}</p>
                <p><strong>Source link:</strong> {item.source_link || "N/A"}</p>
                <p><strong>Permission to publish:</strong> {String(item.permission_to_publish)}</p>
              </details>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}