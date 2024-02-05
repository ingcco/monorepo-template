# monorepo-temp

## 프로젝트

1. temp-a
2. temp-b

## 시작하기

1. yarn이 설치되어 있지 않다면 <code>npm install -g yarn</code>

2. **vscode**에서 해당 프로젝트를 사용하려면 `yarn dlx @yarnpkg/sdks vscode`명령어를 통해서 sdks를 설치한다. (vscode 화면 오른쪽아래 typescript 관련 팝업창이 나오면 허용해야합니다)
   ref: [yarn dlx](https://yarnpkg.com/getting-started/editor-sdks#vscode)

3. 사용중인 **vscode** extention
   - [ZipFs(required)](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs)
   - [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - [tailwind intelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
   - [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)

## 파일구조

```
- /.husky
  - husky 관련 셋팅, pre-coomit을 통해 lint-stage와 함께 사용
- /config
  - 모노레포에서 공통으로 가져갈 config 설정을 위한 폴더 하위 app에서 extend로 가져와서 사용
- /app
  - 어플리케이션이 들어갈 워크스페이스, contextApi + hooks 관련해서 시나리오 테스트 담당
  - temp-a
    - vite통해서 react scaffolding 기본적으로 웹팀에서 많이 사용되는 라이브러리로 구성
- /packages
  - 어플리케이션에서 사용할 모듈을 저장하는 워크스페이스
  - components
    - 공통 컴포넌트들과 storybook을 통해 UI 테스트 진행 역할 담당
  - styles
    - 공통 tailwindcss, designToken등 스타일에 관련된 역할 담당
  - utils
    - 공통으로 사용할 util성 함수와 hooks 역할 담당, jest를 활용해서 unit test 진행 담당
```

## 모노레포에서 다른 프로젝트를 참조하는 방법

```javascript
dependencies: {
    ...
    "@common/components": "workspace:*",
    "@common/styles": "workspace:*",
    "@common/utils": "workspace:*",
    ...
}
```

각 워크스페이스의 name값을 dependencies에 넣어서 사용

> 코드 참고: [app/temp-a](/apps/temp-a/package.json)

> 코드 참고: [packages/components/package.json](/packages/components/package.json)

## workspaces CLI

`workspace:dev`: 각 워크스페이스 개발 실행
`workspace:i18n`: 각 워크스페이스 다국어 관리  
(각 워크스페이스에서 다국어 관리시 실행)
`component:build-svg`: 공통 컴포넌트에서 아이콘 컴포넌트를 실행하는 명령어  
(아이콘을 추가한 경우 실행)

## Design Token rule

`packages/styles` 정의된 디자인토큰은 각 `app/workspace`에서 `designToken.ts`에서 초기화후에
`@emotion/react`의 ThemeProvider를 통해 초기화해서 사용한다.
`packages/component`에 활용되는 모든 공통 컴포넌트 또한 layout을 통해 theme을 주입하여 사용하도록 한다.

> 코드 참고: [Router 설정]('./apps/temp-a/src/Router.tsx')  
> 코드 참고: [Layout 설정]('./packages/components/layouts/DefaultLayout.tsx')

## eslint 설정

eslint는 전역적으로 `<rootDir>`의 `.eslintrc.cjs`에서만 관리한다.

## tsconfig 설정

`/config` 폴더의 tsconfig를 각 워크스페이스의 tsconfig에서 extend해서 사용하고
compileOption은 워크스페이스 성격에맞게 override해서 사용한다.

## 배포전략

TBD 전략을 통해서 main브랜치를 배포될 브랜치로 pr -> merge 방식  
CI/CD는 [amplify.yml](./amplify.yml) 파일 참고

ex) main -> feature/branch 생성 -> main merge -> main to prod/crechat

## ref

[모노레포 전략 참고](https://klleon.atlassian.net/wiki/spaces/TC/pages/270041123)  
[다국어 전략 참고](https://klleon.atlassian.net/wiki/spaces/TC/pages/249167985/02.)
