"use client";

import { useMemo, useState } from "react";
import { chapters, exhibition, sublime, works as baseWorks, type Chapter, type Viewpoint, type Work } from "./data";
import FloorMapSheet from "./FloorMap";
import WorkSheet from "./WorkSheet";

type Filter = "all" | "highlight";

const pad = (no: string) => (/^\d+$/.test(no) ? no.padStart(2, "0") : no);

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[\s·・=＝\-–—’'()（）.,]/g, "");
}

const PHOTO_LABEL = { ok: "촬영 가능", no: "촬영 불가", part: "일부 촬영 가능" } as const;

export default function Catalogue({ images }: { images: Record<string, string> }) {
  const works = useMemo(() => baseWorks.map((w) => ({ ...w, image: w.ref ? undefined : images[w.no] })), [images]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [openNo, setOpenNo] = useState<string | null>(null);
  const [mapOpen, setMapOpen] = useState(false);
  const [currentCh, setCurrentCh] = useState<string | null>(null);

  // 안내도를 여는 순간, 목록에서 지금 보고 있는 장을 계산해 강조
  const openMap = () => {
    let cur: string | null = null;
    for (const el of document.querySelectorAll<HTMLElement>(".chapter[id^='ch-']")) {
      if (el.getBoundingClientRect().top <= 200) cur = el.id.slice(3);
      else break;
    }
    const list = document.getElementById("list");
    if (list && list.getBoundingClientRect().bottom < 200) cur = null;
    setCurrentCh(cur);
    setMapOpen(true);
  };

  const visible = useMemo(() => {
    const q = normalize(query.trim());
    return works.filter((w) => {
      if (filter === "highlight" && !w.highlight) return false;
      if (!q) return true;
      if (/^(r)?\d+$/.test(q)) return normalize(w.no) === q;
      return [w.artistKo, w.artist, w.titleKo, w.title, w.titleJa].some((f) => normalize(f).includes(q));
    });
  }, [query, filter, works]);

  const visibleSet = useMemo(() => new Set(visible.map((w) => w.no)), [visible]);
  const openIndex = openNo == null ? -1 : visible.findIndex((w) => w.no === openNo);
  const openWork = openNo == null ? null : works.find((w) => w.no === openNo) ?? null;
  const count = works.filter((w) => !w.ref).length;

  const go = (id: string, smooth = true) =>
    document.getElementById(id)?.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });

  return (
    <>
      {/* ───────── HERO ───────── */}
      <header className="hero">
        <div className="hero-band">
          <p className="hero-kicker">{exhibition.titleEn}</p>
          <div className="hero-date" aria-label="2026년 10월 24일 토요일부터 2027년 2월 21일 일요일까지">
            <span className="d">
              <span className="yr">2026.</span>
              <b>10.24</b>
              <i>[토]</i>
            </span>
            <span className="dash" aria-hidden />
            <span className="d">
              <span className="yr">2027.</span>
              <b>2.21</b>
              <i>[일]</i>
            </span>
          </div>
          <p className="hero-venue">
            <b>{exhibition.venueKo}</b>
            <span className="hero-venue-sub">
              <span lang="ja">{exhibition.venueJa}</span> · 도쿄 우에노 공원
            </span>
          </p>
        </div>

        <div className="hero-canvas">
          <img className="hero-img" src="/works/072-n00546.jpg" alt="" aria-hidden />
          <span className="hero-turner" aria-hidden>
            TURNER
          </span>
          <div className="hero-titles">
            <p className="hero-pre">{exhibition.prefixKo}</p>
            <h1 className="hero-title">{exhibition.titleKo}</h1>
            <p className="hero-sub">
              <span className="rule" aria-hidden />
              <span>숭고의 회화,</span>
              <span>현대미술과의 대화</span>
            </p>
          </div>
          <p className="hero-cap">
            표지 그림 · 터너 〈포경선 에레버스호 만세! 또 한 마리 잡았다!〉 1846년 출품 <span className="nw">(No. 72)</span>
          </p>
        </div>

        <div className="hero-foot">
          <p className="hero-ja" lang="ja">
            {exhibition.titleJa} ―― {exhibition.subtitleJa}
          </p>
          <p className="hero-count">
            출품 <b>{count}</b>점 + 참고 자료 <b>{works.length - count}</b>점 · 프렐류드와 7개의 장
          </p>
          <div className="hero-cta">
            <button className="btn-ink" onClick={() => go("list")}>
              작품 목록 보기 <span aria-hidden>↓</span>
            </button>
            <button className="btn-line" onClick={openMap}>
              전시장 안내도
            </button>
          </div>
        </div>
      </header>

      {/* ───────── 숭고라는 개념 ───────── */}
      <section className="about" aria-label="전시 소개">
        <ViewpointBox v={sublime} lead="이 전시를 읽는 열쇠" />
      </section>

      {/* ───────── STICKY TOOLBAR ───────── */}
      <nav className="toolbar" aria-label="작품 목록 도구">
        <div className="toolbar-row">
          <label className="search">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              inputMode="search"
              placeholder="작가·작품·번호 검색"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="작품 검색"
            />
          </label>
          <button
            className={`chip chip-hl ${filter === "highlight" ? "on" : ""}`}
            aria-pressed={filter === "highlight"}
            onClick={() => setFilter(filter === "highlight" ? "all" : "highlight")}
          >
            ★ 주요작
          </button>
        </div>
        <div className="toolbar-row chips">
          {chapters.map((c) => (
            <button key={c.id} className={`chip chip-chapter t-${c.id}`} onClick={() => go(`ch-${c.id}`)}>
              <b>{c.mark}</b>
              {c.short}
            </button>
          ))}
        </div>
      </nav>

      <main id="list">
        <p className="list-note">
          작품 번호는 도록 번호이며 전시장의 실제 순서와 꼭 같지는 않습니다. 빠진 번호(34·36·58·67, R-2)는 도쿄 전시에 나오지 않습니다. 작품을 누르면 도슨트 해설과
          상세 정보를 볼 수 있어요.
        </p>

        {visible.length === 0 && <p className="empty">조건에 맞는 작품이 없습니다.</p>}

        {chapters.map((c) => {
          const list = works.filter((w) => w.chapter === c.id && visibleSet.has(w.no));
          if (list.length === 0) return null;
          const filtered = query.trim() !== "" || filter !== "all";
          return (
            <section key={c.id} id={`ch-${c.id}`} className={`chapter t-${c.id}`}>
              <ChapterBand c={c} first={list[0]} last={list[list.length - 1]} />
              {!filtered && <p className="chapter-intro">{c.intro}</p>}
              {!filtered && c.viewpoint && <ViewpointBox v={c.viewpoint} lead="Viewpoint" />}
              <ol className="rows">
                {list.map((w) => (
                  <WorkRow key={w.no} w={w} onOpen={() => setOpenNo(w.no)} />
                ))}
              </ol>
            </section>
          );
        })}
      </main>

      {/* ───────── INFO ───────── */}
      <section id="info" className="info">
        <h2 className="block-title">
          관람 안내 <em>Information</em>
        </h2>
        <div className="info-wrap">
          <figure className="info-poster">
            <img src="/img/poster.jpg" alt="전시 포스터 — 터너 〈포경선 에레버스호 만세! 또 한 마리 잡았다!〉" loading="lazy" />
          </figure>
          <dl className="info-grid">
            <div>
              <dt>회기</dt>
              <dd>
                <span className="nw">2026년 10월 24일(토) –</span> <span className="nw">2027년 2월 21일(일)</span>
              </dd>
            </div>
            <div>
              <dt>장소</dt>
              <dd>
                국립서양미술관 <span lang="ja">国立西洋美術館</span>
                <br />
                <small>도쿄도 다이토구 우에노 공원 7-7 · JR 우에노역 공원 출구에서 바로</small>
              </dd>
            </div>
            <div>
              <dt>개관 시간</dt>
              <dd>
                <span className="nw">9:30 – 17:30</span> · <span className="nw">금·토요일 9:30 – 20:00</span>
                <br />
                <small>입관은 폐관 30분 전까지 · 국립서양미술관 통상 운영 기준</small>
              </dd>
            </div>
            <div>
              <dt>휴관일</dt>
              <dd>
                월요일 (공휴일이면 개관, 다음 평일 휴관), 연말연시
                <br />
                <small>전시별 예외가 있을 수 있으니 공식 사이트를 확인하세요.</small>
              </dd>
            </div>
            <div>
              <dt>관람료·예매</dt>
              <dd>
                공식 사이트에서 확인하세요.
                <br />
                <small>문의: 헬로 다이얼 050-5541-8600</small>
              </dd>
            </div>
          </dl>
        </div>

        <div className="rules">
          <h3>사진 촬영</h3>
          <ul>
            <li>
              <b>촬영 가능 표시가 있는 작품·구역만</b> 개인 용도로 촬영할 수 있습니다. 안내도의 카메라 표시를 확인하세요.
            </li>
            <li>프렐류드 · 1장 · 색채 실험실, 그리고 5장의 영상실은 촬영할 수 없습니다.</li>
            <li>3장 · 4장 · 5장 통로 · 6장 · 7장은 촬영 가능 (일부 작품 제외).</li>
          </ul>
          <h3>알아 두기</h3>
          <ul>
            <li>출품작 대부분은 테이트 미술관 소장품이며, 일부는 일본 국내 미술관·도서관·개인 소장입니다.</li>
            <li>작품 보호를 위해 대여 조건에 따라 전시실의 온도·습도·조명을 엄격히 관리합니다.</li>
            <li>화장실·휴게 공간은 지하층에 있습니다.</li>
          </ul>
        </div>

        <p className="credits">
          주최: 국립서양미술관, 테이트 미술관, 아사히신문사, TV아사히 · 협찬: NISSHA, 다이킨공업, 다이와하우스공업 · 후원: TOKYO FM, 브리티시 카운슬 · 협력: 셀시스,
          서양미술진흥재단
        </p>
        <a className="site-link" href={exhibition.site} target="_blank" rel="noreferrer">
          국립서양미술관 공식 사이트 ↗
        </a>
      </section>

      <footer className="footer">
        <p>
          이 페이지는 전시장 배포 작품 목록(List of works)과 해설 자료(Viewpoint)를 바탕으로 만든 비공식 한국어 안내서입니다. 작품 제목의 한국어 표기는 번역자 임의
          번역이며, 정식 명칭은 일본어·영어 원제를 참고하세요. 작품 이미지는 테이트 미술관 및 각 소장처의 공개 이미지이며, 저작권은 각 권리자에게 있습니다.
        </p>
        <p className="footer-logo" aria-hidden>
          TURNER
        </p>
        <div className="footer-credit">
          <a className="fc-brand" href="https://artfrnd.com/" target="_blank" rel="noreferrer">
            <b>아트프렌즈 아트버스</b>
            <span>artfrnd.com ↗</span>
          </a>
          <a className="fc-mail" href="mailto:info@artfrnd.com">
            info@artfrnd.com
          </a>
        </div>
      </footer>

      {!openWork && !mapOpen && (
        <button className="map-fab" onClick={openMap} aria-label="전시장 안내도 열기">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
            <path
              d="M9 4 3 6.5v13.5l6-2.5 6 2.5 6-2.5V4l-6 2.5L9 4Z M9 4v13.5 M15 6.5V20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
          <span>안내도</span>
        </button>
      )}

      {mapOpen && (
        <FloorMapSheet
          current={currentCh}
          onClose={() => setMapOpen(false)}
          onJump={(id) => {
            setMapOpen(false);
            if (!document.getElementById(`ch-${id}`)) {
              setQuery("");
              setFilter("all");
            }
            setTimeout(() => go(`ch-${id}`, false), 50);
          }}
        />
      )}

      {openWork && (
        <WorkSheet
          work={openWork}
          onClose={() => setOpenNo(null)}
          onPrev={openIndex > 0 ? () => setOpenNo(visible[openIndex - 1].no) : undefined}
          onNext={openIndex >= 0 && openIndex < visible.length - 1 ? () => setOpenNo(visible[openIndex + 1].no) : undefined}
        />
      )}
    </>
  );
}

function ChapterBand({ c, first, last }: { c: Chapter; first: Work; last: Work }) {
  const numbered = /^\d$/.test(c.label);
  return (
    <div className="chapter-band">
      <div className="chapter-mark" aria-hidden>
        {numbered ? <span className="cm-num">{c.label}</span> : <span className="cm-word">{c.label}</span>}
      </div>
      <div className="chapter-text">
        <span className="chapter-meta">
          {c.labelKo} · No. {first.no}–{last.no}
          {c.photo && <span className={`photo p-${c.photo}`}>{PHOTO_LABEL[c.photo]}</span>}
        </span>
        <h2>{c.ko}</h2>
        <p className="chapter-en">{c.en}</p>
        <p className="chapter-ja" lang="ja">
          {c.ja}
        </p>
      </div>
    </div>
  );
}

function ViewpointBox({ v, lead }: { v: Viewpoint; lead: string }) {
  return (
    <details className="viewpoint">
      <summary>
        <span className="vp-lead">{lead}</span>
        <span className="vp-title">{v.title}</span>
        <span className="vp-en">{v.en}</span>
        <span className="vp-more" aria-hidden>
          읽기
        </span>
      </summary>
      <div className="vp-body">
        {v.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <small>전시장 배포 해설 자료 「Viewpoint」를 바탕으로 요약·번역했습니다.</small>
      </div>
    </details>
  );
}

function WorkRow({ w, onOpen }: { w: Work; onOpen: () => void }) {
  return (
    <li className={`row ${w.highlight ? "is-hl" : ""} ${w.ref ? "is-ref" : ""}`}>
      <button className="row-main" onClick={onOpen}>
        <span className="row-no">{pad(w.no)}</span>
        <span className={`row-thumb ${w.image ? "" : "none"}`} aria-hidden>
          {w.image ? <img src={w.image} alt="" loading="lazy" /> : <span>{w.ref ? "書" : w.modern ? "©" : "◌"}</span>}
        </span>
        <span className="row-body">
          <span className="row-title">
            {w.highlight && (
              <span className="star" aria-label="주요작">
                ★
              </span>
            )}
            {w.titleKo}
          </span>
          <span className="row-artist">
            {w.artistKo} <span className="en">{w.artist}</span>
          </span>
          <span className="row-meta">
            {w.year} · {w.mediumKo}
            {w.size ? ` · ${w.size}cm` : ""}
          </span>
        </span>
      </button>
    </li>
  );
}
