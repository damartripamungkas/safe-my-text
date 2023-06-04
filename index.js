const CryptoJS = require('crypto-js');
const inquirer = require('inquirer');


const encryptText = (text = "", key = "") => {
    try {
        const ciphertext = CryptoJS.AES.encrypt(JSON.stringify({ status: true, data: text }), key).toString(); // encrypt text with key
        return ciphertext;
    } catch (err) {
        return false;
    }
};

const decryptText = (ciphertext = "", key = "") => {
    try {
        const bytes = CryptoJS.AES.decrypt(ciphertext, key); // decrypt ciphertext with key
        const result = JSON.parse(bytes.toString(CryptoJS.enc.Utf8)); // convert to original json
        return result.status === true ? result.data : false;
    } catch (err) {
        return false;
    }
};

const promptHome = async () => {
    const _prompt = (await inquirer.prompt([{
        type: `list`,
        name: `data`,
        message: `This tool works to encrypt or decrypt text with a password to be safe, please select menu below?`,
        choices: [`encrypt`, `decrypt`, `about`],
    }])).data;

    if (_prompt == `encrypt`) {
        const _prompt = await inquirer.prompt([
            {
                type: 'input',
                name: 'data',
                message: `Please input your text?`,
            },
            {
                type: 'input',
                name: 'data2',
                message: `Please input your password?`,
            }
        ]);
        const encryptNow = encryptText(_prompt.data, _prompt.data2); // process encrypt
        console.log(`\n\n ${encryptNow}`); // result encrypt
        setTimeout(() => process.exit(), 500); // exit tools
    } else if (_prompt == `decrypt`) {
        const _prompt = await inquirer.prompt([
            {
                type: 'input',
                name: 'data',
                message: `Please input your text encrypt?`,
            },
            {
                type: 'input',
                name: 'data2',
                message: `Please input your password?`,
            }
        ]);
        const decryptNow = decryptText(_prompt.data.replaceAll(" ", ""), _prompt.data2); // process decrypt
        console.log(decryptNow !== false ? `\n\n ${decryptNow}` : `fail password or text encrypt is incorrect, please input again`);
        setTimeout(() => process.exit(), 500); // exit tools
    } else if (_prompt == `about`) {
        console.log(
            `\n` +
            `======================================\n` +
            `      type encrypt : AES\n` +
            `      open source : yes\n` +
            `      author : damartripamungkas\n` +
            `======================================`
        );
    }
};

promptHome().then()

// console.log(encryptText(`nama saya damar`, `12345`));
// console.log(decryptText(`U2FsdGVkX1+k3OjLV7JJzKsAuhI71Z5aujh5g7MCAYTxmU1RWi42au4OeZwg98wI92HtMMxfetGMBpJXfaIzTw==`, `12345`));
