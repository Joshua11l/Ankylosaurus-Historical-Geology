import Section from '../components/Section.jsx'
import { sources } from '../data/sources.js'

function Characteristics() {
  return (
    <Section
      eyebrow="Physical Characteristics"
      title="Body Armor and Tail Club"
      intro="Ankylosaurus was built for defense. It had bony armor plates covering its body, sharp spikes along its sides, a thick skull, and a powerful club at the end of its tail. It was one of the best-protected animals that ever lived."
      imageSrc="/images/ankylosaurus-head-fossil.jpg"
      imageAlt="Ankylosaurus skull fossil showing the heavily ossified cranium and fused bone plates characteristic of the species"
      imageLabel="Ankylosaurus Skull Fossil"
      imageFit="contain"
      source={sources.ankylosarusFossilWikipedia}
      noteTitle="How It Survived"
      noteBody="Ankylosaurus was slow and could not run away. Instead, it used its armor plates and tail club to defend itself. It did not escape from danger, it fought back."
      references={[sources.dinopediaAnkylosaurus, sources.natgeoKidsAnkylosaurus, sources.wikipediaAnkylosaurus]}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Bony Armor</h3>
          <p className="mt-3">
            Ankylosaurus had bony plates embedded in its skin. These plates were not attached
            to the bones underneath, they were part of the skin itself. The plates overlapped like
            tiles on a roof, with rows of plates and bumpy nodules covering the neck, back, and sides.
            Some plates were huge, more than 35 centimeters across. The neck had extra-thick bony rings for protection.
          </p>
        </div>
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Tail Club</h3>
          <p className="mt-3">
            The tail ended in a solid bony club made of fused armor plates. The tail had strong muscles
            and rigid vertebrae that formed a handle. The club alone weighed 30 to 45 kilograms. The tail
            was a weapon. Ankylosaurus could swing it hard and fast to break an attacker's bones.
          </p>
        </div>
      </div>

      <figure className="overflow-hidden rounded-2xl border border-forest/10 shadow-sm">
        <img
          src="/images/ankylosaurus-size.webp"
          alt="Size comparison showing Ankylosaurus beside a human silhouette — approximately 6–8 meters in length"
          className="h-56 w-full object-cover"
        />
        <figcaption className="border-t border-forest/10 bg-sand/20 px-4 py-3 text-sm text-stoneText/75">
          <span className="font-medium text-forest">Ankylosaurus Size Comparison.</span>{' '}
          This shows how big Ankylosaurus was compared to a human. Source:{' '}
          <a href={sources.dinopediaAnkylosaurus.url} target="_blank" rel="noreferrer" className="underline decoration-forest/25 underline-offset-4">
            Dinopedia
          </a>
        </figcaption>
      </figure>

      <p>
        Ankylosaurus was one of the biggest ankylosaurs. It was about 6 to 8 meters long and weighed
        4 to 8 tons. It had a wide body, short strong legs, and a very low center of gravity. This made
        it hard to knock over or flip. The skull was very wide and reinforced with thick bone, with
        no large openings. All this armor and bone provided head protection.
      </p>

      <p>
        Ankylosaurus was a plant eater. It ate low-growing plants. It had small, leaf-shaped teeth
        for eating soft plants, not tough leaves or woody material. Its body design shows a tradeoff:
        it was slow and could not run, but in exchange it had powerful armor and weapons.
      </p>

      <div className="rounded-2xl border border-forest/10 bg-forest/5 p-5">
        <h3 className="font-serif text-2xl text-forest">Size and Measurements</h3>
        <ul className="mt-3 space-y-2 text-base leading-8">
          <li><strong>Length:</strong> 6 to 8 meters long</li>
          <li><strong>Weight:</strong> 4 to 8 tons</li>
          <li><strong>Skull width:</strong> up to 65 centimeters wide</li>
          <li><strong>Armor plates:</strong> small bumps to large plates, the biggest over 35 centimeters</li>
          <li><strong>Tail club:</strong> 30 to 45 kilograms</li>
        </ul>
      </div>
    </Section>
  )
}

export default Characteristics
