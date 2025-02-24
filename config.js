var config = {
    style: './map/openstreetmap.json',
    showMarkers: false,
    markerColor: '#a41e35',
    inset: true, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps. You will need to provide your own terrain tiles.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: true,
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
            id: '1875',
            alignment: 'left',
            hidden: false,
            title: '1875',
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
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter2',
            alignment: 'right',
            hidden: false,
            title: 'The Fletcher Family',
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
            id: 'chapter5',
            alignment: 'right',
            hidden: false,
            title: 'Japan',
            image: './images/image5.jpg',
            website: '<a href="https://www.tuj.ac.jp/" target="https://www.tuj.ac.jp/">Website</a>', 
            description: 'The Temple T flies proudly over this campus, which is the oldest and largest foreign university in Japan. Temple University, Japan Campus, takes pride in the top-quality, English-language education it offers. It also provides a unique opportunity for thousands of students from nearly 60 countries to earn American undergraduate and graduate degrees.',
            location: {
                center: [139.67390, 35.64250],
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
            id: 'chapter6',
            alignment: 'left',
            hidden: false,
            title: 'Rome',
            image: './images/image6.jpg',
            website: '<a href="https://studyabroad.temple.edu/programs/temple-university-rome/semester-academic-year-summer" target="https://studyabroad.temple.edu/programs/temple-university-rome/semester-academic-year-summer">Website</a>', 
            description: 'Housed in a historic, light-filled villa on the banks of the Tiber River, Temple Rome immerses students in the richness of Italian culture. An eclectic faculty, frequent field trips, small class sizes and internship opportunities provide students with an unforgettable study-abroad experience',
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
