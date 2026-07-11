import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllLabelSlugs, getLabelApplicationBySlug } from '@/lib/content';

// 生成静态路径
export function generateStaticParams() {
  const slugs = getAllLabelSlugs();
  return slugs.map(slug => ({ slug }));
}

// 生成Metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const app = getLabelApplicationBySlug(params.slug);
  if (!app) return {};
  return {
    title: app.seo.title,
    description: app.seo.description,
    keywords: app.seo.keywords,
  };
}

export default function LabelApplicationDetail({ params }: { params: { slug: string } }) {
  const app = getLabelApplicationBySlug(params.slug);
  
  if (!app) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 面包屑 */}
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-etia-blue">首页</Link> / 
        <Link href="/labels/" className="hover:text-etia-blue"> 工业标签</Link> / 
        <Link href="/labels/applications/" className="hover:text-etia-blue"> 应用场景</Link> / 
        <span className="text-slate-700"> {app.title}</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* 主内容 */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{app.industry}</span>
              {app.performance.map(p => (
                <span key={p} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{p}</span>
              ))}
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">{app.title}</h1>
          </div>

          {/* 工况参数卡片 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8">
            <h2 className="text-xl font-semibold mb-4">工况参数</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-slate-500">温度范围</div>
                <div className="font-semibold text-lg">{app.temperature.min}℃ ~ {app.temperature.max}℃</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">持续时间</div>
                <div className="font-semibold">{app.temperature.duration}</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">被贴表面</div>
                <div className="font-semibold">{app.surface}</div>
              </div>
              <div className="col-span-2 md:col-span-3">
                <div className="text-sm text-slate-500">化学环境</div>
                <div className="font-semibold">{app.chemicalExposure.join('、')}</div>
              </div>
            </div>
          </div>

          {/* 推荐方案 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8">
            <h2 className="text-xl font-semibold mb-4">推荐方案</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-24 text-slate-500">推荐基材：</span>
                <span className="font-medium">{app.recommendedMaterial}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-slate-500">推荐胶黏剂：</span>
                <span className="font-medium">{app.recommendedAdhesive}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-slate-500">推荐碳带：</span>
                <span className="font-medium">{app.recommendedRibbon}</span>
              </div>
            </div>
          </div>

          {/* 详细说明 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">详细说明</h2>
            <div className="whitespace-pre-line text-slate-700 leading-relaxed">
              {app.content}
            </div>
          </div>
        </div>

        {/* 侧边栏CTA */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">需要样品测试？</h3>
              <p className="text-blue-100 mb-6">我们可以提供免费样品和技术支持，根据您的具体工况提供定制化方案</p>
              <Link
                href="/labels/sample-request/"
                className="block w-full bg-white text-blue-700 text-center py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors mb-3"
              >
                申请免费样品
              </Link>
              <Link
                href="/contact/"
                className="block w-full bg-white/10 border border-white/30 text-white text-center py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                咨询标签工程师
              </Link>
            </div>

            {/* 相关推荐 */}
            <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-semibold mb-4">相关应用</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-slate-700 hover:text-blue-600">SMT防静电标签</Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-700 hover:text-blue-600">电路板阻燃标签</Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-700 hover:text-blue-600">BGA耐波峰焊标签</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
