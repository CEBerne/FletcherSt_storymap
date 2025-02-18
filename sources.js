var externalData = {
    sources: [
      {
          "name": '1875_poly',
          "type": 'geojson',
          "data": 'https://raw.githubusercontent.com/CEBerne/FletcherSt_storymap/main/map/sources/1875_chapter.geojson'
        },
    ],
    layers: [
      {
          "id": "1875_poly",
          "type": "fill",
          "source": "1875_poly",
        //  "source-layer": "",
          "paint": {
              "fill-color": "#0f0f0f"
          }
      }
    ]
};
