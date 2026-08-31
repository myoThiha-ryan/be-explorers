"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { languages, site } from "@/content/site";
import { tours } from "@/content/tours";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClasses =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-[0.9375rem] text-ink transition-colors placeholder:text-ink-muted/70 hover:border-navy-200 focus:border-navy-800 focus:outline-none";

const labelClasses = "mb-2 block text-sm font-medium text-navy-800";

type Props = {
  /** Pre-selects a tour, e.g. from a tour detail page */
  defaultTour?: string;
  className?: string;
};

export function EnquiryForm({ defaultTour, className }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-line bg-mist p-8 text-center sm:p-12",
          className,
        )}
      >
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-navy-800 text-white">
          <Icon name="check" className="size-6" />
        </span>
        <h3 className="mt-6 text-2xl">Thank you — your enquiry is on its way.</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-muted">
          {site.responseTime} If your dates are close, message us on WhatsApp and
          we will reply faster.
        </p>
        <Button
          href={site.whatsappUrl}
          external
          variant="secondary"
          className="mt-8"
        >
          <Icon name="whatsapp" className="size-5" />
          Message on WhatsApp
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("grid gap-5", className)} noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClasses}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClasses}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="phone">
            Phone or WhatsApp{" "}
            <span className="font-normal text-ink-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClasses}
            placeholder="+44 …"
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="tour">
            Tour of interest
          </label>
          <select id="tour" name="tour" defaultValue={defaultTour ?? ""} className={fieldClasses}>
            <option value="">Not sure yet</option>
            {tours.map((tour) => (
              <option key={tour.slug} value={tour.title}>
                {tour.title}
              </option>
            ))}
            <option value="Custom tour">Something custom</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className={labelClasses} htmlFor="date">
            Preferred date
          </label>
          <input id="date" name="date" type="date" className={fieldClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="guests">
            Number of guests
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            max={40}
            defaultValue={2}
            className={fieldClasses}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="language">
            Preferred language
          </label>
          <select
            id="language"
            name="language"
            defaultValue="English"
            className={fieldClasses}
          >
            {languages.map((language) => (
              <option key={language.code} value={language.english}>
                {language.english}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={cn(fieldClasses, "resize-y")}
          placeholder="Tell us what you would like to see, who is travelling and anything we should plan around."
        />
      </div>

      {/* Honeypot — hidden from people, tempting to bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {error} You can also email us directly at{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      )}

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Enquiry"}
        </Button>
        <p className="text-sm text-ink-muted">{site.responseTime}</p>
      </div>
    </form>
  );
}
