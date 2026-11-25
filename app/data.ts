import { HIGHLIGHTS, docent, type Docent } from "./notes";

export type Photo = "ok" | "no" | "part";

export type Viewpoint = { title: string; en: string; body: string[] };

export type Chapter = {
  id: string;
  mark: string; // 칩·안내도 표기 P, 1 … 7, C
  label: string; // 큰 표기 (Prelude, 1, 2 …, Colour)
  labelKo: string; // 프렐류드, 1장 …
  short: string; // 칩용 짧은 이름
  ko: string;
  en: string;
  ja: string;
  route: number; // 관람 순서
  photo?: Photo;
  intro: string;
  viewpoint?: Viewpoint;
};

export type Work = {
  no: string; // "1", "R-1" …
  ref: boolean; // 참고 자료(R-)
  chapter: string;
  artistKo: string;
  artist: string;
  life: string;
  titleKo: string;
  title: string;
  titleJa: string;
  year: string;
  yearEn: string;
  mediumKo: string;
  medium: string;
  collectionKo: string;
  collection: string;
  acc?: string; // 테이트 소장 번호
  size?: string; // 세로×가로 cm
  sizeNote?: string;
  object: boolean;
  modern: boolean; // 저작권이 살아 있는 근현대 작가 (이미지 미게재)
  docent: Docent;
  highlight: boolean;
  image?: string;
};

export const exhibition = {
  titleKo: "터너전",
  subtitleKo: "숭고의 회화, 현대미술과의 대화",
  prefixKo: "테이트 미술관",
  titleJa: "テート美術館 ターナー展",
  subtitleJa: "崇高の絵画、現代美術との対話",
  titleEn: "Turner: Painting the Sublime, in Dialogue with Contemporary Art",
  venueKo: "국립서양미술관",
  venueJa: "国立西洋美術館",
  venueEn: "The National Museum of Western Art, Tokyo",
  period: "2026.10.24 (토) – 2027.2.21 (일)",
  site: "https://www.nmwa.go.jp",
};

/** 전시 전체를 꿰는 개념 — 「숭고」 (Viewpoint 자료 요약) */
export const sublime: Viewpoint = {
  title: "숭고라는 개념",
  en: "The Sublime",
  body: [
    "‘숭고(sublime)’라는 말은 고대 그리스의 롱기누스로 거슬러 올라갑니다. 그의 『숭고론』이 1674년 부알로의 프랑스어 번역으로 널리 읽히면서, 18–19세기의 예술가와 저술가에게 핵심 개념이 되었습니다. 거대한 산, 폭력적인 폭풍, 깊은 어둠처럼 인간의 상상력을 압도하는 자연의 힘 앞에서 생겨나는 감정을 가리키는 말이었습니다.",
    "에드먼드 버크는 1757년 『숭고와 아름다움의 관념의 기원에 대한 철학적 탐구』에서 숭고를 아름다움과 구별했습니다. 위험과 공포를 품은 것이라도 안전한 자리에서 바라볼 때 강한 경외, 나아가 ‘기쁨’이 일어난다는 것이죠. 칸트는 1790년 『판단력 비판』에서 헤아릴 수 없는 크기와 자연의 위력이 주는 숭고의 경험을 더 원리적으로 분석했습니다.",
    "폭풍, 눈사태, 산, 그리고 바다. 터너의 그림 앞에서 우리는 위험에 직접 노출되지 않은 채, 그림으로 제시된 자연의 힘을 몇 번이고 경험합니다. 한편 터너의 가장 큰 옹호자였던 존 러스킨은 1843년 『근대 화가론』 제1권에 이렇게 썼습니다. “마음을 고양시키는 것은 무엇이든 숭고하며, 마음의 고양은 어떤 종류이든 위대함을 응시하는 데서 생겨난다.” 공포에만 머물지 않는 이 넓은 숭고가, 이번 전시가 터너를 바라보는 중요한 시점입니다.",
  ],
};

export const chapters: Chapter[] = [
  {
    id: "prelude",
    mark: "P",
    label: "Prelude",
    labelKo: "프렐류드",
    short: "어두운 방",
    ko: "어두운 방",
    en: "A Darkened Room",
    ja: "暗い部屋",
    route: 1,
    photo: "no",
    intro:
      "전시는 빛이 낮게 가라앉은 방에서 시작합니다. 젊은 터너의 초상, 그리고 달빛과 일식. 평생 ‘빛의 화가’로 불릴 터너가 처음 매달린 것은 오히려 어둠 속에서 빛이 어떻게 드러나는가였습니다. 2세기 뒤의 작가 케이티 패터슨은 인류가 기록한 일식의 이미지로 방 전체를 빛과 그림자로 채웁니다.",
  },
  {
    id: "ch1",
    mark: "1",
    label: "1",
    labelKo: "1장",
    short: "영국의 풍경",
    ko: "시작의 걸음, 영국의 풍경에서",
    en: "Beginning in the British Landscape",
    ja: "はじまりの歩み、英国の風景から",
    route: 2,
    photo: "no",
    intro:
      "런던 이발사의 아들로 태어난 터너는 십대부터 스케치북을 들고 웨일스와 잉글랜드 북부를 걸었습니다. 성과 폐허, 안개 낀 산과 호수를 그리며 그는 지형 화가에서 ‘숭고’의 풍경 화가로 성장합니다. 이 방에서는 터너의 걸음과, 걷는 행위 자체를 작품으로 만든 리처드 롱의 걸음이 나란히 놓입니다.",
  },
  {
    id: "ch2",
    mark: "2",
    label: "2",
    labelKo: "2장",
    short: "산의 내부로",
    ko: "산의 내부로",
    en: "Into the Mountains",
    ja: "山々の内部へ",
    route: 3,
    intro:
      "1802년, 영국과 프랑스 사이에 잠시 평화가 찾아오자 터너는 처음으로 대륙에 건너가 알프스로 향했습니다. 빙하와 협곡, 눈사태는 버크와 칸트가 말한 ‘숭고’의 교과서 같은 풍경이었습니다. 터너는 그 압도적인 힘 속으로 걸어 들어가 산을 그렸고, 200여 년 뒤 올라퍼 엘리아슨은 녹아내리는 빙하를 기록합니다.",
    viewpoint: {
      title: "녹는 빙하, 녹여진 빙하",
      en: "Turner and Eliasson",
      body: [
        "터너는 산업혁명이 세계의 풍경을 바꾸던 시대를 살았습니다. 그의 그림에서 증기선과 기관차, 공장의 매연은 산과 바다, 폭풍과 함께 그려지고 그 속에 녹아듭니다. 인간의 활동과 자연의 위력이 같은 환경 안에서 구분 없이 섞여 있는 것이죠.",
        "터너가 마주한 알프스에서 빙하는 거대했고, 그는 눈이 ‘녹는’ 것이 한 원인이 되는 눈사태를 인간을 압도하는 자연의 힘으로 그렸습니다. 2세기 뒤의 엘리아슨은 기후 변화를 인간 활동의 결과로 보며, 빙하를 ‘녹여진’ 것으로 바라봅니다(No. 31).",
        "두 작가를 함께 볼 때, 세계에 대한 우리의 인식이 얼마나 달라졌는지가 드러납니다. 다만 터너는 애초에 인간과 자연을 둘로 나누어 보지 않았습니다. 그는 둘이 늘 서로 간섭하고 스며드는 세계를 그렸습니다.",
      ],
    },
  },
  {
    id: "ch3",
    mark: "3",
    label: "3",
    labelKo: "3장",
    short: "역사적 숭고",
    ko: "역사적 숭고",
    en: "Historical Sublime",
    ja: "歴史的崇高",
    route: 4,
    photo: "ok",
    intro:
      "당시 미술 아카데미에서 가장 높은 장르는 신화와 역사를 그리는 역사화였습니다. 터너는 그리스 신화와 성서의 이야기를 거대한 풍경 속에 풀어 놓으며 풍경화를 역사화의 자리까지 끌어올리려 했습니다. 이야기의 주인공은 점점 작아지고, 빛과 대기가 화면의 진짜 주인공이 됩니다. 코닐리아 파커는 터너 그림의 ‘뒷면’에서 또 다른 역사를 꺼내 보입니다.",
  },
  {
    id: "ch4",
    mark: "4",
    label: "4",
    labelKo: "4장",
    short: "베네치아",
    ko: "숭고의 도시, 베네치아",
    en: "Venice: City of Sublime",
    ja: "崇高の都市、ヴェネツィア",
    route: 5,
    photo: "part",
    intro:
      "터너는 1819년, 1833년, 1840년 세 차례 베네치아를 찾았습니다. 머문 날은 모두 합쳐 몇 주에 불과했지만, 물과 빛이 뒤섞인 이 도시는 말년까지 그의 그림을 사로잡았습니다. 돌로 된 도시가 빛 속에서 녹아내리는 듯한 유화와 수채화, 그리고 터너를 동경해 베네치아와 런던을 그린 일본 화가 구리하라 주지의 작품이 함께 놓입니다.",
    viewpoint: {
      title: "근대 일본에 남은 터너의 기억",
      en: "Memories of Turner in Modern Japan",
      body: [
        "일본에 터너가 처음 소개된 것은 1870년 나카무라 마사나오가 번역한 새뮤얼 스마일스의 『자조론(서국입지편)』 속 기술로 여겨집니다. 그러나 터너의 이름을 가장 널리 알린 것은 1906년 나쓰메 소세키의 소설 『도련님』입니다. “저 소나무 좀 보게, 줄기가 곧고 위가 우산처럼 펼쳐진 게 터너 그림에 있을 법하군.” 주인공은 “터너가 뭔지 모르지만 몰라도 곤란할 건 없으니 잠자코 있었다”고 말하죠(R-1).",
        "런던 유학(1900–03) 중 내셔널 갤러리에서 터너를 본 소세키는 1907년 『문학론』에서 〈비, 증기, 속도〉를 언급합니다. 화가 다케우치 세이호는 1900년 파리 만국박람회 때 런던에서 터너를 직접 보았고, 1907년 수묵으로 베네치아의 살루테 성당을 그렸습니다.",
        "도쿄미술학교 시절 옷차림까지 터너를 흉내 내 ‘구리하라 터너’라는 별명을 얻은 구리하라 주지는 1912년 12월 6일 마침내 런던에 닿았습니다. 그의 두 그림(No. 59, 60)은 그가 얼마나 터너의 기억과 함께 살았는지 보여 줍니다.",
      ],
    },
  },
  {
    id: "ch5",
    mark: "5",
    label: "5",
    labelKo: "5장",
    short: "거친 바다",
    ko: "거친 바다",
    en: "Storm at Sea",
    ja: "荒れた海",
    route: 6,
    photo: "part",
    intro:
      "섬나라 영국의 화가 터너에게 바다는 평생의 주제였습니다. 난파선과 불타는 배, 고래잡이 배, 그리고 노예선. 그의 폭풍은 자연의 위력이자 인간의 욕망과 폭력이 드러나는 무대이기도 했습니다. 이 방에서 오톨리스 그룹의 영상은 터너의 〈노예선〉이 그린 바다로 우리를 다시 데려갑니다.",
    viewpoint: {
      title: "〈노예선〉의 바다로 돌아가다",
      en: "The Otolith Group and The Slave Ship",
      body: [
        "오톨리스 그룹의 〈Hydra Decapita(히드라의 참수)〉(No. 71)는 터너의 〈노예선〉(보스턴 미술관, No. 70 참조)이 그린 바다에서 출발한 에세이 필름입니다. 〈노예선〉은 1781년의 종(Zong)호 사건을 다룹니다. 영국 노예선 선원들이 아프리카인 133명을 배 밖으로 던졌고, 선주는 훗날 이 살해된 사람들에 대한 보험금을 청구했습니다.",
        "터너는 사람들이 바다에 던져지는 ‘그 순간’을 그리지 않았습니다. 우리가 보는 것은 그 뒤의 지속되는 시간, 멀어지는 배와 물속에서 아직 몸부림치는 사람들입니다. 영상은 러스킨이 〈노예선〉에 대해 쓴 글을 여성의 노래로 인용하고, 디트로이트 테크노 듀오 드렉시야(Drexciya)가 상상한 해저 문명 — 바다에 던져진 임신한 여성들에게서 태어나 물속에서 살아남은 사람들의 세계 — 에 기대어 있습니다.",
        "두 작품을 가까이 나란히 볼 때, 우리는 노예제와 식민주의가 만든 역사가 오늘의 세계를 어떻게 규정하고 있는지, 죽은 이들의 기억이 미래에 어떻게 작용하는지를 묻지 않을 수 없습니다.",
      ],
    },
  },
  {
    id: "ch6",
    mark: "6",
    label: "6",
    labelKo: "6장",
    short: "바다와 하늘",
    ko: "묵상, 바다와 하늘을 바라보며",
    en: "Contemplation: Sea and Sky",
    ja: "黙想、海と空を見つめつつ",
    route: 7,
    photo: "ok",
    intro:
      "폭풍이 지나간 뒤, 터너는 고요한 바다와 하늘을 오래 바라보았습니다. 수평선 하나, 구름 몇 점, 물빛의 미묘한 변화. 형태는 점점 사라지고 화면에는 빛과 색만 남습니다. 볼프강 틸만스의 4미터가 넘는 바다 사진과 리사 밀로이의 하늘이 이 고요한 응시에 응답합니다.",
    viewpoint: {
      title: "바다 위에는 국경이 보이지 않는다",
      en: "Turner and Tillmans",
      body: [
        "터너에게 바다는 그리는 대상이자, 영국과 대륙을 잇는 이동과 교역의 길이었습니다. 무역과 제국, 정치 개혁을 둘러싼 논쟁이 뜨겁던 시대, 바다는 먼 땅을 잇는 동시에 경계를 만드는 매개였습니다.",
        "약 200년 뒤 볼프강 틸만스의 〈The State We’re In, A〉(No. 80)는 보는 이를 대서양 한가운데로 던져 놓습니다. 가로 4미터가 넘는 화면은 거의 전부 바다 표면입니다. 위치를 알려 줄 배도 표지도 없고, 우리의 눈은 고해상도 카메라가 붙잡은 무수한 물결과 먼 수평선으로 향합니다.",
        "인간이 그은 어떤 경계선도 바다 위에서는 보이지 않습니다. 터너의 바다처럼 거기에는 ‘오른쪽’도 ‘왼쪽’도 없습니다. ‘우리가 처한 상황’이라는 제목은 보이는 수면 너머의 다른 세계들을 생각해 보라고 권합니다.",
      ],
    },
  },
  {
    id: "colour",
    mark: "C",
    label: "Colour",
    labelKo: "색채 실험",
    short: "색채 실험",
    ko: "색채 실험",
    en: "Colour Experiments",
    ja: "色彩実験",
    route: 8,
    photo: "no",
    intro:
      "터너의 아틀리에에는 무엇을 그렸는지 알 수 없는 색의 얼룩 같은 수채화가 수백 장 남아 있었습니다. 훗날 ‘컬러 비기닝(색의 시작)’이라 불린 이 종이들은 그림의 밑칠이자 순수한 색 실험이었습니다. 왕립 아카데미 원근법 교수로서 그린 강의용 색상환, 그리고 터너가 탐독한 괴테의 『색채론』과 클레·러스킨의 책이 함께 놓입니다.",
  },
  {
    id: "ch7",
    mark: "7",
    label: "7",
    labelKo: "7장",
    short: "후기 터너",
    ko: "근원적 숭고 — ‘후기 터너’라는 문제",
    en: "Late Turner: Elemental Sublime",
    ja: "根源的崇高―後期ターナーという問題",
    route: 9,
    photo: "ok",
    intro:
      "터너가 세상을 떠난 뒤 아틀리에에서는 형태가 거의 사라진, 빛과 물과 공기만으로 이루어진 그림들이 쏟아져 나왔습니다. 생전에 공개되지 않은 이 ‘미완성작’들은 20세기에 들어 인상주의와 추상미술을 앞질러 간 그림으로 다시 읽혔습니다. 전시의 마지막 방에서 터너의 바다는 마크 로스코, 바넷 뉴먼의 추상과 마주합니다.",
    viewpoint: {
      title: "1960년대 미국의 터너",
      en: "Turner in the United States",
      body: [
        "1906년 런던 테이트 갤러리는 ‘터너 유증 컬렉션’ 속 말년의 미완성작들을 전시했습니다. 거친 붓질과 눈부신 색, 흐릿한 형태는 비평가들로 하여금 터너를 ‘모던 아트의 선구자’로 보게 했고, 미술관 전시와 비평이 맞물리며 ‘후기 터너’라는 이미지가 만들어졌습니다.",
        "이 흐름은 1960년대 미국에서 절정에 이릅니다. 1961년 미술사가 로버트 로젠블럼은 로스코·폴록·뉴먼 등 추상표현주의를 ‘추상적 숭고’라는 개념으로 분석하며 그 기원에 터너의 ‘낭만주의적 숭고’를 두었습니다(R-8). 1966년 뉴욕 현대미술관(MoMA)의 「터너 — 상상과 현실」전(R-9) 개막에 온 로스코는 테이트 관장에게 이렇게 농담했다고 합니다. “이 터너라는 친구, 나한테서 많이 배웠군!”",
        "이 방의 로스코와 뉴먼은 터너에게 직접 응답해 만든 작품이 아닙니다. 그러나 나란히 놓였을 때, 한 세기가 넘는 거리를 둔 그림들 사이에 어떤 관계가 보이나요?",
      ],
    },
  },
];

// ───── 작가 ─────
type A = [string, string, string];
const TURNER: A = ["J.M.W. 터너", "Joseph Mallord William Turner", "1775–1851"];
const AFTER: A = ["J.M.W. 터너 원작", "After Joseph Mallord William Turner", "1775–1851"];
const LONG: A = ["리처드 롱", "Richard Long", "1945–"];
const KURIHARA: A = ["구리하라 주지", "Kurihara Chūji", "1886–1936"];
const MILROY: A = ["리사 밀로이", "Lisa Milroy", "1959–"];
const GOETHE: A = ["요한 볼프강 폰 괴테", "Johann Wolfgang von Goethe", "1749–1832"];

// 근현대 작가 — 저작권 보호 기간이라 이미지를 싣지 않음
const MODERN = new Set(["Katie Paterson", "Richard Long", "Olafur Eliasson", "Cornelia Parker", "Howard Hodgkin", "The Otolith Group", "Wolfgang Tillmans", "Lisa Milroy", "Barnett Newman", "Mark Rothko"]);

// ───── 재료 ─────
type M = [string, string];
const OC: M = ["캔버스에 유채", "Oil paint on canvas"];
const OM: M = ["마호가니 패널에 유채", "Oil paint on mahogany"];
const WC: M = ["종이에 수채", "Watercolour on paper"];
const GWC: M = ["종이에 과슈, 수채", "Gouache and watercolour on paper"];
const GGW: M = ["종이에 과슈, 흑연, 수채", "Gouache, graphite and watercolour on paper"];
const GRW: M = ["종이에 흑연, 수채", "Graphite and watercolour on paper"];
const ENG: M = ["종이에 인그레이빙", "Engraving on paper"];
const BOOK: M = ["서적", "Book"];
const MAG: M = ["잡지", "Magazine"];

// ───── 소장처 ─────
type C = [string, string, string?];
const TB = (acc: string): C => ["테이트 미술관 (터너 유증, 1856)", "Tate, accepted by the nation as part of the Turner Bequest 1856", acc];
const TATE = (en: string, acc: string): C => ["테이트 미술관", `Tate, ${en}`, acc];
const KORIYAMA: C = ["고리야마 시립미술관", "Koriyama City Museum of Art"];
const SHIZUOKA: C = ["시즈오카 현립미술관", "Shizuoka Prefectural Museum of Art"];
const POLY: C = ["도쿄공예대학 나카노 도서관", "Tokyo Polytechnic University Nakano Library"];
const NMWA_LIB: C = ["국립서양미술관 연구자료센터", "The Research Library of the National Museum of Western Art, Tokyo"];

type Y = [string, string];
type Opt = { object?: boolean; sizeNote?: string };
type Row = [string, A, string, string, string, Y, M, C, string?, Opt?];

const groups: Record<string, Row[]> = {
  prelude: [
    ["1", AFTER, "터너의 초상 (윌리엄 홀 판각)", "Portrait of Turner, engraved by W. Holl", "ターナーの肖像（ウィリアム・ホールによる版刻）", ["1859–61년 간행", "Published 1859–61"], ENG, TATE("transferred from the British Museum 1988", "T06300"), "15.0×12.0", { sizeNote: "화면 크기" }],
    ["2", TURNER, "달빛, 밀뱅크에서의 습작", "Moonlight, a Study at Millbank", "月光、ミルバンクでの習作", ["1797년 출품", "Exhibited 1797"], OM, TB("N00459"), "31.4×40.3"],
    ["3", TURNER, "브리엔츠 마을과 호수 — 달빛", "The Lake and Town of Brienz: Moonlight", "ブリエンツの町と湖－－月光", ["1806–09년경", "c. 1806–09"], WC, TB("D04898"), "28.5×40.0"],
    ["4", TURNER, "폐허의 달빛", "Moonlight among Ruins", "廃墟の月光", ["1820년경", "c. 1820"], WC, TB("D17165"), "33.1×49.4"],
    ["5", TURNER, "어느 빌라 (빌라 마다마 — 달빛), 새뮤얼 로저스 『이탈리아』를 위하여", "A Villa (Villa Madama – Moonlight), for Rogers’s ‘Italy’", "あるヴィッラ（ヴィッラ・マダーマ－－月光）、サミュエル・ロジャーズ著『イタリア』のために", ["1826–27년경", "c. 1826–27"], WC, TB("D27676"), "24.1×29.7"],
    ["6", TURNER, "『일식 스케치북』", "Eclipse Sketchbook", "『日食のスケッチブック』", ["1804년", "1804"], GRW, TB("D05251"), "16.6×11.2", { sizeNote: "스케치북 한 면" }],
    ["7", ["케이티 패터슨", "Katie Paterson", "1981–"], "토털리티 (개기식 / 전체성)", "Totality", "Totality （皆既食／全体性）", ["2016년", "2016"], ["혼합 매체", "Mixed media"], ["개인 소장", "Private collection"], undefined, { object: true }],
  ],
  ch1: [
    ["8", TURNER, "컴벌랜드, 코니스턴 산지의 아침", "Morning amongst the Coniston Fells, Cumberland", "コニストン山脈の朝、カンバーランド", ["1798년 출품", "Exhibited 1798"], OC, TB("N00461"), "122.9×89.9"],
    ["9", TURNER, "카나번성", "Caernarvon Castle", "カナーヴォン城", ["1798년경", "c. 1798"], ["소나무 패널에 유채", "Oil paint on pine"], TB("N01867"), "15.2×23.2"],
    ["10", TURNER, "웨일스 풍경 — 마을과 성이 있는 산악 풍경, 저녁", "View in Wales: Mountain Scene with Village and Castle – Evening", "ウェールズの景観－－村と城のある山岳風景－－夕暮れ", ["1799–1800년경", "c. 1799–1800"], OC, TB("N00466"), "58.1×72.7"],
    ["11", TURNER, "호수와 쓰러진 나무가 있는 풍경", "Landscape with Lake and Fallen Tree", "湖と倒木のある風景", ["1800년경(?)", "?c. 1800"], OC, TB("N03557"), "39.1×60.6"],
    ["12", TURNER, "스키리드 농장과 아스구리드 산", "Skyrrid Farm and Ysgyryd Fawr", "スキリッド農場とアスグリッド山", ["1792년", "1792"], GRW, TB("D00144"), "34.0×24.1"],
    ["13", TURNER, "스키리드 농장과 아스구리드 산", "Skyrrid Farm and Ysgyryd Fawr", "スキリッド農場とアスグリッド山", ["1792년", "1792"], GRW, TB("D00145"), "28.5×37.2"],
    ["14", TURNER, "코니스턴의 계류", "Mountain Stream, Coniston", "コニストンの荒地", ["1797년경", "c. 1797"], ["종이에 수채, 흑연", "Watercolour and graphite on paper"], KORIYAMA],
    ["15", TURNER, "트라이스 마우르에서 본 글라슬린강(?)", "?The Glaslyn from Traeth Mawr", "トライス・マウルから見たグラスリン川（?）", ["1799년(?)", "?1799"], GGW, TB("D03648"), "56.1×73.7"],
    ["16", TURNER, "난틀레 호수 너머로 바라본 이 가른 산, 멀리 스노든산", "Y Garn with Snowdon in the Distance, from above Llyn Nantlle", "ナントル湖越しに望むイ・ガルン山、遠方にスノードン山", ["1799–1800년경", "c. 1799–1800"], GGW, TB("D03649"), "55.7×76.8"],
    ["17", TURNER, "스노든산을 바라보는 난틀레 호수", "Llyn Nantlle with Snowdon Beyond", "スノードン山を望むナントル湖", ["1799–1800년경", "c. 1799–1800"], GGW, TB("D03650"), "55.6×26.8"],
    ["18", TURNER, "에드워드 1세의 음유시인 학살", "The Destruction of the Bards by Edward I", "エドワード1世による吟遊詩人の虐殺", ["1799–1800년경", "c. 1799–1800"], GWC, TB("D04168"), "68.6×100.0"],
    ["19", TURNER, "컴벌랜드주의 콜더 브리지", "Calder Bridge, Cumberland", "カンバーランド州のコールダー・ブリッジ", ["1810년", "1810"], OC, KORIYAMA],
    ["20", TURNER, "다트무어와 데번 지방의 풍경 (『데번 강 스케치북』 제1권에서)", "Scenery from Dartmoor and Devon areas (Page in the Devon Rivers, No.1 Sketchbook)", "ダートムーアとデヴォン地方の風景（『デヴォン川のスケッチブック』第1冊より）", ["1814년", "1814"], ["종이에 흑연", "Graphite on paper"], TB("D09660"), "9.0×15.2", { sizeNote: "스케치북 한 면" }],
    ["21", LONG, "다트무어 걷기", "Dartmoor Walks", "ダートムーアでの歩行", ["1972년", "1972"], ["종이에 스크린프린트, 리소그래프", "Screenprint and lithograph on paper"], TATE("purchased 1973", "P07082"), "58.4×48.9"],
    ["22", LONG, "다트무어에서의 곧은 12마일 걷기 두 번, 잉글랜드, 1980", "Two Straight Twelve Mile Walks on Dartmoor, England 1980", "ダートムーアでのふたつの真っ直ぐな12マイルの歩行、イングランド、1980年", ["1980년", "1980"], ["종이에 스크린프린트", "Screenprint on paper"], TATE("purchased 1980", "T03161"), "102.2×152.1"],
    ["23", LONG, "레드 슬레이트 서클", "Red Slate Circle", "レッド・スレート・サークル", ["1988년", "1988"], ["슬레이트", "Slate"], TATE("purchased with funds provided by the Estate of Tom Bendhem 2004", "T11884"), undefined, { object: true, sizeNote: "바닥 설치, 지름 약 400cm" }],
  ],
  ch2: [
    ["24", TURNER, "드라크강에서 본 그르노블, 멀리 몽블랑", "Grenoble Seen from the River Drac with Mont Blanc in the Distance", "ドラック川から見たグルノーブル、遠方にモン・ブランを望む", ["1802년경", "c. 1802"], OC, TB("N02988"), "36.2×64.1"],
    ["25", TURNER, "성이 있는 산악 풍경, 아마도 마르티니", "Mountain Scene with Castle, Probably Martigny", "城のある山岳風景、おそらくマルティニーの風景", ["1802–03년경", "c. 1802–03"], OC, TB("N00465"), "43.8×54.0"],
    ["26", TURNER, "그리종주의 눈사태", "The Fall of an Avalanche in the Grisons", "グリゾン州の雪崩", ["1810년 출품", "Exhibited 1810"], OC, TB("N00489"), "90.2×120.0"],
    ["27", TURNER, "그린델발트 아래 빙하, 아이거를 바라보며", "The Lower Glacier, Grindelwald, with the Eiger", "グリンデルヴァルト下氷河、アイガーを望む", ["1802년", "1802"], ["종이에 초크, 과슈, 흑연", "Chalk, gouache and graphite on paper"], TB("D04537"), "21.0×28.2"],
    ["28", TURNER, "부아 빙하와 메르 드 글라스 빙하 아래 아르베롱강의 수원", "The Source of the Arveyron below the Glacier du Bois and Mer de Glace", "ボワ氷河とメール・ド・グラス氷河の下方にあるアルヴェロン川の水源", ["1802년", "1802"], ["종이에 흑연, 수채, 과슈", "Graphite, watercolour and gouache on paper"], TB("D04613"), "31.3×46.8"],
    ["29", TURNER, "아르베롱강의 수원", "The Source of the Arveyron", "アルヴェロン川の水源", ["1802년", "1802"], GGW, TB("D04887"), "54.6×72.2"],
    ["30", TURNER, "샤모니 위에서 본 부아 빙하, 위로 드뤼 침봉과 베르트 침봉 — 저녁", "The Glacier du Bois from above Chamonix, with the Aiguilles du Dru and Verte above: Evening", "シャモニー上部から見たボワ氷河、上方にドリュ針峰とヴェルト針峰－－夕暮れ", ["1836년", "1836"], GRW, TB("D25439"), "26.0×28.0"],
    ["31", ["올라퍼 엘리아슨", "Olafur Eliasson", "1967–"], "녹는 빙하 시리즈 1999/2019", "The glacier melt series 1999/2019", "溶ける氷河のシリーズ 1999/2019", ["2019년", "2019"], ["C프린트 (30쌍)", "30 pairs of images, chromogenic prints on paper"], TATE("purchased with funds provided by the New Carlsberg Foundation 2021", "P82635")],
    ["32", TURNER, "산과 탑이 있는 계곡", "Valley with Mountains and Tower", "山岳と塔のある渓谷", ["1830년경 이후", "After c. 1830"], GRW, TB("D36062"), "25.4×30.2"],
    ["33", TURNER, "산속의 폭포", "Waterfall among Mountains", "山あいの滝", ["1830년경 이후", "After c. 1830"], GRW, TB("D36086"), "24.5×34.5"],
    ["35", TURNER, "리기산 정상에서 본 일몰", "Sunset from the Top of the Rigi", "リギ山の頂から見た日没", ["1844년경", "c. 1844"], OC, TB("N05486"), "71.1×96.5"],
  ],
  ch3: [
    ["37", TURNER, "아폴론과 피톤", "Apollo and Python", "アポロンとピュトン", ["1811년 출품", "Exhibited 1811"], OC, TB("N00488"), "145.4×237.5"],
    ["38", TURNER, "악타이온의 죽음, 멀리 아오스타 계곡의 몽조베", "The Death of Actaeon, with a Distant View of Montjovet, Val d’Aosta", "アクタイオンの死、遠景にアオスタ渓谷のモンジョヴェを望む", ["1837년경", "c. 1837"], OC, TB("A00909"), "149.2×111.1"],
    ["39", TURNER, "티볼리 — 토비아스와 천사", "Tivoli: Tobias and the Angel", "ティヴォリ－－トビアスと天使", ["1835년경", "c. 1835"], OC, TB("N02067"), "90.5×121.0"],
    ["40", TURNER, "아폴론과 다프네 이야기", "Story of Apollo and Daphne", "アポロンとダフネの物語", ["1837년 출품", "Exhibited 1837"], OM, TB("N00520"), "109.9×198.8"],
    ["41", TURNER, "바쿠스와 아리아드네", "Bacchus and Ariadne", "バッカスとアリアドネ", ["1840년 출품", "Exhibited 1840"], OC, TB("N00525"), "78.7×78.7", { sizeNote: "원형 화면" }],
    ["42", TURNER, "풍경 — 탬버린을 든 여인", "Landscape: Woman with Tambourine", "風景－－タンバリンをもつ女", ["1840–50년경", "c. 1840–50"], OC, ["도치기 현립미술관", "Tochigi Prefectural Museum of Fine Arts"]],
    ["43", ["코닐리아 파커", "Cornelia Parker", "1956–"], "여백을 위한 방", "Room for Margins", "余白のための部屋", ["1998년", "1998"], ["잉크와 먼지가 밴 캔버스 안감", "Canvas lining with ingrained dust and ink"], TATE("presented by the artist 2000", "T07634–T07643"), undefined, { sizeNote: "10점 연작" }],
  ],
  ch4: [
    ["44", TURNER, "베네치아의 탄식의 다리, 두칼레 궁전, 세관 — 카날레토의 그림", "Bridge of Sighs, Ducal Palace and Custom-House, Venice: Canaletti Painting", "ヴェネツィアの溜息橋、ドゥカーレ宮殿、税関－－カナレット風絵画", ["1833년 출품", "Exhibited 1833"], OM, TATE("presented by Robert Vernon 1847", "N00370"), "51.1×81.6"],
    ["45", TURNER, "베네치아 — 산타 마리아 델라 살루테 성당", "Venice – Maria della Salute", "ヴェネツィア－－サンタ・マリア・デッラ・サルーテ聖堂", ["1844년 출품", "Exhibited 1844"], OC, TB("N00539"), "61.3×92.1"],
    ["46", TURNER, "베네치아 — 정오", "Venice – Noon", "ヴェネツィア－－昼", ["1845년 출품", "Exhibited 1845"], OC, TB("N00541"), "61.0×91.8"],
    ["47", TURNER, "베네치아 — 일몰, 어부", "Venice – Sunset, a Fisher", "ヴェネツィア－－日没、漁師", ["1845년 출품", "Exhibited 1845"], OC, TB("N00542"), "61.3×92.1"],
    ["48", TURNER, "베네치아의 선착장, 두칼레 궁전", "Venice Quay, Ducal Palace", "ヴェネツィアの船着場、ドゥカーレ宮殿", ["1844년 출품", "Exhibited 1844"], OC, TB("N00540"), "62.2×92.7"],
    ["49", TURNER, "호텔 에우로파에서 본 베네치아의 지붕들 — 산마르코 종탑, 두칼레 궁전, 산조르조 마조레 성당", "The Rooftops of Venice, with the Campanile of San Marco (St Mark’s), Palazzo Ducale (Doge’s Palace) and San Giorgio Maggiore, from the Hotel Europa (Palazzo Giustinian)", "オテル・エウローパ（パラッツォ・ジュスティニアン）から見たサン・マルコ広場の鐘楼、ドゥカーレ宮殿、サン・ジョルジョ・マッジョーレ聖堂を含むヴェネツィアの街並み", ["1840년", "1840"], WC, TB("D35882"), "18.8×28.4"],
    ["50", TURNER, "베네치아 주데카 운하, 세관 앞바다에 정박한 배들, 멀리 산마르코 종탑과 두칼레 궁전", "The Canale della Giudecca, Venice, with Boats Moored off the Dogana, and the Campanile of San Marco (St Mark’s) and Palazzo Ducale (Doge’s Palace) Beyond", "ヴェネツィアのジュデッカ運河、税関の沖合に停泊する舟、遠方にサン・マルコ広場の鐘楼とドゥカーレ宮殿", ["1840년", "1840"], WC, TB("D32172"), "24.7×30.8"],
    ["51", TURNER, "산마르코만에서 본 몰로와 피아체타, 두칼레 궁전, 산마르코 종탑, 멀리 살루테 성당", "The Molo and Piazzetta, Venice, from the Bacino, with the Palazzo Ducale (Doge’s Palace), the Campanile of San Marco (St Mark’s), and Santa Maria della Salute in the Distance", "ヴェネツィアのサン・マルコ湾から見たモーロ岸壁と小広場、ドゥカーレ宮殿、サン・マルコ広場の鐘楼、遠方にサンタ・マリア・デッラ・サルーテ聖堂", ["1840년", "1840"], GWC, TB("D32180"), "19.3×27.9"],
    ["52", TURNER, "세관 앞바다, 산마르코만에 뜬 배들, 멀리 산마르코 종탑과 두칼레 궁전", "Boats on the Bacino, Venice, off the Dogana, with the Campanile of San Marco (St Mark’s) and Palazzo Ducale (Doge’s Palace) Beyond", "税関の沖合、サン・マルコ湾に浮かぶ舟、遠方にサン・マルコ広場の鐘楼とドゥカーレ宮殿", ["1840년(?)", "?1840"], GGW, TB("D32205"), "19.3×28.1"],
    ["53", TURNER, "카날 그란데, 산 시메오네 피콜로 성당, 해 질 녘", "The Grand Canal, Venice, with the Church of San Simeone Piccolo, at Dusk", "カナル・グランデ、サン・シメオン・ピッコロ聖堂、夕暮れ", ["1840년", "1840"], ["종이에 수채, 과슈, 펜, 잉크", "Watercolour, gouache, pen and ink on paper"], TB("D32124"), "21.9×32.0"],
    ["54", TURNER, "저녁의 베네치아, 주데카 운하에서 본 세관의 주랑, 멀리 산마르코 종탑", "The Porch of the Dogana from the Canale della Giudecca, Venice, at Evening, with the Campanile of San Marco (St Mark’s) Beyond", "夕刻のヴェネツィア、ジュデッカ運河から見た税関の柱廊、遠方にサン・マルコ広場の鐘楼", ["1840년", "1840"], GRW, TB("D32151"), "22.2×29.9"],
    ["55", TURNER, "호텔 에우로파에서 카날 그란데 너머로 본 저녁의 살루테 성당", "Santa Maria della Salute, Venice, across the Grand Canal from the Hotel Europa (Palazzo Giustinian) in Evening Light", "ヴェネツィアのサンタ・マリア・デッラ・サルーテ聖堂、オテル・エウローパ（パラッツォ・ジュスティニアン）からカナル・グランデ越しに見た夕刻の情景", ["1840년", "1840"], GWC, TB("D32249"), "14.8×21.8"],
    ["56", TURNER, "밤의 세관, 호텔 에우로파의 계단에서 카날 그란데 너머로 본 풍경", "The Dogana, Venice, across the Grand Canal from the Steps of the Hotel Europa (Palazzo Giustinian) at Night", "夜の税関、オテル・エウローパ（パラッツォ・ジュスティニアン）の階段からカナル・グランデ越しに見た情景", ["1840년", "1840"], ["종이에 초크, 과슈, 수채", "Chalk, gouache and watercolour on paper"], TB("D32238"), "23.2×31.2"],
    ["57", ["하워드 호지킨", "Howard Hodgkin", "1932–2017"], "베네치아, 아침", "Venice, Morning", "ヴェネツィア、朝", ["1995년", "1995"], ["종이에 에칭, 애쿼틴트, 손 채색", "Etching, aquatint and hand colouring on paper"], TATE("presented by the artist 1998", "P20166"), "160.0×196.0"],
    ["59", KURIHARA, "쓰키시마의 저녁", "Evening in Tsukishima", "月島の夕", ["1909년", "1909"], OC, ["미시마시 향토자료관", "Mishima City Local Museum"]],
    ["60", KURIHARA, "베니스의 항구", "Port of Venice", "ヴェニスの港", ["제작연도 미상", "Date unknown"], OC, SHIZUOKA],
    ["R-1", ["나쓰메 소세키", "Natsume Sōseki", "1867–1916"], "「도련님」 『호토토기스』 제9권 제7호 부록, pp. 1–148", "‘Botchan’, Hototogisu (The Cuckoo) vol.9, no.7, appendix, pp. 1–148", "「坊っちやん」『ホトトギス』第9巻第7号附録、 pp. 1–148", ["1906년", "1906"], MAG, ["도쿄대학 종합도서관", "The University of Tokyo General Library"]],
  ],
  ch5: [
    ["61", TURNER, "폭풍의 바다와 불타는 난파선", "Stormy Sea with Blazing Wreck", "嵐の海と燃える難破船", ["1835–40년경", "c. 1835–40"], OC, TB("N04658"), "99.4×141.6"],
    ["62", TURNER, "거친 바다와 난파선 잔해", "Rough Sea with Wreckage", "荒海と難破船", ["1840–45년경", "c. 1840–45"], OC, TB("N01980"), "92.1×122.6"],
    ["63", TURNER, "에디스톤 등대(?)", "?The Eddystone Lighthouse", "エディストン灯台(？）", ["1817년경", "c. 1817"], WC, TB("D17171"), "36.8×49.3"],
    ["64", TURNER, "바다 폭풍의 비녜트 습작, 토머스 캠벨 『시집』을 위하여", "Vignette Study of Storm at Sea, for Campbell’s ‘Poetical Works’", "海上の嵐のヴィニェット習作、トマス・キャンベル著『詩集』のために", ["1835–36년경", "c. 1835–36"], WC, TB("D27568"), "18.1×22.7"],
    ["65", TURNER, "폭풍 치는 해안 앞바다의 증기선과 범선", "A Steamer and a Sailing Ship off the Coast in a Storm", "嵐の海岸沖の蒸気船と帆船", ["1820–40년경", "c. 1820–40"], WC, TB("D35991"), "25.6×28.0"],
    ["66", TURNER, "폭풍 속의 배", "Ship in a Storm", "嵐のなかの船", ["1826년경", "c. 1826"], ["종이에 메조틴트", "Mezzotint on paper"], TATE("transferred from the British Museum 1990", "T05726"), "15.1×21.3", { sizeNote: "화면 크기" }],
    ["68", TURNER, "물속에서 몸부림치는 사람들", "Group of Figures Struggling in Water", "水中でもがく人物たち", ["1804–05년경", "c. 1804–05"], ["종이에 펜, 잉크, 흑연", "Pen, ink and graphite on paper"], TB("D08239"), "40.1×32.7"],
    ["69", AFTER, "난파선 (윌리엄 밀러 판각)", "The Shipwreck, engraved by W. Miller", "難破船（ウィリアム・ミラーによる版刻）", ["1859–61년 간행", "Published 1859–61"], ENG, TATE("transferred from the British Museum 1988", "T06307")],
    ["70", AFTER, "노예선 (로버트 호스킨 판각)", "The Slave Ship, engraved by Robert Hoskin", "奴隷船（ロバート・ホスキンによる版刻）", ["1879년경", "c. 1879"], ENG, TATE("transferred from the British Museum 1988", "T06374")],
    ["71", ["오톨리스 그룹", "The Otolith Group", "2002년 결성"], "Hydra Decapita (히드라의 참수)", "Hydra Decapita", "Hydra Decapita（ヒュドラの斬首）", ["2010년", "2010"], ["HD 비디오, 프로젝션, 컬러, 사운드", "High definition video, projection, colour and sound"], TATE("presented by Tate Members 2018", "T15029")],
    ["72", TURNER, "포경선 에레버스호 만세! 또 한 마리 잡았다!", "Hurrah! for the Whaler Erebus! Another Fish!", "捕鯨船エレバス号に万歳！ もう一頭獲ったぞ！", ["1846년 출품", "Exhibited 1846"], OC, TB("N00546"), "90.2×120.6"],
    ["73", TURNER, "작살 맞은 고래", "A Harpooned Whale", "銛を打たれた鯨", ["1845년", "1845"], GRW, TB("D35391"), "23.8×33.6"],
  ],
  ch6: [
    ["74", TURNER, "헬레보에츨라위스에서 출항하는 위트레흐트 시티 64호", "Helvoetsluys; the City of Utrecht, 64, Going to Sea", "ヘレヴーツリュイスから出航するユトレヒトシティ64号", ["1832년", "1832"], OC, ["도쿄 후지 미술관", "Tokyo Fuji Art Museum"]],
    ["75", TURNER, "이스트 카우스 곶 앞바다의 배들", "Shipping off East Cowes Headland", "イースト・カウズの岬からの船出", ["1827년", "1827"], OC, TB("N01999"), "46.0×60.3"],
    ["76", TURNER, "서쪽에서 본 브라이턴 해변, 멀리 체인 피어", "Brighton Beach, with the Chain Pier in the Distance, from the West", "西から見たブライトン・ビーチ、遠方にチェーン桟橋", ["1827년경, 1843년 이후 가필", "c. 1827, after 1843"], OC, TB("N01986"), "91.3×121.9"],
    ["77", TURNER, "초승달 — 혹은 “내 배를 잃어버렸으니, 네 굴렁쇠도 안 줄 거야”", "The New Moon; or, ‘I’ve lost My Boat, You shan’t have Your Hoop’", "新月－－あるいは「ボートを失った、きみにフープはやらない」", ["1840년 출품", "Exhibited 1840"], OM, TB("N00526"), "65.4×81.3"],
    ["78", TURNER, "평평한 해변에 부서지는 파도", "Breakers on a Flat Beach", "平らな浜辺に打ち寄せる白波", ["1835–40년경", "c. 1835–40"], OC, TB("N01987"), "90.2×121.0"],
    ["79", TURNER, "부표가 있는 바다 풍경", "Seascape with Buoy", "浮標のある海景", ["1840년경", "c. 1840"], OC, TB("N05477"), "91.4×121.9"],
    ["80", ["볼프강 틸만스", "Wolfgang Tillmans", "1968–"], "The State We’re In, A (우리가 처한 상황, A)", "The State We’re In, A", "The State We’re In, A （われわれが置かれている状況、 A）", ["2015년", "2015"], ["종이에 잉크젯 프린트, 바인더 클립", "Inkjet print on paper and binder clips"], TATE("presented by the artist and Maureen Paley, in honour of Sir Nicholas Serota 2017", "P20830"), undefined, { sizeNote: "가로 4m 이상" }],
    ["81", TURNER, "바다와 하늘 습작, 와이트섬", "Study of Sea and Sky, Isle of Wight", "海と空の習作、ワイト島", ["1827년", "1827"], OC, TB("N02001"), "32.1×50.2"],
    ["82", TURNER, "물가 풍경 위로 펼쳐진 저녁놀, 혹은 아침놀", "Sunset or Dawn above a Landscape with Water", "水辺の風景の上方に広がる夕焼け、あるいは朝焼け", ["1826–40년경", "c. 1826–40"], GWC, TB("D29026"), "14.1×18.5"],
    ["83", TURNER, "바다와 하늘", "Sea and Sky", "海と空", ["1820–30년경", "c. 1820–30"], WC, TB("D25239"), "30.1×48.5"],
    ["84", TURNER, "나무 꼭대기와 하늘, 길퍼드성(?), 저녁", "Tree Tops and Sky, Guildford Castle(?), Evening", "木々の梢と空、ギルフォード城（？）、夕暮れ", ["1807년(?)", "?1807"], ["마호가니 베니어 패널에 유채", "Oil paint on mahogany veneer"], TB("N02309"), "27.6×73.7"],
    ["85", TURNER, "새벽, 혹은 해 질 녘의 높은 구름", "High Clouds at Dawn or Sunset", "夜明け、あるいは日没の高層雲", ["1815–30년경", "c. 1815–30"], WC, TB("D25259"), "30.2×43.9"],
    ["86", TURNER, "저녁 구름", "Clouds at Sunset", "夕暮れの雲", ["1823–30년경", "c. 1823–30"], ["종이에 수채, 과슈", "Watercolour and gouache on paper"], TB("D25331"), "24.3×34.0"],
    ["87", TURNER, "풍경 위에 뜬 구름", "Clouds above a Landscape", "風景に浮かぶ雲", ["1828–40년경", "c. 1828–40"], WC, TB("D25415"), "16.0×24.4"],
    ["88", MILROY, "하늘", "Sky", "空", ["1997년", "1997"], ["종이에 모노프린트", "Monoprint on paper"], TATE("purchased 1998", "P78093"), "43.8×51.8"],
    ["89", MILROY, "하늘", "Sky", "空", ["1997년", "1997"], ["종이에 모노프린트", "Monoprint on paper"], TATE("purchased 1998", "P78092"), "54.7×42.0"],
    ["90", KURIHARA, "바다 위의 해돋이", "Sunrise on the Ocean", "洋上の日の出", ["1924년 이후", "After 1924"], WC, SHIZUOKA],
  ],
  colour: [
    ["91", TURNER, "새벽의 호수, 혹은 강가의 나무들", "Trees by a Lake or River at Dawn", "夜明けの湖、あるいは川のほとりの木々", ["1820–40년경", "c. 1820–40"], WC, TB("D25182"), "35.1×51.0"],
    ["92", TURNER, "바다와 하늘, 잉글랜드(?)", "Sea and Sky, ?England", "海と空、イングランド（？）", ["1820–30년경", "c. 1820–30"], GRW, TB("D25452")],
    ["93", TURNER, "저녁 풍경 위에 뜬 구름", "Clouds above a Landscape at Sunset", "夕暮れの風景に浮かぶ雲", ["1820–40년경", "c. 1820–40"], GWC, TB("D25424"), "17.2×24.0"],
    ["94", TURNER, "탕카르빌 — 색채 습작", "Tancarville: Colour Study", "タンカルヴィル－－色彩の習作", ["1839년경", "c. 1839"], ["흰 웨이브지에 수채", "Watercolour on white wove paper"], TB("D25199"), "31.1×48.8"],
    ["95", TURNER, "비기닝", "A Beginning", "ビギニング", ["1830년경 이후", "After c. 1830"], ["종이에 초크, 수채", "Chalk and watercolour on paper"], TB("D36044"), "24.9×37.1"],
    ["96", TURNER, "색채 시험", "Colour Trials", "色彩のトライアル", ["1797년경", "c. 1797"], WC, TB("D40105"), "15.0×18.0"],
    ["97", TURNER, "색채 테스트", "Colour Tests", "色彩のテスト", ["1799–1807년경", "c. 1799–1807"], WC, TB("D41466")],
    ["98", TURNER, "강의용 도해 — 색상환 No. 2", "Lecture Diagram: Colour Circle No. 2", "講義用のダイアグラム－－色彩環 No. 2", ["1824–28년경", "c. 1824–28"], GRW, TB("D17150"), "55.0×75.8"],
    ["R-3", GOETHE, "『색채론』 제1권, 튀빙겐: J.G. 코타", "Zur Farbenlehre, 1. Bd., Tübingen: J.G. Cotta", "『色彩論』第1巻、テュービンゲン：J.G. コッタ", ["1810년", "1810"], BOOK, POLY],
    ["R-4", GOETHE, "『색채론』 제2권, 튀빙겐: J.G. 코타", "Zur Farbenlehre, 2. Bd., Tübingen: J.G. Cotta", "『色彩論』第2巻、テュービンゲン：J.G. コッタ", ["1810년", "1810"], BOOK, POLY],
    ["R-5", GOETHE, "『괴테 「색채론」의 해설을 곁들인 도판 16점』, 튀빙겐: J.G. 코타", "Sechszehn Tafeln nebst der Erklärung zu Goethe’s Farbenlehre, Tübingen: J.G. Cotta", "『ゲーテ『色彩論』の解説をともなう16点の図版』、テュービンゲン：J.G. コッタ", ["1810년", "1810"], BOOK, POLY],
    ["R-6", ["파울 클레", "Paul Klee", "1879–1940"], "『바우하우스 총서 2 — 교육 스케치북』, 뮌헨: A. 랑겐", "Bauhausbücher 2: Pädagogisches Skizzenbuch, München: A. Langen", "『バウハウス叢書2 教育スケッチブック』ミュンヘン：A. ランゲン", ["1925년", "1925"], BOOK, ["오사카 나카노시마 미술관", "Nakanoshima Museum of Art, Osaka"]],
    ["R-7", ["존 러스킨", "John Ruskin", "1819–1900"], "『근대 화가론』 전5권 (완전 보급판), 켄트주 오핑턴, 서니사이드: 조지 앨런", "Modern Painters, Complete Edition, 5 vols., Sunnyside, Orpington, Kent: G. Allen", "『近代画家論』全5巻（完全普及版）、ケント州オルピントン、サニーサイド：ジョージ・アレン", ["1888년", "1888"], BOOK, NMWA_LIB],
  ],
  ch7: [
    ["99", TURNER, "물이 있는 풍경", "Landscape with Water", "水のある風景", ["1840–45년경", "c. 1840–45"], OC, TB("N05513"), "121.9×182.2"],
    ["100", TURNER, "페트워스의 긴 지하실", "The Long Cellar at Petworth", "ペットワースの長い地下室", ["1835년경", "c. 1835"], OM, TB("N05539"), "74.9×91.4"],
    ["101", TURNER, "베네치아 정경", "Venetian Scene", "ヴェネツィアの情景", ["1840–45년경", "c. 1840–45"], OC, TB("N05482"), "79.4×78.7"],
    ["102", TURNER, "살루테 성당이 있는 베네치아", "Venice with the Salute", "サンタ・マリア・デッラ・サルーテ聖堂のあるヴェネツィア風景", ["1840–45년경", "c. 1840–45"], OC, TB("N05487"), "62.2×92.7"],
    ["103", TURNER, "베네치아, 스키아보니 강변 — 물 위의 축제", "Riva degli Schiavoni, Venice: Water Fête", "ヴェネツィア、スキアヴォーニ河岸－－水上祭", ["1845년경", "c. 1845"], OC, TB("N04661"), "72.4×113.0"],
    ["104", TURNER, "루체른 호수 — 브루넨 위에서 본 우리만", "Lake Lucerne: the Bay of Uri from above Brunnen", "ルツェルン湖－－ブルンネンから見たウーリ湾", ["1844년경", "c. 1844"], OC, TB("N05476"), "72.7×98.3"],
    ["105", TURNER, "바다 풍경", "Seascape", "海景", ["1835–40년경", "c. 1835–40"], OC, TB("N05515"), "90.2×121.0"],
    ["106", TURNER, "바람을 거슬러 부서지는 파도", "Waves Breaking against the Wind", "風に砕ける波", ["1840년경", "c. 1840"], OC, TB("N02881"), "60.4×95.0"],
    ["107", TURNER, "거친 바다와 돌고래", "Stormy Sea with Dolphins", "荒海とイルカ", ["1835–40년경", "c. 1835–40"], OC, TB("N04664"), "90.2×121.3"],
    ["108", ["바넷 뉴먼", "Barnett Newman", "1905–1970"], "밤의 여왕 I", "Queen of the Night I", "夜の女王 I", ["1951년", "1951"], OC, ["국립국제미술관 (오사카)", "The National Museum of Art, Osaka"]],
    ["109", TURNER, "세 개의 바다 풍경", "Three Seascapes", "三つの海景", ["1827년경", "c. 1827"], OC, TB("N05491"), "90.8×60.3"],
    ["110", ["마크 로스코", "Mark Rothko", "1903–1970"], "무제", "Untitled", "無題", ["1969년", "1969"], ["종이에 아크릴", "Acrylic paint on paper"], TATE("presented by the Mark Rothko Foundation 1986", "T04149"), "173.0×123.5"],
    ["R-8", ["로버트 로젠블럼", "Robert Rosenblum", "1927–2006"], "「추상적 숭고」 『아트뉴스』 제59권 제10호", "‘The Abstract Sublime’ in ARTnews, vol.59, no.10, pp. 38–41, 56–8", "「抽象的崇高」『アートニュース』第59巻第10号", ["1961년 2월", "February 1961"], MAG, NMWA_LIB],
    ["R-9", ["로런스 고잉", "Lawrence Gowing", "1918–1991"], "「터너 — 상상과 현실」전 카탈로그, 뉴욕 현대미술관", "‘Turner: Imagination and Reality’, Exhibition Catalogue, New York: Museum of Modern Art", "「ターナー─想像と現実」展カタログ、ニューヨーク近代美術館", ["1966년", "1966"], BOOK, ["개인 소장", "Private collection"]],
  ],
};

export const works: Work[] = chapters.flatMap((c) =>
  groups[c.id].map(([no, [artistKo, artist, life], titleKo, title, titleJa, [year, yearEn], [mediumKo, medium], [collectionKo, collection, acc], size, opt = {}]) => ({
    no,
    ref: no.startsWith("R-"),
    chapter: c.id,
    artistKo,
    artist,
    life,
    titleKo,
    title,
    titleJa,
    year,
    yearEn,
    mediumKo,
    medium,
    collectionKo,
    collection,
    acc,
    size,
    sizeNote: opt.sizeNote,
    object: !!opt.object,
    modern: MODERN.has(artist),
    docent: docent[no] ?? { script: [], look: [] },
    highlight: HIGHLIGHTS.has(no),
  })),
);

export const chapterOf = (no: string) => chapters.find((c) => c.id === works.find((w) => w.no === no)?.chapter) ?? chapters[0];
export const chapterById = (id: string) => chapters.find((c) => c.id === id) ?? chapters[0];
