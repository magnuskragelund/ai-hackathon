import { Terminal, Zap, Briefcase, Calendar, ChevronRight, MapPin, Gamepad2, PartyPopper } from 'lucide-react';
import Link from 'next/link';

const cases = [
  {
    id: 'CASE_001',
    title: 'AI-drevne udviklerværktøjer',
    difficulty: 'SVÆR' as const,
    description: 'Byg en intelligent kodeassistent, der forstår kontekst og giver forslag i realtid.',
    tech: ['Python', 'TensorFlow', 'React'],
    link: '/case/1'
  },
  {
    id: 'CASE_002',
    title: 'Bæredygtigt by-dashboard',
    difficulty: 'MIDDEL' as const,
    description: 'Lav et realtids-dashboard til at tracke CO2-udledning og bæredygtighedsmålinger.',
    tech: ['Node.js', 'D3.js', 'PostgreSQL'],
    link: '#'
  },
];

const sideQuests = [
  { task: 'Deploy din løsning til produktion', tag: '[ANBEFALET]', icon: '🚀' },
  { task: 'Implementér testdækning (>80%)', tag: '[DEEP DIVE]', icon: '✅' },
  { task: 'Lav API-dokumentation', tag: '[SOLID MOVE]', icon: '📚' },
  { task: 'Tilføj dark/light mode toggle', tag: '[QUICK WIN]', icon: '🌓' },
];

const nonDevQuests = [
  { task: 'Lav en 2-minutters pitch-video', tag: '[ANBEFALET]', icon: '🎬' },
  { task: 'Design et logo til jeres projekt', tag: '[FUN]', icon: '🎨' },
  { task: 'Skriv et blogindlæg om jeres proces', tag: '[DEEP DIVE]', icon: '✍️' },
  { task: 'Tag det bedste hold-selfie', tag: '[LEGENDARY]', icon: '📸' },
];

const schedule = {
  daytime: {
    title: 'DAGSPROGRAM',
    events: [
      { time: '08:30', event: 'Ankomst & morgenmad', status: 'opening' },
      { time: '09:00', event: 'Velkomst & intro til dagens udfordringer', status: 'important' },
      { time: '09:30', event: 'Holddannelse & hacking begynder! 🎯', status: 'start' },
      { time: '12:00', event: 'Frokost', status: 'normal' },
      { time: '12:30', event: 'Hacking fortsætter', status: 'normal' },
      { time: '15:00', event: 'Deadline for aflevering! ⏰', status: 'deadline' },
      { time: '15:30', event: 'Projektpræsentationer', status: 'important' },
      { time: '16:30', event: 'Bedømmelse & prisoverrækkelse', status: 'closing' },
    ]
  },
  evening: {
    title: 'AFTENPROGRAM',
    events: [
      { time: '17:00', event: 'Drinks & networking', status: 'normal' },
      { time: '18:00', event: 'Fælles middag', status: 'normal' },
      { time: '19:00', event: 'Fri bar & fest 🎉', status: 'start' },
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
        <pre className="text-[#58a6ff] text-sm md:text-base overflow-x-auto text-center">
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
          <span className="text-[#7ee787]">v2026.03.04</span> - Byg fremtiden på 48 timer
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
            <div className="space-y-4">
              {[
                { num: '01', text: 'Klon starter-repositoryet', code: 'git clone https://github.com/hackathon/starter-kit.git', codeColor: 'text-[#7ee787]' },
                { num: '02', text: 'Installér dependencies og sæt miljøet op', code: 'npm install && npm run setup', codeColor: 'text-[#7ee787]' },
                { num: '03', text: 'Hop på Discord-serveren for support i realtid', code: 'https://discord.gg/hackathon2026', codeColor: 'text-[#58a6ff]' },
                { num: '04', text: 'Begynd at bygge og push commits løbende', code: 'npm run dev # God hacking! 🚀', codeColor: 'text-[#7ee787]' },
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
                <div
                  key={idx}
                  className="flex items-center justify-between border border-[#30363d] bg-[#161b22] p-3 hover:border-[#7ee787] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{quest.icon}</span>
                    <span className="text-[#c9d1d9] text-sm">{quest.task}</span>
                  </div>
                  <span className="text-[#7ee787] text-sm">{quest.tag}</span>
                </div>
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
                <div
                  key={idx}
                  className="flex items-center justify-between border border-[#30363d] bg-[#161b22] p-3 hover:border-[#a371f7] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{quest.icon}</span>
                    <span className="text-[#c9d1d9] text-sm">{quest.task}</span>
                  </div>
                  <span className="text-[#a371f7] text-sm">{quest.tag}</span>
                </div>
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
