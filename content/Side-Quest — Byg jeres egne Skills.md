# Side-Quest: Byg jeres egne Skills

**Efter denne quest kan I:**
- Forklare hvad en Skill er, og hvornår den skaber værdi i et team-workflow
- Oprette en custom Skill der automatiserer et gentaget workflow med én kommando
- Dele Skills i teamet via versionskontrol, så alle arbejder ensartet

---

En Skill er en brugerdefineret slash-kommando, der lærer jeres AI-kodningsværktøj en specialiseret adfærd. Tænk på det som en genbrugelig opskrift, I kan dele i teamet — og som gør gentagne workflows til en one-liner.

> **Note:** Skills er en Claude Code-feature, men konceptet findes i tilsvarende form i andre værktøjer (fx Cursor Rules, Windsurf Flows). Brug det, I er mest komfortable med.

---

## Hvorfor Skills?

- **Konsistens:** Hele teamet kører det samme flow med én kommando — ingen "det glemte jeg"-fejl
- **Hastighed:** Komplekse, flertrinede workflows reduceres til et enkelt slash-command
- **Deling:** Skills lever i repo'et og deles automatisk med teamet via versionskontrol
- **Kontekst:** En Skill kan indeholde detaljerede instruktioner, som I ellers skulle skrive hver gang

---

## Opgaven

Lav mindst én custom Skill til jeres hackathon-projekt. Nedenfor er idéer — men I bestemmer selv.

### Eksempler på Skills I kan bygge

#### Til udvikling
| Skill            | Beskrivelse                                                                            | Hvornår den er nyttig                                       |
| ---------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `/deploy`        | Kører jeres deployment-flow (build, test, deploy) med én kommando                      | Når I vil shippe hurtigt uden at glemme et trin             |
| `/component`     | Scaffolder en ny UI-komponent i jeres foretrukne mønster (med styling, tests, exports) | Når I opretter nye komponenter og vil følge et fast mønster |
| `/review`        | Gennemgår den seneste ændring og giver feedback på kodekvalitet                        | Før I committer — som en AI-drevet code review              |

#### Til research, kommunikation og kreativitet
| Skill          | Beskrivelse                                                                               | Hvornår den er nyttig                                                  |
| -------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `/vejr`        | Henter vejrudsigten for konferencedagen og foreslår en velkomstbesked til deltagerne      | Når I vil give deltagerne praktisk info ved check-in                   |
| `/mail`        | Genererer en udkast-mail ud fra en kort beskrivelse — med emne, modtager og brødtekst     | Når I hurtigt skal skrive opfølgninger, påmindelser eller invitationer |
| `/opsummer`    | Læser et dokument eller en URL og laver et kort resumé med de vigtigste pointer           | Når I skal sætte jer ind i noget nyt hurtigt                           |
| `/konkurrent`  | Researcher et emne eller produkt og laver en kort sammenligning med fordele/ulemper       | Når I vil vurdere alternativer eller inspireres af andres løsninger    |
| `/social-post` | Genererer et opslag til LinkedIn eller intern kanal baseret på en kort briefing           | Når I vil dele jeres hackathon-resultater eller annoncere noget        |
| `/mødenotat`   | Strukturerer rå noter fra et møde til en pæn opsummering med beslutninger og action items | Når I har haft en hurtig standup og vil fastholde hvad der blev aftalt |

### Sådan bygger I en Skill

1. **Opret mappen og filen:**
```
.claude/skills/deploy/SKILL.md
```

2. **Skriv instruktionerne i SKILL.md:**
```markdown
---
name: deploy
description: Byg og deploy projektet
---

Kør følgende trin i rækkefølge:

1. Kør `npm run build` og verificér, at bygget lykkes
2. Kør `npm test` og verificér, at alle tests består
3. Kør `npm run deploy`
4. Verificér, at deploy'et lykkedes ved at hente forsiden
5. Rapportér status til brugeren
```

3. **Brug den:**
```
> /deploy
```

### Eksempel: En Skill med et script (vejrudsigt)

En Skill kan også indeholde scripts, som Claude kører for at hente data og derefter bearbejder resultatet. Her er et komplet eksempel på `/vejr`-skillen:

**Trin 1:** Opret scriptet `.claude/skills/vejr/fetch-weather.sh`:
```bash
#!/bin/bash
# Henter vejrudsigt fra Open-Meteo (gratis, ingen API-nøgle)
# Koordinater for København: 55.68, 12.57
DATO=${1:-$(date +%Y-%m-%d)}
curl -s "https://api.open-meteo.com/v1/forecast?latitude=55.68&longitude=12.57&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=Europe/Copenhagen&start_date=$DATO&end_date=$DATO"
```

**Trin 2:** Opret `.claude/skills/vejr/SKILL.md`:
```markdown
---
name: vejr
description: Hent vejrudsigt og lav en velkomstbesked til konferencedeltagere
---

Du er en hjælpsom konferenceassistent. Gør følgende:

1. Kør scriptet `.claude/skills/vejr/fetch-weather.sh` med den ønskede dato som argument
   (brug dagens dato, hvis brugeren ikke angiver en)
2. Fortolk JSON-svaret:
   - weathercode: 0=klart, 1-3=delvist skyet, 45-48=tåge, 51-67=regn, 71-77=sne, 80-82=byger, 95-99=torden
   - temperature_2m_max / min: dagens temperaturinterval
   - precipitation_sum: nedbør i mm
3. Skriv en kort, venlig velkomstbesked på dansk til konferencedeltagerne, der inkluderer:
   - Vejret i dag i naturligt sprog (ikke tal og koder)
   - Et praktisk tip (fx "tag en paraply med" eller "perfekt vejr til frokost på terrassen")
   - Hold tonen let og imødekommende
```

**Trin 3:** Brug den:
```
> /vejr
☀️ God morgen og velkommen til konferencen! I dag bliver det op til 18°C
med let skyet vejr og ingen regn — perfekt til en gåtur i frokostpausen.

> /vejr 2026-03-15
```

![[Pasted image 20260219115001.png]]

Princippet er det samme for alle typer Skills: scriptet henter rå data, og Claude fortolker og præsenterer det. I kan bruge `curl`, `python`, `node` eller hvad I har lyst til i scriptet.

### Idéer til mere avancerede Skills

- **En Skill med parametre:** `/component LoginForm` — der tager komponentnavnet som argument og scaffolder ud fra det
- **En Skill der bruger API'et:** `/seed-data` — der opretter testdata via hackathon-API'et, så I har noget at arbejde med
- **En Skill der kombinerer værktøjer:** `/design-to-code` — der læser en Figma-fil via MCP og genererer en komponent

---

## Bonus: Del jeres Skills

- Commit jeres `.claude/skills/`-mappe til repo'et, så hele teamet får adgang
- Dokumentér kort hvad hver Skill gør — enten i SKILL.md-filen selv eller i jeres CLAUDE.md

---

## AI-prompt-inspiration

- *"Opret en Skill der kører vores test suite og rapporterer resultaterne i et læsevenligt format"*
- *"Lav en /component Skill der scaffolder en React-komponent med TypeScript, Tailwind styling og en tilhørende testfil"*
- *"Byg en /api-status Skill der henter alle konferencer fra API'et og viser check-in-status for hver"*

---

**Docs:** [Extend Claude with Skills](https://code.claude.com/docs/en/skills)
