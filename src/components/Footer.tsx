import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <div>
                <div className="font-bold text-white">ETIA-TECH</div>
                <div className="text-xs text-slate-400">上海怡天科技</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              20年专注工业标识与UV光固化，为先进制造提供可靠解决方案
            </p>
            <p className="text-sm text-slate-400">
              服务热线：400-990-8448
            </p>
          </div>

          {/* 标签业务 */}
          <div>
            <h3 className="text-white font-semibold mb-4">工业标签</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/labels/applications/" className="hover:text-white transition-colors">应用场景</Link></li>
              <li><Link href="/labels/industries/" className="hover:text-white transition-colors">行业分类</Link></li>
              <li><Link href="/labels/products/" className="hover:text-white transition-colors">标签产品</Link></li>
              <li><Link href="/labels/case-studies/" className="hover:text-white transition-colors">客户案例</Link></li>
              <li><Link href="/labels/sample-request/" className="hover:text-etia-blue transition-colors">申请样品</Link></li>
            </ul>
          </div>

          {/* UV业务 */}
          <div>
            <h3 className="text-white font-semibold mb-4">UV光固化</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/uv-curing/applications/" className="hover:text-white transition-colors">应用场景</Link></li>
              <li><Link href="/uv-curing/technologies/" className="hover:text-white transition-colors">固化技术</Link></li>
              <li><Link href="/uv-curing/products/" className="hover:text-white transition-colors">OmniCure产品</Link></li>
              <li><Link href="/uv-curing/case-studies/" className="hover:text-white transition-colors">客户案例</Link></li>
              <li><Link href="/uv-curing/test-request/" className="hover:text-purple-400 transition-colors">预约测试</Link></li>
            </ul>
          </div>

          {/* 关于 */}
          <div>
            <h3 className="text-white font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about/" className="hover:text-white transition-colors">公司介绍</Link></li>
              <li><Link href="/service/" className="hover:text-white transition-colors">服务支持</Link></li>
              <li><Link href="/technical-center/" className="hover:text-white transition-colors">技术中心</Link></li>
              <li><Link href="/contact/" className="hover:text-white transition-colors">联系我们</Link></li>
              <li><a href="mailto:info@etia-tech.com" className="hover:text-white transition-colors">info@etia-tech.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-500 flex flex-col md:flex-row justify-between">
          <div>© 2026 上海怡天科技有限公司 版权所有</div>
          <div className="mt-2 md:mt-0">沪ICP备XXXXXXXX号</div>
        </div>
      </div>
    </footer>
  );
}
