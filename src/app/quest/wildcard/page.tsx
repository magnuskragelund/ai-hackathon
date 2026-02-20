import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function WildcardQuest() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      <header className="border-b border-[#30363d] bg-[#161b22] px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] mb-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Tilbage til forsiden</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#7ee787] text-sm">[LEGENDARY]</span>
            <h1 className="text-xl text-[#c9d1d9]">Wildcard — Kombinér det hele</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Intro */}
        <section className="mb-10">
          <div className="space-y-4 leading-relaxed">
            <p className="text-[#c9d1d9]">
              Den ultimative side-quest: kombinér flere af de andre side-quests til et sammenhængende, automatiseret workflow.
              Det handler ikke om at gøre én ting godt &mdash; men om at få flere ting til at spille sammen.
            </p>
          </div>
        </section>

        {/* Hvorfor */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>hvorfor-kombinere</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <ul className="space-y-2">
            {[
              { bold: 'Synergi:', text: 'Hver feature bliver stærkere, når den er forbundet med de andre' },
              { bold: 'Professionelt setup:', text: 'Et komplet AI-drevet udviklingsmiljø, som I kan tage med hjem efter hackathon' },
              { bold: 'Imponerende demo:', text: 'Intet slår en live-demo, hvor alt hænger sammen fra design til deploy' },
            ].map((item, idx) => (
              <li key={idx} className="text-sm">
                <span className="text-[#7ee787] mr-2">•</span>
                <strong className="text-[#c9d1d9]">{item.bold}</strong>{' '}
                <span className="text-[#8b949e]">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Opgave */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>opgaven</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border-l-2 border-[#d29922] pl-4 py-2 mb-6">
            <p className="text-[#c9d1d9] text-sm">
              <strong>Kombinér mindst 3</strong> af de andre side-quests til et sammenhængende workflow.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                title: 'Design → Kode → Test → Deploy',
                steps: [
                  'Figma MCP (læs design)',
                  '→ Custom Skill /component (scaffold komponent)',
                  '→ Hook: auto-format med Prettier',
                  '→ Subagent: test-writer (skriv tests)',
                  '→ Headless: kør tests i CI',
                  '→ Skill /deploy (deploy til produktion)',
                ]
              },
              {
                title: 'Security-First Pipeline',
                steps: [
                  'CLAUDE.md (definér sikkerhedsregler)',
                  '→ Kode som normalt',
                  '→ Hook: ESLint security plugin efter hver ændring',
                  '→ Subagent: security-reviewer (fuld audit)',
                  '→ Subagent: a11y-auditor (tilgængelighedscheck)',
                  '→ Headless: generér sikkerhedsrapport',
                ]
              },
              {
                title: 'Visuelt Feedback-Loop',
                steps: [
                  'Papirskitse (tag billede)',
                  '→ Claude: implementér som kode',
                  '→ Screenshot af resultatet',
                  '→ Claude: sammenlign med skitse og justér',
                  '→ Subagent: a11y-auditor (tjek tilgængelighed)',
                  '→ Hook: auto-format',
                  '→ Gentag til det er pixel-perfekt',
                ]
              },
              {
                title: 'Full-Stack Automatisering',
                steps: [
                  'MCP: database (hent skema)',
                  '→ Claude: generér API-typer fra skema',
                  '→ Custom Skill /api-endpoint (scaffold nyt endpoint)',
                  '→ Subagent: test-writer (integrationstests)',
                  '→ MCP: GitHub (opret PR)',
                  '→ Headless: code review af PR',
                ]
              },
            ].map((pipeline, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#161b22] p-4 space-y-3">
                <h3 className="text-[#d29922]">{pipeline.title}</h3>
                <div className="border border-[#30363d] bg-[#0d1117] p-3">
                  {pipeline.steps.map((step, stepIdx) => (
                    <p key={stepIdx} className={`text-sm ${step.startsWith('→') ? 'text-[#8b949e] ml-4' : 'text-[#7ee787]'}`}>
                      {step}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bedømmelse */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>bedoemmelse</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#0d1117] p-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#30363d]">
                  <th className="text-left p-2 text-[#58a6ff]">Kriterium</th>
                  <th className="text-left p-2 text-[#58a6ff]">Beskrivelse</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criteria: 'Integration', desc: 'Hvor godt hænger delene sammen? Flyder data naturligt?' },
                  { criteria: 'Automatisering', desc: 'Hvor meget sker automatisk vs. manuelt?' },
                  { criteria: 'Praktisk værdi', desc: 'Er det noget, I faktisk ville bruge i et rigtigt projekt?' },
                  { criteria: 'Kreativitet', desc: 'Har I fundet en uventet eller smart kombination?' },
                  { criteria: 'Demo', desc: 'Kan I vise det live og forklare flowet?' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-[#30363d] last:border-0">
                    <td className="p-2 text-[#7ee787]">{row.criteria}</td>
                    <td className="p-2 text-[#c9d1d9]">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>tips</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-2">
            {[
              'Start simpelt: Få 2 ting til at virke sammen, før I tilføjer den tredje',
              'Tænk i flows: Hvad er input? Hvad er output? Hvad sker der imellem?',
              'Dokumentér i CLAUDE.md: Beskriv jeres setup, så Claude (og teamet) forstår det',
              'Test det end-to-end: Kør hele flowet fra start til slut mindst én gang',
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
              'Hjælp mig med at designe et workflow der forbinder Figma MCP, en /component Skill, auto-format hooks og en test-writer agent',
              'Opret en CLAUDE.md der beskriver hele vores automatiserede pipeline og sørg for, at alle dele er konfigureret korrekt',
              'Kør hele pipelinen headless: læs Figma-designet, generér komponenten, kør tests, og opret en PR — alt automatisk',
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
