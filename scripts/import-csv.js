const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

// 导入标签应用CSV
function importLabelsCSV(csvPath) {
  const content = fs.readFileSync(csvPath, 'utf8');
  const records = parse(content, { columns: true, skip_empty_lines: true });
  
  const outputDir = path.join(__dirname, '../content/labels');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  records.forEach(record => {
    const slug = record.slug || record.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\u4e00-\u9fa5-]/g, '');
    
    const frontmatter = `---
title: "${record.title}"
industry: "${record.industry}"
temperature:
  min: ${record.temp_min || -40}
  max: ${record.temp_max || 260}
  duration: "${record.temp_duration || '30秒'}"
chemicalExposure: [${record.chemical ? `"${record.chemical.split(',').join('","')}"` : ''}]
surface: "${record.surface || '通用'}"
performance: [${record.performance ? `"${record.performance.split(',').join('","')}"` : ''}]
recommendedMaterial: "${record.material || ''}"
recommendedAdhesive: "${record.adhesive || ''}"
recommendedRibbon: "${record.ribbon || ''}"
seo:
  title: "${record.seo_title || record.title}"
  description: "${record.seo_description || ''}"
  keywords: [${record.keywords ? `"${record.keywords.split(',').join('","')}"` : ''}]
priority: "${record.priority || 'P2'}"
---

${record.content || ''}
`;
    
    fs.writeFileSync(path.join(outputDir, `${slug}.md`), frontmatter, 'utf8');
    console.log(`✅ 导入标签应用: ${record.title}`);
  });

  console.log(`\n🎉 成功导入 ${records.length} 个标签应用`);
}

// 导入UV应用CSV
function importUVCSV(csvPath) {
  const content = fs.readFileSync(csvPath, 'utf8');
  const records = parse(content, { columns: true, skip_empty_lines: true });
  
  const outputDir = path.join(__dirname, '../content/uv-curing');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  records.forEach(record => {
    const slug = record.slug || record.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\u4e00-\u9fa5-]/g, '');
    
    const frontmatter = `---
title: "${record.title}"
industry: "${record.industry}"
wavelength: [${record.wavelength || '365,385,405'}]
irradiance: ${record.irradiance || 1000}
dose: ${record.dose || 1000}
workingDistance: "${record.working_distance || '10mm'}"
cycleTime: "${record.cycle_time || '5秒'}"
lightSource: "${record.light_source || 'LED'}"
recommendedProduct: "${record.recommended_product || ''}"
seo:
  title: "${record.seo_title || record.title}"
  description: "${record.seo_description || ''}"
  keywords: [${record.keywords ? `"${record.keywords.split(',').join('","')}"` : ''}]
priority: "${record.priority || 'P2'}"
---

${record.content || ''}
`;
    
    fs.writeFileSync(path.join(outputDir, `${slug}.md`), frontmatter, 'utf8');
    console.log(`✅ 导入UV应用: ${record.title}`);
  });

  console.log(`\n🎉 成功导入 ${records.length} 个UV应用`);
}

// 生成CSV模板
function generateTemplates() {
  const labelsTemplate = `slug,title,industry,temp_min,temp_max,temp_duration,chemical,surface,performance,material,adhesive,ribbon,seo_title,seo_description,keywords,priority,content
pcb-reflow-soldering,PCB耐回流焊标签,电子制造,-40,280,60秒@260℃,助焊剂,酒精,FR-4电路板,耐高温,防静电,聚酰亚胺,耐高温亚克力胶,树脂基碳带,PCB耐回流焊标签 | SMT电路板高温标签,280℃耐回流焊标签，适用于SMT制程，条码可读率100%,PCB标签,回流焊标签,SMT标签,P0,这里写详细内容
`;

  const uvTemplate = `slug,title,industry,wavelength,irradiance,dose,working_distance,cycle_time,light_source,recommended_product,seo_title,seo_description,keywords,priority,content
medical-catheter-bonding,医疗导管UV胶粘接,医疗,365,2000,3000,5mm,3秒,LED,S2000 Elite,医疗导管UV胶粘接 | UV点光源固化,医疗导管UV粘接工艺参数和设备推荐,医疗UV固化,导管粘接,P0,这里写详细内容
`;

  fs.writeFileSync(path.join(__dirname, '../content/labels-template.csv'), labelsTemplate, 'utf8');
  fs.writeFileSync(path.join(__dirname, '../content/uv-template.csv'), uvTemplate, 'utf8');
  
  console.log('📋 CSV模板已生成：');
  console.log('  - content/labels-template.csv  标签应用导入模板');
  console.log('  - content/uv-template.csv      UV应用导入模板');
  console.log('\n使用方法：');
  console.log('  node scripts/import-csv.js labels labels.csv  导入标签应用');
  console.log('  node scripts/import-csv.js uv uv.csv          导入UV应用');
}

// 命令行处理
const args = process.argv.slice(2);
if (args.length === 0 || args[0] === 'template') {
  generateTemplates();
} else if (args[0] === 'labels' && args[1]) {
  importLabelsCSV(args[1]);
} else if (args[0] === 'uv' && args[1]) {
  importUVCSV(args[1]);
} else {
  console.log('用法：');
  console.log('  node scripts/import-csv.js template          生成CSV导入模板');
  console.log('  node scripts/import-csv.js labels <csv路径>  导入标签应用');
  console.log('  node scripts/import-csv.js uv <csv路径>      导入UV应用');
}
