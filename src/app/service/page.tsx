import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '服务支持 | ETIA怡天科技',
  description: '怡天科技提供免费样品测试、UV固化工艺验证、应用实验室支持与技术咨询，为工业标签与UV光固化应用提供全流程服务。',
};

const services = [
  {
    icon: '🧪',
    title: '免费样品测试',
    desc: '根据您的具体工况提供免费样品，验证标签在高温、化学、机械环境下的可靠性。',
    href: '/labels/sample-request/',
    cta: '申请样品',
  },
  {
    icon: '🔬',
    title: 'UV固化工艺验证',
    desc: '应用实验室提供免费固化测试，帮您确定最佳波长、剂量、工作距离与生产节拍。',
    href: '/uv-curing/test-request/',
    cta: '预约测试',
  },
  {
    icon: '📐',
    title: '技术选型咨询',
    desc: '20年工业应用经验，协助您从基材、胶黏剂、碳带到UV设备完成完整选型。',
    href: '/technical-center/',
    cta: '技术中心',
  },
  {
    icon: '🛠️',
    title: '设备与工艺支持',
    desc: 'OmniCure设备校准、维护保养与工艺调试，保障产线稳定运行。',
    href: '/contact/',
    cta: '联系工程师',
  },
];

export default function ServicePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-etia-blue">首页</Link> /
        <span className="text-slate-700"> 服务支持</span>
      </div>

      <h1 className="text-3xl font-bold text-slate-900 mb-4">服务支持</h1>
      <p className="text-lg text-slate-600 mb-12 max-w-3xl">
        从样品测试到工艺验证，怡天科技为工业标签与UV光固化应用提供全流程技术服务，帮助您在量产前确定可靠的材料与工艺方案。
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col">
            <div className="text-3xl mb-3">{s.icon}</div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">{s.title}</h2>
            <p className="text-slate-600 mb-6 flex-1">{s.desc}</p>
            <Link href={s.href} className="text-etia-blue font-medium hover:underline">
              {s.cta} →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-slate-50 p-8 rounded-2xl text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">需要专属技术支持？</h2>
        <p className="text-slate-600 mb-6">拨打服务热线 400-990-8448，或在线联系我们的工程师团队。</p>
        <Link
          href="/contact/"
          className="inline-block bg-etia-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-etia-darkblue transition-colors"
        >
          联系我们
        </Link>
      </div>
    </div>
  );
}
