'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function UVTestRequest() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
            ✅
          </div>
          <h1 className="text-2xl font-bold mb-4">预约成功！</h1>
          <p className="text-slate-600 mb-6">我们的UV工艺工程师会在1个工作日内与您联系，确认测试样品和时间安排。</p>
          <Link href="/uv-curing/" className="text-purple-600 font-medium hover:underline">
            返回UV业务中心 →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-purple-600">首页</Link> / 
        <Link href="/uv-curing/" className="hover:text-purple-600"> UV光固化</Link> / 
        <span className="text-slate-700"> 预约测试</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">预约UV固化测试</h1>
      <p className="text-slate-600 mb-8">请填写您的工艺信息，我们将在应用实验室为您完成固化测试，提供最佳工艺参数和设备推荐。</p>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">公司名称 *</label>
            <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">联系人 *</label>
            <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">联系电话 *</label>
            <input type="tel" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">邮箱</label>
            <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">应用行业 *</label>
          <select required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none">
            <option value="">请选择</option>
            <option>医疗器械</option>
            <option>光通信</option>
            <option>电子制造</option>
            <option>印刷包装</option>
            <option>汽车工业</option>
            <option>其他</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">固化材料 *</label>
            <select required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none">
              <option value="">请选择</option>
              <option>UV胶黏剂</option>
              <option>UV油墨</option>
              <option>UV涂层</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">基材</label>
            <input type="text" placeholder="例如：塑料、玻璃、金属" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">生产节拍</label>
            <input type="text" placeholder="例如：3秒/件" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">照射面积</label>
            <input type="text" placeholder="例如：直径10mm" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">光源偏好</label>
            <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none">
              <option>无偏好</option>
              <option>LED</option>
              <option>汞灯</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">其他工艺要求</label>
          <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none" placeholder="请描述您的具体工艺要求和遇到的问题"></textarea>
        </div>

        <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
          预约测试
        </button>
      </form>
    </div>
  );
}
