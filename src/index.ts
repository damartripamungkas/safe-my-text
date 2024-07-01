import { AES, enc } from "crypto-js"

/**
 *
 * @todo if "text" or "password" wrong will return null
 * @param text text private you want encrypt
 * @param password password for encrypt text
 * @returns string | null
 */
const encryptText = (text: string, password: string): string | null => {
  try {
    const str = JSON.stringify(text)
    const cipherText = AES.encrypt(str, password).toString() // encrypt text with password
    return cipherText
  } catch (err) {
    return null
  }
}

/**
 *
 * @todo if "cipherText" or "password" wrong will return null
 * @param cipherText text chiper result from encrypt
 * @param password password for decrypt text
 * @returns string | null
 */
const decryptText = (cipherText: string, password: string): string | null => {
  try {
    const removeWs = cipherText.replaceAll(` `, ``)
    const bytes = AES.decrypt(removeWs, password) // decrypt ciphertext with password
    const toStr = bytes.toString(enc[`Utf8`])
    const parse = JSON.parse(toStr)
    return parse
  } catch (err) {
    return null
  }
}

export { encryptText, decryptText }
export default { encryptText, decryptText }