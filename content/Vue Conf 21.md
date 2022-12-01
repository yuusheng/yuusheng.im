## 新一代构建工具

解决技术债务问题

旧的构建工具，有旧的构建工具的历史使命，新的工作构建工具在面对新的开发环境的时有他们的新的选择

- 使用原生语言 go rust 重写需要性能的部分：编译、压缩(minifier terser的rust版本)
- 拥抱ES Module
  - externals 外化依赖：CDN（Rollup插件）、Import Maps（推荐）
- 非标准用法在ESM下的解决方案：
  - `__filename` `__dirname`: import.meta.url
  - process.env: import.meta.env
  - 取消 Node.js polyfill 
- JSON 文件tree shaking