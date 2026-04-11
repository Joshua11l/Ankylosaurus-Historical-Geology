import Section from '../components/Section.jsx'
import { sources } from '../data/sources.js'

const sourceList = [
  sources.britannicaCretaceous,
  sources.dinopediaAnkylosaurus,
  sources.minimuseumArmor,
  sources.natgeoKidsAnkylosaurus,
  sources.dinosaurPicturesAnkylosaurus,
]

function Sources() {
  return (
    <Section
      eyebrow="Sources and References"
      title="Image and Content Sources"
      intro="These are the links used for the visual set currently shown across the site, including the Cretaceous map, anatomy comparison image, fossil armor specimen, and Ankylosaurus reconstructions."
      imageSrc="/images/cretaceous-britannica.webp"
      imageAlt="Late Cretaceous world map used in the site"
      imageLabel="Cretaceous Map Reference"
      imageFit="contain"
      source={sources.britannicaCretaceous}
      noteTitle="Source Standard"
      noteBody="Each listed source links back to the page you provided for the current visual set."
      references={[sources.britannicaCretaceous, sources.natgeoKidsAnkylosaurus, sources.minimuseumArmor]}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Source List</h3>
          <ul className="mt-4 space-y-4 text-base leading-8">
            {sourceList.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-forest underline decoration-forest/25 underline-offset-4"
                >
                  {source.title}
                </a>
                <p className="text-sm text-stoneText/75">{source.organization}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Image Credits</h3>
          <ul className="mt-4 space-y-3 text-base leading-8">
            <li>Home image: Mini Museum Ankylosaurus dermal armor page.</li>
            <li>Time period map: Encyclopaedia Britannica Cretaceous Period page.</li>
            <li>Characteristics image: Dinopedia Ankylosaurus page.</li>
            <li>Discovery image: National Geographic Kids Ankylosaurus page.</li>
            <li>Evolution and extinction images: DinosaurPictures.org Ankylosaurus gallery.</li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-forest/10 bg-forest/5 p-5">
        <h3 className="font-serif text-2xl text-forest">How Sources Are Used</h3>
        <ul className="mt-4 space-y-3 text-base leading-8">
          <li>Home: image credited to Mini Museum.</li>
          <li>Geological Time Period: Late Cretaceous map from Encyclopaedia Britannica.</li>
          <li>Characteristics: size comparison image from the Ankylosaurus Dinopedia page.</li>
          <li>Discovery: Ankylosaurus image from National Geographic Kids.</li>
          <li>Evolution and Extinction: Ankylosaurus reconstruction from DinosaurPictures.org.</li>
        </ul>
      </div>

      <p>
        If you want, these entries can still be reformatted into MLA or APA style
        on the final sources page.
      </p>
    </Section>
  )
}

export default Sources
