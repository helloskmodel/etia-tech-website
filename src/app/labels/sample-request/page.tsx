'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LabelSampleRequest() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 后续对接邮件通知/腾讯云函数
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
            ✅
          </div>
          <h1 className="text-2xl font-bold mb-4">提交成功！</h1>
          <p className="text-slate-600 mb-6">我们的标签工程师会在1个工作日内与您联系，确认样品需求和寄送地址。</p>
          <Link href="/labels/" className="text-etia-blue font-medium hover:underline">
            返回标签业务中心 →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-etia-blue">首页</Link> / 
        <Link href="/labels/" className="hover:text-etia-blue"> 工业标签</Link> / 
        <span className="text-slate-700"> 申请样品</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">申请标签样品</h1>
      <p className="text-slate-600 mb-8">请填写您的工况信息，我们将为您推荐合适的标签材料并寄送免费样品。</p>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">公司名称 *</label>
            <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">联系人 *</label>
            <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">联系电话 *</label>
            <input type="tel" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">邮箱</label>
            <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">所属行业 *</label>
          <select required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
            <option value="">请选择</option>
            <option>电子制造</option>
            <option>汽车工业</option>
            <option>钢铁冶金</option>
            <option>医疗器械</option>
            <option>新能源</option>
            <option>其他</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">最高温度 *</label>
            <input type="text" placeholder="例如：260℃" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">持续时间</label>
            <input type="text" placeholder="例如：60秒" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">被贴物表面 *</label>
          <input type="text" placeholder="例如：FR-4电路板、钢材、塑料" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">特殊要求</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center"><input type="checkbox" className="mr-2" /> 防静电</label>
            <label className="flex items-center"><input type="checkbox" className="mr-2" /> 阻燃</label>
            <label className="flex items-center"><input type="checkbox" className="mr-2" /> 可移除不留胶</label>
            <label className="flex items-center"><input type="checkbox" className="mr-2" /> 耐化学溶剂</label>
            <label className="flex items-center"><input type="checkbox" className="mr-2" /> 户外耐候</label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">其他说明</label>
          <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="请描述您的具体应用场景和要求"></textarea>
        </div>

        <button type="submit" className="w-full bg-etia-blue text-white py-3 rounded-lg font-semibold hover:bg-etia-darkblue transition-colors">
          提交申请
        </button>
      </form>
    </div>
  );
}
