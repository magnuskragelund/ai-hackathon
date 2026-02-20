import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function UxDesignQuest() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      <header className="border-b border-[#30363d] bg-[#161b22] px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] mb-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Tilbage til forsiden</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#a371f7] text-sm">[NON-DEV]</span>
            <h1 className="text-xl text-[#c9d1d9]">UX & Design</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Intro */}
        <section className="mb-10">
          <div className="space-y-4 leading-relaxed">
            <div className="border border-[#30363d] bg-[#161b22] p-4">
              <p className="text-[#7ee787] text-sm mb-2">Efter denne quest kan I:</p>
              <ul className="space-y-1">
                {[
                  'Generere et komplet persona-dokument og brugerrejser som færdige, delebare artefakter',
                  'Indsamle syntetisk user research og destillere den til et skriftligt designgrundlag',
                  'Omsætte en papirskitse til en klikbar prototype med hjælp fra AI',
                  'Generere og iterere på UI-designs i Figma Make med udgangspunkt i kendte designsystemer',
                  'Producere et samlet design brief klar til overdragelse til udviklere',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#c9d1d9]">
              Design er ikke kun æstetik &mdash; det er forståelsen af, hvem der bruger noget, og hvad de
              egentlig har brug for. AI kan hjælpe jer med at gå fra tomme sider til strukturerede indsigter
              og klare prototyper langt hurtigere end I er vant til.
            </p>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22]">
              <p className="text-[#8b949e] text-sm mb-1">ARTEFAKT-TANKEN</p>
              <p className="text-[#c9d1d9] text-sm">
                Claude kan ikke bare svare på spørgsmål &mdash; den kan skrive komplette dokumenter.
                Bed den eksplicit om at generere et færdigt dokument i markdown, og I får noget I
                kan gemme, dele og bygge videre på.
              </p>
            </div>
          </div>
        </section>

        {/* Hvorfor */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>hvorfor-ux-design
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <ul className="space-y-2">
            {[
              { bold: 'Brugerbehov driver løsningskvalitet:', text: 'En app der er svær at bruge er en app ingen bruger — selv om koden er perfekt' },
              { bold: 'Design tidligt sparer tid:', text: 'Jo tidligere I identificerer pain points og definerer flows, jo færre fejl retter udviklerne bagefter' },
              { bold: 'AI accelererer research:', text: 'Hvad der normalt tager dage med interviews og desk research kan I nu skitsere på timer' },
              { bold: 'Dokumenter giver udviklerne retning:', text: 'En persona og en brugerrejse er langt mere værdifuldt input end mundtlige forklaringer' },
            ].map((item, idx) => (
              <li key={idx} className="text-sm">
                <span className="text-[#7ee787] mr-2">•</span>
                <strong className="text-[#c9d1d9]">{item.bold}</strong>{' '}
                <span className="text-[#8b949e]">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Opgave 1 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>opgave-1
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Persona-dokument og Brugerrejser</h3>
            <p className="text-[#8b949e] text-sm">
              En persona er ikke en demografisk beskrivelse &mdash; det er en narrativ, der giver designbeslutninger
              et menneskeligt ansigt. En brugerrejse viser, hvad der sker <em>inden</em>, <em>under</em> og <em>efter</em> en
              interaktion &mdash; og hvor det går galt.
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[1]</span>Bed Claude om at skrive et komplet persona-dokument for jeres løsning</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[2]</span>Lav en brugerrejse for den vigtigste persona som et struktureret markdown-dokument</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[3]</span>Bed Claude om at identificere pain points og muligheder direkte i dokumentet</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — PERSONA-DOKUMENT</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv et komplet persona-dokument i markdown for [beskriv jeres løsning og målgruppe]. Lav tre detaljerede personas. For hver persona: giv dem et navn og en titel, beskriv deres mål, frustrationer, teknologivaner og en typisk arbejdsdag. Afslut hvert persona-afsnit med et konkret citat.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — BRUGERREJSE</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv en brugerrejse i markdown for [persona-navn] der bruger [jeres løsning]. Strukturér rejsen i faser. For hvert trin: hvad gør brugeren, hvad tænker de, hvad føler de, og hvad er risikoen for frustration? Brug en tabel. Tilføj et afsnit med de tre vigtigste designanbefalinger.&quot;</p>
            </div>
          </div>
        </section>

        {/* Opgave 2 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>opgave-2
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Syntetisk User Research</h3>
            <p className="text-[#8b949e] text-sm">
              Syntetisk user research er at bruge AI til at destillere, hvad rigtige brugere allerede har sagt
              offentligt om lignende oplevelser. Hurtigt, overraskende præcist og et stærkt supplement til antagelser.
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[1]</span>Brug Perplexity (vælg &quot;Social&quot; som kilde-filter) til at indsamle rå brugeroplevelser</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[2]</span>Kopiér output til Claude og bed den skrive en research-rapport</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[3]</span>Brug rapporten som fundament for designbeslutninger</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — RESEARCH-RAPPORT</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Her er hvad brugere siger om [beskriv domænet]: [indsæt Perplexity-output]. Skriv en kort research-rapport i markdown med: et executive summary (3 sætninger), de fem vigtigste indsigter med støttecitater, og fem konkrete designprincipper vi bør følge.&quot;</p>
            </div>
          </div>
        </section>

        {/* Opgave 3 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>opgave-3
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Wireframes og Prototyper</h3>
            <p className="text-[#8b949e] text-sm">
              En skitse på papir er en designbeslutning. Et foto af den skitse er et brief til en AI.
              I behøver ikke Figma eller designerfaring for at komme fra idé til klikbar prototype.
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[1]</span>Tegn jeres UI-idé på papir eller whiteboard</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[2]</span>Tag et foto af skitsen</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[3]</span>Giv fotoet til Claude med en beskrivelse</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[4]</span>Claude genererer en HTML-fil I kan åbne direkte i browseren</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Her er en håndtegnet skitse af vores [beskriv skærm] [foto]. Generer en komplet HTML-fil med inline CSS der implementerer dette design. Gør det responsivt og brug en ren, professionel stil. Skriv filen, så jeg kan gemme den som index.html og åbne den direkte i en browser.&quot;</p>
            </div>
          </div>
        </section>

        {/* Opgave 4 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>opgave-4
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Fra Design til Kode med Figma Make</h3>
            <p className="text-[#8b949e] text-sm">
              Figma Make er Figmas AI-funktion, der genererer hele designs og prototyper ud fra tekstbeskrivelser.
              Det bliver særligt stærkt, når I specificerer et designsystem.
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[1]</span>Åbn Figma og aktivér Make (via toolbar eller Cmd/Ctrl+K → &quot;Make&quot;)</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[2]</span>Beskriv hvad I vil have &mdash; og angiv hvilket designbibliotek</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[3]</span>Iterér med naturligt sprog</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[4]</span>Eksportér designet som reference til jeres udviklere</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3 overflow-x-auto">
              <p className="text-[#8b949e] text-xs mb-2">DESIGNSYSTEMER</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#30363d]">
                    <th className="text-left p-2 text-[#58a6ff]">Bibliotek</th>
                    <th className="text-left p-2 text-[#58a6ff]">Stil</th>
                    <th className="text-left p-2 text-[#58a6ff]">Godt til</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { lib: 'Shadcn/UI', style: 'Moderne, minimalistisk', good: 'Formularer og dashboards' },
                    { lib: 'Ant Design', style: 'Enterprise, datarigt', good: 'Admin-interfaces med tabeller' },
                    { lib: 'Material Design', style: 'Googles designsprog', good: 'Apps der skal føles familiære' },
                    { lib: 'Apple HIG', style: 'Elegant, native-feel', good: 'Selvbetjeningsapps' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-[#30363d] last:border-0">
                      <td className="p-2 text-[#7ee787]">{row.lib}</td>
                      <td className="p-2 text-[#8b949e]">{row.style}</td>
                      <td className="p-2 text-[#8b949e]">{row.good}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Opgave 5 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>opgave-5
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Usability og Designprincipper</h3>
            <p className="text-[#8b949e] text-sm">
              Et godt design er et design alle kan bruge. Lad Claude hjælpe med at skrive de dokumenter,
              der forankrer jeres designbeslutninger.
            </p>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — USABILITY TEST-SCRIPT</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv et komplet usability test-script i markdown for [beskriv jeres løsning]. Inkludér: velkomst, fem konkrete opgaver, observationspunkter for hver opgave, og debriefing-spørgsmål. Dokumentet skal kunne bruges direkte af en testleder uden forberedelse.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — DESIGNPRINCIPPER</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Baseret på denne beskrivelse af vores løsning og målgruppe: [beskriv]. Formulér fem designprincipper som et kort markdown-dokument. Hvert princip skal have: et kort navn (2-4 ord), en forklaring på to sætninger, og et konkret eksempel.&quot;</p>
            </div>
          </div>
        </section>

        {/* Bonus */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>bonus
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#d29922] bg-[#161b22] p-4">
            <p className="text-[#d29922] text-sm mb-2">Saml jeres arbejde i ét design brief til overdragelse:</p>
            <p className="text-[#c9d1d9] text-sm italic">&quot;Vi har udarbejdet følgende materialer i dag: [beskriv]. Skriv et samlet design brief i markdown der: opsummerer problemet og målgruppen, præsenterer de vigtigste persona-indsigter, beskriver det anbefalede UI-flow, og lister designprincipper og constraints.&quot;</p>
          </div>
        </section>

        {/* AI-prompt-inspiration */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>prompt-inspiration
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-2">
            {[
              'Skriv et komplet empathy map for [persona-navn] som et markdown-dokument med fire kvadranter: hvad siger de, hvad tænker de, hvad gør de, hvad føler de.',
              'Generer en liste med 10 usability heuristikker (Nielsen) og vurdér for hvert punkt, hvordan vores løsning klarer sig. Skriv det som en struktureret audit-rapport.',
              'Lav en tilgængeligheds-tjekliste i markdown baseret på WCAG 2.1 AA. Gruppér punkterne efter kategori og markér hvilke der er kritiske i MVP.',
              'Skriv en job story for vores primære bruger og udled tre konkrete designimplikationer fra den.',
            ].map((prompt, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#c9d1d9] text-sm italic">&quot;{prompt}&quot;</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#30363d] bg-[#161b22] px-6 py-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-[#8b949e] text-sm">
          <span className="text-[#7ee787]">▊</span> Held og lykke! Husk at committe tidligt og ofte.
        </div>
      </footer>
    </div>
  );
}
