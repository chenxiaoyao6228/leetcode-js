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
          const rowSelector = 'div[role="rowgroup"] > div[role="row"]'
          const rows = [...document.querySelectorAll(rowSelector)]
          const problemsMap = {}
          if (rows.length > 0) {
            rows.forEach(el => {
              const idElement = el.querySelector(
                'div[role="cell"]:nth-child(2)'
              )
              const acceptanceElement = el.querySelector(
                'div[role="cell"]:nth-child(4)'
              )
              const difficultyElement = el.querySelector(
                'div[role="cell"]:nth-child(5)'
              )

              const [id, problemName] = idElement.innerText.split('. ')
              if (!problemsMap[id]) {
                problemsMap[id] = {}
              }
              problemsMap[id].name = problemName
              problemsMap[id].acceptance = acceptanceElement.innerText
              problemsMap[id].difficulty = difficultyElement.innerText
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
