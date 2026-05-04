import Section from '../components/Section.jsx'
import { sources } from '../data/sources.js'

function Evolution() {
  return (
    <Section
      eyebrow="Evolutionary Significance"
      title="How Ankylosaurs Evolved"
      intro="Ankylosaurus is the most advanced ankylosaur we know of. It shows how over 100 million years of evolution created a dinosaur with incredible armor and weapons. Predators and competition pushed ankylosaurs to develop better and better defenses."
      imageSrc="/images/ankylosaurus-dinosaurpictures.jpg"
      imageAlt="Ankylosaurus reconstruction walking through a forested Late Cretaceous landscape"
      imageLabel="Ankylosaurus Reconstruction"
      source={sources.dinosaurPicturesAnkylosaurus}
      noteTitle="Most Evolved Ankylosaur"
      noteBody="Ankylosaurus had the thickest skull, the biggest tail club, and the most complete armor coverage of any ankylosaur. It shows how armor kept improving and integrating over 100 million years."
      references={[sources.dinosaurPicturesAnkylosaurus, sources.dinopediaAnkylosaurus, sources.wikipediaAnkylosaurus]}
    >
      <p>
        Ankylosaurs evolved from earlier dinosaurs and first appeared in the fossil record about
        165 million years ago. Over the next 100 million years, ankylosaurs split into two main
        families. One family, Ankylosauridae, had tail clubs and includes Ankylosaurus. The other
        family, Nodosauridae, did not have tail clubs but had large spikes on their shoulders.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Ankylosaurus and Its Relatives</h3>
          <p className="mt-3">
            Ankylosaurus was related to other ankylosaurs with thick skulls and large tail clubs.
            The family Ankylosauridae includes famous dinosaurs like Euoplocephalus from Canada,
            which also had armor and a tail club. All ankylosaurids share these features.
          </p>
        </div>
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">Evolution of Defense</h3>
          <p className="mt-3">
            Early ankylosaurs had basic armor but no tail clubs. Later, the tail club evolved.
            This was a big change. Early armor was passive, just soaking up hits. The tail club
            was active, meaning the dinosaur could swing it and actually hurt an attacker. The
            tail club could break bones.
          </p>
        </div>
      </div>

      <p>
        The evolution of ankylosaurs shows an important principle: body shape matches the environment.
        Large predators like Tyrannosaurus hunted these herbivores. This predation pressure caused
        ankylosaurs to develop better and better armor and weapons over millions of years. Ankylosaurus
        lived with Tyrannosaurus, and this may have driven it to evolve the ultimate armor and weapons.
      </p>

      <figure className="overflow-hidden rounded-2xl border border-forest/10 shadow-sm">
        <img
          src="/images/ankylosaurus-herbivorous-dinosaurs.webp"
          alt="Ankylosaurus as a herbivorous dinosaur in its natural Late Cretaceous habitat"
          className="h-56 w-full object-cover"
        />
        <figcaption className="border-t border-forest/10 bg-sand/20 px-4 py-3 text-sm text-stoneText/75">
          <span className="font-medium text-forest">Ankylosaurus herbivorous lifestyle.</span>{' '}
          As a specialized herbivore, Ankylosaurus evolved its armor and tail club defensive system in response to predation pressure from large theropods. Source:{' '}
          <a href={sources.ankylosaurusHerbivore.url} target="_blank" rel="noreferrer" className="underline decoration-forest/25 underline-offset-4">
            Britannica
          </a>
        </figcaption>
      </figure>

      <div className="rounded-2xl border border-forest/10 bg-forest/5 p-5">
        <h3 className="font-serif text-2xl text-forest">Timeline of Ankylosaur Evolution</h3>
        <ul className="mt-3 space-y-2 text-base leading-8">
          <li><strong>165 million years ago:</strong> The first ankylosaurs appear with basic armor.</li>
          <li><strong>130 to 125 million years ago:</strong> The ankylosaur family Ankylosauridae forms, and tail clubs start to appear.</li>
          <li><strong>76 to 68 million years ago:</strong> Advanced ankylosaurs like Euoplocephalus are common in North America.</li>
          <li><strong>68 to 66 million years ago:</strong> Ankylosaurus lives, the biggest and most armored ankylosaur ever.</li>
          <li><strong>66 million years ago:</strong> All ankylosaurs go extinct.</li>
        </ul>
      </div>
    </Section>
  )
}

export default Evolution
