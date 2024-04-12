# 👰‍♀️🤵‍♂️ 블룸 - 맞춤형 축사 문장 AI 생성 서비스
![1](https://github.com/with-Bloom/bloom-react/assets/115215178/179b30d1-9cb4-457e-947a-24a9741cf085)

**맞춤형 축사 문장 생성 서비스, 블룸**의 프론트엔드 레포지토리입니다.

블룸은 축사를 준비하는 데 어려움을 겪는 분들을 위한 서비스로, 응답한 데이터를 기반으로 ClovaX 생성형 AI를 활용하여 맞춤형 축사를 제공합니다.

포텐데이X네이버 클로바 해커톤에 참여하여 33개의 팀중 3등을 수상하였으며, 현재 정식 출시 후 서비스 고도화를 진행 중입니다.

- [서비스 소개서 보러가기](https://carnation-bull-bb6.notion.site/Bloom-5741b3ae9c734ddfbb2f0a0c701e8fb6)
- [네이버 클라우드 우수작 시상식 현장 영상](https://www.youtube.com/watch?v=XPyCf9NS-rk)
- [서비스 인터뷰 영상](https://www.youtube.com/watch?v=9o1gq_I531s)

## 💫 전체 화면 구성
![image](https://github.com/with-Bloom/bloom-fe/assets/115215178/ef2605c0-4400-4e00-ac4d-7fa46a7a2efb)

## ✨ 주요 기능
- **캐러셀**: 서비스의 핵심 기능을 슬라이드하면서 확인할 수 있습니다.
- **데이터 수집**: Funnel 구조의 9개의 페이지를 통해 축사 생성에 필요한 데이터를 수집합니다.
- **축사 생성**: 수집한 데이터를 Clova에 전달하여 축사 문장을 생성합니다.
- **수정 및 재생성**: 생성된 축사를 사용자가 원하는 대로 수정하고 재생성할 수 있습니다.
- **텍스트 복사**: 생성된 축사를 클립보드에 복사하여 손쉽게 공유할 수 있습니다.
- **서비스 공유**: iOS 기기에서는 시스템 공유를 통해 서비스를 다른 사용자와 공유할 수 있으며, 다른 기기에서는 클립보드에 복사하여 서비스를 공유할 수 있습니다.
- **이미지 저장**: 생성된 축사를 PNG 이미지로 저장하여 보관하거나 공유할 수 있습니다.


## 🔎 프로젝트 실행
프로젝트의 root 디렉토리에서 아래 커멘드를 실행
```shell
npm run install
npm run dev
```
이후, 브라우저에서 `localhost:5173` 확인

## 🛠️ 기술 스택
<div>
<img src="https://img.shields.io/badge/React-000000?style=for-the-badge&logo=React&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/TypeScript-000000?style=for-the-badge&logo=typescript&logoColor=3178C6"/>
<img src="https://img.shields.io/badge/Tailwind-000000?style=for-the-badge&logo=TailwindCSS&logoColor=06B6D4">
<img src="https://img.shields.io/badge/ESlint-000000?style=for-the-badge&logo=eslint&logoColor=4B32C3">
<img src="https://img.shields.io/badge/Prettier-000000?style=for-the-badge&logo=prettier&logoColor=F7B93E">
<img src="https://img.shields.io/badge/Vite-000000?style=for-the-badge&logo=vite&logoColor=646CFF">
<img src="https://img.shields.io/badge/Axios-000000?style=for-the-badge&logo=axios&logoColor=5A29E4">
<img src="https://img.shields.io/badge/Netlify-000000?style=for-the-badge&logo=netlify&logoColor=00C7B7">
</div>

## 🗺️ 아키텍처
![10](https://github.com/with-Bloom/bloom-react/assets/115215178/6461c4f5-19d8-4869-a2e4-5e26fcbd45cb)

