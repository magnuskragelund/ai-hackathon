import { Terminal, Zap, Briefcase, Calendar, ChevronRight, MapPin, Gamepad2, PartyPopper, Download, Activity } from 'lucide-react';
import Link from 'next/link';

const cases = [
  {
    id: 'CASE_001',
    title: 'Konference Check-in',
    difficulty: 'SVÆR' as const,
    description: 'Brug jeres AI-kodningsværktøj til at vibe-code en check-in-app til konferencer — med live API og realistisk testdata.',
    tech: ['REST API', 'AI-kodning', 'Valgfrit framework'],
    link: '/case/1'
  },
  {
    id: 'CASE_002',
    title: 'NPS Web App til Medlemsfeedback',
    difficulty: 'SVÆR' as const,
    description: 'Forvandl rå NPS-data fra ~7.900 medlemsbesvarelser til et interaktivt analyseværktøj med AI-drevet sentimentanalyse og trendidentifikation.',
    tech: ['Claude API', 'Data visualisering', 'CSV/JSON'],
    link: '/case/3'
  },
];

const sideQuests = [
  { task: 'Forbind til en MCP-server', tag: '[ANBEFALET]', icon: '🔌', link: '/quest/mcp-server' },
  { task: 'CLAUDE.md som Team-Kontrakt', tag: '[ANBEFALET]', icon: '📜', link: '/quest/claude-md' },
  { task: 'Byg jeres egne Skills', tag: '[DEEP DIVE]', icon: '⚡', link: '/quest/skills' },
  { task: 'Byg et Custom Agent', tag: '[DEEP DIVE]', icon: '🤖', link: '/quest/custom-agent' },
  { task: 'Sæt Hooks op', tag: '[SOLID MOVE]', icon: '🪝', link: '/quest/hooks' },
  { task: 'Kør Claude Code Headless', tag: '[SOLID MOVE]', icon: '🖥️', link: '/quest/headless' },
  { task: 'Screenshot-Driven Development', tag: '[KREATIV]', icon: '📸', link: '/quest/screenshot-driven' },
  { task: 'Tilgængelighed (WCAG 2.1 AA)', tag: '[QUICK WIN]', icon: '♿', link: '/quest/tilgaengelighed' },
  { task: 'Wildcard — Kombinér det hele', tag: '[LEGENDARY]', icon: '🃏', link: '/quest/wildcard' },
];

const nonDevQuests = [
  { task: 'Figma Make Deep Dive', tag: '[KREATIV]', icon: '🎨', link: '/quest/figma-make' },
  { task: 'UX & Design', tag: '[KREATIV]', icon: '✏️', link: '/quest/ux-design' },
  { task: 'Produkt & PO', tag: '[STRATEGISK]', icon: '🎯', link: '/quest/produkt-po' },
  { task: 'Ledelse & Forretning', tag: '[BUSINESS]', icon: '💼', link: '/quest/ledelse-forretning' },
  { task: 'Drift & Ops', tag: '[DEEP DIVE]', icon: '🔧', link: '/quest/drift-ops' },
];

const schedule = {
  daytime: {
    title: 'DAGSPROGRAM',
    events: [
      { time: '09:15', event: 'Velkomst, grupper & casepræsentation', status: 'opening' },
      { time: '09:25', event: 'Show and tell: "Fra ur til applikation"', status: 'normal' },
      { time: '10:10', event: 'Hackathon-session starter! 🎯', status: 'start' },
      { time: '13:00', event: 'Kort plenum til erfaringsudveksling', status: 'normal' },
      { time: '16:00', event: 'Deadline & præsentationer ⏰', status: 'deadline' },
      { time: '16:30', event: 'Energizer & afrunding', status: 'normal' },
      { time: '16:45', event: 'Praktisk afslutning', status: 'closing' },
    ]
  },
  evening: {
    title: 'AFTENPROGRAM',
    events: [
      { time: '17:00', event: 'After ski — snacks & drinks i DUBAI-afsnittet', status: 'normal' },
      { time: '17:50', event: 'Afgang mod restaurant', status: 'normal' },
      { time: '18:30', event: 'Middag på Bistro Royal 🍽️', status: 'start' },
    ]
  }
};

function getEventColor(status: string) {
  switch (status) {
    case 'important': return 'text-[#f85149]';
    case 'start': return 'text-[#7ee787]';
    case 'opening': return 'text-[#58a6ff]';
    case 'workshop': return 'text-[#a371f7]';
    case 'deadline': return 'text-[#f85149] font-bold';
    case 'closing': return 'text-[#58a6ff]';
    default: return 'text-[#c9d1d9]';
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono p-6">
      {/* Header med ASCII Art */}
      <header className="mb-12 border-2 border-[#30363d] bg-[#161b22] p-6">
        <pre className="text-[#58a6ff] text-[0.55rem] leading-tight sm:text-xs md:text-sm overflow-x-auto flex justify-center">
{`
██╗  ██╗ █████╗  ██████╗██╗  ██╗ █████╗ ████████╗██╗  ██╗ ██████╗ ███╗   ██╗
██║  ██║██╔══██╗██╔════╝██║ ██╔╝██╔══██╗╚══██╔══╝██║  ██║██╔═══██╗████╗  ██║
███████║███████║██║     █████╔╝ ███████║   ██║   ███████║██║   ██║██╔██╗ ██║
██╔══██║██╔══██║██║     ██╔═██╗ ██╔══██║   ██║   ██╔══██║██║   ██║██║╚██╗██║
██║  ██║██║  ██║╚██████╗██║  ██╗██║  ██║   ██║   ██║  ██║╚██████╔╝██║ ╚████║
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
`}
        </pre>
        <div className="mt-4 text-[#8b949e] text-sm">
          <span className="text-[#7ee787]">v2026.03.04</span> - Fra idé til produkt på én dag
        </div>
        <div className="mt-2 text-[#8b949e] text-sm">
          <span className="animate-pulse">▊</span> System klar. Alle deltagere tilsluttet.
        </div>
      </header>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Kom godt i gang */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <div className="border-b border-[#30363d] bg-[#161b22] p-4 flex items-center gap-3">
            <Terminal className="w-5 h-5 text-[#7ee787]" />
            <h2 className="text-lg">
              <span className="text-[#8b949e]">~/</span>
              <span className="text-[#58a6ff]">kom-i-gang</span>
            </h2>
          </div>
          <div className="p-6">
            <Link href="/installation" className="flex items-center justify-between border border-[#30363d] bg-[#161b22] hover:border-[#7ee787] transition-colors p-4 mb-3">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-[#7ee787]" />
                <div>
                  <p className="text-[#c9d1d9] text-sm">Installér Claude Code</p>
                  <p className="text-[#8b949e] text-xs mt-0.5">Licens, Docker og opsætning — step for step</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8b949e]" />
            </Link>
            <a href="https://claude.ai/settings/usage" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-[#30363d] bg-[#161b22] hover:border-[#d29922] transition-colors p-4 mb-6">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-[#d29922]" />
                <div>
                  <p className="text-[#c9d1d9] text-sm">Hold øje med dit tokenforbrug</p>
                  <p className="text-[#8b949e] text-xs mt-0.5">Tjek dit forbrug løbende på claude.ai/settings/usage</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8b949e]" />
            </a>
            <div className="space-y-4">
              {[
                {
                  num: '01',
                  text: 'Mød din makker',
                  code: '# Hvad er din erfaring med AI-værktøjer? Hvad er du god til? Hvad vil du gerne lære i dag?',
                  codeColor: 'text-[#8b949e]',
                },
                {
                  num: '02',
                  text: 'Vælg en case og læs den sammen',
                  code: '# I bestemmer selv vinklen — deltager, vært eller noget helt eget.',
                  codeColor: 'text-[#8b949e]',
                },
                {
                  num: '03',
                  text: 'Åbn jeres AI-værktøj og beskriv hvad I vil bygge',
                  code: '# Ingen kode kræves for at komme i gang — begynd med at fortælle Claude hvad I forestiller jer.',
                  codeColor: 'text-[#8b949e]',
                },
                {
                  num: '04',
                  text: 'Aftal frokost med jeres gruppe',
                  code: '# I bestemmer selv hvornår I spiser — bestil et tidspunkt i kantinen og koordinér med jeres makker.',
                  codeColor: 'text-[#8b949e]',
                },
                {
                  num: '05',
                  text: 'Byg, iterér og hav det sjovt',
                  code: '# I dag handler det ikke om perfekt kode. Det handler om at lære, eksperimentere og se hvad AI kan.',
                  codeColor: 'text-[#8b949e]',
                },
              ].map((step) => (
                <div key={step.num} className="flex gap-3">
                  <span className="text-[#7ee787]">$</span>
                  <div className="flex-1">
                    <p className="text-[#c9d1d9] mb-2">
                      <span className="text-[#f85149]">{step.num}.</span> {step.text}
                    </p>
                    <code className={`block bg-[#161b22] border border-[#30363d] p-3 ${step.codeColor} text-sm overflow-x-auto`}>
                      {step.code}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <div className="border-b border-[#30363d] bg-[#161b22] p-4 flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-[#d29922]" />
            <h2 className="text-lg">
              <span className="text-[#8b949e]">~/</span>
              <span className="text-[#58a6ff]">udfordringer</span>
            </h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {cases.map((caseItem) => (
                <Link
                  key={caseItem.id}
                  href={caseItem.link}
                  className="block"
                >
                  <div className="border border-[#30363d] bg-[#161b22] p-4 hover:border-[#58a6ff] transition-colors h-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#f85149] text-sm">[{caseItem.id}]</span>
                      <span className={`text-xs px-2 py-1 border ${
                        caseItem.difficulty === 'SVÆR'
                          ? 'border-[#f85149] text-[#f85149]'
                          : 'border-[#d29922] text-[#d29922]'
                      }`}>
                        {caseItem.difficulty}
                      </span>
                    </div>
                    <h3 className="text-[#c9d1d9] mb-2">{caseItem.title}</h3>
                    <p className="text-[#8b949e] text-sm mb-3">{caseItem.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {caseItem.tech.map((tech) => (
                        <span key={tech} className="text-xs bg-[#0d1117] border border-[#30363d] px-2 py-1 text-[#7ee787]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-end">
                      <ChevronRight className="w-4 h-4 text-[#8b949e]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Side Quests */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <div className="border-b border-[#30363d] bg-[#161b22] p-4 flex items-center gap-3">
            <Gamepad2 className="w-5 h-5 text-[#7ee787]" />
            <h2 className="text-lg">
              <span className="text-[#8b949e]">~/</span>
              <span className="text-[#58a6ff]">side-quests</span>
            </h2>
          </div>
          <div className="p-6">
            <p className="text-[#8b949e] text-sm mb-4">Ekstra tekniske udfordringer for dem der vil gå all in.</p>
            <div className="space-y-3">
              {sideQuests.map((quest, idx) => (
                <Link key={idx} href={quest.link} className="block">
                  <div className="flex items-center justify-between border border-[#30363d] bg-[#161b22] p-4 hover:border-[#7ee787] transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{quest.icon}</span>
                      <span className="text-[#c9d1d9] text-sm">{quest.task}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#7ee787] text-sm">{quest.tag}</span>
                      <ChevronRight className="w-4 h-4 text-[#8b949e]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Non-Dev Quests */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <div className="border-b border-[#30363d] bg-[#161b22] p-4 flex items-center gap-3">
            <PartyPopper className="w-5 h-5 text-[#a371f7]" />
            <h2 className="text-lg">
              <span className="text-[#8b949e]">~/</span>
              <span className="text-[#58a6ff]">non-dev-quests</span>
            </h2>
          </div>
          <div className="p-6">
            <p className="text-[#8b949e] text-sm mb-4">Ikke alt handler om kode - vis jeres kreative side!</p>
            <div className="space-y-3">
              {nonDevQuests.map((quest, idx) => (
                <Link key={idx} href={quest.link} className="block">
                  <div className="flex items-center justify-between border border-[#30363d] bg-[#161b22] p-4 hover:border-[#a371f7] transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{quest.icon}</span>
                      <span className="text-[#c9d1d9] text-sm">{quest.task}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#a371f7] text-sm">{quest.tag}</span>
                      <ChevronRight className="w-4 h-4 text-[#8b949e]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Program */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <div className="border-b border-[#30363d] bg-[#161b22] p-4 flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#a371f7]" />
            <h2 className="text-lg">
              <span className="text-[#8b949e]">~/</span>
              <span className="text-[#58a6ff]">program</span>
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {Object.values(schedule).map((day, dayIdx) => (
                <div key={dayIdx}>
                  <h3 className="text-[#58a6ff] mb-3 pb-2 border-b border-[#30363d]">
                    {day.title}
                  </h3>
                  <div className="space-y-2">
                    {day.events.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 text-sm">
                        <span className="text-[#7ee787] w-16">{item.time}</span>
                        <span className="text-[#8b949e]">|</span>
                        <span className={`flex-1 ${getEventColor(item.status)}`}>
                          {item.event}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lokation */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <div className="border-b border-[#30363d] bg-[#161b22] p-4 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#f85149]" />
            <h2 className="text-lg">
              <span className="text-[#8b949e]">~/</span>
              <span className="text-[#58a6ff]">lokation</span>
            </h2>
          </div>
          <div className="p-6">
            <div className="mb-4 space-y-1 text-sm">
              <p className="text-[#8b949e]">Lokation for fælles middag</p>
              <p className="text-[#c9d1d9]">Bistro Royal</p>
              <p className="text-[#8b949e]">Kongens Nytorv 26, 1050 København K</p>
            </div>
            <div className="border border-[#30363d] overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1124.5!2d12.5856!3d55.6794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253180588db29%3A0x37afab15b2a3a049!2sKongens%20Nytorv%2026%2C%201050%20K%C3%B8benhavn!5e0!3m2!1sda!2sdk!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Markør oven på kortet - upåvirket af filtre */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none">
                <div className="flex flex-col items-center">
                  <div className="bg-[#f85149] border-2 border-[#0d1117] px-2 py-1 text-xs text-white mb-1">
                    BISTRO ROYAL
                  </div>
                  <div className="w-3 h-3 bg-[#f85149] border-2 border-[#0d1117] rotate-45"></div>
                  <div className="w-2 h-2 bg-[#f85149] rounded-full mt-1 animate-ping opacity-75"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t-2 border-[#30363d] pt-6 text-center">
          <pre className="text-[#8b949e] text-xs">
{`
┌──────────────────────────────────────────────────────────────────────┐
│  Brug for hjælp? Tag fat i en kollega.                              │
│  Sammy, Brian, Marc, Lasse og Magnus er klar til at hjælpe.         │
│  Husk: Innovation opstår i krydsfeltet mellem kreativitet,          │
│  teknologi og vores forskellige fagligheder. Held og lykke! 🚀      │
└──────────────────────────────────────────────────────────────────────┘
`}
          </pre>
          <p className="text-[#8b949e] text-sm mt-4">
            <span className="text-[#7ee787]">▊</span> Systemstatus: Alle systemer kører
          </p>
        </footer>
      </div>
    </div>
  );
}
