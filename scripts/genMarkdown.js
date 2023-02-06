const fs = require('fs')
const path = require('path')
const leetcodeENDatas = require('./crawler/en.json')

let totalCount = 0

const readMePath = path.join(__dirname, '../README.md')

const SrcFolder = path.join(__dirname, '../src')

const originReadMe = fs.readFileSync(readMePath, 'utf8')

const result = generateResult()

fs.writeFileSync(readMePath, result, 'utf8')

function generateResult() {
  const anchorText = '## Table of solutions'
  const anchorIndex = originReadMe.indexOf(anchorText)
  const preText = originReadMe.slice(0, anchorIndex)
  const table = generateTable()
  const progress = generateProgess()
  const result = preText + anchorText + '\n' + progress + '\n' + table
  return result
}

function generateProgess() {
  return `Total Submit: **${totalCount}**/**300(Goal)**`
}

function generateTable() {
  let result = ''

  result = generateTableHeader() + '\n' + generateTableContent()

  return result
}

function generateTableHeader() {
  const header = `| ID | Title | Difficulty | Solutions  | Test Case | Explanation |
  | --- | ------ | ------ | ----- | -----| -----|`
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
        if (
          /^\d/.test(fileOrFolderName) &&
          !/(.test.js|.md)$/.test(fileOrFolderName)
        ) {
          totalCount++
          const [id, content] = genrateFileContent(prefixPath, fileOrFolderName)
          bodyRes[id] = content + '\n'
        }
      } else {
        generateFolderContent(`${prefixPath}/${fileOrFolderName}`)
      }
    })
  }

  function genrateFileContent(prefixPath, fileName) {
    const [id, name, _] = fileName.split('.')
    const testName = fileName.slice(0, -3) + '.test.js'
    const testFolder = path.join(__dirname, '../src', testName)
    console.log('testFolder', testFolder)
    let testCasePath = `[test](./src${prefixPath}/${testName})`
    if (!fs.existsSync(testFolder)) {
      testCasePath = ''
    }

    const explanationName = fileName.slice(0, -3) + '.md'
    let explanationPath = `[explanation](./src${prefixPath}/${explanationName})`
    const explanationFolder = path.join(__dirname, '../src', explanationName)
    if (!fs.existsSync(explanationFolder)) {
      explanationPath = ''
    }

    const { name: titleName, difficulty } = leetcodeENDatas[id]
    const linkName = titleName
      .split(' ')
      .map(s => s.toLowerCase())
      .join('-')
    const enLink = `https://leetcode.com/problems/` + linkName
    const cnLink = `https://leetcode.cn/problems/` + linkName

    return [
      id,
      `| ${id} | ${titleName}([en](${enLink}), [cn](${cnLink})) |  ${difficulty} | [Javascript](./src${prefixPath}/${fileName}) | ${testCasePath} | ${explanationPath} `
    ]
  }
}
