# ETIA-TECH 中国官网升级｜Project Master Brief

> **项目性质：** 中国市场工业B2B官网升级
> **主站：** https://www.etia-tech.com
> **代码仓库：** https://github.com/helloskmodel/etiatech-website
> **主要语言：** 简体中文
> **主要搜索引擎：** 百度
> **文档作用：** 本文件是产品、内容、数据、开发、SEO与合规工作的共同项目基线。Claude Code、Codex及其他参与AI在工作前必须先阅读本文件。

---

## 1. 项目目标

将 [www.etia-tech.com](https://www.etia-tech.com) 从传统企业展示网站升级为面向中国先进制造业的应用选型与技术获客平台，统一承载两条业务线：

1. **工业特种卷材标签材料（Roll Label Materials）**
2. **UV光固化设备与应用解决方案（UV Curing Systems）**

网站不是普通产品目录。客户应能通过三条主要路径找到所需内容：

- 按行业与具体应用找方案；
- 按产品类别或型号找材料/设备；
- 按核心品牌找中国供应与技术支持。

核心转化目标：

- Label：获取TDS、申请材料样品、咨询选材、提交现用料号、咨询卷宽与分切规格；
- UV Curing：产品选型、应用评估、询价、安装调试、校准、维修、备件与技术支持。

---

## 2. 网站与业务边界

| 网站 | 市场 | 业务范围 | SEO重点 |
|---|---|---|---|
| [www.etia-tech.com](https://www.etia-tech.com) | 中国 | 卷材标签材料＋UV光固化 | 百度、中文、国内转化 |
| [www.etiatech.com](https://www.etiatech.com) | 海外 | UV光固化专业站 | Google、多语言 |
| [www.etialabel.com](https://www.etialabel.com) | 海外 | 卷材标签材料专业站 | Google、英文及后续多语言 |
| [www.uvmarksolutions.com](https://www.uvmarksolutions.com) | 海外 | 定制成品标签与实验室标签 | 独立公司与业务 |

### 当前项目明确包含

- 中国站的卷材工业标签材料；
- 中国站的UV光固化设备、配件、应用与支持；
- 国内百度SEO页面架构；
- Polyonics与OmniCure的特殊品牌入口；
- 产品、行业、工艺、应用、技术内容之间的关联。

### 当前项目明确不包含

- 定制成品标签；
- 预印刷标签；
- 可变数据标签打印；
- 标签设计和贴标服务；
- UVMARK Solutions网站建设；
- ETIA LABEL海外站的完整开发；
- 对 [www.etiatech.com](https://www.etiatech.com) 国际UV站的大规模改版。

---

## 3. 国内主站总体信息架构

建议一级导航：

1. 首页
2. 工业标签材料
3. UV光固化
4. 行业应用
5. 产品中心
6. 技术中心
7. 服务支持
8. 关于怡天
9. 联系我们

首页必须清楚展示两个主要业务入口：

- **工业特种标签材料**
- **UV光固化设备与应用解决方案**

两条业务线分别维护产品、行业、应用与技术支持路径，共享公司介绍、新闻、联系方式和服务能力。

---

## 4. UV Curing业务架构

### 4.1 国内外统一的8大行业

UV国内站与海外站共用以下Master Industry分类：

| ID | English | 中文 |
|---|---|---|
| UVC-IND-01 | Medical Device Assembly | 医疗器械装配 |
| UVC-IND-02 | Automotive & ADAS | 汽车制造与ADAS |
| UVC-IND-03 | Electronics & PCB Assembly | 电子制造与PCB组装 |
| UVC-IND-04 | Photonics & Advanced Packaging | 光电子与先进封装 |
| UVC-IND-05 | Fiber Optic & Cable Manufacturing | 光纤与线缆制造 |
| UVC-IND-06 | Printing & Packaging | 印刷与包装 |
| UVC-IND-07 | Wood & Industrial Coatings | 木器与工业涂装 |
| UVC-IND-08 | New Energy | 新能源 |

航空航天与R&D暂不作为一级行业，可保留为内部标签或未来扩展。

### 4.2 UV页面层级

UV内容采用四层关系：

1. 行业落地页；
2. 工艺/技术落地页；
3. 具体应用落地页；
4. 产品分类与具体型号页。

推荐URL：

```text
/uv-curing/
/uv-curing/applications/
/uv-curing/applications/automotive/
/uv-curing/applications/automotive/adas-camera-uv-curing
/uv-curing/processes/bonding-assembly
/uv-curing/products/uv-spot-curing-systems
/uv-curing/products/omnicure-s2000-elite
/uv-curing/brands/omnicure
```

### 4.3 UV核心品牌

第一阶段重点品牌：**OmniCure**。

必须建设：

- OmniCure品牌落地页；
- S2000 Elite产品与技术支持页；
- LX500产品页；
- S2000灯泡、光导和滤光片等高意向配件页；
- 对应应用、维护、故障排查与维修内容。

ETIA的角色是授权代理商/分销商和本地服务商，不是设备制造商。所有授权地域和授权措辞必须以有效文件为准。

### 4.4 UV数据现状

- 共用产品事实库：约38个型号；
- 海外Google应用规划：约32条，需明确已确认与规划状态；
- 国内百度原始词：140条；
- 140条中包含具体应用、工艺词、产品类别词和支持词，不得全部作为Application页面发布；
- 页面类型必须区分：`industry`、`process`、`application`、`product_category`、`product`、`support`。

---

## 5. Label业务架构

### 5.1 业务定位

国内Label业务只销售和推广：

- 卷材标签材料；
- 不干胶标签材料；
- 工业特种标签材料；
- 材料分切与卷材供应；
- 材料选型、TDS、样品与对标支持。

主要客户：

- 标签印刷厂；
- 模切厂；
- 涂布与转换加工商；
- 工业标签解决方案商；
- 具备标签加工能力的大型制造企业。

### 5.2 Label访问入口

- 按行业与应用找材料；
- 按性能与工况找材料；
- 按产品类型找材料；
- 按现用品牌/料号进行对标；
- Polyonics特殊品牌入口。

### 5.3 Polyonics特殊双入口

Polyonics属于耐高温标签材料体系，同时具有独立品牌搜索价值：

```text
标签材料 → 耐高温标签材料 → Polyonics系列
品牌专区 → Polyonics中国区供应与选材支持
```

建议URL：

```text
/labels/materials/high-temperature/
/labels/materials/high-temperature/polyonics/
/labels/brands/polyonics/
```

底层使用同一套产品记录，不重复维护数据。

### 5.4 Label数据现状

- 约967个材料/参考型号；
- 9个数据来源品牌；
- 约200个百度应用；
- 约50个Google海外应用；
- 8个行业；
- 7个跨行业性能专题；
- 约250个候选内容索引。

这些数字是数据资产数量，不等于第一阶段必须公开的页面数量。

### 5.5 竞品与非代理品牌处理

3M、Avery、Brady、Flexcon、LINTEC及其他品牌可以保留在内部数据中，用于：

- 客户现用料号识别；
- 公开技术资料对照；
- 跨品牌候选匹配；
- 旧料号识别；
- 内部工程师选型。

但不得自动：

- 出现在ETIA代理品牌区；
- 被描述为ETIA授权品牌；
- 被列为ETIA常规销售产品；
- 被宣称为“完全替代”“完全等同”或“优于”。

建议至少记录：

```text
brand_relationship
public_visibility_cn
public_visibility_global
authorization_region
comparison_only
source
verification_status
```

---

## 6. SEO数据仓库

建议独立维护统一SEO数据仓库：

```text
etia-seo-data/
├── README.md
├── SCHEMA-模板与命名规范.md
├── uv-curing/
│   ├── README.md
│   ├── shared/
│   ├── overseas/
│   └── domestic/
└── label/
    ├── README.md
    ├── shared/
    ├── overseas/
    └── domestic/
```

### 6.1 UV目录

```text
uv-curing/
├── shared/
│   ├── product-database.csv / .md
│   ├── industry-taxonomy.md
│   └── content-index.csv
├── overseas/
│   ├── 32-applications-blueprint.md
│   └── gpt-content-template.md
└── domestic/
    └── baidu-140-keywords.csv
```

### 6.2 Label目录

```text
label/
├── shared/
│   ├── product-database.csv / .md
│   ├── industry-taxonomy.md
│   └── content-index.csv
├── overseas/
│   ├── google-50-applications.csv
│   └── en-content-template.md
└── domestic/
    └── baidu-200-applications.csv
```

### 6.3 数据原则

- `shared/`只保存技术事实、Master ID、分类、匹配和证据；
- `domestic/`保存百度关键词、中文内容、国内CTA和中国合规状态；
- `overseas/`保存Google关键词、英文/多语言内容及目标市场表达；
- 已有编号不得随意重编；
- 缺失值使用空值或`null`，禁止AI猜测；
- 每条产品—应用匹配必须说明依据和验证状态；
- 国内外共享技术事实，不机械复制SEO文案。

---

## 7. 百度SEO规则

国内站必须以百度及国内工业采购搜索习惯为主：

- 简体中文为主；
- 页面使用服务端渲染或静态生成，正文不能仅靠客户端JS加载；
- 每页必须有唯一Title、H1、Meta Description和搜索意图；
- 行业页、工艺页、应用页、产品分类页和单品页各自回答不同问题；
- 产品与应用双向内部链接；
- 按内容类型生成Sitemap；
- Canonical必须自引用且正确；
- 不批量制造换词不换内容的薄页面；
- 不进行关键词堆砌；
- URL保持简短、稳定、可读；
- 国内站CTA优先使用电话、微信、询价、索样和工程师咨询。

国内综合站推荐URL前缀：

```text
/labels/...
/uv-curing/...
```

国际UV站可屏蔽百度抓取，但不得影响Google和Bing收录。

---

## 8. 内容与角色口径

### 8.1 ETIA不是制造商

除ETIA自有产品且有证据支持外，禁止使用：

- 我们研发；
- 我们制造；
- 我们的专利技术；
- 原厂官方团队；
- 全球/亚太统一授权。

推荐表达：

- ETIA供应；
- ETIA提供选型支持；
- 正品渠道；
- 本地库存；
- 安装调试；
- 校准；
- 应用支持；
- 维修与备件支持。

### 8.2 技术内容要求

- 产品参数必须来自TDS、官方页面、产品手册或经确认的数据；
- 不得把营销语当作技术事实；
- 不得编造客户、案例结果、认证、参数或测试数字；
- 搜索词技术含义不准确时，应保留`raw_search_term`并另设`published_title`；
- 对材料和设备适用性的结论应保留必要验证条件。

---

## 9. 中国合规与商标规则

以下词语必须有证据并经过发布审核：

- 中国总代理；
- 独家代理；
- 唯一代理；
- 官方；
- 原装；
- 正品；
- 第一；
- 最佳；
- 领先；
- 100%；
- 永久；
- 完全替代。

每条授权或重要性能声明应记录：

```text
claim_source
verification_status
allowed_market
authorization_region
authorization_scope
allowed_public_wording
last_reviewed_at
```

第三方品牌、产品名和商标归其权利人所有。合理对标不等于代理或授权关系。

---

## 10. AI与团队分工

| 角色 | 主要职责 |
|---|---|
| 用户/CEO | 业务优先级、授权范围、品牌与发布决定 |
| CTO/项目架构 | 总体架构、数据规则、SEO、合规与验收标准 |
| Claude Code | 按已批准任务开发、提交、自测与修复 |
| Codex | 独立代码审计、质量门禁、必要时按授权实施修复 |
| UV数据AI | 38个产品、UV行业/工艺/应用及匹配数据 |
| Label数据AI | 967个材料、200＋50应用及材料匹配数据 |
| 豆包 | 百度关键词、国内搜索语言和中文初稿 |
| 内容审核 | 技术准确性、搜索意图、重复内容及广告合规 |

不同AI不得自行修改已经确认的行业分类、编号体系、授权口径或网站边界。

---

## 11. Codex初始工作方式

Codex安装后首先作为 **Independent Technical Auditor & Quality Gate**，先审计、后修改。

首次任务：

1. 阅读本文件及仓库README；
2. 检查仓库结构、框架、路由、数据源和部署配置；
3. 运行构建及已有测试；
4. 列出所有已实现页面与路由；
5. 找出存在于代码但无法从UI访问的内容；
6. 检查死代码、占位内容、失效链接和重复实现；
7. 检查主要内容是否存在于可索引HTML；
8. 检查Title、H1、Meta、Canonical、Sitemap和Robots；
9. 检查移动端与桌面端；
10. 检查品牌、授权、竞品和中国广告法风险；
11. 输出带证据和优先级的审计报告。

未经明确授权，首次审计不得：

- 修改文件；
- Commit或Push；
- 创建或合并PR；
- 部署；
- 修改DNS、域名或Vercel设置。

---

## 12. 开发顺序

### Phase 0：审计和基线

- 审计当前Claude Code已完成的代码；
- 确认已有路由与实际可见效果；
- 建立页面、数据和SEO验收基线。

### Phase 1：网站骨架与样板

- 国内首页双业务入口；
- Label业务入口；
- UV Curing业务入口；
- Polyonics特殊品牌入口；
- OmniCure品牌入口；
- 1个真实Label应用样板；
- 1个UV行业样板＋对应应用页；
- 产品、行业、应用的双向关联；
- 中文询价、索样和技术咨询CTA。

### Phase 2：首批内容集群

- UV优先汽车或光纤行业集群；
- Label优先电子/PCB、耐高温及耐化学应用集群；
- 完成百度SEO与移动端验收；
- 观察收录与询盘路径。

### Phase 3：受控扩展

- 仅将审核通过的数据批量导入；
- 分批发布应用页；
- Codex持续检查薄内容、重复内容、断链、索引和合规；
- 根据百度收录、排名与询盘数据调整优先级。

---

## 13. 当前禁止事项

未获得明确批准前，不得：

- 一次性发布全部140个UV关键词页；
- 一次性发布全部200个Label应用页；
- 将967个材料全部公开；
- 自动将竞品列为ETIA代理或普通销售品牌；
- 自动生成“完全替代”关系；
- 将成品标签内容混入卷材材料业务；
- 复制海外站文案作为国内百度页面；
- 修改生产DNS、域名、分析工具或部署设置；
- 删除用户已有数据或未关联的现有代码；
- 无授权证据使用“中国唯一代理”等表述。

---

## 14. Pull Request与交付要求

每个开发任务或PR必须包含：

- 任务目标；
- 修改文件；
- 新增或修改路由；
- 桌面端与移动端截图；
- 构建和测试结果；
- SEO影响；
- 合规影响；
- 数据来源；
- 已知限制；
- 回滚方式。

验收标准：

- 页面真实可见且可从导航/内部链接到达；
- 构建通过；
- 无明显控制台错误；
- 移动端可用；
- 核心内容可索引；
- 页面SEO字段唯一；
- 技术参数有来源；
- 授权和品牌表达符合市场范围；
- CTA与对应业务一致；
- 不影响用户已有有效页面和数据。

---

## 15. 项目核心原则

> **One technical fact base, two business lines, separate market content, evidence-backed publishing.**

中文解释：

> 一套经验证的技术事实，两条清晰业务线；国内外分别做SEO与合规表达，所有公开内容以证据为基础。

本文件是当前项目总章程。如后续决策变化，应更新本文件并记录日期，不允许多个AI各自保留相互冲突的项目规则。
