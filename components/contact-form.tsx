"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";

type Status = "idle" | "loading" | "success" | "error";
const fieldFocusClasses =
  "outline-none transition focus:border-rust focus-visible:outline-2 focus-visible:outline-rust focus-visible:outline-offset-2 focus-visible:ring-4 focus-visible:ring-rustlight/60";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (!payload.name || !payload.email || !payload.phone || !payload.message) {
      setStatus("error");
      setError("Please complete all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("There was an issue sending your request. Please try again.");
    }
  }

  return (
    <form className="feature-frame space-y-5 bg-ivory p-6 sm:p-8" onSubmit={handleSubmit}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rust">Required fields marked with *</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Name *" required />
        <Field id="email" label="Email *" type="email" required />
        <Field id="phone" label="Phone *" required />
        <label className="text-xs font-semibold uppercase tracking-[0.12em] text-coal">
          Service type
          <select
            name="serviceType"
            className={`mt-2 w-full border border-coal/20 bg-paper/60 px-3 py-2.5 text-sm text-coal ${fieldFocusClasses}`}
            defaultValue="Residential Repair Services"
          >
            <option>Residential Repair Services</option>
            <option>Finish Carpentry & Fixture Installs</option>
            <option>Preventive Property Maintenance</option>
            <option>Kitchen and Bath Touch Renovations</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <Field id="preferredTimes" label="Preferred days / times" />
      <label className="mt-8 block text-xs font-semibold uppercase tracking-[0.12em] text-coal">
        Project details *
        <textarea
          name="message"
          required
          rows={5}
          className={`mt-2 w-full border border-coal/20 bg-paper/60 px-3 py-2.5 text-sm text-coal ${fieldFocusClasses}`}
          placeholder="Tell us what needs to be done, constraints, and any timing goals."
        />
      </label>
      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Send Request"}
      </Button>
      {status === "success" && (
        <p className="text-sm font-medium text-success">Thanks. We received your request and will follow up shortly.</p>
      )}
      {status === "error" && <p className="text-sm font-medium text-danger">{error}</p>}
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="text-xs font-semibold uppercase tracking-[0.12em] text-coal">
      {label}
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className={`mt-2 w-full border border-coal/20 bg-paper/60 px-3 py-2.5 text-sm normal-case text-coal ${fieldFocusClasses}`}
      />
    </label>
  );
}
