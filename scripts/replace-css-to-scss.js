// replace-scss.js for tinymce edit.ts file content_css: new URL('@/index.scss', import.meta.url).href ----after vite css file replace to scss file
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outDir = join(__dirname, '..', 'dist', 'assets');

let cssFilePath = '';
let scssFilePath = '';
// 获取 /dist/assets/ 目录下的所有文件名， 找到文件明以index开头.js结尾的 文件，然后将内容 .replace(/\.scss/g, '.css')
const files = readdirSync(outDir);
const scssFiles = files.filter((file) => {
  if (file.startsWith('index-') && file.endsWith('.css')) cssFilePath = file;
  if (file.startsWith('index-') && file.endsWith('.scss')) scssFilePath = file;
  return file.startsWith('index-') && file.endsWith('.js');
});
scssFiles.forEach((file) => {
  console.log(`Replacing .scss in ${file}`, cssFilePath, scssFilePath);
  const content = readFileSync(join(outDir, file), 'utf-8');
  const newContent = content.replace(scssFilePath, cssFilePath);
  writeFileSync(join(outDir, file), newContent);
});
