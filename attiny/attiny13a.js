module.exports = {
  "name": "ATtiny13A",
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
    "delay": 45,
    "pollMethod": 1
  },
  "flash": {
    "write": [64, 76, 0],
    "read": [32, 0, 0],
    "mode": 65,
    "blockSize": 32,
    "delay": 10,
    "poll2": 255,
    "poll1": 255,
    "size": 1024,
    "pageSize": 32,
    "pages": 32,
    "addressOffset": 0
  },
  "eeprom": {
    "write": [193, 194, 0],
    "read": [160, 0, 0],
    "mode": 65,
    "blockSize": 4,
    "delay": 5,
    "poll2": 255,
    "poll1": 255,
    "size": 64,
    "pageSize": 4,
    "pages": 16,
    "addressOffset": 0
  },
  "sig": [30, 144, 7],
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