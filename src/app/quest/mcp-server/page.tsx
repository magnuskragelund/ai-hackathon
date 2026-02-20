import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function McpServerQuest() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      <header className="border-b border-[#30363d] bg-[#161b22] px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] mb-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Tilbage til forsiden</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#7ee787] text-sm">[ANBEFALET]</span>
            <h1 className="text-xl text-[#c9d1d9]">Forbind til en MCP-server</h1>
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
                  'Forklare hvad MCP er, og hvornår det skaber værdi i et AI-workflow',
                  'Forbinde mindst én ekstern tjeneste til jeres AI-kodningsværktøj',
                  'Bruge live data og live designs direkte — uden manuel copy-paste',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22]">
              <p className="text-[#8b949e] text-sm mb-1">HVAD ER EN MCP-SERVER?</p>
              <p className="text-[#c9d1d9] text-sm">
                Forestil jer en AI-assistent, der kun kan det, I fortæller den i chatten. En MCP-server er det, der bryder glasset.
                Når I forbinder en MCP-server, giver I jeres AI-værktøj <strong>hænder</strong>. Den kan nu selv række ud og interagere med et eksternt system &mdash; ikke bare snakke om det.
              </p>
            </div>
          </div>
        </section>

        {/* Sammenligning */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>med-vs-uden-mcp</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-3">
            {[
              { uden: '"Her er et screenshot af vores Figma-design — kan du bygge det?"', med: '"Kig selv i vores Figma-fil og byg check-in-skærmen"' },
              { uden: '"Her er 50 rækker fra databasen, som jeg har kopieret ind"', med: '"Hvor mange gæster er tjekket ind?" — og Claude skriver en query og kører den' },
              { uden: '"Kan du skrive en issue-tekst, som jeg så kan oprette manuelt?"', med: '"Opret et issue for den bug, vi fandt" — og Claude gør det selv' },
            ].map((item, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-2">
                <div className="border border-[#30363d] bg-[#161b22] p-3">
                  <p className="text-[#f85149] text-xs mb-1">UDEN MCP</p>
                  <p className="text-[#8b949e] text-sm italic">{item.uden}</p>
                </div>
                <div className="border border-[#30363d] bg-[#161b22] p-3">
                  <p className="text-[#7ee787] text-xs mb-1">MED MCP</p>
                  <p className="text-[#c9d1d9] text-sm italic">{item.med}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hvorfor */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>hvorfor-mcp</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <ul className="space-y-2">
            {[
              { bold: 'Fra assistent til aktør:', text: 'AI\'en går fra at foreslå ting til at gøre dem' },
              { bold: 'Friskere data:', text: 'AI\'en arbejder med live data i stedet for det, I husker at copy-paste ind' },
              { bold: 'Færre fejl:', text: 'Ingen risiko for at I kopierer de forkerte data ind — AI\'en henter selv det rigtige' },
              { bold: 'Stærkere workflows:', text: 'Kombinér flere MCP-servere og lad AI\'en arbejde på tværs af systemer i ét flow' },
            ].map((item, idx) => (
              <li key={idx} className="text-sm">
                <span className="text-[#7ee787] mr-2">•</span>
                <strong className="text-[#c9d1d9]">{item.bold}</strong>{' '}
                <span className="text-[#8b949e]">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Opgave: Figma MCP */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>figma-mcp</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Figma Desktop MCP</h3>
            <p className="text-[#8b949e] text-sm">
              Figma Desktop-appen har en indbygget MCP-server, der eksponerer det aktive dokument lokalt. Kræver <strong className="text-[#c9d1d9]">ingen API-nøgle</strong>, men kræver at Figma Desktop er åben.
            </p>

            <div className="space-y-3">
              <div className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#7ee787] text-xs mb-2">TRIN 1 — SLÅ MCP TIL I FIGMA DESKTOP</p>
                <ol className="space-y-1 text-sm text-[#c9d1d9]">
                  <li>1. Åbn <strong>Figma Desktop</strong>-appen (ikke browser-versionen)</li>
                  <li>2. Klik på <strong>Figma-logoet</strong> øverst til venstre</li>
                  <li>3. Vælg <strong>Preferences</strong></li>
                  <li>4. Under &quot;Developer&quot;: slå <strong>&quot;Enable Dev Mode MCP Server&quot;</strong> til</li>
                  <li>5. Figma starter nu en lokal server på <strong>port 3845</strong></li>
                </ol>
              </div>

              <div className="border border-[#30363d] overflow-hidden">
                <Image src="/images/figma-mcp-preferences.png" alt="Figma Desktop Preferences med MCP aktiveret" width={800} height={400} className="w-full h-auto" />
              </div>

              <div className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#7ee787] text-xs mb-2">TRIN 2 — FORBIND CLAUDE CODE</p>
                <code className="block text-[#7ee787] text-sm">claude mcp add --transport sse figma-desktop http://localhost:3845/sse</code>
              </div>

              <div className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#7ee787] text-xs mb-2">TRIN 3 — HOLD FIGMA ÅBENT</p>
                <p className="text-[#8b949e] text-sm">Serveren kører kun, mens Figma Desktop er åben og MCP er aktiveret. Åbn det dokument I vil arbejde med, før I beder Claude om at læse det.</p>
              </div>

              <div className="border border-[#30363d] overflow-hidden">
                <Image src="/images/claude-mcp-list.png" alt="Claude Code MCP-liste med figma-desktop" width={800} height={400} className="w-full h-auto" />
              </div>
              <p className="text-[#8b949e] text-xs italic">Obs: Claude.ai kommer også med en indbygget Figma-forbindelse. Kig efter den, som hedder &quot;figma-desktop&quot;</p>
            </div>

            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PRØV DEREFTER</p>
              <div className="space-y-1">
                <p className="text-[#c9d1d9] text-sm italic">&quot;Se dette Figma-frame og byg komponenten i React med Tailwind&quot;</p>
                <p className="text-[#c9d1d9] text-sm italic">&quot;Find alle farver og typografi fra dette design og generér en Tailwind-config&quot;</p>
                <p className="text-[#c9d1d9] text-sm italic">&quot;Hvilke komponenter er der i dette Figma-dokument?&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fetch MCP */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>fetch-mcp</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Fetch MCP (generel HTTP)</h3>
            <p className="text-[#8b949e] text-sm">
              Giv Claude adgang til at hente data fra vilkårlige URL&apos;er &mdash; fx jeres hackathon-API eller en ekstern tjeneste.
            </p>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <code className="block text-[#7ee787] text-sm">claude mcp add --transport stdio fetch -- npx -y @anthropic/fetch-mcp</code>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PRØV DEREFTER</p>
              <div className="space-y-1">
                <p className="text-[#c9d1d9] text-sm italic">&quot;Hent alle konferencer fra API&apos;et og vis mig en oversigt&quot;</p>
                <p className="text-[#c9d1d9] text-sm italic">&quot;Kald dette endpoint og fortæl mig hvilke felter der returneres: [URL]&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tavily MCP */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>tavily-mcp</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Tavily MCP (websøgning)</h3>
            <p className="text-[#8b949e] text-sm">
              Giv Claude adgang til at søge på internettet i realtid &mdash; nyttigt når I skal slå dokumentation op, researche teknologier eller hente aktuel information.
            </p>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <code className="block text-[#7ee787] text-sm break-all">claude mcp add --transport sse tavily &apos;https://mcp.tavily.com/mcp/?tavilyApiKey=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&apos;</code>
            </div>
            <div className="border-l-2 border-[#d29922] pl-4 py-2">
              <p className="text-[#d29922] text-xs">NOTE</p>
              <p className="text-[#8b949e] text-sm">API-nøglen ovenfor er delt og må bruges af alle deltagere i dag.</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PRØV DEREFTER</p>
              <div className="space-y-1">
                <p className="text-[#c9d1d9] text-sm italic">&quot;Søg efter de nyeste best practices for React Server Components&quot;</p>
                <p className="text-[#c9d1d9] text-sm italic">&quot;Find dokumentationen for Supabase realtime subscriptions og implementér det&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kom i gang */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>kom-i-gang</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[1]</span>Vælg en MCP-server fra listen ovenfor</p>
            <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[2]</span>Tilføj den med <code className="text-[#7ee787]">claude mcp add</code>-kommandoen</p>
            <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[3]</span>Verificér at den virker: spørg Claude om at bruge den nye datakilde</p>
            <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[4]</span>Integrér den i jeres workflow</p>
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
              'Brug Figma MCP til at læse designet for check-in-skærmen og implementér det',
              'Hent alle konferencer fra API\'et og vis mig en oversigt over check-ins',
            ].map((prompt, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#c9d1d9] text-sm italic">&quot;{prompt}&quot;</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-l-2 border-[#58a6ff] pl-4 py-2">
            <p className="text-[#8b949e] text-sm">
              <strong className="text-[#58a6ff]">Docs:</strong>{' '}
              <a href="https://code.claude.com/docs/en/mcp" className="text-[#58a6ff] hover:text-[#79c0ff] underline" target="_blank" rel="noopener noreferrer">
                Connect Claude Code to tools via MCP
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
