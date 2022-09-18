const path = require('path');
const { spawn } = require('child_process');

// Linux 文件与目录管理命令: https://www.yuque.com/xuebao-runen/icbftt/zg0sm1 
console.log(/aa/, process.argv, process.argv[2], process.cwd()+ 'src/' + process.argv[2]);

console.log(path, path.join(process.cwd(), 'src/' + process.argv[2]));

(() => {
  const component = process.argv[2];
  spawn('mkdir', ['-p', path.join(process.cwd(), `src/${component}`)])
})();


