const path = require('path')
const fs = require('fs')

const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true
  })
  const page = await browser.newPage()

  BlockLeetcodeRedirectToCnRequest()

  // Extract the results from the page.
  const totalPage = 52 // maxPage 51, maxNum: 2522.
  let resultObj = {}
  for (let i = 1; i < totalPage; i++) {
    console.log('i', i)
    const res = await getProblemPage(i)
    resultObj = Object.assign({}, resultObj, res)
    console.log('resultObj', resultObj)
  }

  const mapFile = path.join(__dirname, 'en.json')
  fs.writeFileSync(mapFile, JSON.stringify(resultObj, null, 4), 'utf8')

  await browser.close()

  async function getProblemPage(pageIndex) {
    try {
      const url = `https://leetcode.com/problemset/all/?page=${pageIndex}`
      await page.goto(url)

      const resultsSelector =
        'div[role="rowgroup"] > div[role="row"] > div[role="cell"]:nth-child(2)'

      await page.waitForSelector(resultsSelector)

      // leetcode uses SSR, have to wait a while for list data to change, or you will always get the first page
      await sleep(3000)

      const problemsMap =
        (await page.evaluate(resultsSelector => {
          const elements = [...document.querySelectorAll(resultsSelector)]
          const problemsMap = {}
          if (elements.length > 0) {
            elements.forEach(el => {
              const [id, problemName] = el.innerText.split('. ')
              problemsMap[id] = problemName
            })
          }
          // console.log('problemsMap', problemsMap)
          return problemsMap
        }, resultsSelector)) || {}

      return problemsMap
    } catch (error) {
      console.log('get page proble error', error)
    }
  }

  function BlockLeetcodeRedirectToCnRequest() {
    page.setRequestInterception(true)
    page.on('request', request => {
      if (
        request
          .url()
          .includes('https://assets.leetcode-cn.com/lccn-resources/cn.js')
      ) {
        const u = request.url()
        console.log(
          `request to ${u.substring(0, 50)}...${u.substring(
            u.length - 5
          )} is aborted`
        )
        request.abort()
        return
      }
      request.continue()
    })
  }

  async function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }
})()
