function Section({
  eyebrow,
  title,
  intro,
  children,
  imageSrc,
  imageAlt = '',
  imageLabel = 'Section Image',
  imageFit = 'cover',
  source,
  noteTitle = 'Research Focus',
  noteBody = 'This section summarizes the main geologic and paleontologic ideas relevant to the topic.',
  references = [],
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.45fr)_20rem]">
        <div className="rounded-[2rem] border border-forest/10 bg-white/85 p-6 shadow-[0_18px_40px_rgba(31,61,43,0.08)] sm:p-8">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/65">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-serif text-3xl text-forest sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 max-w-3xl text-base leading-8 text-stoneText/90">
              {intro}
            </p>
          ) : null}
          <div className="mt-8 space-y-6 text-base leading-8 text-stoneText/90">
            {children}
          </div>
        </div>

        <aside className="flex flex-col gap-5 xl:pt-3">
          <div className="rounded-[2rem] border border-dashed border-forest/25 bg-sand/25 p-6 shadow-sm">
            <div className="overflow-hidden rounded-[1.5rem] border border-forest/12 bg-background">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className={[
                    'min-h-56 w-full bg-background',
                    imageFit === 'contain' ? 'object-contain p-3' : 'object-cover',
                  ].join(' ')}
                />
              ) : (
                <div className="flex min-h-56 items-center justify-center text-center">
                  <p className="font-serif text-2xl text-forest">{imageLabel}</p>
                </div>
              )}
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-forest">{imageLabel}</p>
              {source ? (
                <p className="mt-1 text-sm text-stoneText/75">
                  Source:{' '}
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-forest/25 underline-offset-4"
                  >
                    {source.organization}
                  </a>
                </p>
              ) : null}
            </div>
          </div>

          <div className="rounded-[2rem] border border-forest/10 bg-forest p-6 text-white shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand/80">
              {noteTitle}
            </p>
            <p className="mt-3 text-sm leading-7 text-white/85">{noteBody}</p>
          </div>

          {references.length ? (
            <div className="rounded-[2rem] border border-forest/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-forest/60">
                Selected Sources
              </p>
              <ul className="mt-4 space-y-4 pl-0 text-sm leading-6 text-stoneText/85">
                {references.map((reference) => (
                  <li key={reference.url} className="list-none border-b border-forest/8 pb-4 last:border-b-0 last:pb-0">
                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-forest underline decoration-forest/25 underline-offset-4 transition hover:decoration-forest"
                    >
                      {reference.title}
                    </a>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-stone/75">
                      {reference.organization}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  )
}

export default Section
