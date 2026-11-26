import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

// 포스터의 가늘고 높은 세리프 ‘TURNER’
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// 포스터의 날짜·영문 부제 — 단단한 그로테스크
const grotesk = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-grotesk",
  display: "swap",
});

// 공유 미리보기(og:image)는 절대 주소가 필요합니다. 배포 도메인을 NEXT_PUBLIC_SITE_URL 환경변수로 지정하세요.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "테이트 미술관 터너전 · 숭고의 회화 · 작품 목록",
  description:
    "국립서양미술관 「테이트 미술관 터너전 — 숭고의 회화, 현대미술과의 대화」(2026.10.24–2027.2.21) 출품작 한국어 작품 목록과 도슨트 해설",
  openGraph: {
    title: "터너전 — 숭고의 회화, 현대미술과의 대화 · 한국어 작품 목록",
    description: "테이트 미술관 소장 터너와 현대미술 — 국립서양미술관(도쿄 우에노)",
    images: ["/img/poster.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e9dcb8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${sans.variable} ${serif.variable} ${display.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
