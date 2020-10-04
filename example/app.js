import 'babel-polyfill'

import GeoloniaControl from '@geolonia/mbgl-geolonia-control'
import ForkMeConntrol from '@geolonia/mbgl-fork-me-control'
import JaPrefs from '../src'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://geolonia.github.io/tiny-tileserver/style.json',
  attributionControl: true,
  hash: true,
  localIdeographFontFamily: "sans-serif",
  interactive: true
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());
map.addControl(new GeoloniaControl());
map.addControl(new ForkMeConntrol({
  url: 'https://github.com/tilecloud/mbgl-japanese-prefs',
}));

new JaPrefs({id: "todofuken", before: "place_country_other"}).addTo(map)
