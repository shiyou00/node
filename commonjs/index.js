// bundle.js
(function (modules) {
    // 模块管理的实现
    var installedModules = {}
    /**
     * 加载模块的业务逻辑实现
     * @param {String} moduleName 要加载的模块名
     */
    var require = function (moduleName) {
   
      // 如果已经加载过，就直接返回
      if (installedModules[moduleName]) return installedModules[moduleName].exports
   
      // 如果没有加载，就生成一个 module，并放到 installedModules
      var module = installedModules[moduleName] = {
        moduleName: moduleName,
        exports: {}
      }
   
      // 执行要加载的模块
      modules[moduleName].call(modules.exports, module, module.exports, require)
   
      return module.exports
    }
   
    return require('index.js')
  })({
    'a.js': function (module, exports, require) {
      // a.js 文件内容
    },
    'b.js': function (module, exports, require) {
      // b.js 文件内容
    },
    'index.js': function (module, exports, require) {
      // index.js 文件内容
    }
  })