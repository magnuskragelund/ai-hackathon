import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SkillsQuest() {
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
            <h1 className="text-xl text-[#c9d1d9]">Byg jeres egne Skills</h1>
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
                  'Forklare hvad en Skill er, og hvornår den skaber værdi i et team-workflow',
                  'Oprette en custom Skill der automatiserer et gentaget workflow med én kommando',
                  'Dele Skills i teamet via versionskontrol, så alle arbejder ensartet',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#c9d1d9]">
              En Skill er en brugerdefineret slash-kommando, der lærer jeres AI-kodningsværktøj en specialiseret adfærd.
              Tænk på det som en genbrugelig opskrift, I kan dele i teamet &mdash; og som gør gentagne workflows til en one-liner.
            </p>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22]">
              <p className="text-[#8b949e] text-sm mb-1">NOTE</p>
              <p className="text-[#c9d1d9] text-sm">
                Skills er en Claude Code-feature, men konceptet findes i tilsvarende form i andre værktøjer (fx Cursor Rules, Windsurf Flows).
              </p>
            </div>
          </div>
        </section>

        {/* Hvorfor */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>hvorfor-skills</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <ul className="space-y-2">
            {[
              { bold: 'Konsistens:', text: 'Hele teamet kører det samme flow med én kommando — ingen "det glemte jeg"-fejl' },
              { bold: 'Hastighed:', text: 'Komplekse, flertrinede workflows reduceres til et enkelt slash-command' },
              { bold: 'Deling:', text: 'Skills lever i repo\'et og deles automatisk med teamet via versionskontrol' },
              { bold: 'Kontekst:', text: 'En Skill kan indeholde detaljerede instruktioner, som I ellers skulle skrive hver gang' },
            ].map((item, idx) => (
              <li key={idx} className="text-sm">
                <span className="text-[#7ee787] mr-2">•</span>
                <strong className="text-[#c9d1d9]">{item.bold}</strong>{' '}
                <span className="text-[#8b949e]">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Eksempler: Udvikling */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>eksempler</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Skills til udvikling</h3>
            <div className="border border-[#30363d] bg-[#0d1117] p-3 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#30363d]">
                    <th className="text-left p-2 text-[#58a6ff]">Skill</th>
                    <th className="text-left p-2 text-[#58a6ff]">Beskrivelse</th>
                    <th className="text-left p-2 text-[#58a6ff]">Hvornår</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { skill: '/deploy', desc: 'Kører jeres deployment-flow med én kommando', when: 'Når I vil shippe hurtigt' },
                    { skill: '/component', desc: 'Scaffolder en ny UI-komponent i jeres mønster', when: 'Når I opretter nye komponenter' },
                    { skill: '/review', desc: 'Gennemgår seneste ændring og giver feedback', when: 'Før I committer' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-[#30363d] last:border-0">
                      <td className="p-2 text-[#7ee787]">{row.skill}</td>
                      <td className="p-2 text-[#c9d1d9]">{row.desc}</td>
                      <td className="p-2 text-[#8b949e]">{row.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-[#d29922]">Skills til research, kommunikation og kreativitet</h3>
            <div className="border border-[#30363d] bg-[#0d1117] p-3 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#30363d]">
                    <th className="text-left p-2 text-[#58a6ff]">Skill</th>
                    <th className="text-left p-2 text-[#58a6ff]">Beskrivelse</th>
                    <th className="text-left p-2 text-[#58a6ff]">Hvornår</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { skill: '/vejr', desc: 'Henter vejrudsigten og foreslår en velkomstbesked', when: 'Praktisk info ved check-in' },
                    { skill: '/mail', desc: 'Genererer udkast-mail fra kort beskrivelse', when: 'Hurtige opfølgninger' },
                    { skill: '/opsummer', desc: 'Læser et dokument og laver kort resumé', when: 'Sætte jer ind i nyt stof' },
                    { skill: '/konkurrent', desc: 'Researcher og sammenligner med fordele/ulemper', when: 'Vurdere alternativer' },
                    { skill: '/social-post', desc: 'Genererer opslag til LinkedIn eller intern kanal', when: 'Dele hackathon-resultater' },
                    { skill: '/mødenotat', desc: 'Strukturerer rå noter til pæn opsummering', when: 'Efter en hurtig standup' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-[#30363d] last:border-0">
                      <td className="p-2 text-[#7ee787]">{row.skill}</td>
                      <td className="p-2 text-[#c9d1d9]">{row.desc}</td>
                      <td className="p-2 text-[#8b949e]">{row.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Sådan bygger I */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>saadan-bygger-i</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#7ee787] text-xs mb-2">TRIN 1 — OPRET MAPPEN OG FILEN</p>
              <code className="block text-[#7ee787] text-sm">.claude/skills/deploy/SKILL.md</code>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#7ee787] text-xs mb-2">TRIN 2 — SKRIV INSTRUKTIONERNE</p>
              <pre className="text-[#c9d1d9] text-sm whitespace-pre-wrap">{`---
name: deploy
description: Byg og deploy projektet
---

Kør følgende trin i rækkefølge:
1. Kør \`npm run build\` og verificér, at bygget lykkes
2. Kør \`npm test\` og verificér, at alle tests består
3. Kør \`npm run deploy\`
4. Verificér, at deploy'et lykkedes
5. Rapportér status til brugeren`}</pre>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#7ee787] text-xs mb-2">TRIN 3 — BRUG DEN</p>
              <code className="block text-[#7ee787] text-sm">&gt; /deploy</code>
            </div>
          </div>
        </section>

        {/* Eksempel med script */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>eksempel-vejr-skill</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">En Skill med et script (vejrudsigt)</h3>
            <p className="text-[#8b949e] text-sm">
              En Skill kan også indeholde scripts, som Claude kører for at hente data og derefter bearbejder resultatet.
            </p>

            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#7ee787] text-xs mb-2">SCRIPTET: .claude/skills/vejr/fetch-weather.sh</p>
              <pre className="text-[#c9d1d9] text-sm whitespace-pre-wrap">{`#!/bin/bash
# Henter vejrudsigt fra Open-Meteo (gratis, ingen API-nøgle)
# Koordinater for København: 55.68, 12.57
DATO=\${1:-$(date +%Y-%m-%d)}
curl -s "https://api.open-meteo.com/v1/forecast?latitude=55.68&longitude=12.57&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=Europe/Copenhagen&start_date=$DATO&end_date=$DATO"`}</pre>
            </div>

            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#7ee787] text-xs mb-2">SKILL.MD: .claude/skills/vejr/SKILL.md</p>
              <pre className="text-[#c9d1d9] text-sm whitespace-pre-wrap">{`---
name: vejr
description: Hent vejrudsigt og lav en velkomstbesked
---

Du er en hjælpsom konferenceassistent. Gør følgende:

1. Kør scriptet med den ønskede dato som argument
2. Fortolk JSON-svaret (weathercode, temperatur, nedbør)
3. Skriv en kort, venlig velkomstbesked på dansk`}</pre>
            </div>

            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#7ee787] text-xs mb-2">RESULTAT</p>
              <p className="text-[#c9d1d9] text-sm italic">&gt; /vejr</p>
              <p className="text-[#8b949e] text-sm mt-1">God morgen og velkommen til konferencen! I dag bliver det op til 18°C med let skyet vejr og ingen regn &mdash; perfekt til en gåtur i frokostpausen.</p>
            </div>

            <div className="border border-[#30363d] overflow-hidden">
              <Image src="/images/skills-vejr.png" alt="Eksempel på /vejr skill i Claude Code" width={800} height={400} className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Avancerede idéer */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>avancerede-ideer</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-2">
            {[
              'En Skill med parametre: /component LoginForm — der tager komponentnavnet som argument',
              'En Skill der bruger API\'et: /seed-data — der opretter testdata via hackathon-API\'et',
              'En Skill der kombinerer værktøjer: /design-to-code — der læser en Figma-fil via MCP og genererer en komponent',
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
              'Opret en Skill der kører vores test suite og rapporterer resultaterne i et læsevenligt format',
              'Lav en /component Skill der scaffolder en React-komponent med TypeScript, Tailwind styling og en tilhørende testfil',
              'Byg en /api-status Skill der henter alle konferencer fra API\'et og viser check-in-status for hver',
            ].map((prompt, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#c9d1d9] text-sm italic">&quot;{prompt}&quot;</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-l-2 border-[#58a6ff] pl-4 py-2">
            <p className="text-[#8b949e] text-sm">
              <strong className="text-[#58a6ff]">Docs:</strong>{' '}
              <a href="https://code.claude.com/docs/en/skills" className="text-[#58a6ff] hover:text-[#79c0ff] underline" target="_blank" rel="noopener noreferrer">
                Extend Claude with Skills
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
