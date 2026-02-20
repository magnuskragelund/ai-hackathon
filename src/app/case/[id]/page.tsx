import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CaseDetail() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      {/* Header */}
      <header className="border-b border-[#30363d] bg-[#161b22] px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] mb-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Tilbage til forsiden</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#f85149] text-sm">[CASE_001]</span>
            <h1 className="text-xl text-[#c9d1d9]">Konference Check-in</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Udfordringen */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>udfordringen
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p className="text-[#c9d1d9]">
              Når der afholdes konferencer, skal deltagere tjekkes ind, finde rundt i programmet
              og vælge de rette sessions. Værtene for konferencen skal kunne se hvem der er tilmeldt,
              registrere ankomne og sælge billetter i døren.
            </p>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22] my-6">
              <p className="text-[#8b949e] text-sm mb-1">JERES MISSION</p>
              <p className="text-[#c9d1d9]">
                Brug jeres AI-kodningsværktøj til at vibe-code en applikation, der gør
                konferenceoplevelsen bedre &mdash; enten for <strong className="text-[#7ee787]">deltagerne</strong>,
                for <strong className="text-[#7ee787]">konferenceholdet</strong>, eller begge dele.
                I bygger oven på et færdigt backend-API med realistisk testdata.
              </p>
            </div>
          </div>
        </section>

        {/* API-fundament */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>api-fundament
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p className="text-[#c9d1d9]">
              I stedet for et datasæt får I adgang til et <strong className="text-[#7ee787]">live REST API</strong> med
              fuld dokumentation. API&apos;et håndterer konferencer, billetter, gæster og check-ins &mdash; og
              er klar til brug med realistisk seed-data (~600 billetter fordelt på 3 konferencer).
            </p>

            <div className="border border-[#30363d] bg-[#161b22] overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#30363d]">
                    <th className="text-left p-3 text-[#58a6ff]">Ressource</th>
                    <th className="text-left p-3 text-[#58a6ff]">Beskrivelse</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { res: 'Konferencer', desc: '3 konferencer med navn, datoer og aktiv-status' },
                    { res: 'Billetter', desc: '~200 pr. konference med unikke billetnumre og QR-kode-potentiale' },
                    { res: 'Gæster', desc: 'Navngivne deltagere tilknyttet billetter' },
                    { res: 'Check-ins', desc: '30-40% allerede tjekket ind — resten venter på jer' },
                    { res: 'Extras', desc: 'Tilkøb som Dinner Party og Snack Buffet på billetterne' },
                    { res: 'Talks', desc: '10-15 talks pr. konference med speaker, track, tidspunkt og rum' },
                    { res: 'Evalueringer', desc: 'Deltager-ratings (1-5) og kommentarer på de enkelte talks' },
                    { res: 'Statistik', desc: 'Endpoints til realtidsstatistik, check-in-rater og evalueringsoversigter' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-[#30363d] last:border-0">
                      <td className="p-3 text-[#7ee787]">{row.res}</td>
                      <td className="p-3 text-[#8b949e]">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-[#c9d1d9]">Kom i gang:</p>
              <div className="space-y-1">
                <code className="block bg-[#161b22] border border-[#30363d] p-3 text-[#58a6ff] text-sm">
                  Swagger UI: &lt;base-url&gt;/api/v1/docs
                </code>
                <code className="block bg-[#161b22] border border-[#30363d] p-3 text-[#58a6ff] text-sm">
                  OpenAPI-spec: &lt;base-url&gt;/api/v1/openapi.json
                </code>
              </div>
              <p className="text-[#8b949e]">API-nøgler og base-URL udleveres ved hackathonens start.</p>
            </div>

            <div className="border border-[#d29922] bg-[#161b22] p-4">
              <p className="text-[#d29922] text-sm">
                <span className="mr-2">💡</span>
                <strong>Tip:</strong> Giv jeres AI-værktøj adgang til OpenAPI-specifikationen, så det kan
                forstå API&apos;et og generere integrationskode automatisk. Prøv fx: <em>&quot;Hent
                OpenAPI-specifikationen fra dette URL og byg en service-klasse, der wrapper alle endpoints.&quot;</em>
              </p>
            </div>
          </div>
        </section>

        {/* Del 1 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>del-1-fundamentet
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p className="text-[#c9d1d9]">
              Byg en fungerende applikation med jeres AI-kodningsværktøj, der indeholder:
            </p>

            <div className="border border-[#30363d] bg-[#161b22] p-4">
              <h3 className="text-[#d29922] mb-3">Deltager Check-in</h3>
              <ul className="space-y-2">
                {[
                  'En check-in-oplevelse, hvor en deltager kan blive tjekket ind — fx via billetnummer, søgning på navn, eller scanning af QR-kode',
                  'Vis bekræftelse med deltagerens navn, billetinfo og eventuelle tilkøb (Dinner Party, Snack Buffet)',
                  'Håndtér edge cases: allerede tjekket ind, ugyldig billet, ukendt billetnummer',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#a371f7] bg-[#161b22] p-4">
              <h3 className="text-[#a371f7] mb-3">Til designere, UX&apos;ere, PO&apos;er og BI&apos;ere</h3>
              <p className="text-[#8b949e] text-sm mb-3">
                AI-kodningsværktøjer kan generere UI og datavisualiseringer hurtigt, men det
                kræver mennesker at gøre det rigtig godt. Tænk over:
              </p>
              <ul className="space-y-2">
                {[
                  { label: 'Brugerrejsen', desc: 'En deltager vil noget andet end en medarbejder ved check-in-skranken — og noget helt tredje end en konferenceleder. Hvem bygger I til?' },
                  { label: 'Hastighed og flow', desc: 'Check-in skal gå hurtigt. Hvordan minimerer I klik og ventetid?' },
                  { label: 'Informationsarkitektur', desc: 'Hvad skal brugeren se først? Hvad er vigtigst — og hvad kan gemmes bag et klik?' },
                  { label: 'Fejlhåndtering', desc: 'Hvad sker der, når noget går galt? Hvordan kommunikerer I tydeligt til brugeren?' },
                ].map((item, idx) => (
                  <li key={idx} className="text-sm">
                    <span className="text-[#a371f7]">{item.label}:</span>{' '}
                    <span className="text-[#8b949e]">{item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#8b949e] text-sm mt-3">
                Skitser på papir eller whiteboard først. Tag et billede af jeres skitse og vis
                det til jeres AI-værktøj — beskriv hvad I ønsker, og iterér derfra.
                I styrer retningen, AI&apos;en bygger det.
              </p>
            </div>
          </div>
        </section>

        {/* Del 2 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>del-2-fri-leg
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <p className="text-[#8b949e] text-sm mb-4">
            Vælg de opgaver, som I kan nå, og som I synes er sjove!
          </p>

          <div className="space-y-3">
            {[
              {
                id: 'A',
                title: 'Konferenceoverblik og Status',
                items: [
                  'Vis et overblik over konferencen: navn, dato, beskrivelse',
                  'Vis status: hvor mange er tjekket ind vs. forventet antal',
                  'Giv brugeren en fornemmelse af, "hvor langt vi er" i check-in-processen',
                ],
              },
              {
                id: 'B',
                title: 'Filtrering og Søgning',
                items: [
                  'Lad brugeren søge efter gæster, billetter eller billetnumre',
                  'Filtrér på konference, check-in-status, eller tilkøb',
                  'En medarbejder ved skranken skal hurtigt kunne finde en deltager',
                ],
              },
              {
                id: 'C',
                title: 'QR-kode Scanner',
                items: [
                  'Byg en mobil-venlig check-in-app med kamera til QR-scanning',
                  'Mapping fra QR-kode til billetnummer → automatisk check-in via API\'et',
                  'Vis bekræftelse eller fejlbesked direkte på skærmen',
                ],
              },
              {
                id: 'D',
                title: 'Live Dashboard for Konferenceholdet',
                items: [
                  'Check-in-rate over tid (graf)',
                  'Antal tjekket ind vs. forventet (progress bar)',
                  'Tilkøbsoversigt: hvor mange med Dinner Party / Snack Buffet er ankommet?',
                  'Automatisk opdatering hvert 5.-10. sekund',
                ],
              },
              {
                id: 'E',
                title: 'Deltager Self-Service App',
                items: [
                  'Slå din billet op og se din status',
                  'Se konferenceprogrammet og vælg sessions/tracks',
                  'Deltag i en konkurrence eller quiz knyttet til konferencen',
                ],
              },
              {
                id: 'F',
                title: 'Talk-Evaluering',
                items: [
                  'Lad deltagere rate og kommentere talks (1-5 stjerner + fritekst)',
                  'Vis oversigt pr. talk — gennemsnitsrating, antal, ratingfordeling',
                  'Konferenceholdet kan se top- og bundratede talks og spotte mønstre',
                ],
              },
              {
                id: 'G',
                title: 'Wildcard: Jeres Egen Idé',
                items: [
                  'Har I en idé, der ikke står på listen? Afprøv den!',
                  'Måske et gamification-lag? En social feature? En accessibility-fokuseret løsning?',
                ],
              },
            ].map((task) => (
              <div key={task.id} className="border border-[#30363d] bg-[#161b22] p-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#7ee787] text-sm mt-1">[{task.id}]</span>
                  <div className="flex-1">
                    <h4 className="text-[#c9d1d9] mb-2">{task.title}</h4>
                    <ul className="space-y-1">
                      {task.items.map((item, idx) => (
                        <li key={idx} className="text-[#8b949e] text-sm">
                          <span className="text-[#7ee787] mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#30363d] bg-[#161b22] px-6 py-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-[#8b949e] text-sm">
          <span className="text-[#7ee787]">▊</span> Held og lykke! Husk at committe tidligt og ofte.
        </div>
      </footer>
    </div>
  );
}
