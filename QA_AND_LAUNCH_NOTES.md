# BYBOOP delivery QA / launch notes

## Verified during package creation
- Approved eight BYBOOP emotion image assets selected and individually optimized to transparent WebP and downloadable PNG.
- Three illustrated story scenes, original hero mural, original banner (1500 × 500), mascot token icon (512 × 512), and OG share image provided.
- Files have been checked as readable by Pillow.
- Browser-interaction JavaScript passed `node --check src/scripts/site.js`.
- Referenced local static image paths verified against provided `/public/assets` folder.
- No fake contract address, tokenomics, LP burn or renounce claim, external community link, or exchange listing is populated.

## What could NOT be verified in this environment
The package's Astro dependencies could not be downloaded during QA (install stalled), so a complete `npm run build` and actual browser screenshots were **not** obtained. Cursor should run `npm install` and `npm run build` as its first steps, then perform viewport verification at 320, 390, 768, and 1440 px. Please do not interpret this as a claimed completed build.

## Pending actual launch facts
- Verified 42-character ERC-20 contract address
- Total supply and taxes (only after validated)
- Liquidity status (only after validated)
- Contract ownership status (only after validated)
- Official X and Telegram URLs
- Verified Etherscan, DEXScreener and Uniswap URLs
- Any third-party rights / trademark clearance for BYBOOP or Bybit-derived naming

Only fill in values under `src/data/config.ts` when they have been independently verified. BYBOOP should remain explicitly independent from Bybit.

## Performance
Astro static build and vanilla browser JavaScript, no hydration framework, remote fonts, analytics trackers or wallet SDK. Initial hero is preloaded, story and gallery imagery lazy-loaded. Images are WebP; user-download versions are optimized PNG. The meme generator draws with the HTML Canvas API locally, with no upload or API connection.
