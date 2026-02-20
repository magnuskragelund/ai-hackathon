# Side-Quest: Wildcard — Kombinér det hele

Den ultimative side-quest: kombinér flere af de andre side-quests til et sammenhængende, automatiseret workflow. Det handler ikke om at gøre én ting godt — men om at få flere ting til at spille sammen.

---

## Hvorfor kombinere?

- **Synergi:** Hver feature bliver stærkere, når den er forbundet med de andre
- **Professionelt setup:** Et komplet AI-drevet udviklingsmiljø, som I kan tage med hjem efter hackathon
- **Imponerende demo:** Intet slår en live-demo, hvor alt hænger sammen fra design til deploy

---

## Opgaven

Kombinér mindst 3 af de andre side-quests til et sammenhængende workflow. Her er nogle idéer — men I bestemmer selv.

### Eksempel-pipelines

#### Design → Kode → Test → Deploy
```
Figma MCP (læs design)
  → Custom Skill /component (scaffold komponent)
  → Hook: auto-format med Prettier
  → Subagent: test-writer (skriv tests)
  → Headless: kør tests i CI
  → Skill /deploy (deploy til produktion)
```

#### Security-First Pipeline
```
CLAUDE.md (definér sikkerhedsregler)
  → Kode som normalt
  → Hook: ESLint security plugin efter hver ændring
  → Subagent: security-reviewer (fuld audit)
  → Subagent: a11y-auditor (tilgængelighedscheck)
  → Headless: generér sikkerhedsrapport
```

#### Visuelt Feedback-Loop
```
Papirskitse (tag billede)
  → Claude: implementér som kode
  → Screenshot af resultatet
  → Claude: sammenlign med skitse og justér
  → Subagent: a11y-auditor (tjek tilgængelighed)
  → Hook: auto-format
  → Gentag til det er pixel-perfekt
```

#### Full-Stack Automatisering
```
MCP: database (hent skema)
  → Claude: generér API-typer fra skema
  → Custom Skill /api-endpoint (scaffold nyt endpoint)
  → Subagent: test-writer (integrationstests)
  → MCP: GitHub (opret PR)
  → Headless: code review af PR
```

---

## Bedømmelseskriterier

Det handler ikke om at lave den længste pipeline — men om at vise, at delene spiller sammen på en meningsfuld måde:

| Kriterium | Beskrivelse |
|-----------|-------------|
| **Integration** | Hvor godt hænger delene sammen? Flyder data naturligt mellem dem? |
| **Automatisering** | Hvor meget sker automatisk vs. manuelt? |
| **Praktisk værdi** | Er det noget, I faktisk ville bruge i et rigtigt projekt? |
| **Kreativitet** | Har I fundet en uventet eller smart kombination? |
| **Demo** | Kan I vise det live og forklare flowet? |

---

## Tips til en god kombination

- **Start simpelt:** Få 2 ting til at virke sammen, før I tilføjer den tredje
- **Tænk i flows:** Hvad er input? Hvad er output? Hvad sker der imellem?
- **Dokumentér i CLAUDE.md:** Beskriv jeres setup, så Claude (og teamet) forstår det
- **Test det end-to-end:** Kør hele flowet fra start til slut mindst én gang

---

## AI-prompt-inspiration

- *"Hjælp mig med at designe et workflow der forbinder Figma MCP, en /component Skill, auto-format hooks og en test-writer agent"*
- *"Opret en CLAUDE.md der beskriver hele vores automatiserede pipeline og sørg for, at alle dele er konfigureret korrekt"*
- *"Kør hele pipelinen headless: læs Figma-designet, generér komponenten, kør tests, og opret en PR — alt automatisk"*
