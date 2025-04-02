var config = {
    style: './map/openstreetmap.json',
    showMarkers: false,
    markerColor: '#a41e35',
    inset: false, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false,
    useCustomLayers: false,
    bookmarks: false,
    chapterReturn: false,
    auto: false,
    title: "The Evolution of Fletcher Street's Horse Stables",
    //logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Temple_University_Logo.svg/320px-Temple_University_Logo.svg.png",
    subtitle: "A Legacy of Philadelphia's Black Riders: Past and Present",
    byline: 'By Courtney Berne & Felipe Valdez',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
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
                },
                {
                    layer: 'red_barn',
                    opacity: 0,
                },
                {
                    layer: 'mural',
                    opacity: 0.85,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'intro',
            alignment: 'intro',
            hidden: false,
            title: 'Background',
            image: '',
            caption: '',
            //website: '<a href="https://temple.maps.arcgis.com/apps/MapSeries/index.html?appid=9b76db43c88946cfa92d269463ac26dd" target="https://temple.maps.arcgis.com/apps/MapSeries/index.html?appid=9b76db43c88946cfa92d269463ac26dd">Historical map</a>',
            //author: 'Felipe Valdez',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em><br></span><img src="/images/legend1.png" style="display: block; margin-top: 10px; width: 100%; max-width: 200px;">',
            description: 'Horses have always been part of Philadelphia. Their presence in this city is as iconic as the Liberty Bell and Brotherly Love. Communities of Black horsemen and women are so ingrained into the cultural fabric of Philadelphia, it is not uncommon to see them riding through the streets at any given time. This story map traces the historical legacy of one street where horse stables have made an indelible impact on the social and emotional bonds strengthening North Philadelphia. Our hope is that readers understand the exceptionality of these Black cowboys and help us provide support and resources for their continued preservation. This video was taken on Election Day, November 5, 2024. The horses and their riders were in North Philadelphia, traveling to a polling place to help get out the vote. <br><br> <iframe src="https://drive.google.com/file/d/1ZDQ-IbiZWFvSlvCap_W_-WWabdswXXVx/preview" width="95%" height="600px" allow="autoplay"></iframe>',
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
            onChapterEnter: [{
                layer: 'mural',
                opacity: 0,
            }],
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
                },
                {
                    layer: 'red_barn',
                    opacity: 0,
                }
            ]
        }, 
         {
            id: 'Chapter 1',
            alignment: 'right',
            hidden: false,
            title: "Philadelphia's Public Transportation: The Horse-drawn Streetcar (1858-1897)",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Horse_Depot_Map_1875.jpg',
            caption: 'Horse-drawn Streetcar map of 1875 (Courtesy of the Free Library of Philadelphia, Map Collection)',
            //website: '<a href="https://temple.maps.arcgis.com/apps/MapSeries/index.html?appid=9b76db43c88946cfa92d269463ac26dd" target="https://temple.maps.arcgis.com/apps/MapSeries/index.html?appid=9b76db43c88946cfa92d269463ac26dd">Historical map</a>',
            //author: 'Felipe Valdez',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em><br></span><img src="/images/legend1.png" style="display: block; margin-top: 10px; width: 100%; max-width: 200px;">',
            description: 'In the 19th Century, horses powered urban public transportation. In Philadelphia, horses pulled buses and canal boats for years before the horse-drawn streetcar took over. Horse-drawn transit was popular all along the eastern United States, as historian Ann Greene attests, “anyone traveling by railroad from Washington, D.C. to New York city in 1860 used horses on every stage of their trip" (2008, p. 43). The red rectangle over "North Penn" in the above map indicates where the current Fletcher Street Urban Riding Club stables sit.',
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
            },
            {
                layer: 'red_barn',
                opacity: 0,
            }
        ]
        },
        {
            id: 'Chapter 2',
            alignment: 'left',
            hidden: false,
            title: "Philadelphia's Public Transportation: The Horse-Drawn Streetcar (1858-1897)",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Horse_Drawn_Streetcar_image.jpeg',
            caption: '<a href="https://philadelphiaencyclopedia.org/essays/streetcars/" target="https://philadelphiaencyclopedia.org/essays/streetcars/">Photo credit</a>',
            //website: '<a href="https://philadelphiaencyclopedia.org/essays/streetcars/" target="https://philadelphiaencyclopedia.org/essays/streetcars/">Photo credit</a>',
            //author: 'Felipe Valdez',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em><br></span><img src="/images/legend1.png" style="display: block; margin-top: 10px; width: 100%; max-width: 200px;">',
            description: 'By 1858, horses were pulling faster, more sophisticated urban streetcars for Philadelphians due to the inlaid tracks. Streetcar fare cost one nickel, and citizens could access Center City from nearly every corner of the quickly growing metropolitan area (McShane & Tarr, 2007). Horse stables proliferated neighborhoods, but few had horse car depots like the one pictured here. One of two depots shown on city maps in 1875, the Ridge Avenue Line took passengers from Fairmount Park into downtown. This depot, as well as the Ridge Ave line itself, continued until 1897, when electricity powered the trolley system still in use today. See below for Horse Car Depot (outlined in yellow on the map) in detail.<br><br><img src="https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/1883_Hexamer_Depot_in_detail.jpg"><br><br><a style="font-size:19.5px; display:block; text-align:center; font-style:italic;" href="https://libwww.freelibrary.org/digital/item/13913/" target="_blank">Photo credit</a>',
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
            },
            {
                layer: 'red_barn',
                opacity: 0,
            }
        ]
        },
        {
            id: 'Chapter 3',
            alignment: 'left',
            hidden: false,
            title: "The Fletcher Family (1850-1901):",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Fletcher_family_portraits.jpg',
            //legend: '<span style="font-size: 0.85em;"><em>Legend content</em><br></span><img src="/images/legend1.png" style="display: block; margin-top: 10px; width: 100%; max-width: 200px;">',
            description: 'Not many people live to see a street named after them. This was not the case for Joshua Stroud Fletcher (1813-1887), patriarch of the Fletcher family, for whom the infamous street was named in 1867. Politically active, he helped organize The American Party while co-editing The Philadelphia Sun, a newspaper that ran from 1841 until 1857. Although the land upon which their house stood was purchased by his wife, Sarah A. Fletcher, in 1850, Joshua Sr. was said to have built “a magnificent mansion” on the 2800 block of W Fletcher Street, which the family inhabited by 1880. Joshua Sr. was also a “coach trimmer;” thus, before the days of the horse-drawn streetcar, he designed and built the interior of horse-drawn carriages.<br><br>In his obituary, it states Joshua Sr. “leaves a large estate, and his wife and several children survive him.” Two of his sons, Joshua Jr. and Lansing, were union calvary soldiers in the Civil War. Joshua Jr. is pictured above, between his parents, in his well decorated soldier uniform. When Joshua Jr. passed in 1899, he left 1 horse, 2 harnesses and 3 carriages to his mother in his will. He also left property on Fletcher Street to his mother and sisters, should they outlive her. Sarah’s youngest daughter, Ella, passed away in 1929.',
            location: {
                center: [-75.17919, 39.99034],
                zoom: 17.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
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
            },
            {
                layer: 'red_barn',
                opacity: 0,
            }
           ]
        },
        {
            id: 'Chapter 4',
            alignment: 'left',
            hidden: false,
            title: "(1888) 2613 W Fletcher Street appears on maps",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Just_Horaces_house.jpg', 
            description: 'This two-story red brick house, located at 2613 W Fletcher Street, appeared on fire insurance maps as of 1888. It currently sits against property owned by the Fletcher Street Urban Riding Club (2607-11 W Fletcher St.). In 1923, when North Philadelphia was filled with horse stables, Horace Lederman purchased the deed to this residence. A Jewish teamster, Horace, and his family remained on the street while it was being redlined in the 1930s. Charlie, a Black octogenarian, remembers growing up under Horace’s care: learning to ride his first horse on Fletcher Street in the 1940s. Despite Jim Crow laws and the struggle for Civil Rights, Mr. Lederman continued to lend his horses to local children, regardless of racial tension that existed in the city at that time. It is partially due to Horace’s legacy, and the tradition of keeping stables on the block throughout the mid-20th century, that horse stables still exist on the street today.',
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
                },
                {
                    layer: 'red_barn',
                    opacity: 0,
                }
            ]
        }, 
        {
            id: 'Chapter 5',
            alignment: 'left',
            hidden: false,
            title: "Sarah Fletcher's passing (1901)",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Fletcher_graves.jpg',
            website: '', 
            description: 'Sarah A. Fletcher was a landowner, mother of eight children, four of whom she outlived, and active community benefactor of Strawberry Mansion. She passed away in 1901 at the age of eighty-six and is buried alongside her husband and children at Laurel Hill East Cemetery. In 1902, her estate was sold. Fire insurance maps tell us that by 1910, the Fletcher house was replaced by a wagon factory, then an apron factory, and finally turned into a garage. If you visit 2813 W Fletcher Street today, you will see a vacant lot. However, without Sarah’s landownership and subsequent horse stables on the property, the continuation of horse ownership on that street may never have begun. (The colors on the map to the right indicate the following: brown square = The Fletcher house; orange rectangle = the house later owned by Horace Lederman; pink rectangle = horse stable on Horace’s property; red rectangle = horse stable).',
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
                },
                {
                    layer: 'red_barn',
                    opacity: 0,
                }
            ]
        },
          {
            id: 'Chapter 6',
            alignment: 'left',
            hidden: false,
            title: "The 1920s: Stables on Every Block!",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/1920s_1930s_horses_in_Philly.jpg',
            website: '', 
            description: "According to this 1922 Bromley fire insurance map, horse stables existed on every block on and around Fletcher Street during the Roaring Twenties. Based on the map’s key, the yellow squares and rectangles with an “X” indicate wooden horse stables. Although the automobile was in operation at this time, this map shows that horses still served as primary drivers for daily operations in the city. Both black-and-white photos above were taken from books on historic Philadelphia. These images depict Black men guiding horses to either haul sanitation equipment or ferry dayworkers to their jobs during The Great Depression. Whatever their purpose, horses were utilized for various tasks in the early part of the 20th century.",
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
                },
                {
                    layer: 'red_barn',
                    opacity: 0,
                }
            ]
        },
          {
            id: 'Chapter 7',
            alignment: 'left',
            hidden: false,
            title: "1945: Horace's horse gets 'Rambunctious'",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Phila_Inquirer_1945_article.jpg',
            website: '', 
            description: "On July 16th, 1945, the Philadelphia Inquirer published an article about a pinto pony who escaped Horace Lederman's stable at 2613 W Fletcher Street, causing a three-block chase. This 1947 Sanborn map shows the Lederman house as an orange rectangle and the stable behind his house in pink. Historic buildings are georeferenced from archival maps onto a current Google base map to ensure location accuracy. The barn to the right (in green), located at 2603 W Fletcher St, was labeled on the 1947 map as a furniture warehouse, an unusual turn from its otherwise common purpose as a horse stable. This map from 1947 illustrates that even during times when the still-standing red brick barn at 2603 was not used to house horses, there was still a horse stable on the street, albeit next door.",
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
            id: 'Chapter 8',
            alignment: 'center',
            hidden: false,
            title: "Mid-Century Changes (1951-1967):",
            image: '',
            website: '', 
            description: 'The 1950s and 1960s were rife with transition in cities across America. In Philadelphia, this slider map illustrates the changes in building use on the 2600 block of W Fletcher Street. The 1951 Sanborn map on the bottom left depicts a horse stable (in pink) behind the Lederman house (2613 W Fletcher St) while the barn at 2603 was used for storage (in green). Conversely, the 1967 Sanborn map on the bottom right shows the Lederman’s horse stable as storage (in green) while the red brick barn at 2603 was returned to “horse stable” status (in red). On Fletcher Street, there is a phrase often used: “Horses have always been here.” Fire insurance maps prove that at least since the Civil War, a minimum of one horse stable has remained active on Fletcher Street despite land use changes.<br><br> <iframe width="100%" height="800px" src="https://felipevaldez.com/slide1951_1967/" frameborder="0" scrolling="no"></iframe>',
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
                    opacity: 1,
                },
                {
                    layer: 'ch9',
                    opacity: 0,
                },
                {
                    layer: 'ch15',
                    opacity: 0,
                },
                {
                    layer: 'red_barn',
                    opacity: 0,
                }
            ]
        },
          {
            id: 'Chapter 9',
            alignment: 'left',
            hidden: false,
            title: "Horace Lederman passes away in 1975",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Horace_obits_cropped.png',
            website: '', 
            description: "As mentioned, Horace Lederman owned the two-story brick house (pictured on the map in orange) that still stands at 2613 W Fletcher Street for nearly sixty years. In the 1940s he taught Charlie, now an elder on Fletcher Street, how to ride horses as a young boy. Not much remains in the public record about Horace. The quote on the following slide is from a 2022 interview with Charlie.",
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
            onChapterExit: []
        },
          {
            id: 'Chapter 9.5',
            alignment: 'left',
            hidden: false,
            title: "Charlie",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Charlie_bnw.png',
            caption: 'Photo credit: <a href="https://www.instagram.com/gerrityphoto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=" target="_blank">Rick Gerrity</a>',
            website: '', 
            description: "“It was really nice down here. And the house over there (2613 W Fletcher St), I was damn near raised in there [...] The white man owned it. Horace Lederman. And he had a wife and two kids, and I used to spend the nights there. He used to go to the horse sales. ‘You want to go?’ I said ‘Yeah’. Horace Ledermen rented horses out every day, for the people, whoever wanted to go junkin' or whatever. He'd charged 'em so much a day for the horse, four dollars a day [...] and they took the horses out. When they get done, they bring 'em back [...] had a man in there named Sam. He used to take care of the horses for Horace Lederman, and it was good. That house was in better shape than it is now. He been dead over [...] twenty something years. Because the last time I saw him was in '74. But I went over his house in Jersey. He was glad to see me. He's a white man. He was glad to see me, he kissed me. But I loved it. I loved it. He loved at me too” (Interview, March 4, 2022).",
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
                    layer: 'red_barn',
                    opacity: 1,
                },
                {
                    layer: 'ch3',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'Chapter 10',
            alignment: 'left',
            hidden: false,
            title: "The Decline of Strawberry Mansion (1970s)",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Strawberry_Mansion_1972.jpg',
            website: '', 
            description: 'In 1937, Strawberry Mansion was redlined by the Home Owner’s Loan Corporation, who described the neighborhood as having a "Negro concentration." Redlining is the act of denying residents access to home loans and mortgages based on perceived financial risk; as a result, white residents left the area. Shortly thereafter, the Black population “grew 50 percent by 1960, followed by a rapid decline over the subsequent 20 years to a lower level than any time during the previous five decades […] thus indicates an anomalous situation of sudden, severe crowding followed by drastic population loss” (Bartelt & Leon, 1986). This led to a proliferation of abandoned lots and municipal neglect, as shown in the photo above.<br><br>This building, at 2509 Sedgley Ave (Owens, 1972), was around the corner from Fletcher Street. In the 1970s, the horse stable at 2603 W Fletcher Street (red square circled in purple on the map) was owned by Bessie Hellner, according to property deeds from City Hall’s Department of Records. In a recent news article by WHYY about the black cowboy, the author mentions another Black-run stable from the early 1980s referred to as ‘The Hole in the Wall’. Created by Black horsemen who made a hole in the wall of a former warehouse to build a stable, it was located at Cecil B. Moore Ave and W Glenwood Ave, where Ellis Ferrell also boarded horses (Crimmins, 2024). This need to carve out stable space is what led many Black riders to seek refuge in Philadelphia’s Park system, including Fairmount and Northeast Philly’s Pennypack Park.',
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
                 },
                 {
                    layer: 'red_barn',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'Chapter 11',
            alignment: 'left',
            hidden: false,
            title: "Stables in Pennypack Park (the early 1980s)",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Pennypack_park_stable.png',
            website: '', 
            description: 'From 1979-1982, the Boulevard Stablemates operated out of a former Mounted Police stable, offering horseback riding lessons in the woods of Pennypack Park. Ellis Ferrell was the only black member of this organization, which made the news for helping disabled children through equine therapy. The stables stood empty for years before the club proposed their mission to the Fairmount Park Commission, who allowed them to rent the space and open it to the community for humanitarian purposes. Sadly, by 1982, the director of Fairmount Park deemed the stables in a state of such “deterioration” that they decided to close them, forcing the Stablemates to find new homes for their horses. The city also claimed the land where the stable stood was “needed for ground maintenance equipment” (Russ, 1982) as they lacked a secure place to store their lawnmowers.',
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
            id: 'Chapter 12',
            alignment: 'left',
            hidden: false,
            title: "First black female owner of stable on Fletcher Street (1986)",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Bertha_property_deed.jpg',
            website: '', 
            description: "Although this red brick stable appeared on fire insurance maps as early as 1875, the first confirmed Black woman did not purchase it until 1986. A resident of South Philadelphia, Bertha Felder still owns this stable today, despite attempts to sell it after the Netflix film “Concrete Cowboy” made it marketable. Originally listed for $350,000, the price steadily declined as buyers realized the amount of maintenance required for a building still in its original condition. Efforts to secure preservation status for 2603 W Fletcher Street remain ongoing by local supporters. The façade clearly conveys its past with original red brick and large metal hooks for hay bale intake. It would be a historic loss for the street, and the black riding community of Philadelphia as a whole, if this stable was ever torn down.",
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
            id: 'Chapter 13',
            alignment: 'left',
            hidden: false,
            title: "El Dog relocates horses to Brewerytown (the 1990s)",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/El_Dog_in_Brewerytown.jpeg',
            website: '', 
            description: "From the late 1980's through the early 2000's, Ellis moved his horses into an abandoned paper warehouse in what was pre-gentrified Brewerytown. The map on the right shows the location of his former stable (pink rectangle), where El Dog headed the Western Wranglers. This photo was taken on a freezing January afternoon in 2025. Ellis is facing the site of his former stables: now filled with condominiums behind secured fencing. Flooded with memories, El Dog recalled he wasn’t the only Black cowboy on the block.<br><br>An article published in the Philadelphia Inquirer Magazine in July of 1993 mentions ‘The White House’, a stable that stood in a repurposed auto-body shop, run by “Bumpsey” Bullock, just down the street. In 2004, the city informed Ellis they were seizing the property via Eminent Domain. If you visit the neighborhood today, you can spot a mural at Master St & N. 31st by artist Phillip Adams titled “Industrious Light: Brewerytown” (2017) that depicts Black men and horses, albeit in the context of the brewing industry.",
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
            id: 'Chapter 14',
            alignment: 'right',
            hidden: false,
            title: "Fletcher Street in the late 90's",
            image: 'https://raw.githubusercontent.com/CEBerne/Timeline-Images/main/Chapter_12.png',
            website: '', 
            description: 'On the left, an article published by the Philadelphia Inquirer profiles the horse stables at 2607-11 W Fletcher Street. At that time, they were run by Mr. Wayne Harris, already in his mid-60s. Mr. Harris was on the block roughly between the mid-90s into the mid-2000s. The author mentions the other animals living on the lot did not require city licenses, which according to then spokesperson for the Department of Public Health, Jeff Moran, is left over from “the days when horses were a primary form of transportation and Philadelphia County was much more rural” (qtd by Toosi, 1999). Even today, animals of all sorts live on Fletcher Street, as if no time has passed. On the right is an image from Ron Tarver’s book “The Long Ride Home: Black Cowboys in America” (2024). Mr. Tarver teaches photography at Swarthmore College and worked for National Geographic Magazine. His father was a Black cowboy in Philadelphia. Hence, many of the images in his book feature black horsemen from the 1990s. To see more of his incredible work, visit: <a href="https://www.rontarverphotographs.net" target="_blank">www.rontarverphotographs.net</a>.',
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
            id: 'Chapter 15',
            alignment: 'right',
            hidden: false,
            title: "Fletcher Street in the early 21st Century",
            image: '',
            website: '', 
            description: 'The early 2000s saw rapid change for Fletcher Street’s horse community. After the Brewerytown stables were demolished in 2004, Ellis decided to formally start his non-profit, the Fletcher Street Urban Riding Club. Moving his horses to the already existing stables on the block, he transitioned into a leadership role for the club. Soon after, the media began paying attention. Starting with the cover story on LIFE magazine (April 2005), followed by the publication of a coffee table photo book by Martha Camarillo (2006) simply titled “Fletcher Street”, the block gained reputation as the center of Black cowboy culture within the city. With increased recognition, dedicated community members began making changes to the street. In 2014, the club acquired land title for 2607-11 W Fletcher Street, thanks to a generous donation from a local real estate agent. Once ownership was confirmed, clean-up of the lot began. These images, taken from cyclomedia.phila.gov, illustrate the gradual transformation from abandoned lot to grass-roots establishment.<br><br><iframe src="https://drive.google.com/file/d/1PN1bCly8mc9l7iVBBbrGnT9-_sUGgKcL/preview" width="100%" height="420" allow="autoplay"></iframe>',
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
            id: 'Chapter 16',
            alignment: 'right',
            hidden: false,
            title: "(2020) Fletcher Street loses grazing pasture (click to change slide)",
            image: '',
            website: '', 
            description: '<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR8VvjWNHK7EUW1JHXGCXbqMWddtKI9-codk0aIQeQlp5UW1T462Rzrxc_JYiSaAe7YR3kkWQ5HosnX/embed?start=false&loop=false&delayms=5000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe><br><br>Even before the Netflix movie ‘Concrete Cowboy’ filmed on Fletcher Street in the summer of 2019, the vacant land used as horse pasture across the street was prime real estate. In 2012, the Philadelphia Redevelopment Authority purchased the empty lot at 2610-16 W Fletcher Street. Five years later, PRA transferred the land deed to the Philadelphia Land Bank. By 2018, the Philadelphia Housing Authority applied to acquire the pasture. Meanwhile, scenes from the movie were shot in the barn at 2603 W Fletcher Street, and in the open field across the street.<br><br>The men who owned horses on Fletcher St were not consulted about the pending loss of grazing land, which they had been using for decades. Instead, one month before ‘Concrete Cowboy’ opened at the Toronto Film Festival (August 2020), zoning permits indicating forthcoming construction were posted on the chain linked fence around the pasture. Darrell Clarke, then City Council President, eventually found another location for the Fletcher Street horses, albeit in Fairmount Park. Though this relocation is beneficial for the horses, it separates neighborhood children from easily accessing the stables. These slides document the disappearance of Fletcher Street’s pasture, which (much like El Dog’s space in Brewerytown) was converted into housing.',
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
            id: 'Chapter 17',
            alignment: 'left',
            hidden: false,
            title: "Fletcher Street Urban Riding Club granted new stable in the park (2023)",
            image: '',
            website: '', 
            description: '<iframe src="https://drive.google.com/file/d/1pMBVU9359srmuA5073mPrl3mzkCnH5Lu/preview" width="100%" height="380xp" allow="autoplay"></iframe><br><br>Losing the pasture was a massive blow for both humans and horses on Fletcher Street. Against the backdrop of the pandemic and the summer of Black Lives Matter, men and equines soldiered on. After lengthy negotiations between the Fletcher Street Urban Riding Club and the city, Councilman Darrell Clarke delivered on his promise to provide new grazing land for the organization. The Cliffs, a new stable with plenty of space in Fairmount Park, was built and gifted to the club on November 21st, 2023. As depicted on the map, the new barn is located just on the other side of the railroad tracks at 33rd Street, where Ellis used to run the Western Wranglers. Since the Fletcher Street Urban Riding Club owns the 2607-11 lot on W Fletcher Street, they still have stables there. The Cliffs, however, are on lease from the city. The club is still negotiating an official move with city administrators.',
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
            id: 'Chapter 18',
            alignment: 'center',
            hidden: false,
            title: "Ride out to Fletcher family graves, November 2024",
            image: '',
            website: '', 
            description: '<iframe src="https://drive.google.com/file/d/1yzBQxLucM1uukhTxUfsDhNzgx4GhzTtY/preview" width="100%" height="420" allow="autoplay"></iframe><br><br>On a gorgeous day in early November, members of the Fletcher Street Urban Riding Club made a special visit to pay tribute to the Fletcher family grave site. Previously unaware that their namesake was resting nearby, they rode to pay homage to the family who may be the primary reason horse culture has remained omnipresent on the block for nearly two-hundred years. Please enjoy the above video to experience this full-circle moment.',
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
        },
        {
            id: 'Chapter 19',
            alignment: 'center',
            hidden: false,
            title: "Special Thanks!",
            image: '',
            website: '', 
            description: 'None of this would have been possible without the talent and endless patience of <a href="https://felipevaldez.com" target="_blank">Felipe Valdez</a>, GIS Specialist at Temple University’s Library. Thank you for being  my co-pilot. Additional thanks to: Alex Wermer-Colan, Michael Kuetemeyer, Jasmine Clark,  Jessica Braum, Max Georg Gaida, Sreedhar Nemmani, Victoria Sarmiento Giraldo, the entire LCDSS staff, Ann Greene, Jacob Shell, El Dog Ferrell, Darrin Ferrell, Choo-Choo Charlie, Ron Tarver, Rick Gerrity, Jimmie Hooks, Bertha Felder, all the <a href="https://fsurc.com/" target="._blank">FSURC</a> board members, Layla A. Jones, Darrell L. Clarke, Horace Lederman’s family, the Fletcher family estate, City Archive staff members Theresa Condon & Josh Blay, Free Library Map Collection archivists Megan MacCall & Grace Diliberto, Fairmount Park Historic Archivist Theresa Stuhlman, Program Coordinator Kat Bleiweiss at Laurel Hill East Cemetery, archival librarians at The Library Company, archival librarians at Temple’s Urban Archives, Department of Records staff at City Hall, and to Christopher for his support.<br><br>I also want to acknowledge the other black horsemen and women in Philadelphia who continue to uphold the legacy of black stables across the city. My hope is that this project expands to include your contributions to the story of horses in Philadelphia and beyond.',
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
            onChapterExit: []
        },
        {
            id: 'Chapter 20',
            alignment: 'center',
            hidden: false,
            title: 'Works Cited',
            //image: '',
            //website: 'For the list of works cited click <a href="https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1jXwcnmFJIGt1PltnYoArFbpt8OHOEjZGm5dJPonbHew%2Fedit%3Fusp%3Dsharing&data=05%7C02%7Cfelipe.valdez%40temple.edu%7C023c932eafd7443d839308dd66543764%7C716e81efb52244738e3110bd02ccf6e5%7C0%7C0%7C638779234061169464%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=L0RVnz6ZNCYO2MWHNsH5cZA10yda2DYnGp9EapvhY7U%3D&reserved=0" target="_blank">here</a>', 
            description: '<p style="text-align:center;">Please click <a href="https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.google.com%2Fdocument%2Fd%2F1jXwcnmFJIGt1PltnYoArFbpt8OHOEjZGm5dJPonbHew%2Fedit%3Fusp%3Dsharing&data=05%7C02%7Cfelipe.valdez%40temple.edu%7C023c932eafd7443d839308dd66543764%7C716e81efb52244738e3110bd02ccf6e5%7C0%7C0%7C638779234061169464%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=L0RVnz6ZNCYO2MWHNsH5cZA10yda2DYnGp9EapvhY7U%3D&reserved=0" target="_blank">HERE</a></p>',
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
            onChapterExit: []
        }
    ]
};
