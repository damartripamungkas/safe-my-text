<h1 align="center">
    SAFE-MY-TEXT
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/damartripamungkas/safe-my-text?color=04D361&labelColor=000000">
  
  <a href="#">
    <img alt="Made by" src="https://img.shields.io/static/v1?label=made%20by&message=damartripamungkas&color=04D361&labelColor=000000">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/damartripamungkas/safe-my-text?color=04D361&labelColor=000000">
  
  <a href="#">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/damartripamungkas/safe-my-text?color=04D361&labelColor=000000">
  </a>
</p>

### 📖 Description :

This package is made for those who want to encrypt and decrypt using AES-256. The difference between this package and the default crypto-js package is that it provides specialized handling for encryption and decryption. This package can also be used for encryption of private data such as pharse crypto, privatekey crypto and others.

###

### 💻 Step to install :

```
npm install safe-my-text
```

### ✏️ Example :

see full [here](./test)

```typescript
import { encryptText, decryptText } from "safe-my-text"

const password = `president123`
const encrypt = encryptText(`mypharse wallet crypto`, password)
const decrypt = decryptText(encrypt, password)

console.log({ encrypt, decrypt })
```

### 🧾 Pre-Requisistes :

```
- node.js / bun.js / deno.js
- (optional) typescript
- (optional) commonJS
- (optional) ESM
```

### 📝 License :

Licensed under the [MIT License](./LICENSE).
