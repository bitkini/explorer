global.currencyTypes = {
  // our new Bitkini native unit
  "kini": {
    id:            "kini",
    type:          "native",
    name:          "KINI",      // this is what formatCurrencyAmount() will return
    multiplier:    1,
    default:       true,
    decimalPlaces: 8
  },

  // keep satoshi as-is
  "sat": {
    id:            "sat",
    type:          "native",
    name:          "sat",
    multiplier:    100000000,
    decimalPlaces: 0
  },

  // now your fiat bridge currencies
  "usd": {
    id:            "usd",
    type:          "exchanged",
    name:          "USD",
    multiplier:    "usd",
    decimalPlaces: 2,
    symbol:        "$"
  },
  "eur": {
    id:            "eur",
    type:          "exchanged",
    name:          "EUR",
    multiplier:    "eur",
    decimalPlaces: 2,
    symbol:        "€"
  },
  "gbp": {
    id:            "gbp",
    type:          "exchanged",
    name:          "GBP",
    multiplier:    "gbp",
    decimalPlaces: 2,
    symbol:        "£"
  },

  // (optional) keep "btc" as an alias if you need it
  "btc": {
    id:            "kini",
    type:          "native",
    name:          "KINI",
    multiplier:    1,
    default:       true,
    decimalPlaces: 8
  }
};

global.currencySymbols = {
  "kini": "₿",
  "sat":   "sat",
  "usd":   "$",
  "eur":   "€",
  "gbp":   "£",
  // if you kept "btc" above as an alias:
  "btc": "₿"
};
