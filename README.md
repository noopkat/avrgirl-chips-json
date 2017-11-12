# avrgirl-chips-json

AVR microchip properties in friendly json, for use with avrgirl or whatever you fancy.

![avrgirl logo](http://i.imgur.com/hFXbPIe.png)


## Installation:

`npm install avrgirl-chips-json`

## Usage

```javascript
var chips = require('avrgirl-chips-json');

console.log(chips.attiny85);

```

Example object format (ATtiny85):

```javascript
{
  "name": "ATtiny85",
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
    "blockSize": 64,
    "delay": 10,
    "poll2": 255,
    "poll1": 255,
    "size": 8192,
    "pageSize": 64,
    "pages": 128,
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
    "size": 512,
    "pageSize": 4,
    "pages": 128,
    "addressOffset": 0
  },
  "sig": [30, 147, 11],
  "signature": {
    "size": 3,
    "startAddress": 0,
    "read": [48, 0, 0, 0]
  },
  "fuses": {
    "startAddress": 0,
    "write": {
      "low": [172, 160, 0, 0],
      "high": [172, 168, 0, 0],
      "ext": [172, 164, 0, 0]
    },
    "read": {
      "low": [80, 0, 0, 0],
      "high": [88, 8, 0, 0],
      "ext": [80, 8, 0, 0]
    }
  }
}
```

## Supported List

The following chips are supported. If you encounter a bug with any of them, please open an issue on this repository, or better yet, send me a pull request!

**ATtiny chips**

+ attiny13
+ attiny13a
+ attiny1634
+ attiny167
+ attiny2313
+ attiny2313a
+ attiny24
+ attiny24a
+ attiny25
+ attiny26
+ attiny261
+ attiny261a
+ attiny4313
+ attiny43u
+ attiny44
+ attiny441
+ attiny44a
+ attiny45
+ attiny461
+ attiny461a
+ attiny48
+ attiny828
+ attiny84
+ attiny841
+ attiny84a
+ attiny85
+ attiny861
+ attiny861a
+ attiny87
+ attiny88

**ATmega chips**

+ atmega128
+ atmega1280
+ atmega1281
+ atmega1284
+ atmega1284p
+ atmega1284rfr2
+ atmega128a
+ atmega128rfa1
+ atmega128rfr2
+ atmega16
+ atmega162
+ atmega164a
+ atmega164p
+ atmega164pa
+ atmega165a
+ atmega165p
+ atmega165pa
+ atmega168
+ atmega168a
+ atmega168p
+ atmega168pa
+ atmega168pb
+ atmega169a
+ atmega169p
+ atmega169pa
+ atmega16a
+ atmega16hva
+ atmega16hvb
+ atmega16hvbrevb
+ atmega16m1
+ atmega16u2
+ atmega16u4
+ atmega2560
+ atmega2561
+ atmega2564rfr2
+ atmega256rfr2
+ atmega32
+ atmega324a
+ atmega324p
+ atmega324pa
+ atmega325
+ atmega3250
+ atmega3250a
+ atmega3250p
+ atmega3250pa
+ atmega325a
+ atmega325p
+ atmega325pa
+ atmega328
+ atmega328p
+ atmega329
+ atmega3290
+ atmega3290a
+ atmega3290p
+ atmega3290pa
+ atmega329a
+ atmega329p
+ atmega329pa
+ atmega32a
+ atmega32c1
+ atmega32hvb
+ atmega32hvbrevb
+ atmega32m1
+ atmega32u2
+ atmega32u4
+ atmega48
+ atmega48a
+ atmega48p
+ atmega48pa
+ atmega48pb
+ atmega64
+ atmega640
+ atmega644
+ atmega644a
+ atmega644p
+ atmega644pa
+ atmega644rfr2
+ atmega645
+ atmega6450
+ atmega6450a
+ atmega6450p
+ atmega645a
+ atmega645p
+ atmega649
+ atmega6490
+ atmega6490a
+ atmega6490p
+ atmega649a
+ atmega649p
+ atmega64a
+ atmega64c1
+ atmega64hve2
+ atmega64m1
+ atmega64rfr2
+ atmega8
+ atmega8515
+ atmega8535
+ atmega88
+ atmega88a
+ atmega88p
+ atmega88pa
+ atmega88pb
+ atmega8a
+ atmega8hva
+ atmega8u2

## Notes on usage

Unknown values for chips are listed as `null`. If you are using this project, please keep this in mind and implement error handling or account in some way for the possibility of `null` values in your code.

## Contributing

Follow the format of existing chips in this repo. If you need to add a new directory (eg. 'atmega') then go ahead.

1. Fork this repo.
2. Each new chip needs its own file created and all keys filled out.
3. Open a pull request and briefly explain the chips you added

Thank you! :raised_hands:


