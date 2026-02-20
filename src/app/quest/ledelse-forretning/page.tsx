import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LedelseForretningQuest() {
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
            <h1 className="text-xl text-[#c9d1d9]">Ledelse & Forretning</h1>
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
                  'Producere en komplet business case som et delebart dokument klar til ledelsen',
                  'Generere stakeholder-kommunikation og en præsentationsoutline tilpasset forskellige modtagere',
                  'Skrive strukturerede analyser — SWOT, risikovurdering og beslutningsoplæg — som konkrete dokumenter',
                  'Bruge AI som "djævelens advokat" til at stress-teste jeres argumentation',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#c9d1d9]">
              Ledelse og forretning handler om at oversætte teknisk arbejde til beslutningsgrundlag.
              Hvad koster det? Hvad giver det? Hvem skal overbevises &mdash; og med hvilke argumenter?
            </p>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22]">
              <p className="text-[#8b949e] text-sm mb-1">ARTEFAKT-TANKEN</p>
              <p className="text-[#c9d1d9] text-sm">
                En business case der lægger i chatten er ikke en business case. Bed Claude om at generere
                et færdigt dokument i markdown &mdash; med den rette struktur, det rette sprog og de rette tal.
                Et dokument I kan gemme, sende og præsentere.
              </p>
            </div>
          </div>
        </section>

        {/* Hvorfor */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>hvorfor-ledelse</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <ul className="space-y-2">
            {[
              { bold: 'Teknologi uden business case er et hobbyprojekt:', text: 'En løsning der overlever hackathon-dagen kræver at nogen kan forklare hvorfor den er investeringen værd' },
              { bold: 'Præsentationen er et salgsmøde:', text: 'I har få minutter til at overbevise — det kræver forberedelse og en klar fortælling' },
              { bold: 'Risici er ikke fejl — de er forudsigelser:', text: 'At identificere hvad der kan gå galt og have en plan er god ledelse' },
              { bold: 'AI er en ghost writer der ikke kræver kredit:', text: 'Brug den til at formulere det, I ved — og til at udfordre det, I tror I ved' },
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
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>opgave-1</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Business Case</h3>
            <p className="text-[#8b949e] text-sm">
              En business case er ikke en teknisk specifikation &mdash; det er et argument. Den besvarer ét spørgsmål:
              <em> Er det her værd at investere i?</em>
            </p>
            <div className="border-l-2 border-[#d29922] pl-4 py-2">
              <p className="text-[#c9d1d9] text-sm"><strong>De fire grundelementer:</strong></p>
              <p className="text-[#8b949e] text-sm">1. Problem — hvad er situationen, og hvad koster den?</p>
              <p className="text-[#8b949e] text-sm">2. Løsning — hvad foreslår vi, og hvad er alternativerne?</p>
              <p className="text-[#8b949e] text-sm">3. Gevinster — hvad opnår vi, og hvornår?</p>
              <p className="text-[#8b949e] text-sm">4. Investering — hvad kræver det af tid, penge og kapacitet?</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — BUSINESS CASE</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv en komplet business case i markdown for [beskriv jeres løsning]. Strukturér: Executive Summary (3 sætninger), Problemformulering med tal, Løsningsbeskrivelse, Forventede gevinster, Estimeret investeringsbehov, Risici og mitigeringer, og Anbefaling. Tonen er professionel — til en IT-direktør eller CFO.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — GEVINSTBEREGNING</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Lav en gevinstberegning i markdown for [beskriv processen med relevante tal]. Vis beregningen trin for trin og præsentér som en tabel med: tidsparing per år, omregning til mandetimer, estimeret pengeværdi. Tilføj et afsnit om kvalitative gevinster.&quot;</p>
            </div>
          </div>
        </section>

        {/* Opgave 2 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>opgave-2</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Stakeholder-Kommunikation</h3>
            <p className="text-[#8b949e] text-sm">
              Forskellige modtagere har forskellige bekymringer. God stakeholder-kommunikation tilpasser
              budskabet &mdash; uden at ændre sandheden.
            </p>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — STAKEHOLDER-MAP</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv et stakeholder-map i markdown for [beskriv løsningen]. Identificér de fem vigtigste grupper. For hver: primære interesser og bekymringer, hvad der motiverer dem, og hvad der vil få dem til at modarbejde projektet. Afslut med en kommunikationsstrategi.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — LEDELSESOPDATERING</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv en ledelsesopdatering på maks én side i markdown om [beskriv hvad I har bygget]. Inkludér: Status, Centrale resultater, Næste skridt, og Beslutningsbehov. Tonen er koncis og beslutningsorienteret — til en travl leder.&quot;</p>
            </div>
          </div>
        </section>

        {/* Opgave 3 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>opgave-3</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Analysér og Beslut</h3>
            <p className="text-[#8b949e] text-sm">
              Beslutninger er stærkere, når de er informeret af struktureret analyse. AI kan hjælpe med
              at gennemføre analyserne hurtigt &mdash; og udfordre jeres egne antagelser.
            </p>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — SWOT-DOKUMENT</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv en SWOT-analyse i markdown for [beskriv jeres løsning, målgruppe og konkurrenter]. Vær specifik og konkret. For hvert felt: 3-4 punkter med forklaring. Tilføj et afsnit med de tre vigtigste strategiske implikationer.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — BESLUTNINGSOPLÆG</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Vi skal beslutte: [beskriv handlemuligheder]. Skriv et beslutningsoplæg i markdown der for hver mulighed beskriver: fordele, ulemper, skjulte omkostninger og risici. Afslut med en klar anbefaling.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — DJÆVELENS ADVOKAT</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Her er vores business case og anbefaling: [indsæt]. Spil djævelens advokat. Skriv et moddokument der: identificerer de tre svageste punkter, stiller de ti hårdeste spørgsmål en skeptisk bestyrelse ville stille, og peger på hvad vi har undervurderet. Vær direkte.&quot;</p>
            </div>
          </div>
        </section>

        {/* Bonus + prompt-inspiration */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>bonus-og-inspiration</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-2">
            {[
              'Skriv tre versioner af jeres value proposition — én til en IT-direktør, én til en driftschef og én til en slutbruger.',
              'Formulér tre KPIs vi kan bruge til at måle succes — der er meningsfulde for hhv. driften, ledelsen og slutbrugerne.',
              'Lav en kommunikationsplan for udrulningen: hvem kommunikerer vi til, hvad siger vi, hvornår — opdelt i faserne: før, under og efter lancering.',
              'Skriv en risikolog med de otte vigtigste risici, sandsynlighed og konsekvens for hver, og en konkret mitigering med ansvarlig ejer.',
              'Simulér et kritisk bestyrelsesmøde med tre bestyrelsesmedlemmer (økonomi, risiko, strategi) og giv os de hårdeste spørgsmål fra hvert perspektiv.',
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
