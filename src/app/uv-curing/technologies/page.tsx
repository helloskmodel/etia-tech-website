'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const technologies = [
  { name: 'UV点光源', icon: '🔦', count: 28, desc: '精密点胶、小面积固化，最高20W/cm²' },
  { name: 'UV面光源', icon: '💡', count: 35, desc: '大面积均匀照射，产线批量固化' },
  { name: 'LED UV固化', icon: '⚡', count: 42, desc: '长寿命、低能耗、冷光源' },
  { name: '汞灯固化', icon: '💎', count: 25, desc: '宽光谱、高功率、传统工艺兼容' },
  { name: '传送带系统', icon: '🔄', count: 12, desc: '全自动在线固化，可调速' },
  { name: '光强测量', icon: '📏', count: 8, desc: '辐照计、光强校准设备' },
];

export default function UVTechnologiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb 
        items={[
          { name: 'UV光固化', href: '/uv-curing/' },
          { name: '按技术分类' }
        ]}
        theme="purple"
      />

      <h1 className="text-3xl font-bold text-slate-900 mb-8">按固化技术查找方案</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map(tech => (
          <Link
            key={tech.name}
            href={`/uv-curing/technologies/${tech.name.toLowerCase().replace(/\s+/g, '-')}/`}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
          >
            <div className="text-3xl mb-3">{tech.icon}</div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-purple-700">{tech.name}</h3>
              <span className="text-sm text-purple-600 font-medium">{tech.count}个应用</span>
            </div>
            <p className="text-sm text-slate-600">{tech.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
