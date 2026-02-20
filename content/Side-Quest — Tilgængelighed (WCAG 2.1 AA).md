# Side-Quest: Tilføj tilgængelighedsfunktioner (WCAG 2.1 AA)

**Efter denne quest kan I:**
- Forklare de vigtigste WCAG 2.1 AA-krav og hvad de kræver i praksis
- Bruge jeres AI-værktøj til at auditere og fixe tilgængelighedsproblemer i koden
- Verificere jeres løsning med fire konkrete testmetoder: tastatur, skærmlæser, kontrast og zoom

---

Kan jeres app bruges af alle — også dem, der navigerer med tastatur, bruger skærmlæser eller har nedsat syn? I denne side-quest gør I jeres løsning tilgængelig efter WCAG 2.1 AA-standarden, og bruger jeres AI-værktøj til at finde og fixe problemer.

---

## Hvorfor tilgængelighed?

- Det er et lovkrav i EU (European Accessibility Act træder i kraft 2025)
- ~15% af verdens befolkning har en form for funktionsnedsættelse
- God tilgængelighed giver bedre UX for *alle* — tænk: tastaturnavigation, god kontrast i sollys, tydelige fejlbeskeder
- Det er et kvalitetsstempel på professionel softwareudvikling

---

## Opgaven

Tag jeres eksisterende løsning fra hackathon-casen og gør den tilgængelig. Brug jeres AI-værktøj aktivt — det er overraskende godt til at finde og fixe tilgængelighedsproblemer.

### 1. Audit: Find problemerne

Bed jeres AI-værktøj om at gennemgå koden for tilgængelighedsproblemer:

> *"Gennemgå alle mine komponenter for WCAG 2.1 AA-overtrædelser. Tjek semantisk HTML, ARIA-attributter, farvekontrast, tastaturnavigation og skærmlæser-support."*

Kør desuden en automatiseret audit:
- Tilføj `axe-core` eller `pa11y` til projektet og kør en scan
- Eller brug browserens Lighthouse (Accessibility-fanen) og giv resultatet til jeres AI-værktøj

> 📸 **[SCREENSHOT: Chrome DevTools Lighthouse-rapport med Accessibility-score fremhævet — og listen over fundne problemer med WCAG-referencer og berørte elementer]**

### 2. Fix: De vigtigste områder

Fokusér på disse WCAG 2.1 AA-krav:

| Område | Krav | Eksempel |
|--------|------|----------|
| **Semantisk HTML** | Brug korrekte HTML-elementer | `<button>` i stedet for `<div onclick>`, `<nav>`, `<main>`, `<h1>`-`<h6>` i korrekt rækkefølge |
| **Tastaturnavigation** | Alt skal kunne nås med tastatur | Tab-rækkefølge, synlig fokusindikator, ingen tastaturfælder |
| **Farvekontrast** | Minimum 4.5:1 for tekst, 3:1 for stor tekst | Tjek alle farvepar — brug AI til at foreslå tilgængelige alternativer |
| **ARIA-attributter** | Meningsfulde labels og roller | `aria-label` på ikoner, `aria-live` på dynamisk indhold (fx check-in-bekræftelse) |
| **Formularer** | Labels, fejlbeskeder og instruktioner | Synlige labels, `aria-describedby` til fejl, fokus flyttes til fejlbesked |
| **Billeder og ikoner** | Alt-tekster og dekorative markeringer | `alt="Bekræftelse: Gæst tjekket ind"` eller `aria-hidden="true"` for dekorative ikoner |

### 3. Test: Verificér det virker

- **Tastaturtest:** Læg musen væk. Kan I gennemføre et komplet check-in-flow kun med tastaturet?
- **Skærmlæsertest:** Tænd VoiceOver (Cmd+F5 på Mac) eller brug NVDA (Windows). Giver flowet mening?
- **Kontrasttest:** Brug et værktøj eller bed jeres AI om at tjekke alle farvepar
- **Zoom-test:** Zoom til 200% i browseren. Holder layoutet?

> 📸 **[SCREENSHOT: Browser zoomet til 200% der viser check-in-appen — med tydelig, synlig fokusindikator (blå outline) rundt om det aktive element under tastaturnavigation]**

---

## Bonus: Avanceret tilgængelighed

- **Skip-link:** Tilføj et "Skip til indhold"-link, der vises ved første tab-tryk
- **Reduced motion:** Respektér `prefers-reduced-motion` og slå animationer fra for brugere, der har bedt om det
- **Dark mode med kontrast:** Sørg for, at kontrastkrav overholdes i både lyst og mørkt tema
- **Live regions:** Brug `aria-live="polite"` til at annoncere check-in-status og opdateringer til skærmlæsere
- **Fejlhåndtering:** Flyt fokus til fejlbesked ved validering, og brug `role="alert"` til kritiske fejl

---

## AI-prompt-inspiration

Her er prompts I kan bruge med jeres AI-værktøj:

- *"Tilføj korrekte ARIA-attributter til alle interaktive elementer i min app"*
- *"Min check-in-bekræftelse opdateres dynamisk — gør den tilgængelig for skærmlæsere med aria-live"*
- *"Tjek alle mine farver for WCAG AA-kontrast og foreslå alternativer, der overholder 4.5:1"*
- *"Gør min QR-scanner-komponent tastatur-tilgængelig med fokushåndtering"*
- *"Tilføj en skip-navigation-komponent til min app"*