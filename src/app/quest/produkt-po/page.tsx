import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProduktPoQuest() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      <header className="border-b border-[#30363d] bg-[#161b22] px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] mb-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Tilbage til forsiden</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#a371f7] text-sm">[NON-DEV]</span>
            <h1 className="text-xl text-[#c9d1d9]">Produkt & PO</h1>
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
                  'Producere et Opportunity Solution Tree som et struktureret, delebart dokument',
                  'Generere en komplet user story backlog med acceptance criteria klar til et udviklingsteam',
                  'Skrive en konkurrentanalyse-rapport der syntetiserer fund til konkrete anbefalinger',
                  'Producere et product brief og en præsentationsoutline klar til hackathon-afslutningen',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#c9d1d9]">
              Produktledelse handler om at træffe de rigtige valg &mdash; at fokusere på det, der skaber
              mest værdi, og frasortere det, der ikke gør. AI gør det <em>hurtigere</em> at udforske
              mulighederne, stille de rigtige spørgsmål og strukturere argumenterne.
            </p>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22]">
              <p className="text-[#8b949e] text-sm mb-1">ARTEFAKT-TANKEN</p>
              <p className="text-[#c9d1d9] text-sm">
                En chatbesked forsvinder. Et dokument lever. Bed Claude om at generere færdige dokumenter
                i markdown &mdash; user story-backlogs, analyser, pitchdokumenter &mdash; som I kan gemme,
                dele med teamet og aflevere som konkret output fra dagen.
              </p>
            </div>
          </div>
        </section>

        {/* Hvorfor */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>hvorfor-produkt-po
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <ul className="space-y-2">
            {[
              { bold: 'Retning er vigtigere end hastighed:', text: 'Et team der koder det forkerte hurtigt, taber — en klar produktvision giver udviklerne noget at sigte efter' },
              { bold: 'User stories reducerer gæt:', text: 'Eksplicitte acceptance criteria betyder færre runder med "det var ikke det, vi mente"' },
              { bold: 'Konkurrentviden sparer hjulgenopfindelse:', text: 'Hvad har andre løst, og hvad er stadig et uløst problem?' },
              { bold: 'Pitchen er produktet:', text: 'Evnen til at kommunicere hvad I har bygget og hvorfor er mindst lige så vigtig som selve løsningen' },
            ].map((item, idx) => (
              <li key={idx} className="text-sm">
                <span className="text-[#7ee787] mr-2">•</span>
                <strong className="text-[#c9d1d9]">{item.bold}</strong>{' '}
                <span className="text-[#8b949e]">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Opgave 1 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>opgave-1</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Opportunity Solution Tree</h3>
            <p className="text-[#8b949e] text-sm">
              OST er en metode fra Teresa Torres. Det starter med ét ønsket outcome og udfolder sig
              som et træ af muligheder, løsninger og antagelser der skal testes.
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[1]</span>Definer jeres ønskede outcome (ét, konkret mål — ikke en feature)</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[2]</span>Lad Claude generere et komplet OST som et struktureret markdown-dokument</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[3]</span>Iterér: bed Claude om at tilføje, prioritere eller udfordre de identificerede opportunities</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — OST-DOKUMENT</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv et Opportunity Solution Tree i markdown for følgende situation: [beskriv jeres løsning og det ønskede outcome]. Strukturér dokumentet med: Outcome (øverst), 4-5 Opportunities med forklaring, 2-3 mulige Solutions per opportunity, og de tre mest risikable Assumptions der skal testes.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — PRIORITERING</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Tag de opportunities vi har identificeret i vores OST [indsæt] og lav en prioriteringsmatrix i markdown. Vurder hver opportunity på to akser: estimeret impact (1-5) og indsats for at validere (1-5). Anbefal hvilke to vi bør fokusere på i dag.&quot;</p>
            </div>
          </div>
        </section>

        {/* Opgave 2 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>opgave-2</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">User Story Backlog</h3>
            <p className="text-[#8b949e] text-sm">
              En user story er en fortælling om hvem der vil gøre hvad og hvorfor. Acceptance criteria er
              de konkrete betingelser, der afgør om en feature er &quot;done&quot;.
            </p>
            <div className="border-l-2 border-[#7ee787] pl-4 py-2 my-2">
              <p className="text-[#c9d1d9] text-sm italic">&quot;Som [brugertype] vil jeg [handling] så jeg kan [gevinst]&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — BACKLOG-DOKUMENT</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv en komplet user story backlog i markdown for [beskriv jeres løsning og primære brugertyper]. Generer 8-10 user stories. For de tre vigtigste: tilføj detaljerede acceptance criteria med happy path, fejlscenarier og edge cases. Afslut med en MoSCoW-prioritering.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — KVALITETSTJEK</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Gennemgå denne user story backlog [indsæt] og skriv en QA-rapport der identificerer: stories der er for store og bør splittes, stories med uklare acceptance criteria, stories der overlapper, og manglende stories.&quot;</p>
            </div>
          </div>
        </section>

        {/* Opgave 3 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>opgave-3</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Konkurrentanalyse</h3>
            <p className="text-[#8b949e] text-sm">
              Inden I opfinder hjulet, er det værd at vide hvad der allerede eksisterer &mdash; og hvad der mangler.
            </p>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — KONKURRENTANALYSE-RAPPORT</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv en konkurrentanalyse-rapport i markdown for [beskriv jeres domæne]. Identificér 4-5 relevante løsninger. For hver: beskriv hvad de gør, styrker og svagheder. Afslut med: et afsnit om &apos;the gap&apos; og tre konkrete anbefalinger til differentiering.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — POSITIONERING</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Baseret på denne konkurrentanalyse [indsæt]: skriv et kort positioneringsdokument. Brug formatet: &apos;For [målgruppe] der [problem], er [vores løsning] den eneste [kategori] der [differentiator], i modsætning til [alternativ] der [svaghed]&apos;.&quot;</p>
            </div>
          </div>
        </section>

        {/* Opgave 4 */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>opgave-4</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Product Brief og Pitch</h3>
            <p className="text-[#8b949e] text-sm">
              En god pitch er ikke en feature-liste. Det er et klart argument for <em>hvem</em> der har <em>hvilket problem</em>,
              og <em>hvorfor</em> jeres løsning er den rigtige.
            </p>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — PRODUCT BRIEF</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv et product brief i markdown for [beskriv jeres løsning]. Strukturér: Problemet, Målgruppen (inkl. persona-snapshot), Løsningen, Value Proposition, Differentiering, og Næste skridt. Tonen er professionel men direkte.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — PRÆSENTATIONSOUTLINE</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Lav en outline til en 3-minutters hackathon-præsentation af [beskriv løsning]. Strukturér som: Hook → Problem → Løsning og demo → Gevinst i tal → Næste skridt. Giv tre valgmuligheder til åbningen og anbefal én.&quot;</p>
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
              'Lav en pre-mortem som et dokument: "Det er om et år og projektet er slået fejl. Beskriv de fem mest sandsynlige årsager."',
              'Bed Claude spille kritisk stakeholder og dokumentér spørgsmål + svar som Q&A-dokument',
              'Generer en one-page executive summary der kan afleveres til ledelsen efter hackathon-dagen',
            ].map((item, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#161b22] p-3 text-sm">
                <span className="text-[#7ee787] mr-2">•</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* AI-prompt-inspiration */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>prompt-inspiration</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-2">
            {[
              'Skriv en value proposition canvas i markdown: Customer Jobs, Pains og Gains — og vores Products & Services, Pain Relievers og Gain Creators.',
              'Generer en liste over de 10 spørgsmål en skeptisk investor ville stille om vores løsning, og skriv et forberedt svar til hvert.',
              'Skriv et "definition of done"-dokument for vores MVP: hvilke kriterier skal være opfyldt?',
              'Lav en produktroadmap for de næste tre måneder — opdelt i faser med fokusområder og succeskriterier.',
            ].map((prompt, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#c9d1d9] text-sm italic">&quot;{prompt}&quot;</p>
              </div>
            ))}
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
