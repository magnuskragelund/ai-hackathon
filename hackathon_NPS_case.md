# Hackathon Case: NPS Web App til Medlemsfeedback

## Udfordringen

IDA indsamler NPS-data (Net Promoter Score) fra medlemmer — både som en **numerisk score (0–10)** og som **fritekstbesvarelser** på spørgsmålet *"Vil du anbefale IDA?"* på dansk og engelsk.

Den numeriske NPS-score er en del af IDAs strategiske mål, hvor vi desværre har set et fald fra 2024 til 2025. Tekstbesvarelserne bliver i dag kun brugt i begrænset omfang, og vi har endnu ikke udfoldet de trends, indsigter og mønstre, som medlemmerne faktisk fortæller os.

**Jeres mission:** Brug Claude Code til at bygge en webapplikation, der forvandler rå NPS-data til et interaktivt og indsigtsfuldt værktøj — så medarbejdere, ledere og direktion i IDA kan følge medlemmernes besvarelser, spotte mønstre og dykke ned i det, der er relevant for netop deres forretningsområde.

---

## Data

I modtager et anonymiseret datasæt med ca. **7.900 besvarelser** fordelt over 2024 og 2025 i CSV-format.

| Datafelt | Beskrivelse |
|---|---|
| År | Besvarelsens år (2024–2025) |
| Kvartal | Kvartal (Q1–Q4) |
| Åbne besvarelser | Fritekstsvar fra medlemmet — her gemmer de vigtigste indsigter sig |
| NPS Score | Score fra 0–10 |
| Sprog | Besvarelsens sprog (dansk/engelsk) |
| Land | Medlemmets bopælsland |
| Stamdata | Kreds/region, beskæftigelse og alder |

---

## Del 1 — Fundamentet (bunden opgave)

Byg en fungerende webapplikation med Claude Code, der som minimum indeholder:

### 1. NPS Score Dashboard

- Vis den overordnede NPS-score (% Promoters − % Detractors)
- Visualisér scorefordelingen (0–10) — overvej hvilken visualiseringsform der kommunikerer bedst
- Vis udviklingen over tid (år/kvartal)

### 2. Temaer og tendenser fra tekstbesvarelser

Med ~5.000 tekstsvar er det umuligt at læse sig til overblik. I skal finde måder at gøre besvarelserne overskuelige og handlingsbare. Tænk over:

- **Gruppering:** Hvordan kategoriserer I svar, så mønstre træder frem?
- **Hyppige temaer:** Kan I identificere og visualisere de mest omtalte emner? (tag cloud, cluster-view, rangeret liste, tematiske kort)
- **Promoters vs. Detractors:** Hvad fylder for dem der elsker IDA — og hvad fylder for dem der ikke gør?
- **Kvartals-overblik:** "Hvad nævner medlemmer mest i dette kvartal?"
- **Domænefilter:** Gør det nemt at filtrere på emner som fx forsikring, arrangementer, karriere, løn osv.

### Til designere, UX'ere, PO'er og BI'ere

Claude Code kan generere UI og datavisualiseringer hurtigt — men det kræver mennesker at gøre det brugbart. Overvej:

- **Informationsarkitektur:** Hvad skal brugeren se først? Hvad er den vigtigste historie i dataen?
- **Brugerrejsen:** En produktejer vil noget andet end en direktør. Hvordan understøtter I begge?
- **Datapræsentation:** Hvornår er et diagram bedre end et tal? Hvornår hjælper farver — og hvornår forvirrer de?

> **Tip:** Skitsér på papir eller whiteboard først. Tag et billede af jeres skitse, vis det til Claude Code, beskriv hvad I ønsker — og iterér derfra. I styrer retningen, Claude Code bygger det.

---

## Del 2 — Fri leg (vælg selv)

Vælg de opgaver I synes er sjove og kan nå — eller find på jeres egne features.

### AI-drevet sentimentanalyse

- Gå ud over NPS-scoren — analysér den emotionelle tone i tekstsvarene
- Visualisér sentimentfordeling per domæne, segment eller over tid
- Fremhæv svar hvor score og sentiment ikke stemmer overens (fx score 8 men negativ kommentar)

> **Hint:** Lad Claude Code køre sentimentanalysen som et pre-processing-skridt og gem resultaterne, så appen kan vise dem uden ventetid.

### Summary Generator

- En knap der genererer en naturlig opsummering af den aktuelle filtrerede visning
- *"Her er hvad medlemmer siger om forsikring i Q2 2025…"*

### Sammenligningsvisning

- Side-by-side sammenligning af to domæner, segmenter eller tidsperioder
- Fremhæv forskelle i scorer, temaer og sentiment

### Alert / Anomali-detektor

- Flag usædvanlige stigninger i negative svar for et domæne
- *"Heads up: Detractor-svar om fakturering steg 40% dette kvartal"*
- Kan være en visuel indikator på dashboardet eller en simuleret notifikation

### Brugerdefineret rapportbygger

- Lad brugere konfigurere deres egen visning: vælg metrics, filtre og tidsperioder
- Eksportér som PDF eller delbart link
- Gem konfigurationer per bruger/rolle

### Handlingsrettede anbefalinger

- Lad AI'en foreslå konkrete handlinger baseret på dataen
- *"Overvej at prioritere mobil-app-performance — 34% af detractor-kommentarer nævner loading-tider"*
- Knyt anbefalinger til specifik evidens fra besvarelserne

> **Hint:** Kør analysen som pre-processing og gem resultaterne, så appen kan vise anbefalinger hurtigt.

### Det virtuelle IDA-medlem

Se separat beskrivelse nedenfor.

### Wildcard: Jeres egen idé

Har I en idé der ikke står på listen? Gå efter den!

---

## Det virtuelle IDA-medlem — koncept og tilgang

**Idéen:** Byg en AI-agent ind i web-appen, der fungerer som "det virtuelle IDA-medlem". Agenten repræsenterer den samlede stemme fra medlemmernes NPS-besvarelser og kan bruges som sparringspartner, når medarbejdere vil teste idéer eller forstå medlemmernes perspektiv.

**Eksempel på brug:**
> *Medarbejder:* "Vi overvejer at ændre format på vores karriere-arrangementer fra fysiske til hybride. Hvordan ville medlemmerne reagere?"
>
> *Virtuelt medlem:* "Baseret på 312 besvarelser der nævner arrangementer, er fleksibilitet og tilgængelighed gennemgående positive temaer. Dog nævner 23% af promoters specifikt netværk og det fysiske møde som det de værdsætter mest. En hybridmodel kunne fungere, men I risikerer at miste noget af den netværksværdi, som jeres mest loyale medlemmer fremhæver."

### Sådan kan I bygge det

1. **Forbered datagrundlaget:** Kør tekstbesvarelserne gennem en kategoriserings- og opsummeringsproces (kan gøres med Claude API som pre-processing). Gem opsummeringer per tema, segment og tidsperiode, så agenten har et struktureret vidensgrundlag at trække på.

2. **Byg agenten med RAG (Retrieval-Augmented Generation):** Brug embeddings (fx via OpenAI's embedding-model) til at vektorisere besvarelserne og gem dem i en vektordatabase eller simpel in-memory-struktur. Når en bruger stiller et spørgsmål, find de mest relevante besvarelser via semantisk søgning og send dem som kontekst til en LLM (GPT eller Claude), der formulerer svaret.

3. **Giv agenten en persona:** Instruer modellen (via system prompt) i at svare som et sammensat IDA-medlem — den skal altid forankre sine svar i faktisk data, angive hvor mange besvarelser der ligger bag, og være ærlig når datagrundlaget er tyndt.

4. **Tilføj filtre:** Lad brugeren indsnævre hvilken "medlemsgruppe" agenten repræsenterer — fx kun detractors, kun et bestemt kvartal, eller kun medlemmer i en bestemt aldersgruppe.

> **API-nøgler til GPT og embedding-modeller udleveres, hvis I vælger denne opgave.**
