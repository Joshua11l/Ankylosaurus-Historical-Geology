import { Link } from 'react-router-dom'
import { sources } from '../data/sources.js'

const highlights = [
  'Geological time period and Late Cretaceous setting',
  'Armor, tail club, and defensive anatomy',
  'Fossil discoveries in Alberta and Montana',
  'Evolutionary significance and extinction context',
]

const quickLinks = [
  { title: 'Late Cretaceous Context', to: '/time-period' },
  { title: 'Physical Characteristics', to: '/characteristics' },
  { title: 'Fossil Discovery Record', to: '/discovery' },
  { title: 'Sources and Citations', to: '/sources' },
]

function Home() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
        <div className="animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-forest/70">
            Historical Geology
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-forest sm:text-6xl">
            The Ankylosaurus: Armored Giant of the Late Cretaceous
          </h1>
          <p className="mt-4 text-lg font-medium text-stone/90">
            A Historical Geology Perspective
          </p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-stoneText/90 sm:text-lg">
            The Ankylosaurus was one of the most heavily armored dinosaurs to ever
            live. It existed during the Late Cretaceous period and developed
            defensive adaptations that made it one of the best-protected large
            herbivores in its ecosystem. This site examines its geologic setting,
            fossil history, anatomy, and extinction context through organized
            educational references and visual examples.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/time-period"
              className="rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-forest/90"
            >
              Explore Time Period
            </Link>
            <Link
              to="/sources"
              className="rounded-full border border-forest/20 bg-white px-6 py-3 text-sm font-semibold text-forest transition hover:bg-sand/35"
            >
              Review Sources
            </Link>
          </div>
        </div>

        <div className="animate-fade-up rounded-[2rem] bg-forest p-6 text-white shadow-[0_24px_60px_rgba(31,61,43,0.25)] [animation-delay:160ms]">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand/80">
              Featured Visual
            </p>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10">
              <img
                src="/images/ankylosaurus-hero.webp"
                alt="Ankylosaurus reconstruction in a warm prehistoric landscape"
                className="h-72 w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-white/70">
              Source:{' '}
              <a
                href={sources.minimuseumArmor.url}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-white/30 underline-offset-4"
              >
                {sources.minimuseumArmor.organization}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-forest/10 bg-white/80 p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/60">
            Overview
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="font-serif text-3xl text-forest">Study Focus</h2>
              <p className="mt-4 text-base leading-8 text-stoneText/90">
                The site is organized around the main questions a historical
                geology project should answer: when Ankylosaurus lived, how it was
                adapted to its environment, where its fossils were found, how its
                defenses evolved, and how the end-Cretaceous extinction reshaped
                life on Earth.
              </p>
            </div>
            <ul className="grid gap-3 text-sm leading-7 text-stoneText/85">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-forest/10 bg-background px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((item, index) => (
            <Link
              key={item.title}
              to={item.to}
              className="animate-fade-up rounded-[2rem] border border-forest/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-forest/55">Topic</p>
              <h3 className="mt-3 font-serif text-2xl text-forest">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stoneText/80">
                Focused summary, clear organization, and supporting visual references.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:pb-16">
        <div className="grid gap-6 rounded-[2rem] border border-forest/10 bg-white/85 p-8 shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/60">
              Reference Standard
            </p>
            <h2 className="mt-4 font-serif text-3xl text-forest">
              Visual Source Set
            </h2>
            <p className="mt-4 text-base leading-8 text-stoneText/90">
              Page visuals now use the image set you provided, including a
              Cretaceous map, body-size graphic, fossil armor specimen, and
              Ankylosaurus reconstructions.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              sources.britannicaCretaceous,
              sources.dinopediaAnkylosaurus,
              sources.minimuseumArmor,
              sources.dinosaurPicturesAnkylosaurus,
            ].map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-forest/10 bg-background px-4 py-4 transition hover:border-forest/25"
              >
                <p className="font-medium text-forest">{source.title}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone/75">
                  {source.organization}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
