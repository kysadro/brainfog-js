# brainfog-js

*Brainfog-JS* is an Open-Source NodeJS module that generates random strings (and that includes license keys)

Example code:
```javascript
const brainfog = require("brainfog");

// License key generation
const licenseCode = brainfog.generateLicense(); // (Has optional arguments)
console.log(licenseCode);  // Outputs out "ZSDmR-rkyhf-drdzm-PqiMB", "oxatN-JTvFO-aGMWV-Bqbvj", etc

// Random string arrays
const array = brainfog.run(
    /* times: */ 3,
    /* complexity: */ 8,
    /* randomCase: */ false
);
console.log(array);  // Outputs out: ["ltzwidsb", "edwwgvqh", "onexotym"]

// Random strings
const string = brainfog.runOnce(
    /* Complexity: */ 10,
    /* randomCase: */ false
);
console.log(string); // Outputs out random strings like "rhviwucmcx", "xtgltfjmzt", and etc'
```

## 1. Installing Brainfog-JS:
    npm install brainfog
