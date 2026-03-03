# Claude Code i Docker — Opsætningsguide til IDAs Hackathon 💻⚡

Denne guide hjælper dig med at køre Claude Code i en Docker-container til IDAs hackathon.

> **Kort overblik:** Du skal 1) anskaffe en Claude Pro-licens, 2) installere Docker Desktop (+ WSL hvis du er på Windows), 3) installere Claude Code, og 4) starte Claude Code i en Docker-sandbox.

---

## Hvorfor Docker?

Docker er et værktøj der kører programmer i en isoleret container. Vi bruger det til at køre Claude Code i en sandbox, så vi frit kan eksperimentere uden at give Claude adgang til alt på vores lokale maskiner.

---

## Licens til Claude Code

Inden du går i gang — uanset om du er på Windows eller Mac — skal du have en **betalt Pro-licens** til Claude Code. Den udførende part i gruppen anskaffer sig en individuel, månedligt betalt licens.

### Sådan får du en IDA-betalt licens (må kun bruges i IDA-regi onsdag d. 4/3):

1. Find din private e-mail-konto frem — eller opret en til formålet (fx en frisk Gmail- eller Proton-konto)
2. Naviger til: [claude.com/pricing](https://claude.com/pricing)
3. Klik **"Try Claude"** under Pro-licensen
4. Registrer dig med mailen fra trin 1
5. Vælg månedlig betaling undervejs
6. Betal for licensen på én af følgende måder:
   - **Egen lomme:** Læg de 20 $ ud og få dem refunderet via Acubiz
   - **Lån kort:** Brug Marcs, Jespers eller Magnus' Mastercard og send efterfølgende fakturaen/kvitteringen til dem
7. Færdiggør registreringen

> ⚠️ **OBS!** Licensen må kun benyttes i IDA-regi på **d. 4. marts 2026**.
> Abonnementet skal opsiges efterfølgende (eller overtages af dig selv til privat brug).

---

## Windows

### Trin 1: Installér WSL

Åbn PowerShell som administrator og kør:

```powershell
wsl --install
```

Genstart din computer når installationen er færdig.

### Trin 2: Installér Docker Desktop

1. Download [Docker Desktop 4.55](https://docs.docker.com/desktop/release-notes/#4570) (Windows checksum)
2. Kør installeren og følg guiden
3. Sørg for at **"Use WSL 2 based engine"** er slået til under *Settings → General*
4. Genstart hvis Docker beder om det

Verificér at Docker kører:

```powershell
docker --version
```

### Trin 3: Installér Claude Code

Åbn PowerShell med din alm. bruger og kør:

```powershell
irm https://claude.ai/install.ps1 | iex
```

### Trin 4: Start Claude Code i Docker

Kør følgende i PowerShell:

```powershell
docker sandbox run claude
```

### Trin 5: Log ind

Claude Code starter automatisk og beder dig logge ind:

1. Du får vist et link og en kode
2. Åbn linket i din browser
3. Indsæt koden og log ind med din Anthropic-konto

---

## Mac

### Trin 1: Installér Docker Desktop

1. Download [Docker Desktop 4.55](https://docs.docker.com/desktop/release-notes/#4570)
2. Kør installeren og følg guiden
3. Genstart hvis Docker beder om det

Verificér at Docker kører:

```bash
docker --version
```

### Trin 2: Installér Claude Code

Åbn Terminal med din alm. bruger og kør:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### Trin 3: Start Claude Code i Docker

Kør følgende i Terminal:

```bash
docker sandbox run claude
```

### Trin 4: Log ind

Claude Code starter automatisk og beder dig logge ind:

1. Du får vist et link og en kode
2. Åbn linket i din browser
3. Indsæt koden og log ind med din Anthropic-konto

---

## Ved udløb af tokens

Der er en grænse på, hvor mange tokens der kan bruges i abonnementet (altså hvor meget arbejde Claude vil lave). Vi regner med at Pro-licensen er tilstrækkelig — tokenpuljen bliver jævnligt fyldt op i løbet af en dag.

Skulle det vise sig **ikke** at være nok, skal gruppens anden makker anskaffe sig en licens ved at følge trinene ovenfor. Man forbinder så til Claude Code gennem den makkers licens og fortsætter arbejdet med en frisk pulje tokens.

---

## Tilstande i Claude Code

Tryk **Shift+Tab** for at skifte mellem tilstande:

- **Accept Edits** — Claude redigerer filer uden at spørge, men beder stadig om lov til at køre kommandoer.
- **Plan Mode** — Claude analyserer og laver en plan, men ændrer ingenting. God til at tænke højt sammen med Claude.
- **Bypass Permissions** — Claude kører alt uden at spørge. Brug kun dette i en isoleret container (som vores Docker-setup).
