import { Link } from 'react-router-dom'
import { sources } from '../data/sources.js'

const highlights = [
  'Lived roughly 68 to 66 million years ago during the Late Cretaceous',
  'Body covered in bony armor plates, with a large club at the end of its tail',
  'Fossils found in Montana and Wyoming in the Lance and Hell Creek Formations',
  'Went extinct 66 million years ago during the mass extinction that ended the Cretaceous',
]

const quickLinks = [
  {
    title: 'Late Cretaceous Context',
    to: '/time-period',
    desc: 'Climate, sea levels, and the rock formations where Ankylosaurus fossils were found.',
  },
  {
    title: 'Physical Characteristics',
    to: '/characteristics',
    desc: 'Body armor, tail club, size estimates, and how Ankylosaurus defended itself.',
  },
  {
    title: 'Fossil Discovery Record',
    to: '/discovery',
    desc: 'How fossils were found, who discovered them, and what the specimens tell us.',
  },
  {
    title: 'Evolutionary Significance',
    to: '/evolution',
    desc: 'How ankylosaurs evolved over time and where Ankylosaurus fits in the family tree.',
  },
]

const objectives = [
  {
    label: 'Geologic Setting',
    body: 'Describe where and when Ankylosaurus lived based on the rock record of western North America.',
  },
  {
    label: 'Anatomy and Defense',
    body: 'Explain what the body armor, tail club, and skull tell us about how Ankylosaurus survived.',
  },
  {
    label: 'Fossil Evidence',
    body: 'Look at what fossils have been found and what they do and do not tell us about the animal.',
  },
  {
    label: 'Extinction',
    body: 'Explain why Ankylosaurus went extinct and what the fossil record shows about the end of the Cretaceous.',
  },
]

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
        <div className="animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-forest/70">
            Historical Geology · GEOL201L
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-forest sm:text-6xl">
            The Ankylosaurus: Armored Giant of the Late Cretaceous
          </h1>
          <p className="mt-4 text-lg font-medium text-stone/90">
            A Historical Geology Perspective — Joshua Lopez
          </p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-stoneText/90 sm:text-lg">
            Ankylosaurus magniventris lived about 68 to 66 million years ago at the end of the
            Cretaceous Period. It was one of the most heavily armored animals to ever live, with
            bony plates covering its body and a large club at the end of its tail. This website
            looks at its geologic setting, anatomy, fossil record, and extinction from a historical
            geology perspective.
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

      {/* About */}
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-forest/10 bg-white/80 p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/60">
            Overview
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="font-serif text-3xl text-forest">About Ankylosaurus</h2>
              <p className="mt-4 text-base leading-8 text-stoneText/90">
                Ankylosaurus magniventris was a large, low-bodied plant eater that lived in western
                North America at the very end of the Cretaceous Period. Paleontologist Barnum Brown
                formally named it in 1908. It is well known for its heavy body armor, wide skull,
                and powerful tail club. These features made it one of the most well-protected animals
                in its ecosystem.
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

      {/* Research Objectives */}
      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-forest/10 bg-white/80 p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest/60">
            Research Objectives
          </p>
          <h2 className="mt-4 font-serif text-3xl text-forest">
            What This Presentation Covers
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-8 text-stoneText/85">
            This website examines Ankylosaurus through the lens of historical geology, focusing on
            the rock record, fossil evidence, and what it all tells us about life at the end of
            the Cretaceous. Four main questions guide this presentation:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {objectives.map((obj) => (
              <div key={obj.label} className="rounded-2xl border border-forest/10 bg-background p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-forest/60">{obj.label}</p>
                <p className="mt-2 text-sm leading-7 text-stoneText/85">{obj.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {quickLinks.map((item, index) => (
            <Link
              key={item.title}
              to={item.to}
              className="animate-fade-up rounded-[2rem] border border-forest/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-forest/55">Section</p>
              <h3 className="mt-3 font-serif text-2xl text-forest">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stoneText/80">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Significance */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:pb-16 lg:px-8">
        <div className="rounded-[2rem] border border-forest/10 bg-forest p-8 text-white shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand/80">
            Why This Matters to Geoscientists
          </p>
          <h2 className="mt-4 font-serif text-3xl text-sand">
            Significance Beyond Biology
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-sand/90 uppercase tracking-[0.18em]">Rock Record</p>
              <p className="mt-2 text-sm leading-7 text-white/80">
                Finding Ankylosaurus fossils in a rock layer tells scientists that layer dates to
                the last 2 million years of the Cretaceous. It is a useful tool for dating rock
                formations in North America.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-sand/90 uppercase tracking-[0.18em]">K-Pg Boundary</p>
              <p className="mt-2 text-sm leading-7 text-white/80">
                Ankylosaurus went extinct exactly at the Cretaceous-Paleogene boundary, 66 million
                years ago. This boundary appears in rock layers worldwide and is marked by a layer
                of iridium from an asteroid impact.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-sand/90 uppercase tracking-[0.18em]">Paleoecology</p>
              <p className="mt-2 text-sm leading-7 text-white/80">
                Ankylosaurus shared its ecosystem with Tyrannosaurus and Triceratops. Studying
                all of these animals together helps scientists understand what the Late Cretaceous
                world looked like and how it worked.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
