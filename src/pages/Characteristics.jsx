import Section from '../components/Section.jsx'
import { sources } from '../data/sources.js'

function Characteristics() {
  return (
    <Section
      eyebrow="Physical Characteristics"
      title="Armor, Tail Club, and Defensive Anatomy"
      intro="Ankylosaurus is best known for a body plan built around protection. Its low, wide form combined armor, spikes, and a specialized tail club, giving it a distinctive silhouette among Late Cretaceous herbivores."
      imageSrc="/images/ankylosaurus-size.webp"
      imageAlt="Size comparison graphic for Ankylosaurus beside a human silhouette"
      imageLabel="Ankylosaurus Size Comparison"
      imageFit="contain"
      source={sources.dinopediaAnkylosaurus}
      noteTitle="Functional Interpretation"
      noteBody="Its anatomy suggests a slow-moving herbivore that relied on body armor, low posture, and a reinforced tail for defense."
      references={[sources.dinopediaAnkylosaurus, sources.natgeoKidsAnkylosaurus, sources.dinosaurPicturesAnkylosaurus]}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Armor Plates</h3>
          <p className="mt-3">
            Bony deposits called osteoderms were embedded in the skin. These
            plates formed a protective covering across the neck, back, and flanks,
            reducing vulnerability to large predators.
          </p>
        </div>
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Tail Club</h3>
          <p className="mt-3">
            The tail ended in a dense bony club supported by modified vertebrae.
            Paleontologists interpret this as an active defense structure capable of
            delivering powerful lateral strikes.
          </p>
        </div>
      </div>

      <p>
        Ankylosaurus was a large-bodied dinosaur, likely reaching around 6 to 8
        meters in length. Its broad torso, short limbs, and low center of gravity
        would have helped it remain stable while resisting attacks or swinging the
        tail.
      </p>

      <p>
        As a herbivore, it probably fed on low-growing vegetation. Its head shape
        and tooth structure suggest browsing rather than high-reaching feeding. The
        body design therefore reflects a tradeoff: slower movement, but much higher
        defensive capacity.
      </p>

      <div className="rounded-2xl border border-forest/10 bg-forest/5 p-5">
        <h3 className="font-serif text-2xl text-forest">Defensive Adaptations</h3>
        <p className="mt-3">
          Together, the osteoderms, broad body, reinforced skull, and tail club
          suggest an evolutionary strategy centered on survival through passive and
          active defense rather than escape speed.
        </p>
      </div>
    </Section>
  )
}

export default Characteristics
