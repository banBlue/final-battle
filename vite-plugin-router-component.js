

var esprima = require('esprima');
var escodegen = require('escodegen')

function compileFileToJS(code) {
  const ast = esprima.parseModule(code)
  ast.body[0].declaration.elements.forEach(item => {
    if(item.type === 'ObjectExpression') {
      item.properties.forEach(properties => {
        if(properties.key.name === 'component') {
          const value = properties.value.value.startsWith('/') ? properties.value.value : '/' + properties.value.value
           // 转换懒加载形式
          properties.value = {
            "type": "ArrowFunctionExpression",
            "id": null,
            "params": [],
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "name": "import"
              },
              "arguments": [{
                "type": "Literal",
                "value": `/src${value}`,
                "raw": `'/src${value}'`
              }]
            },
            "generator": false,
            "expression": true,
            "async": false
          }
        }
      })
    }
  })
  return escodegen.generate(ast); // 将对象转回字符串形式返回
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
    }
  }
}
