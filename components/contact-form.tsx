"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";

type Status = "idle" | "loading" | "success" | "error";

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
    <form className="space-y-4 rounded-xl border border-slate/15 bg-white p-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Name" required />
        <Field id="email" label="Email" type="email" required />
        <Field id="phone" label="Phone" required />
        <label className="text-sm font-medium text-charcoal">
          Service type
          <select
            name="serviceType"
            className="mt-1 w-full rounded-md border border-slate/20 px-3 py-2 text-sm"
            defaultValue="General Repairs"
          >
            <option>General Repairs</option>
            <option>Home Improvements</option>
            <option>Maintenance</option>
            <option>Small Renovations</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <Field id="preferredTimes" label="Preferred days/times" />
      <label className="mt-8 block text-sm font-medium text-charcoal">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-md border border-slate/20 px-3 py-2 text-sm"
          placeholder="Tell us about the job"
        />
      </label>
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Submit Request"}
      </Button>
      {status === "success" && (
        <p className="text-sm font-medium text-emerald-700">Thanks - your quote request has been sent.</p>
      )}
      {status === "error" && <p className="text-sm font-medium text-red-700">{error}</p>}
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
    <label className="text-sm font-medium text-charcoal">
      {label}
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-1 w-full rounded-md border border-slate/20 px-3 py-2 text-sm"
      />
    </label>
  );
}
