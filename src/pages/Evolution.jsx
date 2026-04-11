import Section from '../components/Section.jsx'
import { sources } from '../data/sources.js'

function Evolution() {
  return (
    <Section
      eyebrow="Evolutionary Significance"
      title="How Ankylosaurs Developed Specialized Defense"
      intro="Ankylosaurus represents one of the most extreme examples of defensive evolution among dinosaurs. Its anatomy shows how some herbivores adapted to survive in ecosystems dominated by large predators."
      imageSrc="/images/ankylosaurus-dinosaurpictures.jpg"
      imageAlt="Ankylosaurus reconstruction walking through a forested landscape"
      imageLabel="Ankylosaurus Reconstruction"
      source={sources.dinosaurPicturesAnkylosaurus}
      noteTitle="Why It Matters"
      noteBody="Ankylosaurs show how defense can become a defining evolutionary strategy, with armor and tail weapons shaped over long intervals of geologic time."
      references={[sources.dinosaurPicturesAnkylosaurus, sources.dinopediaAnkylosaurus, sources.natgeoKidsAnkylosaurus]}
    >
      <p>
        Ankylosaurs as a group evolved from earlier ornithischian dinosaurs and
        gradually developed more elaborate armor systems. Over time, these
        protective structures became thicker, more organized, and more integrated
        with the animal&apos;s skeleton and musculature.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Defense Mechanisms</h3>
          <p className="mt-3">
            The tail club is especially important because it suggests a shift from
            passive protection to active defense. Instead of merely absorbing
            damage, Ankylosaurus may have been able to injure attackers.
          </p>
        </div>
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Relationships</h3>
          <p className="mt-3">
            Ankylosaurus belongs within Ankylosauridae, a family of heavily armored
            dinosaurs that includes other club-tailed forms. Comparing skulls,
            armor, and limb proportions helps clarify these relationships.
          </p>
        </div>
      </div>

      <p>
        From a historical geology perspective, the evolution of ankylosaurs
        illustrates how changing ecosystems influence anatomy. Predation pressure,
        plant distribution, and environmental stability likely shaped which traits
        became successful over millions of years.
      </p>

      <div className="rounded-2xl border border-forest/10 bg-forest/5 p-5">
        <h3 className="font-serif text-2xl text-forest">Evolutionary Pattern</h3>
        <p className="mt-3">
          Early ankylosaurs had armor, but later ankylosaurids developed more
          specialized tail weapons and heavier cranial ornamentation. Ankylosaurus
          sits near the most derived end of that trend.
        </p>
      </div>
    </Section>
  )
}

export default Evolution
