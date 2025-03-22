# For contributors

Обмисляйки как да се организира този проект отвъд най-основното в него - My maps картата - се натъкнах и на други начини да се разглеждат и редактират картите, които добавям в интерес на open-source намеренията ми към него. Не знам дали някой ще им намери приложение, но ще се радвам да ми пише и покаже, ако успее да намери и подобрения в процеса на поддръжката му.
Картите могат да бъдат представяни в тесктов формат (.kml), който да се променя със скриптове.

## Format conversion

### KMZ -> KML

KMZ is simpy an archive containing the KML file, so:

```bash
sudo apt install unzip
unzip your_map.kmz
```

### KML -> geoJson

[mapbox/togeojson](https://github.com/mapbox/togeojson)

```bash
npm install -g @mapbox/togeojson
togeojson your_map.kml > your_map.geojson
```

A script is used to remove pins from the map because ` togeojson ` does not convert the map in its entirety, but displays all pins black and without formatting.
