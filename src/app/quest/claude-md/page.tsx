import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ClaudeMdQuest() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      <header className="border-b border-[#30363d] bg-[#161b22] px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] mb-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Tilbage til forsiden</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#7ee787] text-sm">[ANBEFALET]</span>
            <h1 className="text-xl text-[#c9d1d9]">CLAUDE.md som Team-Kontrakt</h1>
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
                  'Forklare hvad CLAUDE.md er, og hvorfor det øger konsistens på tværs af teamet',
                  'Oprette en CLAUDE.md der fungerer som en levende team-kontrakt for jeres AI-workflow',
                  'Opleve den konkrete forskel det gør at arbejde med og uden CLAUDE.md',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#c9d1d9]">
              CLAUDE.md er jeres projekts &quot;system prompt&quot; &mdash; den kontekst jeres AI-kodningsværktøj altid har med sig.
              De bedste teams bruger den som en levende kontrakt for, hvordan AI&apos;en skal opføre sig.
            </p>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22]">
              <p className="text-[#8b949e] text-sm mb-1">NOTE</p>
              <p className="text-[#c9d1d9] text-sm">
                CLAUDE.md er Claude Code-specifikt, men konceptet findes i andre værktøjer: Cursor har <code>.cursorrules</code>,
                Windsurf har <code>.windsurfrules</code>, og GitHub Copilot har <code>.github/copilot-instructions.md</code>.
              </p>
            </div>
          </div>
        </section>

        {/* Hvorfor */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>hvorfor-claude-md</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <ul className="space-y-2">
            {[
              { bold: 'Konsistens:', text: 'AI\'en følger jeres konventioner hver gang — uden at I skal gentage dem' },
              { bold: 'Onboarding:', text: 'Nye teammedlemmer (og AI\'en) forstår projektet med det samme' },
              { bold: 'Kvalitet:', text: 'Definér standarder og AI\'en overholder dem automatisk' },
              { bold: 'Teamkontrakt:', text: 'Dokumentér beslutninger, så alle (mennesker og AI) er på samme side' },
            ].map((item, idx) => (
              <li key={idx} className="text-sm">
                <span className="text-[#7ee787] mr-2">•</span>
                <strong className="text-[#c9d1d9]">{item.bold}</strong>{' '}
                <span className="text-[#8b949e]">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Opgave: Hvad skal den indeholde */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>opgaven</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Opret en gennemtænkt CLAUDE.md</h3>
            <p className="text-[#8b949e] text-sm">
              Den skal fungere som et levende dokument, der gør jeres AI-værktøj skarpere. Her er hvad den bør indeholde:
            </p>

            {[
              { title: '1. Projektbeskrivelse', code: '# Konference Check-in App\n\nEn webapp til konference check-in, bygget under IDA AI Hackathon 2026.\nBackend-API er tilgængeligt på [base-url] med API-nøgle [key].' },
              { title: '2. Tech stack og arkitektur', code: '## Tech Stack\n- Frontend: React + TypeScript + Vite\n- Styling: Tailwind CSS (brug ALDRIG inline styles)\n- State: React hooks (ingen Redux)\n- API: REST via fetch — alle kald går gennem src/api/client.ts' },
              { title: '3. Kodekonventioner', code: '## Konventioner\n- Skriv TypeScript — aldrig plain JavaScript\n- Brug functional components med hooks\n- Navngiv komponenter med PascalCase, filer med kebab-case\n- Én komponent pr. fil\n- Brug named exports (ikke default exports)' },
              { title: '4. API-konfiguration', code: '## API\n- Base URL: https://api.example.com/v1\n- Auth: Bearer token i Authorization-header\n- Brug ALTID error handling på API-kald' },
              { title: '5. Regler og begrænsninger', code: '## Regler\n- Lav ALDRIG auto-commits — spørg altid først\n- Slet ALDRIG filer uden at spørge\n- Kør `npm test` efter alle kodeændringer\n- Skriv ALTID tests til ny funktionalitet\n- Brug ALDRIG any-typer i TypeScript' },
              { title: '6. Projektstruktur', code: '## Struktur\nsrc/\n  api/          # API-klient og service-funktioner\n  components/   # React-komponenter\n  hooks/        # Custom hooks\n  pages/        # Side-komponenter (routes)\n  types/        # TypeScript interfaces og typer\n  utils/        # Hjælpefunktioner' },
            ].map((section, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#7ee787] text-xs mb-2">{section.title.toUpperCase()}</p>
                <pre className="text-[#c9d1d9] text-sm whitespace-pre-wrap">{section.code}</pre>
              </div>
            ))}
          </div>
        </section>

        {/* Sådan opretter I */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>kom-i-gang</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[1]</span>Opret filen i projektets rod: <code className="text-[#7ee787]">CLAUDE.md</code></p>
            <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[2]</span>Start med det vigtigste: tech stack, konventioner og API-info</p>
            <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[3]</span>Tilføj regler efterhånden som I opdager ting, AI&apos;en gør forkert</p>
            <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[4]</span>Commit filen, så hele teamet får glæde af den</p>
          </div>
        </section>

        {/* Eksperiment */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>eksperiment</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Med vs. Uden</h3>
            <p className="text-[#8b949e] text-sm">Prøv dette for at mærke forskellen:</p>
            <div className="space-y-2 text-sm">
              <p className="text-[#c9d1d9]"><span className="text-[#f85149] mr-2">1.</span><strong>Uden CLAUDE.md:</strong> Bed Claude om at bygge en ny komponent. Bemærk hvilke valg den træffer</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">2.</span><strong>Med CLAUDE.md:</strong> Bed om det samme igen. Sammenlign: følger den nu jeres konventioner?</p>
            </div>
            <p className="text-[#8b949e] text-sm italic">Forskellen er ofte markant — især for styling, filstruktur og fejlhåndtering.</p>
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
              'Nested CLAUDE.md: Læg en ekstra CLAUDE.md i undermapper med komponent-specifikke regler',
              'Eksempler: Inkludér et kodeeksempel på "sådan ser en god komponent ud i vores projekt"',
              'Anti-patterns: List ting AI\'en IKKE skal gøre, med eksempler på hvad den skal gøre i stedet',
              'Changelog-sektion: Notér hvornår og hvorfor I ændrer reglerne',
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
              'Analysér mit projekt og foreslå en CLAUDE.md baseret på de mønstre og konventioner, du finder i koden',
              'Her er min CLAUDE.md — review den og foreslå forbedringer baseret på best practices',
              'Opret en CLAUDE.md der sikrer, at al kode følger vores Tailwind + TypeScript + functional components konventioner',
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
