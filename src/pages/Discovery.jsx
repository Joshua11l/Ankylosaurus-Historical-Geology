import Section from '../components/Section.jsx'
import { sources } from '../data/sources.js'

function Discovery() {
  return (
    <Section
      eyebrow="Fossil Discovery"
      title="How We Know About Ankylosaurus"
      intro="Ankylosaurus is known from only a few fossils found in Wyoming, Montana, and South Dakota. The fossils are incomplete, with many bones missing. This makes each fossil discovery very important for science."
      imageSrc="/images/ankylosaurus.jpg"
      imageAlt="Ankylosaurus full-body reconstruction based on known fossil material"
      imageLabel="Ankylosaurus Reconstruction"
      source={sources.natgeoKidsAnkylosaurus}
      noteTitle="What We Have Found"
      noteBody="Only three partial skulls and some body bones are known. Scientists use armor plates and fossils of related dinosaurs to understand what the whole animal looked like."
      references={[sources.natgeoKidsAnkylosaurus, sources.dinopediaAnkylosaurus, sources.britannicaAnkylosaurus]}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">The First Discovery</h3>
          <p className="mt-3">
            The first Ankylosaurus fossil was found by paleontologist Barnum Brown in 1906 in
            Wyoming. It included a partial skull and some body bones. Brown named and described
            Ankylosaurus in 1908. This original fossil is still used as the example of what
            Ankylosaurus looked like.
          </p>
        </div>
        <div className="rounded-2xl bg-background p-5">
          <h3 className="font-serif text-2xl text-forest">More Fossils Found</h3>
          <p className="mt-3">
            More Ankylosaurus fossils were found in Montana and South Dakota in the Hell Creek
            Formation. One was found around 1910, another in 1947. The Hell Creek Formation
            is one of the most important places for Late Cretaceous fossils in North America.
          </p>
        </div>
      </div>

      <p>
        Barnum Brown officially named Ankylosaurus in 1908. The name comes from Greek words meaning
        "fused lizard," which refers to all the fused bones in the skull and tail. The species name,
        magniventris, is Latin for "big belly," describing its wide barrel-shaped body.
      </p>

      <div className="rounded-2xl border border-sand/60 bg-sand/25 p-5">
        <h3 className="font-serif text-2xl text-forest">Timeline of Discoveries</h3>
        <ul className="mt-3 space-y-3 text-base leading-8">
          <li><strong>1906:</strong> Barnum Brown finds the first Ankylosaurus fossil in Wyoming.</li>
          <li><strong>1908:</strong> Brown names and describes Ankylosaurus.</li>
          <li><strong>1910:</strong> Another skull is found, giving scientists more information.</li>
          <li><strong>1947:</strong> A third partial skull is collected.</li>
          <li><strong>Today:</strong> Scientists continue to study Ankylosaurus fossils, learning about how it moved, used its tail, and lived.</li>
        </ul>
      </div>

      <p>
        The fact that Ankylosaurus fossils are so rare tells scientists something important. Either
        there were not many Ankylosaurus animals in these ecosystems, or the conditions did not preserve
        their bones well. Rivers and floodplains do not always preserve bones equally. Understanding
        why some fossils are rare helps scientists figure out what animals actually lived together
        in the Late Cretaceous.
      </p>
    </Section>
  )
}

export default Discovery
