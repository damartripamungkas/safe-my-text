/**
 *
 * @todo if "text" or "password" wrong will return null
 * @param text text private you want encrypt
 * @param password password for encrypt text
 * @returns string | null
 */
declare const encryptText: (text: string, password: string) => string | null;
/**
 *
 * @todo if "cipherText" or "password" wrong will return null
 * @param cipherText text chiper result from encrypt
 * @param password password for decrypt text
 * @returns string | null
 */
declare const decryptText: (cipherText: string, password: string) => string | null;

declare const _default: {
    encryptText: (text: string, password: string) => string | null;
    decryptText: (cipherText: string, password: string) => string | null;
};

export { decryptText, _default as default, encryptText };
