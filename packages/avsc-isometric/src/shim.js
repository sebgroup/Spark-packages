if (typeof __dirname === 'undefined') global.__dirname = '/'
if (typeof __filename === 'undefined') global.__filename = ''
// biome-ignore lint/style/useNodejsImportProtocol: shim
const bProcess = require('process')
if (typeof process === 'undefined') {
  global.process = bProcess
} else {
  for (const p in bProcess) {
    if (!(p in process)) {
      process[p] = bProcess[p]
    }
  }
}

process.browser = false
if (typeof Buffer === 'undefined') {
  // biome-ignore lint/style/useNodejsImportProtocol: shim
  global.Buffer = require('buffer').Buffer
}
