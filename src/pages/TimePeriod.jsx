import Section from '../components/Section.jsx'
import { sources } from '../data/sources.js'

function TimePeriod() {
  return (
    <Section
      eyebrow="Geological Time Period"
      title="Late Cretaceous Period"
      intro="The Ankylosaurus lived approximately 68 to 66 million years ago during the final stage of the Cretaceous Period. This interval preserves the last chapter of non-avian dinosaur history before the end-Cretaceous extinction."
      imageSrc="/images/cretaceous-britannica.webp"
      imageAlt="Late Cretaceous world map showing landmasses and seas"
      imageLabel="Late Cretaceous World Map"
      imageFit="contain"
      source={sources.britannicaCretaceous}
      noteTitle="Geologic Context"
      noteBody="Ankylosaurus lived near the end of the Maastrichtian, only a short interval before the Cretaceous-Paleogene boundary at 66.0 million years ago."
      references={[sources.britannicaCretaceous, sources.natgeoKidsAnkylosaurus, sources.dinosaurPicturesAnkylosaurus]}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Time Range</h3>
          <p className="mt-3">
            Fossils assigned to <em>Ankylosaurus magniventris</em> come from the
            latest Cretaceous, especially rocks dated to roughly 68 to 66 million
            years ago. This places the animal close to the end of the Mesozoic Era.
          </p>
        </div>
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Environment</h3>
          <p className="mt-3">
            Western North America included coastal plains, river channels,
            floodplains, and forested lowlands. Sediments from these landscapes
            later preserved bones, armor fragments, and associated plant material.
          </p>
        </div>
      </div>

      <p>
        The Late Cretaceous climate was generally warm, with no large polar ice
        sheets and broad regions influenced by high sea levels. Inland seaways and
        shifting river systems created humid habitats capable of supporting diverse
        plant communities, including ferns, flowering plants, and conifers.
      </p>

      <p>
        Ankylosaurus shared this world with other dinosaurs such as Tyrannosaurus,
        Triceratops, Edmontosaurus, and smaller theropods. Studying these
        associations helps reconstruct food webs, predator-prey interactions, and
        the ecological pressures that may have favored heavily armored herbivores.
      </p>

      <div className="rounded-2xl border border-sand/70 bg-sand/25 p-5">
        <h3 className="font-serif text-2xl text-forest">Environmental Setting</h3>
        <p className="mt-3">
          Shifting shorelines, broad floodplains, and warm climates shaped the
          latest Cretaceous landscapes of western North America. These conditions
          supported dense vegetation and diverse dinosaur communities.
        </p>
      </div>
    </Section>
  )
}

export default TimePeriod
