function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/60">
              Historical Geology
            </p>
            <h2 className="mt-4 font-serif text-3xl text-forest">
              The Ankylosaurus: A Historical Geology Perspective
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-stoneText/85">
              A structured overview of Ankylosaurus through geologic time, fossil
              evidence, anatomy, evolutionary significance, and end-Cretaceous extinction.
            </p>
          </div>

          <div className="lg:justify-self-end lg:text-right">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest/75">
              Project
            </p>
            <ul className="mt-4 space-y-3 pl-0 text-sm leading-7 text-stoneText/85">
              <li className="list-none">Student Name: Joshua Lopez</li>
              <li className="list-none">Course: Historical Geology</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-forest/10 pt-6 text-xs tracking-[0.18em] text-stone/75 sm:flex-row sm:items-center sm:justify-between">
          <p>ANKYLOSAURUS WEBSITE</p>
          <p>Educational use</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
