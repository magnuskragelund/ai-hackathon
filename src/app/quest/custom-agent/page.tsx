import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CustomAgentQuest() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      <header className="border-b border-[#30363d] bg-[#161b22] px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] mb-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Tilbage til forsiden</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#7ee787] text-sm">[DEEP DIVE]</span>
            <h1 className="text-xl text-[#c9d1d9]">Byg et Custom Agent</h1>
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
                  'Forklare hvad en sub-agent er, og hvornår en specialist giver bedre resultater end en generalist',
                  'Designe og oprette en custom agent med fokuserede instruktioner og begrænsede værktøjer',
                  'Bruge agenten aktivt i jeres hackathon-workflow — fx til code review, tests eller tilgængelighed',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#c9d1d9]">
              Claude Code kan delegere opgaver til specialiserede sub-agents &mdash; AI-agenter der kører i isolerede kontekster
              med egne instruktioner og begrænsede værktøjer. Tænk på det som at hyre en specialist til en bestemt opgave.
            </p>
          </div>
        </section>

        {/* Hvorfor */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>hvorfor-custom-agents</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <ul className="space-y-2">
            {[
              { bold: 'Specialisering:', text: 'En agent med ét fokusområde giver bedre resultater end en generalist' },
              { bold: 'Sikkerhed:', text: 'Begræns hvilke værktøjer en agent har adgang til — en reviewer behøver ikke kunne skrive filer' },
              { bold: 'Genanvendelighed:', text: 'Definer agenten én gang, brug den mange gange' },
              { bold: 'Parallellisering:', text: 'Kør flere specialiserede agenter samtidig på forskellige dele af kodebasen' },
            ].map((item, idx) => (
              <li key={idx} className="text-sm">
                <span className="text-[#7ee787] mr-2">•</span>
                <strong className="text-[#c9d1d9]">{item.bold}</strong>{' '}
                <span className="text-[#8b949e]">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Eksempel: Security Reviewer */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>eksempler</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-6">
            {[
              {
                title: 'Security Reviewer',
                file: '.claude/agents/security-reviewer.md',
                tools: 'Read, Grep, Glob',
                desc: 'En agent der kun kan læse kode og rapporterer sikkerhedsproblemer',
                content: `Du er en sikkerhedsreviewer. Gennemgå den angivne kode for:

1. Injection-angreb: SQL injection, XSS, command injection
2. Autentificering/autorisation: Manglende checks, hardcodede credentials
3. Data-eksponering: Sensitive data i logs, manglende sanitering
4. API-sikkerhed: Manglende rate limiting, CORS-problemer
5. Dependency-risici: Kendte sårbarheder i packages

For hvert fund, rapportér:
- Fil og linjenummer
- Sværhedsgrad (kritisk/høj/middel/lav)
- Beskrivelse af problemet
- Foreslået fix`
              },
              {
                title: 'Test Writer',
                file: '.claude/agents/test-writer.md',
                tools: 'Read, Write, Grep, Glob, Bash',
                desc: 'En agent der skriver tests for eksisterende kode',
                content: `Du er en testskriver. Når du får en fil eller komponent:

1. Læs koden grundigt og forstå alle code paths
2. Identificér edge cases og fejlscenarier
3. Skriv tests der dækker:
   - Happy path
   - Edge cases (tomme inputs, null-værdier)
   - Fejlhåndtering
   - Asynkrone operationer
4. Brug projektets eksisterende test-framework
5. Kør testene og verificér, at de består`
              },
              {
                title: 'Accessibility Auditor',
                file: '.claude/agents/a11y-auditor.md',
                tools: 'Read, Grep, Glob',
                desc: 'En agent der tjekker tilgængelighed',
                content: `Du er en tilgængelighedsreviewer. Gennemgå koden for WCAG 2.1 AA:

1. Semantisk HTML (korrekte elementer, heading-hierarki)
2. ARIA-attributter (labels, roller, live regions)
3. Tastaturnavigation (fokushåndtering, tab-rækkefølge)
4. Farvekontrast (4.5:1 for tekst, 3:1 for store elementer)
5. Formular-tilgængelighed (labels, fejlbeskeder)

Rapportér hvert fund med fil, linje, WCAG-kriterium og foreslået fix.`
              },
            ].map((agent, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#161b22] p-4 space-y-3">
                <h3 className="text-[#d29922]">{agent.title}</h3>
                <p className="text-[#8b949e] text-sm">{agent.desc}</p>
                <div className="border border-[#30363d] bg-[#0d1117] p-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#58a6ff] text-xs">{agent.file}</p>
                    <p className="text-[#8b949e] text-xs">tools: {agent.tools}</p>
                  </div>
                  <pre className="text-[#c9d1d9] text-sm whitespace-pre-wrap">{agent.content}</pre>
                </div>
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
          <div className="space-y-3">
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#7ee787] text-xs mb-2">TRIN 1 — OPRET MAPPEN</p>
              <code className="block text-[#7ee787] text-sm">mkdir -p .claude/agents</code>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#7ee787] text-xs mb-2">TRIN 2 — OPRET AGENT-FILEN</p>
              <p className="text-[#8b949e] text-sm">Opret en .md-fil med YAML frontmatter og instruktioner (se eksemplerne ovenfor)</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#7ee787] text-xs mb-2">TRIN 3 — BRUG AGENTEN</p>
              <div className="space-y-1">
                <code className="block text-[#7ee787] text-sm">&gt; Kør security-reviewer agenten på src/api/</code>
                <code className="block text-[#7ee787] text-sm">&gt; Brug test-writer til at skrive tests for CheckIn-komponenten</code>
              </div>
            </div>
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
              'Agent-pipeline: Kør security-reviewer → fixer → test-writer i rækkefølge',
              'Parallel agents: Kør a11y-auditor og security-reviewer samtidig på hele kodebasen',
              'Specialiseret refactorer: En agent der kun refaktorerer — med strenge regler om at bevare funktionalitet',
              'API-tester: En agent der genererer og kører integrationstests mod jeres hackathon-API',
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
              'Opret en custom agent der reviewer mine React-komponenter for performance-problemer',
              'Byg en test-writer agent der følger vores projekts testkonventioner og kør den på alle komponenter i src/components/',
              'Lav en dokumentationsagent der genererer JSDoc-kommentarer for alle eksporterede funktioner',
            ].map((prompt, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#c9d1d9] text-sm italic">&quot;{prompt}&quot;</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-l-2 border-[#58a6ff] pl-4 py-2">
            <p className="text-[#8b949e] text-sm">
              <strong className="text-[#58a6ff]">Docs:</strong>{' '}
              <a href="https://code.claude.com/docs/en/sub-agents" className="text-[#58a6ff] hover:text-[#79c0ff] underline" target="_blank" rel="noopener noreferrer">
                Create custom subagents
              </a>
            </p>
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
