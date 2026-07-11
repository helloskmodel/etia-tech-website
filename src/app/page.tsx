import Link from 'next/link';

export default function Home() {
  const industries = [
    { name: '电子制造', icon: '🔌' },
    { name: '汽车工业', icon: '🚗' },
    { name: '医疗器械', icon: '🏥' },
    { name: '钢铁冶金', icon: '🔥' },
    { name: '新能源', icon: '🔋' },
    { name: '光通信', icon: '💡' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="industrial-gradient text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              面向先进制造的<br />工业标识与UV光固化解决方案
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              怡天科技基于20年工业应用经验，为电子、汽车、医疗、新能源、光通信及精密制造提供工业特种标签、条码追溯和UV光固化设备与工艺支持。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/labels/"
                className="bg-white text-etia-darkblue px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                工业标签解决方案
              </Link>
              <Link
                href="/uv-curing/"
                className="bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                UV光固化解决方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 双业务入口 */}
      <section className="py-16 lg:py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 标签业务卡片 */}
            <Link href="/labels/" className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:-translate-y-1">
              <div className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  🏷️
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">工业标签与标识解决方案</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  耐高温、耐低温、耐化学、防静电、可移除、户外耐候等200+工况验证标签方案，覆盖PCB、钢铁、汽车、医疗等全行业。
                </p>
                <div className="flex items-center text-etia-blue font-semibold group-hover:gap-3 gap-2 transition-all">
                  进入标签业务中心
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            </Link>

            {/* UV业务卡片 */}
            <Link href="/uv-curing/" className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:-translate-y-1">
              <div className="p-8">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  💡
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">UV光固化系统</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  OmniCure官方授权，提供UV点光源、面光源、LED与汞灯系统及完整工艺支持，覆盖医疗、光通信、电子组装等精密制造。
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                  进入UV业务中心
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-purple-500 to-violet-500"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* 20年经验 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">20年工业应用经验</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              自2004年起，我们为超过1000家制造企业提供可靠的标识与固化解决方案
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="text-center p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="font-medium text-slate-800">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心能力 */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">核心技术能力</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-3">工况验证实验室</h3>
              <p className="text-slate-600">所有标签材料和UV工艺均经过实际工况验证，确保在极端环境下稳定可靠</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3">定制化方案</h3>
              <p className="text-slate-600">根据客户实际工况提供定制化材料选型、工艺参数和自动化集成方案</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">本地化技术支持</h3>
              <p className="text-slate-600">全国服务网络，提供现场技术支持、样品测试和工艺调试服务</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">需要技术支持？</h2>
          <p className="text-lg text-slate-600 mb-8">
            我们的技术工程师可以根据您的具体工况，提供专业的选型建议和样品测试服务
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/labels/sample-request/" className="bg-etia-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-etia-darkblue transition-colors">
              申请标签样品
            </Link>
            <Link href="/uv-curing/test-request/" className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              预约UV测试
            </Link>
            <Link href="/contact/" className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
              联系工程师
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
