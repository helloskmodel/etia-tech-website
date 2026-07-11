export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">联系我们</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">联系方式</h2>
          <div className="space-y-4 text-slate-600">
            <p><strong>服务热线：</strong>400-990-8448</p>
            <p><strong>邮箱：</strong>info@etia-tech.com</p>
            <p><strong>地址：</strong>上海市闵行区</p>
          </div>
        </div>
        <div className="bg-slate-50 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">快速咨询</h2>
          <p className="text-slate-600 mb-4">表单开发中，您可以直接拨打服务热线或发送邮件咨询。</p>
        </div>
      </div>
    </div>
  );
}
