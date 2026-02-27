import { ArrowLeft, Terminal, Monitor, Apple, Zap, KeyRound } from 'lucide-react';
import Link from 'next/link';

function Step({ num, children }: { num: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="text-[#f85149] text-sm mt-0.5 w-6 shrink-0">{String(num).padStart(2, '0')}.</span>
      <div className="flex-1 text-[#c9d1d9] text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function CodeBlock({ children, lang = '' }: { children: string; lang?: string }) {
  return (
    <div className="border border-[#30363d] bg-[#0d1117] overflow-x-auto">
      {lang && (
        <div className="border-b border-[#30363d] px-3 py-1">
          <span className="text-[#8b949e] text-xs">{lang}</span>
        </div>
      )}
      <code className="block p-3 text-[#58a6ff] text-sm">{children}</code>
    </div>
  );
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="border-b border-[#30363d] bg-[#161b22] p-4 flex items-center gap-3">
      {icon}
      <h2 className="text-lg">
        <span className="text-[#8b949e]">~/</span>
        <span className="text-[#58a6ff]">{title}</span>
      </h2>
    </div>
  );
}

export default function InstallationPage() {
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
            <span className="text-[#7ee787] text-sm border border-[#7ee787] px-2 py-0.5 text-xs">[QUICK WIN]</span>
            <h1 className="text-xl text-[#c9d1d9]">Claude Code — Installationsguide</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-10">

        {/* Overblik */}
        <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22]">
          <p className="text-[#8b949e] text-sm mb-1">KORT OVERBLIK</p>
          <p className="text-[#c9d1d9] text-sm leading-relaxed">
            Du skal <span className="text-[#7ee787]">1)</span> anskaffe en Claude Pro-licens,{' '}
            <span className="text-[#7ee787]">2)</span> installere Docker Desktop (+ WSL hvis du er på Windows),{' '}
            <span className="text-[#7ee787]">3)</span> installere Claude Code, og{' '}
            <span className="text-[#7ee787]">4)</span> starte Claude Code i en Docker-sandbox.
          </p>
        </div>

        {/* Licens */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <SectionHeader icon={<KeyRound className="w-5 h-5 text-[#d29922]" />} title="licens" />
          <div className="p-6 space-y-5">
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              Inden du går i gang skal du have en <strong className="text-[#c9d1d9]">betalt Pro-licens</strong> til Claude.
              Den udførende part i gruppen anskaffer sig en individuel, månedligt betalt licens.
            </p>

            <div>
              <p className="text-[#8b949e] text-sm mb-3">Sådan får du en IDA-betalt licens <span className="text-[#d29922]">(må kun bruges i IDA-regi onsdag d. 4/3)</span>:</p>
              <div className="space-y-3">
                {[
                  'Find din private e-mail-konto frem — eller opret en til formålet (fx en frisk Gmail- eller Proton-konto)',
                  <>Naviger til: <a href="https://claude.com/pricing" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:text-[#79c0ff]">claude.com/pricing</a></>,
                  'Klik "Try Claude" under Pro-licensen',
                  'Registrer dig med mailen fra trin 1',
                  'Vælg månedlig betaling undervejs',
                  <>Betal for licensen: <span className="text-[#8b949e]">læg de 20 $ ud og få dem refunderet via Acubiz — eller lån Marcs, Jespers eller Magnus' Mastercard og send fakturaen til dem bagefter</span></>,
                  'Færdiggør registreringen',
                ].map((item, idx) => (
                  <Step key={idx} num={idx + 1}>{item}</Step>
                ))}
              </div>
            </div>

            <div className="border border-[#f85149] bg-[#0d1117] p-3">
              <p className="text-[#f85149] text-sm">
                <strong>OBS:</strong> Licensen må kun benyttes i IDA-regi på <strong>d. 4. marts 2026</strong>.
                Abonnementet skal opsiges efterfølgende (eller overtages til privat brug).
              </p>
            </div>
          </div>
        </section>

        {/* Hvorfor Docker */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <SectionHeader icon={<Terminal className="w-5 h-5 text-[#8b949e]" />} title="hvorfor-docker" />
          <div className="p-6">
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              Docker er et værktøj der kører programmer i en isoleret container. Vi bruger det til at køre
              Claude Code i en sandbox, så vi frit kan eksperimentere <span className="text-[#7ee787]">uden at give Claude adgang til alt på vores lokale maskiner</span>.
            </p>
          </div>
        </section>

        {/* Windows */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <SectionHeader icon={<Monitor className="w-5 h-5 text-[#58a6ff]" />} title="windows" />
          <div className="p-6 space-y-8">

            <div className="space-y-3">
              <h3 className="text-[#d29922] text-sm">Trin 1 — Installér WSL</h3>
              <p className="text-[#8b949e] text-sm">Åbn PowerShell som administrator og kør:</p>
              <CodeBlock lang="powershell">wsl --install</CodeBlock>
              <p className="text-[#8b949e] text-sm">Genstart din computer når installationen er færdig.</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-[#d29922] text-sm">Trin 2 — Installér Docker Desktop</h3>
              <div className="space-y-2">
                {[
                  <>Download <a href="https://docs.docker.com/desktop/release-notes/#4570" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:text-[#79c0ff]">Docker Desktop 4.55</a> (Windows)</>,
                  'Kør installeren og følg guiden',
                  'Sørg for at "Use WSL 2 based engine" er slået til under Settings → General',
                  'Genstart hvis Docker beder om det',
                ].map((item, idx) => (
                  <Step key={idx} num={idx + 1}>{item}</Step>
                ))}
              </div>
              <p className="text-[#8b949e] text-sm">Verificér at Docker kører:</p>
              <CodeBlock lang="powershell">docker --version</CodeBlock>
            </div>

            <div className="space-y-3">
              <h3 className="text-[#d29922] text-sm">Trin 3 — Installér Claude Code</h3>
              <p className="text-[#8b949e] text-sm">Åbn PowerShell med din alm. bruger og kør:</p>
              <CodeBlock lang="powershell">irm https://claude.ai/install.ps1 | iex</CodeBlock>
            </div>

            <div className="space-y-3">
              <h3 className="text-[#d29922] text-sm">Trin 4 — Start Claude Code i Docker</h3>
              <CodeBlock lang="powershell">docker sandbox run claude</CodeBlock>
            </div>

            <div className="space-y-3">
              <h3 className="text-[#d29922] text-sm">Trin 5 — Log ind</h3>
              <div className="space-y-2">
                {[
                  'Claude Code starter automatisk og beder dig logge ind',
                  'Du får vist et link og en kode',
                  'Åbn linket i din browser',
                  'Indsæt koden og log ind med din Anthropic-konto',
                ].map((item, idx) => (
                  <Step key={idx} num={idx + 1}>{item}</Step>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Mac */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <SectionHeader icon={<Apple className="w-5 h-5 text-[#58a6ff]" />} title="mac" />
          <div className="p-6 space-y-8">

            <div className="space-y-3">
              <h3 className="text-[#d29922] text-sm">Trin 1 — Installér Docker Desktop</h3>
              <div className="space-y-2">
                {[
                  <>Download <a href="https://docs.docker.com/desktop/release-notes/#4570" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:text-[#79c0ff]">Docker Desktop 4.55</a> (Mac)</>,
                  'Kør installeren og følg guiden',
                  'Genstart hvis Docker beder om det',
                ].map((item, idx) => (
                  <Step key={idx} num={idx + 1}>{item}</Step>
                ))}
              </div>
              <p className="text-[#8b949e] text-sm">Verificér at Docker kører:</p>
              <CodeBlock lang="bash">docker --version</CodeBlock>
            </div>

            <div className="space-y-3">
              <h3 className="text-[#d29922] text-sm">Trin 2 — Installér Claude Code</h3>
              <p className="text-[#8b949e] text-sm">Åbn Terminal og kør:</p>
              <CodeBlock lang="bash">curl -fsSL https://claude.ai/install.sh | bash</CodeBlock>
            </div>

            <div className="space-y-3">
              <h3 className="text-[#d29922] text-sm">Trin 3 — Start Claude Code i Docker</h3>
              <CodeBlock lang="bash">docker sandbox run claude</CodeBlock>
            </div>

            <div className="space-y-3">
              <h3 className="text-[#d29922] text-sm">Trin 4 — Log ind</h3>
              <div className="space-y-2">
                {[
                  'Claude Code starter automatisk og beder dig logge ind',
                  'Du får vist et link og en kode',
                  'Åbn linket i din browser',
                  'Indsæt koden og log ind med din Anthropic-konto',
                ].map((item, idx) => (
                  <Step key={idx} num={idx + 1}>{item}</Step>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Tokens */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <SectionHeader icon={<Zap className="w-5 h-5 text-[#d29922]" />} title="ved-udløb-af-tokens" />
          <div className="p-6 space-y-4">
            <p className="text-[#c9d1d9] text-sm leading-relaxed">
              Der er en grænse på, hvor mange tokens der kan bruges i abonnementet. Vi regner med at
              Pro-licensen er tilstrækkelig — tokenpuljen bliver jævnligt fyldt op i løbet af en dag.
            </p>
            <div className="border border-[#d29922] bg-[#0d1117] p-4">
              <p className="text-[#d29922] text-sm leading-relaxed">
                <strong>Skulle det ikke være nok:</strong> Den anden makker anskaffer sig en licens ved at
                følge trinene ovenfor. Man forbinder så til Claude Code gennem den makkers licens og
                fortsætter arbejdet med en frisk pulje tokens.
              </p>
            </div>
          </div>
        </section>

        {/* Tilstande */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <SectionHeader icon={<Terminal className="w-5 h-5 text-[#7ee787]" />} title="tilstande-i-claude-code" />
          <div className="p-6 space-y-4">
            <p className="text-[#8b949e] text-sm">
              Tryk <kbd className="border border-[#30363d] bg-[#161b22] px-1.5 py-0.5 text-[#c9d1d9] text-xs">Shift+Tab</kbd> for at skifte mellem tilstande:
            </p>
            <div className="space-y-3">
              {[
                { name: 'Accept Edits', desc: 'Claude redigerer filer uden at spørge, men beder stadig om lov til at køre kommandoer.' },
                { name: 'Plan Mode', desc: 'Claude analyserer og laver en plan, men ændrer ingenting. God til at tænke højt sammen med Claude.' },
                { name: 'Bypass Permissions', desc: 'Claude kører alt uden at spørge. Brug kun dette i en isoleret container (som vores Docker-setup).' },
              ].map((mode) => (
                <div key={mode.name} className="border border-[#30363d] bg-[#161b22] p-4">
                  <p className="text-[#7ee787] text-sm mb-1">{mode.name}</p>
                  <p className="text-[#8b949e] text-sm leading-relaxed">{mode.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-[#30363d] bg-[#161b22] px-6 py-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-[#8b949e] text-sm">
          <span className="text-[#7ee787]">▊</span> Klar til at bygge. Held og lykke!
        </div>
      </footer>
    </div>
  );
}
