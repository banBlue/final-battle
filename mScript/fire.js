const fs = require('fs');
const path = require("path")
const fileName = process.argv[2]
const { COPYFILE_EXCL } = fs.constants;

function resolve (dir) { // 根据该文件位置,获取到根目录
  return path.join(process.cwd(),dir)
}

function handleCopyFile(originName,targetName) {
  try {
    fs.copyFileSync(resolve(`./mScript/template/${originName}`), targetName, COPYFILE_EXCL)
  } catch {
    console.log(`--DEBUG--目标${originName}---${fileName}.js文件已存在`)
  }
}

// 用于创建views下的目录
console.log(`--DEBUG--fileName`,fileName)
fs.mkdir(resolve(`src/views/${fileName}/`),{ recursive: false }, (error) => {
  if(error) return console.log(`目录${fileName}已存在`)
  console.log('创建目录成功')
  // 创建views/index.vue文件
  handleCopyFile('view.vue',resolve(`src/views/${fileName}/index.vue`))

  //创建api文件
  handleCopyFile('api.js',resolve(`src/api/${fileName}.js`))

  // 创建vuex module
  // handleCopyFile('module.js',resolve(`src/store/modules/${fileName}.js`))

  // 创建router文件
  fs.readFile(resolve(`./mScript/template/router.js`),'utf8',function(err,data){
    if(err) return err;
    let str = data.replace(/---router---/g,fileName);
    fs.writeFile(resolve(`src/router/${fileName}.js`), str, function (err) {
        if (err) return err
    })
  })
})