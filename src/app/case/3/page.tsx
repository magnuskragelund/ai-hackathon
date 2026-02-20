import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const del2Quests = [
  { id: 'A', task: 'AI-drevet sentimentanalyse', tag: '[DEEP DIVE]', items: [
    'Gå ud over NPS-scoren — analysér den emotionelle tone i tekstsvarene',
    'Visualisér sentimentfordeling per domæne, segment eller over tid',
    'Fremhæv svar hvor score og sentiment ikke stemmer overens (fx score 8 men negativ kommentar)',
  ]},
  { id: 'B', task: 'Summary Generator', tag: '[QUICK WIN]', items: [
    'En knap der genererer en naturlig opsummering af den aktuelle filtrerede visning',
    '"Her er hvad medlemmer siger om forsikring i Q2 2025…"',
  ]},
  { id: 'C', task: 'Sammenligningsvisning', tag: '[SOLID MOVE]', items: [
    'Side-by-side sammenligning af to domæner, segmenter eller tidsperioder',
    'Fremhæv forskelle i scorer, temaer og sentiment',
  ]},
  { id: 'D', task: 'Alert / Anomali-detektor', tag: '[DEEP DIVE]', items: [
    'Flag usædvanlige stigninger i negative svar for et domæne',
    '"Heads up: Detractor-svar om fakturering steg 40% dette kvartal"',
    'Kan være en visuel indikator på dashboardet eller en simuleret notifikation',
  ]},
  { id: 'E', task: 'Brugerdefineret rapportbygger', tag: '[ANBEFALET]', items: [
    'Lad brugere konfigurere deres egen visning: vælg metrics, filtre og tidsperioder',
    'Eksportér som PDF eller delbart link',
    'Gem konfigurationer per bruger/rolle',
  ]},
  { id: 'F', task: 'Handlingsrettede anbefalinger', tag: '[SOLID MOVE]', items: [
    'Lad AI\'en foreslå konkrete handlinger baseret på dataen',
    '"Overvej at prioritere mobil-app-performance — 34% af detractor-kommentarer nævner loading-tider"',
    'Knyt anbefalinger til specifik evidens fra besvarelserne',
  ]},
  { id: 'G', task: 'Det virtuelle IDA-medlem', tag: '[LEGENDARY]', items: [
    'Byg en AI-agent der repræsenterer den samlede stemme fra medlemmernes NPS-besvarelser',
    'Brug RAG (Retrieval-Augmented Generation) med embeddings og semantisk søgning',
    'Giv agenten en persona: den skal forankre svar i faktisk data og angive datagrundlaget',
    'Lad brugeren filtrere hvilken "medlemsgruppe" agenten repræsenterer',
  ]},
  { id: 'H', task: 'Wildcard: Jeres egen idé', tag: '[WILDCARD]', items: [
    'Har I en idé der ikke står på listen? Gå efter den!',
  ]},
];

function getTagColor(tag: string) {
  switch (tag) {
    case '[ANBEFALET]': return 'text-[#7ee787]';
    case '[DEEP DIVE]': return 'text-[#58a6ff]';
    case '[SOLID MOVE]': return 'text-[#d29922]';
    case '[QUICK WIN]': return 'text-[#a371f7]';
    case '[LEGENDARY]': return 'text-[#f85149]';
    case '[WILDCARD]': return 'text-[#8b949e]';
    default: return 'text-[#7ee787]';
  }
}

export default function NpsCaseDetail() {
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
            <span className="text-[#f85149] text-sm">[CASE_003]</span>
            <h1 className="text-xl text-[#c9d1d9]">NPS Web App til Medlemsfeedback</h1>
            <span className="text-xs px-2 py-1 border border-[#f85149] text-[#f85149]">SVÆR</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Udfordringen */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>udfordringen
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p className="text-[#c9d1d9]">
              IDA indsamler NPS-data (Net Promoter Score) fra medlemmer — både som en{' '}
              <strong className="text-[#7ee787]">numerisk score (0–10)</strong> og som{' '}
              <strong className="text-[#7ee787]">fritekstbesvarelser</strong> på spørgsmålet{' '}
              <em>"Vil du anbefale IDA?"</em> på dansk og engelsk.
            </p>
            <p className="text-[#c9d1d9]">
              Den numeriske NPS-score er en del af IDAs strategiske mål, hvor vi desværre har set et fald
              fra 2024 til 2025. Tekstbesvarelserne bliver i dag kun brugt i begrænset omfang, og vi har
              endnu ikke udfoldet de trends, indsigter og mønstre, som medlemmerne faktisk fortæller os.
            </p>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22] my-6">
              <p className="text-[#8b949e] text-sm mb-1">JERES MISSION</p>
              <p className="text-[#c9d1d9]">
                Brug Claude Code til at bygge en webapplikation, der forvandler rå NPS-data til et
                interaktivt og indsigtsfuldt værktøj — så medarbejdere, ledere og direktion i IDA kan
                følge medlemmernes besvarelser, spotte mønstre og dykke ned i det, der er relevant for
                netop deres forretningsområde.
              </p>
            </div>
          </div>
        </section>

        {/* Data */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>data
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <p className="text-[#c9d1d9] mb-4">
            I modtager et anonymiseret datasæt med ca. <strong className="text-[#7ee787]">7.900 besvarelser</strong>{' '}
            fordelt over 2024 og 2025 i CSV-format.
          </p>

          <div className="border border-[#30363d] bg-[#161b22] overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#30363d]">
                  <th className="text-left p-3 text-[#58a6ff]">Datafelt</th>
                  <th className="text-left p-3 text-[#58a6ff]">Beskrivelse</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { field: 'År', desc: 'Besvarelsens år (2024–2025)' },
                  { field: 'Kvartal', desc: 'Kvartal (Q1–Q4)' },
                  { field: 'Åbne besvarelser', desc: 'Fritekstsvar fra medlemmet — her gemmer de vigtigste indsigter sig' },
                  { field: 'NPS Score', desc: 'Score fra 0–10' },
                  { field: 'Sprog', desc: 'Besvarelsens sprog (dansk/engelsk)' },
                  { field: 'Land', desc: 'Medlemmets bopælsland' },
                  { field: 'Stamdata', desc: 'Kreds/region, beskæftigelse og alder' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-[#30363d] last:border-0">
                    <td className="p-3 text-[#7ee787]">{row.field}</td>
                    <td className="p-3 text-[#8b949e]">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Del 1 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>del-1-fundamentet
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <p className="text-[#c9d1d9] mb-4">
            Byg en fungerende webapplikation med Claude Code, der som minimum indeholder:
          </p>

          <div className="space-y-4">
            <div className="border border-[#30363d] bg-[#161b22] p-4">
              <h3 className="text-[#d29922] mb-3">1. NPS Score Dashboard</h3>
              <ul className="space-y-2">
                {[
                  'Vis den overordnede NPS-score (% Promoters − % Detractors)',
                  'Visualisér scorefordelingen (0–10) — overvej hvilken visualiseringsform der kommunikerer bedst',
                  'Vis udviklingen over tid (år/kvartal)',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#30363d] bg-[#161b22] p-4">
              <h3 className="text-[#d29922] mb-3">2. Temaer og tendenser fra tekstbesvarelser</h3>
              <p className="text-[#8b949e] text-sm mb-3">
                Med ~5.000 tekstsvar er det umuligt at læse sig til overblik. Find måder at gøre besvarelserne overskuelige og handlingsbare:
              </p>
              <ul className="space-y-2">
                {[
                  { label: 'Gruppering', desc: 'Hvordan kategoriserer I svar, så mønstre træder frem?' },
                  { label: 'Hyppige temaer', desc: 'Identificér og visualisér de mest omtalte emner (tag cloud, cluster-view, rangeret liste)' },
                  { label: 'Promoters vs. Detractors', desc: 'Hvad fylder for dem der elsker IDA — og hvad fylder for dem der ikke gør?' },
                  { label: 'Kvartals-overblik', desc: '"Hvad nævner medlemmer mest i dette kvartal?"' },
                  { label: 'Domænefilter', desc: 'Gør det nemt at filtrere på emner som forsikring, arrangementer, karriere, løn osv.' },
                ].map((item, idx) => (
                  <li key={idx} className="text-sm">
                    <span className="text-[#7ee787]">{item.label}:</span>{' '}
                    <span className="text-[#8b949e]">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#a371f7] bg-[#161b22] p-4">
              <h3 className="text-[#a371f7] mb-3">Til designere, UX&apos;ere, PO&apos;er og BI&apos;ere</h3>
              <p className="text-[#8b949e] text-sm mb-3">
                Claude Code kan generere UI og datavisualiseringer hurtigt — men det kræver mennesker at gøre det brugbart. Overvej:
              </p>
              <ul className="space-y-2">
                {[
                  { label: 'Informationsarkitektur', desc: 'Hvad skal brugeren se først? Hvad er den vigtigste historie i dataen?' },
                  { label: 'Brugerrejsen', desc: 'En produktejer vil noget andet end en direktør. Hvordan understøtter I begge?' },
                  { label: 'Datapræsentation', desc: 'Hvornår er et diagram bedre end et tal? Hvornår hjælper farver — og hvornår forvirrer de?' },
                ].map((item, idx) => (
                  <li key={idx} className="text-sm">
                    <span className="text-[#a371f7]">{item.label}:</span>{' '}
                    <span className="text-[#8b949e]">{item.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#8b949e] text-sm mt-3">
                Skitser på papir eller whiteboard først. Tag et billede af jeres skitse, vis det til Claude Code,
                beskriv hvad I ønsker — og iterér derfra. I styrer retningen, Claude Code bygger det.
              </p>
            </div>
          </div>
        </section>

        {/* Del 2 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>del-2-fri-leg
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <p className="text-[#8b949e] text-sm mb-4">
            Vælg de opgaver I synes er sjove og kan nå — eller find på jeres egne features.
          </p>

          <div className="space-y-3">
            {del2Quests.map((quest) => (
              <div
                key={quest.id}
                className="flex items-start justify-between border border-[#30363d] bg-[#161b22] p-4 hover:border-[#58a6ff] transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#f85149] text-sm">[{quest.id}]</span>
                    <span className="text-[#c9d1d9] text-sm">{quest.task}</span>
                  </div>
                  <ul className="space-y-1 pl-6">
                    {quest.items.map((item, idx) => (
                      <li key={idx} className="text-[#8b949e] text-sm">
                        <span className="text-[#7ee787] mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className={`text-sm ml-4 shrink-0 ${getTagColor(quest.tag)}`}>{quest.tag}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#30363d] bg-[#161b22] px-6 py-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-[#8b949e] text-sm">
          <span className="text-[#7ee787]">▊</span> Held og lykke! Husk at committe tidligt og ofte.
        </div>
      </footer>
    </div>
  );
}
