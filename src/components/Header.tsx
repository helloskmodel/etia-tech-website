'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded flex items-center justify-center text-white font-bold text-xl">
              E
            </div>
            <div>
              <div className="font-bold text-slate-900">ETIA-TECH</div>
              <div className="text-xs text-slate-500">怡天科技</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-etia-blue font-medium transition-colors">
              首页
            </Link>
            
            {/* 标签业务入口 */}
            <div className="relative group">
              <Link href="/labels/" className="text-slate-700 hover:text-etia-blue font-medium transition-colors flex items-center">
                工业标签
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link href="/labels/applications/" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">
                    应用场景
                  </Link>
                  <Link href="/labels/industries/" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">
                    行业分类
                  </Link>
                  <Link href="/labels/performance/" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">
                    按性能选标签
                  </Link>
                  <Link href="/labels/products/" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">
                    标签产品
                  </Link>
                  <Link href="/labels/case-studies/" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">
                    客户案例
                  </Link>
                  <Link href="/labels/sample-request/" className="block px-4 py-2 text-sm text-etia-blue font-medium hover:bg-blue-50 rounded">
                    申请样品
                  </Link>
                </div>
              </div>
            </div>

            {/* UV业务入口 */}
            <div className="relative group">
              <Link href="/uv-curing/" className="text-slate-700 hover:text-etia-uv font-medium transition-colors flex items-center">
                UV光固化
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link href="/uv-curing/applications/" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">
                    应用场景
                  </Link>
                  <Link href="/uv-curing/technologies/" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">
                    固化技术
                  </Link>
                  <Link href="/uv-curing/products/" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">
                    产品与品牌
                  </Link>
                  <Link href="/uv-curing/case-studies/" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded">
                    客户案例
                  </Link>
                  <Link href="/uv-curing/test-request/" className="block px-4 py-2 text-sm text-etia-uv font-medium hover:bg-purple-50 rounded">
                    预约测试
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/technical-center/" className="text-slate-700 hover:text-etia-blue font-medium transition-colors">
              技术中心
            </Link>
            <Link href="/service/" className="text-slate-700 hover:text-etia-blue font-medium transition-colors">
              服务支持
            </Link>
            <Link href="/about/" className="text-slate-700 hover:text-etia-blue font-medium transition-colors">
              关于怡天
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Link href="/contact/" className="bg-etia-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-etia-darkblue transition-colors">
              联系我们
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className="block py-2 text-slate-700 font-medium">首页</Link>
            <Link href="/labels/" className="block py-2 text-slate-700 font-medium">工业标签</Link>
            <Link href="/uv-curing/" className="block py-2 text-slate-700 font-medium">UV光固化</Link>
            <Link href="/technical-center/" className="block py-2 text-slate-700 font-medium">技术中心</Link>
            <Link href="/service/" className="block py-2 text-slate-700 font-medium">服务支持</Link>
            <Link href="/about/" className="block py-2 text-slate-700 font-medium">关于怡天</Link>
            <Link href="/contact/" className="block py-2 text-etia-blue font-medium">联系我们</Link>
          </div>
        </div>
      )}
    </header>
  );
}
