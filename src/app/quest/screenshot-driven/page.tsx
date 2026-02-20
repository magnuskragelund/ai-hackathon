import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ScreenshotDrivenQuest() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      <header className="border-b border-[#30363d] bg-[#161b22] px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] mb-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Tilbage til forsiden</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#7ee787] text-sm">[KREATIV]</span>
            <h1 className="text-xl text-[#c9d1d9]">Screenshot-Driven Development</h1>
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
                  'Bruge screenshots som et aktivt feedback-redskab i stedet for at beskrive UI-problemer i tekst',
                  'Iterere visuelt på jeres interface direkte i jeres AI-workflow',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#c9d1d9]">
              Claude Code kan se billeder. Det åbner for et kraftfuldt workflow: tag et screenshot af jeres app,
              vis det til Claude, og bed den om at fixe layout, farver, responsivitet eller tilføje nye elementer &mdash;
              med det visuelle som udgangspunkt.
            </p>
          </div>
        </section>

        {/* Hvorfor */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>hvorfor-screenshots</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <ul className="space-y-2">
            {[
              { bold: 'Visuelt feedback-loop:', text: 'I stedet for at beskrive problemer i tekst, kan I bare vise dem' },
              { bold: 'Hurtig iteration:', text: 'Tag screenshot → beskriv ændring → få opdateret kode → gentag' },
              { bold: 'Design-fidelity:', text: 'Sammenlign screenshot med designskitse og bed Claude om at lukke gabet' },
              { bold: 'Bug-finding:', text: 'Claude kan spotte visuelle problemer som I måske overser' },
            ].map((item, idx) => (
              <li key={idx} className="text-sm">
                <span className="text-[#7ee787] mr-2">•</span>
                <strong className="text-[#c9d1d9]">{item.bold}</strong>{' '}
                <span className="text-[#8b949e]">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Workflow */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>workflow</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <div className="space-y-3">
              <div className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#7ee787] text-xs mb-2">1. TAG ET SCREENSHOT</p>
                <div className="space-y-1 text-sm text-[#8b949e]">
                  <p>macOS: <code className="text-[#7ee787]">Cmd+Shift+4</code> (vælg område) eller <code className="text-[#7ee787]">Cmd+Shift+3</code> (hele skærmen)</p>
                  <p>Windows: <code className="text-[#7ee787]">Win+Shift+S</code></p>
                  <p>Eller brug browserens DevTools til at capture specifikke viewports</p>
                </div>
              </div>
              <div className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#7ee787] text-xs mb-2">2. GIV DET TIL CLAUDE CODE</p>
                <p className="text-[#c9d1d9] text-sm italic">&quot;Her er hvordan check-in-skærmen ser ud lige nu. [screenshot] Justér layoutet: gør søgefeltet bredere, flyt check-in-knappen til højre, og tilføj mere whitespace.&quot;</p>
              </div>
              <div className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#7ee787] text-xs mb-2">3. ITERÉR</p>
                <p className="text-[#c9d1d9] text-sm italic">&quot;Bedre! Men knappen ser lidt klemt ud på mobil. [nyt screenshot] Gør den full-width på skærme under 768px.&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Praktiske eksempler */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>eksempler</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-6">
            <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
              <h3 className="text-[#d29922]">Fra papirskitse til kode</h3>
              <div className="space-y-2 text-sm text-[#c9d1d9]">
                <p><span className="text-[#7ee787] mr-2">[1]</span>Tegn jeres UI-idé på papir eller whiteboard</p>
                <p><span className="text-[#7ee787] mr-2">[2]</span>Tag et billede af skitsen</p>
                <p><span className="text-[#7ee787] mr-2">[3]</span>Giv det til Claude: <span className="text-[#8b949e] italic">&quot;Lav et mock up mobil site af denne skitse&quot;</span></p>
              </div>
              <div className="border border-[#30363d] overflow-hidden">
                <Image src="/images/screenshot-sketch.png" alt="Eksempel: fra papirskitse til kode med Claude Code" width={800} height={500} className="w-full h-auto" />
              </div>
            </div>

            <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-3">
              <h3 className="text-[#d29922]">Sammenlign med Figma-design</h3>
              <div className="space-y-2 text-sm text-[#c9d1d9]">
                <p><span className="text-[#7ee787] mr-2">[1]</span>Eksportér jeres Figma-design som PNG</p>
                <p><span className="text-[#7ee787] mr-2">[2]</span>Tag et screenshot af jeres app</p>
                <p><span className="text-[#7ee787] mr-2">[3]</span>Giv begge til Claude: <span className="text-[#8b949e] italic">&quot;Find alle forskelle og justér koden, så den matcher designet&quot;</span></p>
              </div>
            </div>

            <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-3">
              <h3 className="text-[#d29922]">Responsivitet</h3>
              <p className="text-[#8b949e] text-sm">Tag screenshots på forskellige skærmstørrelser og bed Claude om at fixe problemer.</p>
              <div className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#c9d1d9] text-sm italic">&quot;Her er appen på desktop [screenshot1] og på mobil [screenshot2]. Mobilversionen har overflow-problemer — fix dem.&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>tips</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#0d1117] p-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#30363d]">
                  <th className="text-left p-2 text-[#f85149]">I stedet for...</th>
                  <th className="text-left p-2 text-[#7ee787]">Prøv...</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { bad: '"Fix layoutet"', good: '"Gør søgefeltet 100% bredde og tilføj 16px margin under overskriften"' },
                  { bad: '"Det ser forkert ud"', good: '"Kortene overlapper på mobil — tilføj flex-wrap og gap"' },
                  { bad: '"Gør det pænere"', good: '"Tilføj afrundede hjørner, en subtil skygge og mere whitespace"' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-[#30363d] last:border-0">
                    <td className="p-2 text-[#8b949e]">{row.bad}</td>
                    <td className="p-2 text-[#c9d1d9]">{row.good}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bonus */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>bonus</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-2">
            {[
              'Pixel-perfekt sammenligning: Giv Claude et design OG en implementation og bed om at liste alle forskelle',
              'Cross-browser testing: Tag screenshots fra forskellige browsere og bed Claude om at fixe inkonsistenser',
              'Tilgængeligheds-check: Tag et screenshot og bed Claude vurdere, om kontrasten er tilstrækkelig',
            ].map((item, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#161b22] p-3 text-sm">
                <span className="text-[#7ee787] mr-2">•</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Prompt-inspiration */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>prompt-inspiration</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-2">
            {[
              'Her er min app [screenshot]. Gør den mere moderne med bedre typography, spacing og farver',
              'Sammenlign denne skitse [billede] med min implementation [screenshot] og list alle forskelle',
              'Her er appen på iPhone 14 [screenshot]. Fiks alle responsivitetsproblemer',
              'Tag dette screenshot [billede] og foreslå 3 konkrete UI-forbedringer',
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
