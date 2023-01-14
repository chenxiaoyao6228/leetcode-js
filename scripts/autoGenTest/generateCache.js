const glob = require('glob')
const path = require('path')
const fs = require('fs')

const files = glob.sync('*.js', { cwd: path.join(__dirname, '../../src/') })

const filterdFiles = files.filter(f => !f.includes('.test'))

fs.writeFileSync(
  path.join(__dirname, 'cache.json'),
  JSON.stringify(filterdFiles),
  'utf8'
)

console.log('generate cache successfully!')
