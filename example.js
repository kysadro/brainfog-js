const brainfog = require("brainfog-js");

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
console.log(string); // Outputs out "rhviwucmcx", "xtgltfjmzt", and etc'