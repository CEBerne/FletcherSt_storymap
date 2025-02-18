var externalData = {
    sources: [
      {
          "name": '1875_poly',
          "type": 'geojson',
          "data": 'https://raw.githubusercontent.com/fmvaldezg/maplibre-storymap/main/map/sources/network.geojson'
        },
    ],
    layers: [
      {
          "id": "pcw-points",
          "type": "circle",
          "source": "PCW",
        //  "source-layer": "",
          "paint": {
              "circle-radius": 8,
              "circle-color": "#0f0f0f",
              "circle-stroke-width": 0.5,
              "circle-stroke-color": "#0f0f0f"

          }
      }
    ]
};
