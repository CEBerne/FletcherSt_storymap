var config = {
    style: './map/openstreetmap.json',
    showMarkers: false,
    markerColor: '#a41e35',
    inset: true, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps. You will need to provide your own terrain tiles.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: false,
    chapterReturn: true,
    auto: false,
    title: "The Evolution of Fletcher Street's Horse Stables",
    //logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Temple_University_Logo.svg/320px-Temple_University_Logo.svg.png",
    subtitle: "A Legacy of Philadelphia's Black Riders: Past and Present",
    byline: 'By Courtney Berne & Felipe Valdez',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: source citations, etc.<br> Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
    chapters: [
        {
            id: 'blank',
            alignment: 'left',
            hidden: true,
            //title: '',
            //image: '',
            //caption: '',
            //website: '',
            //author: '',
            //legend: '',
            //description: '',
            location: {
                center: [-99.78614, 39.74777],
                zoom: 3.53,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            //onChapterEnter: [
                 //{
                   //  layer: '1875_poly',
                  //   opacity: 1,
                 //    duration: 5000
                 //}

            //],
            //onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            //]
        },
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            //title: 'Introduction',
            image: '',
            caption: '',
            //website: '<a href="https://temple.maps.arcgis.com/apps/MapSeries/index.html?appid=9b76db43c88946cfa92d269463ac26dd" target="https://temple.maps.arcgis.com/apps/MapSeries/index.html?appid=9b76db43c88946cfa92d269463ac26dd">Historical map</a>',
            //author: 'Felipe Valdez',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em><br></span><img src="/images/legend1.png" style="display: block; margin-top: 10px; width: 100%; max-width: 200px;">',
            description: '...add descritpion text',
            location: {
                center: [-76.72589, 39.84370],
                zoom: 6.54,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            //onChapterEnter: [],
            //onChapterExit: []
        },
        {
            id: 'Chapter 1',
            alignment: 'left',
            hidden: false,
            title: "Philadelphia's Public Transportation: The Horse-Drawn Streetcar (1858-1897)",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/1883_Hexamer_Depot_in_detail.jpg',
            caption: 'Horse Car Depot',
            //website: '<a href="https://temple.maps.arcgis.com/apps/MapSeries/index.html?appid=9b76db43c88946cfa92d269463ac26dd" target="https://temple.maps.arcgis.com/apps/MapSeries/index.html?appid=9b76db43c88946cfa92d269463ac26dd">Historical map</a>',
            //author: 'Felipe Valdez',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em><br></span><img src="/images/legend1.png" style="display: block; margin-top: 10px; width: 100%; max-width: 200px;">',
            description: '..description',
            location: {
                center: [-75.183, 39.99027],
                zoom: 16.12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: true,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: '1875_poly',
                     opacity: 1,
                     duration: 5000
                 }

            ],
            onChapterExit: []
        },
        {
            id: 'Chapter 2',
            alignment: 'left',
            hidden: false,
            title: "The Fletcher Family",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Fletcher_family_portraits.jpg',
            website: '<a href="https://ambler.temple.edu/" target="https://ambler.temple.edu/">Learn more</a>',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em><br></span><img src="/images/legend1.png" style="display: block; margin-top: 10px; width: 100%; max-width: 200px;">',
            description: 'By 1880...Blurb about Fletcher Family TBD',
            location: {
                center: [-75.17919, 39.99034],
                zoom: 17.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pcwnet',
                    opacity: 1
                }
           ],
           onChapterExit: [
               {
                   layer: 'pcwnet',
                   opacity: 0
               }
           ]
        },
        {
            id: 'Chapter 3',
            alignment: 'left',
            hidden: false,
            title: "1888: 2613 W Fletcher Street appears on maps",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Horace_house.jpg', 
            description: 'Blurb about Horace Lederman and duration of tenure on block',
            location: {
                center: [-75.17919, 39.99034],
                zoom: 17.1,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                 {
                     layer: '1888_house2',
                     opacity: 1
                 }
            ],
            onChapterExit: []
        }, 
        {
            id: 'Chapter 4',
            alignment: 'left',
            hidden: false,
            title: "Sarah Fletcher's passing (1901)",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Fletcher_graves.jpg',
            website: '', 
            description: '1899 son leaves her horse. 1902 House is sold - disappeares by 1910',
            location: {
                center: [12.48254, 41.90687],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
            //     {
            //         layer: 'pcwnet',
            //         opacity: 1
            //     }
            ],
            onChapterExit: []
        },
          {
            id: 'Chapter 5',
            alignment: 'left',
            hidden: false,
            title: "Stables on Every Block!",
            image: '',
            website: '', 
            description: 'As you can see from this 1922 Bromley map...',
            location: {
                center: [12.48254, 41.90687],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
            //     {
            //         layer: 'pcwnet',
            //         opacity: 1
            //     }
            ],
            onChapterExit: []
        },
          {
            id: 'Chapter 6',
            alignment: 'left',
            hidden: false,
            title: "Horace's Horses get 'Rambunctious'",
            image: '',
            website: '', 
            description: '',
            location: {
                center: [12.48254, 41.90687],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
            //     {
            //         layer: 'pcwnet',
            //         opacity: 1
            //     }
            ],
            onChapterExit: []
        },
          {
            id: 'Chapter 7',
            alignment: 'left',
            hidden: false,
            title: "Mid-Century Changes",
            image: '',
            website: '', 
            description: 'QGIS map of 1951 & 1967',
            location: {
                center: [12.48254, 41.90687],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
            //     {
            //         layer: 'pcwnet',
            //         opacity: 1
            //     }
            ],
            onChapterExit: []
        },
          {
            id: 'Chapter 8',
            alignment: 'left',
            hidden: false,
            title: "Horace Lederman passes (1975)",
            image: '',
            website: '', 
            description: '1899 son leaves her horse. 1902 House is sold - disappeares by 1910',
            location: {
                center: [12.48254, 41.90687],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
            //     {
            //         layer: 'pcwnet',
            //         opacity: 1
            //     }
            ],
            onChapterExit: []
        },
        {
            id: 'Chapter 9',
            alignment: 'left',
            hidden: false,
            title: "Stables in Pennypack Park",
            image: '',
            website: '', 
            description: '',
            location: {
                center: [12.48254, 41.90687],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
            //     {
            //         layer: 'pcwnet',
            //         opacity: 1
            //     }
            ],
            onChapterExit: []
        }
    ]
};
