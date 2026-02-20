# Hackathon Case: Konference Check-in —

## Udfordringen

Når der afholdes konferencer, skal deltagere tjekkes ind, finde rundt i programmet og vælge de rette sessions. Værtene for konferencen skal kunne se hvem der er tilmeldt, registrere ankomne og sælge biletter i døren.

Jeres mission: Brug jeres AI-kodningsværktøj til at vibe-code en applikation, der gør konferenceoplevelsen bedre — enten for **deltagerne**, for **konferenceholdet**, eller begge dele. I bygger oven på et færdigt backend-API med realistisk testdata, som I kan integrere med.

## Jeres Fundament: Et Færdigt Backend-API

I stedet for et datasæt får I adgang til et **live REST API** med fuld dokumentation. API'et håndterer konferencer, billetter, gæster og check-ins — og er klar til brug med realistisk seed-data (~600 billetter fordelt på 3 konferencer).

| Ressource     | Beskrivelse                                                      |
|---------------|------------------------------------------------------------------|
| Konferencer   | 3 konferencer med navn, datoer og aktiv-status                   |
| Billetter     | ~200 pr. konference med unikke billetnumre og QR-kode-potentiale |
| Gæster        | Navngivne deltagere tilknyttet billetter                         |
| Check-ins     | 30-40% allerede tjekket ind — resten venter på jer               |
| Extras        | Tilkøb som Dinner Party og Snack Buffet på billetterne           |
| Talks         | 10-15 talks pr. konference med speaker, track, tidspunkt og rum  |
| Evalueringer  | Deltager-ratings (1-5) og kommentarer på de enkelte talks        |
| Statistik     | Endpoints til realtidsstatistik, check-in-rater og evalueringsoversigter |

**Kom i gang:**
- API-dokumentation (Swagger UI): `<base-url>/api/v1/docs`
- OpenAPI-spec (maskinlæsbar): `<base-url>/api/v1/openapi.json`
- API-nøgler og base-URL udleveres ved hackathonens start

> **Tip:** Giv jeres AI-værktøj adgang til OpenAPI-specifikationen, så det kan forstå API'et og generere integrationskode automatisk. Prøv fx: *"Hent OpenAPI-specifikationen fra dette URL og byg en service-klasse, der wrapper alle endpoints."*

---

## Opgaven består af 2 dele

Første del er en bunden opgave og handler grundlæggende om at anvende jeres AI-kodningsværktøj til at få et fundament på plads. Derefter vælger I helt frit blandt opgaverne under del 2 — vælg det, der interesserer jer mest i gruppen, eller find på jeres egne features.

---

## Del 1 — Fundamentet

Byg en fungerende applikation med jeres AI-kodningsværktøj, der indeholder:

### Deltager Check-in
- En check-in-oplevelse, hvor en deltager kan blive tjekket ind — fx via billetnummer, søgning på navn, eller scanning af QR-kode
- Vis bekræftelse med deltagerens navn, billetinfo og eventuelle tilkøb (Dinner Party, Snack Buffet)
- Håndtér edge cases: allerede tjekket ind, ugyldig billet, ukendt billetnummer

**Til designere, UX'ere, PO'er og BI'ere:**

AI-kodningsværktøjer kan generere UI og datavisualiseringer hurtigt, men det kræver mennesker at gøre det rigtig godt. Tænk evt. over:

- **Brugerrejsen:** En deltager, der ankommer til konferencen, vil noget andet end en medarbejder ved check-in-skranken — og noget helt tredje end en konferenceleder, der vil have overblik. Hvem bygger I til?
- **Hastighed og flow:** Check-in skal gå hurtigt. Hvordan minimerer I klik og ventetid?
- **Informationsarkitektur:** Hvad skal brugeren se først? Hvad er vigtigst — og hvad kan gemmes bag et klik?
- **Fejlhåndtering:** Hvad sker der, når noget går galt? Hvordan kommunikerer I tydeligt til brugeren?

Skitser på papir eller whiteboard først. Tag fx et billede af jeres skitse og vis det til jeres AI-værktøj — beskriv hvad I ønsker, og iterér derfra. I styrer retningen, AI'en bygger det.

---

## Del 2: Fri leg (med lidt inspiration)

Vælg de opgaver, som I kan nå, og som I synes er sjove!

### A. Konferenceoverblik og Status
- Vis et overblik over konferencen: navn, dato, beskrivelse
- Vis status: hvor mange er tjekket ind vs. forventet antal
- Giv deltageren (eller personalet) en fornemmelse af, "hvor langt vi er" i check-in-processen

### B. Filtrering og Søgning
- Lad brugeren søge efter gæster, billetter eller billetnumre
- Filtrér på konference, check-in-status, eller tilkøb
- En medarbejder ved check-in-skranken skal hurtigt kunne finde en deltager og se, om vedkommende er tjekket ind

### C. QR-kode Scanner
- Byg en mobil-venlig check-in-app, der bruger enhedens kamera til at scanne QR-koder
- Mapning fra QR-kode til billetnummer → automatisk check-in via API'et
- Vis bekræftelse eller fejlbesked direkte på skærmen

### D. Live Dashboard for Konferenceholdet
- Et realtids-dashboard, der poller statistik-endpoints og viser:
  - Check-in-rate over tid (graf)
  - Antal tjekket ind vs. forventet (progress bar)
  - Tilkøbsoversigt: hvor mange med Dinner Party / Snack Buffet er ankommet?
- Automatisk opdatering hvert 5.-10. sekund

### E. Deltager Self-Service App
- En app rettet mod deltageren selv: "Din konference"
- Slå din billet op og se din status
- Se konferenceprogrammet og vælg sessions/tracks
- Deltag i en konkurrence eller quiz knyttet til konferencen

### F. Talk-Evaluering
- Lad deltagere rate og kommentere de talks, de har deltaget i (1-5 stjerner + fritekst)
- Vis en oversigt over evalueringer pr. talk — gennemsnitsrating, antal evalueringer, ratingfordeling
- Konferenceholdet kan se top- og bundratede talks og spotte mønstre

### G. Wildcard: Jeres Egen Idé
- Har I en idé, der ikke står på listen? Afprøv den!
- Måske et gamification-lag? En social feature? En accessibility-fokuseret løsning?

---

