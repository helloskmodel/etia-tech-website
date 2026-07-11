'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const resources = [
  { name: '技术文章', icon: '📝', count: 36, desc: '行业知识、选型指南、技术干货', href: '/technical-center/articles/' },
  { name: '视频教程', icon: '🎬', count: 12, desc: '操作演示、工艺讲解、产品介绍', href: '/technical-center/videos/' },
  { name: '资料下载', icon: '📄', count: 28, desc: '产品手册、Application Note、白皮书', href: '/technical-center/downloads/' },
  { name: '行业资讯', icon: '📰', count: 45, desc: '公司新闻、行业动态、展会信息', href: '/technical-center/news/' },
];

export default function TechnicalCenterPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ name: '技术中心' }]} />

      <h1 className="text-3xl font-bold text-slate-900 mb-8">技术中心</h1>
      <p className="text-slate-600 mb-8 max-w-2xl">提供工业标签和UV光固化领域的专业技术资料、选型指南、应用案例和视频教程，帮助工程师快速解决问题。</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {resources.map(r => (
          <Link
            key={r.name}
            href={r.href}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
          >
            <div className="text-3xl mb-3">{r.icon}</div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-etia-blue">{r.name}</h3>
              <span className="text-sm text-slate-500">{r.count}篇</span>
            </div>
            <p className="text-sm text-slate-600">{r.desc}</p>
          </Link>
        ))}
      </div>

      <div className="bg-slate-50 p-8 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">需要技术支持？</h2>
        <p className="text-slate-600 mb-6">我们的技术工程师团队可以为您提供选型建议、样品测试、工艺调试等专业支持。</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact/" className="bg-etia-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-etia-darkblue transition-colors">
            联系技术工程师
          </Link>
          <Link href="/labels/sample-request/" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors">
            申请标签样品
          </Link>
          <Link href="/uv-curing/test-request/" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors">
            预约UV测试
          </Link>
        </div>
      </div>
    </div>
  );
}
