# Side-Quest: CLAUDE.md som Team-Kontrakt

**Efter denne quest kan I:**
- Forklare hvad CLAUDE.md er, og hvorfor det øger konsistens på tværs af teamet
- Oprette en CLAUDE.md der fungerer som en levende team-kontrakt for jeres AI-workflow
- Opleve den konkrete forskel det gør at arbejde med og uden CLAUDE.md

---

CLAUDE.md er jeres projekts "system prompt" — den kontekst jeres AI-kodningsværktøj altid har med sig. De bedste teams bruger den som en levende kontrakt for, hvordan AI'en skal opføre sig: hvilke konventioner den skal følge, hvad den må og ikke må, og hvad den skal vide om projektet.

> **Note:** CLAUDE.md er Claude Code-specifikt, men konceptet findes i andre værktøjer: Cursor har `.cursorrules`, Windsurf har `.windsurfrules`, og GitHub Copilot har `.github/copilot-instructions.md`. Principperne er de samme.

---

## Hvorfor CLAUDE.md?

- **Konsistens:** AI'en følger jeres konventioner hver gang — uden at I skal gentage dem
- **Onboarding:** Nye teammedlemmer (og AI'en) forstår projektet med det samme
- **Kvalitet:** Definér standarder og AI'en overholder dem automatisk
- **Teamkontrakt:** Dokumentér beslutninger, så alle (mennesker og AI) er på samme side

---

## Opgaven

Opret en gennemtænkt CLAUDE.md for jeres hackathon-projekt. Den skal fungere som et levende dokument, der gør jeres AI-værktøj skarpere.

### Hvad skal den indeholde?

#### 1. Projektbeskrivelse
```markdown
# Konference Check-in App

En webapp til konference check-in, bygget under IDA AI Hackathon 2026.
Backend-API er tilgængeligt på [base-url] med API-nøgle [key].
```

#### 2. Tech stack og arkitektur
```markdown
## Tech Stack
- Frontend: React + TypeScript + Vite
- Styling: Tailwind CSS (brug ALDRIG inline styles)
- State: React hooks (ingen Redux)
- API: REST via fetch — alle kald går gennem src/api/client.ts
```

#### 3. Kodekonventioner
```markdown
## Konventioner
- Skriv TypeScript — aldrig plain JavaScript
- Brug functional components med hooks
- Navngiv komponenter med PascalCase, filer med kebab-case
- Én komponent pr. fil
- Brug named exports (ikke default exports)
```

#### 4. API-konfiguration
```markdown
## API
- Base URL: https://api.example.com/v1
- Auth: Bearer token i Authorization-header
- OpenAPI spec: https://api.example.com/v1/openapi.json
- Brug ALTID error handling på API-kald
```

#### 5. Regler og begrænsninger
```markdown
## Regler
- Lav ALDRIG auto-commits — spørg altid først
- Slet ALDRIG filer uden at spørge
- Kør `npm test` efter alle kodeændringer
- Skriv ALTID tests til ny funktionalitet
- Brug ALDRIG any-typer i TypeScript
```

#### 6. Projektstruktur
```markdown
## Struktur
src/
  api/          # API-klient og service-funktioner
  components/   # React-komponenter
  hooks/        # Custom hooks
  pages/        # Side-komponenter (routes)
  types/        # TypeScript interfaces og typer
  utils/        # Hjælpefunktioner
```

---

## Sådan opretter I CLAUDE.md

1. Opret filen i projektets rod: `CLAUDE.md`
2. Start med det vigtigste: tech stack, konventioner og API-info
3. Tilføj regler efterhånden som I opdager ting, AI'en gør forkert
4. Commit filen, så hele teamet får glæde af den

---

## Eksperiment: Med vs. uden

Prøv dette for at mærke forskellen:

1. **Uden CLAUDE.md:** Bed Claude om at bygge en ny komponent. Bemærk hvilke valg den træffer (styling, filstruktur, navngivning)
2. **Med CLAUDE.md:** Bed om det samme igen. Sammenlign: følger den nu jeres konventioner?

Forskellen er ofte markant — især for styling, filstruktur og fejlhåndtering.

---

## Bonus: Avanceret CLAUDE.md

- **Nested CLAUDE.md:** Læg en ekstra CLAUDE.md i undermapper (fx `src/components/CLAUDE.md`) med komponent-specifikke regler
- **Eksempler:** Inkludér et kodeeksempel på "sådan ser en god komponent ud i vores projekt"
- **Anti-patterns:** List ting AI'en IKKE skal gøre, med eksempler på hvad den skal gøre i stedet
- **Changelog-sektion:** Notér hvornår og hvorfor I ændrer reglerne — så teamet kan følge med

---

## AI-prompt-inspiration

- *"Analysér mit projekt og foreslå en CLAUDE.md baseret på de mønstre og konventioner, du finder i koden"*
- *"Her er min CLAUDE.md — review den og foreslå forbedringer baseret på best practices"*
- *"Opret en CLAUDE.md der sikrer, at al kode følger vores Tailwind + TypeScript + functional components konventioner"*
