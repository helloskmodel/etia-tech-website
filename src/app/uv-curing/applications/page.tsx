'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';

// 模拟数据
const mockApplications = [
  { slug: 'medical-catheter-bonding', title: '医疗导管UV胶粘接', industry: '医疗器械', wavelength: '365nm', lightSource: 'LED', recommendedProduct: 'S2000 Elite' },
  { slug: 'optical-fiber-coating', title: '光纤涂层固化', industry: '光通信', wavelength: '385nm', lightSource: 'LED', recommendedProduct: 'LX500 V2' },
  { slug: 'camera-module-assembly', title: '摄像头模组组装', industry: '电子制造', wavelength: '365nm', lightSource: 'Both', recommendedProduct: 'LX400+' },
  { slug: 'optical-module-bonding', title: '光模块粘接固化', industry: '光通信', wavelength: '365nm', lightSource: 'Arc Lamp', recommendedProduct: 'S2000 Elite' },
  { slug: 'syringe-needle-bonding', title: '注射器针头粘接', industry: '医疗器械', wavelength: '365nm', lightSource: 'LED', recommendedProduct: 'S1500' },
  { slug: 'uv-ink-printing', title: 'UV油墨丝印固化', industry: '印刷包装', wavelength: '395nm', lightSource: 'LED', recommendedProduct: 'LX300' },
];

const industries = ['全部', '医疗器械', '光通信', '电子制造', '印刷包装', '汽车工业'];
const wavelengths = ['全部', '365nm', '385nm', '395nm', '405nm'];
const lightSources = ['全部', 'LED', 'Arc Lamp', 'Both'];

export default function UVApplicationsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('全部');
  const [selectedWavelength, setSelectedWavelength] = useState('全部');
  const [selectedLightSource, setSelectedLightSource] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApplications = useMemo(() => {
    return mockApplications.filter(app => {
      const matchIndustry = selectedIndustry === '全部' || app.industry === selectedIndustry;
      const matchWavelength = selectedWavelength === '全部' || app.wavelength === selectedWavelength;
      const matchLightSource = selectedLightSource === '全部' || app.lightSource === selectedLightSource;
      const matchSearch = app.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         app.recommendedProduct.toLowerCase().includes(searchQuery.toLowerCase());
      return matchIndustry && matchWavelength && matchLightSource && matchSearch;
    });
  }, [selectedIndustry, selectedWavelength, selectedLightSource, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* 面包屑 */}
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-purple-600">首页</Link> / 
        <Link href="/uv-curing/" className="hover:text-purple-600"> UV光固化</Link> / 
        <span className="text-slate-700"> 应用场景</span>
      </div>

      <h1 className="text-3xl font-bold text-slate-900 mb-8">UV固化应用场景</h1>

      {/* 筛选栏 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* 搜索 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">搜索应用</label>
            <input
              type="text"
              placeholder="输入关键词，如医疗、光纤..."
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* 行业筛选 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">应用行业</label>
            <select
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
            >
              {industries.map(ind => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          {/* 波长筛选 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">波长</label>
            <select
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              value={selectedWavelength}
              onChange={(e) => setSelectedWavelength(e.target.value)}
            >
              {wavelengths.map(w => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>

          {/* 光源类型 */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">光源类型</label>
            <select
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
              value={selectedLightSource}
              onChange={(e) => setSelectedLightSource(e.target.value)}
            >
              {lightSources.map(l => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-500">
          共找到 <span className="font-semibold text-purple-600">{filteredApplications.length}</span> 个固化方案
        </div>
      </div>

      {/* 应用列表 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApplications.map(app => (
          <Link
            key={app.slug}
            href={`/uv-curing/applications/${app.slug}/`}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">{app.industry}</span>
              <span className="text-sm text-slate-500">{app.wavelength}</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-purple-700 mb-2">{app.title}</h3>
            <p className="text-sm text-slate-500 mb-3">推荐设备：{app.recommendedProduct}</p>
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{app.lightSource}</span>
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
