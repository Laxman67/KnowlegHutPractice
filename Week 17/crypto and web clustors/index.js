import crypto from "crypto";
const algorithms = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  let ciper = crypto.createCipheriv(algorithms, Buffer.from(key), iv);

  let encrypted = ciper.update(text);
  console.log(encrypted);

  encrypted = Buffer.concat([encrypted, ciper.final()]);

  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted.toString("hex"),
  };
}

function decrypt(text) {
  let iv = Buffer.from(text.iv, "hex");
  let encryptedText = Buffer.from(text.encryptedData, "hex");
  let deciper = crypto.createDecipheriv(algorithms, Buffer.from(key), iv);
  let decrypted = deciper.update(encryptedText);

  decrypted = Buffer.concat([decrypted, deciper.final()]);

  return decrypted.toString();
}

let output = encrypt("Laxman");
console.log(output);

console.log(decrypt(output));
