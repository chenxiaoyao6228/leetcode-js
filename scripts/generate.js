const fs = require('fs')
const path = require('path')

let totalCount = 0

const readMePath = path.join(__dirname, '../README.md')

const SrcFolder = path.join(__dirname, '../src')

const originReadMe = fs.readFileSync(readMePath, 'utf8')

const result = generateResult()

fs.writeFileSync(readMePath, result, 'utf8')

function generateResult() {
  const anchorText = '## Table of contents'
  const anchorIndex = originReadMe.indexOf(anchorText)
  const preText = originReadMe.slice(0, anchorIndex)
  const table = generateTable()
  const progress = generateProgess()
  const result = preText + anchorText + '\n' + progress + '\n' + table
  return result
}

function generateProgess() {
  return `Total Submit: **${totalCount}**`
}

function generateTable() {
  let result = ''

  result = generateTableHeader() + '\n' + generateTableContent()

  return result
}

function generateTableHeader() {
  const header = `| ID | Solutions |
  | --- | ----------- |`
  return header
}

function generateTableContent(prefixPath = '') {
  let bodyRes = []
  generateFolderContent(prefixPath)
  return bodyRes.join('')

  function generateFolderContent(prefixPath) {
    const currentFolderPath = path.join(SrcFolder, prefixPath)
    const solutions = fs.readdirSync(currentFolderPath, 'utf8')
    solutions.forEach(fileOrFolderName => {
      const absSolutionsPath = path.join(
        SrcFolder,
        prefixPath,
        fileOrFolderName
      )
      const stats = fs.statSync(absSolutionsPath)
      if (stats.isFile()) {
        totalCount++
        const [id, content] = genrateFileContent(prefixPath, fileOrFolderName)
        bodyRes[id] = content + '\n'
      } else {
        generateFolderContent(`${prefixPath}/${fileOrFolderName}`)
      }
    })
  }

  function genrateFileContent(prefixPath, fileName) {
    const [id, name, _] = fileName.split('.')
    return [id, `| ${id} | [${name}](./src${prefixPath}/${fileName}) | `]
  }
}