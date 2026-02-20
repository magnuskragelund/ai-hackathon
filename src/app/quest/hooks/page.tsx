import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function HooksQuest() {
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
            <h1 className="text-xl text-[#c9d1d9]">Sæt Hooks op</h1>
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
                  'Forklare hvad Hooks er, og hvordan de adskiller sig fra manuelle AI-instruktioner',
                  'Konfigurere mindst ét Hook der automatisk forbedrer kodekvaliteten',
                  'Arbejde med et AI-workflow der har automatiske sikkerhedsnet',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#c9d1d9]">
              Hooks er automatiske triggere, der kører scripts, når jeres AI-værktøj gør bestemte ting.
              Tænk på det som git hooks &mdash; men for jeres AI-workflow. Hver gang Claude skriver en fil,
              kan den automatisk formatere den.
            </p>
          </div>
        </section>

        {/* Hvorfor */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>hvorfor-hooks</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <ul className="space-y-2">
            {[
              { bold: 'Automatisk kvalitet:', text: 'Kode bliver formateret, lintet og valideret uden at I skal huske det' },
              { bold: 'Sikkerhedsnet:', text: 'Blokér farlige kommandoer, før de når at køre' },
              { bold: 'Konsistens:', text: 'Alle filer følger samme stil — uanset om Claude eller et menneske har skrevet dem' },
              { bold: 'Feedback-loop:', text: 'Kør tests automatisk efter ændringer og få øjeblikkelig feedback' },
            ].map((item, idx) => (
              <li key={idx} className="text-sm">
                <span className="text-[#7ee787] mr-2">•</span>
                <strong className="text-[#c9d1d9]">{item.bold}</strong>{' '}
                <span className="text-[#8b949e]">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Hook-typer */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>hook-typer</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#0d1117] p-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#30363d]">
                  <th className="text-left p-2 text-[#58a6ff]">Hook</th>
                  <th className="text-left p-2 text-[#58a6ff]">Hvornår</th>
                  <th className="text-left p-2 text-[#58a6ff]">Brug den til</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { hook: 'PreToolUse', when: 'Før Claude bruger et værktøj', use: 'Blokér farlige kommandoer, valider input' },
                  { hook: 'PostToolUse', when: 'Efter Claude har brugt et værktøj', use: 'Formater kode, kør linting, log ændringer' },
                  { hook: 'Notification', when: 'Når Claude sender en notifikation', use: 'Custom alerts, lyd, integration' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-[#30363d] last:border-0">
                    <td className="p-2 text-[#7ee787]">{row.hook}</td>
                    <td className="p-2 text-[#c9d1d9]">{row.when}</td>
                    <td className="p-2 text-[#8b949e]">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                title: 'Auto-format med Prettier',
                desc: 'Hver gang Claude skriver eller redigerer en fil, kører Prettier automatisk',
                json: `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write $CLAUDE_FILE_PATH"
          }
        ]
      }
    ]
  }
}`
              },
              {
                title: 'Auto-lint med ESLint',
                desc: 'Automatisk linting efter hver fil-ændring',
                json: `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npx eslint --fix $CLAUDE_FILE_PATH"
          }
        ]
      }
    ]
  }
}`
              },
              {
                title: 'Blokér farlige kommandoer',
                desc: 'Fang og blokér rm -rf, drop table og force push',
                json: `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo $CLAUDE_TOOL_INPUT | grep -qE '(rm -rf|drop table|force push)' && echo 'BLOCKED: Dangerous command' && exit 1 || exit 0"
          }
        ]
      }
    ]
  }
}`
              },
              {
                title: 'Kør tests efter kodeændringer',
                desc: 'Automatisk test-kørsel efter hver edit',
                json: `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npm test -- --bail --silent 2>/dev/null || echo 'WARNING: Tests failing'"
          }
        ]
      }
    ]
  }
}`
              },
            ].map((example, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#161b22] p-4 space-y-3">
                <h3 className="text-[#d29922]">{example.title}</h3>
                <p className="text-[#8b949e] text-sm">{example.desc}</p>
                <div className="border border-[#30363d] bg-[#0d1117] p-3">
                  <pre className="text-[#c9d1d9] text-sm whitespace-pre-wrap overflow-x-auto">{example.json}</pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kom i gang */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>kom-i-gang</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[1]</span>Åbn (eller opret) <code className="text-[#7ee787]">.claude/settings.json</code> i jeres projekt</p>
            <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[2]</span>Tilføj <code className="text-[#7ee787]">hooks</code>-sektionen med jeres ønskede triggers</p>
            <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[3]</span>Test det: bed Claude om at redigere en fil og verificér, at hooket kører</p>
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
              'Kombinér flere hooks: Kør Prettier OG ESLint efter hver ændring',
              'Conditional hooks: Kør kun hooks på bestemte filtyper (.ts, .tsx)',
              'Notifikations-hook: Spil en lyd eller send en besked, når Claude er færdig',
              'Tilgængeligheds-hook: Kør automatisk en axe-core-check efter UI-ændringer',
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
              'Konfigurér et PostToolUse hook der kører Prettier og ESLint efter hver fil-ændring',
              'Opret et sikkerhedshook der blokerer rm -rf og force push kommandoer',
              'Lav et hook der automatisk kører mine tests når du ændrer kode i src/',
            ].map((prompt, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#c9d1d9] text-sm italic">&quot;{prompt}&quot;</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-l-2 border-[#58a6ff] pl-4 py-2">
            <p className="text-[#8b949e] text-sm">
              <strong className="text-[#58a6ff]">Docs:</strong>{' '}
              <a href="https://code.claude.com/docs/en/hooks" className="text-[#58a6ff] hover:text-[#79c0ff] underline" target="_blank" rel="noopener noreferrer">
                Hooks reference
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
