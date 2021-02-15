

// var esprima = require('esprima');
// console.log(`--DEBUG--esprima.tokenize(program);`,esprima.tokenize(`export default [
//   {
//     path: '/',  
//     redirect:'/home',
//   },
//   {
//     redirect:'/home',  
//     component:  '@/views/home.vue',    
//     meta: {
//       haha:'222'
//     }
//   }
// ]`))
function compileFileToJS(code) {
  const s = code.match(/'@(.*)'/)  
  return code.replace(/'@(.*)'/,`() => import('..${s[1]}')`)
  
}

module.exports = () => {
  return {
    name: 'html-transform',
    transform(src, id) { // 编译时的文件返回
      const re = /src\/router((?!index).)*\.js$/ //获取路由文件
      if(re.test(id)) {
        return {
          code: compileFileToJS(src),
          map: null // provide source map if available
        }
      }
      // if (fileRegex.test(id)) {
      //   return {
      //     code: compileFileToJS(src),
      //     map: null // provide source map if available
      //   }
      // }
    }
  }
}
