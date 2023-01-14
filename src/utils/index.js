function logObj(obj) {
  console.log(jts(obj))
}

export function jts(obj) {
  return JSON.stringify(obj)
}

export const createPrinter = () => {
  let count = 0
  let hasScheduled = false
  let res = ''
  const log = (type, ...args) => {
    res +=
      '\t'.repeat(count === -1 ? 0 : count) +
      (type === 'return' ? 'return: ' : '') +
      `${args}` +
      '\n'
    if (hasScheduled === false) {
      hasScheduled = true
      Promise.resolve().then(() => {
        console.log(res)
        hasScheduled = false
      })
    }
  }
  return {
    logEnter: (...args) => {
      log('enter', ...args)
      count++
    },
    logReturn: (...args) => {
      log('return', ...args)
      count--
    }
  }
}

module.exports = {
  logObj,
  jts,
  createPrinter
}
