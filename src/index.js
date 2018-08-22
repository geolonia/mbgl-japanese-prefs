'use strict'

const prefs = require('./todofuken.json')

class JaPrefs {
  constructor(options) {
    if ('undefined' === typeof options) {
      options = {}
    }

    this.options = Object.assign({
        id: "japanese-prefectures",
        minzoom: 0,
        maxzoom: 9,
        textFont: ['Noto Sans Regular'],
        textSize: 14,
      }, options
    )

    this.geojson = {
      type: 'FeatureCollection',
      features: []
    };

    for (let i = 0; i < prefs.length; i++) {
      const props = Object.assign({
        name: "",
        en: "",
        code: "",
      }, prefs[i])

      this.geojson.features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [prefs[i].lng, prefs[i].lat]
        },
        properties: props
      })
    }
  }

  addTo(map) {
    map.on('load', () => {
      map.addSource(this.options.id, {
        type: "geojson",
        data: this.geojson,
      })

      map.addLayer({
        "id": `${this.options.id}-label`,
        "type": "symbol",
        "minzoom": this.options.minzoom,
        "maxzoom": this.options.maxzoom,
        "source": this.options.id,
        "paint": {
          "text-color": "#000000",
          "text-halo-color": "rgba(255, 255, 255, 1)",
          "text-halo-width": 2,
        },
        "layout": {
          "text-field": "{en}\n{name}",
          "text-font": this.options.textFont,
          "text-size": this.options.textSize,
          "text-anchor": "top",
          "text-max-width": 10,
          "text-offset": [0, 0],
          "text-allow-overlap": false,
        }
      });
    })
  }
}

export default JaPrefs
