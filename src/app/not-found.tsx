import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-slate-200 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">页面未找到</h2>
      <p className="text-slate-600 mb-8">您访问的页面不存在或已被移动。</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/" className="bg-etia-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-etia-darkblue transition-colors">
          返回首页
        </Link>
        <Link href="/labels/" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
          标签解决方案
        </Link>
        <Link href="/uv-curing/" className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
          UV固化解决方案
        </Link>
      </div>
    </div>
  );
}
