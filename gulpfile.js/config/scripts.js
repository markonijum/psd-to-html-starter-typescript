const config = require('./');

module.exports = {
    entry: {
        script: [`${config.assetsPath}js/script.js`],
        vendor: [`${config.assetsPath}js/vendor.js`],
    },
    ts: {
        entry: {
            script: [`${config.assetsPath}js/script.ts`],
            vendor: [`${config.assetsPath}js/vendor.ts`]
        }
    },
    dest: `${config.buildPath}assets/js/`,
};
