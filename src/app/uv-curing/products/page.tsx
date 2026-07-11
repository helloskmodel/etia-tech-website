'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const products = [
  { slug: 's2000-elite', name: 'OmniCure S2000 Elite', category: 'UV点光源', lightSource: '汞灯', wavelength: '320-500nm', features: ['高精度', '闭环控制', '光强稳定'] },
  { slug: 'lx500-v2', name: 'OmniCure LX500 V2', category: 'LED点光源', lightSource: 'LED', wavelength: '365/385/405nm', features: ['高功率', '长寿命', '风冷'] },
  { slug: 'lx400', name: 'OmniCure LX400+', category: 'LED面光源', lightSource: 'LED', wavelength: '365/385/405nm', features: ['大面积', '均匀照射', '可编程'] },
  { slug: 'lx300', name: 'OmniCure LX300', category: 'UV传送带', lightSource: 'LED', wavelength: '365/395nm', features: ['量产', '可调速', '宽幅'] },
  { slug: 's1500', name: 'OmniCure S1500', category: '入门点光源', lightSource: '汞灯', wavelength: '320-500nm', features: ['高性价比', '简单易用', '紧凑设计'] },
  { slug: 'ac-series', name: 'OmniCure AC系列', category: 'LED面光源', lightSource: 'LED', wavelength: '365/385/395/405nm', features: ['超大面', '风冷', '工业级'] },
];

export default function UVProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb 
        items={[
          { name: 'UV光固化', href: '/uv-curing/' },
          { name: '产品中心' }
        ]}
        theme="purple"
      />

      <h1 className="text-3xl font-bold text-slate-900 mb-8">UV固化产品中心</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Link
            key={product.slug}
            href={`/uv-curing/products/${product.slug}/`}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
          >
            <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded inline-block mb-3">{product.category}</div>
            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-purple-700 mb-2">{product.name}</h3>
            <p className="text-sm text-slate-500 mb-1">光源：{product.lightSource} | {product.wavelength}</p>
            <div className="flex flex-wrap gap-1 mt-3">
              {product.features.map(f => (
                <span key={f} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{f}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
