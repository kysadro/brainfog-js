function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const alphabet = "abcdefghijklmnopqrstuvwxyz"; // + "!@#$%^&*()_+-={}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacters = "!@#$%^&*()_+={}[]<>/";

module.exports = {
    run: (times = 1000, complexity = 16, returnResult = true) => {
        let data = [];
        for (let i = 0; i < times; i++) {
            let chunk = "";
            for (let c = 0; c < complexity; c++) {  // C++ ayy~
                chunk += alphabet[getRandomInt(0, alphabet.length - 1)];
            }
            data.push(chunk);
        }
        if (returnResult) return data;
    },
    runOnce: (complexity = 16, returnResult = true) => {
        let data = "";
        for (let c = 0; c < complexity; c++) {  // C++ ayy~
            data += alphabet[getRandomInt(0, alphabet.length - 1)];
        }
        if (returnResult) return data;
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
    },
    /**
     * Create a random array using the arguments
     * @param {String[]} data - The template
     * @returns {String[]}
     */
    runUseFormat: (data = ["hello", "world"]) => {
        let results = [];

        //console.log(data.length - 1);
        for (let y = 0; y < data.length; y++) {
            let result = "";
            let toDecrypt = "";
            for (let i = 0; i < data[y].length; i++) {
                toDecrypt += alphabet[getRandomInt(0, alphabet.length - 1)];
            }

            while (result !== toDecrypt) {
                result = "";
                for (let x = 0; x < data[y].length; x++) {
                    result += alphabet[getRandomInt(0, alphabet.length - 1)];
                }
            } // If it finally does:
            results.push(result);
        }
        return results;
    }
}