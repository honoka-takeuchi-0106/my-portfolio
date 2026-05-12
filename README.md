# Portfolio Site Template

HTML / CSS / Vanilla JS のみで構築した静的ポートフォリオサイトです。ビルドツール不要で GitHub Pages にそのままデプロイできます。

## 機能

- ダーク / ライトテーマ切り替え（OS 設定フォールバック・localStorage 保存）
- 日本語 / 英語切り替え（ブラウザ言語フォールバック・localStorage 保存）
- スムーススクロール
- スクロールアニメーション（`IntersectionObserver`）
- レスポンシブ対応（モバイル〜デスクトップ）
- アクセシビリティ対応（スキップリンク・ARIA 属性・`:focus-visible`・`prefers-reduced-motion`）

## ファイル構成

```
portfolio/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## カスタマイズ方法

`index.html` 内の `{{PLACEHOLDER}}` を自分の情報に置き換えてください。

| プレースホルダー | 内容 |
|---|---|
| `{{YOUR_NAME}}` | フルネーム（`<title>` や `<meta>` 用） |
| `{{YOUR_NAME_JA}}` | 日本語表記の名前 |
| `{{YOUR_NAME_EN}}` | 英語表記の名前 |
| `{{INITIALS}}` | ナビロゴ用イニシャル（例: `HT`） |
| `{{PHOTO_URL}}` | プロフィール写真の URL またはパス（例: `assets/photo.jpg`） |
| `{{CATCHCOPY_JA}}` | キャッチコピー（日本語） |
| `{{CATCHCOPY_EN}}` | キャッチコピー（英語） |
| `{{ABOUT_JA}}` | 自己紹介文（日本語） |
| `{{ABOUT_EN}}` | 自己紹介文（英語） |
| `{{TOEIC_SCORE}}` | TOEIC スコア（不要なら行ごと削除） |
| `{{PROJECT1_TITLE_JA}}` | プロジェクト1 タイトル（日本語） |
| `{{PROJECT1_TITLE_EN}}` | プロジェクト1 タイトル（英語） |
| `{{PROJECT1_DESC_JA}}` | プロジェクト1 説明（日本語） |
| `{{PROJECT1_DESC_EN}}` | プロジェクト1 説明（英語） |
| `{{PROJECT1_GITHUB}}` | プロジェクト1 GitHub URL |
| `{{PROJECT1_LIVE}}` | プロジェクト1 デモ URL（なければ `#` に） |
| `{{PROJECT2_*}}` | プロジェクト2（同上） |
| `{{PORTFOLIO_GITHUB}}` | このポートフォリオの GitHub URL |
| `{{EXP1_YEAR}}` 〜 `{{EXP3_YEAR}}` | 経歴の年（例: `2022`） |
| `{{EXP1_ROLE_JA}}` 〜 `{{EXP3_ROLE_JA}}` | 役職・肩書き（日本語） |
| `{{EXP1_ROLE_EN}}` 〜 `{{EXP3_ROLE_EN}}` | 役職・肩書き（英語） |
| `{{EXP1_ORG_JA}}` 〜 `{{EXP3_ORG_JA}}` | 組織名（日本語） |
| `{{EXP1_ORG_EN}}` 〜 `{{EXP3_ORG_EN}}` | 組織名（英語） |
| `{{GITHUB_USERNAME}}` | GitHub ユーザー名 |
| `{{EMAIL}}` | メールアドレス |
| `{{X_USERNAME}}` | X (Twitter) ユーザー名 |
| `{{REPO_NAME}}` | このリポジトリ名 |

### プロジェクトカードの追加・削除

`#projects` セクション内の `<article class="project-card">` をコピー／削除するだけです。

### スキルバッジの追加

`<ul class="badge-list">` に `<li class="badge badge-lang">新スキル</li>` を追加します。  
色クラスは `badge-lang`（紫）/ `badge-tool`（青）/ `badge-other`（ピンク）の3種類です。

---

## GitHub Pages デプロイ手順

1. GitHub で新しいリポジトリを作成（Public）
2. ローカルで初期化してプッシュ

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/{{GITHUB_USERNAME}}/{{REPO_NAME}}.git
git push -u origin main
```

3. リポジトリの **Settings → Pages** を開く
4. **Source** を `Deploy from a branch` に設定
5. **Branch** を `main` / `/ (root)` に設定して **Save**
6. 数分後に `https://{{GITHUB_USERNAME}}.github.io/{{REPO_NAME}}/` で公開されます

---

## ライセンス

MIT
