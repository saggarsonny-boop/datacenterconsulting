"use client";

import { useState } from "react";

const initialState = {
  contributorName: "",
  organization: "",
  email: "",
  geography: "",
  stakeholderType: "",
  dataType: "",
  summary: "",
  sourceLink: "",
  confidenceLevel: "",
  permissionToPublish: false,
  notes: ""
};

export function TrackerContributionForm() {
  const [formState, setFormState] = useState(initialState);
  const [status, setStatus] = useState("");

  function onFieldChange(event) {
    const { name, type, checked, value } = event.target;
    setFormState((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setStatus("Submitting contribution...");

    const response = await fetch("/api/tracker-contributions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState)
    });

    const payload = await response.json();
    if (!response.ok) {
      setStatus(payload.error || "Unable to submit contribution right now.");
      return;
    }

    setStatus("Contribution received. It can now be reviewed and merged into the tracking database.");
    setFormState(initialState);
  }

  return (
    <form className="panel section intake-form" onSubmit={onSubmit}>
      <p className="section-kicker">Global contribution intake</p>
      <h2>Help improve the stakeholder tracker</h2>

      <div className="grid-two">
        <label>
          Contributor name
          <input name="contributorName" value={formState.contributorName} onChange={onFieldChange} required />
        </label>
        <label>
          Organization
          <input name="organization" value={formState.organization} onChange={onFieldChange} />
        </label>
        <label>
          Email
          <input name="email" type="email" value={formState.email} onChange={onFieldChange} required />
        </label>
        <label>
          Geography
          <input name="geography" value={formState.geography} onChange={onFieldChange} placeholder="Country, state/province, region" />
        </label>
        <label>
          Stakeholder type
          <input name="stakeholderType" value={formState.stakeholderType} onChange={onFieldChange} placeholder="Utility, municipality, builder, landowner, etc." />
        </label>
        <label>
          Data type
          <input name="dataType" value={formState.dataType} onChange={onFieldChange} placeholder="Interconnection timeline, permitting data, incentives, contacts" />
        </label>
      </div>

      <label className="full">
        Contribution summary
        <textarea name="summary" rows={4} value={formState.summary} onChange={onFieldChange} required />
      </label>

      <div className="grid-two">
        <label>
          Source link or data room URL
          <input name="sourceLink" type="url" value={formState.sourceLink} onChange={onFieldChange} />
        </label>
        <label>
          Confidence level
          <input name="confidenceLevel" value={formState.confidenceLevel} onChange={onFieldChange} placeholder="High / Medium / Needs validation" />
        </label>
      </div>

      <label className="full">
        Additional notes
        <textarea name="notes" rows={3} value={formState.notes} onChange={onFieldChange} />
      </label>

      <label className="checkbox-item">
        <input
          name="permissionToPublish"
          type="checkbox"
          checked={formState.permissionToPublish}
          onChange={onFieldChange}
        />
        <span>I have permission to share this information and allow it to be used in public-facing framework summaries.</span>
      </label>

      <div className="row full">
        <button className="button button-primary" type="submit">Submit Tracker Contribution</button>
        <span className="muted">{status}</span>
      </div>
    </form>
  );
}