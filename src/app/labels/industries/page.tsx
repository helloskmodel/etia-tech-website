'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const industries = [
  { name: '电子制造', count: 45, desc: 'PCB、SMT、芯片、半导体等电子制造全流程标签' },
  { name: '汽车工业', count: 32, desc: '线束、发动机舱、零部件追溯、轮胎硫化标签' },
  { name: '钢铁冶金', count: 18, desc: '钢坯、钢卷、锻件、铝材等高温冶金标签' },
  { name: '医疗器械', count: 22, desc: '灭菌标签、试管标签、低温生物标签、UDI追溯' },
  { name: '新能源', count: 15, desc: '动力电池、光伏、储能行业专用标签' },
  { name: '光通信', count: 12, desc: '光纤、光模块、连接器标识标签' },
];

export default function LabelsIndustriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb 
        items={[
          { name: '工业标签', href: '/labels/' },
          { name: '按行业分类' }
        ]}
        theme="blue"
      />

      <h1 className="text-3xl font-bold text-slate-900 mb-8">按行业查找标签方案</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map(ind => (
          <Link
            key={ind.name}
            href={`/labels/industries/${ind.name.toLowerCase().replace(/\s+/g, '-')}/`}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">{ind.name}</h3>
              <span className="text-sm text-blue-600 font-medium">{ind.count}个方案</span>
            </div>
            <p className="text-sm text-slate-600">{ind.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
