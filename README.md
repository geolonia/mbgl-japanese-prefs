# @geolonia/mbgl-japanese-prefs

[![Build Status](https://travis-ci.org/geolonia/mbgl-japanese-prefs.svg?branch=master)](https://travis-ci.org/geolonia/mbgl-japanese-prefs)
[![npm version](https://badge.fury.io/js/%40geolonia%2Fmbgl-japanese-prefs.svg)](https://badge.fury.io/js/%40geolonia%2Fmbgl-japanese-prefs)

Displays Japanese Prefectures on OpenMapTiles based map.

![](https://www.evernote.com/l/ABWnbE4DWjVMIZtXY-5aKm1T8UIFLQWIuQ8B/image.png)

## DEMO

https://geolonia.github.io/mbgl-japanese-prefs/#5/35.69/139.69

## How to use

```bash
$ npm install @geolonia/mbgl-japanese-prefs --save
```

Then:

```node
import 'babel-polyfill' // For ie11
import jaPrefs from '@geolonia/mbgl-japanese-prefs'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://geolonia.github.io/tiny-tileserver/style.json',
  attributionControl: true,
  hash: true,
  localIdeographFontFamily: "sans-serif",
  interactive: true
});

new jaPrefs().addTo(map)
```

## Options

```node
new jaPrefs({
  id: "japanese-prefectures",
  textFiled: "{name:latin}\n{name:ja}",
  minzoom: 0,
  maxzoom: 9,
  textFont: ['Noto Sans Regular'],
  textSize: 14,
  before: "", // The ID of an existing layer to insert the new layer before.
}).addTo(map)
```

## Internal API

To get GeoJSON, you can do as follows.

```node
import jaPrefs from '@geolonia/mbgl-japanese-prefs'

const geojson = new jaPrefs().getGeoJSON()
console.log(geojson) // GeoJSON of Japanese prefectures
```

To get layer json for `style.json`:

```node
import jaPrefs from '@geolonia/mbgl-japanese-prefs'

const layer = new jaPrefs().getLayer()
console.log(layer) // Layer JSON
```
