'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const performances = [
  { name: '耐高温标签', icon: '🔥', count: 38, temp: '最高1200℃' },
  { name: '耐低温标签', icon: '❄️', count: 12, temp: '最低-196℃' },
  { name: '防静电标签', icon: '⚡', count: 15, desc: 'ESD防护' },
  { name: '耐化学标签', icon: '🧪', count: 22, desc: '耐酸碱/溶剂/油污' },
  { name: '阻燃标签', icon: '🛡️', count: 10, desc: 'UL94 V-0认证' },
  { name: '可移除标签', icon: '📤', count: 18, desc: '无残胶' },
  { name: '户外耐候标签', icon: '☀️', count: 16, desc: '7-10年耐候' },
  { name: '轮胎硫化标签', icon: '🏭', count: 8, desc: '180℃硫化' },
];

export default function LabelsPerformancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb 
        items={[
          { name: '工业标签', href: '/labels/' },
          { name: '按性能分类' }
        ]}
        theme="blue"
      />

      <h1 className="text-3xl font-bold text-slate-900 mb-8">按性能要求查找标签</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {performances.map(p => (
          <Link
            key={p.name}
            href={`/labels/performance/${p.name.toLowerCase().replace(/\s+/g, '-')}/`}
            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
          >
            <div className="text-3xl mb-3">{p.icon}</div>
            <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 mb-1">{p.name}</h3>
            <p className="text-xs text-slate-500">{p.temp || p.desc}</p>
            <p className="text-sm text-blue-600 mt-2">{p.count}个方案</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
