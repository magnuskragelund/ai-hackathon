# Side-Quest: Forbind til en MCP-server

**Efter denne quest kan I:**
- Forklare hvad MCP er, og hvornår det skaber værdi i et AI-workflow
- Forbinde mindst én ekstern tjeneste til jeres AI-kodningsværktøj
- Bruge live data og live designs direkte — uden manuel copy-paste

---

## Hvad er en MCP-server — i praksis?

Forestil jer en AI-assistent, der kun kan det, I fortæller den i chatten. Den kan skrive kode, svare på spørgsmål og komme med forslag — men den kan ikke selv *gøre* noget derude i verden. Den kan ikke slå noget op i jeres database, læse jeres Figma-design eller oprette et issue på GitHub. Den sidder bag glas.

En MCP-server er det, der bryder glasset.

Når I forbinder en MCP-server, giver I jeres AI-værktøj **hænder**. Den kan nu selv række ud og interagere med et eksternt system — ikke bare snakke om det. Konkret betyder det:

- **Uden MCP:** *"Her er et screenshot af vores Figma-design — kan du bygge det?"*
- **Med MCP:** *"Kig selv i vores Figma-fil og byg check-in-skærmen"* — og Claude åbner Figma, læser designet og bygger det.

- **Uden MCP:** *"Her er 50 rækker fra databasen, som jeg har kopieret ind — hvad ser du?"*
- **Med MCP:** *"Hvor mange gæster er tjekket ind?"* — og Claude skriver en query, kører den og giver jer svaret.

- **Uden MCP:** *"Kan du skrive en issue-tekst, som jeg så kan oprette manuelt?"*
- **Med MCP:** *"Opret et issue for den bug, vi fandt"* — og Claude gør det selv.

Tænk på det som forskellen mellem at beskrive en opgave til nogen over telefon vs. at give dem adgang til systemet, så de kan gøre det selv. MCP-servere er de adgange.

> **Note:** MCP er en åben standard, der understøttes af Claude Code, Cursor, Windsurf og flere. Konceptet er det samme uanset værktøj: giv jeres AI adgang til eksterne systemer, så den kan handle — ikke bare rådgive.

---

## Hvorfor er det en game-changer?

- **Fra assistent til aktør:** AI'en går fra at *foreslå* ting til at *gøre* dem
- **Friskere data:** AI'en arbejder med live data i stedet for det, I husker at copy-paste ind
- **Færre fejl:** Ingen risiko for at I kopierer de forkerte data ind — AI'en henter selv det rigtige
- **Stærkere workflows:** Kombinér flere MCP-servere og lad AI'en arbejde på tværs af systemer i ét flow

---

## Opgaven

Forbind mindst én MCP-server til jeres AI-kodningsværktøj og brug den aktivt i jeres hackathon-workflow.

### MCP-servere I kan prøve

#### Figma MCP
Lad Claude læse jeres designfiler direkte og implementere UI'et ud fra Figma-specs — ingen copy-paste af designs, ingen manuelle eksporter.

Der er **to måder** at forbinde Figma som MCP:

---

##### Figma Desktop MCP 

Figma Desktop-appen har et indbygget MCP-server, der eksponerer det aktive dokument lokalt. Denne metode kræver **ingen API-nøgle**, men kræver at Figma Desktop-appen er åben og at I har aktiveret funktionen.

**Trin 1 — Slå MCP til i Figma Desktop**

1. Åbn **Figma Desktop**-appen (ikke browser-versionen)
2. Klik på **Figma-logoet** øverst til venstre (hamburgermenu)
3. Vælg **Preferences**
4. Under **"Developer"**-sektionen: slå **"Enable Dev Mode MCP Server"** til
5. Figma starter nu en lokal server på **port 3845**


> **Obs:** Funktionen hedder lidt forskelligt afhængigt af Figma-version — kig efter "MCP", "Dev Mode" eller "Developer tools" i Preferences. Eller prøv **Cmd+K**, søg efter "mcp"

![[Pasted image 20260219111000.png]]

**Trin 2 — Forbind Claude Code til den lokale server**

```bash
claude mcp add --transport sse figma-desktop http://localhost:3845/sse
```

**Trin 3 — Hold Figma åbent**

Serveren kører kun, mens Figma Desktop er åben og MCP er aktiveret. Åbn det dokument I vil arbejde med, før I beder Claude om at læse det.

![[Pasted image 20260219110538.png]]
*Obs: Claude.ai kommer også med en indbygge Figma-forbindelse, som du vil se i listen. Kig efter den, som hedder "figma-desktop"*

---

Prøv derefter:
> *"Se dette Figma-frame og byg komponenten i React med Tailwind"*
> *"Find alle farver og typografi fra dette design og generér en Tailwind-config"*
> *"Hvilke komponenter er der i dette Figma-dokument?"*

#### Fetch MCP (generel HTTP)
Giv Claude adgang til at hente data fra vilkårlige URL'er — fx jeres hackathon-API eller en ekstern tjeneste.

Uden Fetch MCP skal I selv kopiere API-svar ind i chatten. Med Fetch MCP kan Claude kalde API'et direkte og arbejde med det rå svar.

```bash
claude mcp add --transport stdio fetch -- npx -y @anthropic/fetch-mcp
```

Prøv derefter:
> *"Hent alle konferencer fra API'et og vis mig en oversigt"*
> *"Kald dette endpoint og fortæl mig hvilke felter der returneres: [URL]"*

#### Tavily MCP (websøgning)
Giv Claude adgang til at søge på internettet i realtid — nyttigt når I skal slå dokumentation op, researche teknologier eller hente aktuel information undervejs i udviklingen.

Uden Tavily MCP er Claude begrænset til sin træningsdata og det I kopierer ind. Med Tavily kan Claude selv finde opdateret dokumentation, release notes og best practices — direkte i jeres arbejdsflow.

```bash
claude mcp add --transport sse tavily 'https://mcp.tavily.com/mcp/?tavilyApiKey=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'
```

> **Note:** API-nøglen ovenfor er delt og må bruges af alle deltagere i dag.

Prøv derefter:
> *"Søg efter de nyeste best practices for React Server Components"*
> *"Find dokumentationen for Supabase realtime subscriptions og implementér det"*
> *"Hvad er den nyeste version af shadcn/ui og hvad er nyt?"*

---

## Sådan kommer I i gang

1. **Vælg en MCP-server** fra listen ovenfor (eller find flere på [MCP-server-listen](https://github.com/modelcontextprotocol/servers))
2. **Tilføj den** med `claude mcp add`-kommandoen
3. **Verificér** at den virker: spørg Claude om at bruge den nye datakilde
4. **Integrér** den i jeres workflow — brug den til at hente data, validere eller generere kode

## AI-prompt-inspiration

- *"Brug Figma MCP til at læse designet for check-in-skærmen og implementér det"*
- *"Hent alle konferencer fra API'et og vis mig en oversigt over check-ins"*

---

**Docs:** [Connect Claude Code to tools via MCP](https://code.claude.com/docs/en/mcp)
