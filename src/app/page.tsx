export default function Home() {
  const previewItems = [
    {
      title: "Idea inbox",
      description: "Capture requests, user pain points, and internal ideas in one stream.",
    },
    {
      title: "Decision board",
      description: "Move fast on what gets built, parked, or shipped next.",
    },
    {
      title: "Launch checklist",
      description: "Keep the release plan visible without chasing updates across docs.",
    },
  ];

  const features = [
    {
      title: "Centralized feedback",
      description:
        "Bring customer notes, internal ideas, and launch feedback into one place.",
    },
    {
      title: "Priority visibility",
      description:
        "See what matters now so the team stays focused on the next release step.",
    },
    {
      title: "Launch readiness",
      description:
        "Track key milestones and keep momentum from beta testing to public release.",
    },
  ];

  return (
    <main className="min-h-screen bg-orange-50 text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-pink-500 to-sky-500 text-sm font-semibold text-white shadow-lg shadow-orange-200">
              SP
            </div>
            <div>
              <p className="font-mono text-sm font-semibold tracking-[0.28em] text-slate-900 uppercase">
                SignalPad
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Startup MVP launching soon
              </p>
            </div>
          </div>
          <a
            href="#early-access"
            className="rounded-full border border-orange-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-orange-300 hover:text-slate-900"
          >
            Join early access
          </a>
        </header>

        <section className="hero-shell grid gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-22">
          <div className="max-w-2xl pt-6">
            <span className="inline-flex rounded-full border border-orange-200 bg-white/90 px-4 py-2 text-sm font-medium text-[var(--accent)] shadow-sm">
              New app for early-stage teams
            </span>
            <h1 className="mt-8 max-w-3xl font-mono text-5xl leading-[1.02] font-semibold tracking-tight text-slate-950 sm:text-6xl">
              A sharper launch page for the product that keeps your MVP moving.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              SignalPad gives founders and small teams a focused place to capture
              feedback, prioritize decisions, and stay aligned before launch day.
            </p>

            <form className="soft-card mt-10 flex flex-col gap-3 rounded-[1.75rem] p-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-13 flex-1 rounded-full border border-orange-100 bg-white px-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500"
              />
              <button
                type="submit"
                className="h-13 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-sky-500 px-6 font-semibold text-white shadow-lg shadow-orange-200 transition hover:brightness-105"
              >
                Get launch updates
              </button>
            </form>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <span>Founders</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span>Product teams</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span>Early adopters</span>
            </div>
          </div>

          <div className="soft-card rounded-[2rem] p-4 sm:p-6">
            <div className="overflow-hidden rounded-[1.75rem] border border-orange-100 bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-950 text-white">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <p className="text-sm text-white/50">Preview workspace</p>
                  <h2 className="mt-1 text-xl font-semibold">
                    MVP launch control center
                  </h2>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">
                  Waitlist open
                </span>
              </div>

              <div className="grid gap-4 p-5">
                <div className="rounded-[1.5rem] bg-white/[0.06] p-4 ring-1 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/55">Launch readiness</p>
                      <p className="mt-2 text-3xl font-semibold">82%</p>
                    </div>
                    <div className="rounded-full bg-orange-400/15 px-3 py-1 text-sm text-orange-200">
                      37 people waiting
                    </div>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/8">
                    <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-sky-300" />
                  </div>
                </div>

                <div className="grid gap-3">
                  {previewItems.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] bg-white/[0.06] p-4 ring-1 ring-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400/35 to-sky-400/35 text-sm font-semibold text-orange-50">
                          0{index + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{item.title}</p>
                          <p className="mt-1 text-sm leading-6 text-white/60">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 py-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-pink-500 to-rose-500 px-8 py-10 text-white shadow-[0_24px_60px_rgba(240,90,40,0.18)]">
            <p className="text-sm font-semibold tracking-[0.22em] text-orange-50/85 uppercase">
              The problem
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Product decisions are scattered before the launch ever starts.
            </h2>
            <p className="mt-4 leading-8 text-white/80">
              Feedback lives in Slack, notes sit in docs, and the team spends too
              much time asking what actually matters next.
            </p>
          </div>

          <div className="soft-card rounded-[2rem] border border-sky-100 bg-gradient-to-br from-white to-sky-50/70 p-8">
            <p className="text-sm font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
              The solution
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              SignalPad brings momentum back with one calm, structured workspace.
            </h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              Capture feedback, assign the next step, and move your MVP toward
              launch without building your process around scattered tools.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
                Feature preview
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
                Minimal product, stronger presence.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
                The MVP stays lean, but the experience should still feel like a product
                buyers would trust.
              </p>
            </div>
            <div className="rounded-full bg-gradient-to-r from-orange-50 to-sky-50 px-4 py-2 text-sm text-slate-600 shadow-sm ring-1 ring-orange-100">
              Launching with first 100 teams
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((item, index) => (
              <article
                key={item.title}
                className="soft-card rounded-[1.75rem] bg-gradient-to-br from-white via-orange-50/40 to-sky-50/60 p-6 transition hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-sky-100 text-sm font-semibold text-orange-600">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="early-access"
          className="mb-12 overflow-hidden rounded-[2rem] border border-orange-100 bg-gradient-to-r from-orange-100 via-pink-50 to-sky-100 px-6 py-10 shadow-[0_24px_70px_rgba(240,90,40,0.1)] sm:px-8 lg:px-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
                Early access
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
                Get on the list before the first invites go out.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
                Sign up to hear when the MVP opens and help shape the product with
                real early-stage feedback.
              </p>
            </div>

            <form className="flex w-full max-w-md flex-col gap-3 rounded-[1.5rem] bg-white/85 p-4 ring-1 ring-orange-100 backdrop-blur">
              <input
                type="text"
                placeholder="Your name"
                className="h-12 rounded-full border border-orange-100 bg-white px-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500"
              />
              <input
                type="email"
                placeholder="Work email"
                className="h-12 rounded-full border border-orange-100 bg-white px-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-sky-500 px-6 font-semibold text-white shadow-lg shadow-orange-200 transition hover:brightness-105"
              >
                Request early access
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
