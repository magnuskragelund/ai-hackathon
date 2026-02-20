# Non-Dev Quest: UX & Design

**Efter denne quest kan I:**
- Generere et komplet persona-dokument og brugerrejser som færdige, delebare artefakter
- Indsamle syntetisk user research og destillere den til et skriftligt designgrundlag
- Omsætte en papirskitse til en klikbar prototype med hjælp fra AI
- Generere og iterere på UI-designs i Figma Make med udgangspunkt i kendte designsystemer
- Producere et samlet design brief klar til overdragelse til udviklere

---

Design er ikke kun æstetik — det er forståelsen af, hvem der bruger noget, og hvad de egentlig har brug for. AI kan hjælpe jer med at gå fra tomme sider til strukturerede indsigter og klare prototyper langt hurtigere end I er vant til.

> **Artefakt-tanken:** Claude kan ikke bare svare på spørgsmål — den kan skrive komplette dokumenter. Bed den eksplicit om at generere et færdigt dokument i markdown, og I får noget I kan gemme, dele og bygge videre på. Det er forskellen på at bruge AI som en søgemaskine og at bruge den som en arbejdshest.

---

## Hvorfor UX & Design i et hackathon?

- **Brugerbehov driver løsningskvalitet:** En app der er svær at bruge er en app ingen bruger — selv om koden er perfekt
- **Design tidligt sparer tid:** Jo tidligere I identificerer pain points og definerer flows, jo færre fejl retter udviklerne bagefter
- **AI accelererer research:** Hvad der normalt tager dage med interviews og desk research kan I nu skitsere på timer
- **Dokumenter giver udviklerne retning:** En persona og en brugerrejse er langt mere værdifuldt input end mundtlige forklaringer

---

## Opgaven

Arbejd jer igennem mindst to af opgaverne nedenfor med udgangspunkt i jeres projekt. Kombiner dem — output fra personas­opgaven er stærkt input til wireframe-opgaven.

---

### Opgave 1: Persona-dokument og Brugerrejser

En persona er ikke en demografisk beskrivelse — det er en narrativ, der giver designbeslutninger et menneskeligt ansigt. En brugerrejse (user journey map) viser, hvad der sker *inden*, *under* og *efter* en interaktion — og hvor det går galt.

**Gør det:**
1. Bed Claude om at skrive et komplet persona-dokument for jeres løsning — ikke bare bullet points, men et gennemarbejdet dokument klar til deling
2. Lav en brugerrejse for den vigtigste persona som et struktureret markdown-dokument
3. Bed Claude om at identificere pain points og muligheder direkte i dokumentet

**Prompt — persona-dokument:**
> *"Skriv et komplet persona-dokument i markdown for [beskriv jeres løsning og målgruppe]. Lav tre detaljerede personas. For hver persona: giv dem et navn og en titel, beskriv deres mål, frustrationer, teknologivaner og en typisk arbejdsdag. Afslut hvert persona-afsnit med et konkret citat. Dokumentet skal kunne deles direkte med et udviklingsteam."*

**Prompt — brugerrejse:**
> *"Skriv en brugerrejse i markdown for [persona-navn] der bruger [jeres løsning]. Strukturér rejsen i faser. For hvert trin: hvad gør brugeren, hvad tænker de, hvad føler de, og hvad er risikoen for frustration? Brug en tabel til at vise faserne overskueligt. Tilføj et afsnit med de tre vigtigste designanbefalinger baseret på rejsen."*

---

### Opgave 2: Syntetisk User Research

Syntetisk user research er ikke interviews — det er at bruge AI til at destillere, hvad rigtige brugere allerede har sagt offentligt om lignende oplevelser. Det er hurtigt, overraskende præcist og et stærkt supplement til antagelser.

**Gør det:**
1. Brug [Perplexity](https://www.perplexity.ai) (vælg "Social" som kilde-filter) til at indsamle rå brugeroplevelser fra sociale medier og fora
2. Kopiér output til Claude og bed den skrive en research-rapport som et struktureret dokument
3. Brug rapporten som fundament for designbeslutninger

![[Pasted image 20260219123015.png]]

**Prompt til Perplexity:**
> *"Hvad fortæller brugere på sociale medier og fora om deres oplevelser med [beskriv den type system/service I bygger]? Inkludér konkrete citater og eksempler på hvad der frustrerer brugerne, og hvad de ønsker sig."*

**Prompt til Claude — research-rapport:**
> *"Her er hvad brugere siger om [beskriv domænet]: [indsæt Perplexity-output]. Skriv en kort research-rapport i markdown med: et executive summary (3 sætninger), de fem vigtigste indsigter med støttecitater, og fem konkrete designprincipper vi bør følge. Formater det som et dokument der kan præsenteres for et team."*

---

### Opgave 3: Wireframes og Prototyper

En skitse på papir er en designbeslutning. Et foto af den skitse er et brief til en AI. I behøver ikke Figma eller designerfaring for at komme fra idé til klikbar prototype.

**Workflow:**
1. Tegn jeres UI-idé på papir eller whiteboard — hold det simpelt, fokusér på layout og flow
2. Tag et foto af skitsen
3. Giv fotoet til Claude med en beskrivelse af hvad I vil have
4. Claude genererer en HTML-fil I kan åbne direkte i browseren

**Prompt:**
> *"Her er en håndtegnet skitse af vores [beskriv skærm] [foto]. Generer en komplet HTML-fil med inline CSS der implementerer dette design. Gør det responsivt og brug en ren, professionel stil. Skriv filen, så jeg kan gemme den som index.html og åbne den direkte i en browser."*

**Pro tip:** Bed Claude om at generere hele HTML-filen — ikke bare et uddrag. Så kan I åbne den i en browser med det samme og se resultatet.

---

### Opgave 4: Fra Design til Kode med Figma Make

Figma Make er Figmas AI-funktion, der genererer hele designs og prototyper ud fra tekstbeskrivelser. Det bliver særligt stærkt, når I specificerer et designsystem — så sikrer I konsistens og et professionelt udtryk fra start.

**Workflow:**
1. Åbn Figma og aktivér Make (via toolbar eller `Cmd/Ctrl+K` → "Make")
2. Beskriv hvad I vil have — og angiv hvilket designbibliotek det skal bygges med
3. Iterér med naturligt sprog: *"Gør den primære knap mere prominent"*, *"Tilføj en fejlstate"*
4. Eksportér designet som reference til jeres udviklere

**Vælg jeres designsystem:**

| Bibliotek | Stil | Godt til |
|-----------|------|----------|
| **Shadcn/UI** | Moderne, minimalistisk | Formularer og dashboards |
| **Ant Design** | Enterprise, datarigt | Admin-interfaces med tabeller og statistik |
| **Material Design (MUI)** | Googles designsprog, velkendt | Apps der skal føles familiære |
| **Apple HIG** | Apples designsprog, elegant | Native-feel selvbetjeningsapps |

**Eksempel-prompts:**
> *"Design [beskriv skærm] using shadcn/ui components. Show both an empty/default state and a populated state with realistic data."*

> *"Create a dashboard for [beskriv formål] using Ant Design. Show key metrics as cards at the top and a data table below with filters."*

**Pro tip:** Generér det samme design med to forskellige biblioteker og sammenlign — det tager to minutter og giver jer et langt bedre grundlag for at vælge retning.

---

### Opgave 5: Usability og Designprincipper

Et godt design er et design alle kan bruge. Lad Claude hjælpe med at skrive de dokumenter, der forankrer jeres designbeslutninger — og sørger for at alle på teamet trækker i samme retning.

**Gør det:**
1. Generer et usability test-script som et komplet, klar-til-brug dokument
2. Lad Claude skrive et designprincipper-dokument for jeres løsning
3. Bed Claude lave en tilgængeligheds-tjekliste

**Prompt — usability test-script:**
> *"Skriv et komplet usability test-script i markdown for [beskriv jeres løsning]. Inkludér: velkomst og introduktion til testpersonen, fem konkrete opgaver de skal løse (formuleret uden at give svaret væk), observationspunkter for hver opgave, og debriefing-spørgsmål til sidst. Dokumentet skal kunne bruges direkte af en testleder uden forberedelse."*

**Prompt — designprincipper:**
> *"Baseret på denne beskrivelse af vores løsning og målgruppe: [beskriv]. Formulér fem designprincipper som et kort markdown-dokument. Hvert princip skal have: et kort navn (2-4 ord), en forklaring på to sætninger, og et konkret eksempel på hvad det betyder i praksis."*

---

## Bonus: Design Brief til overdragelse

Saml jeres arbejde i ét dokument:

> *"Vi har udarbejdet følgende materialer i dag: [beskriv hvad I har lavet]. Skriv et samlet design brief i markdown der: opsummerer problemet og målgruppen, præsenterer de vigtigste persona-indsigter, beskriver det anbefalede UI-flow, og lister designprincipper og constraints. Dokumentet skal kunne afleveres til et udviklingsteam som udgangspunkt for implementering."*

---

## AI-prompt-inspiration

- *"Skriv et komplet empathy map for [persona-navn] som et markdown-dokument med fire kvadranter: hvad siger de, hvad tænker de, hvad gør de, hvad føler de."*
- *"Generer en liste med 10 usability heuristikker (Nielsen) og vurdér for hvert punkt, hvordan vores løsning [beskriv] klarer sig. Skriv det som en struktureret audit-rapport."*
- *"Lav en tilgængeligheds-tjekliste i markdown for vores løsning baseret på WCAG 2.1 AA. Gruppér punkterne efter kategori og markér hvilke der er kritiske at løse i MVP."*
- *"Skriv en job story for vores primære bruger og udled tre konkrete designimplikationer fra den."*
