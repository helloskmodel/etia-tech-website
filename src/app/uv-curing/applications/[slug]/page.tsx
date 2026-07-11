import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllUVSlugs, getUVApplicationBySlug } from '@/lib/content';

// 生成静态路径
export function generateStaticParams() {
  const slugs = getAllUVSlugs();
  return slugs.map(slug => ({ slug }));
}

// 生成Metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const app = getUVApplicationBySlug(params.slug);
  if (!app) return {};
  return {
    title: app.seo.title,
    description: app.seo.description,
    keywords: app.seo.keywords,
  };
}

export default function UVApplicationDetail({ params }: { params: { slug: string } }) {
  const app = getUVApplicationBySlug(params.slug);
  
  if (!app) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 面包屑 */}
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-purple-600">首页</Link> / 
        <Link href="/uv-curing/" className="hover:text-purple-600"> UV光固化</Link> / 
        <Link href="/uv-curing/applications/" className="hover:text-purple-600"> 应用场景</Link> / 
        <span className="text-slate-700"> {app.title}</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* 主内容 */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{app.industry}</span>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{app.lightSource}</span>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{app.wavelength.join('/')}nm</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">{app.title}</h1>
          </div>

          {/* 工艺参数卡片 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8">
            <h2 className="text-xl font-semibold mb-4">工艺参数</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-slate-500">推荐波长</div>
                <div className="font-semibold text-lg">{app.wavelength.join('/')}nm</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">辐照度</div>
                <div className="font-semibold">{app.irradiance} mW/cm²</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">能量剂量</div>
                <div className="font-semibold">{app.dose} mJ/cm²</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">工作距离</div>
                <div className="font-semibold">{app.workingDistance}</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">固化时间</div>
                <div className="font-semibold">{app.cycleTime}</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">光源类型</div>
                <div className="font-semibold">{app.lightSource}</div>
              </div>
            </div>
          </div>

          {/* 推荐设备 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8">
            <h2 className="text-xl font-semibold mb-4">推荐设备</h2>
            <div className="flex items-center">
              <span className="w-24 text-slate-500">推荐型号：</span>
              <span className="font-semibold text-purple-700 text-lg">{app.recommendedProduct}</span>
            </div>
          </div>

          {/* 详细说明 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">工艺说明</h2>
            <div className="whitespace-pre-line text-slate-700 leading-relaxed">
              {app.content}
            </div>
          </div>
        </div>

        {/* 侧边栏CTA */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-gradient-to-br from-purple-600 to-violet-600 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">需要工艺验证？</h3>
              <p className="text-purple-100 mb-6">我们的应用实验室提供免费样品测试，为您确定最佳工艺参数和设备配置</p>
              <Link
                href="/uv-curing/test-request/"
                className="block w-full bg-white text-purple-700 text-center py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors mb-3"
              >
                预约免费测试
              </Link>
              <Link
                href="/contact/"
                className="block w-full bg-white/10 border border-white/30 text-white text-center py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                咨询UV工艺工程师
              </Link>
            </div>

            {/* 相关资源 */}
            <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-semibold mb-4">相关资源</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/uv-curing/applications/" className="text-slate-700 hover:text-purple-600">浏览全部UV固化应用</Link>
                </li>
                <li>
                  <Link href="/uv-curing/technologies/" className="text-slate-700 hover:text-purple-600">UV固化技术介绍</Link>
                </li>
                <li>
                  <Link href="/technical-center/" className="text-slate-700 hover:text-purple-600">技术中心与工艺支持</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
