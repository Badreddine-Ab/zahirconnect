import type { Metadata } from 'next'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: "Mentions légales de Zahir Connect — informations sur l'éditeur, l'hébergement et les conditions d'utilisation du site zahirconnect.ma.",
  alternates: { canonical: '/mentions-legales' },
  robots: { index: true, follow: false },
}

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="mb-8 font-display text-3xl font-bold text-foreground">Mentions Légales</h1>

        <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">Éditeur du site</h2>
            <p>
              <strong>Zahir Connect</strong><br />
              Bureau 18, 5ème étage, Centre d'affaires Bergis, 3 Avenue Safi<br />
              Marrakech, Maroc<br />
              Téléphone : +212 690 192 593<br />
              Email : contact@zahirconnect.com
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos, icônes) sont la propriété exclusive
              de Zahir Connect et sont protégés par les lois marocaines et internationales relatives à la propriété
              intellectuelle. Toute reproduction, représentation ou diffusion, en tout ou en partie, est interdite sans
              l&apos;accord préalable et écrit de Zahir Connect.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">Limitation de responsabilité</h2>
            <p>
              Zahir Connect s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce
              site. Toutefois, Zahir Connect ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des
              informations mises à disposition sur ce site.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à :{' '}
              <a href="mailto:contact@zahirconnect.com" className="text-primary hover:underline">
                contact@zahirconnect.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
