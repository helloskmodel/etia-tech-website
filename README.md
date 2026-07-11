# ETIA 官网项目

面向先进制造业的工业应用解决方案与智能选型平台。

## 技术栈
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- 静态导出（output: 'export'），可部署到腾讯云COS+CDN
- MDX/JSON 内容存储，无需数据库
- CSV批量导入内容

## 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 本地开发
```bash
npm run dev
```
打开 http://localhost:3000 查看网站

### 3. 构建静态文件
```bash
npm run build
```
静态文件会生成在 `out/` 目录，直接上传到腾讯云COS即可

## 内容管理

### 生成导入模板
```bash
node scripts/import-csv.js template
```
会在 `content/` 目录生成两个CSV模板：
- `labels-template.csv` - 标签应用导入模板
- `uv-template.csv` - UV应用导入模板

### 批量导入内容
用Excel编辑好CSV后，执行：
```bash
# 导入标签应用
node scripts/import-csv.js labels content/labels.csv

# 导入UV应用
node scripts/import-csv.js uv content/uv.csv
```

### 内容文件位置
- 标签应用：`content/labels/*.md`
- UV应用：`content/uv-curing/*.md`
- 客户案例：`content/cases/*.md`
- 技术文章：`content/articles/*.md`

## 部署到腾讯云COS

1. 执行 `npm run build` 生成静态文件到 `out/` 目录
2. 将 `out/` 目录下所有文件上传到腾讯云COS存储桶
3. 开启COS静态网站功能，配置默认首页为 `index.html`，404页面为 `404.html`
4. 开启CDN加速，配置HTTPS
5. 配置CDN缓存规则：HTML文件缓存1小时，CSS/JS/图片缓存7天

## 项目结构
```
etia-website/
├── src/
│   ├── app/                    # 页面路由
│   │   ├── page.tsx            # 集团首页
│   │   ├── labels/             # 标签业务中心
│   │   ├── uv-curing/          # UV业务中心
│   │   ├── about/              # 关于我们
│   │   ├── contact/            # 联系我们
│   │   └── ...
│   ├── components/             # 公共组件
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── content.ts          # 内容读取工具
├── content/                    # 网站内容（MD文件）
│   ├── labels/
│   ├── uv-curing/
│   ├── cases/
│   └── articles/
├── scripts/
│   └── import-csv.js           # CSV批量导入脚本
├── public/                     # 静态资源
└── out/                        # 构建输出（静态文件）
```

## 下一步开发计划
- [ ] 应用列表页和筛选器
- [ ] 应用详情页模板
- [ ] 产品详情页模板
- [ ] 表单提交功能
- [ ] SEO组件（TDK、Schema、面包屑）
- [ ] Sitemap自动生成
- [ ] 301重定向规则
- [ ] 站内搜索功能
