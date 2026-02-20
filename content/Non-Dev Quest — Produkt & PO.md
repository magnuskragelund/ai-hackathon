# Non-Dev Quest: Produkt & PO

**Efter denne quest kan I:**
- Producere et Opportunity Solution Tree som et struktureret, delebart dokument
- Generere en komplet user story backlog med acceptance criteria klar til et udviklingsteam
- Skrive en konkurrentanalyse-rapport der syntetiserer fund til konkrete anbefalinger
- Producere et product brief og en præsentationsoutline klar til hackathon-afslutningen

---

Produktledelse handler om at træffe de rigtige valg — at fokusere på det, der skaber mest værdi, og frasortere det, der ikke gør. AI gør det ikke lettere at beslutte, men det gør det *hurtigere* at udforske mulighederne, stille de rigtige spørgsmål og strukturere argumenterne — så I kan bruge jeres tid på at tænke, frem for at formulere.

> **Artefakt-tanken:** En chatbesked forsvinder. Et dokument lever. Bed Claude om at generere færdige dokumenter i markdown — user story-backlogs, analyser, pitchdokumenter — som I kan gemme, dele med teamet og aflevere som konkret output fra dagen.

---

## Hvorfor Produkt & PO i et hackathon?

- **Retning er vigtigere end hastighed:** Et team der koder det forkerte hurtigt, taber — en klar produktvision giver udviklerne noget at sigte efter
- **User stories reducerer gæt:** Eksplicitte acceptance criteria betyder færre runder med "det var ikke det, vi mente"
- **Konkurrentviden sparer hjulgenopfindelse:** Hvad har andre løst, og hvad er stadig et uløst problem?
- **Pitchen er produktet:** Til præsentationen er evnen til at kommunicere *hvad* I har bygget og *hvorfor* mindst lige så vigtig som selve løsningen

---

## Opgaven

Arbejd jer igennem mindst to af opgaverne nedenfor. Opgaverne bygger på hinanden — OST-arbejdet giver jer et stærkt fundament for user stories og pitch.

---

### Opgave 1: Opportunity Solution Tree

Opportunity Solution Tree (OST) er en metode til at strukturere produkttænkning fra Teresa Torres. Det starter med ét ønsket outcome — et forretningsmål eller en brugerværdi — og udfolder sig som et træ af muligheder, løsninger og de antagelser, der skal testes.

**Gør det:**
1. Definer jeres ønskede outcome (ét, konkret mål — ikke en feature)
2. Lad Claude generere et komplet OST som et struktureret markdown-dokument
3. Iterér: bed Claude om at tilføje, prioritere eller udfordre de identificerede opportunities
![[Pasted image 20260219122342.png]]
**Prompt — OST-dokument:**
> *"Skriv et Opportunity Solution Tree i markdown for følgende situation: [beskriv jeres løsning og det ønskede outcome, fx 'Vi vil reducere den tid brugerne bruger på X']. Strukturér dokumentet med: Outcome (øverst), 4-5 Opportunities med forklaring, 2-3 mulige Solutions per opportunity, og de tre mest risikable Assumptions der skal testes. Brug overskrifter og indrykning, så træstrukturen er tydelig."*


**Prioriteringsprompt:**
> *"Tag de opportunities vi har identificeret i vores OST [indsæt] og lav en prioriteringsmatrix i markdown. Vurder hver opportunity på to akser: estimeret impact på vores outcome (1-5) og indsats for at validere (1-5). Anbefal hvilke to vi bør fokusere på i dag og begrund valget."*

![[Pasted image 20260219122634.png]]

---

### Opgave 2: User Story Backlog

En user story er ikke en teknisk kravspec — det er en fortælling om hvem der vil gøre hvad og hvorfor. Acceptance criteria er de konkrete betingelser, der afgør om en feature er "done". Et velskrevet backlog-dokument er en af de mest værdifulde ting, et PO-spor kan aflevere til et udviklingsteam.

**Standardformatet:**
> *"Som [brugertype] vil jeg [handling] så jeg kan [gevinst]"*

**Gør det:**
1. Lad Claude generere et komplet backlog-dokument med user stories og acceptance criteria
2. Forfin og prioriter dokumentet sammen
3. Bed Claude identificere edge cases og tilføje dem

**Prompt — backlog-dokument:**
> *"Skriv en komplet user story backlog i markdown for [beskriv jeres løsning og primære brugertyper]. Generer 8-10 user stories fordelt på de vigtigste brugertyper. For de tre vigtigste stories: tilføj detaljerede acceptance criteria med happy path, fejlscenarier og edge cases. Afslut med en MoSCoW-prioritering af alle stories (Must / Should / Could / Won't)."*

**Kvalitetstjek-prompt:**
> *"Gennemgå denne user story backlog [indsæt] og skriv en QA-rapport i markdown der identificerer: stories der er for store og bør splittes, stories med uklare acceptance criteria, stories der overlapper, og manglende stories I har identificeret. Strukturér det som konkrete anbefalinger."*

---

### Opgave 3: Konkurrentanalyse

Inden I opfinder hjulet, er det værd at vide hvad der allerede eksisterer — og hvad der mangler. En god konkurrentanalyse handler ikke om at kopiere, men om at forstå landskabet og finde det ubetjente behov.

**Gør det:**
1. Bed Claude om at generere en struktureret konkurrentanalyse-rapport
2. Identificér "the gap" — hvad løser ingen af dem godt nok?
3. Syntetisér til en anbefaling

**Prompt — konkurrentanalyse-rapport:**
> *"Skriv en konkurrentanalyse-rapport i markdown for [beskriv jeres domæne og løsningstype]. Identificér 4-5 relevante eksisterende løsninger. For hver: beskriv hvad de gør, deres styrker og svagheder på de dimensioner der er vigtigst for vores brugere. Afslut med: et afsnit om 'the gap' (hvad ingen løser godt nok) og tre konkrete anbefalinger til vores differentieringsstrategi."*

**Synteseprompt:**
> *"Baseret på denne konkurrentanalyse [indsæt]: skriv et kort positioneringsdokument i markdown der beskriver vores unikke value proposition sammenlignet med alternativer. Brug formatet: 'For [målgruppe] der [problem], er [vores løsning] den eneste [kategori] der [differentiator], i modsætning til [alternativ] der [alternativets svaghed]'."*

---

### Opgave 4: Product Brief og Pitch

En god pitch er ikke en feature-liste. Det er et klart argument for *hvem* der har *hvilket problem*, og *hvorfor* jeres løsning er den rigtige.

**Gør det:**
1. Generer et komplet product brief som et delebart markdown-dokument
2. Skriv en præsentationsoutline til hackathon-afslutningen
3. Iterér med Claude som sparringspartner

**Prompt — product brief:**
> *"Skriv et product brief i markdown for [beskriv jeres løsning]. Strukturér det med følgende afsnit: Problemet (hvad er udfordringen i dag, og hvad koster den?), Målgruppen (hvem løser vi det for — inkludér et kort persona-snapshot), Løsningen (hvad har vi bygget?), Value Proposition (hvad er den konkrete gevinst?), Differentiering (hvorfor vores tilgang frem for alternativer?), og Næste skridt (hvad ville vi gøre med mere tid?). Tonen er professionel men direkte — til en intern præsentation."*

**Prompt — præsentationsoutline:**
> *"Lav en outline til en 3-minutters hackathon-præsentation af [beskriv løsning]. Strukturér den som: Hook (hvad er det overraskende faktum eller spørgsmål vi åbner med?), Problem (30 sekunder), Løsning og demo (90 sekunder), Gevinst i tal (30 sekunder), Næste skridt (15 sekunder). Giv os tre valgmuligheder til åbningen og anbefal én."*

---

## Bonus: Skarp prioritering og selvkritik

- Lav en **pre-mortem** som et dokument: *"Skriv en pre-mortem for vores løsning. Det er om et år og projektet er slået fejl. Beskriv de fem mest sandsynlige årsager og hvad vi burde have gjort anderledes. Formatér det som et læringsdokument."*
- Bed Claude spille **kritisk stakeholder** og dokumentér spørgsmål + svar som Q&A-dokument til præsentationsforberedelse
- Generer en **one-page executive summary** der kan afleveres til ledelsen efter hackathon-dagen

---

## AI-prompt-inspiration

- *"Skriv en value proposition canvas i markdown for vores løsning: Customer Jobs, Pains og Gains for kunden — og vores Products & Services, Pain Relievers og Gain Creators. Brug en tabelstruktur."*
- *"Generer en liste over de 10 spørgsmål en skeptisk investor ville stille om vores løsning, og skriv et forberedt svar til hvert. Formatér som Q&A-dokument."*
- *"Skriv et 'definition of done'-dokument for vores MVP: hvilke kriterier skal være opfyldt, før vi kan kalde det færdigt og klar til lancering?"*
- *"Lav en produktroadmap for de næste tre måneder i markdown — opdelt i faser med fokusområder og succeskriterier for hvert."*
