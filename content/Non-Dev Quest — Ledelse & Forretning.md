# Non-Dev Quest: Ledelse & Forretning

**Efter denne quest kan I:**
- Producere en komplet business case som et delebart dokument klar til ledelsen
- Generere stakeholder-kommunikation og en præsentationsoutline tilpasset forskellige modtagere
- Skrive strukturerede analyser — SWOT, risikovurdering og beslutningsoplæg — som konkrete dokumenter
- Bruge AI som "djævelens advokat" til at stress-teste jeres argumentation, inden den møder kritik

---

Ledelse og forretning handler om at oversætte teknisk arbejde til beslutningsgrundlag. Hvad koster det? Hvad giver det? Hvem skal overbevises — og med hvilke argumenter? AI er stærk til præcis det arbejde: at tage et råt input og producere et gennemarbejdet dokument der taler direkte til beslutningstagernes bekymringer.

> **Artefakt-tanken:** En business case der lægger i chatten er ikke en business case. Bed Claude om at generere et færdigt dokument i markdown — med den rette struktur, det rette sprog og de rette tal. Et dokument I kan gemme, sende og præsentere. Det er den reelle forskel på at bruge AI som chatbot og at bruge den som arbejdshest.

---

## Hvorfor Ledelse & Forretning i et hackathon?

- **Teknologi uden business case er et hobbyprojekt:** For at en løsning overlever hackathon-dagen, skal nogen kunne forklare hvorfor den er investeringen værd
- **Præsentationen er et salgsmøde:** I har få minutter til at overbevise — det kræver forberedelse og en klar fortælling
- **Risici er ikke fejl — de er forudsigelser:** At identificere hvad der kan gå galt og have en plan er god ledelse, ikke pessimisme
- **AI er en ghost writer der ikke kræver kredit:** Brug den til at formulere det, I ved — og til at udfordre det, I tror I ved

---

## Opgaven

Arbejd jer igennem mindst to af opgaverne nedenfor. Business casen er et godt udgangspunkt — den giver jer det forretningsmæssige fundament, som de øvrige dokumenter bygger på.

---

### Opgave 1: Business Case

En business case er ikke en teknisk specifikation — det er et argument. Den besvarer ét spørgsmål: *Er det her værd at investere i?* En stærk business case er præcis, ærlig om usikkerheder og taler direkte til beslutningstagernes bekymringer.

**De fire grundelementer:**
1. **Problem:** Hvad er situationen i dag, og hvad koster den?
2. **Løsning:** Hvad foreslår vi, og hvad er alternativerne?
3. **Gevinster:** Hvad opnår vi — og hvornår?
4. **Investering:** Hvad kræver det af tid, penge og kapacitet?

**Prompt — komplet business case-dokument:**
> *"Skriv en komplet business case i markdown for [beskriv jeres løsning og den organisatoriske kontekst]. Strukturér dokumentet med: Executive Summary (3 sætninger), Problemformulering med konkrete tal eller eksempler, Løsningsbeskrivelse, Forventede gevinster (kvantitative og kvalitative), Estimeret investeringsbehov, Risici og mitigeringer, og Anbefaling. Tonen er professionel og saglig — til en IT-direktør eller CFO. Afslut med en tydelig handlingsanbefaling."*

**Prompt — gevinstberegning:**
> *"Lav en gevinstberegning i markdown for [beskriv den proces I forbedrer, med relevante tal: nuværende tidsforbrug, forventet forbedring, antal brugere/gange per år]. Vis beregningen trin for trin og præsentér det endelige resultat som en tabel med: tidsparing per år, omregning til mandetimer, estimeret pengeværdi. Tilføj et afsnit om kvalitative gevinster der er svære at sætte tal på."*

**Prompt — antagelses-dokument:**
> *"Skriv et antagelses-dokument i markdown for vores business case [indsæt]. Identificér de fem mest kritiske antagelser vi er afhængige af, vurder konsekvensen hvis de ikke holder, og beskriv for hver antagelse: hvad vi kan gøre for at validere den billigt og hurtigt."*

---

### Opgave 2: Stakeholder-Kommunikation

Forskellige modtagere har forskellige bekymringer. En driftschef vil vide om systemet er stabilt. En CFO vil vide hvad det koster. En slutbruger vil vide om det gør deres hverdag nemmere. God stakeholder-kommunikation tilpasser budskabet — uden at ændre sandheden.

**Gør det:**
1. Generer et stakeholder-map som et struktureret dokument
2. Skriv en ledelsesopdatering som et klar-til-send dokument
3. Producér en præsentationsoutline til hackathon-afslutningen

**Prompt — stakeholder-map:**
> *"Skriv et stakeholder-map i markdown for implementeringen af [beskriv løsningen]. Identificér de fem vigtigste stakeholder-grupper. For hver gruppe: beskriv deres primære interesser og bekymringer, hvad der motiverer dem til at sige ja, og hvad der vil få dem til at modarbejde projektet. Afslut med en kommunikationsstrategi: hvad kommunikerer vi til hvem, hvornår og i hvilken kanal?"*

**Prompt — ledelsesopdatering:**
> *"Skriv en ledelsesopdatering på maksimalt én side i markdown om [beskriv hvad I har bygget og opnået]. Dokumentet skal indeholde: Status (hvad har vi gjort?), Centrale resultater (hvad virker, hvad har vi lært?), Næste skridt (hvad anbefaler vi at gøre nu?), og Beslutningsbehov (hvad skal ledelsen tage stilling til?). Tonen er koncis og beslutningsorienteret — til en travl leder der vil have pointerne på 2 minutter."*

**Prompt — præsentationsoutline:**
> *"Lav en outline til en præsentation af [beskriv løsning og kontekst]. Strukturér den som: Hook → Problem → Løsning og demo → Business case og gevinster → Næste skridt og anbefaling. For hvert afsnit: angiv varighed, nøglebudskab og hvilken type indhold (tale, slide, demo). Giv os tre forskellige valgmuligheder til åbningen og anbefal én med begrundelse."*

---

### Opgave 3: Analysér og Beslut

Beslutninger er stærkere, når de er informeret af struktureret analyse. AI kan hjælpe med at gennemføre analyserne hurtigt — og vigtigst af alt: udfordre jeres egne antagelser, så I ikke præsenterer noget I selv har svært ved at forsvare.

**Gør det:**
1. Generer en SWOT-analyse som et færdigt dokument
2. Skriv et beslutningsoplæg med fordele og ulemper for de reelle valg I står over for
3. Brug Claude som "djævelens advokat" og dokumentér fund og svar som Q&A

**Prompt — SWOT-dokument:**
> *"Skriv en SWOT-analyse i markdown for [beskriv jeres løsning, målgruppe og konkurrenter]. Vær specifik og konkret — undgå generiske formuleringer. For hvert af de fire felter: 3-4 punkter med en kort forklaring på, hvorfor det er relevant for os specifikt. Tilføj et afsnit med de tre vigtigste strategiske implikationer baseret på analysen."*

**Prompt — beslutningsoplæg:**
> *"Vi skal beslutte: [beskriv de reelle handlemuligheder I overvejer]. Skriv et beslutningsoplæg i markdown der for hver mulighed beskriver: fordele, ulemper, skjulte omkostninger og risici. Afslut med en klar anbefaling og begrundelse. Formater det, så det kan præsenteres for en beslutningstager på 5 minutter."*

**Prompt — djævelens advokat:**
> *"Her er vores business case og anbefaling: [indsæt]. Spil djævelens advokat. Skriv et moddokument i markdown der: identificerer de tre svageste punkter i vores argumentation, stiller de ti hårdeste spørgsmål en skeptisk bestyrelse ville stille, og peger på hvad vi muligvis har undervurderet eller overset. Vær direkte. Vi vil bruge dette til at forberede os."*

---

## Bonus: Kommunikér resultatet

- **Executive summary:** *"Skriv et executive summary på maksimalt en halv side i markdown om [beskriv jeres dag og output]. Struktur: Problem → Løsning → Vigtigste indsigt → Anbefalet næste skridt. Det er dokumentet lederen sender videre til sin chef."*
- **LinkedIn-opslag:** *"Skriv et LinkedIn-opslag om hvad vi lærte ved at bruge AI til [beskriv hvad I arbejdede med]. Tonen er professionel og personlig — vis en konkret indsigt, ikke bare en generel pointe. Max 150 ord."*
- **Bestyrelsessimulering:** *"Simulér et kritisk bestyrelsesmøde om vores investering i [beskriv løsningen]. Spil tre bestyrelsesmedlemmer med forskellige perspektiver (økonomi, risiko, strategi) og giv os de hårdeste spørgsmål fra hvert perspektiv."*

---

## AI-prompt-inspiration

- *"Skriv tre versioner af vores value proposition — én til en IT-direktør, én til en driftschef og én til en slutbruger. Tilpas fokus, sprog og argument til hvert publikum."*
- *"Formulér tre KPIs vi kan bruge til at måle succes for [beskriv løsning] — der er meningsfulde for hhv. driften, ledelsen og slutbrugerne. Beskriv for hvert: hvad måler vi, hvad er målet, og hvordan tracker vi det."*
- *"Lav en kommunikationsplan i markdown for udrulningen af [beskriv løsning]: hvem kommunikerer vi til, hvad siger vi, hvornår og i hvilken kanal — opdelt i faserne: før, under og efter lancering."*
- *"Skriv en risikolog i markdown med de otte vigtigste risici ved vores projekt, sandsynlighed og konsekvens for hver, og en konkret mitigering med ansvarlig ejer."*
