import type { Metadata } from 'next'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: "Politique de confidentialité de Zahir Connect. Comment nous collectons, utilisons et protégeons vos données personnelles conformément à la loi 09-08.",
  alternates: { canonical: '/politique-confidentialite' },
  robots: { index: true, follow: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="mb-8 font-display text-3xl font-bold text-foreground">Politique de Confidentialité</h1>

        <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">1. Collecte des données personnelles</h2>
            <p>
              Zahir Connect collecte des données personnelles uniquement lorsque vous les fournissez volontairement via
              nos formulaires de contact ou de recrutement. Les données collectées peuvent inclure : nom, prénom,
              adresse email, numéro de téléphone et tout autre information que vous choisissez de partager.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">2. Utilisation des données</h2>
            <p>Les données collectées sont utilisées exclusivement pour :</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Traiter votre candidature de recrutement</li>
              <li>Vous envoyer des informations commerciales si vous y avez consenti</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">3. Conservation des données</h2>
            <p>
              Vos données personnelles sont conservées pour la durée strictement nécessaire à la finalité pour laquelle
              elles ont été collectées, et en tout état de cause conformément aux dispositions légales applicables.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">4. Partage des données</h2>
            <p>
              Zahir Connect ne vend, ne loue et ne partage pas vos données personnelles à des tiers, sauf obligation
              légale ou avec votre consentement explicite.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">5. Vos droits</h2>
            <p>
              Conformément à la loi marocaine 09-08 relative à la protection des personnes physiques à l&apos;égard du
              traitement des données à caractère personnel, vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;opposition et de suppression de vos données. Pour exercer ces droits, contactez-nous à :{' '}
              <a href="mailto:contact@zahirconnect.com" className="text-primary hover:underline">
                contact@zahirconnect.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">6. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies à des fins de fonctionnement et d&apos;analyse d&apos;audience. En naviguant
              sur ce site, vous acceptez l&apos;utilisation de cookies. Vous pouvez configurer votre navigateur pour
              refuser les cookies.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">7. Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité :{' '}
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
