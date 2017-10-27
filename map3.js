var ramp=d3.scale.linear().domain([0,250,33000]).range(["lightblue","blue", "darkblue"]);

var basic_choropleth = new Datamap({
  element: document.getElementById("svg_map3"),
    scope: 'world',
    // Zoom in on Africa
    //setProjection: function(element) {
      //var projection = d3.geo.equirectangular()
        //.center([23, -3])
        //.rotate([4.4, 0])
        //.scale(400)
        //.translate([element.offsetWidth / 2, element.offsetHeight / 2]);
      //var path = d3.geo.path()
        //.projection(projection);
      //return {path: path, projection: projection};
    //},
  //element: document.getElementById("svg_map"),
  projection: 'mercator',
  fills: {
    defaultFill: "#CCCCCC",
    AFG: ramp(32756),
    AGO: ramp(1388),
    ALB: ramp(7),
    ARE: ramp(1),
    ARG: ramp(0),
    ARM: ramp(16),
    AUS: ramp(6),
    AUT: ramp(1),
    AZE: ramp(8),
    BDI: ramp(1007),
    BEL: ramp(41),
    BEN: ramp(0),
    BFA: ramp(79),
    BGD: ramp(492),
    BGR: ramp(13),
    BHR: ramp(23),
    BHS: ramp(0),
    BIH: ramp(10),
    BLR: ramp(13),
    BLZ: ramp(0),
    BOL: ramp(0),
    BRA: ramp(12),
    BTN: ramp(9),
    BWA: ramp(1),
    CAF: ramp(1378),
    CAN: ramp(8),
    CHE: ramp(14),
    CHL: ramp(3),
    CHN: ramp(829),
    CIV: ramp(214),
    CMR: ramp(2011),
    COD: ramp(3385),
    COG: ramp(168),
    COL: ramp(3056),
    CRI: ramp(1),
    CUB: ramp(1),
    CYP: ramp(0),
    CZE: ramp(2),
    DEU: ramp(43),
    DJI: ramp(5),
    DMA: ramp(1),
    DNK: ramp(3),
    DOM: ramp(0),
    DZA: ramp(4146),
    ECU: ramp(2),
    EGY: ramp(2201),
    ERI: ramp(40),
    ESH: ramp(0),
    ESP: ramp(252),
    EST: ramp(2),
    ETH: ramp(662),
    FIN: ramp(9),
    FJI: ramp(7),
    FRA: ramp(274),
    GBR: ramp(106),
    GEO: ramp(55),
    GHA: ramp(0),
    GIN: ramp(208),
    GMB: ramp(0),
    GNB: ramp(17),
    GNQ: ramp(1),
    GRC: ramp(76),
    GTM: ramp(21),
    GUY: ramp(33),
    HKG: ramp(0),
    HND: ramp(39),
    HRV: ramp(3),
    HTI: ramp(30),
    HUN: ramp(3),
    IDN: ramp(870),
    IND: ramp(9969),
    IRL: ramp(4),
    IRN: ramp(464),
    IRQ: ramp(70436),
    ISL: ramp(0),
    ISR: ramp(971),
    ITA: ramp(5),
    JAM: ramp(0),
    JOR: ramp(112),
    JPN: ramp(19),
    KAZ: ramp(28),
    KEN: ramp(1305),
    KGZ: ramp(10),
    KHM: ramp(23),
    KOR: ramp(0),
    KWT: ramp(38),
    LAO: ramp(14),
    LBN: ramp(746),
    LBR: ramp(18),
    LBY: ramp(2281),
    LKA: ramp(3020),
    LSO: ramp(1),
    LVA: ramp(1),
    MAR: ramp(75),
    MDA: ramp(2),
    MDG: ramp(6),
    MDV: ramp(0),
    MEX: ramp(155),
    MLI: ramp(820),
    MLT: ramp(0),
    MMR: ramp(321),
    MOZ: ramp(141),
    MRT: ramp(39),
    MWI: ramp(1),
    MYS: ramp(14),
    NAM: ramp(38),
    NER: ramp(995),
    NGA: ramp(20359),
    NIC: ramp(7),
    NLD: ramp(10),
    NOR: ramp(78),
    NPL: ramp(1928),
    NZL: ramp(0),
    PAK: ramp(19585),
    PAN: ramp(1),
    PER: ramp(158),
    PHL: ramp(3957),
    PLW: ramp(5),
    PNG: ramp(0),
    POL: ramp(0),
    PRT: ramp(0),
    PRY: ramp(46),
    QAT: ramp(3),
    ROU: ramp(0),
    RUS: ramp(3788),
    RWA: ramp(65),
    SAU: ramp(538),
    SDN: ramp(3302),
    SEN: ramp(115),
    SLB: ramp(4),
    SLE: ramp(89),
    SOM: ramp(7924),
    SRB: ramp(3),
    SUR: ramp(2),
    SVK: ramp(0),
    SVN: ramp(0),
    SWE: ramp(5),
    SWZ: ramp(0),
    SYR: ramp(12610),
    TCD: ramp(843),
    TGO: ramp(0),
    THA: ramp(2294),
    TJK: ramp(43),
    TKM: ramp(3),
    TTO: ramp(0),
    TUN: ramp(299),
    TUR: ramp(2315),
    TWN: ramp(2),
    TZA: ramp(51),
    UGA: ramp(1378),
    UKR: ramp(2214),
    URY: ramp(1),
    USA: ramp(3215),
    UZB: ramp(68),
    VEN: ramp(23),
    VNM: ramp(0),
    VUT: ramp(2),
    YEM: ramp(7946),
    ZAF: ramp(66),
    ZMB: ramp(1),
    ZWE: ramp(18),
    KNA: ramp(2),
    MKD: ramp(48),
    MNE: ramp(48),
    TMP: ramp(9),
    UNK: ramp(83),
    SSD: ramp(2053),
    PSE: ramp(884),
    GAB: ramp(0),
    LTU: ramp(0),
    PRK: ramp(0),

  },
  data: {
    AFG: { fillKey:	"AFG", percentage:	"32,756"},
    AGO: { fillKey:	"AGO", percentage:	"1,388"},
    ALB: { fillKey:	"ALB", percentage:	"7"},
    ARE: { fillKey:	"ARE", percentage:	"1"},
    ARG: { fillKey:	"ARG", percentage:	"0"},
    ARM: { fillKey:	"ARM", percentage:	"16"},
    AUS: { fillKey:	"AUS", percentage:	"6"},
    AUT: { fillKey:	"AUT", percentage:	"1"},
    AZE: { fillKey:	"AZE", percentage:	"8"},
    BDI: { fillKey:	"BDI", percentage:	"1,007"},
    BEL: { fillKey:	"BEL", percentage:	"41"},
    BEN: { fillKey:	"BEN", percentage:	"0"},
    BFA: { fillKey:	"BFA", percentage:	"79"},
    BGD: { fillKey:	"BGD", percentage:	"492"},
    BGR: { fillKey:	"BGR", percentage:	"13"},
    BHR: { fillKey:	"BHR", percentage:	"23"},
    BHS: { fillKey:	"BHS", percentage:	"0"},
    BIH: { fillKey:	"BIH", percentage:	"10"},
    BLR: { fillKey:	"BLR", percentage:	"13"},
    BLZ: { fillKey:	"BLZ", percentage:	"0"},
    BOL: { fillKey:	"BOL", percentage:	"0"},
    BRA: { fillKey:	"BRA", percentage:	"12"},
    BTN: { fillKey:	"BTN", percentage:	"9"},
    BWA: { fillKey:	"BWA", percentage:	"1"},
    CAF: { fillKey:	"CAF", percentage:	"1,378"},
    CAN: { fillKey:	"CAN", percentage:	"8"},
    CHE: { fillKey:	"CHE", percentage:	"14"},
    CHL: { fillKey:	"CHL", percentage:	"3"},
    CHN: { fillKey:	"CHN", percentage:	"829"},
    CIV: { fillKey:	"CIV", percentage:	"214"},
    CMR: { fillKey:	"CMR", percentage:	"2011"},
    COD: { fillKey:	"COD", percentage:	"3385"},
    COG: { fillKey:	"COG", percentage:	"168"},
    COL: { fillKey:	"COL", percentage:	"3,056"},
    CRI: { fillKey:	"CRI", percentage:	"1"},
    CUB: { fillKey:	"CUB", percentage:	"1"},
    CYP: { fillKey:	"CYP", percentage:	"0"},
    CZE: { fillKey:	"CZE", percentage:	"2"},
    DEU: { fillKey:	"DEU", percentage:	"43"},
    DJI: { fillKey:	"DJI", percentage:	"5"},
    DMA: { fillKey:	"DMA", percentage:	"1"},
    DNK: { fillKey:	"DNK", percentage:	"3"},
    DOM: { fillKey:	"DOM", percentage:	"0"},
    DZA: { fillKey:	"DZA", percentage:	"4,146"},
    ECU: { fillKey:	"ECU", percentage:	"2"},
    EGY: { fillKey:	"EGY", percentage:	"2,201"},
    ERI: { fillKey:	"ERI", percentage:	"40"},
    ESH: { fillKey:	"ESH", percentage:	"0"},
    ESP: { fillKey:	"ESP", percentage:	"252"},
    EST: { fillKey:	"EST", percentage:	"2"},
    ETH: { fillKey:	"ETH", percentage:	"662"},
    FIN: { fillKey:	"FIN", percentage:	"9"},
    FJI: { fillKey:	"FJI", percentage:	"7"},
    FRA: { fillKey:	"FRA", percentage:	"274"},
    GBR: { fillKey:	"GBR", percentage:	"106"},
    GEO: { fillKey:	"GEO", percentage:	"55"},
    GHA: { fillKey:	"GHA", percentage:	"0"},
    GIN: { fillKey:	"GIN", percentage:	"208"},
    GMB: { fillKey:	"GMB", percentage:	"0"},
    GNB: { fillKey:	"GNB", percentage:	"17"},
    GNQ: { fillKey:	"GNQ", percentage:	"1"},
    GRC: { fillKey:	"GRC", percentage:	"76"},
    GTM: { fillKey:	"GTM", percentage:	"21"},
    GUY: { fillKey:	"GUY", percentage:	"33"},
    HKG: { fillKey:	"HKG", percentage:	"0"},
    HND: { fillKey:	"HND", percentage:	"39"},
    HRV: { fillKey:	"HRV", percentage:	"3"},
    HTI: { fillKey:	"HTI", percentage:	"30"},
    HUN: { fillKey:	"HUN", percentage:	"3"},
    IDN: { fillKey:	"IDN", percentage:	"870"},
    IND: { fillKey:	"IND", percentage:	"9,969"},
    IRL: { fillKey:	"IRL", percentage:	"4"},
    IRN: { fillKey:	"IRN", percentage:	"464"},
    IRQ: { fillKey:	"IRQ", percentage:	"70,436"},
    ISL: { fillKey:	"ISL", percentage:	"0"},
    ISR: { fillKey:	"ISR", percentage:	"971"},
    ITA: { fillKey:	"ITA", percentage:	"5"},
    JAM: { fillKey:	"JAM", percentage:	"0"},
    JOR: { fillKey:	"JOR", percentage:	"112"},
    JPN: { fillKey:	"JPN", percentage:	"19"},
    KAZ: { fillKey:	"KAZ", percentage:	"28"},
    KEN: { fillKey:	"KEN", percentage:	"1,305"},
    KGZ: { fillKey:	"KGZ", percentage:	"10"},
    KHM: { fillKey:	"KHM", percentage:	"23"},
    KOR: { fillKey:	"KOR", percentage:	"0"},
    KWT: { fillKey:	"KWT", percentage:	"38"},
    LAO: { fillKey:	"LAO", percentage:	"14"},
    LBN: { fillKey:	"LBN", percentage:	"746"},
    LBR: { fillKey:	"LBR", percentage:	"18"},
    LBY: { fillKey:	"LBY", percentage:	"2,281"},
    LKA: { fillKey:	"LKA", percentage:	"3,020"},
    LSO: { fillKey:	"LSO", percentage:	"1"},
    LVA: { fillKey:	"LVA", percentage:	"1"},
    MAR: { fillKey:	"MAR", percentage:	"75"},
    MDA: { fillKey:	"MDA", percentage:	"2"},
    MDG: { fillKey:	"MDG", percentage:	"6"},
    MDV: { fillKey:	"MDV", percentage:	"0"},
    MEX: { fillKey:	"MEX", percentage:	"155"},
    MLI: { fillKey:	"MLI", percentage:	"820"},
    MLT: { fillKey:	"MLT", percentage:	"0"},
    MMR: { fillKey:	"MMR", percentage:	"321"},
    MOZ: { fillKey:	"MOZ", percentage:	"141"},
    MRT: { fillKey:	"MRT", percentage:	"39"},
    MWI: { fillKey:	"MWI", percentage:	"1"},
    MYS: { fillKey:	"MYS", percentage:	"14"},
    NAM: { fillKey:	"NAM", percentage:	"38"},
    NER: { fillKey:	"NER", percentage:	"995"},
    NGA: { fillKey:	"NGA", percentage:	"20,359"},
    NIC: { fillKey:	"NIC", percentage:	"7"},
    NLD: { fillKey:	"NLD", percentage:	"10"},
    NOR: { fillKey:	"NOR", percentage:	"78"},
    NPL: { fillKey:	"NPL", percentage:	"1,928"},
    NZL: { fillKey:	"NZL", percentage:	"0"},
    PAK: { fillKey:	"PAK", percentage:	"19,585"},
    PAN: { fillKey:	"PAN", percentage:	"1"},
    PER: { fillKey:	"PER", percentage:	"158"},
    PHL: { fillKey:	"PHL", percentage:	"3,957"},
    PNG: { fillKey:	"PNG", percentage:	"0"},
    POL: { fillKey:	"POL", percentage:	"0"},
    PRT: { fillKey:	"PRT", percentage:	"0"},
    PRY: { fillKey:	"PRY", percentage:	"46"},
    QAT: { fillKey:	"QAT", percentage:	"3"},
    ROU: { fillKey:	"ROU", percentage:	"0"},
    RUS: { fillKey:	"RUS", percentage:	"3,788"},
    RWA: { fillKey:	"RWA", percentage:	"65"},
    SAU: { fillKey:	"SAU", percentage:	"538"},
    SDN: { fillKey:	"SDN", percentage:	"3302"},
    SEN: { fillKey:	"SEN", percentage:	"115"},
    SLB: { fillKey:	"SLB", percentage:	"4"},
    SLE: { fillKey:	"SLE", percentage:	"89"},
    SOM: { fillKey:	"SOM", percentage:	"7,924"},
    SRB: { fillKey:	"SRB", percentage:	"3"},
    SUR: { fillKey:	"SUR", percentage:	"2"},
    SVK: { fillKey:	"SVK", percentage:	"0"},
    SVN: { fillKey:	"SVN", percentage:	"0"},
    SWE: { fillKey:	"SWE", percentage:	"5"},
    SWZ: { fillKey:	"SWZ", percentage:	"0"},
    SYR: { fillKey:	"SYR", percentage:	"12,610"},
    TCD: { fillKey:	"TCD", percentage:	"843"},
    TGO: { fillKey:	"TGO", percentage:	"0"},
    THA: { fillKey:	"THA", percentage:	"2,294"},
    TJK: { fillKey:	"TJK", percentage:	"43"},
    TKM: { fillKey:	"TKM", percentage:	"3"},
    TTO: { fillKey:	"TTO", percentage:	"0"},
    TUN: { fillKey:	"TUN", percentage:	"299"},
    TUR: { fillKey:	"TUR", percentage:	"2,315"},
    TWN: { fillKey:	"TWN", percentage:	"2"},
    TZA: { fillKey:	"TZA", percentage:	"51"},
    UGA: { fillKey:	"UGA", percentage:	"1,378"},
    UKR: { fillKey:	"UKR", percentage:	"2,214"},
    URY: { fillKey:	"URY", percentage:	"1"},
    USA: { fillKey:	"USA", percentage:	"3,215"},
    UZB: { fillKey:	"UZB", percentage:	"68"},
    VEN: { fillKey:	"VEN", percentage:	"23"},
    VNM: { fillKey:	"VNM", percentage:	"0"},
    VUT: { fillKey:	"VUT", percentage:	"2"},
    YEM: { fillKey:	"YEM", percentage:	"7,946"},
    ZAF: { fillKey:	"ZAF", percentage:	"66"},
    ZMB: { fillKey:	"ZMB", percentage:	"1"},
    ZWE: { fillKey:	"ZWE", percentage:	"18"},
    KNA: { fillKey:	"KNA", percentage:	"2"},
    MKD: { fillKey: "MKD", percentage: "48"},
    MNE: { fillKey: "MNE", percentage: "1"},
    TMP: { fillKey: "TMP", percentage: "0"},
    UNK: { fillKey: "UNK", percentage: "83"},
    SSD: { fillKey: "SSD", percentage: "2,053"},
    PSE: { fillKey: "PSE", percentage: "884"},
    GAB: { fillKey: "GAB", percentage: "0"},
    LTU: { fillKey: "LTU", percentage: "0"},
    PRK: { fillKey: "PRK", percentage: "0"},

    //zoom.bubbles([
     //{name: 'Bubble 1', latitude: 21.32, longitude: -7.32, radius: 45, fillKey: 'gt500'},
     //{name: 'Bubble 2', latitude: 12.32, longitude: 27.32, radius: 25, fillKey: 'eq0'},
     //{name: 'Bubble 3', latitude: 0.32, longitude: 23.32, radius: 35, fillKey: 'lt25'},
     //{name: 'Bubble 4', latitude: -31.32, longitude: 23.32, radius: 55, fillKey: 'eq50'},
    //], {
     //popupTemplate: function(geo, data) {
       //return "<div class='hoverinfo'>Bubble for " + data.name + "";
     //}
    //});


  },
  geographyConfig: {
    popupTemplate: function(geo, data) {
        return ['<div class="hoverinfo"><strong>',
                'Country: ' + geo.properties.name,
                '<br> Death count: ' + data.percentage ,
                '</strong></div>'].join('');
    }
  }
});

var legend = d3.select("#svg_map3").append("svg").attr("id", "legend");
//Append a linearGradient element to the defs and give it a unique id
//Append a defs (for definition) element to your SVG

//var svg = d3.select("#svg_map3").append("svg").attr("id", "map1_legend").attr("width", 370).attr("height", 45);
var defs = svg.append("defs");

//Append a linearGradient element to the defs and give it a unique id
var linearGradient = defs.append("linearGradient")
    .attr("id", "linear-gradient");
    //Set the color for the start (0%)
linearGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#f0fff0"); //light blue

//Set the color for the end (100%)
linearGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#00008b"); //dark blue
//Draw the rectangle and fill with gradient
svg.append("rect")
      .attr("width", 300)
      .attr("height", 13)
      .style("fill", "url(#linear-gradient)");
      //var x = d3.scale.linear().range([0, 70000]).domain([1, 30]);

			//var xAxis = d3.svg.axis().scale(x).orient("bottom");

			//svg.append("g").attr("class", "x axis").attr("transform", "translate(0,20)").call(xAxis).append("text").attr("y", 15).attr("dy", ".71em").style("text-anchor", "end").text("axis title");
