const converterBn = require('./converterBn');
const converterEn = require('./converterEn');
module.exports = (n, language = 'en', suffix = true) => {
    if (language === 'bn') {
        return converterBn(n, suffix);
    } else {
        return converterEn(n, suffix);
    }
};
