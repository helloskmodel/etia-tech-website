import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">关于怡天科技</h1>
      <p className="text-lg text-slate-600 mb-6">
        上海怡天科技成立于2004年，专注于工业标识和UV光固化领域20年，为超过1000家制造企业提供可靠的产品和技术服务。
      </p>
      <p className="text-slate-600 mb-6">
        我们是Excelitas OmniCure系列UV固化产品在国内的授权代理商，同时自主研发和生产各类工业特种标签，服务电子、汽车、医疗、钢铁、新能源、光通信等行业。
      </p>
      <div className="mt-8">
        <Link href="/contact/" className="text-etia-blue font-medium hover:underline">
          联系我们 →
        </Link>
      </div>
    </div>
  );
}
