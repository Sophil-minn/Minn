const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const chalk = require('chalk');
const handlebars = require('handlebars');

const { spawn } = require('child_process');

// Linux 文件与目录管理命令: https://www.yuque.com/xuebao-runen/icbftt/zg0sm1 
// console.log(/aa/, process.argv, process.argv[2], process.cwd()+ 'src/' + process.argv[2]);

// console.log(path, path.join(process.cwd(), 'src/' + process.argv[2]));

const varCase = str => str.replace(/-[a-z]/g, m => m[1].toUpperCase()).replace(/^.{1}/g, str[0].toUpperCase());
const lowCase = str => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).replace(/-[a-z]/g, str[1].toUpperCase());
(() => {

  const component = process.argv[2];
  const dirName = lowCase(component);
  const componentName = varCase(component);
  
  spawn('mkdir', ['-p', path.join(process.cwd(), `src/${dirName}`)])

  //读取模版
  const tplFiles = glob.sync(path.join(__dirname, 'template/*.hbs'));
  tplFiles.forEach((async filePath => {
    const content = await fs.readFile(filePath, 'utf-8');
    const template = handlebars.compile(content);
    const result = template({
      dirName,
      componentName
    });
    const newPath = filePath.replace('scripts/template', `src/${dirName}`)
      .replace('component', componentName)
      .replace('.hbs', '');

    await fs.writeFile(newPath, result);
      console.log(`write ${newPath} success`);
  }));
})();


