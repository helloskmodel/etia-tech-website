'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const cases = [
  { title: '某大型钢铁厂钢坯追溯标签项目', industry: '钢铁冶金', result: '标签识别率99.8%，使用寿命提升3倍' },
  { title: '某汽车线束厂耐油污标签应用', industry: '汽车工业', result: '通过整车厂1500小时耐油污测试' },
  { title: '某PCB厂SMT高温标签批量应用', industry: '电子制造', result: '回流焊后条码可读率100%' },
  { title: '某医疗器械公司低温标签项目', industry: '医疗器械', result: '液氮-196℃保存6个月条码清晰' },
];

export default function LabelsCaseStudies() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb 
        items={[
          { name: '工业标签', href: '/labels/' },
          { name: '客户案例' }
        ]}
        theme="blue"
      />

      <h1 className="text-3xl font-bold text-slate-900 mb-8">标签客户案例</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{c.industry}</span>
            <h3 className="text-lg font-semibold text-slate-900 mt-3 mb-2">{c.title}</h3>
            <p className="text-sm text-green-700 font-medium">✓ {c.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
