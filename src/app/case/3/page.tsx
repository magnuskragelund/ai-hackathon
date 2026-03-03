import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const del2Quests = [
  { id: 'A', task: 'AI-drevet sentimentanalyse', tag: '[DEEP DIVE]', items: [
    'Gå ud over NPS-scoren — analysér den emotionelle tone i tekstsvarene',
    'Visualisér sentimentfordeling per domæne, segment eller over tid',
    'Fremhæv svar hvor score og sentiment ikke stemmer overens (fx score 8 men negativ kommentar)',
  ]},
  { id: 'B', task: 'AI drevet Summary Generator', tag: '[QUICK WIN]', items: [
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
  { id: 'G', task: 'AI drevet: Det virtuelle IDA-medlem', tag: '[LEGENDARY]', items: [
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
            <span className="text-[#f85149] text-sm">[CASE_002]</span>
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
              Forestil dig, at du skal gøre IDAs NPS-data brugbar for rigtige mennesker.
              IDA indsamler hvert år tusindvis af besvarelser fra medlemmer &mdash; både en{' '}
              <strong className="text-[#7ee787]">numerisk score (0–10)</strong> og{' '}
              <strong className="text-[#7ee787]">fritekstkommentarer</strong> om, hvorfor de
              anbefaler (eller ikke anbefaler) IDA. Dataen eksisterer. Indsigterne er der.
              Men de er begravede i et regneark.
            </p>
            <p className="text-[#c9d1d9]">
              NPS-scoren er en del af IDAs strategiske mål, og vi har set et fald fra 2024 til 2025.
              Tekstbesvarelserne bliver i dag kun brugt i begrænset omfang &mdash; de mønstre og
              signaler, som medlemmerne faktisk sender, er endnu ikke udfoldede.
            </p>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22] my-6">
              <p className="text-[#8b949e] text-sm mb-1">JERES MISSION</p>
              <p className="text-[#c9d1d9]">
                Brug jeres AI-værktøj til at gøre NPS-dataen levende &mdash; fra rå tal og tekstsvar
                til indsigter, der faktisk kan bruges. I vælger selv formatet: et dashboard, en
                analyse, en visualisering eller noget helt tredje. I vælger selv vinklen: hvem skal
                have mest gavn af det I bygger?{' '}
                <strong className="text-[#7ee787]">Medarbejdere</strong>,{' '}
                <strong className="text-[#7ee787]">ledere</strong>, eller find på noget eget.
              </p>
            </div>
          </div>
        </section>

        {/* Data og kontekst */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>data-og-kontekst
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <p className="text-[#c9d1d9] mb-4">
            I modtager et anonymiseret datasæt med ca.{' '}
            <strong className="text-[#7ee787]">7.900 besvarelser</strong> fordelt over 2024 og 2025.
            Her er hvad der er data om:
          </p>

          <div className="border border-[#30363d] bg-[#161b22] overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#30363d]">
                  <th className="text-left p-3 text-[#58a6ff]">Hvad er der data om</th>
                  <th className="text-left p-3 text-[#58a6ff]">Hvad indeholder det</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { field: 'NPS Score', desc: 'Medlemmets score fra 0–10' },
                  { field: 'Fritekstbesvarelse', desc: 'Medlemmets egne ord — her gemmer de vigtigste indsigter sig' },
                  { field: 'År & kvartal', desc: '2024–2025, opdelt pr. kvartal' },
                  { field: 'Sprog', desc: 'Dansk eller engelsk' },
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

          <p className="text-[#8b949e] text-sm mt-3">
            Datasættet udleveres ved hackathonets start — eller du kan{' '}
            <a
              href="https://ingeniorforeningenidanmark.sharepoint.com/:f:/s/ITUdviklingogArkitektur/IgAVSYEpOdLARbnaolLde064ATGWTN4zLWYbPXYqwWhDE60?e=zrniLU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline"
            >
              hente det her
            </a>
            .
          </p>
        </section>

        {/* Sådan kommer vi i gang */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>sådan-kommer-i-i-gang
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <p className="text-[#c9d1d9] mb-4 leading-relaxed">
            Der er ikke én rigtig måde at angribe denne case på. Fold den tilgang ud, der passer til dig.
          </p>

          <div className="space-y-3">
            {/* Dev accordion */}
            <details className="border border-[#30363d] bg-[#161b22] group">
              <summary className="p-4 cursor-pointer flex items-center justify-between list-none hover:bg-[#1c2128]">
                <div className="flex items-center gap-3">
                  <span className="text-[#7ee787] text-sm">[DEV]</span>
                  <span className="text-[#c9d1d9]">Udviklere — Byg med din AI-kodningsagent</span>
                </div>
                <span className="text-[#8b949e] text-sm group-open:hidden">+ fold ud</span>
                <span className="text-[#8b949e] text-sm hidden group-open:inline">− fold ind</span>
              </summary>
              <div className="px-4 pb-4 pt-2 border-t border-[#30363d] space-y-3">
                <p className="text-[#8b949e] text-sm leading-relaxed">
                  Brug Claude Code som din primære
                  samarbejdspartner — ikke bare til at generere kode, men til at drive hele
                  processen fremad.
                </p>
                <ul className="space-y-2">
                  {[
                    { label: 'Indlæs og forstå dataen', desc: 'Giv Claude Code CSV-filen og bed den analysere strukturen og bed den lægge en plan for del 1 af opgaven. .' },
                    { label: 'Byg applikationen', desc: 'Lad Claude skrive selve koden. Beskriv hvad du vil opnå, ikke hvordan.' },
                    { label: 'Brug AI til indsigter', desc: 'Vælger I at løse nogle af de opgaver, der kræver AI (Summary Generator, Det virtuelle IDA-medlem eller AI-drevet sentimentanalyse) kan I bruge OpenAIs GPT-4.1 via Azure. ' },
                    { label: 'Generér test-cases og dokumentation', desc: 'Bed agenten om at skrive tests og dokumentere løsningen undervejs.' },
                  ].map((item, idx) => (
                    <li key={idx} className="text-sm">
                      <span className="text-[#7ee787]">{item.label}:</span>{' '}
                      <span className="text-[#8b949e]">{item.desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="border border-[#d29922] bg-[#0d1117] p-3 mt-2">
                  <p className="text-[#d29922] text-sm">
                    <strong>Tip:</strong> Prøv fx:{' '}
                    <em>&quot;Her er de første 50 rækker fra CSV-filen. Hvad er de mest interessante mønstre, og hvad ville du bygge først?&quot;</em>
                  </p>
                </div>
              </div>
            </details>

            {/* Non-dev accordion */}
            <details className="border border-[#30363d] bg-[#161b22] group">
              <summary className="p-4 cursor-pointer flex items-center justify-between list-none hover:bg-[#1c2128]">
                <div className="flex items-center gap-3">
                  <span className="text-[#a371f7] text-sm">[NON-DEV]</span>
                  <span className="text-[#c9d1d9]">Ikke-udviklere — Analyse, design og prototyper</span>
                </div>
                <span className="text-[#8b949e] text-sm group-open:hidden">+ fold ud</span>
                <span className="text-[#8b949e] text-sm hidden group-open:inline">− fold ind</span>
              </summary>
              <div className="px-4 pb-4 pt-2 border-t border-[#30363d] space-y-3">
                <p className="text-[#8b949e] text-sm leading-relaxed">
                  Du behøver ikke skrive kode for at bidrage meningsfuldt. Her er tre veje ind:
                </p>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <span className="text-[#a371f7]">Claude Projects</span>
                    <span className="text-[#8b949e]"> — Byg et projekt op med kontekst om IDA, NPS og jeres målgruppe. Brug det til at stille spørgsmål til dataen og strukturere jeres fund.</span>
                  </li>
                  <li className="text-sm">
                    <span className="text-[#a371f7]">Figma Make</span>
                    <span className="text-[#8b949e]"> — Generér en prototype af et NPS-dashboard direkte fra en prompt. Skitser hvad I vil vise, beskriv det, og lad AI&apos;en oversætte det til et visuelt udkast.</span>
                  </li>
                </ul>
                <p className="text-[#8b949e] text-sm mt-2">
                  Tegn på papir eller whiteboard. Tag et billede og brug det som input til Figma Make eller Claude.
                  I styrer retningen — AI&apos;en udfører det.
                </p>
              </div>
            </details>
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
            I del 1 er opgaven den samme for alle: byg en løsning, der gør NPS-dataen overskuelig og brugbar.
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
      <section className="max-w-4xl mx-auto px-6 pb-8">
  <div className="mb-4">
    <h2 className="text-[#58a6ff] text-lg mb-2">
      <span className="text-[#8b949e]">~/</span>opsætning-azure-openai
    </h2>
    <div className="h-px bg-[#30363d]"></div>
  </div>

  <p className="text-[#8b949e] text-sm mb-4">
    Kun nødvendigt hvis I vælger en opgave der kræver AI (sentiment, summary, RAG osv.)
  </p>

  <details className="border border-[#30363d] bg-[#161b22] group">
    <summary className="p-4 cursor-pointer flex items-center justify-between list-none hover:bg-[#1c2128]">
      <div className="flex items-center gap-3">
        <span className="text-[#f85149] text-sm">[SETUP]</span>
        <span className="text-[#c9d1d9]">Azure OpenAI credentials</span>
      </div>
      <span className="text-[#8b949e] text-sm group-open:hidden">+ fold ud</span>
      <span className="text-[#8b949e] text-sm hidden group-open:inline">− fold ind</span>
    </summary>
    <div className="px-4 pb-4 pt-2 border-t border-[#30363d] space-y-3">
      <p className="text-[#8b949e] text-sm leading-relaxed">
        Sæt API-nøglen som miljøvariabel i jeres terminal:
      </p>

      <div className="border border-[#30363d] bg-[#0d1117] p-3 text-sm font-mono space-y-2">
        <p className="text-[#8b949e]"># Mac/Linux</p>
        <p className="text-[#c9d1d9]">export AZURE_OPENAI_API_KEY=&quot;nøgle-udleveres-på-dagen&quot;</p>
        <p className="text-[#8b949e] mt-2"># Windows (PowerShell)</p>
        <p className="text-[#c9d1d9]">$env:AZURE_OPENAI_API_KEY=&quot;nøgle-udleveres-på-dagen&quot;</p>
      </div>

      <div className="border border-[#30363d] bg-[#0d1117] overflow-x-auto">
        <table className="w-full text-sm">
          <tbody>
            {[
              { field: 'Endpoint', value: 'https://xxx.openai.azure.com/' },
              { field: 'API version', value: '2024-12-01-preview' },
              { field: 'Chat-model', value: 'gpt-4.1' },
              { field: 'Embedding-model', value: 'text-embedding-3-large' },
            ].map((row, idx) => (
              <tr key={idx} className="border-b border-[#30363d] last:border-0">
                <td className="p-3 text-[#7ee787]">{row.field}</td>
                <td className="p-3 text-[#c9d1d9] font-mono">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[#8b949e] text-sm">
        Nøglen gælder kun på dagen og slettes i Azure bagefter.
      </p>
    </div>
  </details>
</section>

      
      {/* Footer */}
      <footer className="border-t border-[#30363d] bg-[#161b22] px-6 py-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-[#8b949e] text-sm">
          <span className="text-[#7ee787]">▊</span> Held og lykke! Husk at committe tidligt og ofte.
        </div>
      </footer>
    </div>
  );
}
