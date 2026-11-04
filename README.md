<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,55:3b0764,100:7c3aed&height=190&section=header&text=Harrison&fontSize=60&fontColor=ffffff&fontAlignY=36&desc=AI-native%20Engineer%20%C2%B7%20AX%20Team&descSize=18&descAlignY=58" width="100%" alt="Harrison" />

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=18&duration=3200&pause=900&color=A78BFA&center=true&vCenter=true&width=640&lines=Designing+agent+harnesses+with+Claude+Code;Subagents+%C2%B7+Skills+%C2%B7+MCP+%C2%B7+Hooks;Turning+company+workflows+into+AI+workflows" alt="typing" />

**AI 에이전트를 실제 업무 흐름에 넣는 사람.**<br/>
웹 프론트엔드에서 출발해, 지금은 AX(AI Transformation) 팀에서 에이전트 하네스를 설계하고 운영합니다.

<sub>I build agent harnesses — subagents, skills, MCP servers and hooks — that let AI do real work inside a company, safely.</sub>

<br/>

[![Email](https://img.shields.io/badge/wognsl305@naver.com-555?style=flat-square&logo=maildotru&logoColor=white)](mailto:wognsl305@naver.com)
[![GitHub](https://img.shields.io/badge/git--Harrison-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/git-Harrison)

</div>

---

## 🧭 What I do

- **AX 팀 — 사내 업무를 AI 워크플로우로 전환**합니다. "챗봇 하나 붙이기"가 아니라, 에이전트가 실제 시스템을 읽고·만들고·검토하게 만드는 일입니다.
- **사내 데이터용 MCP 서버를 직접 구축**했습니다. Claude가 사내 ERP 데이터를 *읽기 전용*으로 조회하고, 모든 호출은 원문 질문과 함께 감사 로그로 남습니다.
- **사내 포털을 에이전트 팀으로 개발**합니다. 설계 에이전트가 외부 제품을 벤치마킹해 설계서를 쓰고, 개발 에이전트가 구현하고, 다시 설계 에이전트가 충실도를 검토합니다.
- **팀 지식을 자동으로 쌓습니다.** 머지된 PR을 훑어 결정·트러블슈팅·런북을 팀 위키 초안으로 정리하는 에이전트를 운영합니다.

---

## 🛠️ Agent Harness Engineering

> 모델은 엔진이고, 하네스는 차체입니다. 좋은 결과는 **역할·도구·가드레일**을 어떻게 짜느냐에서 나옵니다.
> 제 하네스는 **Claude Code** 위에 만들어져 있습니다.

<p align="center"><img src="./assets/agent-harness.svg" alt="Agent pipeline: Orchestrator → Planner/Architect → UX Designer → Developer → Reviewer, with CHANGES/UX-gap loops, MCP servers (read-only, audited), and a human merge gate" width="100%" /></p>

| Layer | 구성 |
|---|---|
| **Subagents** | 프로젝트마다 역할을 나눈 커스텀 에이전트 20+ — `planner` · `ux-architect` · `architect` · `developer` · `reviewer` · `refactor` · `wiki-updater` 등. 코드를 쓰는 주체는 하나로 고정하고, 설계자는 코드를 쓰지 않습니다. |
| **Skills** | `/srm-dev` 설계→구현→충실도 검토 루프 오케스트레이션 · `/청소` 죽은 코드 전수 분석 후 삭제(UI는 1px도 변경 금지) · `/a2a` 에이전트 간 핸드오프 프로토콜 · `/update-team-wiki` · `/jira-md` · `/claude-hud-install` |
| **MCP** | 직접 만든 사내 데이터 MCP(읽기 전용 SQL + 큐레이션된 지식베이스 + 감사 로그) · Slack · Microsoft 365 · Google Drive · Vercel |
| **Hooks & HUD** | SessionStart 훅으로 브랜치·미커밋·열린 PR을 컨텍스트에 주입 · [claude-hud](https://github.com/jarrodwatts/claude-hud) 상태줄로 컨텍스트/툴/에이전트 실시간 표시 |
| **Memory** | 프로젝트별 결정·피드백을 메모리로 기록해 같은 실수를 반복하지 않게 합니다. |
| **Model routing** | 판단·설계는 Opus / Fable, 대량 구현은 Sonnet. 작업 크기에 따라 단계를 건너뜁니다. |
| **Process** | 큰 기능은 AI-DLC(Inception → Construction) 단계로, 산출물은 파일로 남겨 에이전트 간 컨텍스트 손실을 막습니다. |

**Guardrails I care about**

- 🔒 **Least privilege** — DB는 SELECT 전용, 시스템 스키마 차단, 추측한 테이블명은 거부
- 🧾 **Audit by default** — 에이전트의 모든 데이터 호출에 사용자 원문 질문을 함께 기록
- 🤝 **Human in the loop** — 에이전트는 커밋·푸시하지 않고, 설계 승인과 머지는 사람이 합니다
- ⚡ **Lean verification** — 타입체크·린트까지만 자동으로, 화면 확인은 사람이 직접

---

## 📦 Projects

### ⭐ Open Source — 바로 받아 쓰는 Windows 앱

<table>
<tr>
<td width="50%" valign="top">

<h3 align="center"><a href="https://github.com/git-Harrison/Duru">Duru</a></h3>
<p align="center"><b>Markdown · JSON · YAML · 텍스트를 두루 보고 고치는 가벼운 Windows 앱</b></p>

<p align="center">
<a href="https://github.com/git-Harrison/Duru/releases/latest/download/Duru-Setup.exe"><img src="https://img.shields.io/badge/Download_for_Windows-7c3aed?style=for-the-badge&logo=windows11&logoColor=white" alt="Download Duru for Windows" /></a><br/>
<a href="https://github.com/git-Harrison/Duru/releases/latest"><img src="https://img.shields.io/github/v/release/git-Harrison/Duru?style=flat-square&label=latest&color=7c3aed" alt="latest release" /></a>
<img src="https://img.shields.io/github/license/git-Harrison/Duru?style=flat-square" alt="license" />
<img src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white" alt="C#" />
<img src="https://img.shields.io/badge/CI-GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white" alt="GitHub Actions" />
</p>

- 목차 · 다크/라이트 · 여러 문서 탭 · 파일 변경 시 자동 새로고침
- `Ctrl+E` 편집 · `Ctrl+S` 저장, JSON 트리 뷰, YAML 하이라이트
- UI 5개 언어 (en · ko · ja · zh · es), Windows 언어 자동 감지
- **v2.2** 새 모던 설치 프로그램 · 선명한 아이콘
- 오픈소스(MIT) · GitHub Actions 빌드 · 파일을 외부로 보내지 않음

<sub>Windows 10/11 · 처음 실행 시 파란 경고창 → <b>추가 정보 → 실행</b></sub>

</td>
<td width="50%" valign="top">

<h3 align="center"><a href="https://github.com/git-Harrison/kids-note-downloader">KidsNote Downloader</a></h3>
<p align="center"><b>키즈노트 알림장·앨범 사진/동영상을 원본 그대로 PC에 백업 (비공식)</b></p>

<p align="center">
<a href="https://github.com/git-Harrison/kids-note-downloader/releases/latest/download/KidsNoteDownloader-Setup.exe"><img src="https://img.shields.io/badge/Download_for_Windows-f59e0b?style=for-the-badge&logo=windows11&logoColor=white" alt="Download KidsNote Downloader for Windows" /></a><br/>
<a href="https://github.com/git-Harrison/kids-note-downloader/releases/latest"><img src="https://img.shields.io/github/v/release/git-Harrison/kids-note-downloader?style=flat-square&label=latest&color=f59e0b" alt="latest release" /></a>
<img src="https://img.shields.io/github/license/git-Harrison/kids-note-downloader?style=flat-square" alt="license" />
<img src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white" alt="C#" />
<img src="https://img.shields.io/badge/Edge_CDP-0078D7?style=flat-square&logo=microsoftedge&logoColor=white" alt="Edge CDP" />
</p>

- 키즈노트 공식 로그인 화면 사용, **로그인 자동 감지**, 비밀번호 미저장
- **모던 웹 UI** · 받는 중 **실시간 썸네일** 미리보기
- 이미 받은 파일은 건너뛰는 이어받기 · 날짜별 폴더 정리
- 커스텀 설치 프로그램, 관리자 권한 불필요
- Node.js CLI → 설치형 Windows 앱으로 재작성

<sub>Windows 10/11 · 처음 실행 시 파란 경고창 → <b>추가 정보 → 실행</b></sub>

</td>
</tr>
</table>

### 🏢 Work — AX 팀에서 만든 서비스 <sub>(사내 프로젝트 · 비공개 저장소)</sub>

<table>
<tr>
<td width="50%" valign="top">

#### 🧾 SRM Portal
브랜드사(공급사)와 사내 직원이 **발주 · 서류 · 상품**을 함께 다루는 SRM 웹 포털.

- 사내/브랜드사 양면 **40+ 화면** — 서류 요청 → 승인 워크플로우, 통계, 권한 코드 기반 RBAC · 감사 이력 관리자
- 화면 가이드 지식베이스를 근거로 답하는 **AI 도우미 패널**
- **Role** 프론트엔드 리드 — 설계와 구현 대부분 담당

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_·_shadcn-161618?style=flat-square&logo=radixui&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonwebservices&logoColor=white)

> 🤖 **Built with agents** — `srm-ux-architect`(Opus)가 외부 SRM을 벤치마킹해 설계서 · 디자인 토큰 델타를 쓰고 → `srm-developer`가 작업 크기에 따라 Sonnet / Opus로 구현 → 설계자가 **설계 충실도 리뷰**. `srm-refactor` + `/청소`로 동작 · UI 불변 정리.

</td>
<td width="50%" valign="top">

#### 🏬 MOIDA
오프라인 매장 운영 대시보드 — 매장별 **매출 · 재고 · 조닝**을 실시간으로 모니터링하고 관리.

- 경영진 · 본사 · GM · 매장 **역할별 대시보드**
- 지도 기반 매장 뷰, 차트 리포트, 조닝 관리
- **Role** 프론트엔드 주 개발자 — 화면 구현부터 배포 파이프라인까지

![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)
![MapLibre](https://img.shields.io/badge/MapLibre-396CB2?style=flat-square&logo=maplibre&logoColor=white)
![AWS](https://img.shields.io/badge/S3_·_CloudFront-232F3E?style=flat-square&logo=amazonwebservices&logoColor=white)

> 🤖 **Built with agents** — 작업을 T0~T4로 분류해 작은 수정은 바로, 신규 페이지는 `fe-planner` ∥ `ux-designer` 병렬 → `fe-developer` → `fe-reviewer`. 규칙은 `moida-stack` 스킬로 필요할 때만 로드, SessionStart 훅 · Jira 스킬 연동.

</td>
</tr>
</table>

### 🚧 Building now <sub>(개인 프로젝트 · 비공개 · 모두 에이전트 팀으로 개발 중)</sub>

| Project | What | How it's built |
|---|---|---|
| 🏰 **Multi-tenant Guild SaaS** | 게임 길드 운영 플랫폼, 단일 도메인 멀티테넌트 + 3단계 RBAC | Next.js 16 · Supabase(RLS) · Vercel — planner → designer → architect → builder → reviewer, AI-DLC |
| 🕵️ **Pixel Mafia** | 서비스 종료된 모바일 마피아 게임을 계승하는 1인 개발 게임 | PM 에이전트 + 파트별 사수/부사수 에이전트의 A2A 리뷰 |
| 🏎️ **Mini 4WD Dex** | 미니카·RC 도감 웹앱 | Next.js · 토큰 기반 디자인 시스템 · `/a2a` 설계→화면설계→구현→검증 |

<details>
<summary><b>Earlier work</b></summary>

- [mancity](https://github.com/git-Harrison/mancity) — React + TypeScript 기반 맨시티 팬 허브 (뉴스·영상·경기 기록·포메이션 메이커)

</details>

---

## 🧰 Tech Stack

**AI / Agents**<br/>
![Claude Code](https://img.shields.io/badge/Claude_Code-D97757?style=flat-square&logo=claude&logoColor=white)
![Anthropic](https://img.shields.io/badge/Anthropic_API-191919?style=flat-square&logo=anthropic&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-000000?style=flat-square&logo=modelcontextprotocol&logoColor=white)
![Vercel AI SDK](https://img.shields.io/badge/AI_SDK-000000?style=flat-square&logo=vercel&logoColor=white)

**Frontend**<br/>
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white)

**Backend / Data**<br/>
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL_Server-CC2927?style=flat-square&logo=microsoftsqlserver&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

**Desktop / DevOps**<br/>
![C#](https://img.shields.io/badge/C%23_/.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white)
![Windows](https://img.shields.io/badge/Windows-0078D4?style=flat-square&logo=windows11&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonwebservices&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Jira](https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=jira&logoColor=white)

---

<div align="center">

<sub>Issues and feedback are always welcome · 이슈나 피드백은 언제든 환영합니다</sub>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:7c3aed,45:3b0764,100:0f172a&height=100&section=footer" width="100%" alt="" />

</div>
