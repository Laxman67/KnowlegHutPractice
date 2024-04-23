import crypto from "crypto";
const algorithms = "sha256";
const key = crypto.randomBytes(16);

const hash = crypto.createHash(algorithms, key).update("data").digest("hex");
console.log(hash);
// console.log(hash1); // same as Before
