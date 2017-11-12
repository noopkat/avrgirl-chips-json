module.exports = {
  "name": "ATmega8",
  "timeout": 200,
  "stabDelay": 100,
  "cmdexeDelay": 25,
  "syncLoops": 32,
  "byteDelay": 0,
  "pollIndex": 3,
  "pollValue": 83,
  "preDelay": 1,
  "postDelay": 1,
  "pgmEnable": [172, 83, 0, 0],
  "erase": {
    "cmd": [172, 128, 0, 0],
    "delay": 20,
    "pollMethod": 0
  },
  "flash": {
    "write": [64, 76, 32],
    "read": [32, 0, 0],
    "mode": 33,
    "blockSize": 64,
    "delay": 10,
    "poll2": 0,
    "poll1": 0,
    "size": 8192,
    "pageSize": 128,
    "pages": null,
    "addressOffset": null
  },
  "eeprom": {
    "write": [192, 0, 160],
    "read": [160, 0, 0],
    "mode": 4,
    "blockSize": 128,
    "delay": 20,
    "poll2": 0,
    "poll1": 0,
    "size": 512,
    "pageSize": 4,
    "pages": 128,
    "addressOffset": 0
  },
  "sig": [30, 147, 7],
  "signature": {
    "size": 3,
    "startAddress": 0,
    "read": [48, 0, 0, 0]
  },
  "fuses": {
    "startAddress": 0,
    "write": {
      "low": [172, 160, 0, 0],
      "high": [172, 168, 0, 0]
    },
    "read": {
      "low": [80, 0, 0, 0],
      "high": [88, 8, 0, 0]
    }
  }
}