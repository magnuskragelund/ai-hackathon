# Side-Quest: Byg et Custom Agent / Subagent

**Efter denne quest kan I:**
- Forklare hvad en sub-agent er, og hvornår en specialist giver bedre resultater end en generalist
- Designe og oprette en custom agent med fokuserede instruktioner og begrænsede værktøjer
- Bruge agenten aktivt i jeres hackathon-workflow — fx til code review, tests eller tilgængelighed

---

Claude Code kan delegere opgaver til specialiserede sub-agents — AI-agenter der kører i isolerede kontekster med egne instruktioner og begrænsede værktøjer. Tænk på det som at hyre en specialist til en bestemt opgave, i stedet for at gøre alt selv.

> **Note:** Custom agents er en Claude Code-feature. Konceptet med specialiserede AI-roller findes i varierende form i andre værktøjer (fx Cursor Agents, custom GPTs).

---

## Hvorfor Custom Agents?

- **Specialisering:** En agent med ét fokusområde giver bedre resultater end en generalist
- **Sikkerhed:** Begræns hvilke værktøjer en agent har adgang til — en reviewer behøver ikke kunne skrive filer
- **Genanvendelighed:** Definer agenten én gang, brug den mange gange
- **Parallellisering:** Kør flere specialiserede agenter samtidig på forskellige dele af kodebasen

---

## Opgaven

Definer mindst én custom agent til jeres hackathon-projekt og brug den aktivt.

### Eksempler på Agents I kan bygge

#### Security Reviewer
En agent der kun kan læse kode og rapporterer sikkerhedsproblemer:

```markdown
# .claude/agents/security-reviewer.md
---
name: security-reviewer
description: Reviews code for security vulnerabilities
allowed_tools: Read, Grep, Glob
---

Du er en sikkerhedsreviewer. Gennemgå den angivne kode for:

1. **Injection-angreb:** SQL injection, XSS, command injection
2. **Autentificering/autorisation:** Manglende checks, hardcodede credentials
3. **Data-eksponering:** Sensitive data i logs, manglende sanitering
4. **API-sikkerhed:** Manglende rate limiting, CORS-problemer
5. **Dependency-risici:** Kendte sårbarheder i packages

For hvert fund, rapportér:
- Fil og linjenummer
- Sværhedsgrad (kritisk/høj/middel/lav)
- Beskrivelse af problemet
- Foreslået fix

Vær grundig men undgå false positives. Fokusér på reelle risici.
```

#### Test Writer
En agent der skriver tests for eksisterende kode:

```markdown
# .claude/agents/test-writer.md
---
name: test-writer
description: Writes comprehensive tests for existing code
allowed_tools: Read, Write, Grep, Glob, Bash
---

Du er en testskriver. Når du får en fil eller komponent:

1. Læs koden grundigt og forstå alle code paths
2. Identificér edge cases og fejlscenarier
3. Skriv tests der dækker:
   - Happy path
   - Edge cases (tomme inputs, null-værdier, grænseværdier)
   - Fejlhåndtering
   - Asynkrone operationer
4. Brug projektets eksisterende test-framework og konventioner
5. Kør testene og verificér, at de består

Skriv tests der er læselige, vedligeholdelige og giver reel sikkerhed.
```

#### Accessibility Auditor
En agent der tjekker tilgængelighed:

```markdown
# .claude/agents/a11y-auditor.md
---
name: a11y-auditor
description: Audits components for WCAG 2.1 AA compliance
allowed_tools: Read, Grep, Glob
---

Du er en tilgængelighedsreviewer. Gennemgå koden for WCAG 2.1 AA-overtrædelser:

1. Semantisk HTML (korrekte elementer, heading-hierarki)
2. ARIA-attributter (labels, roller, live regions)
3. Tastaturnavigation (fokushåndtering, tab-rækkefølge)
4. Farvekontrast (4.5:1 for tekst, 3:1 for store elementer)
5. Formular-tilgængelighed (labels, fejlbeskeder)

Rapportér hvert fund med fil, linje, WCAG-kriterium og foreslået fix.
```

---

## Sådan opretter I en Agent

1. **Opret mappen:**
```bash
mkdir -p .claude/agents
```

2. **Opret agent-filen** med YAML frontmatter og instruktioner (se eksemplerne ovenfor)

3. **Brug agenten:**
```
> Kør security-reviewer agenten på src/api/
> Brug test-writer til at skrive tests for CheckIn-komponenten
```

---

## Bonus: Avancerede Agent-mønstre

- **Agent-pipeline:** Kør security-reviewer → fixer → test-writer i rækkefølge
- **Parallel agents:** Kør a11y-auditor og security-reviewer samtidig på hele kodebasen
- **Specialiseret refactorer:** En agent der kun refaktorerer — med strenge regler om at bevare funktionalitet
- **API-tester:** En agent der genererer og kører integrationstests mod jeres hackathon-API

---

## AI-prompt-inspiration

- *"Opret en custom agent der reviewer mine React-komponenter for performance-problemer"*
- *"Byg en test-writer agent der følger vores projekts testkonventioner og kør den på alle komponenter i src/components/"*
- *"Lav en dokumentationsagent der genererer JSDoc-kommentarer for alle eksporterede funktioner"*

---

**Docs:** [Create custom subagents](https://code.claude.com/docs/en/sub-agents)
