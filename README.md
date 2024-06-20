<h1 align="center">
  <br>
<img src="https://github.com/with-Bloom/bloom-fe/assets/115215178/b228905c-71e9-44dd-ba7f-8f8cd8b92686" alt="bloom" width="180">
  <br>
</h1>
<p align="center">블룸과 함께 축사 준비를 손쉽게, 결혼식 맞춤형 축사 서비스 <b>블룸</b> 👰‍♀️🤵‍♂️</p>

<div align="center" >
  <img src="https://github.com/with-Bloom/bloom-fe/assets/115215178/7ccff34a-d9e0-45a1-9f73-96d350d28800" alt="블룸 데모 gif" width="300px" />
</div>

<br><br>

## Introduction
블룸은 축사를 준비하는 데 어려움을 겪는 분들을 위해 만들어진 맞춤형 축사 문장 생성 서비스입니다. <br><br>
응답한 데이터를 기반으로 ClovaX 생성형 AI를 활용하여 맞춤형 축사를 제공합니다. <br>
포텐데이X네이버 클로바 해커톤에 참여하여 33개의 팀중 3등을 수상하였으며, 현재 정식 출시 후 서비스 고도화를 진행 중입니다. <br><br>
안전한 서비스 제공을 위해 운영 서버와 개발 서버를 분리하여 관리하고 있습니다.

- **[운영서버](https://ai-bloom.site/) , [개발서버](https://bloom-wedding-test.netlify.app/)**
- **[팀 노션](https://carnation-bull-bb6.notion.site/Bloom-ef0a06c64d3e482db9f44a7b033ccb8a?pvs=4)**
- **[릴리즈 노트](https://carnation-bull-bb6.notion.site/40eacc51949c4b58a6a172af25c29fc1?pvs=4) , [QA](https://carnation-bull-bb6.notion.site/QA-c94c420c60414af597af298d23ab7f9a?pvs=4)**
- **[서비스 소개서 보러가기](https://carnation-bull-bb6.notion.site/Bloom-5741b3ae9c734ddfbb2f0a0c701e8fb6)**
- **[네이버 클라우드 우수작 시상식 현장 영상](https://www.youtube.com/watch?v=XPyCf9NS-rk) , [서비스 인터뷰 영상](https://www.youtube.com/watch?v=9o1gq_I531s)**

<br>

### Feature
<p align="center">
 <img width="49%" src="https://github.com/with-Bloom/bloom-fe/assets/115215178/32673955-380f-48aa-99b9-7fb0e4dc1467" alt="microservices"/>
&nbsp;
   <img width="49%" src="https://github.com/with-Bloom/bloom-fe/assets/115215178/415b752d-8c05-4424-b8b7-024f4d9c82c7" alt="data-models"/>
</p> 
    

<p align="center">
    <img width="49%" src="https://github.com/with-Bloom/bloom-fe/assets/115215178/3dca21f5-ff36-417f-8940-dba05e0ccc99" alt="apis"/>
&nbsp;
  <img width="49%" src="https://github.com/with-Bloom/bloom-fe/assets/115215178/94b2a61d-019c-4b47-a166-c1c92e4a83e2" alt="data-models"/>

</p>


 
 <br>
 
- **온보딩**: 서비스의 핵심 기능을 슬라이드하면서 확인할 수 있습니다.
- **데이터 수집**: Funnel 구조의 9개의 페이지를 통해 축사 생성에 필요한 데이터를 수집합니다.
- **축사 생성**: 수집한 데이터를 Clova에 전달하여 축사 문장을 생성합니다.
- **수정 및 재생성**: 생성된 축사를 사용자가 원하는 대로 수정하고 재생성할 수 있습니다.
- **텍스트 복사**: 생성된 축사를 클립보드에 복사하여 손쉽게 공유할 수 있습니다.
- **서비스 공유**: iOS 기기에서는 시스템 공유를 통해 서비스를 다른 사용자와 공유할 수 있으며, 다른 기기에서는 클립보드에 복사하여 서비스를 공유할 수 있습니다.
- **이미지 저장**: 생성된 축사를 PNG 이미지로 저장하여 보관하거나 공유할 수 있습니다.

<br><br>


## Development

### How To Use
프로젝트의 root 디렉토리에서 아래 커멘드를 실행

```shell
# Clone this repository
$ git clone https://github.com/with-Bloom/bloom-fe.git

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```
이후, 브라우저에서 `localhost:5173` 확인

<br>

### Tech Stack
<div>
<img src="https://img.shields.io/badge/React-3A3A3A?style=for-the-badge&logo=React&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/TypeScript-3A3A3A?style=for-the-badge&logo=typescript&logoColor=3178C6"/>
<img src="https://img.shields.io/badge/Tailwind-3A3A3A?style=for-the-badge&logo=TailwindCSS&logoColor=06B6D4">
<img src="https://img.shields.io/badge/React Hook Form-3A3A3A?style=for-the-badge&logo=React-Hook-Form&logoColor=FF68A1">
<img src="https://img.shields.io/badge/Vite-3A3A3A?style=for-the-badge&logo=vite&logoColor=646CFF">
<img src="https://img.shields.io/badge/Axios-3A3A3A?style=for-the-badge&logo=axios&logoColor=8D65FF">
<img src="https://img.shields.io/badge/Netlify-3A3A3A?style=for-the-badge&logo=netlify&logoColor=00C7B7">
<img src="https://img.shields.io/badge/ESlint-3A3A3A?style=for-the-badge&logo=eslint&logoColor=6E4FFF">
<img src="https://img.shields.io/badge/Prettier-3A3A3A?style=for-the-badge&logo=prettier&logoColor=F7B93E">
</div>

<br>


### Architecture

<img alt="archtecture" src="https://github.com/with-Bloom/bloom-fe/assets/115215178/01f94f1d-8642-46ac-8429-53a5dcc60c42">

<br><br>

## Running

### React-Hook-Form 도입
funnel 구조의 form을 관리하면서 setState 비동기 문제로 유저 응답 데이터가 한박자씩 느리게 업데이트 되었습니다. 해결방법은 useEffect와 useRef로도 처리가 가능하지만, 핸들러함수를 각 스텝마다 넘겨줘야했기에 useEffect는 처리가 불가했고, useRef로 관리하기보단 React-hook-form도 ref와 같이 비제어 컴포넌트 방식으로 관리할 수 있고 유효성 검사도 손쉽게 처리할 수 있었기에 React-Hook-Form으로 기존 state로 처리하던 form 구조에서 마이그레이션하여, 손쉽게 효과적으로 멀티폼 데이터를 관리할 수 있었습니다.
<br><br>

### 커스텀 GenericFormProvider를 만들어 가독성 개선
useFormContext는 상위 컴포넌트에서 선언한 defaultValue에 타입을 자식요소에서 인식할 수 없었기 때문에 useFormContext를 사용할때마다 관리하는 컴포넌트에서 계속해서 타입 지정을 해주었습니다. 부모 요소에서 선언한 값을 자식요소에서 계속해서 지정해주는 것보다 알아서 타입추론이 되도록 커스텀 Provider와 useContext를 만들어 자식요소에서도 타입추론이 되도록 구현하였습니다.

```js
import React from 'react';
import { FormProvider, SubmitHandler, useForm, useFormContext } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<AnswerData>;
};

const defaultValues: AnswerData = {
  userName: '',
  targetName: '',
  targetType: '',
  relationship: '',
  minute: '',
  speechType: '',
  concept: '',
  story: '',
  lastComment: '',
  isRenew: false,
};

export const GenericFormProvider = ({ children, onSubmit }: Props) => {
  const methods = useForm<AnswerData>({
    defaultValues: defaultValues,
    mode: 'onChange',
    shouldFocusError: false,
  });

  return (
    <FormProvider {...methods}>
      <form className="h-[calc(100%-84px)]" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
```
<br>

### 브라우저별 호환성 이슈
#### 공유하기
공유하기 기능을 처리하기 위해 webShareApi를 이용하였습니다. 해당 api는 ios 환경에서만 처리되었기에 ios외 다른기기에서는 클립보드 복사로 처리할 수 있도록 구현하였습니다.
<br>
#### 이미지 저장
처음 시도했던 라이브러리는 용량이 크지 않은 Dom-to-image + file-saver로 선택하였습니다. 하지만, 브러우저마다 이미지 백그라운드 안보임, 폰트 깨짐 등 브라우저마다 발생하는 이슈들이 많았습니다. 공식 깃헙에서 찾아보니 현재까지도 안정화되지 않은 이슈들이라 해당 라이브러리에서는 개선하기 어려울 것이라 판단하여, 기기별 호환성을 체크하였을때 현재까지도 문제가 적고, 계속해서 업데이트되고 이용하고 있는 유저 수가 많은 HTML2Canvas 라이브러리를 도입하여 브라우저마다 발생되는 이미지 저장 이슈를 해결할 수 있었습니다.

<br><br>

## Retro
기획자, 디자이너와 직접적으로 소통해본 경험이 이번 프로젝트에서 처음이라, 어떻게 다른 분야의 팀원이 들었을 때도 이해가 가도록 기술적 설명을 할 수 있을까에 대한 고민을 많이 하게되었고, 효율적인 소통 방법에 대해서 많이 돌아보고 알아갈 수 있는 계기가 되었던 것 같습니다. 또한 온전하게 혼자서 프론트 개발을 맡아서 할 수 있었던터라 기능에 대해서 다양한 방법들을 시도해보면서 리팩토링 과정을 거치다보니, 기술적으로도 많이 성장할 수 있었습니다. 좋은 아이디어나 고민사항이 생긴다면 개발적인 부분이 아니더라도, 적극적으로 제안하고 소통하면서 협업을 하였습니다.

### 기술적 방향성

현재 id값이 url에 노출이 되고있어, 다른 유저도 id값을 알고있다면 접속할 수 있다는 문제가 있어, id값을 토큰화하거나, 프론트단에서 id값을 암호화하는 방향성을 고려해보고있습니다.
