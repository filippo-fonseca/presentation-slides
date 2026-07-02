type SearchParams = { from?: string; error?: string };

export default async function LoginPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { from = "/", error } = await searchParams;
  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-4">
      <form
        action="/api/login"
        method="post"
        className="w-full max-w-sm rounded-2xl border border-line bg-surface p-8 shadow-md"
      >
        <p className="eyebrow mb-2 text-brand">Restricted</p>
        <h1 className="font-display text-[28px] leading-tight text-ink">The DRD-3</h1>
        <p className="mt-2 font-serif text-[14px] text-ink-soft">
          Polyethylene meeting walkthrough. Enter the password to continue.
        </p>

        <input type="hidden" name="from" value={from} />
        <label htmlFor="password" className="mt-6 block font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-muted">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoFocus
          autoComplete="current-password"
          className="mt-2 w-full rounded-md border border-line bg-background px-3 py-2.5 font-serif text-[15px] text-ink outline-none ring-brand/30 focus:border-brand focus:ring-2"
        />

        {error ? (
          <p className="mt-3 font-serif text-[13px] text-rose-600">Incorrect password. Try again.</p>
        ) : null}

        <button
          type="submit"
          className="mt-6 w-full cursor-pointer rounded-md bg-brand px-3 py-2.5 font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition hover:opacity-95"
        >
          Enter
        </button>
      </form>
    </main>
  );
}
