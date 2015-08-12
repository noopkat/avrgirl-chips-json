# avrgirl-chips-json

AVR microchip properties in friendly json-ish format (hex bytes are not json compliant), for use with avrgirl or whatever you fancy. 

![avrgirl logo](http://i.imgur.com/hFXbPIe.png)


## Installation:

`npm install avrgirl-chips-json`

## Usage

There ain't many chips in here right now, but more to come soon.

```javascript
var chips = require('avrgirl-chips-json');

console.log(chips.attiny84);

```

Example object format (ATtiny84):

```javascript
{
  sig: [0x1e, 0x93, 0x0C],
  timeout: 0xC8,
  stabDelay: 0x64,
  cmdexeDelay: 0x19,
  syncLoops: 0x20,
  byteDelay: 0x00,
  pollIndex: 0x03,
  pollValue: 0x53,
  preDelay: 0x01,
  postDelay: 0x01,
  pollMethod: 0x01,
  poll1: 0x00,
  poll2: 0x00,
  pgmEnable: [0xAC, 0x53, 0x00, 0x00],
  flash: {
    paged: true,
    mode: 0xC1,
    delay: 6,
    size: 8192,
    pageSize: 64,
    pages: 128,
    addressOffset: 1,
    write: [0x40, 0x4C, 0x20],
    read: [0x20, 0x00, 0x00],
    poll1: 0xFF,
    poll2: 0xFF
  },
  eeprom: {
    paged: true,
    mode: 0xC1,
    delay: 6,
    size: 512,
    pageSize: 4,
    pages: 128,
    addressOffset: 0,
    write: [0xC1, 0xC2, 0xA0],
    read: [0xA0, 0x00, 0x00],
    poll1: 0xFF,
    poll2: 0xFF
  },
  erase: {
    delay: 10,
    cmd: [0xAC, 0x80, 0x00, 0x00]
  },
  signature: {
    size: 3,
    startAddress: 0x00,
    read: [0x30, 0x00, 0x00, 0x00]
  },
  fuses: {
    startAddress: 0x00,
    write: {
      low: [0xAC, 0xA0, 0x00, 0x62],
      high: [0xAC, 0xA8, 0x00, 0xDF],
      ext: [0xAC, 0xA4, 0x00, 0xFF]
    },
    read: {
      low: [0x50, 0x00, 0x00, 0x00],
      high: [0x58, 0x08, 0x00, 0x00],
      ext: [0x50, 0x08, 0x00, 0x00]
    }
  }
}
```

## Contributing

Please do! I'm currently working on a translation project to generate new objects for new chips from existing public formats, but pull request me with more if you beat me to it.

Follow the format of existing chips in this repo. If you need to add a new directory (eg. 'mega') then go ahead.

1. Fork this repo.
2. Each new chip needs its own file created and all keys filled out.
3. Require the new chip file(s) within `avrgirl-chips-json.js` in the root directory of this repo.
4. Open a pull request and briefly explain the chips you added

Thank you 🙌🏼


