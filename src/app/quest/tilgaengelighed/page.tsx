import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TilgaengelighedQuest() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      <header className="border-b border-[#30363d] bg-[#161b22] px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] mb-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Tilbage til forsiden</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#7ee787] text-sm">[QUICK WIN]</span>
            <h1 className="text-xl text-[#c9d1d9]">Tilgængelighed (WCAG 2.1 AA)</h1>
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
                  'Forklare de vigtigste WCAG 2.1 AA-krav og hvad de kræver i praksis',
                  'Bruge jeres AI-værktøj til at auditere og fixe tilgængelighedsproblemer i koden',
                  'Verificere jeres løsning med fire konkrete testmetoder: tastatur, skærmlæser, kontrast og zoom',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#c9d1d9]">
              Kan jeres app bruges af alle &mdash; også dem, der navigerer med tastatur, bruger skærmlæser eller har nedsat syn?
              I denne side-quest gør I jeres løsning tilgængelig efter WCAG 2.1 AA-standarden.
            </p>
          </div>
        </section>

        {/* Hvorfor */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>hvorfor-tilgaengelighed</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <ul className="space-y-2">
            {[
              { bold: 'Lovkrav:', text: 'European Accessibility Act træder i kraft 2025 — det er et krav i EU' },
              { bold: 'Rækkevidde:', text: '~15% af verdens befolkning har en form for funktionsnedsættelse' },
              { bold: 'Bedre UX for alle:', text: 'God tilgængelighed giver bedre UX — tænk tastaturnavigation, god kontrast i sollys' },
              { bold: 'Kvalitetsstempel:', text: 'Det er et tegn på professionel softwareudvikling' },
            ].map((item, idx) => (
              <li key={idx} className="text-sm">
                <span className="text-[#7ee787] mr-2">•</span>
                <strong className="text-[#c9d1d9]">{item.bold}</strong>{' '}
                <span className="text-[#8b949e]">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Opgave 1: Audit */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>trin-1-audit</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Find problemerne</h3>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — AI AUDIT</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Gennemgå alle mine komponenter for WCAG 2.1 AA-overtrædelser. Tjek semantisk HTML, ARIA-attributter, farvekontrast, tastaturnavigation og skærmlæser-support.&quot;</p>
            </div>
            <p className="text-[#8b949e] text-sm">
              Kør desuden en automatiseret audit: tilføj <code className="text-[#7ee787]">axe-core</code> eller <code className="text-[#7ee787]">pa11y</code> til projektet,
              eller brug browserens Lighthouse (Accessibility-fanen).
            </p>
          </div>
        </section>

        {/* Opgave 2: Fix */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>trin-2-fix</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">De vigtigste områder</h3>
            <div className="border border-[#30363d] bg-[#0d1117] p-3 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#30363d]">
                    <th className="text-left p-2 text-[#58a6ff]">Område</th>
                    <th className="text-left p-2 text-[#58a6ff]">Krav</th>
                    <th className="text-left p-2 text-[#58a6ff]">Eksempel</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { area: 'Semantisk HTML', req: 'Korrekte HTML-elementer', ex: '<button> i stedet for <div onclick>' },
                    { area: 'Tastatur', req: 'Alt kan nås med tastatur', ex: 'Tab-rækkefølge, synlig fokusindikator' },
                    { area: 'Farvekontrast', req: 'Min. 4.5:1 for tekst', ex: 'Tjek alle farvepar med AI' },
                    { area: 'ARIA', req: 'Meningsfulde labels og roller', ex: 'aria-label på ikoner, aria-live på dynamisk indhold' },
                    { area: 'Formularer', req: 'Labels og fejlbeskeder', ex: 'Synlige labels, aria-describedby til fejl' },
                    { area: 'Billeder', req: 'Alt-tekster', ex: 'alt="Bekræftelse: Gæst tjekket ind"' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-[#30363d] last:border-0">
                      <td className="p-2 text-[#7ee787]">{row.area}</td>
                      <td className="p-2 text-[#c9d1d9]">{row.req}</td>
                      <td className="p-2 text-[#8b949e]">{row.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Opgave 3: Test */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>trin-3-test</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-3">
            <h3 className="text-[#d29922]">Verificér det virker</h3>
            {[
              { icon: '⌨️', test: 'Tastaturtest:', desc: 'Læg musen væk. Kan I gennemføre et komplet check-in-flow kun med tastaturet?' },
              { icon: '🔊', test: 'Skærmlæsertest:', desc: 'Tænd VoiceOver (Cmd+F5 på Mac) eller NVDA (Windows). Giver flowet mening?' },
              { icon: '🎨', test: 'Kontrasttest:', desc: 'Brug et værktøj eller bed jeres AI om at tjekke alle farvepar' },
              { icon: '🔍', test: 'Zoom-test:', desc: 'Zoom til 200% i browseren. Holder layoutet?' },
            ].map((item, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#0d1117] p-3 flex gap-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-[#c9d1d9] text-sm font-bold">{item.test}</p>
                  <p className="text-[#8b949e] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
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
              'Skip-link: Tilføj et "Skip til indhold"-link, der vises ved første tab-tryk',
              'Reduced motion: Respektér prefers-reduced-motion og slå animationer fra',
              'Dark mode med kontrast: Sørg for kontrastkrav overholdes i begge temaer',
              'Live regions: Brug aria-live="polite" til at annoncere check-in-status til skærmlæsere',
              'Fejlhåndtering: Flyt fokus til fejlbesked ved validering, brug role="alert"',
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
              'Tilføj korrekte ARIA-attributter til alle interaktive elementer i min app',
              'Min check-in-bekræftelse opdateres dynamisk — gør den tilgængelig for skærmlæsere med aria-live',
              'Tjek alle mine farver for WCAG AA-kontrast og foreslå alternativer, der overholder 4.5:1',
              'Gør min QR-scanner-komponent tastatur-tilgængelig med fokushåndtering',
              'Tilføj en skip-navigation-komponent til min app',
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
