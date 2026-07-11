'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';

// 模拟数据，实际从content读取
const mockApplications = [
  { slug: 'pcb-reflow-soldering', title: 'PCB耐回流焊标签', industry: '电子制造', tempMax: 280, performance: ['耐高温', '防静电'], surface: 'FR-4电路板' },
  { slug: 'steel-billet-800c', title: '800℃钢坯标签', industry: '钢铁冶金', tempMax: 800, performance: ['耐高温'], surface: '钢材' },
  { slug: 'automotive-wire-harness', title: '汽车线束耐油污标签', industry: '汽车工业', tempMax: 150, performance: ['耐油污', '耐温'], surface: 'PVC线束' },
  { slug: 'liquid-nitrogen', title: '耐液氮低温标签', industry: '医疗生物', tempMax: -196, performance: ['耐低温'], surface: '离心管' },
  { slug: 'steel-forging-1100c', title: '1100℃钢锻件吊牌', industry: '钢铁冶金', tempMax: 1100, performance: ['耐高温'], surface: '钢材' },
  { slug: 'lithium-battery', title: '锂电池阻燃标签', industry: '新能源', tempMax: 120, performance: ['阻燃', '耐温'], surface: '塑料外壳' },
];

const industries = ['全部', '电子制造', '汽车工业', '钢铁冶金', '医疗生物', '新能源'];
const performances = ['全部', '耐高温', '防静电', '耐化学', '耐低温', '阻燃', '可移除', '户外耐候'];

export default function LabelsApplicationsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('全部');
  const [selectedPerformance, setSelectedPerformance] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApplications = useMemo(() => {
    return mockApplications.filter(app => {
      const matchIndustry = selectedIndustry === '全部' || app.industry === selectedIndustry;
      const matchPerformance = selectedPerformance === '全部' || app.performance.includes(selectedPerformance);
      const matchSearch = app.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         app.surface.toLowerCase().includes(searchQuery.toLowerCase());
      return matchIndustry && matchPerformance && matchSearch;
    });
  }, [selectedIndustry, selectedPerformance, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 面包屑 */}
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-etia-blue">首页</Link> / 
        <Link href="/labels/" className="hover:text-etia-blue"> 工业标签</Link> / 
        <span className="text-slate-700"> 应用场景</span>
      </div>

      <h1 className="text-3xl font-bold text-slate-900 mb-8">标签应用场景</h1>

      {/* 筛选栏 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* 搜索 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">搜索应用</label>
            <input
              type="text"
              placeholder="输入关键词，如PCB、钢坯..."
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* 行业筛选 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">所属行业</label>
            <select
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
            >
              {industries.map(ind => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          {/* 性能筛选 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">性能要求</label>
            <select
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={selectedPerformance}
              onChange={(e) => setSelectedPerformance(e.target.value)}
            >
              {performances.map(perf => (
                <option key={perf} value={perf}>{perf}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-500">
          共找到 <span className="font-semibold text-etia-blue">{filteredApplications.length}</span> 个应用方案
        </div>
      </div>

      {/* 应用列表 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApplications.map(app => (
          <Link
            key={app.slug}
            href={`/labels/applications/${app.slug}/`}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{app.industry}</span>
              <span className="text-lg font-bold text-orange-600">{app.tempMax}℃</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 mb-2">{app.title}</h3>
            <p className="text-sm text-slate-500 mb-3">适用表面：{app.surface}</p>
            <div className="flex flex-wrap gap-1">
              {app.performance.map(p => (
                <span key={p} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{p}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {filteredApplications.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          没有找到符合条件的应用，请调整筛选条件
        </div>
      )}
    </div>
  );
}
