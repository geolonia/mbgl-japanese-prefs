# @tilecloud/mbgl-japanese-prefs

[![Build Status](https://travis-ci.org/tilecloud/mbgl-japanese-prefs.svg?branch=master)](https://travis-ci.org/tilecloud/mbgl-japanese-prefs)
[![npm version](https://badge.fury.io/js/%40tilecloud%2Fmbgl-japanese-prefs.svg)](https://badge.fury.io/js/%40tilecloud%2Fmbgl-japanese-prefs)

Displays Japanese Prefectures on OpenMapTiles based map.

![](https://www.evernote.com/l/ABWnbE4DWjVMIZtXY-5aKm1T8UIFLQWIuQ8B/image.png)

## DEMO

https://tilecloud.github.io/mbgl-japanese-prefs/#5/35.69/139.69

## How to use

```bash
$ npm install @tilecloud/mbgl-japanese-prefs --save
```

Then:

```node
import 'babel-polyfill' // For ie11
import JaPrefs from '../src'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://tilecloud.github.io/tiny-tileserver/style.json',
  attributionControl: true,
  hash: true,
  localIdeographFontFamily: "sans-serif",
  interactive: true
});

new JaPrefs().addTo(map)
```

## Options

```node
new JaPrefs({
  id: "japanese-prefectures",
  label: "{en}\n{name}",
  minzoom: 0,
  maxzoom: 9,
  textFont: ['Noto Sans Regular'],
  textSize: 14,
}).addTo(map)
```