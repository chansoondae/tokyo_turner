import fs from "node:fs";
import path from "node:path";
import Catalogue from "./Catalogue";

// public/works/ 안에서 "번호 + 아무 이름.확장자" 형식의 파일을 찾아 작품 번호와 연결
// 예: "072-n00546.jpg", "72.jpg", "072 Whaler.webp"
function loadImages(): Record<string, string> {
  const dir = path.join(process.cwd(), "public", "works");
  const map: Record<string, string> = {};
  if (!fs.existsSync(dir)) return map;
  for (const name of fs.readdirSync(dir).sort()) {
    const m = name.match(/^(\d{1,3})(?![\d_])/);
    if (!m || !/\.(jpe?g|png|webp|avif)$/i.test(name)) continue;
    const no = String(Number(m[1]));
    if (!map[no]) map[no] = `/works/${encodeURIComponent(name)}`;
  }
  return map;
}

export default function Page() {
  return <Catalogue images={loadImages()} />;
}
