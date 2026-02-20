# Side-Quest: Sæt Hooks op

**Efter denne quest kan I:**
- Forklare hvad Hooks er, og hvordan de adskiller sig fra manuelle AI-instruktioner
- Konfigurere mindst ét Hook der automatisk forbedrer kodekvaliteten
- Arbejde med et AI-workflow der har automatiske sikkerhedsnet

---

Hooks er automatiske triggere, der kører scripts, når jeres AI-værktøj gør bestemte ting. Tænk på det som git hooks — men for jeres AI-workflow. Hver gang Claude skriver en fil, kan den automatisk formatere den. Hver gang den kører en kommando, kan I logge det.

> **Note:** Hooks er en Claude Code-feature. Andre værktøjer har lignende koncepter (fx Cursor Rules med auto-fix, eller editor-baserede save-hooks).

---

## Hvorfor Hooks?

- **Automatisk kvalitet:** Kode bliver formateret, lintet og valideret uden at I skal huske det
- **Sikkerhedsnet:** Blokér farlige kommandoer, før de når at køre
- **Konsistens:** Alle filer følger samme stil — uanset om Claude eller et menneske har skrevet dem
- **Feedback-loop:** Kør tests automatisk efter ændringer og få øjeblikkelig feedback

---

## Opgaven

Konfigurér mindst ét Hook i jeres projekt. Start med noget simpelt og byg videre derfra.

### Hook-typer

| Hook | Hvornår den kører | Brug den til |
|------|-------------------|-------------|
| **PreToolUse** | Før Claude bruger et værktøj | Blokér farlige kommandoer, valider input |
| **PostToolUse** | Efter Claude har brugt et værktøj | Formater kode, kør linting, log ændringer |
| **Notification** | Når Claude sender en notifikation | Custom alerts, lyd, integration med andre systemer |

### Eksempel 1: Auto-format med Prettier

Hver gang Claude skriver eller redigerer en fil, kører Prettier automatisk:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write $CLAUDE_FILE_PATH"
          }
        ]
      }
    ]
  }
}
```

### Eksempel 2: Auto-lint med ESLint

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npx eslint --fix $CLAUDE_FILE_PATH"
          }
        ]
      }
    ]
  }
}
```

### Eksempel 3: Blokér farlige kommandoer

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo $CLAUDE_TOOL_INPUT | grep -qE '(rm -rf|drop table|force push)' && echo 'BLOCKED: Dangerous command detected' && exit 1 || exit 0"
          }
        ]
      }
    ]
  }
}
```

### Eksempel 4: Kør tests efter kodeændringer

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npm test -- --bail --silent 2>/dev/null || echo 'WARNING: Tests failing after edit'"
          }
        ]
      }
    ]
  }
}
```

---

## Sådan konfigurerer I Hooks

1. Åbn (eller opret) `.claude/settings.json` i jeres projekt
2. Tilføj `hooks`-sektionen med jeres ønskede triggers
3. Test det: bed Claude om at redigere en fil og verificér, at hooket kører

---

## Bonus: Avancerede Hooks

- **Kombinér flere hooks:** Kør Prettier OG ESLint efter hver ændring
- **Conditional hooks:** Kør kun hooks på bestemte filtyper (tjek `$CLAUDE_FILE_PATH` for `.ts`, `.tsx` osv.)
- **Notifikations-hook:** Spil en lyd eller send en besked, når Claude er færdig med en opgave
- **Tilgængeligheds-hook:** Kør automatisk en `axe-core`-check efter UI-ændringer (kombinér med Side-Quest: Tilgængelighed!)

---

## AI-prompt-inspiration

- *"Konfigurér et PostToolUse hook der kører Prettier og ESLint efter hver fil-ændring"*
- *"Opret et sikkerhedshook der blokerer rm -rf og force push kommandoer"*
- *"Lav et hook der automatisk kører mine tests når du ændrer kode i src/"*

---

**Docs:** [Hooks reference](https://code.claude.com/docs/en/hooks)
