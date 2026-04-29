"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/nextjs";
// import { UploadButton } from "@/lib/uploadthing";

const intakeInitial = {
  contactName: "",
  companyName: "",
  email: "",
  propertyLocation: "",
  parcelSize: "",
  utilityNode: "",
  documentSummary: "",
  ownerUseConcepts: "",
  notes: ""
};

export function PortalClient() {
  const { user } = useUser();
  const [intakeForm, setIntakeForm] = useState(intakeInitial);
  const [category, setCategory] = useState("survey");
  const [reference, setReference] = useState("");
  const [externalUrl, setExternalUrl] = useState("");
  const [intakeStatus, setIntakeStatus] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const [activity, setActivity] = useState([]);

  const loadActivity = useCallback(async () => {
    const response = await fetch("/api/activity", { cache: "no-store" });
    const payload = await response.json();
    setActivity(payload.items || []);
  }, []);

  useEffect(() => {
    if (!user) {
      setActivity([]);
      return;
    }

    loadActivity();
  }, [user, loadActivity]);

  const activityMarkup = useMemo(() => {
    if (!activity.length) {
      return [<li key="empty">No submissions yet.</li>];
    }

    return activity.map((item) => {
      if (item.kind === "intake") {
        return (
          <li key={`${item.kind}-${item.id}`}>
            Intake: {item.company_name || "Company"} - {item.property_location || "Location"}
          </li>
        );
      }

      return (
        <li key={`${item.kind}-${item.id}`}>
          Upload: {item.file_name || "document"}
          {item.link ? (
            <>
              {" "}- <a href={item.link} target="_blank" rel="noreferrer">open</a>
            </>
          ) : null}
        </li>
      );
    });
  }, [activity]);

  async function submitIntake(event) {
    event.preventDefault();
    setIntakeStatus("Saving intake...");

    const response = await fetch("/api/intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(intakeForm)
    });

    if (!response.ok) {
      const payload = await response.json();
      setIntakeStatus(payload.error || "Unable to save intake.");
      return;
    }

    setIntakeStatus("Saved.");
    setIntakeForm(intakeInitial);
    loadActivity();
  }

  async function saveExternalLink(event) {
    event.preventDefault();

    if (!externalUrl.trim()) {
      setUploadStatus("Add a link before saving.");
      return;
    }

    setUploadStatus("Saving link...");

    const response = await fetch("/api/upload-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category,
        reference,
        externalUrl,
        fileName: reference || "linked-document"
      })
    });

    if (!response.ok) {
      const payload = await response.json();
      setUploadStatus(payload.error || "Unable to save link.");
      return;
    }

    setUploadStatus("Link saved.");
    setExternalUrl("");
    setReference("");
    loadActivity();
  }

  function onIntakeChange(event) {
    const { name, value } = event.target;
    setIntakeForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      <SignedOut>
        <section className="portal-gate">
          <h3>Secure access for invited partners</h3>
          <p className="muted">Login to submit confidential intake materials, share diligence documents, and review private activity.</p>
          <SignInButton mode="modal">
            <button className="button button-primary" type="button">Open Secure Portal</button>
          </SignInButton>
        </section>
      </SignedOut>

      <SignedIn>
        <section className="portal-stack">
        <section className="panel section">
          <h2>Partner Intake</h2>
          <form className="grid-two" onSubmit={submitIntake}>
            <label>
              Contact name
              <input name="contactName" value={intakeForm.contactName} onChange={onIntakeChange} required />
            </label>
            <label>
              Company
              <input name="companyName" value={intakeForm.companyName} onChange={onIntakeChange} required />
            </label>
            <label>
              Email
              <input name="email" type="email" value={intakeForm.email} onChange={onIntakeChange} required />
            </label>
            <label>
              Property location
              <input name="propertyLocation" value={intakeForm.propertyLocation} onChange={onIntakeChange} required />
            </label>
            <label>
              Parcel size (acres)
              <input name="parcelSize" value={intakeForm.parcelSize} onChange={onIntakeChange} />
            </label>
            <label>
              Utility node
              <input name="utilityNode" value={intakeForm.utilityNode} onChange={onIntakeChange} />
            </label>
            <label className="full">
              Existing studies summary
              <textarea name="documentSummary" rows={3} value={intakeForm.documentSummary} onChange={onIntakeChange} />
            </label>
            <label className="full">
              Owner use concepts
              <textarea name="ownerUseConcepts" rows={3} value={intakeForm.ownerUseConcepts} onChange={onIntakeChange} />
            </label>
            <label className="full">
              Additional notes
              <textarea name="notes" rows={3} value={intakeForm.notes} onChange={onIntakeChange} />
            </label>
            <div className="row full">
              <button className="button button-primary" type="submit">Save Intake</button>
              <span className="muted">{intakeStatus}</span>
            </div>
          </form>
        </section>

        <section className="panel section">
          <h2>Confidential Document Capture</h2>
          <div className="grid-two">
            <label>
              Category
              <select value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="survey">Survey</option>
                <option value="appraisal">Appraisal</option>
                <option value="owner-idea">Owner Idea Pack</option>
                <option value="zoning">Zoning</option>
                <option value="environmental">Environmental</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Reference note
              <input value={reference} onChange={(event) => setReference(event.target.value)} />
            </label>
          </div>


          <form className="row" onSubmit={saveExternalLink} style={{ marginTop: 14 }}>
            <input
              type="url"
              placeholder="or save a secure document link"
              value={externalUrl}
              onChange={(event) => setExternalUrl(event.target.value)}
              style={{ minWidth: 280 }}
            />
            <button className="button button-secondary" type="submit">Save Link</button>
            <span className="muted">{uploadStatus}</span>
          </form>
        </section>

        <section className="panel section">
          <h2>Partner Activity</h2>
          <ul className="feed">{activityMarkup}</ul>
        </section>
        </section>
      </SignedIn>
    </>
  );
}
