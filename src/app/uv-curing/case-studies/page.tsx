'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const cases = [
  { title: '某医疗器械公司导管粘接固化项目', industry: '医疗器械', result: '粘接强度提升40%，良率达99.5%' },
  { title: '某光模块厂商高速固化产线', industry: '光通信', result: '固化时间从10秒缩短至2秒，产能提升5倍' },
  { title: '某摄像头模组厂UV固化工艺升级', industry: '电子制造', result: '能耗降低70%，设备寿命延长3倍' },
  { title: '某印刷企业UV油墨固化改造', industry: '印刷包装', result: '无VOC排放，干燥速度提升2倍' },
];

export default function UVCaseStudies() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb 
        items={[
          { name: 'UV光固化', href: '/uv-curing/' },
          { name: '客户案例' }
        ]}
        theme="purple"
      />

      <h1 className="text-3xl font-bold text-slate-900 mb-8">UV固化客户案例</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{c.industry}</span>
            <h3 className="text-lg font-semibold text-slate-900 mt-3 mb-2">{c.title}</h3>
            <p className="text-sm text-green-700 font-medium">✓ {c.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
