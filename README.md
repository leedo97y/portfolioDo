# 📁 PortfoiloDo

<br/>

## 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/TailwindCss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/> <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"/>

<br/>
<br/>

## 프로젝트 설명

포트폴리오는 프로필 부분과 프로젝트 부분으로 이루어져 있으며 반응형으로 구성되어있습니다.

포트폴리오의 모든 데이터는 각 페이지에서 찾을 필요없이 한번에 관리하기 위해 `data.json`이라는 파일을 만들어 작성하고, 이를 fetch하여 사용하고 있습니다.

프로젝트 상세설명은 다음과 같습니다.

- ### 프로필 부분

  - 반응형으로 구성하며 정렬을 위해 `ProfileText`, `IntroComponents`의 컴포넌트로 분리하여 구성했습니다.
  - 이름, 생년월일, 주소, 이메일 주소, 깃헙 주소, 블로그 주소, 짧은 소개글로 이루어져 있습니다.

- ### 프로젝트 부분

  - `time-line`을 사용하여 진행한 프로젝트를 시간 순으로 보여줍니다.
  - 각 포트폴리오의 메인 페이지 이미지와 기술스택, 프로젝트 기간, 기여도, 팀 구성, 짧은 프로젝트 소개글로 이루어져 있습니다.

- ### 프로젝트 세부 페이지
  - `time-line`의 각 프로젝트 '자세히 보기' 버튼을 클릭하여 볼 수 있습니다.
  - 프로젝트 로고와 프로젝트 기간, 메인 페이지 이미지, 프로젝트를 보여줄 수 있는 링크들, 기술 스택, 프로젝트 설명글로 이루어져 있습니다.

<br/>
<br/>

## How to run?

```bash
npm install
```

```bash
npm run dev
```

<br/>
