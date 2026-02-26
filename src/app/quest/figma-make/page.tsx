import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FigmaMakeQuest() {
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
            <h1 className="text-xl text-[#c9d1d9]">Figma Make Deep Dive</h1>
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
                  'Forklare hvad Figma Make er, og hvordan det adskiller sig fra klassisk Figma-design',
                  'Gå fra blank skærm til fungerende prototype udelukkende med tekstbeskrivelser',
                  'Iterere effektivt på et design ved at give præcis, trinvis feedback',
                  'Bruge billeder og skitser som input til at styre resultatet',
                  'Overdrage jeres arbejde til udviklere eller bruge det som udgangspunkt for videre design',
                ].map((item, idx) => (
                  <li key={idx} className="text-[#c9d1d9] text-sm">
                    <span className="text-[#7ee787] mr-2">•</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[#c9d1d9]">
              Figma Make er Figmas AI-drevne værktøj, der genererer <strong className="text-[#7ee787]">fungerende prototyper og web-apps</strong> direkte
              fra tekstbeskrivelser. I beskriver hvad I vil have, og Figma Make bygger det &mdash; med rigtige interaktioner,
              responsivt layout og en URL I kan dele med andre.
            </p>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22]">
              <p className="text-[#8b949e] text-sm mb-1">VIGTIGT AT VIDE</p>
              <p className="text-[#c9d1d9] text-sm">
                Figma Make er <strong>ikke det samme</strong> som at designe i Figma. Det er et separat værktøj
                der genererer kode (React) bag kulisserne. I får en interaktiv prototype &mdash; ikke redigerbare
                Figma-lag. Tænk på det som en AI-drevet app-bygger med Figmas polish.
              </p>
              <p className="text-[#c9d1d9] text-sm mt-2">
                Men jeres arbejde er ikke låst inde: med <strong className="text-[#7ee787]">Copy to Design</strong> kan
                I tage en Make-prototype og kopiere den direkte over i en Figma-designfil. Derfra kan I redigere
                det som normale Figma-lag &mdash; justere farver, typografi, spacing og komponenter med fuld kontrol.
                Det giver jer det bedste fra begge verdener: hurtig prototyping i Make, og præcis finpudsning i Design.
              </p>
            </div>
          </div>
        </section>

        {/* Hvad kan Figma Make */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>hvad-kan-figma-make</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#0d1117] p-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#30363d]">
                  <th className="text-left p-2 text-[#58a6ff]">Det kan Figma Make</th>
                  <th className="text-left p-2 text-[#58a6ff]">Det kan det ikke (endnu)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { can: 'Generere komplette, interaktive prototyper fra tekst', cant: 'Lave redigerbare Figma-lag (brug First Draft til det)' },
                  { can: 'Iterere med naturligt sprog — "gør knappen større"', cant: 'Kompleks database-logik (simple Supabase-forbindelser virker)' },
                  { can: 'Bruge eksisterende designsystemer (Shadcn, MUI, Ant Design)', cant: 'Generere native iOS/Android-apps' },
                  { can: 'Tage billeder og skitser som input', cant: 'Producere pixel-perfekte designs i første forsøg' },
                  { can: 'Publicere prototypen med en delbar URL', cant: 'Erstatte et fuldt designværktøj til finpudsning' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-[#30363d] last:border-0">
                    <td className="p-2 text-[#7ee787]">{row.can}</td>
                    <td className="p-2 text-[#8b949e]">{row.cant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Kom i gang */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>kom-i-gang</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-3">
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#7ee787] text-xs mb-2">TRIN 1 &mdash; FIND FIGMA MAKE</p>
              <p className="text-[#c9d1d9] text-sm">
                Gå til <strong>figma.com/make</strong> eller klik <strong>&quot;Make&quot;</strong> i Figmas filoversigt.
                Det åbner en ny Make-fil med et tomt promptfelt.
              </p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#7ee787] text-xs mb-2">TRIN 2 &mdash; BESKRIV HVAD I VIL HAVE</p>
              <p className="text-[#c9d1d9] text-sm">
                Skriv en beskrivelse af det I vil bygge. Jo mere kontekst I giver (målgruppe, stil, funktioner),
                jo bedre resultat. Se eksemplerne nedenfor.
              </p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#7ee787] text-xs mb-2">TRIN 3 &mdash; ITER&Eacute;R MED OPFØLGNINGER</p>
              <p className="text-[#c9d1d9] text-sm">
                Figma Make forstår opfølgende beskeder. Bed den om at ændre farver, flytte elementer,
                tilføje skærme eller justere layoutet &mdash; præcis som en samtale.
              </p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#7ee787] text-xs mb-2">TRIN 4 &mdash; DEL RESULTATET</p>
              <p className="text-[#c9d1d9] text-sm">
                Publicér jeres prototype og del URL&apos;en med teamet, testpersoner eller stakeholders.
              </p>
            </div>
          </div>
        </section>

        {/* Workflow 1: Fra blank skærm */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>workflow-1-fra-blank-skaerm</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Fra idé til prototype</h3>
            <p className="text-[#8b949e] text-sm">
              Den mest direkte vej: beskriv hvad I vil bygge, og lad Figma Make generere det hele.
              Start bredt og zoomer ind med opfølgninger.
            </p>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT &mdash; FØRSTE UDKAST</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Byg en check-in app til en konference. En medarbejder ved skranken skal kunne søge efter en deltager, se deres billetinfo og tilkøb, og trykke &apos;Tjek ind&apos;. Brug et rent, professionelt design med god kontrast. Mobilvenligt.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">OPFØLGNING &mdash; JUSTÉR LAYOUT</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Søgefeltet skal fylde hele bredden. Flyt billetinfo op over tilkøbslisten. Gør &apos;Tjek ind&apos;-knappen større og grøn.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">OPFØLGNING &mdash; TILFØJ SKÆRME</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Tilføj en bekræftelsesskærm der vises efter check-in med deltagerens navn og et grønt flueben. Tilføj også en fejlskærm der vises, hvis billetten allerede er brugt.&quot;</p>
            </div>
          </div>
        </section>

        {/* Workflow 2: Fra skitse */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>workflow-2-fra-skitse</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Fra papirskitse til prototype</h3>
            <p className="text-[#8b949e] text-sm">
              Tegn jeres idé på papir, whiteboard eller i et simpelt tegneprogram. Tag et billede og vedhæft det
              til jeres prompt. Figma Make kan tolke skitser og bruge dem som udgangspunkt.
            </p>
            <div className="space-y-1 text-sm">
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[1]</span>Tegn jeres UI-idé &mdash; det behøver ikke være pænt, bare forståeligt</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[2]</span>Tag et billede med telefonen eller et screenshot</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[3]</span>Vedhæft billedet til jeres prompt i Figma Make (op til 3 billeder)</p>
              <p className="text-[#c9d1d9]"><span className="text-[#7ee787] mr-2">[4]</span>Beskriv hvad skitsen forestiller og hvad I ønsker</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT &mdash; SKITSE SOM INPUT</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Her er en skitse af vores check-in-flow [billede]. Byg en interaktiv prototype baseret på denne skitse. Brug Shadcn/UI-stil med god spacing. Mobilvenlig.&quot;</p>
            </div>
            <div className="border-l-2 border-[#d29922] pl-4 py-2">
              <p className="text-[#d29922] text-xs">TIP</p>
              <p className="text-[#8b949e] text-sm">
                Jo tydeligere jeres skitse er, jo bedre resultat. Skriv gerne labels direkte på skitsen
                (fx &quot;Søgefelt&quot;, &quot;Tjek ind-knap&quot;, &quot;Billetinfo&quot;) &mdash; Figma Make kan læse dem.
              </p>
            </div>
          </div>
        </section>

        {/* Workflow 3: Fra screenshot */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>workflow-3-fra-inspiration</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Fra inspiration til eget design</h3>
            <p className="text-[#8b949e] text-sm">
              Har I set en app eller et website I kan lide? Tag et screenshot og brug det som reference.
              Figma Make kan bruge det som stilmæssigt udgangspunkt &mdash; uden at kopiere direkte.
            </p>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT &mdash; REFERENCE-BILLEDE</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Byg et konference-dashboard inspireret af dette design [screenshot]. Det skal vise check-in-status, antal deltagere og en liste over kommende talks. Behold den rene stil, men brug vores farver: mørk baggrund med grønne accenter.&quot;</p>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT &mdash; KOMBINER FLERE REFERENCER</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Her er to apps jeg kan lide [billede 1] [billede 2]. Tag navigationen fra den første og kortlayoutet fra den anden. Byg en deltager-app til en konference med programoversigt og personlig agenda.&quot;</p>
            </div>
          </div>
        </section>

        {/* Workflow 4: Med designsystem */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>workflow-4-med-designsystem</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-4">
            <h3 className="text-[#d29922]">Brug et designsystem</h3>
            <p className="text-[#8b949e] text-sm">
              Figma Make understøtter populære komponentbiblioteker. Ved at nævne et designsystem i jeres prompt
              får I et resultat, der ser professionelt og konsistent ud fra starten.
            </p>
            <div className="border border-[#30363d] bg-[#0d1117] p-3 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#30363d]">
                    <th className="text-left p-2 text-[#58a6ff]">Designsystem</th>
                    <th className="text-left p-2 text-[#58a6ff]">Stil</th>
                    <th className="text-left p-2 text-[#58a6ff]">Godt til</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { lib: 'Shadcn/UI', style: 'Moderne, minimalistisk', good: 'Formularer, dashboards, admin' },
                    { lib: 'Ant Design', style: 'Enterprise, datarigt', good: 'Tabeller, filtre, store datasæt' },
                    { lib: 'Material Design (MUI)', style: 'Googles designsprog', good: 'Apps der skal føles familiære' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-[#30363d] last:border-0">
                      <td className="p-2 text-[#7ee787]">{row.lib}</td>
                      <td className="p-2 text-[#8b949e]">{row.style}</td>
                      <td className="p-2 text-[#8b949e]">{row.good}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border border-[#30363d] bg-[#0d1117] p-3">
              <p className="text-[#8b949e] text-xs mb-1">PROMPT &mdash; MED DESIGNSYSTEM</p>
              <p className="text-[#c9d1d9] text-sm italic">&quot;Byg en check-in-app med Shadcn/UI. Brug deres Card-komponent til at vise billetinfo, Input til søgning, og Button til check-in. Mørkt tema med god kontrast.&quot;</p>
            </div>
          </div>
        </section>

        {/* Prompting-tips */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>prompting-tips</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-4">
            <div className="border border-[#30363d] bg-[#0d1117] p-3 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#30363d]">
                    <th className="text-left p-2 text-[#f85149]">I stedet for...</th>
                    <th className="text-left p-2 text-[#7ee787]">Prøv...</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { bad: '"Lav en check-in app"', good: '"Lav en check-in app til en konference med 200 deltagere. Mobilvenlig. Søgefelt øverst, billetinfo nedenunder, stor grøn check-in-knap."' },
                    { bad: '"Gør det pænere"', good: '"Tilføj mere whitespace mellem sektionerne, afrund hjørnerne på kortene, og brug en subtil skygge"' },
                    { bad: '"Fix layoutet"', good: '"Søgefeltet skal være 100% bredde. Kortene skal stables vertikalt på mobil og ligge i et grid på desktop"' },
                    { bad: '"Tilføj alle skærmene"', good: '"Tilføj en bekræftelsesskærm med navn og flueben, og en fejlskærm med en &apos;Prøv igen&apos;-knap"' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-[#30363d] last:border-0">
                      <td className="p-2 text-[#8b949e]">{row.bad}</td>
                      <td className="p-2 text-[#c9d1d9]">{row.good}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-l-2 border-[#d29922] pl-4 py-2">
              <p className="text-[#d29922] text-xs">TOMMELFINGERREGEL</p>
              <p className="text-[#8b949e] text-sm">
                Start med det store billede i første prompt (hvad, hvem, stil). Brug opfølgninger til detaljerne
                (spacing, farver, ekstra skærme). Lav &eacute;n ting ad gangen &mdash; det giver bedre resultater end
                at bede om alt på &eacute;n gang.
              </p>
            </div>
          </div>
        </section>

        {/* Prompt-eksempler til casen */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>prompt-eksempler</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <p className="text-[#8b949e] text-sm mb-4">
            Her er eksempler tilpasset hackathonets cases. Brug dem som de er, eller tilpas dem til jeres idé.
          </p>
          <div className="space-y-4">
            {[
              {
                label: 'DELTAGER-APP',
                prompt: 'Byg en self-service app til en konferencedeltager. Startsiden viser "Slå din billet op" med et felt til billetnummer. Når man søger, vises: deltagerens navn, billetstatus (tjekket ind / ikke tjekket ind), eventuelle tilkøb, og konferenceprogrammet med tidspunkter og rum. Brug et lyst, venligt design.',
              },
              {
                label: 'LIVE DASHBOARD',
                prompt: 'Byg et live dashboard for konferenceholdet. Vis: total antal deltagere vs. tjekket ind (progress bar), check-in-rate over tid (linjegraf), tilkøbsoversigt (hvor mange med Dinner Party er ankommet), og en liste over de seneste check-ins. Mørkt tema, professionelt, tablet-venligt.',
              },
              {
                label: 'QR-SCANNER MOCKUP',
                prompt: 'Byg en mobilvenlig check-in app med et kamera-ikon i midten (simuleret QR-scanner). Under kamerafeltet: et alternativt inputfelt til manuelt billetnummer. Når en billet scannes, vis en bekræftelse med deltagerens navn og billetinfo. Tilføj en fejlskærm for ugyldig billet.',
              },
              {
                label: 'NPS DASHBOARD',
                prompt: 'Byg et dashboard til at visualisere NPS-data fra en medlemsundersøgelse. Vis: overordnet NPS-score (stort tal), scorefordeling (0-10 som bar chart), udvikling over kvartaler (linjegraf), og en liste med de seneste tekstbesvarelser med sentiment-indikator. Brug Ant Design-stil.',
              },
              {
                label: 'TALK-EVALUERING',
                prompt: 'Byg en mobilvenlig app hvor konferencedeltagere kan rate talks. Vis en liste over talks med speaker, tidspunkt og rum. Tryk på en talk for at give 1-5 stjerner og skrive en kort kommentar. Vis gennemsnitlig rating for hver talk. Lyst, simpelt design med god touch-target størrelse.',
              },
            ].map((example, idx) => (
              <div key={idx} className="border border-[#30363d] bg-[#0d1117] p-3">
                <p className="text-[#8b949e] text-xs mb-1">{example.label}</p>
                <p className="text-[#c9d1d9] text-sm italic">&quot;{example.prompt}&quot;</p>
              </div>
            ))}
          </div>
        </section>

        {/* Samarbejde med teamet */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>samarbejde-med-teamet</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-4 leading-relaxed">
            <p className="text-[#c9d1d9]">
              Det I bygger i Figma Make er ikke en slutstation &mdash; det er et udgangspunkt. Her er hvordan I bringer
              jeres prototype videre i samarbejde med resten af teamet.
            </p>

            <div className="space-y-3">
              <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-2">
                <h3 className="text-[#d29922]">Del prototypen direkte</h3>
                <p className="text-[#8b949e] text-sm">
                  Publicér jeres Make-prototype og del URL&apos;en. Alle kan åbne den i en browser &mdash; ingen Figma-konto
                  nødvendig. Brug den til at teste med rigtige brugere, præsentere for stakeholders, eller give udviklerne
                  en levende reference.
                </p>
              </div>

              <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-2">
                <h3 className="text-[#d29922]">Brug prototypen som brief til udviklerne</h3>
                <p className="text-[#8b949e] text-sm">
                  En fungerende prototype siger mere end hundrede linjer i et kravdokument. Del URL&apos;en med udviklerne
                  og sig: &quot;Sådan her skal det virke.&quot; De kan klikke sig igennem flowet og forstå præcis hvad der skal bygges.
                </p>
                <div className="border border-[#30363d] bg-[#0d1117] p-3">
                  <p className="text-[#8b949e] text-xs mb-1">TIP TIL UDVIKLERNE</p>
                  <p className="text-[#c9d1d9] text-sm italic">&quot;Her er vores Figma Make prototype [URL]. Brug den som visuel reference og byg check-in flowet. API-dokumentationen finder du her: [API-URL]&quot;</p>
                </div>
              </div>

              <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-2">
                <h3 className="text-[#d29922]">Screenshot-loop med Claude Code</h3>
                <p className="text-[#8b949e] text-sm">
                  Tag et screenshot af jeres Figma Make-prototype og giv det til Claude Code som reference.
                  Udviklerne kan sige: &quot;Byg dette&quot; med billedet som udgangspunkt. Derefter kan designerne
                  tage screenshots af det der er bygget og sammenligne med prototypen.
                </p>
              </div>

              <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-2">
                <h3 className="text-[#d29922]">Fra Make til Figma Design (Copy to Design)</h3>
                <p className="text-[#8b949e] text-sm">
                  Klik <strong className="text-[#c9d1d9]">Copy to Design</strong> i Make for at kopiere jeres prototype
                  direkte over i en Figma-designfil. Derfra kan I redigere alt som normale Figma-lag &mdash; justere
                  spacing, farver, typografi og komponenter med fuld kontrol. Det er den hurtigste vej fra &quot;hurtig
                  prototype&quot; til &quot;poleret design&quot;.
                </p>
              </div>

              <div className="border border-[#30363d] bg-[#161b22] p-4 space-y-2">
                <h3 className="text-[#d29922]">Usability-test med prototypen</h3>
                <p className="text-[#8b949e] text-sm">
                  Jeres Make-prototype er interaktiv nok til at teste med rigtige mennesker.
                  Sæt jer ned med en kollega, giv dem URL&apos;en, og bed dem gennemføre et check-in-flow.
                  Observér hvor de bliver i tvivl &mdash; det er jeres vigtigste designindsigter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Opgave: Byg en mini-app med database */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2"><span className="text-[#8b949e]">~/</span>opgave-mini-app-med-data</h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          <div className="space-y-4 leading-relaxed">
            <p className="text-[#c9d1d9]">
              Figma Make kan mere end statiske prototyper. Det kan bygge <strong className="text-[#7ee787]">små, fungerende apps</strong> med
              en database bagved &mdash; fx via Supabase, som Make har indbygget understøttelse for. Det betyder,
              at data faktisk bliver gemt, og at flere brugere kan se det samme.
            </p>

            <div className="border-l-2 border-[#d29922] pl-4 py-2 mb-4">
              <p className="text-[#c9d1d9] text-sm">
                <strong>Opgave:</strong> Byg en lille, fungerende app i Figma Make &mdash; ikke bare en prototype, men noget
                der faktisk gemmer og viser data. Vælg et af eksemplerne nedenfor, eller find på jeres eget.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Indkøbskurv / Bestillingsflow',
                  desc: 'En bruger kan browse produkter, tilføje til kurv, se kurven og gennemføre en bestilling. Ordren gemmes i databasen.',
                  prompt: 'Byg en lille webshop med 6-8 produkter (brug placeholder-billeder). Brugeren kan tilføje produkter til en kurv, se kurven, og klikke "Bestil". Ordren gemmes i en Supabase-database. Vis en bekræftelsesside med ordrenummer. Brug Shadcn/UI-stil.',
                },
                {
                  title: 'Administrationspanel',
                  desc: 'Et simpelt admin-panel hvor man kan oprette, redigere og slette indhold — fx talks på en konference, produkter i en butik, eller medlemmer i en forening.',
                  prompt: 'Byg et admin-panel til at administrere talks på en konference. Man skal kunne: se en liste over talks med speaker, titel og tidspunkt, oprette en ny talk, redigere en eksisterende, og slette en talk. Data skal gemmes i en Supabase-database. Brug et rent, professionelt design med en sidebar-navigation.',
                },
                {
                  title: 'Feedback-væg / Idétavle',
                  desc: 'Alle kan poste en kort besked eller idé, og se hvad andre har skrevet. Tænk "Post-it-tavle" i digital form.',
                  prompt: 'Byg en digital idétavle hvor brugere kan skrive en kort besked (max 280 tegn), vælge en farve, og poste den. Alle beskeder vises som kort i et grid. Nyeste først. Data gemmes i Supabase, så alle ser det samme. Farverigt, legende design.',
                },
                {
                  title: 'Simpel afstemning / Poll',
                  desc: 'Opret et spørgsmål med valgmuligheder, del linket, og se resultaterne live.',
                  prompt: 'Byg en poll-app med to skærme: 1) Opret en afstemning med et spørgsmål og 2-5 valgmuligheder, 2) En stemmeside hvor man vælger sit svar og ser live-resultater som bar chart. Data gemmes i Supabase. Del-venligt design med stor tekst.',
                },
              ].map((example, idx) => (
                <div key={idx} className="border border-[#30363d] bg-[#161b22] p-4 space-y-3">
                  <h3 className="text-[#d29922]">{example.title}</h3>
                  <p className="text-[#8b949e] text-sm">{example.desc}</p>
                  <div className="border border-[#30363d] bg-[#0d1117] p-3">
                    <p className="text-[#8b949e] text-xs mb-1">PROMPT</p>
                    <p className="text-[#c9d1d9] text-sm italic">&quot;{example.prompt}&quot;</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2">
              <p className="text-[#58a6ff] text-xs">SUPABASE-TIP</p>
              <p className="text-[#8b949e] text-sm">
                Figma Make kan selv oprette og konfigurere en Supabase-database til jeres app. I behøver ikke sætte noget op
                manuelt &mdash; bare beskriv hvilke data der skal gemmes, så klarer Make resten. Nævn &quot;gem data i Supabase&quot;
                eller &quot;brug en database&quot; i jeres prompt.
              </p>
            </div>
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
              'Byg en komplet konference-app med tre faner: Program, Min Billet og Check-in. Mobilvenlig med bottom navigation.',
              'Her er en skitse af vores dashboard [billede]. Byg det som en interaktiv prototype med dummy-data. Tablet-optimeret.',
              'Tag dette design [screenshot af konkurrent] og byg noget lignende, men med mørkt tema og bedre tilgængelighed.',
              'Byg en onboarding-flow med tre trin: Velkommen, Vælg interesser, Bekræftelse. Brug animerede overgange mellem trinene.',
              'Lav to versioner af check-in-skærmen: én til tablet (stående) og én til telefon. Sammenlign dem side om side.',
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
