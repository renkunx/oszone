import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsDir = path.join(__dirname, 'src', 'content', 'blogs');

async function addFrontmatter() {
  try {
    const files = await fs.readdir(blogsDir);
    
    for (const file of files) {
      if (path.extname(file) === '.md') {
        const filePath = path.join(blogsDir, file);
        let content = await fs.readFile(filePath, 'utf-8');
        
        // 检查文件是否已经有 frontmatter
        if (!content.startsWith('---')) {
          const title = path.basename(file, '.md');
          const newContent = `---
title: ${title}
description: ${title}
showGithub: true 
---

${content}`;
          
          await fs.writeFile(filePath, newContent);
          console.log(`Added frontmatter to ${file}`);
        } else {
          console.log(`${file} already has frontmatter, skipping.`);
        }
      }
    }
    
    console.log('Finished adding frontmatter to all Markdown files.');
  } catch (error) {
    console.error('Error:', error);
  }
}

addFrontmatter();