import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

// 标签应用数据类型
export interface LabelApplication {
  slug: string;
  title: string;
  industry: string;
  temperature: {
    min: number;
    max: number;
    duration: string;
  };
  chemicalExposure: string[];
  surface: string;
  performance: string[];
  recommendedMaterial: string;
  recommendedAdhesive: string;
  recommendedRibbon: string;
  content: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  priority: 'P0' | 'P1' | 'P2' | 'P3';
}

// UV应用数据类型
export interface UVApplication {
  slug: string;
  title: string;
  industry: string;
  wavelength: number[];
  irradiance: number;
  dose: number;
  workingDistance: string;
  cycleTime: string;
  lightSource: 'LED' | 'Arc Lamp' | 'Both';
  recommendedProduct: string;
  content: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  priority: 'P0' | 'P1' | 'P2' | 'P3';
}

// 获取所有标签应用
export function getAllLabelApplications(): LabelApplication[] {
  const labelsDir = path.join(contentDirectory, 'labels');
  if (!fs.existsSync(labelsDir)) return [];
  
  const files = fs.readdirSync(labelsDir).filter(file => file.endsWith('.md'));
  
  return files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(labelsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      ...data,
      content,
    } as LabelApplication;
  }).sort((a, b) => {
    const priorityOrder = { P0: 0, P1: 1, P2: 2, P3: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
}

// 获取单个标签应用
export function getLabelApplicationBySlug(slug: string): LabelApplication | null {
  try {
    const fullPath = path.join(contentDirectory, 'labels', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      ...data,
      content,
    } as LabelApplication;
  } catch {
    return null;
  }
}

// 获取所有UV应用
export function getAllUVApplications(): UVApplication[] {
  const uvDir = path.join(contentDirectory, 'uv-curing');
  if (!fs.existsSync(uvDir)) return [];
  
  const files = fs.readdirSync(uvDir).filter(file => file.endsWith('.md'));
  
  return files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(uvDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      ...data,
      content,
    } as UVApplication;
  }).sort((a, b) => {
    const priorityOrder = { P0: 0, P1: 1, P2: 2, P3: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
}

// 获取单个UV应用
export function getUVApplicationBySlug(slug: string): UVApplication | null {
  try {
    const fullPath = path.join(contentDirectory, 'uv-curing', `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      ...data,
      content,
    } as UVApplication;
  } catch {
    return null;
  }
}

// 生成静态路径
export function getAllLabelSlugs(): string[] {
  const labelsDir = path.join(contentDirectory, 'labels');
  if (!fs.existsSync(labelsDir)) return [];
  return fs.readdirSync(labelsDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}

export function getAllUVSlugs(): string[] {
  const uvDir = path.join(contentDirectory, 'uv-curing');
  if (!fs.existsSync(uvDir)) return [];
  return fs.readdirSync(uvDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}
