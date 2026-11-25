import { docentA } from "./docent-a";
import { docentB } from "./docent-b";
import { docentC } from "./docent-c";
import { docentD } from "./docent-d";

/** 작품별 도슨트 해설: script = 문단 목록, look = 감상 포인트 */
export type Docent = { script: string[]; look: string[] };

// 주요작 (★)
export const HIGHLIGHTS = new Set(["2", "8", "26", "31", "37", "41", "44", "46", "61", "70", "71", "72", "74", "77", "80", "98", "100", "107", "109", "110"]);

export const docent: Record<string, Docent> = { ...docentA, ...docentB, ...docentC, ...docentD };

/** 도슨트에 곁들이는 비교 작품 (전시되지 않음) — public/compare/ */
export const COMPARE: Record<string, { src: string; caption: string }> = {
  "9": {
    src: "/compare/009-caernarvon-castle-1799.jpg",
    caption: "비교 · 터너 〈카나번성, 북웨일스〉 1799–1800년, 수채 (개인 소장) — 같은 성을 같은 무렵 수채로 그린 작품",
  },
  "38": {
    src: "/compare/038-titian-death-of-actaeon.jpg",
    caption: "비교 · 티치아노 〈악타이온의 죽음〉 1559–75년경, 런던 내셔널 갤러리",
  },
  "41": {
    src: "/compare/041-titian-bacchus-and-ariadne.jpg",
    caption: "비교 · 티치아노 〈바쿠스와 아리아드네〉 1520–23년, 런던 내셔널 갤러리",
  },
  "65": {
    src: "/compare/065-fighting-temeraire.jpg",
    caption: "비교 · 터너 〈전함 테메레르〉 1839년, 런던 내셔널 갤러리 — 증기 예인선이 낡은 범선 군함을 끌고 가는 장면",
  },
};
