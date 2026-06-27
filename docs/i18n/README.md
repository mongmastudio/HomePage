# i18n 번역 작업 폴더

Mongma Studio 사이트의 다국어(ko/en/zh) 전환을 위한 번역 작업 자료입니다.

## 파일 구성

| 파일 | 용도 | 누가 보나 |
|---|---|---|
| `translations.workbook.json` | **번역 작업표.** 화면 텍스트 363개를 키별로 정리. `ko`/`en`/`zh` 빈 칸을 채우면 됨. 파일 맨 위 `_instructions`에 작성 규칙이 들어 있음. | 번역 AI(Papago/GPT/Claude) + 사람 |
| `keymap.json` | 각 키가 **코드의 어느 파일·라인**에 쓰이는지 매핑(+`_aliases`). 코드 반영용. | 개발자 전용 (번역 불필요) |
| `i18n-audit.md` (상위 `docs/`) | 전수 감사 보고서(무엇이 전환 안 되는지). | 참고용 |

## 작업 순서 (라운드트립)

1. **번역 생성** — `translations.workbook.json`을 통째로 번역 AI에 넣고 "`_instructions`에 따라 빈 `ko`/`en`/`zh`를 채워서 같은 JSON 구조로 반환"하도록 요청.
   - 이미 채워진 칸(원문)은 수정 금지, 키 구조 변경 금지, **값만** 채움.
2. **회신 파일 전달** — 채워진 JSON을 그대로 주시면 됩니다 (파일로 덮어쓰기 또는 별도 파일 모두 가능).
3. **코드 반영(개발자)** — `keymap.json`을 근거로 `src/content/i18n.ts` 사전 확장 + `content/*.ts`·컴포넌트들을 `useLanguage()`/`t.*` 기반으로 전환. 동시에 알려진 구조 이슈도 수정:
   - `MobileMenu`가 `Navbar`와 달리 `t.*`를 안 쓰는 불일치
   - 헤딩의 `<span className="it">` 이탤릭 분할 처리(번역문에서 이탤릭 범위 재지정)
   - 언어 이름(`lang.*.label`, `fixed:true`)은 3개 언어 동일 원어 유지

## 메모

- 키 개수: **363** (반복 버튼/라벨은 `common.*`로 통합, `content/*.ts` 공유 문자열은 캐노니컬 키 1개로 병합 — 중복 번역 방지).
- 브랜드/URL/이메일/장식 글리프는 번역 대상에서 제외(상세는 `i18n-audit.md` 4장).
- `meta.*`(SEO 메타데이터)는 드롭다운과 별개로 SSR 고정값 → 코드 반영 시 `generateMetadata` 전략 별도 적용.
