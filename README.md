# Subply

- [Commit Message Convention](#Commit-Message-Convention)
- [GitBash Command](#GitBash-Command)

# Commit Message Convention
## Commit Message를 위한 규칙
1. 제목과 본문을 한 줄 띄워 분리하기 
2. 모두 영어로 표기
3. 제목은 영문 기준 50자 이내
4. 제목 첫글자는 대문자로 표기
5. 제목 끝에 `.` 쓰지않기
6. 제목은 `명령조` 로 작성
7. 본문은 `어떻게`보다 `무엇을`, `왜`에 맞춰 작성하기

## 1. Commit Message Structure
- 커밋 메세지는 제목/본문/꼬리말로 구성됩니다.
- 타이틀은 필수로 작성하되 바디와 푸터는 옵션입니다.


```
type: Contents

body

footer
```

## 2. Type
- feat: 새로운 기능 추가 (코드 추가)
- fix: 버그 수정 (에러 수정)
- refactor: 코드 리팩토링 (코드 개선)
- docs: 문서 수정
- style: css, sass 추가 및 수정
- chore: 빌드 업무 수정, 모듈 수정, 패키지 매니저 수정

## 3. Contents
- 과거시제를 사용하지 않고 명령어로 작성합니다.
    - Fix
    - Add
    - Update
    - Delete

## 4. Body
- 선택사항 입니다. 
- 부연설명이 필요하거나 커밋 이유를 설명할 경우 작성합니다.

## 5. Footer
- 선택사항 입니다.
- issue tracker id를 작성할 때 사용합니다.



# GitBash Command
- commit 상태 확인: `$git status`
- commit 목록 확인: `$ git log`
- commit message 변경: `$ git commit --amend`
- commit 취소 후 staged: `$ git reset --soft HEAD^`
- commit 취소 후 unstaged
    - 첫번째 방법: `$ git reset --mixed HEAD^`
    - 두번째 방법: `$ git reset HEAD^`
<br>

- 작업 staging: `$ git add *`
- 선택한 파일 unstaging: `$ git reset HEAD filename`


<!-- 
아래 사이트를 참조해 작성된 글입니다.
- https://meetup.toast.com/posts/106
- https://doublesprogramming.tistory.com/256
- https://gmlwjd9405.github.io/2018/05/25/git-add-cancle.html
- https://byseop.netlify.com/react-todolist01/
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)
- [zeke/semantic-pull-request](https://github.com/zeke/semantic-pull-requests)
-->





# Auto convincing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# subply
