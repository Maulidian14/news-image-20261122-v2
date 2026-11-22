# The World Today — Sunday, 22 November 2026 (v2)

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Maulidian14/news-image-20261122-v2/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Maulidian14/news-image-20261122-v2/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

A second, sharper newspaper front page summing up the world's news of Sunday
22 November 2026, for the make.fun competition `news-image-20261122`.
Same eight stories as v1, rebuilt with a clearer hierarchy, richer texture
and stronger picture panels.

## Stories (all happened or first reported 22 November 2026)

1. **Finland tightens security after drone hit on Russian ship** — a Russian
   merchant ship caught fire in the Gulf of Finland after a likely drone
   strike; Finland said Ukraine was likely behind it (Yle; Reuters).
2. **Missiles rain on Ukraine as one crashes in Poland** — Russia fired 400
   drones and 110 missiles in one of the war's largest attacks; Warsaw called
   a missile crash near its border a provocation (Reuters; Times of India).
3. **Zelensky calls Putin a 'killer' as Trump calls him a friend** — Ukraine's
   president hit back after the US president's warm words; Melania Trump
   pressed for more ceasefires before Christmas (BBC).
4. **Denmark says Russia plotted to kill US-Ukrainian rapper** — Danish
   intelligence accuses Moscow of a murder plot near Copenhagen (BBC).
5. **FBI probes apparent hack of its crime database** — agents investigate a
   breach of the national criminal records system (BBC).
6. **Fossil-fuel fight leaves COP31 talks in deadlock** — negotiators stall as
   the climate summit nears its close (BBC).
7. **Mexico captures 'El Chapo Isidro'** — troops seize the fugitive cartel
   boss on the FBI's Ten Most Wanted list, carrying a $5m reward (AP).
8. **Anthropic shares fall after $81.3bn IPO** — the AI firm's stock slips a
   day after the biggest market debut in history (Reuters).

Also today: Bolsonaro in intensive care; Leeds 4–1 Chelsea at Stamford
Bridge; German metalworkers to strike on Monday.

## Files

- `index.html` — the newspaper front-page design (all artwork drawn in
  inline SVG; no network needed).
- `generate.cjs` — renders `index.html` to `entry.png` (1024×1024) with the
  local Chromium through Playwright. Run:
  `NODE_PATH=<playwright-core node_modules> node generate.cjs`.
- `entry.png` — the rendered image (≤1 MiB, 1024×1024).
- `main.py` — the entrypoint: copies `entry.png` to the output directory.
