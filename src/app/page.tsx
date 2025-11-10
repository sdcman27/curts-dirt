"use client";

import { FormEvent } from "react";

const highlights = [
  {
    title: "Screened topsoil",
    description:
      "Rich, clean soil that arrives ready for gardens, lawns, and new landscape beds.",
  },
  {
    title: "Compost & amendments",
    description:
      "Boost your beds with organic compost and soil blends mixed to your project.",
  },
  {
    title: "Fill dirt & leveling",
    description:
      "Affordable loads for grading, retaining walls, and construction prep.",
  },
];

const services = [
  {
    name: "Residential delivery",
    description:
      "Single-load deliveries sized for backyards, raised beds, and lawn refreshes across the Treasure Valley.",
    details: [
      "Flexible delivery windows Monday through Saturday",
      "Dump exactly where you need it—driveway, curbside, or job site",
      "Transparent pricing with fuel and labor built in",
    ],
  },
  {
    name: "Contractor & multi-load",
    description:
      "Keep projects on schedule with coordinated drop times and consistent, screened material.",
    details: [
      "Bulk pricing available for recurring orders",
      "Direct dispatch updates the morning of delivery",
      "Mix-and-match soil, compost, and fill for each load",
    ],
  },
  {
    name: "Custom soil blends",
    description:
      "We combine topsoil, sand, and compost to match the drainage and nutrition your plants need.",
    details: [
      "Ideal for raised beds, turf installs, and planters",
      "Samples available upon request for large jobs",
      "Talk through your specs directly with Curt before we load",
    ],
  },
];

const steps = [
  {
    title: "Tell us about your project",
    description:
      "Call, text, or send the form with your address, material choice, and how soon you need it.",
  },
  {
    title: "Schedule a delivery window",
    description:
      "We confirm your drop time, text when we are on the way, and keep you posted if weather shifts the plan.",
  },
  {
    title: "Get straight-to-the-spot dumping",
    description:
      "We place the load exactly where you need it so you can spread and get back to building sooner.",
  },
];

const testimonials = [
  {
    quote:
      "Curt went above and beyond. He squeezed us in the same week we called and the soil quality beat the big box stores.",
    name: "Melissa, Boise",
  },
  {
    quote:
      "Reliable, communicative, and fair pricing. Every load is screened and clean—perfect for our landscape clients.",
    name: "Daniel, Meridian contractor",
  },
];

export default function Home() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const details = formData.get("details")?.toString().trim() ?? "";

    const subject = name ? `Soil delivery request from ${name}` : "Soil delivery request";

    const summaryLines = [
      "Hi Curt,",
      "",
      "I'm reaching out through the Curt's Dirt website with a new project.",
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      details && "Project details:",
      details,
      "",
      "Talk soon!",
    ].filter(Boolean);

    const body = summaryLines.join("\n");
    const mailtoUrl = `mailto:hello@curtsdirt.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (typeof window !== "undefined") {
      window.location.href = mailtoUrl;
    }

    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      <header className="border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 text-left">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
              Curt&apos;s Dirt
            </p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Treasure Valley soil delivery made simple.
            </h1>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-300 md:justify-end">
            <a className="hover:text-white" href="#services">
              Services
            </a>
            <a className="hover:text-white" href="#process">
              How it works
            </a>
            <a className="hover:text-white" href="#testimonials">
              Reviews
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-16 text-zinc-200">
        <section className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-8">
            <p className="text-lg font-medium text-amber-400">
              Premium screened topsoil, compost, and fill dirt delivered on your schedule.
            </p>
            <p className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              From backyard garden beds to large landscape installs, Curt brings the dirt and the know-how.
            </p>
            <p className="max-w-xl text-lg text-zinc-300">
              Curt&apos;s Dirt is a family business serving Boise, Meridian, Eagle, Kuna, Nampa, and Caldwell. Every load is
              screened, locally sourced, and delivered with the communication you expect from a neighbor.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_50px_-30px_rgba(250,204,21,0.8)]"
                >
                  <h3 className="text-base font-semibold text-white">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{highlight.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:12085551234"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-base font-semibold text-neutral-900 transition hover:bg-amber-300"
              >
                Call Curt to schedule
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
              >
                Request a quote online
              </a>
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-transparent p-8">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.4),_transparent_60%)]" />
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                What&apos;s included
              </p>
              <ul className="space-y-3 text-sm text-zinc-200">
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-400" aria-hidden />
                  Professional driver with direct-to-site placement guidance.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-400" aria-hidden />
                  Covered loads to keep soil dry on rainy days.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-400" aria-hidden />
                  Friendly text updates before we roll out.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-400" aria-hidden />
                  Payment on delivery—no surprise fees.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="space-y-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Services</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Soil and delivery options</h2>
            <p className="max-w-2xl text-lg text-zinc-300">
              Choose the material mix that fits your project. We keep popular blends stocked and can source specialty soils with
              a little notice.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.name} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                <p className="text-sm text-zinc-300">{service.description}</p>
                <ul className="mt-2 space-y-3 text-sm text-zinc-200">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-amber-400" aria-hidden />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="space-y-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">How it works</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Simple delivery from quote to dump</h2>
            <p className="max-w-2xl text-lg text-zinc-300">
              We keep it personal—no call centers, no guessing when your truck arrives. You work directly with Curt from the first
              message until the soil is on the ground.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-lg font-semibold text-neutral-900">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-zinc-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="space-y-10">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Reviews</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Neighbors who build with Curt&apos;s Dirt</h2>
            <p className="max-w-2xl text-lg text-zinc-300">
              Word of mouth keeps us rolling. Here are a few notes customers have shared after their deliveries.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6">
                <blockquote className="text-lg text-white">“{testimonial.quote}”</blockquote>
                <figcaption className="text-sm font-medium text-amber-300">{testimonial.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Let&apos;s talk dirt</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to schedule a delivery?</h2>
            <p className="max-w-xl text-lg text-zinc-300">
              Call or text to lock in a delivery window. Prefer email? Send the form with your material type, approximate yardage,
              and any access notes—we&apos;ll reply within one business day.
            </p>
            <div className="space-y-4 text-sm">
              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                <a className="text-amber-300 hover:text-amber-200" href="tel:12085551234">
                  (208) 555-1234
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a className="text-amber-300 hover:text-amber-200" href="mailto:hello@curtsdirt.com">
                  hello@curtsdirt.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Service area:</span> Boise • Meridian • Eagle • Kuna • Nampa • Caldwell
              </p>
            </div>
          </div>
          <form className="grid gap-4 text-sm" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jess Builder"
                className="rounded-xl border border-white/10 bg-neutral-900/70 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="rounded-xl border border-white/10 bg-neutral-900/70 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400" htmlFor="details">
                Project details
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                placeholder="Need 6 yards of screened topsoil for a new lawn in Meridian. Driveway drop preferred."
                className="rounded-xl border border-white/10 bg-neutral-900/70 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none"
              />
            </div>
            <p className="text-xs text-zinc-500">
              This form prepares an email and opens it in your default mail app—no information is stored on the site.
            </p>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-base font-semibold text-neutral-900 transition hover:bg-amber-300"
            >
              Send email to Curt
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-neutral-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Curt&apos;s Dirt. All rights reserved.</p>
          <p>Boise, Idaho • Licensed & Insured • Contractor #DIRT-2024</p>
        </div>
      </footer>
    </div>
  );
}
