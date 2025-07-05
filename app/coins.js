"use strict";

const btc = require("./coins/btc.js");

// Create a KINI coin entry by inheriting everything from BTC…
const kini = Object.assign({}, btc, {
  name: "Bitkini",   // human-readable name
  unit: "KINI",      // ticker symbol shown in UI
});

module.exports = {
  // First list your new coin, then fall back to BTC
  "KINI": kini,
  "BTC": btc,

  // Supported coin keys in the order you prefer
  "coins": ["KINI", "BTC"]
};