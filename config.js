var config = {
    style: './map/openstreetmap.json',
    showMarkers: false,
    markerColor: '#a41e35',
    inset: true, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false,
    useCustomLayers: false,
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
            onChapterEnter: [
                 {
                     layer: '1875_b',
                     opacity: 0,
                 },
                 {
                    layer: '1875_barn',
                    opacity: 0,
                },
                {
                    layer: '1875_house',
                    opacity: 0,
                },
                {
                    layer: '1875_depot',
                    opacity: 0,
                },
                {
                    layer: 'depot2',
                    opacity: 0,
                },
                {
                    layer: '1888_barn',
                    opacity: 0,
                },
                {
                    layer: '1888_house1',
                    opacity: 0,
                },
                {
                    layer: '1888_house2',
                    opacity: 0,
                },
                {
                    layer: '1888',
                    opacity: 0,
                },
                {
                    layer: '1922',
                    opacity: 0,
                },
                {
                    layer: '1951',
                    opacity: 0,
                },
                {
                    layer: '1967',
                    opacity: 0,
                },
                {
                    layer: '1901',
                    opacity: 0,
                },
                {
                    layer: '1976',
                    opacity: 0,
                },
                {
                    layer: '1981',
                    opacity: 0,
                },
                {
                    layer: '1987',
                    opacity: 0,
                },
                {
                    layer: '1994',
                    opacity: 0,
                },
                {
                    layer: '2023',
                    opacity: 0,
                },
                {
                    layer: '2024',
                    opacity: 0,
                },
                {
                    layer: 'ch2',
                    opacity: 0,
                },
                {
                    layer: 'ch3',
                    opacity: 0,
                },
                {
                    layer: 'ch9',
                    opacity: 0,
                },
                {
                    layer: 'ch15',
                    opacity: 0,
                }
            ],
            onChapterExit: []
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
            description: '<iframe class="responsive-iframe" src="https://drive.google.com/file/d/1ZDQ-IbiZWFvSlvCap_W_-WWabdswXXVx/preview" allow="autoplay"></iframe>',
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
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: '1875_b',
                    opacity: 1,
                },
                {
                   layer: '1875_barn',
                   opacity: 1,
               },
               {
                   layer: '1875_house',
                   opacity: 1,
               },
               {
                   layer: '1875_depot',
                   opacity: 0,
               },
               {
                   layer: 'depot2',
                   opacity: 1,
               },
               {
                   layer: '1888_barn',
                   opacity: 0,
               },
               {
                   layer: '1888_house1',
                   opacity: 0,
               },
               {
                   layer: '1888_house2',
                   opacity: 0,
               },
               {
                   layer: '1888',
                   opacity: 0,
               },
               {
                   layer: '1922',
                   opacity: 0,
               },
               {
                   layer: '1951',
                   opacity: 0,
               },
               {
                   layer: '1967',
                   opacity: 0,
               },
               {
                   layer: '1901',
                   opacity: 0,
               },
               {
                layer: '1976',
                opacity: 0,
               },
               {
                layer: '1981',
                opacity: 0,
               },
               {
                layer: '1987',
                opacity: 0,
                },
                {
                    layer: '1994',
                    opacity: 0,
                },
                {
                    layer: '2023',
                    opacity: 0,
                },
                {
                    layer: '2024',
                    opacity: 0,
                },
                {
                    layer: 'ch2',
                    opacity: 0,
                },
                {
                    layer: 'ch3',
                    opacity: 0,
                },
                {
                    layer: 'ch9',
                    opacity: 0,
                },
                {
                    layer: 'ch15',
                    opacity: 0,
                }
            ]
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
            onChapterEnter: [],
            onChapterExit: [
                {
                layer: '1875_b',
                opacity: 1,
            },
            {
               layer: '1875_barn',
               opacity: 1,
           },
           {
               layer: '1875_house',
               opacity: 1,
           },
           {
               layer: '1875_depot',
               opacity: 0,
           },
           {
               layer: 'depot2',
               opacity: 0,
           },
           {
               layer: '1888_barn',
               opacity: 0,
           },
           {
               layer: '1888_house1',
               opacity: 0,
           },
           {
               layer: '1888_house2',
               opacity: 0,
           },
           {
               layer: '1888',
               opacity: 0,
           },
           {
               layer: '1922',
               opacity: 0,
           },
           {
               layer: '1951',
               opacity: 0,
           },
           {
               layer: '1967',
               opacity: 0,
           },
           {
               layer: '1901',
               opacity: 0,
           },
           {
            layer: '1976',
            opacity: 0,
           },
           {
            layer: '1981',
            opacity: 0,
           },
           {
            layer: '1987',
            opacity: 0,
            },
            {
                layer: '1994',
                opacity: 0,
            },
            {
                layer: '2023',
                opacity: 0,
            },
            {
                layer: '2024',
                opacity: 0,
            },
            {
                layer: 'ch2',
                opacity: 1,
            },
            {
                layer: 'ch3',
                opacity: 0,
            },
            {
                layer: 'ch9',
                opacity: 0,
            },
            {
                layer: 'ch15',
                opacity: 0,
            }
        ]
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
            onChapterEnter: [],
            onChapterExit: [
            {
                layer: '1875_b',
                opacity: 0,
            },
            {
               layer: '1875_barn',
               opacity: 0,
           },
           {
               layer: '1875_house',
               opacity: 0,
           },
           {
               layer: '1875_depot',
               opacity: 0,
           },
           {
               layer: 'depot2',
               opacity: 0,
           },
           {
               layer: '1888_barn',
               opacity: 0,
           },
           {
               layer: '1888_house1',
               opacity: 0,
           },
           {
               layer: '1888_house2',
               opacity: 0,
           },
           {
               layer: '1888',
               opacity: 1,
           },
           {
               layer: '1922',
               opacity: 0,
           },
           {
               layer: '1951',
               opacity: 0,
           },
           {
               layer: '1967',
               opacity: 0,
           },
           {
               layer: '1901',
               opacity: 0,
           },
           {
            layer: '1976',
            opacity: 0,
           },
           {
            layer: '1981',
            opacity: 0,
           },
           {
            layer: '1987',
            opacity: 0,
            },
            {
                layer: '1994',
                opacity: 0,
            },
            {
                layer: '2023',
                opacity: 0,
            },
            {
                layer: '2024',
                opacity: 0,
            },
            {
                layer: 'ch2',
                opacity: 0,
            },
            {
                layer: 'ch3',
                opacity: 1,
            },
            {
                layer: 'ch9',
                opacity: 0,
            },
            {
                layer: 'ch15',
                opacity: 0,
            }
           ]
        },
        {
            id: 'Chapter 3',
            alignment: 'left',
            hidden: false,
            title: "1888: 2613 W Fletcher Street appears on maps",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Just_Horaces_house.jpg', 
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

            ],
            onChapterExit: [
                {
                    layer: '1875_b',
                    opacity: 0,
                },
                {
                   layer: '1875_barn',
                   opacity: 0,
               },
               {
                   layer: '1875_house',
                   opacity: 0,
               },
               {
                   layer: '1875_depot',
                   opacity: 0,
               },
               {
                   layer: 'depot2',
                   opacity: 0,
               },
               {
                   layer: '1888_barn',
                   opacity: 0,
               },
               {
                   layer: '1888_house1',
                   opacity: 0,
               },
               {
                   layer: '1888_house2',
                   opacity: 0,
               },
               {
                   layer: '1888',
                   opacity: 0,
               },
               {
                   layer: '1922',
                   opacity: 0,
               },
               {
                   layer: '1951',
                   opacity: 0,
               },
               {
                   layer: '1967',
                   opacity: 0,
               },
               {
                   layer: '1901',
                   opacity: 1,
               },
               {
                layer: '1976',
                opacity: 0,
               },
               {
                layer: '1981',
                opacity: 0,
               },
               {
                layer: '1987',
                opacity: 0,
                },
                {
                    layer: '1994',
                    opacity: 0,
                },
                {
                    layer: '2023',
                    opacity: 0,
                },
                {
                    layer: '2024',
                    opacity: 0,
                },
                {
                    layer: 'ch2',
                    opacity: 0,
                },
                {
                    layer: 'ch3',
                    opacity: 0,
                },
                {
                    layer: 'ch9',
                    opacity: 0,
                },
                {
                    layer: 'ch15',
                    opacity: 0,
                }
            ]
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
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: '1875_b',
                    opacity: 0,
                },
                {
                   layer: '1875_barn',
                   opacity: 0,
               },
               {
                   layer: '1875_house',
                   opacity: 0,
               },
               {
                   layer: '1875_depot',
                   opacity: 0,
               },
               {
                   layer: 'depot2',
                   opacity: 0,
               },
               {
                   layer: '1888_barn',
                   opacity: 0,
               },
               {
                   layer: '1888_house1',
                   opacity: 0,
               },
               {
                   layer: '1888_house2',
                   opacity: 0,
               },
               {
                   layer: '1888',
                   opacity: 0,
               },
               {
                   layer: '1922',
                   opacity: 1,
               },
               {
                   layer: '1951',
                   opacity: 0,
               },
               {
                   layer: '1967',
                   opacity: 0,
               },
               {
                   layer: '1901',
                   opacity: 0,
               },
               {
                layer: '1976',
                opacity: 0,
               },
               {
                layer: '1981',
                opacity: 0,
               },
               {
                layer: '1987',
                opacity: 0,
                },
                {
                    layer: '1994',
                    opacity: 0,
                },
                {
                    layer: '2023',
                    opacity: 0,
                },
                {
                    layer: '2024',
                    opacity: 0,
                },
                {
                    layer: 'ch2',
                    opacity: 0,
                },
                {
                    layer: 'ch3',
                    opacity: 0,
                },
                {
                    layer: 'ch9',
                    opacity: 0,
                },
                {
                    layer: 'ch15',
                    opacity: 0,
                }
            ]
        },
          {
            id: 'Chapter 5',
            alignment: 'left',
            hidden: false,
            title: "Stables on Every Block!",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/1920s_1930s_horses_in_Philly.jpg',
            website: '', 
            description: "In the early part of the 20th Century, horses proliferated the streets of Philadelphia...",
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
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: '1875_b',
                    opacity: 0,
                },
                {
                   layer: '1875_barn',
                   opacity: 0,
               },
               {
                   layer: '1875_house',
                   opacity: 0,
               },
               {
                   layer: '1875_depot',
                   opacity: 0,
               },
               {
                   layer: 'depot2',
                   opacity: 0,
               },
               {
                   layer: '1888_barn',
                   opacity: 0,
               },
               {
                   layer: '1888_house1',
                   opacity: 0,
               },
               {
                   layer: '1888_house2',
                   opacity: 0,
               },
               {
                   layer: '1888',
                   opacity: 0,
               },
               {
                   layer: '1922',
                   opacity: 0,
               },
               {
                   layer: '1951',
                   opacity: 1,
               },
               {
                   layer: '1967',
                   opacity: 0,
               },
               {
                   layer: '1901',
                   opacity: 0,
               },
               {
                layer: '1976',
                opacity: 0,
               },
               {
                layer: '1981',
                opacity: 0,
               },
               {
                layer: '1987',
                opacity: 0,
                },
                {
                    layer: '1994',
                    opacity: 0,
                },
                {
                    layer: '2023',
                    opacity: 0,
                },
                {
                    layer: '2024',
                    opacity: 0,
                },
                {
                    layer: 'ch2',
                    opacity: 0,
                },
                {
                    layer: 'ch3',
                    opacity: 0,
                },
                {
                    layer: 'ch9',
                    opacity: 0,
                },
                {
                    layer: 'ch15',
                    opacity: 0,
                }
            ]
        },
          {
            id: 'Chapter 6',
            alignment: 'left',
            hidden: false,
            title: "Horace's horses get 'Rambunctious'",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Phila_Inquirer_1945_article.jpg',
            website: '', 
            description: "On July 16th 1945, the Philadelphia Inquirer published an article about a pinto pony who escaped Horace Lederman's stable at 2613 W Fletcher Street, causing a three block chase...",
            location: {
                center: [-75.17642, 39.98979],
                zoom: 17.6,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
          {
            id: 'Chapter 7',
            alignment: 'center',
            hidden: false,
            title: "Mid-Century Changes",
            image: '',
            website: '', 
            description: '<iframe width="100%" height="800px" src="https://felipevaldez.com/slide1951_1967/" frameborder="0" scrolling="no"></iframe>',
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
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: '1875_b',
                    opacity: 0,
                },
                {
                   layer: '1875_barn',
                   opacity: 0,
               },
               {
                   layer: '1875_house',
                   opacity: 0,
               },
               {
                   layer: '1875_depot',
                   opacity: 0,
               },
               {
                   layer: 'depot2',
                   opacity: 0,
               },
               {
                   layer: '1888_barn',
                   opacity: 0,
               },
               {
                   layer: '1888_house1',
                   opacity: 0,
               },
               {
                   layer: '1888_house2',
                   opacity: 0,
               },
               {
                   layer: '1888',
                   opacity: 0,
               },
               {
                   layer: '1922',
                   opacity: 0,
               },
               {
                   layer: '1951',
                   opacity: 0,
               },
               {
                   layer: '1967',
                   opacity: 0,
               },
               {
                   layer: '1901',
                   opacity: 0,
               },
               {
                layer: '1976',
                opacity: 1,
               },
               {
                layer: '1981',
                opacity: 0,
               },
               {
                layer: '1987',
                opacity: 0,
                },
                {
                    layer: '1994',
                    opacity: 0,
                },
                {
                    layer: '2023',
                    opacity: 0,
                },
                {
                    layer: '2024',
                    opacity: 0,
                },
                {
                    layer: 'ch2',
                    opacity: 0,
                },
                {
                    layer: 'ch3',
                    opacity: 0,
                },
                {
                    layer: 'ch9',
                    opacity: 0,
                },
                {
                    layer: 'ch15',
                    opacity: 0,
                }
            ]
        },
          {
            id: 'Chapter 8',
            alignment: 'left',
            hidden: false,
            title: "Horace Lederman passes (1975)",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Horace_obits_cropped.png',
            website: '', 
            description: 'From 1923-1981 the Lederman family owned property on the 2600 block of W Fletcher Street, with space for horses...',
            location: {
                center: [-75.17720, 39.98982],
                zoom: 17.6,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: '1875_b',
                    opacity: 0,
                },
                {
                   layer: '1875_barn',
                   opacity: 0,
               },
               {
                   layer: '1875_house',
                   opacity: 0,
               },
               {
                   layer: '1875_depot',
                   opacity: 0,
               },
               {
                   layer: 'depot2',
                   opacity: 0,
               },
               {
                   layer: '1888_barn',
                   opacity: 0,
               },
               {
                   layer: '1888_house1',
                   opacity: 0,
               },
               {
                   layer: '1888_house2',
                   opacity: 0,
               },
               {
                   layer: '1888',
                   opacity: 0,
               },
               {
                   layer: '1922',
                   opacity: 0,
               },
               {
                   layer: '1951',
                   opacity: 0,
               },
               {
                   layer: '1967',
                   opacity: 0,
               },
               {
                   layer: '1901',
                   opacity: 0,
               },
               {
                layer: '1976',
                opacity: 0,
               },
               {
                layer: '1981',
                opacity: 1,
               },
               {
                layer: '1987',
                opacity: 0,
                },
                {
                    layer: '1994',
                    opacity: 0,
                },
                {
                    layer: '2023',
                    opacity: 0,
                },
                {
                    layer: '2024',
                    opacity: 0,
                },
                {
                    layer: 'ch2',
                    opacity: 0,
                },
                {
                    layer: 'ch3',
                    opacity: 0,
                },
                {
                    layer: 'ch9',
                    opacity: 1,
                },
                {
                    layer: 'ch15',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'Chapter 9',
            alignment: 'left',
            hidden: false,
            title: "Stables in Pennypack Park",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Pennypack_park_stable.png',
            website: '', 
            description: 'From 1979-1982, the Boulevard Stablemates operated out of a former Mounted Police stable, offering horseback riding lessons to local children...',
            location: {
                center: [-75.03951, 40.06621],
                zoom: 16,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: '1875_b',
                    opacity: 0,
                },
                {
                   layer: '1875_barn',
                   opacity: 0,
               },
               {
                   layer: '1875_house',
                   opacity: 0,
               },
               {
                   layer: '1875_depot',
                   opacity: 0,
               },
               {
                   layer: 'depot2',
                   opacity: 0,
               },
               {
                   layer: '1888_barn',
                   opacity: 0,
               },
               {
                   layer: '1888_house1',
                   opacity: 0,
               },
               {
                   layer: '1888_house2',
                   opacity: 0,
               },
               {
                   layer: '1888',
                   opacity: 0,
               },
               {
                   layer: '1922',
                   opacity: 0,
               },
               {
                   layer: '1951',
                   opacity: 0,
               },
               {
                   layer: '1967',
                   opacity: 0,
               },
               {
                   layer: '1901',
                   opacity: 0,
               },
               {
                layer: '1976',
                opacity: 0,
               },
               {
                layer: '1981',
                opacity: 0,
               },
               {
                layer: '1987',
                opacity: 1,
                },
                {
                    layer: '1994',
                    opacity: 0,
                },
                {
                    layer: '2023',
                    opacity: 0,
                },
                {
                    layer: '2024',
                    opacity: 0,
                },
                {
                    layer: 'ch2',
                    opacity: 0,
                },
                {
                    layer: 'ch3',
                    opacity: 0,
                },
                {
                    layer: 'ch9',
                    opacity: 0,
                },
                {
                    layer: 'ch15',
                    opacity: 0,
                }
            ]
        },
         {
            id: 'Chapter 10',
            alignment: 'left',
            hidden: false,
            title: "Black (female) owner of horse stable, a first on Fletcher Street",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Bertha_property_deed.jpg',
            website: '', 
            description: "In 1986, Bertha Felder purchased the brick barn at 2603 W Fletcher Street...",
            location: {
                center: [-75.17716, 39.99014],
                zoom: 17.1,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: '1875_b',
                    opacity: 0,
                },
                {
                   layer: '1875_barn',
                   opacity: 0,
               },
               {
                   layer: '1875_house',
                   opacity: 0,
               },
               {
                   layer: '1875_depot',
                   opacity: 0,
               },
               {
                   layer: 'depot2',
                   opacity: 0,
               },
               {
                   layer: '1888_barn',
                   opacity: 0,
               },
               {
                   layer: '1888_house1',
                   opacity: 0,
               },
               {
                   layer: '1888_house2',
                   opacity: 0,
               },
               {
                   layer: '1888',
                   opacity: 0,
               },
               {
                   layer: '1922',
                   opacity: 0,
               },
               {
                   layer: '1951',
                   opacity: 0,
               },
               {
                   layer: '1967',
                   opacity: 0,
               },
               {
                   layer: '1901',
                   opacity: 0,
               },
               {
                layer: '1976',
                opacity: 0,
               },
               {
                layer: '1981',
                opacity: 0,
               },
               {
                layer: '1987',
                opacity: 0,
                },
                {
                    layer: '1994',
                    opacity: 1,
                },
                {
                    layer: '2023',
                    opacity: 0,
                },
                {
                    layer: '2024',
                    opacity: 0,
                },
                {
                    layer: 'ch2',
                    opacity: 0,
                },
                {
                    layer: 'ch3',
                    opacity: 0,
                },
                {
                    layer: 'ch9',
                    opacity: 0,
                },
                {
                    layer: 'ch15',
                    opacity: 0,
                }
            ]
        },
         {
            id: 'Chapter 11',
            alignment: 'left',
            hidden: false,
            title: "El Dog relocates horses to Brewerytown",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/El_Dog_in_Brewerytown.jpeg',
            website: '', 
            description: "In the late 1980's and 1990's into the early 2000's, Ellis was forced to move his horses into abandoned warehouses in what was pre-gentrified Brewerytown...",
            location: {
                center: [-75.18835, 39.97943],
                zoom: 16.8,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: '1875_b',
                    opacity: 0,
                },
                {
                   layer: '1875_barn',
                   opacity: 0,
               },
               {
                   layer: '1875_house',
                   opacity: 0,
               },
               {
                   layer: '1875_depot',
                   opacity: 0,
               },
               {
                   layer: 'depot2',
                   opacity: 0,
               },
               {
                   layer: '1888_barn',
                   opacity: 0,
               },
               {
                   layer: '1888_house1',
                   opacity: 0,
               },
               {
                   layer: '1888_house2',
                   opacity: 0,
               },
               {
                   layer: '1888',
                   opacity: 0,
               },
               {
                   layer: '1922',
                   opacity: 0,
               },
               {
                   layer: '1951',
                   opacity: 0,
               },
               {
                   layer: '1967',
                   opacity: 0,
               },
               {
                   layer: '1901',
                   opacity: 0,
               },
               {
                layer: '1976',
                opacity: 0,
               },
               {
                layer: '1981',
                opacity: 0,
               },
               {
                layer: '1987',
                opacity: 0,
                },
                {
                    layer: '1994',
                    opacity: 0,
                },
                {
                    layer: '2023',
                    opacity: 0,
                },
                {
                    layer: '2024',
                    opacity: 0,
                },
                {
                    layer: 'ch2',
                    opacity: 0,
                },
                {
                    layer: 'ch3',
                    opacity: 0,
                },
                {
                    layer: 'ch9',
                    opacity: 0,
                },
                {
                    layer: 'ch15',
                    opacity: 0,
                }
            ]
        },
         {
            id: 'Chapter 12',
            alignment: 'right',
            hidden: false,
            title: "Fletcher Street in the 1990's",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Chapter_12.png',
            website: '', 
            description: "Image from Ron Tarver's book to be added along with article photo...",
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
            //     {
            //         layer: 'pcwnet',
            //         opacity: 1
            //     }
            ],
            onChapterExit: []
        },
         {
            id: 'Chapter 13',
            alignment: 'right',
            hidden: false,
            title: "Fletcher Street in the early 21st Century",
            image: '',
            website: '', 
            description: '<iframe src="https://drive.google.com/file/d/1PN1bCly8mc9l7iVBBbrGnT9-_sUGgKcL/preview" width="640" height="480" allow="autoplay"></iframe>',
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
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: '1875_b',
                    opacity: 0,
                },
                {
                   layer: '1875_barn',
                   opacity: 0,
               },
               {
                   layer: '1875_house',
                   opacity: 0,
               },
               {
                   layer: '1875_depot',
                   opacity: 0,
               },
               {
                   layer: 'depot2',
                   opacity: 0,
               },
               {
                   layer: '1888_barn',
                   opacity: 0,
               },
               {
                   layer: '1888_house1',
                   opacity: 0,
               },
               {
                   layer: '1888_house2',
                   opacity: 0,
               },
               {
                   layer: '1888',
                   opacity: 0,
               },
               {
                   layer: '1922',
                   opacity: 0,
               },
               {
                   layer: '1951',
                   opacity: 0,
               },
               {
                   layer: '1967',
                   opacity: 0,
               },
               {
                   layer: '1901',
                   opacity: 0,
               },
               {
                layer: '1976',
                opacity: 0,
               },
               {
                layer: '1981',
                opacity: 0,
               },
               {
                layer: '1987',
                opacity: 0,
                },
                {
                    layer: '1994',
                    opacity: 0,
                },
                {
                    layer: '2023',
                    opacity: 1,
                },
                {
                    layer: '2024',
                    opacity: 0,
                },
                {
                    layer: 'ch2',
                    opacity: 0,
                },
                {
                    layer: 'ch3',
                    opacity: 0,
                },
                {
                    layer: 'ch9',
                    opacity: 0,
                },
                {
                    layer: 'ch15',
                    opacity: 0,
                }
            ]
        },
         {
            id: 'Chapter 14',
            alignment: 'left',
            hidden: false,
            title: "Fletcher Street Urban Riding Club gifted new stable in the park",
            image: '',
            website: '', 
            description: '<iframe src="https://drive.google.com/file/d/1pMBVU9359srmuA5073mPrl3mzkCnH5Lu/preview" width="100%" height="380xp" allow="autoplay"></iframe>',
            location: {
                center: [-75.19132, 39.97952],
                zoom: 16,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
                    layer: '1875_b',
                    opacity: 0,
                },
                {
                   layer: '1875_barn',
                   opacity: 0,
               },
               {
                   layer: '1875_house',
                   opacity: 0,
               },
               {
                   layer: '1875_depot',
                   opacity: 0,
               },
               {
                   layer: 'depot2',
                   opacity: 0,
               },
               {
                   layer: '1888_barn',
                   opacity: 0,
               },
               {
                   layer: '1888_house1',
                   opacity: 0,
               },
               {
                   layer: '1888_house2',
                   opacity: 0,
               },
               {
                   layer: '1888',
                   opacity: 0,
               },
               {
                   layer: '1922',
                   opacity: 0,
               },
               {
                   layer: '1951',
                   opacity: 0,
               },
               {
                   layer: '1967',
                   opacity: 0,
               },
               {
                   layer: '1901',
                   opacity: 0,
               },
               {
                layer: '1976',
                opacity: 0,
               },
               {
                layer: '1981',
                opacity: 0,
               },
               {
                layer: '1987',
                opacity: 0,
                },
                {
                    layer: '1994',
                    opacity: 0,
                },
                {
                    layer: '2023',
                    opacity: 0,
                },
                {
                    layer: '2024',
                    opacity: 1,
                },
                {
                    layer: 'ch2',
                    opacity: 0,
                },
                {
                    layer: 'ch3',
                    opacity: 0,
                },
                {
                    layer: 'ch9',
                    opacity: 0,
                },
                {
                    layer: 'ch15',
                    opacity: 1,
                }
            ]
        },
         {
            id: 'Chapter 15',
            alignment: 'center',
            hidden: false,
            title: "Ride out to Fletcher family graves, November 2024",
            image: '',
            website: '', 
            description: '<iframe src="https://drive.google.com/file/d/1yzBQxLucM1uukhTxUfsDhNzgx4GhzTtY/preview" width="100%" height="420" allow="autoplay"></iframe>',
            location: {
                center: [-75.18829, 39.99891],
                zoom: 17.75,
                pitch: 0,
                bearing: 0,
                speed: 0.7
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
