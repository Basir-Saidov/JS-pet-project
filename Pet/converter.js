const RATES = {
    USD: 0.015,
    EUR: 0.013 
};

function convert({ RUB, currency }) {
    if (!RATES[currency]) {
        return null;
    }

    return RUB * RATES[currency];
}

