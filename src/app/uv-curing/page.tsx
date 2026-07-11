import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UV光固化设备与工艺解决方案 | OmniCure授权代理',
  description: 'Excelitas OmniCure官方授权代理，提供UV点光源、面光源、LED固化系统，覆盖医疗、光通信、电子组装等行业',
};

export default function UVCuringHome() {
  const techFilters = [
    { name: 'UV点光源', icon: '🔦', href: '/uv-curing/technologies/spot-curing/' },
    { name: 'UV面光源', icon: '💡', href: '/uv-curing/technologies/area-curing/' },
    { name: 'LED UV固化', icon: '⚡', href: '/uv-curing/technologies/led/' },
    { name: '汞灯固化', icon: '💎', href: '/uv-curing/technologies/arc-lamp/' },
    { name: '传送带系统', icon: '🔄', href: '/uv-curing/technologies/conveyor/' },
    { name: '光强测量', icon: '📏', href: '/uv-curing/technologies/measurement/' },
  ];

  const hotApplications = [
    { name: '医疗导管UV胶粘接', industry: '医疗器械', product: 'S2000 Elite' },
    { name: '光纤涂层固化', industry: '光通信', product: 'LX500 V2' },
    { name: '摄像头模组组装', industry: '电子制造', product: 'LX400+' },
    { name: '光模块粘接固化', industry: '光通信', product: 'S2000 Elite' },
    { name: '注射器针头粘接', industry: '医疗器械', product: 'S1500' },
    { name: 'UV油墨丝印固化', industry: '印刷包装', product: 'LX300' },
  ];

  return (
    <div>
      {/* UV业务Hero */}
      <section className="uv-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-purple-100 mb-2">
            <Link href="/" className="hover:text-white">首页</Link> / UV光固化
          </div>
          <h1 className="text-4xl font-bold mb-4">UV光固化系统与工艺支持</h1>
          <p className="text-xl text-purple-100 max-w-3xl mb-6">
            Excelitas OmniCure官方授权代理，从胶黏剂特性、波长、剂量和生产节拍出发，提供完整的UV固化设备与工艺验证服务
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/uv-curing/test-request/" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              预约免费样品测试
            </Link>
            <Link href="/uv-curing/applications/" className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
              浏览全部应用
            </Link>
          </div>
        </div>
      </section>

      {/* 品牌标识 */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8">
            <div className="text-slate-500 text-sm">官方授权品牌：</div>
            <div className="font-bold text-xl text-slate-800">OmniCure</div>
            <div className="text-slate-300">|</div>
            <div className="text-slate-600">Excelitas Technologies</div>
          </div>
        </div>
      </section>

      {/* 技术分类 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">按固化技术查找</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techFilters.map((filter) => (
              <Link
                key={filter.name}
                href={filter.href}
                className="flex items-center p-4 rounded-xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50 transition-all group"
              >
                <span className="text-2xl mr-3">{filter.icon}</span>
                <span className="font-medium text-slate-800 group-hover:text-purple-700">{filter.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 热门应用 */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">热门固化应用</h2>
            <Link href="/uv-curing/applications/" className="text-purple-600 font-medium hover:text-purple-700">
              查看全部 →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {hotApplications.map((app) => (
              <Link
                key={app.name}
                href={`/uv-curing/applications/${app.name.toLowerCase().replace(/\s+/g, '-')}/`}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{app.industry}</span>
                  <span className="text-sm font-medium text-slate-500">推荐：{app.product}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-purple-700 mb-2">{app.name}</h3>
                <p className="text-sm text-slate-500">提供完整工艺参数和光强验证服务</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Application Notes */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">技术资源</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/technical-center/" className="p-6 rounded-xl border border-slate-200 hover:border-purple-300 transition-all">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="text-lg font-semibold mb-2">Application Notes</h3>
              <p className="text-sm text-slate-600">官方应用笔记，详细工艺参数和设备配置指南</p>
            </Link>
            <Link href="/technical-center/" className="p-6 rounded-xl border border-slate-200 hover:border-purple-300 transition-all">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-semibold mb-2">故障排除指南</h3>
              <p className="text-sm text-slate-600">常见固化问题诊断和解决方案</p>
            </Link>
            <Link href="/service/" className="p-6 rounded-xl border border-slate-200 hover:border-purple-300 transition-all">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-lg font-semibold mb-2">技术支持</h3>
              <p className="text-sm text-slate-600">设备校准、维修保养、工艺调试服务</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">需要固化工艺验证？</h2>
            <p className="text-slate-600 mb-6">我们的应用实验室提供免费样品测试，为您确定最佳波长、剂量和设备配置</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/uv-curing/test-request/" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                预约免费测试
              </Link>
              <Link href="/contact/" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                咨询UV工艺工程师
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
