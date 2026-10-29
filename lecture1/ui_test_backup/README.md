# ui_test

React + Vite + MUI 기반으로 UI 요소 16종을 섹션 단위로 추가해 나가는 프로젝트입니다.

## 실행

```bash
npm install
npm run dev
```

## 디렉토리 구조

```
src/
├── components/
│   ├── sections/          # UI 섹션별 컴포넌트
│   │   ├── index.js       # 섹션 등록 목록 (순서대로 렌더링)
│   │   └── SectionWrapper.jsx  # 섹션 공통 레이아웃
│   └── ui/                # 개별 UI 요소 컴포넌트
├── styles/
│   └── global.css         # 전역 스타일
├── theme.js               # MUI 테마
├── App.jsx                # 기본 레이아웃
└── main.jsx               # ThemeProvider 적용
```

## 섹션 추가 방법

1. `src/components/sections/ButtonSection.jsx` 생성 (`SectionWrapper`로 감싸기)
2. `src/components/sections/index.js`의 배열 끝에 등록
