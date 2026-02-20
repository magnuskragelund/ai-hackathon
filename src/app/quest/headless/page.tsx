import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeadlessQuest() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      <header className="border-b border-[#30363d] bg-[#161b22] px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] mb-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Tilbage til forsiden</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#7ee787] text-sm">[SOLID MOVE]</span>
            <h1 className="text-xl text-[#c9d1d9]">Kør Claude Code Headless</h1>
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
                  'Forstå forskellen på interaktiv og headless brug af Claude Code',
                  'Køre mindst én AI-drevet opgave automatisk fra kommandolinjen',
                  'Se potentialet i at integrere AI som et trin i scripts og build-pipelines',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#c9d1d9]">
              Claude Code kan køres non-interaktivt fra kommandolinjen &mdash; uden at I sidder og chatter.
              Det åbner for automatisering: CI/CD-pipelines, batch-processing, automatiske code reviews og scripted workflows.
            </p>
          </div>
        </section>

        {/* Hvorfor */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>hvorfor-headless</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <ul className="space-y-2">
            {[
              { bold: 'Automatisering:', text: 'Kør AI-drevne opgaver som en del af jeres build-pipeline eller scripts' },
              { bold: 'Batch-processing:', text: 'Behandl mange filer på én gang uden at sidde og chatte' },
              { bold: 'Reproducerbarhed:', text: 'Samme prompt giver samme type output — perfekt til gentagne opgaver' },
              { bold: 'Integration:', text: 'Brug Claude som en del af et større toolchain med andre CLI-værktøjer' },
            ].map((item, idx) => (
              <li key={idx} className="text-sm">
                <span className="text-[#7ee787] mr-2">•</span>
                <strong className="text-[#c9d1d9]">{item.bold}</strong>{' '}
                <span className="text-[#8b949e]">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Grundlæggende brug */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>grundlaeggende-brug</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-4">
            <div className="border border-[#30363d] overflow-hidden">
              <Image src="/images/headless-terminal.png" alt="Claude Code headless mode i terminalen" width={800} height={400} className="w-full h-auto" />
            </div>
            <div className="space-y-3">
              {[
                { label: 'Simpel prompt', code: 'claude -p "Forklar hvad denne funktion gør" --allowedTools "Read,Grep"' },
                { label: 'Læs fra stdin', code: 'cat src/App.tsx | claude -p "Review denne fil for sikkerhedsproblemer"' },
                { label: 'JSON-output', code: 'claude -p "List alle TODO-kommentarer" --output-format json' },
              ].map((item, idx) => (
                <div key={idx} className="border border-[#30363d] bg-[#0d1117] p-3">
                  <p className="text-[#8b949e] text-xs mb-1">{item.label.toUpperCase()}</p>
                  <code className="block text-[#7ee787] text-sm break-all">{item.code}</code>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eksempler */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>eksempler</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-6">
            {[
              {
                title: '1. Automatisk Code Review',
                code: 'git diff --name-only | xargs -I {} claude -p "Review filen {} for bugs, sikkerhedsproblemer og kodekvalitet. Giv kort, konkret feedback." --allowedTools "Read,Grep"'
              },
              {
                title: '2. Generér dokumentation',
                code: 'claude -p "Læs alle filer i src/api/ og generér en komplet API-dokumentation i Markdown-format" --allowedTools "Read,Grep,Glob,Write"'
              },
              {
                title: '3. Batch-tilføj TypeScript-typer',
                code: 'for file in src/**/*.js; do\n  claude -p "Konvertér $file til TypeScript med korrekte typer" --allowedTools "Read,Write"\ndone'
              },
              {
                title: '4. Kvalitetstjek i CI/CD',
                code: 'claude -p "Gennemgå alle ændringer i denne PR for potentielle problemer. Fokusér på sikkerhed, performance og tilgængelighed. Output som JSON" \\\n  --output-format json \\\n  --allowedTools "Read,Grep,Glob"'
              },
              {
                title: '5. Test-generering',
                code: 'claude -p "Skriv unit tests for src/components/CheckIn.tsx. Brug Vitest og React Testing Library. Test alle edge cases." \\\n  --allowedTools "Read,Write,Grep,Glob"'
              },
            ].map((example, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#161b22] p-4 space-y-3">
                <h3 className="text-[#d29922]">{example.title}</h3>
                <div className="border border-[#30363d] bg-[#0d1117] p-3">
                  <pre className="text-[#7ee787] text-sm whitespace-pre-wrap break-all">{example.code}</pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nyttige flag */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>nyttige-flag</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#0d1117] p-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#30363d]">
                  <th className="text-left p-2 text-[#58a6ff]">Flag</th>
                  <th className="text-left p-2 text-[#58a6ff]">Beskrivelse</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { flag: '-p "prompt"', desc: 'Kør i headless mode med denne prompt' },
                  { flag: '--output-format json', desc: 'Returnér struktureret JSON-output' },
                  { flag: '--allowedTools "Read,Grep"', desc: 'Begræns hvilke værktøjer Claude må bruge' },
                  { flag: '--max-turns 10', desc: 'Begræns antal ture (undgå uendelige loops)' },
                  { flag: '--model sonnet', desc: 'Vælg model (sonnet er hurtigere og billigere)' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-[#30363d] last:border-0">
                    <td className="p-2 text-[#7ee787]">{row.flag}</td>
                    <td className="p-2 text-[#c9d1d9]">{row.desc}</td>
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
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Kombiner med shell-scripting</h3>
            <div className="space-y-3">
              <div className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#8b949e] text-xs mb-1">FIND OG PRIORITER TODOS</p>
                <code className="block text-[#7ee787] text-sm break-all">grep -rl &quot;TODO&quot; src/ | claude -p &quot;Læs disse filer, find alle TODOs, og prioritér dem efter vigtighed.&quot;</code>
              </div>
              <div className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#8b949e] text-xs mb-1">DAGLIG STATUSRAPPORT</p>
                <code className="block text-[#7ee787] text-sm break-all">claude -p &quot;Kig på git log fra de seneste 24 timer og skriv en kort statusrapport&quot; --allowedTools &quot;Bash,Read&quot;</code>
              </div>
            </div>
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
              'Skriv et shell-script der bruger Claude headless til at reviewe alle ændrede filer før commit',
              'Lav en CI-pipeline step der bruger Claude til at tjekke for sikkerhedsproblemer i PRs',
              'Byg et script der genererer en changelog baseret på git commits fra den seneste uge',
            ].map((prompt, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#c9d1d9] text-sm italic">&quot;{prompt}&quot;</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-l-2 border-[#58a6ff] pl-4 py-2">
            <p className="text-[#8b949e] text-sm">
              <strong className="text-[#58a6ff]">Docs:</strong>{' '}
              <a href="https://code.claude.com/docs/en/headless" className="text-[#58a6ff] hover:text-[#79c0ff] underline" target="_blank" rel="noopener noreferrer">
                Run Claude Code programmatically
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
