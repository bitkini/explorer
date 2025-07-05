// app/coins.js
"use strict";

// pull in the upstream BTC defaults:
const btc = require("./coins/btc.js");

// now make our KINI entry by inheriting BTC and overriding the bits we need:
const kini = Object.assign({}, btc, {
  name: "Bitkini",       // human-readable name
  unit: "KINI",          // ticker symbol shown in the UI

  // your custom logos (make sure these files exist under public/img/network-<network>/…)
  logoUrlsByNetwork: {
    main:    "./img/network-mainnet/logo.svg",
    testnet: "./img/network-testnet/logo.svg",
    signet:  "./img/network-signet/logo.svg",
  },

  // the little icon used in dropdowns, favicons, etc.
  coinIconUrlsByNetwork: {
    main:    "./img/network-mainnet/favicon-32x32.png",
    testnet: "./img/network-testnet/favicon-32x32.png",
    signet:  "./img/network-signet/favicon-32x32.png",
  },

  // this is exactly what layout.pug will render in the header
  siteTitlesByNetwork: {
    main:    "Bitkini Explorer",
    testnet: "Bitkini Testnet Explorer",
    signet:  "Bitkini Signet Explorer",
  },

  // if you use the demo‐site dropdown, point these where you want
  demoSiteUrlsByNetwork: {
    main:    "https://explorer.bitkini.lol/",
    testnet: "https://testnet.explorer.bitkini.lol/",
    signet:  "https://signet.explorer.bitkini.lol/",
  }
});

// export KINI first, BTC fallback second:
module.exports = {
  "KINI": kini,
  "BTC": btc,
  "coins": ["KINI","BTC"]
};