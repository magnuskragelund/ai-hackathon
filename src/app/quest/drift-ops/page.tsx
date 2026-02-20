import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function DriftOpsQuest() {
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
            <h1 className="text-xl text-[#c9d1d9]">Drift & Ops</h1>
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
                  'Producere en komplet monitoring-strategi som et struktureret, delebart dokument',
                  'Skrive en incident response-plan med roller, eskaleringstrin og en runbook klar til brug',
                  'Generere driftsdokumentation, arkitekturdiagrammer og onboarding-materiale direkte fra en systembeskrivelse',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#c9d1d9]">
              Drift er det, der sker <em>efter</em> systemet er bygget &mdash; og det er som regel det,
              der afgør om det overlever mødet med virkeligheden. Ops-arbejdet handler om at tænke fejl,
              load og kaos ind, <em>inden</em> det sker &mdash; og skrive det ned, mens I stadig husker det.
            </p>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22]">
              <p className="text-[#8b949e] text-sm mb-1">ARTEFAKT-TANKEN</p>
              <p className="text-[#c9d1d9] text-sm">
                Driftsdokumentation er pr. definition dokumenter. Brug Claude til at generere dem fra
                råt input &mdash; en systembeskrivelse, en arkitekturskitse, en liste over kendte risici &mdash;
                og få professionelle dokumenter ud, som teamet kan bruge fra dag ét.
              </p>
            </div>
          </div>
        </section>

        {/* Hvorfor */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>hvorfor-drift-ops</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <ul className="space-y-2">
            {[
              { bold: 'Systemer fejler — det er ikke et spørgsmål om hvis, men hvornår:', text: 'En god incident response-plan betyder forskellen på 5 minutters nedetid og 2 timers kaos' },
              { bold: 'Monitoring er ikke DevOps-jargon — det er forretningsintelligens:', text: 'En alert om at brugeraktiviteten er faldet 40% er en ledelsesoplysning, ikke bare en teknisk alarm' },
              { bold: 'Dokumentation er en gave til fremtiden:', text: 'Det ingen skriver ned i dag, forklarer ingen til det nye teammedlem om tre måneder' },
              { bold: 'Ops-perspektivet giver udviklerne bedre kode:', text: 'Når I tænker på, hvad der kan gå galt, sætter det krav til systemets design' },
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
            <h3 className="text-[#d29922]">Monitoring og Alerting</h3>
            <p className="text-[#8b949e] text-sm">
              Monitoring handler om at vide, hvad der foregår i systemet &mdash; i realtid. Alerting handler
              om at blive vækket, <em>præcis</em> når noget vigtigt ændrer sig.
            </p>
            <div className="border border-[#30363d] bg-[#0d1117] p-3 overflow-x-auto">
              <p className="text-[#8b949e] text-xs mb-2">TÆNK I TRE LAG</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#30363d]">
                    <th className="text-left p-2 text-[#58a6ff]">Lag</th>
                    <th className="text-left p-2 text-[#58a6ff]">Hvad overvåger vi?</th>
                    <th className="text-left p-2 text-[#58a6ff]">Eksempel</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { lag: 'Forretning', what: 'Hvad siger tallene om brugeroplevelsen?', ex: 'Aktive brugere per time, fejlrate i brugerflows' },
                    { lag: 'Applikation', what: 'Opfører systemet sig som forventet?', ex: 'API-svartider, fejlprocent på kald' },
                    { lag: 'Infrastruktur', what: 'Er maskinen rask?', ex: 'CPU, memory, diskplads' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-[#30363d] last:border-0">
                      <td className="p-2 text-[#7ee787]">{row.lag}</td>
                      <td className="p-2 text-[#c9d1d9]">{row.what}</td>
                      <td className="p-2 text-[#8b949e]">{row.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — MONITORING-STRATEGI</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv en komplet monitoring-strategi i markdown for [beskriv jeres system]. Inkludér: Overvågningsobjektiver, Metrik-katalog med mindst 5 forretningsmetrikker, 4 applikationsmetrikker og 3 infrastrukturmetrikker (for hver: navn, hvad den måler, kritisk tærskel), Alert-regler (navn → betingelse → alvorlighed → handling), og Dashboard-anbefaling.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — SLA-DOKUMENT</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv en SLA-definition i markdown for [beskriv systemet]. Inkludér: tilgængelighed (uptime-mål), svartider under normal og peak belastning, support-responstider fordelt på alvorlighed, og konsekvenser ved SLA-brud.&quot;</p>
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
            <h3 className="text-[#d29922]">Incident Response Plan og Runbook</h3>
            <p className="text-[#8b949e] text-sm">
              En incident response-plan er systemets brandplan. En <strong className="text-[#c9d1d9]">runbook</strong> er
              en trin-for-trin vejledning til at løse et specifikt problem &mdash; det dokument vagthavende
              læser kl. 02:00, når alt ryger ned.
            </p>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — RISIKOREGISTER</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv et risikoregister i markdown for [beskriv jeres system]. Identificér de 6 mest sandsynlige fejlscenarier. For hvert: navn, symptom, sandsynlig årsag, sandsynlighed, konsekvens, og anbefalet forebyggelse. Sortér efter risikoscore.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — INCIDENT RESPONSE-PLAN</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv en komplet incident response-plan i markdown for [beskriv systemet og teamstørrelsen]. Inkludér: rolledefinitioner under en incident, triage-guide med alvorlighedsniveauer, eskaleringsprocedure, kommunikationsplan, og en post-mortem skabelon.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — RUNBOOK</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv en runbook i markdown for scenariet: [beskriv fejlscenarie]. Runbooken skal kunne bruges af en ikke-teknisk medarbejder. Inkludér: hvornår denne runbook gælder, trin-for-trin fejlfinding, hvad man selv kan løse, hvornår man eskalerer, og hvad man kommunikerer til berørte brugere.&quot;</p>
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
            <h3 className="text-[#d29922]">Driftsdokumentation og Arkitektur</h3>
            <p className="text-[#8b949e] text-sm">
              God dokumentation er ikke en luksus &mdash; det er det, der gør et system vedligeholdbart
              og et team selvkørende.
            </p>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — ARKITEKTURDIAGRAM</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Beskriv arkitekturen for [beskriv jeres system]. Generer et arkitekturdiagram i Mermaid-syntax (brug graph LR format) der viser komponenter og de vigtigste dataflows. Inkludér en fejlhåndterings-sti. Tilføj en kort tekstbeskrivelse af hvert komponent.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — DRIFTSDOKUMENTATION</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv driftsdokumentation i markdown for [beskriv systemet]. Inkludér: systemoversigt, komponentbeskrivelser, afhængigheder, kendte begrænsninger og workarounds, og kontaktinformation for support. Skriv til en ny driftsansvarlig.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT — ONBOARDING-GUIDE</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Skriv en onboarding-guide på én side i markdown for en ny driftsansvarlig. Besvar: Hvad er systemets formål? Hvad er de vigtigste ting at holde øje med dagligt? Hvad er de hyppigste problemer? Hvem kontakter man?&quot;</p>
            </div>
          </div>
        </section>

        {/* Bonus + prompt-inspiration */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>bonus-og-inspiration</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-2">
            {[
              'Skriv en kapacitetsplan for [beskriv systemet og forventet vækst]. Estimér belastning og beskriv hvornår vi rammer kapacitetsgrænser.',
              'Skriv en disaster recovery-plan for scenariet: systemet er helt nede i [kritisk tidsperiode]. Hvad er fallback-proceduren?',
              'Lav en sikkerhedsgennemgang af [beskriv systemet]. Identificér risici efter OWASP-principper og anbefal mitigeringer.',
              'Skriv en post-mortem skabelon med: tidslinje, impact-opgørelse, root cause-analyse, contributing factors og lessons learned.',
              'Lav et drifts-dashboard-brief: hvilke metrikker skal vises for hhv. driftsteamet og ledelsen, og hvad hvert tal betyder.',
              'Skriv en change management-procedure: hvad skal godkendes, af hvem, og hvordan deployer vi sikkert til produktion?',
              'Generer en sikkerhedstjekliste opdelt i: autentificering, datahåndtering og kryptering, og logging og audit trail.',
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
