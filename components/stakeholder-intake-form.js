"use client";

import { useMemo, useState } from "react";
import { materialCategories, stakeholders } from "@/lib/site-content";

const initialState = {
  stakeholderType: stakeholders[0].key,
  fullName: "",
  organization: "",
  email: "",
  location: "",
  primaryGoal: "",
  timeline: "",
  materialsSummary: "",
  documentLink: "",
  requestedOutput: "",
  notes: ""
};

export function StakeholderIntakeForm() {
  const [formState, setFormState] = useState(initialState);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [status, setStatus] = useState("");
  const activeStakeholder = useMemo(
    () => stakeholders.find((item) => item.key === formState.stakeholderType) || stakeholders[0],
    [formState.stakeholderType]
  );

  function onFieldChange(event) {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  }

  function onCategoryToggle(category) {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
  }

  async function onSubmit(event) {
    event.preventDefault();
    setStatus("Submitting...");

    const response = await fetch("/api/stakeholder-intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formState,
        materialCategories: selectedCategories
      })
    });

    const payload = await response.json();
    if (!response.ok) {
      setStatus(payload.error || "Unable to submit right now.");
      return;
    }

    setStatus("Submission received. We will use your stakeholder path and materials summary to route the next step.");
    setFormState(initialState);
    setSelectedCategories([]);
  }

  return (
    <div className="form-shell">
      <div className="form-context feature-card">
        <h3>{activeStakeholder.label}</h3>
        <p>{activeStakeholder.useful}</p>
        <div className="micro-grid">
          <div>
            <strong>Useful to bring</strong>
            <ul className="micro-list">
              {activeStakeholder.provide.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>What you can expect</strong>
            <ul className="micro-list">
              {activeStakeholder.receive.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <form className="panel section intake-form" onSubmit={onSubmit}>
        <div className="grid-two">
          <label>
            Stakeholder type
            <select name="stakeholderType" value={formState.stakeholderType} onChange={onFieldChange}>
              {stakeholders.map((item) => (
                <option key={item.key} value={item.key}>{item.label}</option>
              ))}
            </select>
          </label>
          <label>
            Full name
            <input name="fullName" value={formState.fullName} onChange={onFieldChange} required />
          </label>
          <label>
            Organization
            <input name="organization" value={formState.organization} onChange={onFieldChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={formState.email} onChange={onFieldChange} required />
          </label>
          <label>
            Location or project geography
            <input name="location" value={formState.location} onChange={onFieldChange} />
          </label>
          <label>
            Timing
            <input name="timeline" value={formState.timeline} onChange={onFieldChange} placeholder="e.g. this month, this quarter" />
          </label>
        </div>

        <label className="full">
          Primary goal
          <textarea name="primaryGoal" rows={3} value={formState.primaryGoal} onChange={onFieldChange} required />
        </label>

        <fieldset className="category-fieldset">
          <legend>Materials you can share</legend>
          <div className="checkbox-grid">
            {materialCategories.map((category) => (
              <label key={category} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryToggle(category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="full">
          Materials summary
          <textarea
            name="materialsSummary"
            rows={4}
            value={formState.materialsSummary}
            onChange={onFieldChange}
            placeholder="Describe what you have available, what format it is in, and any known sensitivities."
          />
        </label>

        <div className="grid-two">
          <label>
            Secure document or folder link
            <input
              name="documentLink"
              type="url"
              value={formState.documentLink}
              onChange={onFieldChange}
              placeholder="Google Drive, Dropbox, Box, OneDrive, or data room URL"
            />
          </label>
          <label>
            Requested output
            <input
              name="requestedOutput"
              value={formState.requestedOutput}
              onChange={onFieldChange}
              placeholder="Memo, briefing, checklist, review call, stakeholder map"
            />
          </label>
        </div>

        <label className="full">
          Additional notes
          <textarea name="notes" rows={4} value={formState.notes} onChange={onFieldChange} />
        </label>

        <div className="row full">
          <button className="button button-primary" type="submit">Submit Stakeholder Intake</button>
          <span className="muted">{status}</span>
        </div>
      </form>
    </div>
  );
}
