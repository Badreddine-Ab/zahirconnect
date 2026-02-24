import type { Metadata } from 'next'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: "Politique de confidentialité de Zahir Connect. Comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD et à la loi marocaine 09-08.",
  alternates: { canonical: '/politique-confidentialite' },
  robots: { index: true, follow: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Politique de Confidentialité</h1>
        <p className="mb-10 text-xs text-muted-foreground">Dernière mise à jour : février 2026</p>

        <div className="prose prose-slate max-w-none space-y-10 text-sm leading-relaxed text-muted-foreground">

          {/* 1. Responsable du traitement */}
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement de vos données personnelles est :<br />
              <strong className="text-foreground">Zahir Connect</strong><br />
              Centre d&apos;affaires At Taoufiq 5, 4ème étage, Bureau 20, Marrakech, Maroc<br />
              Téléphone : +212 690 192 593<br />
              Email : <a href="mailto:contact@zahirconnect.com" className="text-primary hover:underline">contact@zahirconnect.com</a>
            </p>
          </div>

          {/* 2. Données collectées et bases légales */}
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">2. Données collectées et bases légales</h2>
            <p className="mb-3">Nous collectons des données uniquement lorsque vous les fournissez volontairement via nos formulaires.</p>

            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-xs">
                <thead className="bg-secondary/60">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Formulaire</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Données collectées</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Base légale</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Finalité</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3">Contact / devis</td>
                    <td className="px-4 py-3">Nom, prénom, email, téléphone, message</td>
                    <td className="px-4 py-3">Consentement (Art. 6.1.a RGPD)</td>
                    <td className="px-4 py-3">Répondre à votre demande commerciale</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Recrutement</td>
                    <td className="px-4 py-3">Nom, prénom, email, téléphone, ville, expérience</td>
                    <td className="px-4 py-3">Consentement (Art. 6.1.a RGPD)</td>
                    <td className="px-4 py-3">Traiter votre candidature</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-3">
              Nous ne collectons aucune donnée sensible au sens de l&apos;article 9 du RGPD (santé, origines ethniques, opinions politiques, etc.).
            </p>
          </div>

          {/* 3. Durées de conservation */}
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">3. Durées de conservation</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Formulaire de contact :</strong> 12 mois à compter de votre demande, puis suppression.</li>
              <li><strong className="text-foreground">Candidatures de recrutement :</strong> 2 ans à compter de la réception, puis suppression ou archivage anonymisé.</li>
              <li><strong className="text-foreground">Données de navigation (cookies fonctionnels) :</strong> 13 mois maximum.</li>
            </ul>
            <p className="mt-3">
              À l&apos;expiration de ces délais, vos données sont supprimées ou rendues anonymes de façon irréversible.
            </p>
          </div>

          {/* 4. Destinataires et transferts */}
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">4. Destinataires et transferts internationaux</h2>
            <p className="mb-3">
              Zahir Connect ne vend, ne loue et ne partage pas vos données personnelles à des tiers à des fins commerciales.
              Vos données peuvent être transmises aux sous-traitants suivants dans le cadre strict de la prestation de service :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Google LLC (États-Unis)</strong> — Stockage des candidatures via Google Sheets ;
                affichage de cartes via Google Maps (uniquement avec votre consentement préalable).
                Ces transferts sont encadrés par les Clauses Contractuelles Types (CCT) approuvées par la Commission européenne
                et la décision d&apos;adéquation applicable. Google LLC est certifié au Data Privacy Framework (DPF) UE–États-Unis.
              </li>
              <li>
                <strong className="text-foreground">Vercel Inc. (États-Unis)</strong> — Hébergement du site web.
                Transfert couvert par le Data Privacy Framework UE–États-Unis.
              </li>
            </ul>
            <p className="mt-3">
              En dehors de ces sous-traitants, aucun transfert hors Maroc ou hors UE/EEE n&apos;est effectué sans votre consentement explicite
              ou sans garanties appropriées conformément au RGPD (Art. 44-46) et à la loi 09-08.
            </p>
          </div>

          {/* 5. Cookies */}
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">5. Cookies</h2>
            <p className="mb-3">
              Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite de notre site. Nous distinguons :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Cookies strictement nécessaires :</strong> indispensables au fonctionnement du site
                (mémorisation de vos préférences de cookies). Déposés sans consentement préalable
                (Art. 5.3 Directive ePrivacy — exemption fonctionnelle).
              </li>
              <li>
                <strong className="text-foreground">Cookies tiers (Google Maps) :</strong> déposés uniquement si vous cliquez sur
                &quot;Afficher la carte&quot; ou si vous avez accepté via notre bandeau. Vous pouvez refuser ou retirer ce consentement
                à tout moment en rechargeant la page sans accepter.
              </li>
            </ul>
            <p className="mt-3">
              Vous pouvez également configurer votre navigateur pour bloquer ou supprimer les cookies
              (paramètres &gt; confidentialité). La désactivation des cookies tiers n&apos;affecte pas la navigation sur ce site.
            </p>
          </div>

          {/* 6. Vos droits */}
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">6. Vos droits</h2>
            <p className="mb-3">
              Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679)
              et à la loi marocaine 09-08 relative à la protection des personnes physiques,
              vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">Droit d&apos;accès (Art. 15 RGPD)</strong> — obtenir une copie de vos données.</li>
              <li><strong className="text-foreground">Droit de rectification (Art. 16 RGPD)</strong> — corriger des données inexactes.</li>
              <li><strong className="text-foreground">Droit à l&apos;effacement (Art. 17 RGPD)</strong> — demander la suppression de vos données.</li>
              <li><strong className="text-foreground">Droit à la limitation du traitement (Art. 18 RGPD)</strong> — restreindre temporairement l&apos;utilisation de vos données.</li>
              <li><strong className="text-foreground">Droit à la portabilité (Art. 20 RGPD)</strong> — recevoir vos données dans un format structuré et lisible.</li>
              <li><strong className="text-foreground">Droit d&apos;opposition (Art. 21 RGPD)</strong> — vous opposer au traitement de vos données.</li>
              <li><strong className="text-foreground">Retrait du consentement</strong> — à tout moment, sans affecter le traitement antérieur.</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:contact@zahirconnect.com" className="text-primary hover:underline">
                contact@zahirconnect.com
              </a>
              . Nous répondrons dans un délai maximum de <strong className="text-foreground">30 jours</strong>.
            </p>
          </div>

          {/* 7. Droit de réclamation */}
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">7. Droit de réclamation auprès d&apos;une autorité de contrôle</h2>
            <p className="mb-3">
              Si vous estimez que le traitement de vos données ne respecte pas la réglementation applicable,
              vous avez le droit d&apos;introduire une réclamation auprès de l&apos;autorité de protection des données compétente :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Pour les résidents marocains :</strong>{" "}
                Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP) —{" "}
                <a href="https://www.cndp.ma" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cndp.ma</a>
              </li>
              <li>
                <strong className="text-foreground">Pour les résidents de l&apos;Union européenne :</strong>{" "}
                l&apos;autorité de protection des données de votre pays de résidence
                (ex. CNIL pour la France, APD pour la Belgique, FDPIC pour la Suisse).
              </li>
            </ul>
          </div>

          {/* 8. Sécurité */}
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">8. Sécurité des données</h2>
            <p>
              Zahir Connect met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
              contre tout accès non autorisé, perte ou divulgation. Le site est hébergé sur Vercel avec chiffrement TLS
              en transit. L&apos;accès aux données collectées est limité aux seuls collaborateurs habilités.
            </p>
          </div>

          {/* 9. Modifications */}
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">9. Modifications de cette politique</h2>
            <p>
              Nous pouvons mettre à jour cette politique pour refléter des évolutions légales ou de nos pratiques.
              La date de dernière mise à jour figurant en haut de cette page sera modifiée en conséquence.
              Pour toute modification substantielle, nous vous en informerons par email si vous nous avez communiqué votre adresse.
            </p>
          </div>

          {/* 10. Contact */}
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground">10. Contact</h2>
            <p>
              Pour toute question relative à cette politique ou à vos données personnelles :{" "}
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