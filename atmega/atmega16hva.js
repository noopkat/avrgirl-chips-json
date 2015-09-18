module.exports = {
  "name": "ATmega16HVA",
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
    "pollMethod": 1
  },
  "flash": {
    "write": [64, 76, 0],
    "read": [32, 0, 0],
    "mode": 65,
    "blockSize": 128,
    "delay": 10,
    "poll2": 0,
    "poll1": 0,
    "size": 16384,
    "pageSize": 128,
    "pages": 128,
    "addressOffset": 0
  },
  "eeprom": {
    "write": [193, 194, 0],
    "read": [160, 0, 0],
    "mode": 65,
    "blockSize": 4,
    "delay": 20,
    "poll2": 0,
    "poll1": 0,
    "size": 256,
    "pageSize": 4,
    "pages": 64,
    "addressOffset": 0
  },
  "sig": [30, 148, 12],
  "signature": {
    "size": 3,
    "startAddress": 0,
    "read": [48, 0, 0, 0]
  },
  "fuses": {
    "startAddress": 0,
    "write": {"byte": [172, 160, 0, 0]},
    "read": {"byte": [80, 0, 0, 0]}
  }
}