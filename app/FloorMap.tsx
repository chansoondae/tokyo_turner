"use client";

import { useEffect } from "react";
import { chapters, works } from "./data";

const PLAN = { img: "/img/floor.jpg", w: 1300, h: 1400 };

type Rect = { x: number; y: number; w: number; h: number };

// 방 클릭 영역 (평면도 이미지 기준 % 좌표)
const AREA: Record<string, Rect[]> = {
  prelude: [{ x: 28.5, y: 69.6, w: 35.8, h: 20 }],
  ch1: [{ x: 66.8, y: 56.1, w: 29.8, h: 24.3 }],
  ch2: [{ x: 66.8, y: 39, w: 29.8, h: 16.4 }],
  ch3: [
    { x: 33, y: 33, w: 31, h: 11.3 },
    { x: 47.7, y: 44.3, w: 16.3, h: 24.3 },
  ],
  ch4: [
    { x: 18.5, y: 57.2, w: 28.8, h: 20.6 },
    { x: 35.8, y: 44.3, w: 11.8, h: 12.9 },
  ],
  ch5: [
    { x: 3, y: 28, w: 15.4, h: 61.6 },
    { x: 11.5, y: 32.9, w: 20.4, h: 23.2 },
    { x: 18.4, y: 78, w: 8.9, h: 11.6 },
  ],
  ch6: [{ x: 3, y: 3, w: 32, h: 24.6 }],
  colour: [{ x: 36.2, y: 3, w: 14.6, h: 24.6 }],
  ch7: [{ x: 51.9, y: 3, w: 34.3, h: 24.3 }],
};

// 번호 배지 위치
const POS: Record<string, { x: number; y: number }> = {
  prelude: { x: 31, y: 82 },
  ch1: { x: 69.5, y: 74 },
  ch2: { x: 69.5, y: 50 },
  ch3: { x: 39, y: 36 },
  ch4: { x: 22, y: 73 },
  ch5: { x: 7, y: 85 },
  ch6: { x: 4.5, y: 6.5 },
  colour: { x: 39, y: 6.5 },
  ch7: { x: 55, y: 6.5 },
};

type Props = {
  current: string | null;
  onJump: (chapterId: string) => void;
  onClose: () => void;
};

const range = (id: string) => {
  const list = works.filter((w) => w.chapter === id);
  return `No. ${list[0].no}–${list[list.length - 1].no}`;
};

/** 아래에서 올라오는 전시장 안내도 시트 */
export default function FloorMapSheet({ current, onJump, onClose }: Props) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="sheet-wrap" role="dialog" aria-modal="true" aria-label="전시장 안내도">
      <div className="sheet-backdrop" onClick={onClose} />
      <div className="sheet map-sheet">
        <div className="sheet-grip" aria-hidden />
        <div className="sheet-head">
          <h2 className="map-title">
            전시장 안내도 <em>Map</em>
          </h2>
          <button className="sheet-close" onClick={onClose} aria-label="닫기">
            ✕
          </button>
        </div>
        <p className="map-lead">
          아래쪽 <b>입구</b>로 들어가 프렐류드 ‘어두운 방’ → 오른쪽 1·2장 → 가운데 3·4장 → 왼쪽 5장 → 위쪽 6장·색채 실험 → <b>7장</b>을 지나 출구로
          나옵니다. 방을 누르면 해당 작품 목록으로 이동해요.
        </p>

        <div className="plan">
          <div className="plan-inner" style={{ aspectRatio: `${PLAN.w} / ${PLAN.h}` }}>
            <img src={PLAN.img} alt="국립서양미술관 기획전시실 평면도" />
            {chapters.map((c) =>
              AREA[c.id].map((r, i) => (
                <button
                  key={`${c.id}-${i}`}
                  className={`plan-area ${c.id === current ? "current" : ""}`}
                  style={{ left: `${r.x}%`, top: `${r.y}%`, width: `${r.w}%`, height: `${r.h}%` }}
                  onClick={() => onJump(c.id)}
                  aria-label={`${c.route}번째 방 ${c.labelKo} ${c.ko} 작품 목록으로 이동`}
                  tabIndex={i === 0 ? 0 : -1}
                />
              )),
            )}
            {chapters.map((c) => (
              <span
                key={c.id}
                className={`plan-label t-${c.id} ${c.id === current ? "current" : ""}`}
                style={{ left: `${POS[c.id].x}%`, top: `${POS[c.id].y}%` }}
                aria-hidden
              >
                {c.mark}
              </span>
            ))}
          </div>
        </div>
        <p className="plan-legend">초록 카메라 표시 구역은 촬영 가능 · 빨간 표시는 촬영 불가 (개인 용도에 한함)</p>

        <ol className="route-list">
          {chapters.map((c) => (
            <li key={c.id} className={`t-${c.id} ${c.id === current ? "current" : ""}`}>
              <button onClick={() => onJump(c.id)}>
                <span className="rl-no">{c.mark}</span>
                <span className="rl-name">
                  <b>{c.labelKo}</b> {c.ko}
                  <small>{range(c.id)}</small>
                </span>
                {c.id === current ? <span className="rl-here">보는 중</span> : <span className="rl-go">›</span>}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
