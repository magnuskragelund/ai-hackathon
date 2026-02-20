# Non-Dev Quest: Drift & Ops

**Efter denne quest kan I:**
- Producere en komplet monitoring-strategi som et struktureret, delebart dokument
- Skrive en incident response-plan med roller, eskaleringstrin og en runbook klar til brug
- Generere driftsdokumentation, arkitekturdiagrammer og onboarding-materiale direkte fra en systembeskrivelse

---

Drift er det, der sker *efter* systemet er bygget — og det er som regel det, der afgør om det overlever mødet med virkeligheden. Et system der fejler uden en plan er ikke bare et teknisk problem; det er et omdømmeproblem. Ops-arbejdet handler om at tænke fejl, load og kaos ind, *inden* det sker — og skrive det ned, mens I stadig husker det.

> **Artefakt-tanken:** Driftsdokumentation er pr. definition dokumenter. Brug Claude til at generere dem fra råt input — en systembeskrivelse, en arkitekturskitse, en liste over kendte risici — og få professionelle dokumenter ud, som teamet kan bruge fra dag ét.

---

## Hvorfor Drift & Ops i et hackathon?

- **Systemer fejler — det er ikke et spørgsmål om hvis, men hvornår:** En god incident response-plan betyder forskellen på 5 minutters nedetid og 2 timers kaos
- **Monitoring er ikke DevOps-jargon — det er forretningsintelligens:** En alert om at brugeraktiviteten er faldet 40% på 10 minutter er en ledelsesoplysning, ikke bare en teknisk alarm
- **Dokumentation er en gave til fremtiden:** Det ingen skriver ned i dag, forklarer ingen til det nye teammedlem om tre måneder
- **Ops-perspektivet giver udviklerne bedre kode:** Når I tænker på, hvad der kan gå galt, sætter det krav til systemets design — krav udviklerne er glade for at kende fra starten

---

## Opgaven

Arbejd jer igennem mindst to af opgaverne nedenfor. Tænk på det som at planlægge for "dagen efter" — hvad har I brug for, når systemet er i produktion?

---

### Opgave 1: Monitoring og Alerting

Monitoring handler om at vide, hvad der foregår i systemet — i realtid. Alerting handler om at blive vækket, *præcis* når noget vigtigt ændrer sig. For meget støj er lige så slemt som ingen alarmer.

**Tænk i tre lag:**
| Lag | Hvad overvåger vi? | Eksempel |
|-----|-------------------|---------|
| **Forretning** | Hvad siger tallene om brugeroplevelsen? | Aktive brugere per time, fejlrate i brugerflows |
| **Applikation** | Opfører systemet sig som forventet? | API-svartider, fejlprocent på kald |
| **Infrastruktur** | Er maskinen rask? | CPU, memory, diskplads |

**Gør det:**
1. Generer en komplet monitoring-strategi som et struktureret dokument
2. Skriv konkrete alert-regler med tærskler og handlinger
3. Producér en SLA-definition for systemet

**Prompt — monitoring-strategi-dokument:**
> *"Skriv en komplet monitoring-strategi i markdown for [beskriv jeres system og forventet belastning]. Dokumentet skal indeholde: 1) Overvågningsobjektiver (hvad vil vi opnå med monitoring?), 2) Metrik-katalog med mindst 5 forretningsmetrikker, 4 applikationsmetrikker og 3 infrastrukturmetrikker — for hver: navn, hvad den måler, og kritisk tærskel, 3) Alert-regler i formatet: navn → udløsende betingelse → alvorlighed → handling, 4) Dashboard-anbefaling: hvilke metrikker skal være synlige for henholdsvis teknikere og ledelse."*

**Prompt — SLA-dokument:**
> *"Skriv en SLA-definition (Service Level Agreement) i markdown for [beskriv systemet og dets kritiske tidsperioder]. Inkludér: tilgængelighed (uptime-mål), svartider under normal og peak belastning, support-responstider fordelt på alvorlighed, og konsekvenser ved SLA-brud. Skriv det, så det kan bruges som aftalegrund mellem drift og forretning."*

---

### Opgave 2: Incident Response Plan og Runbook

En incident response-plan er systemets brandplan. Den skaber ro i kaos ved at svare på spørgsmålene *inden* brandalarmen går: hvem gør hvad, hvornår eskalerer vi, og hvad gør vi, hvis det værste sker?

**En runbook** er en trin-for-trin vejledning til at løse et specifikt problem — det er det dokument, vagthavende læser kl. 02:00, når alt ryger ned, og de ikke har tid til at tænke.

**Gør det:**
1. Identificér de mest sandsynlige fejlscenarier og lad Claude skrive dem som et risikoregister
2. Generer en komplet incident response-plan som et delebart dokument
3. Lav en runbook for mindst ét sandsynligt fejlscenarie

**Prompt — risikoregister:**
> *"Skriv et risikoregister i markdown for [beskriv jeres system]. Identificér de 6 mest sandsynlige fejlscenarier. For hvert scenarie: navn på scenariet, symptom (hvad oplever brugeren?), sandsynlig årsag, sandsynlighed (lav/medium/høj), konsekvens (lav/medium/høj), og anbefalet forebyggelse. Sortér efter risikoscore (sandsynlighed × konsekvens)."*

**Prompt — incident response-plan:**
> *"Skriv en komplet incident response-plan i markdown for [beskriv systemet og teamstørrelsen]. Inkludér: rolledefinitioner under en incident (hvem gør hvad?), triage-guide med alvorlighedsniveauer og kriterier for hvert, eskaleringsprocedure (hvornår kontakter vi hvem og hvordan?), kommunikationsplan (hvad kommunikerer vi eksternt og hvornår?), og en post-mortem skabelon der udfyldes efter hændelsen er løst."*

**Prompt — runbook:**
> *"Skriv en runbook i markdown for scenariet: [beskriv et konkret fejlscenarie]. Runbooken skal kunne bruges af en ikke-teknisk medarbejder. Inkludér: hvornår denne runbook gælder (symptombeskrivelse), trin-for-trin fejlfinding (nummereret liste), hvad man selv kan løse, hvornår man eskalerer og til hvem, og hvad man kommunikerer til berørte brugere i mellemtiden."*

---

### Opgave 3: Driftsdokumentation og Arkitektur

God dokumentation er ikke en luksus — det er det, der gør et system vedligeholdbart og et team selvkørende. AI er ekstraordinært god til at generere dokumentation fra råt input: beskrivelser, API-specs, arkitekturskitser.

**Gør det:**
1. Generer et arkitekturdiagram i Mermaid-syntax — som udviklerne kan rendere og bruge som visuel dokumentation
2. Skriv driftsdokumentation baseret på en systembeskrivelse
3. Producér en onboarding-guide til nye teammedlemmer

**Prompt — arkitekturdiagram:**
> *"Beskriv arkitekturen for [beskriv jeres system: hvad gør det, hvilke komponenter er der?]. Generer et arkitekturdiagram i Mermaid-syntax (brug `graph LR` format) der viser systemets komponenter og de vigtigste dataflows mellem dem. Inkludér også en fejlhåndterings-sti. Tilføj en kort tekstbeskrivelse af hvert komponent under diagrammet."*

**Prompt — driftsdokumentation:**
> *"Skriv driftsdokumentation i markdown for [beskriv systemet]. Dokumentet skal indeholde: systemoversigt (hvad gør det, hvem bruger det?), komponentbeskrivelser, afhængigheder (hvad kalder systemet, hvad kalder systemet?), kendte begrænsninger og workarounds, og kontaktinformation for support. Skriv til en ny driftsansvarlig der ikke kender systemet."*

**Prompt — onboarding-guide:**
> *"Skriv en onboarding-guide på én side i markdown for en ny driftsansvarlig for [beskriv systemet]. Besvar disse spørgsmål: Hvad er systemets formål og kritiske brugere? Hvad er de vigtigste ting at holde øje med dagligt? Hvad er de hyppigste problemer og deres løsning? Hvem kontakter man, og hvornår? Brug en overskuelig struktur med korte afsnit."*

---

## Bonus: Gå dybere

- **Kapacitetsplan:** *"Skriv en kapacitetsplan i markdown for [beskriv systemet og forventet vækst]. Estimér belastning ved [X brugere/requests] og beskriv hvornår vi rammer kapacitetsgrænser og hvad vi skal gøre."*
- **Disaster recovery-plan:** *"Skriv en disaster recovery-plan for scenariet: systemet er helt nede i [kritisk tidsperiode]. Hvad er fallback-proceduren? Hvad kommunikerer vi? Hvad er prioriteret genoprettelsesrækkefølge?"*
- **Sikkerhedsgennemgang:** *"Lav en sikkerhedsgennemgang i markdown af [beskriv systemet]. Identificér de vigtigste sikkerhedsrisici, kategorisér dem efter OWASP-principper, og anbefal konkrete mitigeringer."*

---

## AI-prompt-inspiration

- *"Skriv en post-mortem skabelon i markdown vi kan bruge efter en systemhændelse. Inkludér: tidslinje, impact-opgørelse, root cause-analyse, contributing factors og 'lessons learned' med ejere og deadlines."*
- *"Lav et drifts-dashboard-brief: et markdown-dokument der beskriver hvilke metrikker der skal vises for hhv. driftsteamet og ledelsen, og hvad hvert tal betyder i praksis."*
- *"Skriv en change management-procedure for vores system: hvad skal godkendes, af hvem, og hvordan deployer vi sikkert til produktion?"*
- *"Generer en sikkerhedstjekliste i markdown for vores system — opdelt i: autentificering og adgangsstyring, datahåndtering og kryptering, og logging og audit trail."*
