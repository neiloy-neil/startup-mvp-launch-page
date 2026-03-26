export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-8 sm:px-8 lg:px-10">
      <header className="flex items-center justify-between py-4">
        <div>
          <p className="font-mono text-sm font-semibold tracking-[0.28em] text-slate-900 uppercase">
            SignalPad
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Startup MVP launching soon
          </p>
        </div>
        <a
          href="#early-access"
          className="rounded-full border border-slate-900/10 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900/20 hover:text-slate-900"
        >
          Join early access
        </a>
      </header>

      <section className="grid gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-medium text-[var(--accent)]">
            New app for early-stage teams
          </span>
          <h1 className="mt-8 font-mono text-5xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Launch smarter with one place for ideas, feedback, and next steps.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
            SignalPad helps small teams capture what matters, organize decisions,
            and move their MVP forward without losing momentum.
          </p>

          <form className="soft-card mt-10 flex flex-col gap-3 rounded-[1.75rem] p-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-full border border-slate-900/10 bg-white px-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--accent)]"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-slate-950 px-6 font-semibold text-white transition hover:bg-slate-800"
            >
              Get launch updates
            </button>
          </form>

          <p className="mt-4 text-sm text-[var(--muted)]">
            Join founders, operators, and early adopters getting first access.
          </p>
        </div>

        <div className="soft-card rounded-[2rem] p-6">
          <div className="rounded-[1.5rem] border border-slate-900/8 bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[var(--muted)]">Launch preview</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-950">
                  Simple workspace for MVP execution
                </h2>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
                Waitlist open
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["Idea inbox", "Capture customer requests and product notes in one stream."],
                ["Decision board", "Track what is approved, blocked, or ready to ship."],
                ["Launch checklist", "Keep the team aligned on the next critical tasks."],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-900/8 bg-slate-50 p-4"
                >
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 py-8 lg:grid-cols-2">
        <div className="soft-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
            The problem
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            Early teams lose traction when product decisions live everywhere.
          </h2>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            Notes stay in chat, feedback stays in calls, and the launch plan turns
            into a patchwork of docs that nobody fully trusts.
          </p>
        </div>

        <div className="soft-card rounded-[2rem] p-8">
          <p className="text-sm font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
            The solution
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            SignalPad gives your team one clean operating view before launch.
          </h2>
          <p className="mt-4 leading-8 text-[var(--muted)]">
            Capture ideas, prioritize what matters, and keep the next milestone clear
            so your MVP ships with less confusion and more focus.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.22em] text-[var(--accent)] uppercase">
            Feature preview
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
            Minimal product, sharp value.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
            The MVP is built around the workflows early teams actually need before a launch.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Centralized feedback",
              description: "Bring customer notes, internal ideas, and launch feedback into one place.",
            },
            {
              title: "Priority visibility",
              description: "See what matters now so the team stays focused on the next release step.",
            },
            {
              title: "Launch readiness",
              description: "Track key milestones and keep momentum from beta testing to public release.",
            },
          ].map((item) => (
            <article key={item.title} className="soft-card rounded-[1.75rem] p-6">
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="early-access"
        className="soft-card mb-12 rounded-[2rem] px-6 py-10 sm:px-8 lg:px-10"
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
              Sign up to hear when the MVP opens and be among the first users shaping the product.
            </p>
          </div>

          <form className="flex w-full max-w-md flex-col gap-3">
            <input
              type="text"
              placeholder="Your name"
              className="h-12 rounded-full border border-slate-900/10 bg-white px-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--accent)]"
            />
            <input
              type="email"
              placeholder="Work email"
              className="h-12 rounded-full border border-slate-900/10 bg-white px-5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--accent)]"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-[var(--accent)] px-6 font-semibold text-white transition hover:bg-blue-700"
            >
              Request early access
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
