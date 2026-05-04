import Section from '../components/Section.jsx'
import { sources } from '../data/sources.js'

function Extinction() {
  return (
    <Section
      eyebrow="Extinction"
      title="The End of the Dinosaurs"
      intro="Ankylosaurus went extinct 66 million years ago, like all non-avian dinosaurs. The cause was a massive asteroid that hit Earth at a place called Chicxulub in Mexico. This is one of the most important and well-understood events in Earth history."
      imageSrc="/images/ankylosaurus-dinosaurpictures.jpg"
      imageAlt="Ankylosaurus in its Late Cretaceous habitat — an environment that would be destroyed within years of the Chicxulub impact"
      imageLabel="Late Cretaceous Ankylosaurus"
      source={sources.dinosaurPicturesAnkylosaurus}
      noteTitle="Evidence of Impact"
      noteBody="Around the world, scientists find a thin layer of rock from 66 million years ago that contains a metal called iridium. This layer also has shocked crystals and glass beads. These are all signs of the asteroid impact."
      references={[sources.britannicaCretaceous, sources.natgeoKidsAnkylosaurus, sources.britannicaAnkylosaurus]}
    >
      <p>
        A huge asteroid hit Earth about 66 million years ago near Chicxulub in Mexico. The asteroid
        was 10 to 15 kilometers wide. The impact created a crater about 180 kilometers across.
        This happened exactly at the time when all non-avian dinosaurs went extinct.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Evidence at the Boundary</h3>
          <p className="mt-3">
            A thin layer of rock marks the extinction at the same level around the world. It contains
            the metal iridium from the asteroid, shocked crystals from the impact pressure, and glass
            beads from melted rock. There is also a thick layer of soot from massive wildfires
            that spread across the continents.
          </p>
        </div>
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">What Happened Next</h3>
          <p className="mt-3">
            The impact threw dust, ash, and smoke high into the air. Sunlight was blocked for about
            a year or two, making Earth very cold and dark. Plants died because they could not get sunlight.
            Without plants, the animals that ate them starved. Wildfires, tsunamis, and acid rain
            destroyed everything across the continents.
          </p>
        </div>
      </div>

      <p>
        The world stayed cold and dark for years. Acid rain damaged the land. Life struggled for
        thousands of years after the impact. Even though Ankylosaurus was armored and protected,
        it could not survive when all the plants died. Without plants to eat, there was no food,
        and the herbivores starved.
      </p>

      <p>
        Around the same time as the asteroid impact, a massive volcano in India called the Deccan
        Traps was erupting. This volcano was throwing ash and gases into the air. The combination
        of the asteroid impact and the volcanoes working together may have caused the extinction.
      </p>

      <div className="rounded-2xl border border-sand/60 bg-sand/25 p-5">
        <h3 className="font-serif text-2xl text-forest">Why This Matters</h3>
        <p className="mt-3">
          The extinction of Ankylosaurus is part of a much bigger story. The extinction boundary
          66 million years ago is one of the most important markers in Earth history. It marks
          the end of the Age of Dinosaurs, which lasted 165 million years. After the dinosaurs
          went extinct, mammals took over. About 75% of all life on Earth died at this boundary.
          No amount of armor could protect an animal when the whole planet's ecosystems collapse.
        </p>
      </div>
    </Section>
  )
}

export default Extinction
