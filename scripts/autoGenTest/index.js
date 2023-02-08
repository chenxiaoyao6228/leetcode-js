// var diameterOfBinaryTree = function(root) {}
const fs = require('fs')
const fsPath = require('path')
const chokidar = require('chokidar')
const cache = require('./cache')

const rootDir = fsPath.join(__dirname, '../../')

chokidar
  .watch('src/*.js', {
    persistent: true,
    ignored: /^.*(?:test).*$/
  })
  .on('add', path => {
    if (cache.some(c => path.includes(c))) {
      return
    }
    console.log(`File ${path} has been added`)
    const fnName = createExport(path)
    if (fnName) {
      createTest(path, fnName)
    }
  })
  .on('change', path => {
    console.log(`File ${path} has been changed`)
    const fnName = createExport(path)
    if (fnName) {
      createTest(path, fnName)
    }
  })
  .on('unlink', path => {
    console.log(`File ${path} has been removed`)
  })

function createExport(path) {
  const _p = fsPath.join(rootDir, path)
  const fileContent = fs.readFileSync(_p, 'utf8')
  if (!fileContent.includes('module.exports')) {
    const match1 = fileContent.match(/var\s+(\w*)\s+=\s+function/g)
    console.log('match1', match1)
    const match2 = match1[0].match(/\s+(\w+)\s+/)
    const fnName = match2[1]
    const newContent = `${fileContent}\nmodule.exports = {${fnName}}`
    fs.writeFileSync(_p, newContent, 'utf8')
    return fnName
  }
}

function createTest(path, fnName) {
  const _p = fsPath.join(rootDir, path)
  const testPath = _p.replace(/.js$/, '.test.js')
  const res = path.split('/')
  const fileName = res[res.length - 1]
  const template = `
    const { ${fnName} } = require('./${fileName}')
    const { createBTFromArray } = require('./utils/bst')
    const { createLinkedListFromArr } = require('./utils/linked-list')

    test('${fnName}1', () => {
      expect(${fnName}()).toEqual()
    })
    
    test('${fnName}2', () => {
      expect(${fnName}()).toEqual()
    })
    test('${fnName}3', () => {
      expect(${fnName}()).toEqual()
    })
  `
  fs.writeFileSync(testPath, template, 'utf8')
}
