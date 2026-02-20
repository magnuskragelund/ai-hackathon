import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CaseDetail() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      {/* Header */}
      <header className="border-b border-[#30363d] bg-[#161b22] px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] mb-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Tilbage til udfordringer</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#f85149] text-sm">[CASE_001]</span>
            <h1 className="text-xl text-[#c9d1d9]">AI-drevne udviklerværktøjer</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Overblik */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>overblik
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p className="text-[#c9d1d9]">
              Moderne softwareudvikling bliver stadig mere kompleks. Udviklere jonglerer med
              flere programmeringssprog, frameworks og værktøjer på samme tid. Selvom traditionelle
              IDE&apos;er tilbyder code completion og basale forslag, mangler de en dyb kontekstuel
              forståelse af udviklerens intention og projektets arkitektur.
            </p>

            <p className="text-[#c9d1d9]">
              Din udfordring er at bygge en AI-drevet udviklerassistent, der går langt ud over
              simpel autocomplete. Værktøjet skal forstå kodekontekst, opdage mønstre, foreslå
              arkitekturforbedringer og hjælpe udviklere med at skrive bedre kode hurtigere.
            </p>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22] my-6">
              <p className="text-[#8b949e] text-sm mb-1">HOVEDMÅL</p>
              <p className="text-[#c9d1d9]">
                Skab en intelligent kodeassistent, der giver kontekstbevidste forslag i realtid
                og forbedrer både udviklerproduktivitet og kodekvalitet.
              </p>
            </div>
          </div>
        </section>

        {/* Problemstilling */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>problemstilling
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p className="text-[#c9d1d9]">
              Udviklere bruger ca. 70% af deres tid på at læse og forstå kode - ikke på at
              skrive den. Nuværende værktøjer giver begrænset hjælp til:
            </p>

            <ul className="space-y-2 ml-6">
              {[
                'At forstå komplekse codebases med mange sammenhængende moduler',
                'At identificere code smells og potentielle bugs før de rammer produktion',
                'At foreslå optimale design patterns baseret på projektkontekst',
                'At opretholde konsistens på tværs af teamets bidrag',
              ].map((item, idx) => (
                <li key={idx} className="text-[#c9d1d9]">
                  <span className="text-[#7ee787] mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tekniske krav */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>krav
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-[#d29922] mb-3">Kernefunktioner (påkrævet)</h3>
              <div className="space-y-3">
                {[
                  {
                    num: '01',
                    title: 'Kontekstbevidst code completion',
                    desc: 'Implementér intelligent autocomplete, der forstår den aktuelle funktion, fil og projektkontekst. Skal understøtte mindst 3 populære programmeringssprog (Python, JavaScript eller Java).',
                  },
                  {
                    num: '02',
                    title: 'Kodeanalyse i realtid',
                    desc: 'Opdag almindelige code smells, potentielle bugs og sikkerhedssårbarheder mens udvikleren skriver. Giv handlingsrettede forslag med kodeeksempler.',
                  },
                  {
                    num: '03',
                    title: 'Dokumentationsgenerator',
                    desc: 'Generér automatisk meningsfulde dokumentationskommentarer baseret på kodeanalyse. Skal forstå funktionens formål, parametre og returværdier.',
                  },
                  {
                    num: '04',
                    title: 'Interaktiv demo-grænseflade',
                    desc: 'Byg en webbaseret grænseflade, der viser din AI-assistents funktioner. Inkludér en kodeeditor med live-forslag og analyseresultater.',
                  },
                ].map((req) => (
                  <div key={req.num} className="border border-[#30363d] bg-[#161b22] p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[#7ee787] text-sm mt-1">[{req.num}]</span>
                      <div className="flex-1">
                        <h4 className="text-[#c9d1d9] mb-2">{req.title}</h4>
                        <p className="text-[#8b949e] text-sm leading-relaxed">{req.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#a371f7] mb-3">Bonusfunktioner (valgfrie)</h3>
              <div className="space-y-2">
                {[
                  { pts: '+50', text: 'Integration med populære IDE\'er (VS Code, JetBrains)' },
                  { pts: '+75', text: 'Naturlig sproggenerering af kode fra kommentarer' },
                  { pts: '+40', text: 'Forslag til performanceoptimering' },
                  { pts: '+60', text: 'Samarbejdsfunktioner til teamets kodestandarder' },
                ].map((bonus, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-[#8b949e]">{bonus.pts}</span>
                    <span className="text-[#c9d1d9]">{bonus.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Teknologistak */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>tech_stack
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <div className="border border-[#30363d] bg-[#161b22] p-6">
            <pre className="text-sm text-[#c9d1d9] overflow-x-auto leading-relaxed">
{`{
  "anbefalet": {
    "backend": [
      "Python 3.9+",
      "TensorFlow / PyTorch",
      "FastAPI / Flask"
    ],
    "frontend": [
      "React 18+",
      "TypeScript",
      "Monaco Editor / CodeMirror"
    ],
    "ml_modeller": [
      "GPT-baserede modeller",
      "CodeBERT",
      "Custom finetuned modeller"
    ],
    "database": [
      "PostgreSQL",
      "Redis (caching)"
    ]
  },
  "note": "I må gerne bruge alternative teknologier, hvis det begrundes"
}`}
            </pre>
          </div>
        </section>

        {/* Afleveringer */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>afleveringer
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <div className="space-y-3">
            {[
              'Fungerende prototype (kildekode + deployment)',
              'Teknisk dokumentation (arkitektur, API-design)',
              '5-minutters demovideo med de vigtigste features',
              'README med opsætningsvejledning og brugseksempler',
              'Præsentationsslides (maks. 10 slides)',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-[#7ee787]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bedømmelseskriterier */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>bedømmelse
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <div className="space-y-3">
            {[
              { label: 'Innovation & kreativitet', pct: '25%' },
              { label: 'Teknisk implementering', pct: '30%' },
              { label: 'Brugeroplevelse', pct: '20%' },
              { label: 'Impact & brugbarhed', pct: '15%' },
              { label: 'Præsentation', pct: '10%' },
            ].map((criteria, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <span className="text-[#c9d1d9]">{criteria.label}</span>
                <span className="text-[#8b949e]">{criteria.pct}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ressourcer */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>ressourcer
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>

          <div className="space-y-3">
            <div className="border-l-2 border-[#7ee787] pl-4 py-2">
              <h3 className="text-[#7ee787] text-sm mb-2">Datasæt</h3>
              <ul className="space-y-1 text-sm">
                <li className="text-[#8b949e]">• CodeSearchNet Dataset (GitHub)</li>
                <li className="text-[#8b949e]">• The Stack (Hugging Face)</li>
                <li className="text-[#8b949e]">• CodeParrot Dataset</li>
              </ul>
            </div>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2">
              <h3 className="text-[#58a6ff] text-sm mb-2">API&apos;er & værktøjer</h3>
              <ul className="space-y-1 text-sm">
                <li className="text-[#8b949e]">• OpenAI Codex API (begrænset gratis tier)</li>
                <li className="text-[#8b949e]">• Tree-sitter (kodeparsing)</li>
                <li className="text-[#8b949e]">• Language Server Protocol</li>
              </ul>
            </div>

            <div className="border-l-2 border-[#a371f7] pl-4 py-2">
              <h3 className="text-[#a371f7] text-sm mb-2">Dokumentation</h3>
              <ul className="space-y-1 text-sm">
                <li className="text-[#8b949e]">• ML Code Completion Guide (docs/ml-completion.pdf)</li>
                <li className="text-[#8b949e]">• IDE Integration Best Practices (docs/ide-integration.md)</li>
                <li className="text-[#8b949e]">• Eksempelimplementeringer i /resources/examples/</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="border-t border-[#30363d] pt-6">
          <div className="border border-[#30363d] bg-[#161b22] p-4">
            <p className="text-[#8b949e] text-sm mb-2">Spørgsmål eller brug for afklaring?</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-[#58a6ff]">
                <span className="text-[#8b949e]">mentor:</span> alex.chen@hackathon.dev
              </span>
              <span className="text-[#58a6ff]">
                <span className="text-[#8b949e]">discord:</span> #case-001-ai-tools
              </span>
              <span className="text-[#58a6ff]">
                <span className="text-[#8b949e]">træffetid:</span> lør 14:00-16:00
              </span>
            </div>
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
