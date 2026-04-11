import Section from '../components/Section.jsx'
import { sources } from '../data/sources.js'

function Extinction() {
  return (
    <Section
      eyebrow="Extinction"
      title="End-Cretaceous Environmental Collapse"
      intro="Like all non-avian dinosaurs, Ankylosaurus disappeared during the end-Cretaceous extinction event about 66 million years ago. This event marks a major turning point in geologic and biological history."
      imageSrc="/images/ankylosaurus-dinosaurpictures.jpg"
      imageAlt="Ankylosaurus in a darkened Late Cretaceous environment"
      imageLabel="Late Cretaceous Ankylosaurus"
      source={sources.dinosaurPicturesAnkylosaurus}
      noteTitle="Boundary Event"
      noteBody="The extinction record is tied to a global boundary horizon that marks the end of the Cretaceous and the start of the Paleogene."
      references={[sources.britannicaCretaceous, sources.natgeoKidsAnkylosaurus, sources.dinosaurPicturesAnkylosaurus]}
    >
      <p>
        The most widely accepted explanation for this extinction is the impact of a
        large asteroid near Chicxulub in present-day Mexico. Evidence includes a
        global iridium-rich layer, shocked quartz, and a crater of the correct age.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Immediate Effects</h3>
          <p className="mt-3">
            The impact likely triggered fires, tsunamis, atmospheric dust loading,
            and rapid disruption of sunlight. Photosynthesis would have declined,
            weakening food chains from the base upward.
          </p>
        </div>
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Longer-Term Collapse</h3>
          <p className="mt-3">
            Cooling, acid rain, and ecological instability could have prevented
            large-bodied herbivores and their predators from recovering. Even highly
            defended dinosaurs were vulnerable to ecosystem failure.
          </p>
        </div>
      </div>

      <p>
        Ankylosaurus therefore demonstrates an important geologic principle: strong
        anatomical adaptation does not protect species from planet-scale
        environmental change. Its extinction is tied less to direct predation and
        more to the collapse of the broader systems that supported life.
      </p>

      <div className="rounded-2xl border border-sand/60 bg-sand/25 p-5">
        <h3 className="font-serif text-2xl text-forest">Geologic Importance</h3>
        <p className="mt-3">
          The extinction of Ankylosaurus is not only a biological story. It is also
          a geologic marker tied to one of the best-known global boundaries in Earth
          history.
        </p>
      </div>
    </Section>
  )
}

export default Extinction
