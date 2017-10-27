var ramp=d3.scale.linear().domain([0,10,20]).range(["lightblue","blue", "darkblue"]);

var basic_choropleth = new Datamap({
  element: document.getElementById("svg_map2"),
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
    ABW: ramp(0.006609822),
    AFG: ramp(17.1524886),
    AGO: ramp(0.279815806),
    AIA: ramp(0.015422918),
    ALB: ramp(0.275409258),
    AND: ramp(0.026439289),
    ARE: ramp(0.947407848),
    ARG: ramp(0.75351973),
    ARM: ramp(0.125586622),
    ASM: ramp(0.017626193),
    ATG: ramp(0),
    AUS: ramp(6.719985899),
    AUT: ramp(0.788772115),
    AZE: ramp(0.286425628),
    BDI: ramp(0.169652103),
    BEL: ramp(1.733976689),
    BEN: ramp(0.055081852),
    BFA: ramp(0.096944059),
    BGD: ramp(0.960627492),
    BGR: ramp(0.407605702),
    BHR: ramp(0.86148016),
    BHS: ramp(0.110163703),
    BIH: ramp(1.233833477),
    BLR: ramp(0.21151431),
    BLZ: ramp(0.033049111),
    BMU: ramp(0.143212814),
    BOL: ramp(0.213717584),
    BRA: ramp(1.377046291),
    BRB: ramp(0.112366977),
    BRN: ramp(0.07050477),
    BTN: ramp(0.039658933),
    BWA: ramp(0.114570251),
    CAF: ramp(0.167448829),
    CAN: ramp(3.188137572),
    CHE: ramp(1.031132263),
    CHL: ramp(0.649965849),
    CHN: ramp(6.810320136),
    CIV: ramp(0),
    CMR: ramp(0.202701214),
    COD: ramp(0.700641153),
    COG: ramp(0.700641153),
    COK: ramp(0.013219644),
    COL: ramp(0.887919448),
    COM: ramp(0.033049111),
    CRI: ramp(0.112366977),
    CUB: ramp(2.018199044),
    CYM: ramp(0.101350607),
    CYP: ramp(0.749113182),
    CZE: ramp(0.656575671),
    DEU: ramp(8.052966709),
    DJI: ramp(0.193888118),
    DMA: ramp(0.017626193),
    DNK: ramp(0.874699804),
    DOM: ramp(0.092537511),
    DZA: ramp(1.850750215),
    ECU: ramp(0.229140503),
    EGY: ramp(4.756868707),
    ERI: ramp(0.315068191),
    ESH: ramp(0.066098222),
    ESP: ramp(4.17300108),
    EST: ramp(0.277612532),
    ETH: ramp(0.760129553),
    FIN: ramp(0.425231895),
    FJI: ramp(0.085927689),
    FRA: ramp(10.81146584),
    FRO: ramp(0.006609822),
    FSM: ramp(0.013219644),
    GAB: ramp(0.039658933),
    GBR: ramp(2.344283605),
    GEO: ramp(1.291118602),
    GGY: ramp(0.072708044),
    GHA: ramp(0.28201908),
    GIB: ramp(0.343710754),
    GIN: ramp(0.539802146),
    GLP: ramp(0.022032741),
    GMB: ramp(0.163042281),
    GNB: ramp(0.539802146),
    GNQ: ramp(0.090334237),
    GRC: ramp(1.775838897),
    GRD: ramp(0.103553881),
    GRL: ramp(0.077114592),
    GTM: ramp(0.182871747),
    GUF: ramp(0.004406548),
    GUM: ramp(0.052878578),
    GUY: ramp(0.055081852),
    HKG: ramp(0.920968559),
    HND: ramp(0.14100954),
    HRV: ramp(0.374556591),
    HTI: ramp(0.279815806),
    HUN: ramp(0.638949479),
    IDN: ramp(2.104126732),
    IMN: ramp(0.112366977),
    IND: ramp(6.312380197),
    IRL: ramp(7.460285985),
    IRN: ramp(8.987154912),
    IRQ: ramp(24.77802014),
    ISL: ramp(0.356930399),
    ISR: ramp(10.61757772),
    ITA: ramp(3.732346267),
    JAM: ramp(0.284222354),
    JEY: ramp(1.49602309),
    JOR: ramp(3.333553661),
    JPN: ramp(2.844426818),
    KAZ: ramp(0.394386058),
    KEN: ramp(1.833124022),
    KGZ: ramp(0.231343777),
    KHM: ramp(0.387776235),
    KIR: ramp(0.037455659),
    KOR: ramp(0.912155463),
    KWT: ramp(1.511446009),
    LAO: ramp(0.112366977),
    LBN: ramp(3.326943839),
    LBR: ramp(0.306255095),
    LBY: ramp(4.212660013),
    LCA: ramp(0),
    LIE: ramp(0.07050477),
    LKA: ramp(0.962830767),
    LSO: ramp(0.035252385),
    LTU: ramp(0.248969969),
    LUX: ramp(0.478110472),
    LVA: ramp(0.20049794),
    MAR: ramp(1.321964439),
    MCO: ramp(0.176261925),
    MDA: ramp(0.127789896),
    MDG: ramp(0.088130963),
    MDV: ramp(0.165245555),
    MEX: ramp(1.883799326),
    MHL: ramp(0.044065481),
    MLI: ramp(0.658778946),
    MLT: ramp(0.27100271),
    MMR: ramp(0.762332827),
    MNG: ramp(0.083724414),
    MOZ: ramp(0.235750325),
    MRT: ramp(0.158635733),
    MSR: ramp(0.026439289),
    MTQ: ramp(0.008813096),
    MUS: ramp(0.107960429),
    MWI: ramp(0.134399718),
    MYS: ramp(1.152312336),
    NAM: ramp(0.08152114),
    NCL: ramp(0.006609822),
    NER: ramp(0.511159583),
    NGA: ramp(1.443144513),
    NIC: ramp(0.321678014),
    NLD: ramp(1.392469209),
    NOR: ramp(1.0024897),
    NPL: ramp(0.297441999),
    NRU: ramp(0.251173243),
    NZL: ramp(1.236036751),
    OMN: ramp(0.436248265),
    PAK: ramp(11.62227069),
    PAN: ramp(0.363540221),
    PER: ramp(0.370150043),
    PHL: ramp(1.119263225),
    PLW: ramp(0.030845837),
    PNG: ramp(0.156432459),
    POL: ramp(1.346200454),
    PRI: ramp(0.099147333),
    PRK: ramp(2.381739265),
    PRT: ramp(0.786568841),
    PRY: ramp(0.105757155),
    PYF: ramp(0.006609822),
    QAT: ramp(1.465177253),
    ROU: ramp(0.579461079),
    RUS: ramp(8.99156146),
    RWA: ramp(0.676405138),
    SAU: ramp(6.063410228),
    SDN: ramp(1.881596052),
    SEN: ramp(0.233547051),
    SGP: ramp(0.850463789),
    SLB: ramp(0.037455659),
    SLE: ramp(0.632339657),
    SLV: ramp(0.178465199),
    SMR: ramp(0.013219644),
    SOM: ramp(2.533765175),
    SRB: ramp(0.722673893),
    SUR: ramp(0.004406548),
    SVK: ramp(0.237953599),
    SVN: ramp(0.21151431),
    SWE: ramp(1.176548351),
    SWZ: ramp(0.057285126),
    SYC: ramp(0.0594884),
    SYR: ramp(10.48538128),
    TCA: ramp(0.024236015),
    TCD: ramp(0.392182784),
    TGO: ramp(0.068301496),
    THA: ramp(0.89452927),
    TJK: ramp(0.301848547),
    TKM: ramp(0.158635733),
    TON: ramp(0.050675304),
    TTO: ramp(0.028642563),
    TUN: ramp(1.368233195),
    TUR: ramp(5.239385727),
    TUV: ramp(0.024236015),
    TWN: ramp(0.403199154),
    TZA: ramp(0.793178663),
    UGA: ramp(0.627933109),
    UKR: ramp(1.698724304),
    URY: ramp(0.163042281),
    USA: ramp(12.85830744),
    UZB: ramp(0.676405138),
    VEN: ramp(0.636746205),
    VGB: ramp(0.090334237),
    VIR: ramp(0.090334237),
    VNM: ramp(2.511732434),
    VUT: ramp(0.030845837),
    WSM: ramp(0.041862207),
    YEM: ramp(3.6530284),
    ZAF: ramp(2.214290436),
    ZMB: ramp(0.033049111),
    ZWE: ramp(1.180954899),
    KNA: ramp(0.015422918),
    STP: ramp(0.006609822),
    ANT: ramp(0.002203274),
    MAC: ramp(0.022032741),
    MKD: ramp(0.398792606),
    PSE: ramp(3.562694164),
    TMP: ramp(0.354727125),
    SSD: ramp(0.2),

  },
  data: {
    ABW: { fillKey:	"ABW", percentage:	"0.01" },
    AFG: { fillKey:	"AFG", percentage:	"17.15" },
    AGO: { fillKey:	"AGO", percentage:	"0.28" },
    AIA: { fillKey:	"AIA", percentage:	"0.02" },
    ALB: { fillKey:	"ALB", percentage:	"0.28" },
    AND: { fillKey:	"AND", percentage:	"0.03" },
    ARE: { fillKey:	"ARE", percentage:	"0.95" },
    ARG: { fillKey:	"ARG", percentage:	"0.75" },
    ARM: { fillKey:	"ARM", percentage:	"0.13" },
    ASM: { fillKey:	"ASM", percentage:	"0.02" },
    ATG: { fillKey:	"ATG", percentage:	"0.00" },
    AUS: { fillKey:	"AUS", percentage:	"6.72" },
    AUT: { fillKey:	"AUT", percentage:	"0.79" },
    AZE: { fillKey:	"AZE", percentage:	"0.29" },
    BDI: { fillKey:	"BDI", percentage:	"0.17" },
    BEL: { fillKey:	"BEL", percentage:	"1.73" },
    BEN: { fillKey:	"BEN", percentage:	"0.06" },
    BFA: { fillKey:	"BFA", percentage:	"0.10" },
    BGD: { fillKey:	"BGD", percentage:	"0.96" },
    BGR: { fillKey:	"BGR", percentage:	"0.41" },
    BHR: { fillKey:	"BHR", percentage:	"0.86" },
    BHS: { fillKey:	"BHS", percentage:	"0.11" },
    BIH: { fillKey:	"BIH", percentage:	"1.23" },
    BLR: { fillKey:	"BLR", percentage:	"0.21" },
    BLZ: { fillKey:	"BLZ", percentage:	"0.03" },
    BMU: { fillKey:	"BMU", percentage:	"0.14" },
    BOL: { fillKey:	"BOL", percentage:	"0.21" },
    BRA: { fillKey:	"BRA", percentage:	"1.38" },
    BRB: { fillKey:	"BRB", percentage:	"0.11" },
    BRN: { fillKey:	"BRN", percentage:	"0.07" },
    BTN: { fillKey:	"BTN", percentage:	"0.04" },
    BWA: { fillKey:	"BWA", percentage:	"0.11" },
    CAF: { fillKey:	"CAF", percentage:	"0.17" },
    CAN: { fillKey:	"CAN", percentage:	"3.19" },
    CHE: { fillKey:	"CHE", percentage:	"1.03" },
    CHL: { fillKey:	"CHL", percentage:	"0.65" },
    CHN: { fillKey:	"CHN", percentage:	"6.81" },
    CIV: { fillKey:	"CIV", percentage:	"0.00" },
    CMR: { fillKey:	"CMR", percentage:	"0.20" },
    COD: { fillKey:	"COD", percentage:	"0.70" },
    COG: { fillKey:	"COG", percentage:	"0.70" },
    COK: { fillKey:	"COK", percentage:	"0.01" },
    COL: { fillKey:	"COL", percentage:	"0.89" },
    COM: { fillKey:	"COM", percentage:	"0.03" },
    CRI: { fillKey:	"CRI", percentage:	"0.11" },
    CUB: { fillKey:	"CUB", percentage:	"2.02" },
    CYM: { fillKey:	"CYM", percentage:	"0.10" },
    CYP: { fillKey:	"CYP", percentage:	"0.75" },
    CZE: { fillKey:	"CZE", percentage:	"0.66" },
    DEU: { fillKey:	"DEU", percentage:	"8.05" },
    DJI: { fillKey:	"DJI", percentage:	"0.19" },
    DMA: { fillKey:	"DMA", percentage:	"0.02" },
    DNK: { fillKey:	"DNK", percentage:	"0.87" },
    DOM: { fillKey:	"DOM", percentage:	"0.09" },
    DZA: { fillKey:	"DZA", percentage:	"1.85" },
    ECU: { fillKey:	"ECU", percentage:	"0.23" },
    EGY: { fillKey:	"EGY", percentage:	"4.76" },
    ERI: { fillKey:	"ERI", percentage:	"0.32" },
    ESH: { fillKey:	"ESH", percentage:	"0.07" },
    ESP: { fillKey:	"ESP", percentage:	"4.17" },
    EST: { fillKey:	"EST", percentage:	"0.28" },
    ETH: { fillKey:	"ETH", percentage:	"0.76" },
    FIN: { fillKey:	"FIN", percentage:	"0.43" },
    FJI: { fillKey:	"FJI", percentage:	"0.09" },
    FRA: { fillKey:	"FRA", percentage:	"10.81" },
    FRO: { fillKey:	"FRO", percentage:	"0.01" },
    FSM: { fillKey:	"FSM", percentage:	"0.01" },
    GAB: { fillKey:	"GAB", percentage:	"0.04" },
    GBR: { fillKey:	"GBR", percentage:	"2.34" },
    GEO: { fillKey:	"GEO", percentage:	"1.29" },
    GGY: { fillKey:	"GGY", percentage:	"0.07" },
    GHA: { fillKey:	"GHA", percentage:	"0.28" },
    GIB: { fillKey:	"GIB", percentage:	"0.34" },
    GIN: { fillKey:	"GIN", percentage:	"0.54" },
    GLP: { fillKey:	"GLP", percentage:	"0.02" },
    GMB: { fillKey:	"GMB", percentage:	"0.16" },
    GNB: { fillKey:	"GNB", percentage:	"0.54" },
    GNQ: { fillKey:	"GNQ", percentage:	"0.09" },
    GRC: { fillKey:	"GRC", percentage:	"1.77" },
    GRD: { fillKey:	"GRD", percentage:	"0.10" },
    GRL: { fillKey:	"GRL", percentage:	"0.08" },
    GTM: { fillKey:	"GTM", percentage:	"0.18" },
    GUF: { fillKey:	"GUF", percentage:	"0.00" },
    GUM: { fillKey:	"GUM", percentage:	"0.05" },
    GUY: { fillKey:	"GUY", percentage:	"0.06" },
    HKG: { fillKey:	"HKG", percentage:	"0.92" },
    HND: { fillKey:	"HND", percentage:	"0.14" },
    HRV: { fillKey:	"HRV", percentage:	"0.37" },
    HTI: { fillKey:	"HTI", percentage:	"0.28" },
    HUN: { fillKey:	"HUN", percentage:	"0.64" },
    IDN: { fillKey:	"IDN", percentage:	"2.10" },
    IMN: { fillKey:	"IMN", percentage:	"0.11" },
    IND: { fillKey:	"IND", percentage:	"6.31" },
    IRL: { fillKey:	"IRL", percentage:	"7.46" },
    IRN: { fillKey:	"IRN", percentage:	"8.99" },
    IRQ: { fillKey:	"IRQ", percentage:	"24.78" },
    ISL: { fillKey:	"ISL", percentage:	"0.36" },
    ISR: { fillKey:	"ISR", percentage:	"10.62" },
    ITA: { fillKey:	"ITA", percentage:	"3.73" },
    JAM: { fillKey:	"JAM", percentage:	"0.28" },
    JEY: { fillKey:	"JEY", percentage:	"1.50" },
    JOR: { fillKey:	"JOR", percentage:	"3.33" },
    JPN: { fillKey:	"JPN", percentage:	"2.84" },
    KAZ: { fillKey:	"KAZ", percentage:	"0.39" },
    KEN: { fillKey:	"KEN", percentage:	"1.83" },
    KGZ: { fillKey:	"KGZ", percentage:	"0.23" },
    KHM: { fillKey:	"KHM", percentage:	"0.39" },
    KIR: { fillKey:	"KIR", percentage:	"0.04" },
    KOR: { fillKey:	"KOR", percentage:	"0.91" },
    KWT: { fillKey:	"KWT", percentage:	"1.51" },
    LAO: { fillKey:	"LAO", percentage:	"0.11" },
    LBN: { fillKey:	"LBN", percentage:	"3.33" },
    LBR: { fillKey:	"LBR", percentage:	"0.31" },
    LBY: { fillKey:	"LBY", percentage:	"4.21" },
    LCA: { fillKey:	"LCA", percentage:	"0.00" },
    LIE: { fillKey:	"LIE", percentage:	"0.07" },
    LKA: { fillKey:	"LKA", percentage:	"0.96" },
    LSO: { fillKey:	"LSO", percentage:	"0.03" },
    LTU: { fillKey:	"LTU", percentage:	"0.25" },
    LUX: { fillKey:	"LUX", percentage:	"0.48" },
    LVA: { fillKey:	"LVA", percentage:	"0.20" },
    MAR: { fillKey:	"MAR", percentage:	"1.32" },
    MCO: { fillKey:	"MCO", percentage:	"0.18" },
    MDA: { fillKey:	"MDA", percentage:	"0.13" },
    MDG: { fillKey:	"MDG", percentage:	"0.09" },
    MDV: { fillKey:	"MDV", percentage:	"0.17" },
    MEX: { fillKey:	"MEX", percentage:	"1.88" },
    MHL: { fillKey:	"MHL", percentage:	"0.04" },
    MLI: { fillKey:	"MLI", percentage:	"0.66" },
    MLT: { fillKey:	"MLT", percentage:	"0.27" },
    MMR: { fillKey:	"MMR", percentage:	"0.76" },
    MNG: { fillKey:	"MNG", percentage:	"0.08" },
    MOZ: { fillKey:	"MOZ", percentage:	"0.24" },
    MRT: { fillKey:	"MRT", percentage:	"0.16" },
    MSR: { fillKey:	"MSR", percentage:	"0.03" },
    MTQ: { fillKey:	"MTQ", percentage:	"0.01" },
    MUS: { fillKey:	"MUS", percentage:	"0.11" },
    MWI: { fillKey:	"MWI", percentage:	"0.13" },
    MYS: { fillKey:	"MYS", percentage:	"1.15" },
    NAM: { fillKey:	"NAM", percentage:	"0.08" },
    NCL: { fillKey:	"NCL", percentage:	"0.01" },
    NER: { fillKey:	"NER", percentage:	"0.51" },
    NGA: { fillKey:	"NGA", percentage:	"1.44" },
    NIC: { fillKey:	"NIC", percentage:	"0.32" },
    NLD: { fillKey:	"NLD", percentage:	"1.39" },
    NOR: { fillKey:	"NOR", percentage:	"1.00" },
    NPL: { fillKey:	"NPL", percentage:	"0.30" },
    NRU: { fillKey:	"NRU", percentage:	"0.25" },
    NZL: { fillKey:	"NZL", percentage:	"1.24" },
    OMN: { fillKey:	"OMN", percentage:	"0.44" },
    PAK: { fillKey:	"PAK", percentage:	"11.62" },
    PAN: { fillKey:	"PAN", percentage:	"0.36" },
    PER: { fillKey:	"PER", percentage:	"0.37" },
    PHL: { fillKey:	"PHL", percentage:	"1.12" },
    PLW: { fillKey:	"PLW", percentage:	"0.03" },
    PNG: { fillKey:	"PNG", percentage:	"0.16" },
    POL: { fillKey:	"POL", percentage:	"1.35" },
    PRI: { fillKey:	"PRI", percentage:	"0.10" },
    PRK: { fillKey:	"PRK", percentage:	"2.38" },
    PRT: { fillKey:	"PRT", percentage:	"0.79" },
    PRY: { fillKey:	"PRY", percentage:	"0.11" },
    PYF: { fillKey:	"PYF", percentage:	"0.01" },
    QAT: { fillKey:	"QAT", percentage:	"1.47" },
    ROU: { fillKey:	"ROU", percentage:	"0.58" },
    RUS: { fillKey:	"RUS", percentage:	"8.99" },
    RWA: { fillKey:	"RWA", percentage:	"0.68" },
    SAU: { fillKey:	"SAU", percentage:	"6.06" },
    SDN: { fillKey:	"SDN", percentage:	"1.88" },
    SEN: { fillKey:	"SEN", percentage:	"0.23" },
    SGP: { fillKey:	"SGP", percentage:	"0.85" },
    SLB: { fillKey:	"SLB", percentage:	"0.04" },
    SLE: { fillKey:	"SLE", percentage:	"0.63" },
    SLV: { fillKey:	"SLV", percentage:	"0.18" },
    SMR: { fillKey:	"SMR", percentage:	"0.01" },
    SOM: { fillKey:	"SOM", percentage:	"2.53" },
    SRB: { fillKey:	"SRB", percentage:	"0.72" },
    SUR: { fillKey:	"SUR", percentage:	"0.00" },
    SVK: { fillKey:	"SVK", percentage:	"0.24" },
    SVN: { fillKey:	"SVN", percentage:	"0.21" },
    SWE: { fillKey:	"SWE", percentage:	"1.18" },
    SWZ: { fillKey:	"SWZ", percentage:	"0.06" },
    SYC: { fillKey:	"SYC", percentage:	"0.06" },
    SYR: { fillKey:	"SYR", percentage:	"10.49" },
    TCA: { fillKey:	"TCA", percentage:	"0.02" },
    TCD: { fillKey:	"TCD", percentage:	"0.39" },
    TGO: { fillKey:	"TGO", percentage:	"0.07" },
    THA: { fillKey:	"THA", percentage:	"0.89" },
    TJK: { fillKey:	"TJK", percentage:	"0.30" },
    TKM: { fillKey:	"TKM", percentage:	"0.16" },
    TON: { fillKey:	"TON", percentage:	"0.05" },
    TTO: { fillKey:	"TTO", percentage:	"0.03" },
    TUN: { fillKey:	"TUN", percentage:	"1.37" },
    TUR: { fillKey:	"TUR", percentage:	"5.24" },
    TUV: { fillKey:	"TUV", percentage:	"0.02" },
    TWN: { fillKey:	"TWN", percentage:	"0.40" },
    TZA: { fillKey:	"TZA", percentage:	"0.79" },
    UGA: { fillKey:	"UGA", percentage:	"0.63" },
    UKR: { fillKey:	"UKR", percentage:	"1.70" },
    URY: { fillKey:	"URY", percentage:	"0.16" },
    USA: { fillKey:	"USA", percentage:	"12.86" },
    UZB: { fillKey:	"UZB", percentage:	"0.68" },
    VEN: { fillKey:	"VEN", percentage:	"0.64" },
    VGB: { fillKey:	"VGB", percentage:	"0.09" },
    VIR: { fillKey:	"VIR", percentage:	"0.09" },
    VNM: { fillKey:	"VNM", percentage:	"2.51" },
    VUT: { fillKey:	"VUT", percentage:	"0.03" },
    WSM: { fillKey:	"WSM", percentage:	"0.04" },
    YEM: { fillKey:	"YEM", percentage:	"3.65" },
    ZAF: { fillKey:	"ZAF", percentage:	"2.21" },
    ZMB: { fillKey:	"ZMB", percentage:	"0.03" },
    ZWE: { fillKey:	"ZWE", percentage:	"1.18" },
    KNA: { fillKey:	"KNA", percentage:	"0.02" },
    STP: { fillKey:	"STP", percentage:	"0.01" },
    ANT: { fillKey:	"ANT", percentage:	"0.00" },
    MAC: { fillKey:	"MAC", percentage:	"0.02" },
    MKD: { fillKey:	"MKD", percentage:	"0.40" },
    PSE: { fillKey:	"PSE", percentage:	"3.56" },
    TMP: { fillKey: "TMP", percentage:  "0.35" },
    SSD: { fillKey:	"SSD", percentage:	"0.20"},

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
                '<br> Mentions in "terrorism" articles: ' + data.percentage + '%',
                '</strong></div>'].join('');
    }
  }
});
//var legend = d3.select("#svg_map2").append("svg").attr("id", "legend");
//Append a linearGradient element to the defs and give it a unique id
//Append a defs (for definition) element to your SVG
var svg = d3.select("#svg_map2").append("svg").attr("id", "map1_legend").attr("width", 370).attr("height", 45);
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
    .attr("stop-color", "#0000db"); //dark blue
//Draw the rectangle and fill with gradient
svg.append("rect")
      .attr("width", 300)
      .attr("height", 13)
      .style("fill", "url(#linear-gradient)");
      var x = d3.scale.linear().range([0, 300]).domain([5, 25]);

			var xAxis = d3.svg.axis().scale(x).orient("bottom");

			svg.append("g").attr("class", "x axis").attr("transform", "translate(0,20)").call(xAxis).append("text").attr("y", 15).attr("dy", ".71em").style("text-anchor", "end").text("axis title");
