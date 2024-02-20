# 모노레포 전략: 효율적인 프로젝트 관리를 위한 접근

## 모노레포란?

모노레포(Monorepo)는 여러 프로젝트를 하나의 저장소(repository)에서 관리하는 방식입니다. 이 구조는 프로젝트 간의 의존성 관리, 코드 재사용, 그리고 통합된 빌드 및 테스트 환경을 제공하여 개발 효율성을 높임

## 왜 다른 회사들은 모노레포를 선택하는가?

### Issue

- **분산된 프로젝트 관리의 어려움**: 백오피스 프론트엔드 애플리케이션들이 각기 다른 서버 리포지토리에서 관리되고 있었으며, 기술 스택이 서로 달랐고, 코드 컨벤션이 일관되지 않았습니다. 또한, 코드의 정적 검사 및 테스팅이 충분하지 않았습니다.

### Benefit

- **소스 코드의 중앙 집중화**: 모든 프론트엔드 프로젝트 소스를 한 곳에서 관리함으로써 변경 사항을 쉽게 파악하고, 신규 입사자가 개발 환경을 설정하는 데 드는 비용을 줄일 수 있었습니다.
- **코드 재사용성**: 이미 개발된 공통 UI 컴포넌트 라이브러리와 같은 모듈화된 코드를 여러 프로젝트에서 재사용할 수 있게 되었습니다.
- **코드 품질 유지**: 코드 정적 분석 및 테스트 도구를 공통으로 적용하여 코드의 최소 품질을 유지할 수 있었습니다.
- **효율적인 리소스 관리**: 소수의 프론트엔드 엔지니어가 다수의 프로젝트를 개발 및 운영해야 하는 상황에서 모노레포를 통해 업무 효율을 향상시킬 수 있었습니다.

우아한 기술블로그: [https://techblog.woowahan.com/7976/](https://techblog.woowahan.com/7976/)

토스 프론트엔드 챕터: [https://tosspayments-dev.oopy.io/cc9367e4-4ff6-4241-8189-9f3cf250f5d2](https://tosspayments-dev.oopy.io/cc9367e4-4ff6-4241-8189-9f3cf250f5d2)

# 우리가 모노레포에서 얻고자 했던 것

- **일관된 코드베이스**: 하나의 소스로 여러 애플리케이션에서 가져가 사용함으로써 일관성을 유지합니다.
- **관리 포인트 최소화**: 여러 프로젝트를 한 곳에서 관리함으로써 관리 포인트를 줄이고 효율성을 높입니다.
- **공통 의존성 관리**: 공통된 의존성을 중앙에서 관리하여 업데이트와 유지보수가 용이합니다.

# 모노레포의 구성

### 전체 파일 구조

```
- /.husky
  - husky 관련 셋팅, pre-commit을 통해 lint-stage와 함께 사용
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

### config 전략

1.  tsconfig: config/tsconfig 의 tsconfig.base.json의 기본 extend를 해서 각 ts파일의 compilerOption을 override해서 작성

2.  eslint: eslint는 전역적으로 의 .eslintrc.cjs파일에서 관리

```
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: [
    'react-refresh',
    'unused-imports',
    'tailwindcss',
    '@emotion',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@emotion/pkg-renaming': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'error',
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error',
  },
}
```

```
<rootDir> package.json
"devDependencies": {
    "@emotion/eslint-plugin": "^11.11.0",
    "@tanstack/eslint-plugin-query": "^5.12.1",
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.55.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-import-resolver-node": "^0.3.9",
    "eslint-import-resolver-typescript": "^3.6.1",
    "eslint-plugin-prettier": "^5.0.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "eslint-plugin-tailwindcss": "^3.13.0",
    "eslint-plugin-unused-imports": "^3.0.0",
    "husky": "^8.0.0",
    "lint-staged": "^15.2.0",
    "prettier": "^3.1.1",
    "typescript": "^5.3.3",
    "vite": "^5.0.7",
    "vite-plugin-svgr": "^4.2.0"
  }
```

### nohoist module 관리

모노레포에서 nohoist 옵션을 사용하는 것은 특정 패키지들을 각 어플리케이션의 node_modules에 개별적으로 설치하도록 설정

1.  **버전 충돌 방지**: 서로 다른 어플리케이션에서 다른 버전의 같은 패키지를 사용할 경우, nohoist를 통해 각 어플리케이션에 맞는 버전을 유지할 수 있습니다.
2.  **호환성 유지**: 특정 패키지들이 로컬 node_modules에 설치되어야만 제대로 작동하는 경우, nohoist를 사용하여 이러한 패키지들의 호환성 문제를 방지할 수 있습니다.
3.  **개별적 관리 용이**: 각 어플리케이션 또는 패키지가 자신의 의존성을 독립적으로 관리할 수 있어, 전체 모노레포의 관리 복잡성을 줄일 수 있습니다.

nohoist는 모노레포의 중앙집중식 관리와 각 어플리케이션의 독립성 사이의 균형을 맞추는 데 도움을 줍니다.

```
"nohoist": [
      "**/react",
      "**/react-dom",
      "**/react-router-dom",
      "**/react-router",
      "**/react-router-config",
      "**/react-router-dom"
    ]
```

### app/temp-a 구조

- **vite통해서 react scaffolding**

기본적으로 웹팀에서 가장 많이 사용되는 라이러리로 구성됨

@emotion/styled, axios, react, react-query, tailwindcss, react-router

- **공통모듈 불러오는 방법**

```
temp-a/package.json
dependencies: {
    ...
    "@common/components": "workspace:*",
    "@common/styles": "workspace:*",
    "@common/utils": "workspace:*",
    ...
}
```

- **디자인 토큰 셋팅**

styles/designToken.ts파일에서 공통 style을 받아와서 사용

tailwind.config.js 파일에 초기화된 designToken을 넣어서 class화

### packges/workspaces 구조

- **components**

공통 컴포넌트들과 storybook을 통해 UI 테스트 진행 역할을 담당합니다.

일반적으로 웹팀의 컴포넌트 구조를 따라서 작성합니다.

```
button
  Button.tsx -> 버튼의 기능적인 역할을 작성
  Button.style.ts -> 버튼의 스타일 기능 작성
  Button.stories.tsx -> 완성된 버튼을 storybook으로 확인
```

- **styles**

공통으로 사용할 디자인 토큰 및 글로벌 css역할을 담당합니다.

- **utils**

공통으로 사용할 hooks와 util성 함수를 작성합니다. 작성된 비지니스 로직은 jest를 통해 유닛 테스트를 통해서 코드가 지속적으로 배포 가능한 상태로 만듭니다.

# 모노레포 template repo 구축

**github**의 template repo 기능을 통해서 구축한 모노레포를 새로운 프로젝트에 바로 적용 가능하도록 셋팅

> **바퀴를 다시 발명하지 마라 (Don’t reinvent the wheel)**

## 앞으로의 방향성

- **TBD 전략**: TBD(Test-Driven Development) 전략을 통해 깃 전략을 구체화할 예정입니다.

- **테스트 커버리지 보장**: Jest를 활용한 시나리오 테스트와 유닛 테스트를 강화하여 코드의 안정성과 품질을 관리할 예정입니다.
