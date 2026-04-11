import Section from '../components/Section.jsx'
import { sources } from '../data/sources.js'

function Discovery() {
  return (
    <Section
      eyebrow="Fossil Discovery"
      title="North American Fossil Record"
      intro="Ankylosaurus fossils have been discovered in Upper Cretaceous rocks of North America, especially in regions that now form parts of Alberta, Canada, and Montana, USA."
      imageSrc="/images/ankylosaurus.jpg"
      imageAlt="Ankylosaurus image used in the discovery section"
      imageLabel="Ankylosaurus Reconstruction"
      source={sources.natgeoKidsAnkylosaurus}
      noteTitle="Collection Record"
      noteBody="Known material is incomplete, so paleontologists rely on fragmentary skeletons, armor elements, and comparison with related ankylosaurs."
      references={[sources.natgeoKidsAnkylosaurus, sources.dinopediaAnkylosaurus, sources.britannicaCretaceous]}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Alberta, Canada</h3>
          <p className="mt-3">
            Fossil material from Alberta has contributed to the broader study of
            ankylosaur diversity in western Canada. These discoveries help place
            Ankylosaurus within a larger regional fossil record.
          </p>
        </div>
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Montana, USA</h3>
          <p className="mt-3">
            Montana preserves some of the most important latest Cretaceous dinosaur
            formations in North America. Material attributed to Ankylosaurus from
            this area links the animal to the Hell Creek ecosystem.
          </p>
        </div>
      </div>

      <p>
        The formal naming of <em>Ankylosaurus</em> in the early twentieth century
        relied on incomplete but distinctive fossil remains. As with many armored
        dinosaurs, isolated osteoderms and fragmentary skeletons make interpretation
        difficult, so the discovery story is closely tied to revision and
        comparison with related genera.
      </p>

      <div className="rounded-2xl border border-sand/60 bg-sand/25 p-5">
        <h3 className="font-serif text-2xl text-forest">Discovery Timeline</h3>
        <ul className="mt-3 space-y-3 text-base leading-8">
          <li>1900s: Initial fossil material described and compared with other armored dinosaurs.</li>
          <li>Mid-1900s: Additional specimens and armor fragments expanded anatomical interpretation.</li>
          <li>Modern studies: Ongoing reanalysis refines taxonomy, posture, and ecological role.</li>
        </ul>
      </div>

      <p>
        Alberta material, including casts and collection records at the University
        of Alberta, shows how widely ankylosaur research has been distributed across
        North American institutions.
      </p>
    </Section>
  )
}

export default Discovery
