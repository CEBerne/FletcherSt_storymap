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
            alignment: 'intro',
            hidden: false,
            //title: 'Introduction',
            image: '',
            caption: '',
            //website: '<a href="https://temple.maps.arcgis.com/apps/MapSeries/index.html?appid=9b76db43c88946cfa92d269463ac26dd" target="https://temple.maps.arcgis.com/apps/MapSeries/index.html?appid=9b76db43c88946cfa92d269463ac26dd">Historical map</a>',
            //author: 'Felipe Valdez',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em><br></span><img src="/images/legend1.png" style="display: block; margin-top: 10px; width: 100%; max-width: 200px;">',
            description: 'Horses have always been part of Philadelphia. Their presence in this city is as iconic as the Liberty Bell and Independence Hall. Communities of black horsemen and women are so ingrained into the cultural fabric of Philadelphia, it is not uncommon to see them riding through the streets at any given time. This story map traces the historical legacy of one street where horse stables have made an indelible impact on the social and emotional bonds strengthening North Philadelphia. Our hope is that readers understand the exceptionality of their story and help us provide support and resources for their continued preservation. <br><br> <iframe src="https://drive.google.com/file/d/1ZDQ-IbiZWFvSlvCap_W_-WWabdswXXVx/preview" width="95%" height="600px" allow="autoplay"></iframe>',
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
            description: 'In the 19th Century, horses powered urban public transportation. In Philadelphia, horses pulled busses and canal boats for years before the Horse-Drawn Streetcar took over. Horse-drawn transit was popular all along the eastern United States, as historian Ann Greene attests, “anyone traveling by railroad from Washington, D.C. to New York city in 1860 used horses on every stage of their trip" (2008, p. 43). By 1857, horses were pulling faster, more sophisticated urban streetcars for Philadelphians and New Yorkers due to the inlaid tracks. Streetcar fare cost one nickel, and citizens could access Center City from nearly every corner of the quickly growing urban enclave (McShane & Tarr, 2007). Horse stables proliferated neighborhoods, but few had Horse Car Depots like the one pictured here. One of two depots listed on city maps in 1875, the Ridge Avenue Line took passengers from Fairmount Park into central Philadelphia. This depot, as well as the Ridge Ave. line itself, continued until 1898, when electricity allowed for the trolley system still used in Philadelphia today.',
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
            description: 'Not many people live to see a street named after them. Such was case for Joshua Stroud Fletcher (1813-1887), patriarch of the Fletcher family, for whom the infamous street was named in 1867. Politically active, he helped organize the Native American party while co-editing The Philadelphia Sun (or Daily Sun), a Native American newspaper that ran from 1841 until 1857. Although the land upon which their house stood was purchased by his wife, Sarah A. Fletcher, in 1850, Joshua Sr. was said to have built “a magnificent mansion” on the 2800 block of W Fletcher Street, which the family inhabited by 1880. Joshua Sr. was also a “coach trimmer”; thus, before the days of the horse-drawn streetcar, he designed and built the interior of horse-drawn carriages. In his obituary, it states Joshua Sr. “leaves a large estate, and his wife and several children survive him”. Two of his sons, Joshua Jr. and Lansing, were union calvary soldiers in the Civil War. Joshua Jr. is pictured here, between his parents, in his well decorated soldier uniform. When Joshua Jr. passed in 1899, he left 1 horse, 2 harnesses and 3 carriages to his mother in his will. He also left property on Fletcher Street to his mother and sisters (should they outlive her). Sarah’s youngest daughter, Ella, passed away in 1929.',
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
            description: 'This two-story red brick house, located at 2613 W Fletcher Street, appeared on fire insurance maps as of 1888. It currently sits against property owned by the Fletcher Street Urban Riding Club (2607-11 W Fletcher St). In 1923, when North Philadelphia was filled with horse stables, Horace Lederman purchased the deed to this residence. A Jewish “teamster”, Horace and his family remained on the street while it was being red lined in the 1930s. Charlie, an octogenarian black resident of Philadelphia, remembers growing up under Horace’s care: learning to ride his first horse on Fletcher Street in the 1940s. Despite Jim Crow laws and the Civil Rights era, Mr. Lederman continued to share his horses with local children, regardless of any racial tension that existed in the country at that time. It is partially due to Horace’s legacy, and his insistence on keeping stables on the block throughout the mid-20th century, that we still see horse stables on the street today.',
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
            description: 'Sarah A. Fletcher was a landowner, mother of eight children (four of whom she out-lived), and community member of Strawberry Mansion. She passed away in 1901at the age of eighty-six and is buried alongside her husband and children at Laurel Hill East Cemetery. In 1902, her estate was sold. Fire insurance maps tell us that by 1910, the Fletcher house was replaced by a wagon factory, then an apron factory, and finally turned into a garage. If you visit 2813 W Fletcher Street today, you will see a vacant lot. However, without the influence of Sarah’s landownership and subsequent horse stables on her property, the continuation of horse ownership on that street may never have begun at all.',
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
            description: "According to this 1922 Bromley fire insurance map, horse stables existed on every block on and around Fletcher Street during the Roaring Twenties. Based on the map’s key, the yellow squares and rectangles with an “X” indicate wooden horse stables. Although the automobile was in operation at this time, this map shows that horses still served as primary drivers for daily operations in the city. Both black-and-white photos above were taken from books on historic Philadelphia. Both images depict black men guiding horses to either haul sanitation equipment or ferry dayworkers to their jobs during The Great Depression. Whatever their purpose, horses were utilized for various tasks in the early part of the 20th century.",
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
            title: "Horace's horse gets 'Rambunctious'",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Phila_Inquirer_1945_article.jpg',
            website: '', 
            description: "On July 16th, 1945, the Philadelphia Inquirer published an article about a pinto pony who escaped Horace Lederman's stable at 2613 W Fletcher Street, causing a three-block chase. This 1947 Sanborn map shows the Lederman house as an orange rectangle and the stable behind his house in pink (objects from historical map are georeferenced onto a current Google map of the street). The barn to the right (in green), located at 2603 W Fletcher St, was labeled on the 1947 map as a furniture warehouse, an unusual turn from its otherwise common purpose as a horse stable. This map from 1947 shows that even during times when the still-standing red brick barn at 2603 was not used to house horses, there was still a horse stable on the street, albeit next-door.",
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
            image: 'The 1950s and 1960s were filled with transition for cities all across America. In Philadelphia, this slider map illustrates the changes in building use on the 2600 block of West Fletcher Street. The 1951 Sanborn map on the left depicts a horse stable (in pink) behind the Lederman house (located at 2613 W Fletcher St) while the barn at 2603 was used for storage (in green). Conversely, the 1967 Sanborn map on the right shows the Lederman’s horse stable converted for storage (in green) while the red brick barn at 2603 was returned to “horse stable” status (in red). There is a phrase on Fletcher Street that is used frequently on the block. “Horses have always been here”. What fire insurance maps prove, is that since the Civil War through present day, at least one horse stable remained active on Fletcher Street, despite the many changes of land or building use that occurred over the years.',
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
            description: '<iframe src="https://drive.google.com/file/d/1PN1bCly8mc9l7iVBBbrGnT9-_sUGgKcL/preview" width="100%" height="420" allow="autoplay"></iframe>',
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
