const { encryptText, decryptText } = require(`..`)

const password = `president123`
const encrypt = encryptText(`mypharse wallet crypto`, password)
const decrypt = decryptText(encrypt, password)

console.log({ encrypt, decrypt })
