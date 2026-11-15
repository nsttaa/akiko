/* ============ AKIKO portfolio ============ */

const INK = "#16382a";
const CREAM = "#f7f1d9";

// ---------- Illustrations (one per kind of project) ----------
const inners = {
  chart: (c) => `
    <path d="M262 196 L280 180 L296 188 L316 166 L338 174" stroke="${c}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="338" cy="174" r="5" fill="${c}"/>`,
  puzzle: (c) => `
    <path d="M272 166 h12 a9 9 0 1 1 18 0 h12 v12 a9 9 0 1 1 0 18 v12 h-42Z" fill="#ffd84d" stroke="${INK}" stroke-width="3"/>
    <path d="M318 178 h10 v30 h-14" fill="none" stroke="${c}" stroke-width="3" stroke-dasharray="4 4"/>`,
  robot: (c) => `
    <line x1="300" y1="160" x2="300" y2="168" stroke="${INK}" stroke-width="3"/><circle cx="300" cy="158" r="4" fill="#ff6f6f"/>
    <rect x="276" y="168" width="48" height="36" rx="9" fill="#a7e3f7" stroke="${INK}" stroke-width="3"/>
    <circle cx="290" cy="184" r="4" fill="${INK}"/><circle cx="310" cy="184" r="4" fill="${INK}"/>
    <path d="M292 195 h16" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`,
};

const arts = {
  phone: (c, label, inner = "chart") => `
    <rect x="236" y="62" width="128" height="250" rx="24" fill="${INK}"/>
    <rect x="247" y="78" width="106" height="218" rx="14" fill="${CREAM}"/>
    <rect x="282" y="84" width="36" height="7" rx="3.5" fill="${INK}"/>
    <rect x="258" y="100" width="84" height="48" rx="10" fill="${c}"/>
    <text x="300" y="130" font-family="Bungee" font-size="13" fill="${CREAM}" text-anchor="middle">${label}</text>
    ${inners[inner](c)}
    <rect x="258" y="218" width="84" height="11" rx="5.5" fill="#e5dcbc"/>
    <rect x="258" y="236" width="60" height="11" rx="5.5" fill="#e5dcbc"/>
    <rect x="258" y="260" width="84" height="24" rx="12" fill="${INK}"/>`,

  browser: (c, label) => `
    <rect x="170" y="100" width="260" height="200" rx="10" fill="${CREAM}" stroke="${INK}" stroke-width="4"/>
    <line x1="170" y1="126" x2="430" y2="126" stroke="${INK}" stroke-width="4"/>
    <circle cx="186" cy="113" r="5" fill="#ff6f6f"/><circle cx="202" cy="113" r="5" fill="#ffd84d"/><circle cx="218" cy="113" r="5" fill="#7fd36b"/>
    <rect x="182" y="138" width="54" height="150" rx="6" fill="${c}"/>
    <g fill="${CREAM}" opacity=".8"><rect x="190" y="150" width="38" height="7" rx="3"/><rect x="190" y="166" width="30" height="7" rx="3"/><rect x="190" y="182" width="34" height="7" rx="3"/></g>
    <rect x="248" y="140" width="170" height="22" rx="5" fill="${INK}"/>
    <text x="256" y="156" font-family="Bungee" font-size="12" fill="${CREAM}">${label}</text>
    <g stroke="${INK}" stroke-width="3">
      <rect x="256" y="232" width="22" height="48" fill="${c}"/><rect x="286" y="206" width="22" height="74" fill="#ffd84d"/>
      <rect x="316" y="222" width="22" height="58" fill="#ff8fa3"/><rect x="346" y="190" width="22" height="90" fill="${c}"/>
      <rect x="376" y="212" width="22" height="68" fill="#a7e3f7"/>
    </g>`,

  server: (c, label) => `
    ${[86, 150, 214].map((y, i) => `
      <rect x="205" y="${y}" width="190" height="54" rx="8" fill="${CREAM}" stroke="${INK}" stroke-width="4"/>
      <circle cx="226" cy="${y + 27}" r="7" fill="${i === 1 ? "#ffd84d" : c}"/>
      <circle cx="248" cy="${y + 27}" r="7" fill="#7fd36b"/>
      <g stroke="${INK}" stroke-width="4" stroke-linecap="round"><line x1="300" y1="${y + 19}" x2="376" y2="${y + 19}"/><line x1="300" y1="${y + 35}" x2="356" y2="${y + 35}"/></g>`).join("")}
    <rect x="230" y="284" width="140" height="32" rx="16" fill="${c}" stroke="${INK}" stroke-width="3"/>
    <text x="300" y="306" font-family="Bungee" font-size="15" fill="${CREAM}" text-anchor="middle">${label}</text>`,

  cloud: (c, label) => `
    <path d="M196 262 C150 262 146 200 192 196 C186 140 252 120 276 162 C292 108 370 108 382 166 C430 156 456 214 414 236 C440 262 414 290 386 290 L216 290 C192 290 184 274 196 262Z" fill="${CREAM}" stroke="${INK}" stroke-width="4"/>
    <circle cx="300" cy="222" r="42" fill="none" stroke="${INK}" stroke-width="5"/>
    <g stroke="${INK}" stroke-width="5" stroke-linecap="round">
      ${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
        const r = (a * Math.PI) / 180;
        return `<line x1="${300 + Math.cos(r) * 14}" y1="${222 + Math.sin(r) * 14}" x2="${300 + Math.cos(r) * 52}" y2="${222 + Math.sin(r) * 52}"/>`;
      }).join("")}
    </g>
    <circle cx="300" cy="222" r="16" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <rect x="232" y="304" width="136" height="30" rx="15" fill="${c}" stroke="${INK}" stroke-width="3"/>
    <text x="300" y="325" font-family="Bungee" font-size="14" fill="${CREAM}" text-anchor="middle">${label}</text>`,

  quiz: (c, label) => `
    <rect x="186" y="74" width="228" height="150" rx="26" fill="${CREAM}" stroke="${INK}" stroke-width="4"/>
    <path d="M250 222 L240 256 L282 222" fill="${CREAM}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <text x="300" y="186" font-family="Bungee" font-size="84" fill="${c}" text-anchor="middle">?</text>
    ${["#ff6f6f", "#4aa3ff", "#ffd84d", "#7fd36b"].map((f, i) => `<rect x="${196 + i * 54}" y="266" width="46" height="40" rx="8" fill="${f}" stroke="${INK}" stroke-width="3"/>`).join("")}
    <text x="300" y="336" font-family="Bungee" font-size="16" fill="${CREAM}" text-anchor="middle">${label}</text>`,

  tire: (c, label) => `
    <circle cx="270" cy="206" r="100" fill="${INK}"/>
    <circle cx="270" cy="206" r="90" fill="none" stroke="#2c5a46" stroke-width="12" stroke-dasharray="16 10"/>
    <circle cx="270" cy="206" r="56" fill="#cfd8dc" stroke="${INK}" stroke-width="4"/>
    <circle cx="270" cy="206" r="20" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <rect x="336" y="166" width="96" height="130" rx="8" fill="${CREAM}" stroke="${INK}" stroke-width="4"/>
    <rect x="360" y="156" width="48" height="20" rx="5" fill="${c}" stroke="${INK}" stroke-width="3"/>
    <g stroke="${INK}" stroke-width="4" stroke-linecap="round" fill="none">
      <path d="M350 198 l6 6 l10 -12"/><line x1="374" y1="200" x2="418" y2="200"/>
      <path d="M350 230 l6 6 l10 -12"/><line x1="374" y1="232" x2="410" y2="232"/>
      <path d="M350 262 l6 6 l10 -12"/><line x1="374" y1="264" x2="414" y2="264"/>
    </g>
    <text x="270" y="346" font-family="Bungee" font-size="16" fill="${CREAM}" text-anchor="middle">${label}</text>`,

  book: (c, label) => `
    <path d="M176 116 L300 136 L424 116 L424 300 L300 320 L176 300Z" fill="${c}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M188 108 C240 104 280 116 300 132 L300 304 C280 290 240 280 188 284Z" fill="${CREAM}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M412 108 C360 104 320 116 300 132 L300 304 C320 290 360 280 412 284Z" fill="${CREAM}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <text x="244" y="206" font-family="Bungee" font-size="34" fill="${INK}" text-anchor="middle">ABC</text>
    <g stroke="#c9bfa0" stroke-width="5" stroke-linecap="round"><line x1="212" y1="232" x2="278" y2="236"/><line x1="212" y1="250" x2="270" y2="254"/></g>
    <rect x="320" y="160" width="74" height="40" rx="12" fill="#ffd84d" stroke="${INK}" stroke-width="3"/>
    <text x="357" y="186" font-family="Bungee" font-size="15" fill="${INK}" text-anchor="middle">Hi!</text>
    <g stroke="#c9bfa0" stroke-width="5" stroke-linecap="round"><line x1="322" y1="232" x2="388" y2="228"/><line x1="322" y1="250" x2="378" y2="246"/></g>
    <text x="300" y="350" font-family="Bungee" font-size="16" fill="${CREAM}" text-anchor="middle">${label}</text>`,

  shop: (c, label) => `
    <path d="M258 140 C258 80 342 80 342 140" stroke="${INK}" stroke-width="9" fill="none" stroke-linecap="round"/>
    <path d="M214 136 L386 136 L402 310 L198 310Z" fill="${c}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M286 162 L316 162 L316 222 C316 246 300 256 278 250 L262 246 C250 242 250 226 264 224 L286 220Z" fill="${CREAM}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M286 176 h30 M286 190 h30" stroke="#ff6f6f" stroke-width="5"/>
    <text x="300" y="290" font-family="Bungee" font-size="15" fill="${CREAM}" text-anchor="middle">${label}</text>`,

  receipt: (c, label) => {
    const qr = [];
    for (let y = 0; y < 7; y++) for (let x = 0; x < 7; x++)
      if ((x * 7 + y * 3 + x * y) % 3 === 0) qr.push(`<rect x="${262 + x * 11}" y="${170 + y * 11}" width="10" height="10"/>`);
    return `
    <path d="M216 62 H384 V296 L370 310 L356 296 L342 310 L328 296 L314 310 L300 296 L286 310 L272 296 L258 310 L244 296 L230 310 L216 296Z" fill="${CREAM}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <rect x="216" y="62" width="168" height="40" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <text x="300" y="89" font-family="Bungee" font-size="14" fill="${CREAM}" text-anchor="middle">${label}</text>
    <g stroke="#c9bfa0" stroke-width="5" stroke-linecap="round"><line x1="234" y1="124" x2="330" y2="124"/><line x1="234" y1="142" x2="300" y2="142"/></g>
    <g fill="${INK}">${qr.join("")}</g>
    <g fill="none" stroke="${INK}" stroke-width="4"><rect x="262" y="170" width="20" height="20"/><rect x="318" y="170" width="20" height="20"/><rect x="262" y="226" width="20" height="20"/></g>
    <circle cx="380" cy="80" r="28" fill="#7fd36b" stroke="${INK}" stroke-width="4"/>
    <path d="M366 80 l10 10 l18 -20" stroke="${INK}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
  },

  folder: (c, label) => `
    <path d="M186 108 L258 108 L280 130 L414 130 L414 300 L186 300Z" fill="#e0a91f" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <rect x="214" y="96" width="120" height="150" rx="4" fill="#fff" stroke="${INK}" stroke-width="3" transform="rotate(-8 274 170)"/>
    <rect x="260" y="104" width="120" height="150" rx="4" fill="${CREAM}" stroke="${INK}" stroke-width="3" transform="rotate(6 320 180)"/>
    <path d="M178 170 L422 170 L408 300 L192 300Z" fill="${c}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <text x="300" y="248" font-family="Bungee" font-size="18" fill="${CREAM}" text-anchor="middle">${label}</text>`,

  calendar: (c, label) => {
    const cells = [];
    for (let r = 0; r < 3; r++) for (let k = 0; k < 5; k++) {
      const hot = (r === 0 && k === 2) || (r === 1 && k === 3) || (r === 2 && k === 1);
      const half = (r === 1 && k === 0) || (r === 2 && k === 4);
      cells.push(`<rect x="${208 + k * 38}" y="${166 + r * 40}" width="32" height="32" rx="6" fill="${hot ? "#ffd84d" : half ? "#a7e3f7" : "#fff"}" stroke="${INK}" stroke-width="2.5"/>`);
    }
    return `
    <rect x="192" y="92" width="216" height="222" rx="12" fill="${CREAM}" stroke="${INK}" stroke-width="4"/>
    <path d="M192 104 a12 12 0 0 1 12 -12 h192 a12 12 0 0 1 12 12 v44 h-216Z" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <rect x="236" y="78" width="12" height="28" rx="6" fill="${INK}"/><rect x="352" y="78" width="12" height="28" rx="6" fill="${INK}"/>
    <text x="300" y="133" font-family="Bungee" font-size="16" fill="${CREAM}" text-anchor="middle">${label}</text>
    ${cells.join("")}
    <path d="M286 179 l6 6 l10 -12" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  },

  gem: (c, label) => `
    <path d="M236 128 L364 128 L408 182 L300 312 L192 182Z" fill="#f7c8e0" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M192 182 H408 L300 312Z" fill="#e59cc2"/>
    <path d="M192 182 H408 M236 128 L262 182 L300 312 L338 182 L364 128 M262 182 L300 128 L338 182" stroke="${INK}" stroke-width="3" fill="none" stroke-linejoin="round"/>
    <path d="M246 140 L262 168 L222 168Z" fill="#fff" opacity=".55"/>
    <path d="M412 96 l6 16 l16 6 l-16 6 l-6 16 l-6 -16 l-16 -6 l16 -6Z" fill="#ffd84d" stroke="${INK}" stroke-width="2"/>
    <rect x="236" y="330" width="128" height="30" rx="15" fill="${INK}"/>
    <text x="300" y="351" font-family="Bungee" font-size="14" fill="#ffd84d" text-anchor="middle">${label}</text>`,

  factory: (c, label) => `
    <rect x="334" y="80" width="30" height="80" fill="${CREAM}" stroke="${INK}" stroke-width="4"/>
    <circle cx="356" cy="64" r="12" fill="#fff" opacity=".8"/><circle cx="376" cy="48" r="16" fill="#fff" opacity=".7"/>
    <path d="M190 300 V186 L240 150 V186 L290 150 V186 L340 150 V186 L410 186 V300Z" fill="${CREAM}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    ${[214, 264, 314, 364].map((x) => `<rect x="${x}" y="206" width="30" height="26" rx="3" fill="#a7e3f7" stroke="${INK}" stroke-width="3"/>`).join("")}
    <rect x="278" y="248" width="44" height="52" fill="${c}" stroke="${INK}" stroke-width="4"/>
    <rect x="214" y="314" width="172" height="30" rx="15" fill="${c}" stroke="${INK}" stroke-width="3"/>
    <text x="300" y="335" font-family="Bungee" font-size="14" fill="${CREAM}" text-anchor="middle">${label}</text>`,

  lock: () => `
    <path d="M250 182 V140 a50 50 0 0 1 100 0 V182" stroke="${INK}" stroke-width="22" fill="none" stroke-linecap="round"/>
    <path d="M250 182 V140 a50 50 0 0 1 100 0 V182" stroke="#cfd8dc" stroke-width="12" fill="none" stroke-linecap="round"/>
    <rect x="216" y="170" width="168" height="144" rx="20" fill="#ffd84d" stroke="${INK}" stroke-width="5"/>
    <rect x="228" y="182" width="20" height="120" rx="10" fill="#ffe98a"/>
    <circle cx="300" cy="228" r="17" fill="${INK}"/>
    <path d="M291 236 L309 236 L305 274 L295 274Z" fill="${INK}"/>
    <rect x="226" y="330" width="148" height="30" rx="15" fill="${INK}"/>
    <text x="300" y="351" font-family="Bungee" font-size="14" fill="#ffd84d" text-anchor="middle">PRIVATE</text>`,

  solar: (c, label) => `
    <g stroke="${INK}" stroke-width="5" stroke-linecap="round">
      ${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => { const r = (a * Math.PI) / 180; return `<line x1="${410 + Math.cos(r) * 44}" y1="${108 + Math.sin(r) * 44}" x2="${410 + Math.cos(r) * 58}" y2="${108 + Math.sin(r) * 58}"/>`; }).join("")}
    </g>
    <circle cx="410" cy="108" r="34" fill="#ffd84d" stroke="${INK}" stroke-width="4"/>
    <circle cx="196" cy="124" r="28" fill="#ffd84d" stroke="${INK}" stroke-width="4"/>
    <text x="196" y="135" font-family="Rubik, sans-serif" font-weight="700" font-size="30" fill="${INK}" text-anchor="middle">฿</text>
    <rect x="290" y="276" width="20" height="50" fill="${INK}"/>
    <g transform="rotate(-8 300 236)">
      <rect x="196" y="176" width="208" height="116" rx="4" fill="#2f5e8c" stroke="${INK}" stroke-width="5"/>
      <g stroke="#a7e3f7" stroke-width="3"><line x1="248" y1="178" x2="248" y2="290"/><line x1="300" y1="178" x2="300" y2="290"/><line x1="352" y1="178" x2="352" y2="290"/><line x1="198" y1="215" x2="402" y2="215"/><line x1="198" y1="253" x2="402" y2="253"/></g>
      <path d="M206 186 L236 186 L210 206Z" fill="#fff" opacity=".5"/>
    </g>
    <rect x="228" y="332" width="144" height="30" rx="15" fill="${c}" stroke="${INK}" stroke-width="3"/>
    <text x="300" y="353" font-family="Bungee" font-size="14" fill="${CREAM}" text-anchor="middle">${label}</text>`,

  docx: (c, label) => `
    <g transform="rotate(-6 230 180)">
      <path d="M168 86 H272 L296 110 V262 H168Z" fill="${CREAM}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M272 86 V110 H296" fill="#e5dcbc" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
      <rect x="168" y="120" width="128" height="30" fill="#ff6f6f" stroke="${INK}" stroke-width="4"/>
      <text x="232" y="142" font-family="Bungee" font-size="16" fill="${CREAM}" text-anchor="middle">PDF</text>
      <g fill="#c9bfa0"><rect x="182" y="166" width="70" height="8" rx="4"/><rect x="182" y="184" width="96" height="8" rx="4"/><rect x="182" y="202" width="54" height="8" rx="4"/><rect x="182" y="220" width="84" height="8" rx="4"/></g>
    </g>
    <path d="M290 214 C312 200 324 200 340 210" stroke="${INK}" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M332 196 L346 212 L326 220Z" fill="${INK}"/>
    <g transform="rotate(5 380 220)">
      <path d="M320 128 H424 L448 152 V304 H320Z" fill="#fff" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M424 128 V152 H448" fill="#e5dcbc" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
      <rect x="320" y="162" width="128" height="30" fill="#4aa3ff" stroke="${INK}" stroke-width="4"/>
      <text x="384" y="184" font-family="Bungee" font-size="15" fill="${CREAM}" text-anchor="middle">DOCX</text>
      <text x="384" y="236" font-family="Tahoma, sans-serif" font-weight="700" font-size="30" fill="${INK}" text-anchor="middle">สวัสดี</text>
      <g fill="#c9bfa0"><rect x="334" y="254" width="96" height="8" rx="4"/><rect x="334" y="272" width="64" height="8" rx="4"/></g>
    </g>
    <circle cx="444" cy="126" r="24" fill="#7fd36b" stroke="${INK}" stroke-width="4"/>
    <path d="M432 126 l8 9 l15 -17" stroke="${INK}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="218" y="330" width="164" height="30" rx="15" fill="${INK}"/>
    <text x="300" y="351" font-family="Bungee" font-size="14" fill="${CREAM}" text-anchor="middle">${label}</text>`,

  terminal: (c, label) => `
    <rect x="176" y="100" width="248" height="200" rx="12" fill="${INK}" stroke="${INK}" stroke-width="4"/>
    <path d="M176 112 a12 12 0 0 1 12 -12 h224 a12 12 0 0 1 12 12 v18 h-248Z" fill="${c}"/>
    <circle cx="194" cy="115" r="5" fill="${CREAM}"/><circle cx="210" cy="115" r="5" fill="${CREAM}"/>
    <g font-family="ui-monospace, Menlo, monospace" font-size="16" font-weight="700">
      <text x="194" y="164" fill="#7fd36b">$ git push</text>
      <text x="194" y="194" fill="${CREAM}">→ ${label}</text>
      <text x="194" y="224" fill="#ffd84d">✓ merged</text>
      <rect x="194" y="240" width="12" height="20" fill="${CREAM}" class="blink"/>
    </g>`,
};

// ---------- Projects ----------
// group: "work" (company work, locked) | "indie" (independent / side / client projects)
// tags drive the filters: mobile, backend, web, devops
const projects = [
  // Company work is encrypted in locked.js (source: private/work.json, see tools/lock.mjs)
  { locked: true, lockId: 0, group: "work", where: "xxxxxxx", years: "2024 – 2026", tags: ["mobile"], bg: "#3ea56b", blob: "#2a8a52" },
  { locked: true, lockId: 1, group: "work", where: "xxxxxxx", years: "2023 – 2025", tags: ["mobile"], bg: "#4a6fd1", blob: "#3554a8" },
  { locked: true, lockId: 2, group: "work", where: "xxxxxxx", years: "2023 – 2025", tags: ["web"], bg: "#ff8a6b", blob: "#e86a4f" },
  { locked: true, lockId: 3, group: "work", where: "xxxxxxx", years: "2025 – 2026", tags: ["backend","devops"], bg: "#7a5ce0", blob: "#5f45b8" },
  { locked: true, lockId: 4, group: "work", where: "xxxxxxx", years: "2025 – 2026", tags: ["mobile","backend"], bg: "#f0a43a", blob: "#d4872a" },
  { locked: true, lockId: 5, group: "work", where: "xxxxxxx", years: "2026", tags: ["web","devops"], bg: "#2fa0a8", blob: "#237f86" },
  {
    title: "Thaifolio",
    links: [{ label: "Live site", url: "https://thaifolio.site" }],
    group: "indie", where: "Own product", years: "2026",
    tags: ["web", "backend"],
    stack: "Python · Flask · PyMuPDF · pdf2docx · Tesseract · Next.js · Stripe · Postgres",
    desc: "Converts Thai PDFs to Word without breaking the text. Foreign tools often mangle Thai floating vowels, tone marks and old fonts. Thaifolio repairs them, so the .docx is ready to edit.",
    did: [
      "Repairs legacy Thai fonts (cp874 → Unicode) and PUA floating vowels, then re-orders vowels and tone marks",
      "Sorts every page into normal text, broken text or scan, with Tesseract tha+eng OCR for scans",
      "Sets Word complex-script properties so Thai text keeps the right font and size",
      "Free quota plus paid passes with Stripe, Postgres storage and a Next.js upload site",
    ],
    facts: [["Role", "Founder & developer"], ["Platform", "Web · API"], ["Deploy", "Docker"]],
    art: ["docx", "PDF → WORD"], bg: "#8c2f45", blob: "#6e2235",
  },
  {
    title: "Solar Calc (โซลาร์ประชาชน)",
    links: [{ label: "Live site", url: "https://solar.thaifolio.site" }],
    group: "indie", where: "Side project", years: "2026",
    tags: ["web"],
    stack: "Next.js 16 · TypeScript · Vercel · Telegram Bot",
    desc: "A calculator for Thailand's people's solar program: panel size, bill savings, income from selling power back, loan installments and payback period.",
    did: [
      "Calculation formulas and form validation covered by tests",
      "Lead form that notifies a Telegram chat, no database needed",
      "Matches the 50,000-baht subsidy program, with Vercel Analytics and a privacy policy",
    ],
    facts: [["Role", "Solo developer"], ["Platform", "Web"], ["Commits", "6"]],
    art: ["solar", "SOLAR"], bg: "#ff9a3c", blob: "#e07c22",
  },
  {
    title: "heha.live",
    links: [{ label: "Live site", url: "https://heha.live" }],
    group: "indie", where: "Side project", years: "2026",
    tags: ["web", "backend"],
    stack: "Next.js · Tailwind · Node · Supabase",
    desc: "A real-time quiz game for classrooms. The host opens a room with a 6-digit PIN, students join from their phones and race on a live leaderboard.",
    did: [
      "6 game modes: speed quiz, true/false, poll, typed answer, word cloud, match & order",
      "Real-time rooms with a live leaderboard",
      "Deployed the web app on Vercel",
    ],
    facts: [["Role", "Solo developer"], ["Platform", "Web"], ["Commits", "21"]],
    art: ["quiz", "PIN 482913"], bg: "#ff6f9a", blob: "#e0507c",
  },
  {
    title: "TireFlow",
    group: "indie", where: "Client project", years: "2026",
    tags: ["mobile", "backend"],
    stack: "Flutter · Riverpod · Node · Express · Prisma · Postgres",
    desc: "A tire inspection and management system for truck fleets, built from a statement of work and 8 mobile design flows.",
    did: [
      "Thai-language Flutter app with QR/barcode scanning",
      "REST API with JWT auth, Prisma and Postgres",
      "PDF inspection reports",
    ],
    facts: [["Role", "Full-stack developer"], ["Platform", "Mobile · API"], ["Commits", "19"]],
    art: ["tire", "TIREFLOW"], bg: "#5aa0e6", blob: "#3f80c4",
  },
  {
    title: "SUT English Apps",
    group: "indie", where: "Client project", years: "2026",
    tags: ["mobile", "backend"],
    stack: "Flutter · FVM · Firebase · PHP Yii2",
    desc: "A mobile app for an English-learning platform, with a Yii2 web backend.",
    did: [
      "Flutter mobile app with a pinned SDK through FVM",
      "Android test builds through Firebase App Distribution",
      "Yii2 front-end / back-end web application",
    ],
    facts: [["Role", "Full-stack developer"], ["Platform", "Mobile · Web"], ["Repo", "Private"]],
    art: ["book", "ENGLISH"], bg: "#f2994a", blob: "#d97a2c",
  },
  {
    title: "TABICLIMB THAILAND",
    links: [{ label: "Live site", url: "https://tabiclimbthailand.com" }],
    group: "indie", where: "Side project", years: "2026",
    tags: ["web", "backend"],
    stack: "React · Vite · Tailwind · Supabase · Express · Stripe",
    desc: "A small e-commerce store for Japanese climbing socks, shipping within Thailand, with a warm vintage look.",
    did: [
      "Catalogue, cart synced on login, Thai shipping addresses",
      "Supabase auth with row-level security",
      "Stripe Checkout and referral-code tracking",
    ],
    facts: [["Role", "Solo developer"], ["Platform", "Web"], ["Commits", "39"]],
    art: ["shop", "TABI"], bg: "#c2724f", blob: "#a0573a",
  },
  {
    title: "VerifySlip",
    links: [{ label: "Slip reader", url: "https://slip-reader-taupe.vercel.app" }],
    group: "indie", where: "Side project", years: "2026",
    tags: ["backend", "web"],
    stack: "TypeScript · Hono · Tesseract OCR · zxing · Docker",
    desc: "Checks Thai bank-transfer slips: an API, an automatic re-check queue, webhooks and a Thai dashboard in one app. It has a lightweight slip-reader page too.",
    did: [
      "Reads the slip QR code and Thai/English OCR text",
      "Retry queue and webhooks for merchants",
      "Branch & API-key management dashboard",
    ],
    facts: [["Role", "Solo developer"], ["Platform", "API · Web"], ["Deploy", "Docker"]],
    art: ["receipt", "SLIP OK"], bg: "#2f9e7a", blob: "#237c5f",
  },
  {
    title: "Home Hub",
    group: "indie", where: "Side project", years: "2026",
    tags: ["web", "backend"],
    stack: "React · Vite · Tailwind · Python · Socket.IO · Docker",
    desc: "A file manager for a home server. Browse, upload and edit files from any device on the network.",
    did: [
      "Drag & drop uploads with live progress",
      "Text editor (Monaco) and image viewer",
      "Dockerised Python backend",
    ],
    facts: [["Role", "Solo developer"], ["Platform", "Web"], ["Deploy", "Docker"]],
    art: ["folder", "HOME HUB"], bg: "#6c7ae0", blob: "#525fc0",
  },
  {
    title: "ว่างป่ะ (Wangpa)",
    links: [{ label: "Live site", url: "https://wangpa-gilt.vercel.app" }],
    group: "indie", where: "Side project", years: "2026",
    tags: ["web"],
    stack: "JavaScript · Vercel Functions · Upstash Redis",
    desc: "\"Are you free?\": a shared room where friends mark the days they're free, to find a time that works for everyone.",
    did: [
      "One Redis hash per room with per-person merge",
      "Newest write wins, so two people saving at once never overwrite each other",
      "Serverless API on Vercel",
    ],
    facts: [["Role", "Solo developer"], ["Platform", "Web"], ["Storage", "Redis"]],
    art: ["calendar", "FREE?"], bg: "#ff6f6f", blob: "#e05252",
  },
  {
    title: "88brandname",
    links: [{ label: "Live site", url: "https://88brandname.vercel.app" }],
    group: "indie", where: "Client project", years: "2026",
    tags: ["web"],
    stack: "Next.js · React",
    desc: "A website for a luxury brand-name buy-back service.",
    did: ["Marketing site built with the Next.js App Router", "Reusable components and content data", "Responsive layout for mobile visitors"],
    facts: [["Role", "Web developer"], ["Platform", "Web"], ["Framework", "Next.js"]],
    art: ["gem", "88"], bg: "#3d3553", blob: "#2a2440",
  },
  {
    title: "SAHA P.V.C. (2022)",
    links: [{ label: "Live site", url: "https://sahapvc2022.vercel.app" }],
    group: "indie", where: "Client project", years: "2026",
    tags: ["web"],
    stack: "React · Vite",
    desc: "A company website for a plastic packaging manufacturer.",
    did: ["Company profile and product pages", "Custom typography and layout", "Built with React + Vite"],
    facts: [["Role", "Web developer"], ["Platform", "Web"], ["Framework", "React"]],
    art: ["factory", "SAHA PVC"], bg: "#4aa3ff", blob: "#2f86e0",
  },
  {
    title: "Open-source contribution",
    links: [{ label: "plus_plugins", url: "https://github.com/nsttaa/plus_plugins" }, { label: "AndroidPdfViewer", url: "https://github.com/nsttaa/AndroidPdfViewer" }],
    group: "indie", where: "Open source", years: "2025",
    tags: ["mobile"],
    stack: "Flutter · Dart · Java",
    desc: "A contribution to Flutter Community Plus Plugins, plus a maintained fork of an Android PDF viewer.",
    did: ["Patch to flutter plus_plugins", "Forked AndroidPdfViewer for use in app projects"],
    facts: [["Role", "Contributor"], ["Platform", "Flutter · Android"], ["GitHub", "nsttaa"]],
    art: ["terminal", "plus_plugins"], bg: "#7fbf4a", blob: "#5f9c33",
  },
];

// ---------- Stack (carousel) ----------
const services = [
  {
    num: "01", name: "Mobile", desc: "Flutter · React Native", color: "#ff6f6f",
    art: `<rect width="200" height="200" fill="#ffd84d"/>
      <rect x="62" y="24" width="76" height="152" rx="14" fill="${INK}"/>
      <rect x="70" y="36" width="60" height="128" rx="8" fill="${CREAM}"/>
      <rect x="78" y="48" width="44" height="30" rx="6" fill="#ff6f6f"/>
      <rect x="78" y="88" width="44" height="8" rx="4" fill="#c9bfa0"/><rect x="78" y="102" width="30" height="8" rx="4" fill="#c9bfa0"/>
      <rect x="78" y="140" width="44" height="14" rx="7" fill="${INK}"/>`,
  },
  {
    num: "02", name: "Backend", desc: "Go · Node · Postgres", color: "#7a5ce0",
    art: `<rect width="200" height="200" fill="#a7e3f7"/>
      ${[36, 82, 128].map((y) => `<rect x="36" y="${y}" width="128" height="38" rx="6" fill="${CREAM}" stroke="${INK}" stroke-width="4"/><circle cx="54" cy="${y + 19}" r="6" fill="#7fd36b"/><line x1="100" y1="${y + 19}" x2="146" y2="${y + 19}" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`).join("")}`,
  },
  {
    num: "03", name: "Web", desc: "React · Next.js", color: "#4aa3ff",
    art: `<rect width="200" height="200" fill="#ff9fb2"/>
      <rect x="28" y="40" width="144" height="120" rx="8" fill="${CREAM}" stroke="${INK}" stroke-width="4"/>
      <line x1="28" y1="62" x2="172" y2="62" stroke="${INK}" stroke-width="4"/>
      <circle cx="42" cy="51" r="4" fill="#ff6f6f"/><circle cx="54" cy="51" r="4" fill="#ffd84d"/><circle cx="66" cy="51" r="4" fill="#7fd36b"/>
      <text x="100" y="124" font-family="ui-monospace, Menlo, monospace" font-weight="700" font-size="34" fill="${INK}" text-anchor="middle">&lt;/&gt;</text>`,
  },
  {
    num: "04", name: "DevOps", desc: "Docker · K8s · CI/CD", color: "#ff9a3c",
    art: `<rect width="200" height="200" fill="#7fd36b"/>
      <circle cx="100" cy="100" r="52" fill="${CREAM}" stroke="${INK}" stroke-width="5"/>
      <g stroke="${INK}" stroke-width="6" stroke-linecap="round">
        ${[0, 60, 120, 180, 240, 300].map((a) => { const r = (a * Math.PI) / 180; return `<line x1="${100 + Math.cos(r) * 16}" y1="${100 + Math.sin(r) * 16}" x2="${100 + Math.cos(r) * 64}" y2="${100 + Math.sin(r) * 64}"/>`; }).join("")}
      </g>
      <circle cx="100" cy="100" r="18" fill="#ff9a3c" stroke="${INK}" stroke-width="5"/>`,
  },
];

// ---------- helpers ----------
const $ = (s, el = document) => el.querySelector(s);
const pad = (n) => String(n).padStart(2, "0");

function burstPoints(cx, cy, spikes = 18) {
  const pts = [];
  for (let i = 0; i < spikes * 2; i++) {
    const a = (Math.PI * i) / spikes;
    const r = i % 2 === 0 ? (i % 4 === 0 ? 460 : 340) : 70;
    pts.push(`${(cx + Math.cos(a) * r).toFixed(1)},${(cy + Math.sin(a) * r).toFixed(1)}`);
  }
  return pts.join(" ");
}

function blobCluster(color) {
  const c = [
    [300, 210, 120], [210, 160, 70], [390, 150, 74], [200, 270, 66], [400, 280, 70],
    [300, 90, 60], [300, 320, 66], [160, 210, 50], [440, 215, 52],
  ];
  return c.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" stroke="${INK}" stroke-width="3"/>`).join("") +
    c.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r - 3}" fill="${color}"/>`).join("");
}

// ---------- Project card ----------
let current = 0;
const card = $("#projectCard");

function showProject(i, { scroll = false } = {}) {
  current = (i + projects.length) % projects.length;
  const p = projects[current];
  const locked = !!p.locked;

  $("#projCount").textContent = `${pad(current + 1)} / ${pad(projects.length)}`;
  $("#projectWhere").textContent = `${p.where} · ${p.years}`;
  $("#lockbox").hidden = !locked;
  $("#cardDetails").hidden = locked;
  card.classList.toggle("card--locked", locked);

  if (locked) {
    $("#projectTitle").textContent = "Locked project";
    $("#projectDesc").textContent =
      `This is company work I did at xxxxxxx (${tagNames(p)}), so the details stay private. Message me for the password and I'll share it.`;
    $("#lockMsg").textContent = "";
  } else {
    $("#projectTitle").textContent = p.title;
    $("#projectDesc").textContent = p.desc;
    const links = p.links || [];
    $("#projectLinks").hidden = !links.length;
    $("#projectLinks").innerHTML = links
      .map((l) => `<a class="pill card__link" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`)
      .join("");
    $("#projectChips").innerHTML = p.stack.split(" · ").map((c) => `<span class="chip">${c}</span>`).join("");
    $("#projectHighlight").innerHTML = p.did.map((d) => `<li>${d}</li>`).join("");
    const facts = [["Where", p.where], ["Years", p.years], ...p.facts];
    $("#projectFacts").innerHTML = facts.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");
  }

  const [kind, label, extra] = locked ? ["lock"] : p.art;
  const art = $("#projectArt");
  art.style.background = p.bg;
  art.innerHTML = `
    <svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${locked ? "Locked project" : p.title} illustration">
      <polygon class="burst" points="${burstPoints(300, 210)}" fill="${CREAM}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      ${blobCluster(p.blob)}
      <g class="obj">${arts[kind](p.bg, label, extra)}</g>
    </svg>`;
  art.classList.remove("swap");
  void art.offsetWidth;
  art.classList.add("swap");

  document.querySelectorAll(".tile").forEach((t) => t.classList.toggle("is-current", +t.dataset.i === current));
  if (scroll) card.scrollIntoView({ behavior: "smooth", block: "center" });
}

$("#projPrev").addEventListener("click", () => showProject(current - 1));
$("#projNext").addEventListener("click", () => showProject(current + 1));

// ---------- Password lock for company projects ----------
const TAG_NAMES = { mobile: "Mobile", backend: "Backend", web: "Web", devops: "DevOps" };
function tagNames(p) { return p.tags.map((t) => TAG_NAMES[t]).join(" · "); }

async function decryptLocked(password) {
  const L = window.LOCKED;
  if (!L || !window.crypto?.subtle) throw new Error("unavailable");
  const bytes = (s) => Uint8Array.from(atob(s), (ch) => ch.charCodeAt(0));
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]);
  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: bytes(L.salt), iterations: L.iter, hash: "SHA-256" },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );
  const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: bytes(L.iv) }, key, bytes(L.data));
  return JSON.parse(new TextDecoder().decode(plain));
}

function applyUnlocked(list) {
  projects.forEach((p, i) => {
    if (p.locked && list[p.lockId]) projects[i] = list[p.lockId];
  });
  document.body.classList.add("is-unlocked");
  renderGrid(currentFilter);
  showProject(current);
}

const PW_KEY = "akiko-unlock";
$("#lockbox").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = $("#lockPw");
  const msg = $("#lockMsg");
  const btn = e.target.querySelector("button");
  btn.disabled = true;
  msg.className = "lockbox__msg";
  msg.textContent = "Checking…";
  try {
    const list = await decryptLocked(input.value);
    try { sessionStorage.setItem(PW_KEY, input.value); } catch {}
    input.value = "";
    applyUnlocked(list);
  } catch (err) {
    msg.classList.add("is-error");
    msg.textContent = err.message === "unavailable"
      ? "Unlocking needs https or localhost."
      : "Wrong password. Try again, or message me for it.";
    e.target.classList.remove("shake");
    void e.target.offsetWidth;
    e.target.classList.add("shake");
    input.select();
  } finally {
    btn.disabled = false;
  }
});

// ---------- Filters + grid ----------
const filters = [
  ["all", "All", () => true],
  ["work", "xxxxxxx", (p) => p.group === "work"],
  ["indie", "Independent", (p) => p.group === "indie"],
  ["mobile", "Mobile", (p) => p.tags.includes("mobile")],
  ["backend", "Backend", (p) => p.tags.includes("backend")],
  ["web", "Web", (p) => p.tags.includes("web")],
  ["devops", "DevOps", (p) => p.tags.includes("devops")],
];
const filtersEl = $("#filters");
const grid = $("#projectGrid");

let currentFilter = "all";
function renderGrid(key) {
  currentFilter = key;
  const test = filters.find((f) => f[0] === key)[2];
  [...filtersEl.children].forEach((b) => b.setAttribute("aria-selected", b.dataset.key === key));
  grid.innerHTML = projects
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => test(p))
    .map(({ p, i }, n) => `
      <button class="tile${p.locked ? " tile--locked" : ""}${i === current ? " is-current" : ""}" data-i="${i}" style="animation-delay:${n * 40}ms">
        <span class="tile__top" style="background:${p.bg}">
          <span class="tile__num">${pad(i + 1)}</span>
          <span class="tile__year">${p.years}</span>
        </span>
        <span class="tile__body">
          <span class="tile__title">${p.locked ? "Locked project" : p.title}</span>
          <span class="tile__stack">${p.locked ? tagNames(p) : p.stack}</span>
          <span class="tile__where">${p.locked ? "xxxxxxx · password needed" : p.where}${p.links?.length ? `<span class="tile__live">${p.links[0].url.includes("github.com") ? "Code" : "Live"} ↗</span>` : ""}</span>
        </span>
      </button>`)
    .join("");
}

filtersEl.innerHTML = filters
  .map(([key, label, test]) => `<button class="filter" role="tab" data-key="${key}">${label}<small>${projects.filter(test).length}</small></button>`)
  .join("");
filtersEl.addEventListener("click", (e) => {
  const b = e.target.closest(".filter");
  if (b) renderGrid(b.dataset.key);
});
grid.addEventListener("click", (e) => {
  const t = e.target.closest(".tile");
  if (t) showProject(+t.dataset.i, { scroll: true });
});

renderGrid("all");
showProject(0);

// Stay unlocked for the rest of this browser session
(async () => {
  let saved = null;
  try { saved = sessionStorage.getItem(PW_KEY); } catch {}
  if (!saved) return;
  try { applyUnlocked(await decryptLocked(saved)); }
  catch { try { sessionStorage.removeItem(PW_KEY); } catch {} }
})();

// ---------- Stack carousel ----------
const track = $("#track");
track.innerHTML = services
  .map(
    (s) => `
    <div class="svc">
      <div class="svc__num">
        <div class="svc__top" style="background:${s.color}">${s.num}</div>
        <div class="svc__bottom">
          <div class="svc__name">${s.name}</div>
          <div class="svc__desc">${s.desc}</div>
        </div>
      </div>
      <div class="svc__img"><svg viewBox="0 0 200 200" aria-label="${s.name} illustration">${s.art}</svg></div>
    </div>`
  )
  .join("");

const items = [...track.children];
const counter = $("#counter");
const prev = $("#prev");
const next = $("#next");

function currentIndex() {
  const center = track.scrollLeft + track.clientWidth / 2;
  let best = 0, dist = Infinity;
  items.forEach((el, i) => {
    const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
    if (d < dist) { dist = d; best = i; }
  });
  return best;
}
function goTo(i) {
  const el = items[Math.max(0, Math.min(items.length - 1, i))];
  track.scrollTo({ left: el.offsetLeft + el.offsetWidth / 2 - track.clientWidth / 2 });
}
function updateCounter() {
  const i = currentIndex();
  counter.textContent = `${i + 1} / ${items.length}`;
  prev.disabled = i === 0;
  next.disabled = i === items.length - 1;
}
prev.addEventListener("click", () => goTo(currentIndex() - 1));
next.addEventListener("click", () => goTo(currentIndex() + 1));
track.addEventListener("scroll", () => requestAnimationFrame(updateCounter), { passive: true });
updateCounter();

// ---------- Hero parallax ----------
const layers = [...document.querySelectorAll(".hero .layer")];
const hero = $(".hero");
let mx = 0, my = 0;
function applyParallax() {
  const sy = Math.min(window.scrollY, hero.offsetHeight);
  layers.forEach((l) => {
    const d = parseFloat(l.dataset.depth);
    l.style.transform = `translate(${mx * d * 40}px, ${my * d * 20 + sy * d * 0.35}px)`;
  });
}
hero.addEventListener("mousemove", (e) => {
  mx = e.clientX / window.innerWidth - 0.5;
  my = e.clientY / window.innerHeight - 0.5;
  applyParallax();
});
window.addEventListener("scroll", () => requestAnimationFrame(applyParallax), { passive: true });

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-in"), io.unobserve(e.target))),
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ---------- Active nav link ----------
const links = [...document.querySelectorAll(".nav__link")];
const navIO = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + e.target.id));
    }),
  { rootMargin: "-45% 0px -50% 0px" }
);
["about", "work", "services", "contact"].forEach((id) => navIO.observe(document.getElementById(id)));

// ---------- Mobile menu ----------
const burger = $("#burger");
const navLinks = $("#navLinks");
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open);
});
links.forEach((l) => l.addEventListener("click", () => {
  navLinks.classList.remove("is-open");
  burger.setAttribute("aria-expanded", false);
}));

// ---------- Footer bubbles ----------
const bubbles = $("#bubbles");
for (let i = 0; i < 22; i++) {
  const b = document.createElement("span");
  const size = 6 + Math.random() * 26;
  b.style.width = b.style.height = size + "px";
  b.style.left = Math.random() * 100 + "%";
  b.style.animationDuration = 6 + Math.random() * 8 + "s";
  b.style.animationDelay = -Math.random() * 12 + "s";
  bubbles.appendChild(b);
}

$("#year").textContent = new Date().getFullYear();
