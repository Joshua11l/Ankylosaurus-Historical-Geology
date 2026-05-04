import Section from '../components/Section.jsx'
import { sources } from '../data/sources.js'

function TimePeriod() {
  return (
    <Section
      eyebrow="Geological Time Period"
      title="Late Cretaceous Period"
      intro="Ankylosaurus lived about 68 to 66 million years ago during the last stage of the Cretaceous Period. This was the final chapter before all non-avian dinosaurs went extinct."
      imageSrc="/images/cretaceous-britannica.webp"
      imageAlt="Late Cretaceous world map showing landmasses and the Western Interior Seaway"
      imageLabel="Late Cretaceous World Map"
      imageFit="contain"
      source={sources.britannicaCretaceous}
      noteTitle="Geologic Context"
      noteBody="Ankylosaurus lived during the final 2 million years of the Cretaceous Period, right up to the extinction event 66 million years ago."
      references={[sources.britannicaCretaceous, sources.britannicaAnkylosaurus, sources.natgeoKidsAnkylosaurus]}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Final Stage of the Cretaceous</h3>
          <p className="mt-3">
            The last stage of the Cretaceous Period lasted from 72 to 66 million years ago. Ankylosaurus
            lived during the very end of this period, from about 68 to 66 million years ago. This was
            right before the extinction event that ended the age of dinosaurs.
          </p>
        </div>
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Where Fossils Are Found</h3>
          <p className="mt-3">
            Ankylosaurus fossils come from two rock formations: the Hell Creek Formation in Montana
            and South Dakota, and the Lance Formation in Wyoming. These rock layers were formed from
            ancient river floodplains and contain some of the best-preserved Late Cretaceous fossils
            in North America.
          </p>
        </div>
      </div>

      <p>
        The Late Cretaceous world was much warmer than today. There were no ice caps at the poles,
        and sea levels were much higher. A large shallow sea called the Western Interior Seaway
        covered much of the middle of North America. Ankylosaurus lived on the western side of
        this landscape.
      </p>

      <figure className="overflow-hidden rounded-2xl border border-forest/10 shadow-sm">
        <img
          src="/images/ankylosaurus-herbivores.jpg"
          alt="Ankylosaurus among other Late Cretaceous herbivorous dinosaurs sharing its ecosystem"
          className="h-auto w-full object-contain"
        />
        <figcaption className="border-t border-forest/10 bg-sand/20 px-4 py-3 text-sm text-stoneText/75">
          <span className="font-medium text-forest">Ankylosaurus among Late Cretaceous herbivores.</span>{' '}
          Ankylosaurus shared its ecosystem with Triceratops, Edmontosaurus, and other large herbivores on the Laramidian coastal plain. Source:{' '}
          <a href={sources.britannicaAnkylosaurus.url} target="_blank" rel="noreferrer" className="underline decoration-forest/25 underline-offset-4">
            Encyclopaedia Britannica
          </a>
        </figcaption>
      </figure>

      <p>
        Rivers, wetlands, and floodplains near the seaway created humid areas full of plants. Ferns,
        flowering plants, and conifers grew there. These low-lying areas are where Ankylosaurus bones
        and armor were buried and turned into fossils.
      </p>

      <p>
        Ankylosaurus shared its world with famous dinosaurs like Tyrannosaurus rex, Triceratops,
        and Edmontosaurus. By studying what animals lived together, scientists can understand how
        they hunted, ate, and survived. The presence of large predators likely pushed herbivores
        to develop better armor and defenses.
      </p>

      <div className="rounded-2xl border border-sand/70 bg-sand/25 p-5">
        <h3 className="font-serif text-2xl text-forest">Late Cretaceous World</h3>
        <ul className="mt-3 space-y-2 text-base leading-8">
          <li><strong>Climate:</strong> Warm and humid, much warmer than today.</li>
          <li><strong>Sea level:</strong> Much higher than today, with a large seaway across the middle of North America.</li>
          <li><strong>Plants:</strong> Ferns, flowering plants, and trees covered the floodplains.</li>
          <li><strong>Fossils:</strong> The Hell Creek and Lance formations were river valleys where bones could be buried and preserved.</li>
        </ul>
      </div>
    </Section>
  )
}

export default TimePeriod
