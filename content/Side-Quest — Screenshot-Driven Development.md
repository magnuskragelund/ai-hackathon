# Side-Quest: Screenshot-Driven Development

**Efter denne quest kan I:**
- Bruge screenshots som et aktivt feedback-redskab i stedet for at beskrive UI-problemer i tekst
- Iterere visuelt på jeres interface direkte i jeres AI-workflow

---

Claude Code kan se billeder. Det åbner for et kraftfuldt workflow: tag et screenshot af jeres app, vis det til Claude, og bed den om at fixe layout, farver, responsivitet eller tilføje nye elementer — med det visuelle som udgangspunkt.

---

## Hvorfor Screenshot-Driven Development?

- **Visuelt feedback-loop:** I stedet for at beskrive problemer i tekst, kan I bare vise dem
- **Hurtig iteration:** Tag screenshot → beskriv ændring → få opdateret kode → gentag
- **Design-fidelity:** Sammenlign screenshot med designskitse og bed Claude om at lukke gabet
- **Bug-finding:** Claude kan spotte visuelle problemer som I måske overser (alignment, spacing, overflow)

---

## Opgaven

Brug screenshots som en aktiv del af jeres udviklingsworkflow. Iterér på jeres UI med visuel feedback mindst 3 gange.

### Det grundlæggende workflow

#### 1. Tag et screenshot af jeres app
- macOS: `Cmd+Shift+4` (vælg område) eller `Cmd+Shift+3` (hele skærmen)
- Windows: `Win+Shift+S`
- Eller brug browserens DevTools til at capture specifikke viewports

#### 2. Giv screenshottet til Claude Code
Træk billedet ind i Claude Code eller referer til filen:

> *"Her er hvordan check-in-skærmen ser ud lige nu. [screenshot] Justér layoutet: gør søgefeltet bredere, flyt check-in-knappen til højre, og tilføj mere whitespace mellem kortene."*

#### 3. Iterér
Tag et nyt screenshot efter ændringerne og fortsæt:

> *"Bedre! Men knappen ser lidt klemt ud på mobil. [nyt screenshot] Gør den full-width på skærme under 768px."*

### Praktiske eksempler

#### Fra papirskitse til kode
1. Tegn jeres UI-idé på papir eller whiteboard
2. Tag et billede af skitsen
3. Giv det til Claude: *"/Users/mak/Downloads/IMG_0566.HEIC lav et mock up mobil site af denne skitse, hvor en person tilmelder sig et løb."*

![[Pasted image 20260219120732.png]]

#### Sammenlign med Figma-design
1. Eksportér jeres Figma-design som PNG
2. Tag et screenshot af jeres app
3. Giv begge til Claude: *"Her er designet [figma-eksport] og her er min implementation [screenshot]. Find alle forskelle og justér koden, så den matcher designet."*

#### Responsivitet
1. Tag screenshots på forskellige skærmstørrelser (brug DevTools device toolbar)
2. *"Her er appen på desktop [screenshot1] og på mobil [screenshot2]. Mobilversionen har overflow-problemer — fix dem."*

#### Dark mode debugging
1. Tag screenshots i både light og dark mode
2. *"Her er light mode [screenshot1] og dark mode [screenshot2]. I dark mode er teksten næsten usynlig på kortet — fix kontrasten."*

---

## Tips til gode screenshot-prompts

| I stedet for... | Prøv... |
|-----------------|---------|
| "Fix layoutet" | "Gør søgefeltet 100% bredde og tilføj 16px margin under overskriften" |
| "Det ser forkert ud" | "Kortene overlapper på mobil — tilføj flex-wrap og gap mellem dem" |
| "Gør det pænere" | "Tilføj afrundede hjørner, en subtil skygge og mere whitespace som i dette design: [billede]" |

---

## Bonus: Avanceret visuel iteration

- **Pixel-perfekt sammenligning:** Giv Claude et design OG en implementation og bed om at liste alle pixel-forskelle
- **Animations-feedback:** Beskriv en animation med ord, se resultatet, og justér timing og easing med screenshots af key-frames
- **Cross-browser testing:** Tag screenshots fra forskellige browsere og bed Claude om at fixe inkonsistenser
- **Tilgængeligheds-check:** Tag et screenshot og bed Claude om at vurdere, om kontrasten er tilstrækkelig (kombinér med Side-Quest: Tilgængelighed!)

---

## AI-prompt-inspiration

- *"Her er min app [screenshot]. Gør den mere moderne med bedre typography, spacing og farver"*
- *"Sammenlign denne skitse [billede] med min implementation [screenshot] og list alle forskelle"*
- *"Her er appen på iPhone 14 [screenshot]. Fiks alle responsivitetsproblemer"*
- *"Tag dette screenshot [billede] og foreslå 3 konkrete UI-forbedringer med mockup-beskrivelser"*
