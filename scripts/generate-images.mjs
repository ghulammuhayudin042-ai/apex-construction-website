/* eslint-disable no-unused-vars -- scene builders intentionally share one (palette, rng) signature */
// Generates local, lightweight SVG illustrations so the site never depends on
// hotlinked photos (no broken images). Replace files in /public/images with real
// project photography (same file names) when client assets are available.
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const OUT = join(process.cwd(), 'public', 'images')
mkdirSync(OUT, { recursive: true })

const W = 1200
const H = 800

function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

const PALETTES = {
  day: { top: '#7fb2e5', bottom: '#dcecf9', far: '#9db8d3', mid: '#4a6d93', near: '#17345c', ground: '#2b3a4a', glow: '#fff7d6' },
  dusk: { top: '#26385f', bottom: '#f0a35e', far: '#6b6f9c', mid: '#3c4574', near: '#141d3a', ground: '#1b2238', glow: '#ffd08a' },
  dawn: { top: '#5f87b8', bottom: '#f8d9a8', far: '#8fa6c4', mid: '#4f6b8f', near: '#1d3558', ground: '#2a3748', glow: '#fff1c4' },
  night: { top: '#050d1c', bottom: '#14315c', far: '#1c3a66', mid: '#112848', near: '#081529', ground: '#0a1424', glow: '#f9c74f' },
  steel: { top: '#8a9aab', bottom: '#d8dee5', far: '#a3b0be', mid: '#667789', near: '#2d3b4b', ground: '#36424f', glow: '#ffffff' },
}

function defs(p, id) {
  return `<defs>
  <linearGradient id="sky${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${p.top}"/><stop offset="1" stop-color="${p.bottom}"/></linearGradient>
  <radialGradient id="glow${id}" cx="0.78" cy="0.28" r="0.5"><stop offset="0" stop-color="${p.glow}" stop-opacity="0.9"/><stop offset="1" stop-color="${p.glow}" stop-opacity="0"/></radialGradient>
  <linearGradient id="vig${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0.55" stop-color="#071426" stop-opacity="0"/><stop offset="1" stop-color="#071426" stop-opacity="0.55"/></linearGradient>
</defs>`
}

function windows(r, x, y, w, h, color, litColor, density = 0.35) {
  let out = ''
  const cols = Math.max(1, Math.floor(w / 26))
  const rows = Math.max(1, Math.floor(h / 34))
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const lit = r() < density
      out += `<rect x="${x + 8 + i * ((w - 16) / cols)}" y="${y + 10 + j * ((h - 20) / rows)}" width="${Math.max(6, (w - 16) / cols - 8)}" height="${Math.max(8, (h - 20) / rows - 12)}" fill="${lit ? litColor : color}" opacity="${lit ? 0.9 : 0.45}"/>`
    }
  }
  return out
}

function crane(x, base, height, color, accent) {
  const top = base - height
  return `<g stroke="${color}" stroke-width="5" fill="none">
  <path d="M${x} ${base} V${top}"/>
  <path d="M${x + 16} ${base} V${top}"/>
  ${Array.from({ length: Math.floor(height / 40) }, (_, i) => `<path d="M${x} ${base - i * 40} L${x + 16} ${base - i * 40 - 40} M${x + 16} ${base - i * 40} L${x} ${base - i * 40 - 40}" stroke-width="2"/>`).join('')}
  <path d="M${x - 150} ${top} H${x + 230}" stroke-width="7"/>
  <path d="M${x - 150} ${top} L${x + 8} ${top - 50} L${x + 230} ${top}" stroke-width="3"/>
  <path d="M${x + 190} ${top} V${top + 90}" stroke="${accent}" stroke-width="3"/>
  </g>
  <rect x="${x + 172}" y="${top + 88}" width="36" height="20" fill="${accent}"/>
  <rect x="${x - 160}" y="${top - 6}" width="26" height="22" fill="${color}"/>`
}

const scenes = {
  skyline(p, r) {
    let s = ''
    for (let i = 0; i < 9; i++) {
      const w = 70 + r() * 70
      const h = 140 + r() * 220
      const x = i * 135 - 20 + r() * 25
      s += `<rect x="${x}" y="${560 - h}" width="${w}" height="${h}" fill="${p.far}" opacity="0.65"/>`
    }
    const towers = [[110, 400, 150], [330, 520, 170], [560, 360, 190], [820, 470, 160], [1000, 330, 160]]
    towers.forEach(([x, h, w], i) => {
      s += `<rect x="${x}" y="${650 - h}" width="${w}" height="${h}" fill="${i % 2 ? p.mid : p.near}"/>`
      s += `<rect x="${x + 10}" y="${650 - h - 14}" width="${w - 20}" height="14" fill="${p.near}"/>`
      s += windows(r, x, 650 - h, w, h, '#0b1f3a', p.glow, 0.3)
    })
    s += crane(60, 650, 420, '#f59e0b', '#ffd27a')
    return s
  },
  house(p, r) {
    let s = `<rect x="0" y="600" width="${W}" height="200" fill="#3d5a3a"/>`
    for (let i = 0; i < 4; i++) {
      const x = 70 + i * 290 + r() * 30
      const w = 220
      const h = 150 + r() * 40
      s += `<rect x="${x}" y="${640 - h}" width="${w}" height="${h}" fill="${i % 2 ? '#d8d2c4' : '#c9c1ae'}"/>`
      s += `<path d="M${x - 24} ${640 - h} L${x + w / 2} ${640 - h - 90} L${x + w + 24} ${640 - h}Z" fill="${i % 2 ? '#8a3b2c' : '#5b2f27'}"/>`
      s += `<rect x="${x + w / 2 - 20}" y="${640 - 90}" width="40" height="90" fill="#5a3a22"/>`
      s += `<rect x="${x + 24}" y="${640 - h + 34}" width="52" height="52" fill="${p.glow}" opacity="0.85"/>`
      s += `<rect x="${x + w - 76}" y="${640 - h + 34}" width="52" height="52" fill="${p.glow}" opacity="0.85"/>`
    }
    s += `<rect x="0" y="640" width="${W}" height="30" fill="${p.ground}"/>`
    return s
  },
  warehouse(p, r) {
    let s = `<rect x="0" y="620" width="${W}" height="180" fill="${p.ground}"/>`
    s += `<path d="M120 620 V380 L600 300 L1080 380 V620Z" fill="${p.mid}"/>`
    s += `<path d="M120 380 L600 300 L1080 380 V410 L600 330 L120 410Z" fill="${p.near}"/>`
    for (let i = 0; i < 4; i++) {
      s += `<rect x="${190 + i * 220}" y="480" width="150" height="140" fill="${p.near}"/>`
      s += `<path d="M${190 + i * 220} 500 H${340 + i * 220} M${190 + i * 220} 530 H${340 + i * 220} M${190 + i * 220} 560 H${340 + i * 220} M${190 + i * 220} 590 H${340 + i * 220}" stroke="${p.mid}" stroke-width="3"/>`
    }
    s += `<rect x="40" y="520" width="90" height="100" fill="#f59e0b"/><rect x="1080" y="540" width="90" height="80" fill="#f59e0b"/>`
    return s
  },
  bridge(p, r) {
    let s = `<rect x="0" y="560" width="${W}" height="240" fill="${p.mid}" opacity="0.55"/>`
    s += `<rect x="0" y="470" width="${W}" height="22" fill="${p.near}"/>`
    ;[260, 940].forEach((x) => {
      s += `<rect x="${x}" y="190" width="28" height="500" fill="${p.near}"/>`
      s += `<rect x="${x - 30}" y="190" width="88" height="22" fill="${p.near}"/>`
    })
    s += `<path d="M0 470 Q274 130 274 200 M274 200 Q607 440 954 200 M954 200 Q954 130 ${W} 470" stroke="${p.near}" stroke-width="6" fill="none"/>`
    for (let x = 40; x < W; x += 40) {
      if (x > 274 && x < 954) s += `<path d="M${x} 470 L${x} ${Math.max(215, 470 - (470 - (215 + Math.pow((x - 614) / 340, 2) * 190)))}" stroke="${p.near}" stroke-width="2"/>`
    }
    for (let x = 60; x < 260; x += 44) s += `<path d="M${x} 470 L274 200" stroke="${p.near}" stroke-width="2" opacity="0.7"/>`
    for (let x = 960; x < 1160; x += 44) s += `<path d="M${x} 470 L954 200" stroke="${p.near}" stroke-width="2" opacity="0.7"/>`
    return s
  },
  crane(p, r) {
    let s = `<rect x="0" y="640" width="${W}" height="160" fill="${p.ground}"/>`
    s += `<rect x="620" y="260" width="360" height="380" fill="${p.mid}"/>`
    for (let i = 0; i < 6; i++) s += `<rect x="620" y="${260 + i * 63}" width="360" height="8" fill="${p.near}"/>`
    for (let i = 0; i < 5; i++) s += `<rect x="${620 + i * 90}" y="260" width="10" height="380" fill="${p.near}"/>`
    s += crane(330, 640, 520, '#f59e0b', '#ffd27a')
    s += crane(1050, 640, 380, '#d98200', '#ffd27a')
    s += `<path d="M140 640 L180 590 H260 L300 640Z" fill="#f59e0b"/>`
    return s
  },
  interior(p) {
    let s = `<rect x="0" y="0" width="${W}" height="${H}" fill="#e9e3d8"/>`
    s += `<rect x="0" y="560" width="${W}" height="240" fill="#a58b6a"/>`
    for (let i = 0; i < 12; i++) s += `<path d="M${i * 100} 560 L${i * 130 - 200} 800" stroke="#8f7656" stroke-width="2"/>`
    s += `<rect x="140" y="120" width="360" height="360" fill="${p.top}"/><rect x="140" y="120" width="360" height="360" fill="url(#glow0)"/>`
    s += `<path d="M320 120 V480 M140 300 H500" stroke="#e9e3d8" stroke-width="10"/>`
    s += `<rect x="620" y="400" width="440" height="110" rx="14" fill="#24405f"/><rect x="620" y="360" width="440" height="60" rx="14" fill="#2f5078"/>`
    s += `<rect x="660" y="510" width="14" height="50" fill="#1b2a3b"/><rect x="1006" y="510" width="14" height="50" fill="#1b2a3b"/>`
    s += `<circle cx="1110" cy="230" r="46" fill="#f59e0b" opacity="0.9"/><path d="M1110 276 V470" stroke="#3a3a3a" stroke-width="6"/>`
    return s
  },
  renovation(p, r) {
    let s = `<rect x="0" y="640" width="${W}" height="160" fill="${p.ground}"/>`
    s += `<rect x="260" y="200" width="680" height="440" fill="#cfc5b3"/>`
    s += `<rect x="560" y="200" width="380" height="440" fill="#b4a690"/>`
    for (let c = 0; c < 6; c++) for (let rr = 0; rr < 3; rr++) s += `<rect x="${300 + c * 100}" y="${250 + rr * 140}" width="56" height="86" fill="${(c + rr) % 3 ? p.mid : p.glow}" opacity="0.8"/>`
    s += `<g stroke="#f59e0b" stroke-width="5" fill="none">`
    for (let x = 220; x <= 980; x += 190) s += `<path d="M${x} 640 V170"/>`
    for (let y = 640; y >= 170; y -= 118) s += `<path d="M220 ${y} H980"/>`
    for (let x = 220; x < 980; x += 190) s += `<path d="M${x} 640 L${x + 190} 522 M${x} 404 L${x + 190} 286" stroke-width="2"/>`
    s += `</g>`
    return s
  },
  blueprint(p, r) {
    let s = `<rect width="${W}" height="${H}" fill="#12356b"/>`
    for (let x = 0; x <= W; x += 40) s += `<path d="M${x} 0 V${H}" stroke="#2b5aa1" stroke-width="1"/>`
    for (let y = 0; y <= H; y += 40) s += `<path d="M0 ${y} H${W}" stroke="#2b5aa1" stroke-width="1"/>`
    s += `<g stroke="#e9f1ff" stroke-width="4" fill="none"><rect x="200" y="160" width="800" height="480"/><path d="M200 400 H560 M560 160 V400 M760 400 V640 M560 520 H760 M760 280 H1000"/></g>`
    s += `<g stroke="#f59e0b" stroke-width="3" fill="none"><path d="M200 120 H1000 M200 110 V130 M1000 110 V130 M1060 160 V640 M1050 160 H1070 M1050 640 H1070"/></g>`
    s += `<circle cx="880" cy="520" r="54" fill="none" stroke="#e9f1ff" stroke-width="3"/><path d="M826 520 H934 M880 466 V574" stroke="#e9f1ff" stroke-width="2"/>`
    return s
  },
  road(p, r) {
    let s = `<path d="M0 520 L${W} 520 V800 H0Z" fill="${p.ground}"/>`
    s += `<path d="M470 520 L730 520 L1120 800 H80Z" fill="#3b4652"/>`
    s += `<path d="M595 520 L600 800" stroke="#f5f5f5" stroke-width="6" stroke-dasharray="40 30"/>`
    for (let i = 0; i < 6; i++) {
      const y = 540 + i * 48
      s += `<rect x="${590 - i * 3}" y="${y}" width="${10 + i * 3}" height="24" fill="#f5f5f5"/>`
    }
    s += `<path d="M0 520 Q300 430 600 480 T1200 440" stroke="${p.near}" stroke-width="3" fill="none"/>`
    s += `<rect x="130" y="610" width="200" height="90" fill="#f59e0b"/><circle cx="170" cy="720" r="30" fill="#1b2a3b"/><circle cx="290" cy="720" r="30" fill="#1b2a3b"/><rect x="250" y="560" width="100" height="60" fill="#d98200"/>`
    return s
  },
  tools(p) {
    let s = `<rect width="${W}" height="${H}" fill="${p.near}"/>`
    s += `<rect x="0" y="560" width="${W}" height="240" fill="#26364a"/>`
    s += `<path d="M300 560 L540 280 L580 310 L350 580Z" fill="#c7cfd8"/><circle cx="560" cy="290" r="64" fill="#c7cfd8"/><circle cx="590" cy="262" r="28" fill="${p.near}"/>`
    s += `<rect x="720" y="320" width="120" height="260" rx="10" fill="#f59e0b"/><rect x="750" y="260" width="60" height="70" fill="#d98200"/>`
    s += `<path d="M900 540 h200 l-30 -190 h-140Z" fill="#f59e0b"/><rect x="880" y="540" width="240" height="26" fill="#d98200"/>`
    return s
  },
  site(p, r) {
    let s = `<rect x="0" y="620" width="${W}" height="180" fill="${p.ground}"/>`
    for (let i = 0; i < 4; i++) {
      s += `<rect x="${100 + i * 260}" y="${420 - i * 40}" width="200" height="${200 + i * 40}" fill="${p.mid}"/>`
      s += windows(r, 100 + i * 260, 420 - i * 40, 200, 200 + i * 40, '#0b1f3a', p.glow, 0.25)
    }
    s += crane(980, 620, 460, '#f59e0b', '#ffd27a')
    return s
  },
}

function layers(p, r) {
  // soft distant hills for depth
  let s = `<path d="M0 520 Q150 440 300 500 T620 470 T920 510 T1200 460 V640 H0Z" fill="${p.far}" opacity="0.5"/>`
  return s
}

function render(sceneName, paletteName, seed, label) {
  const p = PALETTES[paletteName]
  const r = rng(seed)
  const id = '0'
  const bodyScene = scenes[sceneName](p, r, id)
  const isFlat = ['blueprint', 'interior', 'tools'].includes(sceneName)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${label}" preserveAspectRatio="xMidYMid slice">
${defs(p, id)}
${isFlat ? '' : `<rect width="${W}" height="${H}" fill="url(#sky${id})"/><rect width="${W}" height="${H}" fill="url(#glow${id})"/>${layers(p, r)}`}
${bodyScene}
<rect width="${W}" height="${H}" fill="url(#vig${id})"/>
</svg>
`
  return svg
}

const manifest = [
  // hero + general
  ['hero', 'skyline', 'dusk', 11, 'Construction crane beside a modern commercial tower at dusk'],
  ['about', 'site', 'dawn', 12, 'Building site at dawn with a tower crane'],
  ['cta-bg', 'crane', 'night', 13, 'Tower cranes against a night sky'],
  // services
  ['service-general-construction', 'crane', 'day', 21, 'General construction site with tower crane'],
  ['service-residential', 'house', 'dawn', 22, 'Row of residential homes'],
  ['service-commercial', 'skyline', 'day', 23, 'Commercial office towers'],
  ['service-industrial', 'warehouse', 'steel', 24, 'Industrial warehouse facility'],
  ['service-civil-engineering', 'road', 'day', 25, 'Road works and civil engineering'],
  ['service-renovation', 'renovation', 'day', 26, 'Building under renovation with scaffolding'],
  ['service-interior-finishing', 'interior', 'day', 27, 'Finished interior living space'],
  ['service-project-management', 'blueprint', 'day', 28, 'Project plans and drawings'],
  ['service-infrastructure', 'bridge', 'dawn', 29, 'Cable-stayed bridge'],
  ['service-maintenance', 'tools', 'night', 30, 'Maintenance tools and equipment'],
  // projects (main + 2 gallery variants)
  ['project-harbor-view-towers', 'skyline', 'dusk', 41, 'Harbor View Towers'],
  ['project-harbor-view-towers-2', 'site', 'day', 42, 'Harbor View Towers during construction'],
  ['project-harbor-view-towers-3', 'skyline', 'night', 43, 'Harbor View Towers at night'],
  ['project-greenfield-residences', 'house', 'day', 44, 'Greenfield Residences'],
  ['project-greenfield-residences-2', 'house', 'dawn', 45, 'Greenfield Residences street view'],
  ['project-greenfield-residences-3', 'interior', 'day', 46, 'Greenfield Residences interior'],
  ['project-northgate-logistics-hub', 'warehouse', 'steel', 47, 'Northgate Logistics Hub'],
  ['project-northgate-logistics-hub-2', 'warehouse', 'dusk', 48, 'Northgate Logistics Hub at dusk'],
  ['project-northgate-logistics-hub-3', 'site', 'steel', 49, 'Northgate Logistics Hub site works'],
  ['project-riverside-bridge-crossing', 'bridge', 'dawn', 50, 'Riverside Bridge Crossing'],
  ['project-riverside-bridge-crossing-2', 'bridge', 'dusk', 51, 'Riverside Bridge Crossing at dusk'],
  ['project-riverside-bridge-crossing-3', 'road', 'day', 52, 'Riverside Bridge approach road'],
  ['project-heritage-court-restoration', 'renovation', 'day', 53, 'Heritage Court Restoration'],
  ['project-heritage-court-restoration-2', 'renovation', 'dawn', 54, 'Heritage Court scaffolding'],
  ['project-heritage-court-restoration-3', 'interior', 'dawn', 55, 'Heritage Court restored interior'],
  ['project-meridian-business-park', 'skyline', 'day', 56, 'Meridian Business Park'],
  ['project-meridian-business-park-2', 'site', 'dawn', 57, 'Meridian Business Park construction'],
  ['project-meridian-business-park-3', 'skyline', 'dusk', 58, 'Meridian Business Park evening'],
  ['project-lakeside-wellness-clinic', 'interior', 'day', 59, 'Lakeside Wellness Clinic'],
  ['project-lakeside-wellness-clinic-2', 'house', 'day', 60, 'Lakeside Wellness Clinic exterior'],
  ['project-lakeside-wellness-clinic-3', 'renovation', 'steel', 61, 'Lakeside Wellness Clinic fit-out'],
  ['project-city-ring-road-upgrade', 'road', 'dawn', 62, 'City Ring Road Upgrade'],
  ['project-city-ring-road-upgrade-2', 'road', 'day', 63, 'City Ring Road paving works'],
  ['project-city-ring-road-upgrade-3', 'bridge', 'steel', 64, 'City Ring Road overpass'],
  // articles
  ['article-budgeting-your-build', 'blueprint', 'day', 71, 'Construction budgeting plans'],
  ['article-site-safety-basics', 'site', 'steel', 72, 'Site safety on a construction project'],
  ['article-choosing-structural-materials', 'warehouse', 'day', 73, 'Structural materials selection'],
  ['article-scheduling-with-less-delay', 'crane', 'dawn', 74, 'Construction scheduling'],
  ['article-renovation-checklist', 'renovation', 'dawn', 75, 'Renovation planning'],
  ['article-design-coordination', 'blueprint', 'steel', 76, 'Design coordination drawings'],
  ['article-company-update-new-yard', 'tools', 'dusk', 77, 'Company equipment yard'],
  ['article-sustainable-building-choices', 'house', 'dusk', 78, 'Sustainable residential building'],
  // industries
  ['industry-residential', 'house', 'day', 81, 'Residential housing'],
  ['industry-commercial', 'skyline', 'dawn', 82, 'Commercial development'],
  ['industry-industrial', 'warehouse', 'steel', 83, 'Industrial facility'],
  ['industry-infrastructure', 'bridge', 'day', 84, 'Infrastructure works'],
  ['industry-renovation', 'renovation', 'day', 85, 'Renovation and restoration'],
  ['industry-interiors', 'interior', 'day', 86, 'Interior fit-out'],
  ['industry-institutional', 'site', 'day', 87, 'Education and healthcare buildings'],
  // contact / misc
  ['contact', 'skyline', 'dawn', 91, 'City skyline'],
  ['map-placeholder', 'road', 'steel', 92, 'Map placeholder'],
]

for (const [name, scene, palette, seed, label] of manifest) {
  writeFileSync(join(OUT, `${name}.svg`), render(scene, palette, seed, label))
}

// Team avatars (initial monograms)
const team = [
  ['team-md', 'AK', '#18386a'],
  ['team-project-director', 'SR', '#2a5a8a'],
  ['team-engineering-lead', 'MH', '#1d4d6b'],
  ['team-operations', 'FN', '#3a4a7a'],
  ['team-hse', 'BA', '#24466f'],
  ['team-commercial', 'ZT', '#2f3f66'],
]
for (const [name, initials, color] of team) {
  writeFileSync(
    join(OUT, `${name}.svg`),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-label="Team member placeholder ${initials}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${color}"/><stop offset="1" stop-color="#0b1f3a"/></linearGradient></defs><rect width="600" height="600" fill="url(#g)"/><circle cx="300" cy="230" r="90" fill="#ffffff" opacity="0.14"/><path d="M110 600 C110 430 490 430 490 600Z" fill="#ffffff" opacity="0.14"/><text x="300" y="345" text-anchor="middle" font-family="Arial, sans-serif" font-size="150" font-weight="700" fill="#f59e0b">${initials}</text></svg>\n`
  )
}

console.log(`Generated ${manifest.length + team.length} images in ${OUT}`)
