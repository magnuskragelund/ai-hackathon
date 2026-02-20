# Side-Quest: Kør Claude Code Headless

**Efter denne quest kan I:**
- Forstå forskellen på interaktiv og headless brug af Claude Code — og hvornår automatisering giver mest værdi
- Køre mindst én AI-drevet opgave automatisk fra kommandolinjen
- Se potentialet i at integrere AI som et trin i scripts og build-pipelines

---

Claude Code kan køres non-interaktivt fra kommandolinjen — uden at I sidder og chatter. Det åbner for automatisering: CI/CD-pipelines, batch-processing, automatiske code reviews og scripted workflows.

> **Note:** Headless mode er en Claude Code-feature. Andre værktøjer har lignende CLI-modes (fx Cursor CLI, GitHub Copilot CLI).

---

## Hvorfor Headless?

- **Automatisering:** Kør AI-drevne opgaver som en del af jeres build-pipeline eller scripts
- **Batch-processing:** Behandl mange filer på én gang uden at sidde og chatte
- **Reproducerbarhed:** Samme prompt giver samme type output — perfekt til gentagne opgaver
- **Integration:** Brug Claude som en del af et større toolchain med andre kommandolinjeværktøjer

---

## Opgaven

Brug Claude Code headless til at automatisere mindst én opgave i jeres hackathon-projekt.

### Grundlæggende brug

![[Pasted image 20260219115329.png]]
```bash
# Simpel prompt — Claude svarer og afslutter
claude -p "Forklar hvad denne funktion gør" --allowedTools "Read,Grep"

# Læs fra stdin
cat src/App.tsx | claude -p "Review denne fil for sikkerhedsproblemer"

# Struktureret JSON-output
claude -p "List alle TODO-kommentarer i projektet" --output-format json
```

### Eksempler på Headless-workflows

#### 1. Automatisk Code Review

```bash
# Review alle ændrede filer
git diff --name-only | xargs -I {} claude -p "Review filen {} for bugs, sikkerhedsproblemer og kodekvalitet. Giv kort, konkret feedback." --allowedTools "Read,Grep"
```

#### 2. Generér dokumentation

```bash
# Generér API-dokumentation for alle endpoints
claude -p "Læs alle filer i src/api/ og generér en komplet API-dokumentation i Markdown-format" --allowedTools "Read,Grep,Glob,Write"
```

#### 3. Batch-tilføj TypeScript-typer

```bash
# Tilføj typer til alle .js-filer
for file in src/**/*.js; do
  claude -p "Konvertér $file til TypeScript med korrekte typer" --allowedTools "Read,Write"
done
```

#### 4. Kvalitetstjek i CI/CD

```bash
# Kør som et trin i jeres pipeline
claude -p "Gennemgå alle ændringer i denne PR for potentielle problemer. Fokusér på sikkerhed, performance og tilgængelighed. Output som JSON med felterne: severity, file, line, message" \
  --output-format json \
  --allowedTools "Read,Grep,Glob"
```

#### 5. Test-generering

```bash
# Generér tests for en specifik komponent
claude -p "Skriv unit tests for src/components/CheckIn.tsx. Brug Vitest og React Testing Library. Test alle edge cases." \
  --allowedTools "Read,Write,Grep,Glob"
```

---

## Nyttige flag

| Flag | Beskrivelse |
|------|-------------|
| `-p "prompt"` | Kør i headless mode med denne prompt |
| `--output-format json` | Returnér struktureret JSON-output |
| `--allowedTools "Read,Grep"` | Begræns hvilke værktøjer Claude må bruge |
| `--max-turns 10` | Begræns antal ture (for at undgå uendelige loops) |
| `--model sonnet` | Vælg model (sonnet er hurtigere og billigere) |

---

## Bonus: Kombiner med shell-scripting

Headless Claude bliver virkelig kraftfuldt, når I kombinerer det med standard shell-værktøjer:

```bash
# Find alle filer med TODO-kommentarer og lad Claude prioritere dem
grep -rl "TODO" src/ | claude -p "Læs disse filer, find alle TODOs, og prioritér dem efter vigtighed. Output som en sorteret liste."

# Generér en daglig statusrapport
claude -p "Kig på git log fra de seneste 24 timer og skriv en kort statusrapport: hvad er ændret, hvad er nyt, hvad kræver opmærksomhed?" --allowedTools "Bash,Read"
```

---

## AI-prompt-inspiration

- *"Skriv et shell-script der bruger Claude headless til at reviewe alle ændrede filer før commit"*
- *"Lav en CI-pipeline step der bruger Claude til at tjekke for sikkerhedsproblemer i PRs"*
- *"Byg et script der genererer en changelog baseret på git commits fra den seneste uge"*

---

**Docs:** [Run Claude Code programmatically](https://code.claude.com/docs/en/headless)
