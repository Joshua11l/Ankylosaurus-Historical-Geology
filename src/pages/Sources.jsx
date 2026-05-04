import Section from '../components/Section.jsx'
import { sources } from '../data/sources.js'

const sourceList = [
  sources.britannicaCretaceous,
  sources.britannicaAnkylosaurus,
  sources.dinopediaAnkylosaurus,
  sources.minimuseumArmor,
  sources.natgeoKidsAnkylosaurus,
  sources.dinosaurPicturesAnkylosaurus,
  sources.wikipediaAnkylosaurus,
  sources.ankylosarusFossilWikipedia,
  sources.ankylosaurusHerbivore,
]

const imageCreditRows = [
  { location: 'Home — hero image', desc: 'Ankylosaurus reconstruction', src: sources.minimuseumArmor },
  { location: 'Time Period — sidebar', desc: 'Late Cretaceous world map', src: sources.britannicaCretaceous },
  { location: 'Time Period — inline', desc: 'Ankylosaurus among Late Cretaceous herbivores', src: sources.britannicaAnkylosaurus },
  { location: 'Characteristics — sidebar', desc: 'Ankylosaurus skull fossil', src: sources.ankylosarusFossilWikipedia },
  { location: 'Characteristics — inline', desc: 'Size comparison graphic', src: sources.dinopediaAnkylosaurus },
  { location: 'Discovery — sidebar', desc: 'Ankylosaurus full-body reconstruction', src: sources.natgeoKidsAnkylosaurus },
  { location: 'Evolution — sidebar', desc: 'Ankylosaurus reconstruction', src: sources.dinosaurPicturesAnkylosaurus },
  { location: 'Evolution — inline', desc: 'Ankylosaurus herbivorous lifestyle', src: sources.ankylosaurusHerbivore },
  { location: 'Extinction — sidebar', desc: 'Ankylosaurus in Late Cretaceous habitat', src: sources.dinosaurPicturesAnkylosaurus },
  { location: 'Sources — sidebar', desc: 'Late Cretaceous world map', src: sources.britannicaCretaceous },
]

function Sources() {
  return (
    <Section
      eyebrow="Sources and References"
      title="Where the Information Comes From"
      intro="All the text, facts, and images on this website come from reliable educational sources. They are listed below with proper citations. Each page also shows what sources were used for that section."
      imageSrc="/images/cretaceous-britannica.webp"
      imageAlt="Late Cretaceous world map — a primary reference image used on the Time Period page"
      imageLabel="Cretaceous Map Reference"
      imageFit="contain"
      source={sources.britannicaCretaceous}
      noteTitle="About These Sources"
      noteBody="All sources are educational websites or reference materials. All images are from public, educational websites and are used for learning purposes."
      references={[sources.britannicaCretaceous, sources.britannicaAnkylosaurus, sources.wikipediaAnkylosaurus]}
    >
      {/* APA Citations */}
      <div className="rounded-2xl bg-background p-5">
        <h3 className="font-serif text-2xl text-forest">Source List</h3>
        <ol className="mt-4 space-y-5 text-base leading-8 list-none">
          {sourceList.map((source, i) => (
            <li key={source.url} className="border-b border-forest/8 pb-5 last:border-b-0 last:pb-0">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest/50">{i + 1}.</span>{' '}
              <span className="text-stoneText/90">{source.apa}</span>{' '}
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="text-forest underline decoration-forest/25 underline-offset-4 transition hover:decoration-forest"
              >
                [link]
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Image Credits */}
      <div className="rounded-2xl bg-background p-5">
        <h3 className="font-serif text-2xl text-forest">Where Images Come From</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm leading-7 text-stoneText/85">
            <thead>
              <tr className="border-b border-forest/10 text-left">
                <th className="pb-2 pr-4 font-semibold text-forest">Location</th>
                <th className="pb-2 pr-4 font-semibold text-forest">Description</th>
                <th className="pb-2 font-semibold text-forest">Source</th>
              </tr>
            </thead>
            <tbody>
              {imageCreditRows.map((row) => (
                <tr key={row.location} className="border-b border-forest/8 last:border-b-0">
                  <td className="py-2 pr-4 text-xs text-stoneText/70">{row.location}</td>
                  <td className="py-2 pr-4">{row.desc}</td>
                  <td className="py-2">
                    <a
                      href={row.src.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-forest underline decoration-forest/25 underline-offset-4"
                    >
                      {row.src.organization}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border border-forest/10 bg-forest/5 p-5">
        <h3 className="font-serif text-2xl text-forest">Why These Sources</h3>
        <p className="mt-3">
          We chose these sources because they are clear, accurate, and trustworthy. Britannica
          is a well-known encyclopedia with articles written by experts. National Geographic Kids
          explains science in ways anyone can understand. DinosaurPictures.org and Dinopedia have
          pictures and information about dinosaurs. Mini Museum has actual fossil pieces. Wikipedia
          has detailed information and connects to scientific research.
        </p>
      </div>
    </Section>
  )
}

export default Sources
