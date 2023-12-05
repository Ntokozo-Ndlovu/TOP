const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "https://localhost:5072",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
