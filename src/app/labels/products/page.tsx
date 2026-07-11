'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

const products = [
  { slug: 'polyimide-high-temp', name: '聚酰亚胺高温标签系列', category: '高温标签', tempRange: '-40℃ ~ 350℃', features: ['耐回流焊', '防静电', '阻燃'] },
  { slug: 'steel-mill-tag', name: '钢铁厂专用吊牌标签', category: '冶金标签', tempRange: '室温 ~ 1200℃', features: ['耐高温', '耐磨损', '金属附着'] },
  { slug: 'automotive-label', name: '汽车行业专用标签', category: '汽车标签', tempRange: '-40℃ ~ 180℃', features: ['耐油污', '耐化学', '长期耐候'] },
  { slug: 'medical-low-temp', name: '医疗耐低温标签', category: '医疗标签', tempRange: '-196℃ ~ 121℃', features: ['耐液氮', '耐灭菌', '无毒'] },
  { slug: 'outdoor-weatherable', name: '户外耐候标签', category: '通用标签', tempRange: '-40℃ ~ 150℃', features: ['抗UV', '防水', '7年耐候'] },
  { slug: 'removable-label', name: '可移除不留胶标签', category: '特殊标签', tempRange: '-20℃ ~ 120℃', features: ['易剥离', '无残胶', '可重贴'] },
];

export default function LabelsProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb 
        items={[
          { name: '工业标签', href: '/labels/' },
          { name: '产品中心' }
        ]}
        theme="blue"
      />

      <h1 className="text-3xl font-bold text-slate-900 mb-8">标签产品中心</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <Link
            key={product.slug}
            href={`/labels/products/${product.slug}/`}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 group"
          >
            <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded inline-block mb-3">{product.category}</div>
            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 mb-2">{product.name}</h3>
            <p className="text-sm text-slate-500 mb-3">温度范围：{product.tempRange}</p>
            <div className="flex flex-wrap gap-1">
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
