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
              Forestil dig, at du skal bygge værktøjer, der understøtter afviklingen af en konference.
              Deltagere skal tjekkes ind, finde rundt i programmet og vælge de rette sessions.
              Værten skal kunne se hvem der er tilmeldt, følge med i ankomster og håndtere
              billetter i døren. Der er masser at bygge — spørgsmålet er, hvad I vælger at løse.
            </p>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22] my-6">
              <p className="text-[#8b949e] text-sm mb-1">JERES MISSION</p>
              <p className="text-[#c9d1d9]">
                Brug jeres AI-kodningsværktøj til at vibe-code noget, der kan bruges i forbindelse med konference-check in &mdash; helt fra bunden. I vælger selv formatet: et website, en app, eller
                noget helt tredje. I vælger selv vinklen: støt{' '}
                <strong className="text-[#7ee787]">deltagerne</strong>, støt{' '}
                <strong className="text-[#7ee787]">værten</strong>, eller find på noget eget.
              </p>
            </div>
          </div>
        </section>

        {/* Data og kontekst */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>data-og-kontekst
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p className="text-[#c9d1d9]">
              I arbejder ikke med en tom skærm. Der er et live datasæt klar med realistiske data
              fra tre fiktive konferencer &mdash; billetter, gæster, check-ins, talks og evalueringer.
              I kan trække data ud, vise dem, reagere på dem og skrive tilbage til dem.
            </p>

            <div className="border border-[#30363d] bg-[#161b22] overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#30363d]">
                    <th className="text-left p-3 text-[#58a6ff]">Hvad er der data om</th>
                    <th className="text-left p-3 text-[#58a6ff]">Hvad indeholder det</th>
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
                    { res: 'Statistik', desc: 'Realtidsstatistik, check-in-rater og evalueringsoversigter' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-[#30363d] last:border-0">
                      <td className="p-3 text-[#7ee787]">{row.res}</td>
                      <td className="p-3 text-[#8b949e]">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[#8b949e] text-sm">
              Se afsnittet nedenfor for hvordan I forbinder til API&apos;et.
            </p>
          </div>
        </section>

        {/* Sådan kommer I i gang */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>sådan-kommer-i-i-gang
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Der er ikke én rigtig måde at angribe denne case på. Fold den tilgang ud, der passer til dig.
          </p>

          <div className="space-y-3">
            {/* Dev accordion */}
            <details className="border border-[#30363d] bg-[#161b22] group">
              <summary className="p-4 cursor-pointer flex items-center justify-between list-none hover:bg-[#1c2128]">
                <div className="flex items-center gap-3">
                  <span className="text-[#7ee787] text-sm">[DEV]</span>
                  <span className="text-[#c9d1d9]">Udviklere — Byg med din AI-kodningsagent</span>
                </div>
                <span className="text-[#8b949e] text-sm group-open:hidden">+ fold ud</span>
                <span className="text-[#8b949e] text-sm hidden group-open:inline">− fold ind</span>
              </summary>
              <div className="px-4 pb-4 pt-2 border-t border-[#30363d] space-y-3">
                <p className="text-[#8b949e] text-sm leading-relaxed">
                  Brug Claude Code eller et tilsvarende AI-kodningsværktøj som din primære samarbejdspartner
                  — ikke bare til at generere kode, men til at drive hele processen fremad.
                </p>
                <ul className="space-y-2">
                  {[
                    { label: 'Byg applikationen', desc: 'Lad agenten skrive selve koden. Beskriv hvad du vil opnå, ikke hvordan.' },
                    { label: 'Generér test-cases', desc: 'Bed agenten om at skrive tests løbende, så I ved hvornår noget virker.' },
                    { label: 'Lav dokumentation', desc: 'Agenten kan dokumentere kode og flows, mens I bygger.' },
                    { label: 'Integrer mod datasættet', desc: 'Giv agenten adgang til API-specifikationen, og lad den generere integrationen automatisk.' },
                  ].map((item, idx) => (
                    <li key={idx} className="text-sm">
                      <span className="text-[#7ee787]">{item.label}:</span>{' '}
                      <span className="text-[#8b949e]">{item.desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="border border-[#d29922] bg-[#0d1117] p-3 mt-2">
                  <p className="text-[#d29922] text-sm">
                    <strong>Tip:</strong> Prøv fx:{' '}
                    <em>&quot;Hent OpenAPI-specifikationen fra dette URL og byg en service-klasse, der wrapper alle endpoints.&quot;</em>
                  </p>
                  <div className="mt-2 space-y-1">
                    <code className="block bg-[#161b22] border border-[#30363d] p-2 text-[#58a6ff] text-xs">
                      Swagger UI: https://hackathon.ralphy.dk/api/v1/docs
                    </code>
                    <code className="block bg-[#161b22] border border-[#30363d] p-2 text-[#58a6ff] text-xs">
                      OpenAPI-spec: https://hackathon.ralphy.dk/api/v1/openapi.json
                    </code>
                  </div>
                </div>
              </div>
            </details>

            {/* Non-dev accordion */}
            <details className="border border-[#30363d] bg-[#161b22] group">
              <summary className="p-4 cursor-pointer flex items-center justify-between list-none hover:bg-[#1c2128]">
                <div className="flex items-center gap-3">
                  <span className="text-[#a371f7] text-sm">[NON-DEV]</span>
                  <span className="text-[#c9d1d9]">Ikke-udviklere — Research, design og prototyper</span>
                </div>
                <span className="text-[#8b949e] text-sm group-open:hidden">+ fold ud</span>
                <span className="text-[#8b949e] text-sm hidden group-open:inline">− fold ind</span>
              </summary>
              <div className="px-4 pb-4 pt-2 border-t border-[#30363d] space-y-3">
                <p className="text-[#8b949e] text-sm leading-relaxed">
                  Du behøver ikke skrive kode for at bidrage meningsfuldt. Her er tre veje ind:
                </p>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <span className="text-[#a371f7]">Claude Cowork</span>
                    <span className="text-[#8b949e]"> — Samarbejd i realtid med Claude om research, analyse og idéudvikling. Del skærm, stil spørgsmål, iterér på koncepter.</span>
                  </li>
                  <li className="text-sm">
                    <span className="text-[#a371f7]">Claude Projects</span>
                    <span className="text-[#8b949e]"> — Byg et projekt op med kontekst, instruktioner og filer, som Claude altid har adgang til. Godt til at holde tråden i en længere arbejdsproces.</span>
                  </li>
                  <li className="text-sm">
                    <span className="text-[#a371f7]">Figma Make</span>
                    <span className="text-[#8b949e]"> — Generér prototyper og frontend-design direkte fra en prompt. Skitser en idé, beskriv den, og lad AI&apos;en oversætte det til et visuelt udkast.</span>
                  </li>
                </ul>
                <p className="text-[#8b949e] text-sm mt-2">
                  Tegn på papir eller whiteboard. Tag et billede og brug det som input til Figma Make eller Claude.
                  I styrer retningen — AI&apos;en udfører det.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Adgang til API'et */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>adgang-til-apiet
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p className="text-[#c9d1d9]">
              Alt data tilgås via et REST API. Start her:
            </p>

            <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-3">
              <div>
                <p className="text-[#8b949e] text-sm mb-1">BASE URL</p>
                <code className="block bg-[#0d1117] border border-[#30363d] p-2 text-[#58a6ff] text-sm">
                  https://hackathon.ralphy.dk
                </code>
              </div>

              <div>
                <p className="text-[#8b949e] text-sm mb-1">DOKUMENTATION</p>
                <div className="space-y-1">
                  <code className="block bg-[#0d1117] border border-[#30363d] p-2 text-[#58a6ff] text-xs">
                    Swagger UI: https://hackathon.ralphy.dk/api/v1/docs
                  </code>
                  <code className="block bg-[#0d1117] border border-[#30363d] p-2 text-[#58a6ff] text-xs">
                    OpenAPI-spec: https://hackathon.ralphy.dk/api/v1/openapi.json
                  </code>
                </div>
              </div>

              <div>
                <p className="text-[#8b949e] text-sm mb-1">AUTENTIFICERING</p>
                <p className="text-[#c9d1d9] text-sm">
                  API&apos;et kræver en API-nøgle, som sendes med som header:
                </p>
                <code className="block bg-[#0d1117] border border-[#30363d] p-2 text-[#7ee787] text-xs mt-1">
                  X-API-Key: &lt;jeres-nøgle&gt;
                </code>
                <p className="text-[#d29922] text-sm mt-2">
                  API-nøgler udleveres på dagen.
                </p>
              </div>
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
              I del 1 er opgaven den samme for alle: byg en løsning, der dækker check-in-oplevelsen.
            </p>

            <div className="border border-[#30363d] bg-[#161b22] p-4">
              <h3 className="text-[#d29922] mb-3">Check-in</h3>
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
