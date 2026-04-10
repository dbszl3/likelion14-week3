# 📝 MEMOLIST

간단한 메모를 작성하고 관리할 수 있는 메모리스트 프로젝트입니다.
입력창에 메모를 입력한 후 추가 버튼을 누르면 메모가 생성되며 각 메모의 삭제 버튼을 통해 원하는 메모를 삭제할 수 있습니다.
새로 추가되는 메모는 기존 메모보다 위에 위치하도록 구현했습니다.

## 📌 프로젝트 소개

이 프로젝트는 React 를 사용하여 만든 간단한 메모리스트입니다.
사용자가 메모를 입력하고 추가할 수 있으며 삭제 기능도 구현되어 있습니다.
배열을 활용해 여러 개의 메모를 관리하고 map 을 사용해 메모 목록을 화면에 출력했습니다.

## 🛠️ 주요 기능

- 입력창을 통해 메모 입력 가능
- 추가 버튼 클릭 시 메모 생성
- 새로 생성된 메모는 기존 메모보다 위에 위치
- 각 메모마다 삭제 버튼 제공
- 삭제 버튼 클릭 시 해당 메모 삭제

## 🚀 사용 기술

- React
- JavaScript
- styled-components

## **🎯 Git Convention**

- 🎉 **Start:** Start New Project [:tada:]
- ✨ **Feat:** 새로운 기능을 추가 [:sparkles:]
- 🐛 **Fix:** 버그 수정 [:bug:]
- 🎨 **Design:** CSS 등 사용자 UI 디자인 변경 [:art:]
- ♻️ **Refactor:** 코드 리팩토링 [:recycle:]
- 🔧 **Settings:** Changing configuration files [:wrench:]
- 🗃️ **Comment:** 필요한 주석 추가 및 변경 [:card_file_box:]
- ➕ **Dependency/Plugin:** Add a dependency/plugin [:heavy_plus_sign:]
- 📝 **Docs:** 문서 수정 [:memo:]
- 🔀 **Merge:** Merge branches [:twisted_rightwards_arrows:]
- 🚀 **Deploy:** Deploying stuff [:rocket:]
- 🚚 **Rename:** 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 [:truck:]
- 🔥 **Remove:** 파일을 삭제하는 작업만 수행한 경우 [:fire:]
- ⏪️ **Revert:** 전 버전으로 롤백 [:rewind:]

## 🌲 Branch Convention

- **main**: 배포 가능한 브랜치, 항상 배포 가능한 상태를 유지
- **develop**: 다음 버전을 위한 개발 브랜치, 팀원들의 작업 결과물이 모이는 '중심점'
- **ui/#이슈번호/명칭**: 화면 UI 구현이나 스타일링 작업을 할 때 사용
  - _예: ui/#12/login-form_
- **api/#이슈번호/명칭**: 데이터 통신, API 연동, 비즈니스 로직 구현 시 사용
  - _예: api/#45/fetch-user-profile_

## 🌊 Flow

1. Issue 생성
2. 최신 상태의 **develop** 에서 새 브랜치 생성
3. 작업 완료 후 **develop**으로 Pull Request
4. 팀원들에게 리뷰 요청
5. 리뷰한 팀원이 **develop** 으로 병합
6. 병합 후 작업자가 해당 브랜치 삭제