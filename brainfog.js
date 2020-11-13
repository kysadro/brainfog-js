// Brainfog-JS, owned by Kysadro

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters = "!@#$%^&*()_+={}[]<>/";

module.exports = {
    /**
     * Generates a bunch of random strings and returns them in an array
     * @param {Number} times - The times it should run (and the overall length of the array it returns)
     * @param {Number} complexity - The length of each string
     * @param {Boolean} randomCase - If it should switch between upper-case and lower-case randomly
     * @param returnResult - If it should return anything
     * @returns {[]}
     */
    run: (times = 1000, complexity = 16, randomCase = true, returnResult = true) => {
        let data = [];
        for (let i = 0; i < times; i++) {
            let chunk = "";
            for (let c = 0; c < complexity; c++) {  // C++ ayy~
                chunk += ((randomCase)
                    ? (alphabet.toLowerCase() + alphabet.toUpperCase())[getRandomInt(0, (alphabet.length * 2) - 1)]
                    : alphabet[getRandomInt(0, alphabet.length - 1)]);
            }
            data.push(chunk);
        }
        if (returnResult) return data;
    },
    /**
     * Generate one random string
     * @param {Number} length - The length of the random string
     * @param {Boolean} randomCase - If it should switch between upper-case and lower-case randomly
     * @returns {String} Random string
     */
    runOnce: (length = 16, randomCase = true) => {
        let data = "";
        for (let c = 0; c < length; c++) {
            data += ((randomCase)
                ? (alphabet.toLowerCase() + alphabet.toUpperCase())[getRandomInt(0, (alphabet.length * 2) - 1)]
                : alphabet[getRandomInt(0, alphabet.length - 1)]);
        }
        return data;
    },
    /**
     * Generates a random license key
     * @param {Number} chunks - How many chunks of info the key contains (4 by default)
     * @param {Number} chunkLength - The length of each chunk (5 by default)
     * @param {Boolean} randomCase - Whenever the function should switch trough uppercase and lowercase letters randomly (true is the default and is recommended)
     * @param {Boolean} specialChars - Whenever the function should include special characters like "!@#$%" (false by default)
     * @param {String} splitChar - The character to split the chunks with (- by default)
     * @returns {String} License key
     */
    generateLicense: (chunks = 4, chunkLength = 5, randomCase = true, specialChars = false, splitChar = "-") => {
        let data = "";
        for (let i = 0; i < chunks; i++) {
            for (let c = 0; c < chunkLength; c++) {  // C++ ayy~
                // Using "if specialChars &&" might generate the random int so i'm going with this \/
                if (specialChars) { if (getRandomInt(0, 2) === 1) {
                    data += specialCharacters[getRandomInt(0, specialCharacters.length - 1)];
                    continue;
                }}
                data += ((randomCase)
                    ? (alphabet.toLowerCase() + alphabet.toUpperCase())[getRandomInt(0, (alphabet.length * 2) - 1)]
                    : alphabet[getRandomInt(0, alphabet.length - 1)]);
            }
            if (i < chunks - 1) { data += splitChar; }
        }
        return data;
    }
}