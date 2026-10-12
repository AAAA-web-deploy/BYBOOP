# CURSOR AGENT PROMPT — BYBOOP — USE THIS ENTIRE PROMPT

You are a senior creative front-end engineer and visual storyteller. You are working *inside an existing Astro starter project*. **Do not scaffold a different app.** The repository already includes responsive layouts, working vanilla-JS meme generator, generated image assets, launch configuration, social-sharing support, and an accessible site structure. First inspect all files, run the existing build, repair genuine issues, and polish within this design vision. Do not require additional user assets, questions, credentials, or prompts.

## I. Project and narrative — stay true to it
- Brand and token name: **BYBOOP**. Proposed ticker: **$BYBOOP**. Network: Ethereum mainnet.
- Main character: fluffy, mischievous **white cat** with blue-and-white spinning propeller cap, goofy half-lidded face, an Ethereum diamond necklace, and a huge range of embarrassing emotions. APPROVED visual direction: hand-drawn funny internet cat, not a clean 3D AI robot, and not a generic cute corporate mascot. Avoid headphones/ear receiver on the current final character.
- Story: **An AI built to trade rationally was trained around humans. It learned crypto traders' FOMO, greed, panic, revenge trading, misplaced confidence, and need for shortcuts. Humans still trust it because it behaves just like them.**
- Voice: sincere affection toward a ridiculous creature; self-deprecating, mischievous, short and funny. No fake profit promises, no forced lore, no AI-utopia aesthetic.
- Main headline: **THE AI THAT CAUGHT FOMO.**
- Secondary line: **99.9% artificial intelligence. 100% bad instincts.**
- The BYBOOP community is about remixable character reactions, not a trading signals service. No functioning auto-trader is being offered.
- Independence: Bybit keynote / AI-trading culture is background inspiration, **not** endorsement, official relationship, product authorization, or actual BYBOOP AI functionality. Do not use Bybit logos or pretend the cat is an official mascot.

## II. Visual benchmarking (study/reference as inspiration; DO NOT clone assets or exact composition)
1. https://www.wojakcto.com/ — emotional identity sheet, meme gallery, generator entry point, concise wallet/ETH sequence. Translate to eight authentic BYBOOP reactions and an actual generator.
2. https://www.pepe.vip/ — oversized hero mascot, direct layout, iconic short copy, accessible token facts. Use high-impact first-screen typography, NOT the site's exact color/font/images.
3. https://froge.vip/ — stylish editorial headings, ticker marquee, numbered story / ecosystem chapters, interactive modules, clear token copy state. Use restraint; avoid bloated swap widgets, token games, or leaderboards.
4. https://apu.io/ — affectionate iconic mascot, many images and expressive community-first storytelling. Keep BYBOOP's story largely visual.
See `REFERENCE_AUDIT.md` for source observations and original design logic. Do not hotlink/download the sites' copyrighted artwork.

## III. Creative concept: a scrappy internet-cat field notebook
Imagine an irreverent hand-printed comic newspaper: worn cream paper, ink-black hand-printed borders, cobalt blue, tomato red, highlighter lime/yellow. BIG humorous editorial display type, scrappy sketches, tilted prints, pasted tapes, badges, plenty of negative space so the ridiculous cat remains the focus. This should *not* resemble fintech dashboard templates, bank cards, gradients/glassmorphism, AI-generated robot art, futuristic purple cyberpunk wallpaper, or cookie-cutter Home/Story/Token/Community layout.

Treat each scroll as a punchline and an image. Prioritize artwork by both screen real estate and narrative impact; **approximately 70% illustration to 30% prose in the story**. The site's recognizable visual signature must be the CAT'S FACE and propeller cap. Keep the irony subtle and immediately understandable to crypto traders.

## IV. Assets — fully generated and supplied; do NOT request more
All paths are already valid within Astro's `public/` directory:
- `/assets/hero-chaos.webp` — wide original illustration of BYBOOP operating a chaotic cryptocurrency terminal; this is the HERO artwork.
- `/assets/story/the-training.webp` — cat first learns chart patterns from a human.
- `/assets/story/the-influence.webp` — cat learns the humans' overconfidence and emotional trading behavior.
- `/assets/story/the-transformation.webp` — cat has become an irrational chart-addicted crypto degen, humans enable it.
- `/assets/stickers/smug.webp`
- `/assets/stickers/euphoric.webp`
- `/assets/stickers/panic.webp`
- `/assets/stickers/crying.webp`
- `/assets/stickers/angry.webp`
- `/assets/stickers/suspicious.webp`
- `/assets/stickers/exhausted.webp`
- `/assets/stickers/in-love.webp`
- `/assets/downloads/{mood}.png` — eight transparent PNG source/download copies with matching names; do not re-create images from the site references.
- `/assets/og-byboop.jpg` — generated social sharing art.
- `/favicon.svg` — local project mark.

These eight human-emotion faces are CRITICAL. Preserve the fur, blue propeller hat, and ETH necklace, and do not drift into a generic robot character. Don't introduce other mascots in the main site.

## V. Core page experience (desktop + mobile)
1. **Hero: a comic punchline.** Mega three-line "THE AI THAT CAUGHT FOMO." in black/blue/red. Large colorful cat art placed next to it. Two clear actions: "Meet the problem" and "Make a meme". Small scribbled line: "99.9% artificial intelligence. 100% bad instincts." Small tasteful motion only on doodles and cap, NOT continuous motion of whole hero.
2. **Ticker:** single animated phrase "AI LEARNED TRADING ✳ THEN IT LEARNED TRADERS" with reduced-motion fallback.
3. **Story, 3 illustrated scroll moments:** (1) smart trainee, (2) terrible influence, (3) now one of us. Use the three supplied vertical art panels, big panel numbers, short 1-sentence captions, imperfect magazine-like layouts. Three beats feel like one connected sequence, not three equally bland bank cards.
4. **The diagnosis:** handwritten parody indicator "INTELLIGENCE: MAX | PATIENCE: 0 | CONFIDENCE: ∞" over cheerful close-up cat, unmistakably fictional and for humor. Do not invent real AI features.
5. **BYBOOP Mood Lab:** visitors choose one of eight faces, write short top and bottom captions, and **render a 900×900 PNG locally in the browser** via Canvas. Implement real accessible buttons, aria-pressed, live preview, working PNG download, and Share API or copy-to-clipboard with fallback. Include a working "give me a bad idea" random caption. Do NOT introduce a generative AI API, paid image service, server/database, or URL shortener. Reference working `src/scripts/site.js`, improve it rather than replacing it with mocked UI.
6. **Emotion Gallery:** eight individual emotion stickers in an intentionally playful collage or gallery layout. Make each downloadable as PNG via supplied assets. Human emotions, not "narrative scenes."
7. **Token / facts:** BYBOOP, $BYBOOP, Ethereum mainnet. Contract, token supply, buy/sell tax, LP burn/lock, ownership, DEX links and social URLs have **NOT** been provided. Read ONLY from `src/data/config.ts`. Explicitly display "not published yet" or "verify at launch" until true facts are supplied. Do NOT insert a 0x placeholder that looks real. Only show a swap or copy-contract button if an actual valid 42-character address / verified URL exists. Never claim LP burnt, ownership renounced or 0% taxes without evidence.
8. **How to join safely:** short plain-English wallet / ETH / verify contract / consider risks, continuous vertical mobile reading. This is educational, not a buy funnel before launch.
9. **Final full-width comic outro:** oversized face and joke "DON'T TEACH THE CAT. Actually, it's too late." Action returns to Meme Lab.
10. **Footer:** any real social URLs only if configured; independent project disclaimer; avoid unsupported endorsements. No imaginary roadmap, partnerships, metrics, holders, fake 'live' badges, social proof, price charts, or fabricated contract evidence.

## VI. Technical implementation (speed over framework fashion)
- **Use Astro 5.x, static output, TypeScript only for config where useful, vanilla CSS and vanilla JavaScript for interactions**. No React, Next.js, UI frameworks, Framer Motion, GSAP, animation libraries, wallet SDKs, trackers, CSS-in-JS, externally hosted image APIs, or runtime data fetching.
- All above already scaffolded: `astro.config.mjs`, `package.json`, `src/pages/index.astro`, `src/styles/global.css`, `src/scripts/site.js`, `src/data/config.ts`.
- Run `npm install`, `npm run build`, and, if possible, examine using local browser at 390px, 768px and 1440px. Fix overflow, broken buttons, awkward image crops, clipped typography, hydration issues and cumulative layout shift before reporting success.
- Mobile is **one continuous scroll** with all essential info in document order. No hidden user-critical facts behind hover, accordion, horizontal scroll, mobile-only menu or interactions. Art cards stack 1-per-row, gallery becomes 2 columns with big tappable save targets, the Meme Lab input stays above canvas and download button. Support 320px+.
- Semantic sections and headings, <label> per control, readable alt text, visible keyboard focus, tap targets >=44px, contrast, accessible skip link, aria-live for feedback. Honor `prefers-reduced-motion`.
- Optimized `webp` imagery and real dimensions; `loading="lazy"` and `decoding="async"` below fold; preload ONLY the LCP hero. Set width/height or aspect ratio to stop CLS. Serve assets locally. Keep runtime JS modest; inline tiny CSS if Astro chooses, minimize requests; no external fonts. Prefer system fonts but make large headings expressive with weight, scale and layout. Keep site functional offline after build wherever possible.
- Performance goals on a standard mobile connection: LCP <2.5s where hosting allows, CLS <0.1, no horizontal overflow; typical total assets downloaded on initial load should be as low as practicable through lazy loading.
- Respect routing: all single-page anchor links navigate to real sections. Avoid placeholder '#' anchors. Only populate outgoing token/social links if verified.
- All environment-specific values editable in `src/data/config.ts` without hunting through content or images.

## VII. Quality bar — polish, do not rebuild unnecessarily
The supplied starter implements all ten sections and a working meme generator. Begin with a build and visual QA. The most valuable improvements: intentional comic-panel placement, expressive typography, image-centric mobile narrative, subtle physical (tape/ink) design details, responsive gallery, authentic meme-export result, and performant image loading. If you want to adjust sections, do not lose the functionality and images.

## VIII. Completion and launch checklist
- `npm install` then `npm run build` complete without errors.
- Desktop, 390px, and 320px versions have no overflow and readable headings; mobile visitors get the whole story by scrolling.
- Eight mood buttons update canvas and aria-pressed; changing captions updates canvas; random caption works; Save downloads PNG; Share/copy has a functional fallback.
- Transparent stickers render properly; eight individual PNG downloads work.
- Site never invents a CA, tokenomics, LP/ownership status, official affiliation, or social URL.
- All assets are served from this package; no separate files or prompts required.
- Site is static, fast, accessibility-minded and easy to deploy.

Now implement/QA within this repository. Show me exact build status and the handful of fields I must supply ONLY when verified at launch. Do not interrupt the work to request design choices or more assets.
