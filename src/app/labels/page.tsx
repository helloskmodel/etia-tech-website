import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '工业特种标签与追溯解决方案 | ETIA怡天科技',
  description: '提供耐高温、耐化学、防静电、可移除等200+工况验证工业标签，覆盖电子、汽车、钢铁、医疗等行业',
};

export default function LabelsHome() {
  const performanceFilters = [
    { name: '耐高温标签', icon: '🔥', href: '/labels/performance/high-temperature/' },
    { name: '防静电标签', icon: '⚡', href: '/labels/performance/esd/' },
    { name: '耐化学标签', icon: '🧪', href: '/labels/performance/chemical-resistant/' },
    { name: '耐低温标签', icon: '❄️', href: '/labels/performance/low-temperature/' },
    { name: '阻燃标签', icon: '🛡️', href: '/labels/performance/flame-retardant/' },
    { name: '户外耐候', icon: '☀️', href: '/labels/performance/outdoor/' },
    { name: '可移除标签', icon: '📤', href: '/labels/performance/removable/' },
    { name: '轮胎硫化', icon: '🏭', href: '/labels/performance/tire-vulcanization/' },
  ];

  const hotApplications = [
    { name: 'PCB耐回流焊标签', temp: '260℃', industry: '电子制造' },
    { name: '800℃钢坯标签', temp: '800℃', industry: '钢铁冶金' },
    { name: '汽车线束耐油污标签', temp: '150℃', industry: '汽车工业' },
    { name: '液氮耐低温标签', temp: '-196℃', industry: '医疗生物' },
    { name: '1100℃钢锻件吊牌', temp: '1100℃', industry: '钢铁冶金' },
    { name: '锂电池阻燃标签', temp: '120℃', industry: '新能源' },
  ];

  return (
    <div>
      {/* 标签业务Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-blue-100 mb-2">
            <Link href="/" className="hover:text-white">首页</Link> / 工业标签
          </div>
          <h1 className="text-4xl font-bold mb-4">工业特种标签与追溯解决方案</h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-6">
            200+工况验证标签方案，从被贴物、温度、化学环境和追溯要求出发，帮助工程师找到可靠的标识材料
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/labels/sample-request/" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              申请免费样品
            </Link>
            <Link href="/labels/applications/" className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
              浏览全部应用
            </Link>
          </div>
        </div>
      </section>

      {/* 快速筛选 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">按性能快速查找</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {performanceFilters.map((filter) => (
              <Link
                key={filter.name}
                href={filter.href}
                className="flex items-center p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
              >
                <span className="text-2xl mr-3">{filter.icon}</span>
                <span className="font-medium text-slate-800 group-hover:text-blue-700">{filter.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 热门应用 */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">热门标签应用</h2>
            <Link href="/labels/applications/" className="text-blue-600 font-medium hover:text-blue-700">
              查看全部 →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {hotApplications.map((app) => (
              <Link
                key={app.name}
                href={`/labels/applications/${app.name.toLowerCase().replace(/\s+/g, '-')}/`}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{app.industry}</span>
                  <span className="text-lg font-bold text-orange-600">{app.temp}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 mb-2">{app.name}</h3>
                <p className="text-sm text-slate-500">经过实际工况验证，条码可读率100%</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 选型工具 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">不确定选哪种标签？</h2>
            <p className="text-slate-600 mb-6">告诉我们您的具体工况，我们的标签工程师为您推荐最合适的方案</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/labels/sample-request/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                提交工况获取方案
              </Link>
              <Link href="/contact/" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                咨询标签工程师
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
