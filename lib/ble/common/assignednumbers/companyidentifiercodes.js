var companyNames = {
    "0000": "Ericsson Technology Licensing",
    "0001": "Nokia Mobile Phones",
    "0002": "Intel Corp.",
    "0003": "IBM Corp.",
    "0004": "Toshiba Corp.",
    "0005": "3Com",
    "0006": "Microsoft",
    "0007": "Lucent",
    "0008": "Motorola",
    "0009": "Infineon Technologies AG",
    "000a": "Cambridge Silicon Radio",
    "000b": "Silicon Wave",
    "000c": "Digianswer A/S",
    "000d": "Texas Instruments Inc.",
    "000e": "Ceva, Inc. (formerly Parthus Technologies, Inc.)",
    "000f": "Broadcom Corporation",
    "0010": "Mitel Semiconductor",
    "0011": "Widcomm, Inc",
    "0012": "Zeevo, Inc.",
    "0013": "Atmel Corporation",
    "0014": "Mitsubishi Electric Corporation",
    "0015": "RTX Telecom A/S",
    "0016": "KC Technology Inc.",
    "0017": "NewLogic",
    "0018": "Transilica, Inc.",
    "0019": "Rohde & Schwarz GmbH & Co. KG",
    "001a": "TTPCom Limited",
    "001b": "Signia Technologies, Inc.",
    "001c": "Conexant Systems Inc.",
    "001d": "Qualcomm",
    "001e": "Inventel",
    "001f": "AVM Berlin ",
    "0020": "BandSpeed, Inc.",
    "0021": "Mansella Ltd",
    "0022": "NEC Corporation",
    "0023": "WavePlus Technology Co., Ltd.",
    "0024": "Alcatel ",
    "0025": "NXP Semiconductors (formerly Philips Semiconductors)",
    "0026": "C Technologies",
    "0027": "Open Interface",
    "0028": "R F Micro Devices",
    "0029": "Hitachi Ltd",
    "002a": "Symbol Technologies, Inc.",
    "002b": "Tenovis",
    "002c": "Macronix International Co. Ltd.",
    "002d": "GCT Semiconductor",
    "002e": "Norwood Systems",
    "002f": "MewTel Technology Inc.",
    "0030": "ST Microelectronics",
    "0031": "Synopsis",
    "0032": "Red-M (Communications) Ltd",
    "0033": "Commil Ltd",
    "0034": "Computer Access Technology Corporation (CATC)",
    "0035": "Eclipse (HQ Espana) S.L.",
    "0036": "Renesas Electronics Corporation",
    "0037": "Mobilian Corporation",
    "0038": "Terax",
    "0039": "Integrated System Solution Corp.",
    "003a": "Matsushita Electric Industrial Co., Ltd.",
    "003b": "Gennum Corporation",
    "003c": "BlackBerry Limited (formerly Research In Motion)",
    "003d": "IPextreme, Inc.",
    "003e": "Systems and Chips, Inc.",
    "003f": "Bluetooth SIG, Inc.",
    "0040": "Seiko Epson Corporation",
    "0041": "Integrated Silicon Solution Taiwan, Inc.",
    "0042": "CONWISE Technology Corporation Ltd",
    "0043": "PARROT SA",
    "0044": "Socket Mobile",
    "0045": "Atheros Communications, Inc.",
    "0046": "MediaTek, Inc.",
    "0047": "Bluegiga",
    "0048": "Marvell Technology Group Ltd.",
    "0049": "3DSP Corporation",
    "004a": "Accel Semiconductor Ltd.",
    "004b": "Continental Automotive Systems",
    "004c": "Apple, Inc.",
    "004d": "Staccato Communications, Inc.",
    "004e": "Avago Technologies",
    "004f": "APT Licensing Ltd.",
    "0050": "SiRF Technology",
    "0051": "Tzero Technologies, Inc.",
    "0052": "J&M Corporation",
    "0053": "Free2move AB",
    "0054": "3DiJoy Corporation ",
    "0055": "Plantronics, Inc. ",
    "0056": "Sony Ericsson Mobile Communications ",
    "0057": "Harman International Industries, Inc. ",
    "0058": "Vizio, Inc. ",
    "0059": "Nordic Semiconductor ASA ",
    "005a": "EM Microelectronic-Marin SA ",
    "005b": "Ralink Technology Corporation ",
    "005c": "Belkin International, Inc. ",
    "005d": "Realtek Semiconductor Corporation ",
    "005e": "Stonestreet One, LLC ",
    "005f": "Wicentric, Inc. ",
    "0060": "RivieraWaves S.A.S ",
    "0061": "RDA Microelectronics ",
    "0062": "Gibson Guitars ",
    "0063": "MiCommand Inc. ",
    "0064": "Band XI International, LLC ",
    "0065": "Hewlett-Packard Company ",
    "0066": "9Solutions Oy ",
    "0067": "GN Netcom A/S ",
    "0068": "General Motors ",
    "0069": "A&D Engineering, Inc. ",
    "006a": "MindTree Ltd. ",
    "006b": "Polar Electro OY ",
    "006c": "Beautiful Enterprise Co., Ltd.",
    "006d": "BriarTek, Inc. ",
    "006e": "Summit Data Communications, Inc. ",
    "006f": "Sound ID ",
    "0070": "Monster, LLC ",
    "0071": "connectBlue AB ",
    "0072": "ShangHai Super Smart Electronics Co. Ltd. ",
    "0073": "Group Sense Ltd. ",
    "0074": "Zomm, LLC ",
    "0075": "Samsung Electronics Co. Ltd.",
    "0076": "Creative Technology Ltd.",
    "0077": "Laird Technologies ",
    "0078": "Nike, Inc. ",
    "0079": "lesswire AG ",
    "007a": "MStar Semiconductor, Inc. ",
    "007b": "Hanlynn Technologies ",
    "007c": "A & R Cambridge ",
    "007d": "Seers Technology Co. Ltd ",
    "007e": "Sports Tracking Technologies Ltd. ",
    "007f": "Autonet Mobile ",
    "0080": "DeLorme Publishing Company, Inc. ",
    "0081": "WuXi Vimicro ",
    "0082": "Sennheiser Communications A/S ",
    "0083": "TimeKeeping Systems, Inc. ",
    "0084": "Ludus Helsinki Ltd. ",
    "0085": "BlueRadios, Inc. ",
    "0086": "equinox AG ",
    "0087": "Garmin International, Inc. ",
    "0088": "Ecotest ",
    "0089": "GN ReSound A/S ",
    "008a": "Jawbone ",
    "008b": "Topcorn Positioning Systems, LLC ",
    "008c": "Gimbal Inc. (formerly Qualcomm Labs, Inc. and Qualcomm Retail Solutions, Inc.)​​",
    "008d": "Zscan Software ",
    "008e": "Quintic Corp. ",
    "008f": "Stollman E+V GmbH ",
    "0090": "Funai Electric Co., Ltd. ",
    "0091": "Advanced PANMOBIL Systems GmbH & Co. KG ",
    "0092": "ThinkOptics, Inc. ",
    "0093": "Universal Electronics, Inc. ",
    "0094": "Airoha Technology Corp. ",
    "0095": "NEC Lighting, Ltd. ",
    "0096": "ODM Technology, Inc. ",
    "0097": "ConnecteDevice Ltd.",
    "0098": "zer01.tv GmbH ",
    "0099": "i.Tech Dynamic Global Distribution Ltd. ",
    "009a": "Alpwise ",
    "009b": "Jiangsu Toppower Automotive Electronics Co., Ltd. ",
    "009c": "Colorfy, Inc. ",
    "009d": "Geoforce Inc. ",
    "009e": "Bose Corporation ",
    "009f": "Suunto Oy ",
    "00a0": "Kensington Computer Products Group ",
    "00a1": "SR-Medizinelektronik ",
    "00a2": "Vertu Corporation Limited",
    "00a3": "Meta Watch Ltd.",
    "00a4": "LINAK A/S",
    "00a5": "OTL Dynamics LLC",
    "00a6": "Panda Ocean Inc.",
    "00a7": " Visteon Corporation",
    "00a8": "ARP Devices Limited",
    "00a9": "Magneti Marelli S.p.A",
    "00aa": "CAEN RFID srl ",
    "00ab": "Ingenieur-Systemgruppe Zahn GmbH",
    "00ac": "Green Throttle Games ",
    "00ad": "Peter Systemtechnik GmbH",
    "00ae": "Omegawave Oy",
    "00af": "Cinetix",
    "00b0": "Passif Semiconductor Corp ",
    "00b1": "Saris Cycling Group, Inc ",
    "00b2": "​Bekey A/S",
    "00b3": " ​Clarinox Technologies Pty. Ltd. ",
    "00b4": " ​BDE Technology Co., Ltd. ",
    "00b5": " Swirl Networks ",
    "00b6": " ​Meso international",
    "00b7": " ​TreLab Ltd ",
    "00b8": " ​Qualcomm Innovation Center, Inc. (QuIC) ",
    "00b9": " ​​Johnson Controls, Inc.",
    "00bA": " ​Starkey Laboratories Inc.",
    "00bb": " ​​S-Power Electronics Limited",
    "00bc": " ​​Ace Sensor Inc",
    "00bd": " ​​Aplix Corporation",
    "00be": " ​​AAMP of America",
    "00bf": " ​​Stalmart Technology Limited",
    "00c0": " ​​AMICCOM Electronics Corporation",
    "00c1": " ​​Shenzhen Excelsecu Data Technology Co.,Ltd",
    "00c2": " ​​Geneq Inc.",
    "00c3": " ​​adidas AG",
    "00c4": " ​​LG Electronics​",
    "00c5": " ​Onset Computer Corporation",
    "00c6": " ​Selfly BV",
    "00​c7": " ​Quuppa Oy.",
    "00​c8": " GeLo Inc",
    "00​c9": " Evluma",
    "00​ca": " MC10",
    "00​cb": " Binauric SE",
    "00​cc": " Beats Electronics",
    "00​cd": " Microchip Technology Inc.",
    "00​ce": " Elgato Systems GmbH ",
    "00​cf": " ARCHOS SA ",
    "00​d0": " Dexcom, Inc. ",
    "00​d1": " Polar Electro Europe B.V.",
    "00​d2": " Dialog Semiconductor B.V.",
    "00​d3": " Taixingbang Technology (HK) Co,. LTD.",
    "00​d4": " Kawantech",
    "00​d5": " Austco Communication Systems ",
    "00​d6": " Timex Group USA, Inc. ",
    "00​d7": " Qualcomm Technologies, Inc. ",
    "00​d8": " Qualcomm Connected Experiences, Inc. ",
    "00​d9": " Voyetra Turtle Beach",
    "00​da": " txtr GmbH",
    "00​db": " Biosentronics ",
    "00​dc": " Procter & Gamble",
    "00​dd": " Hosiden Corporation ",
    "00​de": " Muzik LLC ",
    "00​df": "  Misfit Wearables Corp",
    "00​e0": " Google",
    "00​e1": " Danlers Ltd",
    "00​e2": " Semilink Inc",
    "00​e3": " inMusic Brands, Inc",
    "00​e4": " L.S. Research Inc. ",
    "00​e5": " Eden Software Consultants Ltd. ",
    "00​e6": " Freshtemp ",
    "00e7": "​KS Technologies",
    "00e8": "​ACTS Technologies",
    "00e9": "​Vtrack Systems",
    "00ea": "​Nielsen-Kellerman Company",
    "00eb": "​Server Technology, Inc.",
    "00ec": "​BioResearch Associates",
    "00ed": "​Jolly Logic, LLC",
    "00ee": "​Above Average Outcomes, Inc.",
    "00ef": "​Bitsplitters GmbH",
    "00f0": "​PayPal, Inc.",
    "00f1": "​Witron Technology Limited",
    "00f2": "​Aether Things Inc. (formerly Morse Project Inc.)",
    "00f3": "​Kent Displays Inc.",
    "00f4": "Nautilus Inc​.",
    "00f5": "​Smartifier Oy",
    "00f6": "​Elcometer Limited",
    "00f7": "​VSN Technologies Inc.",
    "00f8": "​AceUni Corp., Ltd.",
    "00f9": "​StickNFind",
    "00fa": "​Crystal Code AB",
    "00fb": "​KOUKAAM a.s.",
    "00fc": " Delphi Corporation",
    "00fd": "​ValenceTech Limited",
    "00fe": "Reserved",
    "00ff": "​Typo Products, LLC",
    "0100": "​TomTom International BV",
    "0101": "​Fugoo, Inc",
    "0102": "​Keiser Corporation",
    "0103": "​Bang & Olufsen A/S",
    "0104": "​PLUS Locations Systems Pty Ltd",
    "0105": "​Ubiquitous Computing Technology Corporation",
    "0106": "​Innovative Yachtter Solutions",
    "0107": "​William Demant Holding A/S",
    "0108": "​Chicony Electronics Co., Ltd.",
    "0109": "​Atus BV",
    "010a": "​Codegate Ltd.",
    "010b": "ERi, Inc.",
    "010c": "​Transducers Direct, LLC",
    "010d": "​Fujitsu Ten Limited",
    "010e": "​Audi AG",
    "010f": "​HiSilicon Technologies Co., Ltd.",
    "0110": "​Nippon Seiki Co., Ltd.",
    "0111": "​Steelseries ApS",
    "0112": "​vyzybl Inc.",
    "0113": "​Openbrain Technologies, Co., Ltd.",
    "0114": "​Xensr",
    "0115": "e.solutions",
    "0116": "​1OAK Technologies",
    "0117": "​Wimoto Technologies Inc",
    "0118": "​Radius Networks, Inc.",
    "0119": "​Wize Technology Co., Ltd.",
    "011a": "​Qualcomm Labs, Inc. ",
    "011b": "​Aruba Networks",
    "011c": "​Baidu",
    "011d": "​Arendi AG",
    "011e": "​Skoda Auto a.s.",
    "011f": "​Volkswagon AG",
    "0120": "​Porsche AG",
    "0121": "​Sino Wealth Electronic Ltd.",
    "0122": "​AirTurn, Inc.",
    "0123": "​Kinsa, Inc.",
    "0124": "​HID Global",
    "0125": "​SEAT es",
    "0126": "​Promethean Ltd.",
    "0127": "​Salutica Allied Solutions",
    "0128": "​GPSI Group Pty Ltd",
    "0129": "​Nimble Devices Oy",
    "012a": "​Changzhou Yongse Infotech Co., Ltd",
    "012b": "​SportIQ",
    "012c": "​TEMEC Instruments B.V.",
    "012d": "​Sony Corporation",
    "012e": "​ASSA ABLOY",
    "012f": "​Clarion Co., Ltd.",
    "0130": "​Warehouse Innovations",
    "0131": "​Cypress Semiconductor Corporation",
    "0132": "​MADS Inc",
    "0133": "​Blue Maestro Limited",
    "0134": "​Resolution Products, Inc.",
    "0135": "​Airewear LLC",
    "0136": "Seed Labs, Inc. (formerly ETC sp. z.o.o.)​",
    "0137": "​Prestigio Plaza Ltd.",
    "0138": "​NTEO Inc.",
    "0139": "​Focus Systems Corporation",
    "013a": "​Tencent Holdings Limited",
    "013b": "​Allegion",
    "013c": "​Murata Manufacuring Co., Ltd. ",
    "013e": "​Nod, Inc.",
    "013f": "​B&B Manufacturing Company",
    "0140": "​Alpine Electronics (China) Co., Ltd",
    "0141": "​FedEx Services",
    "0142": "​Grape Systems Inc.",
    "0143": "​Bkon Connect",
    "0144": "​Lintech GmbH",
    "0145": "​Novatel Wireless",
    "0146": "​Ciright",
    "0147": "​Mighty Cast, Inc.",
    "0148": "​Ambimat Electronics",
    "0149": "​Perytons Ltd.",
    "014a": "​Tivoli Audio, LLC",
    "014b": "​Master Lock",
    "014c": "​Mesh-Net Ltd",
    "014d": "​Huizhou Desay SV Automotive CO., LTD.",
    "014e": "Tangerine, Inc.",
    "014f": "B&W Group Ltd.",
    "0150": "​Pioneer Corporation",
    "0151": "​OnBeep",
    "0152": "​Vernier Software & Technology",
    "0153": "​ROL Ergo",
    "0154": "​Pebble Technology",
    "0155": "​NETATMO",
    "0156": "​Accumulate AB",
    "0157": "​Anhui Huami Information Technology Co., Ltd.",
    "0158": "​Inmite s.r.o.",
    "0159": "​ChefSteps, Inc.",
    "015a": "​micas AG",
    "015b": "​Biomedical Research Ltd.",
    "015c": "Pitius Tec S.L.",
    "015d": "Estimote, Inc.",
    "015e": "Unikey Technologies, Inc.",
    "015f": "Timer Cap Co.",
    "0160": "AwoX",
    "0161": "yikes",
    "0162": "MADSGlobal NZ Ltd.",
    "0163": "PCH International",
    "0164": "Qingdao Yeelink Information Technology Co., Ltd.",
    "0165": "Milwaukee Tool (formerly Milwaukee Electric Tools)",
    "0166": "MISHIK Pte Ltd",
    "0167": "Bayer HealthCare",
    "0168": "Spicebox LLC",
    "0169": "emberlight",
    "016a": "Cooper-Atkins Corporation",
    "016b": "Qblinks",
    "016c": "MYSPHERA",
    "016d": "LifeScan Inc",
    "016e": "Volantic AB",
    "016f": "Podo Labs, Inc",
    "0170": "Roche Diabetes Care AG",
    "0171": "Amazon Fulfillment Service",
    "0172": "Connovate Technology Private Limited",
    "0173": "Kocomojo, LLC",
    "0174": "Everykey LLC",
    "0175": "Dynamic Controls",
    "0176": "SentriLock",
    "0177": "I-SYST inc.",
    "0178": "CASIO COMPUTER CO., LTD.",
    "0179": "LAPIS Semiconductor Co., Ltd.",
    "017a": "Telemonitor, Inc.",
    "017b": "taskit GmbH",
    "017c": "Daimler AG",
    "017d": "BatAndCat",
    "017e": "BluDotz Ltd",
    "017f": "XTel ApS",
    "0180": "Gigaset Communications GmbH",
    "0181": "Gecko Health Innovations, Inc.",
    "0182": "HOP Ubiquitous",
    "0183": "To Be Assigned",
    "0184": "Nectar",
    "0185": "bel'apps LLC",
    "0186": "CORE Lighting Ltd",
    "0187": "Seraphim Sense Ltd",
    "0188": "Unico RBC",
    "0189": "Physical Enterprises Inc.",
    "018a": "Able Trend Technology Limited",
    "018b": "Konica Minolta, Inc.",
    "018c": "Wilo SE",
    "018d": "Extron Design Services",
    "018e": "Fitbit, Inc.",
    "018f": "Fireflies Systems",
    "0190": "Intelletto Technologies Inc.",
    "0191": "FDK CORPORATION ",
    "0192": "Cloudleaf, Inc",
    "0193": "Maveric Automation LLC",
    "0194": "Acoustic Stream Corporation",
    "0195": "Zuli",
    "0196": "Paxton Access Ltd",
    "0197": "WiSilica Inc",
    "0198": "Vengit Limited",
    "0199": "SALTO SYSTEMS S.L.",
    "019a": "TRON Forum (formerly T-Engine Forum)",
    "019b": "CUBETECH s.r.o.",
    "019c": "Cokiya Incorporated",
    "019d": "CVS Health",
    "019e": "Ceruus",
    "019f": "Strainstall Ltd",
    "01a0": "Channel Enterprises (HK) Ltd.",
    "01a1": "FIAMM",
    "01a2": "GIGALANE.CO.,LTD",
    "01a3": "EROAD",
    "01a4": "Mine Safety Appliances",
    "01a5": "Icon Health and Fitness",
    "01a6": "Asandoo GmbH",
    "01a7": "ENERGOUS CORPORATION",
    "01a8": "Taobao",
    "01a9": "Canon Inc.",
    "01aa": "Geophysical Technology Inc.",
    "01ab": "Facebook, Inc.",
    "01ac": "Nipro Diagnostics, Inc.",
    "01ad": "FlightSafety International",
    "01ae": "Earlens Corporation",
    "01af": "Sunrise Micro Devices, Inc.",
    "01b0": "Star Micronics Co., Ltd.",
    "01b1": "Netizens Sp. z o.o.",
    "01b2": "Nymi Inc.",
    "01b3": "Nytec, Inc.",
    "01b4": "Trineo Sp. z o.o.",
    "01b5": "Nest Labs Inc.",
    "01b6": "LM Technologies Ltd",
    "01b7": "General Electric Company",
    "01b8": "i+D3 S.L.",
    "01b9": "HANA Micron",
    "01ba": "Stages Cycling LLC",
    "01bb": "Cochlear Bone Anchored Solutions AB",
    "01bc": "SenionLab AB",
    "01bd": "Syszone Co., Ltd",
    "01be": "Pulsate Mobile Ltd.",
    "01bf": "Hong Kong HunterSun Electronic Limited",
    "01c0": "pironex GmbH",
    "01c1": "BRADATECH Corp.",
    "01c2": "Transenergooil AG",
    "01c3": "Bunch",
    "01c4": "DME Microelectronics",
    "01c5": "Bitcraze AB",
    "01c6": "HASWARE Inc.",
    "01c7": "Abiogenix Inc.",
    "01c8": "Poly-Control ApS",
    "01c9": "Avi-on",
    "01ca": "Laerdal Medical AS",
    "01cb": "Fetch My Pet",
    "01cc": "Sam Labs Ltd.",
    "01cd": "Chengdu Synwing Technology Ltd",
    "01ce": "HOUWA SYSTEM DESIGN, k.k.",
    "01cf": "BSH",
    "01d0": "Primus Inter Pares Ltd",
    "01d1": "August",
    "01d2": "Gill Electronics",
    "01d3": "Sky Wave Design",
    "01d4": "Newlab S.r.l.",
    "01d5": "ELAD srl​",
    "01d6": "​G-wearables inc.",
    "01d7": "​Squadrone Systems Inc.",
    "01d8": "​Code Corporation",
    "01d9": "​Savant Systems LLC",
    "01da": "​Logitech International SA",
    "01db": "​Innblue Consulting",
    "01dc": "​iParking Ltd.",
    "01dd": "​Koninklijke Philips Electronics N.V.",
    "01de": "​Minelab Electronics Pty Limited",
    "01df": "​Bison Group Ltd.",
    "01e0": "​Widex A/S",
    "01e1": "​Jolla Ltd",
    "01e2": "​Lectronix, Inc.",
    "01e3": "​Caterpillar Inc",
    "01e4": "​Freedom Innovations",
    "01e5": "​Dynamic Devices Ltd",
    "01e6": "​Technology Solutions (UK) Ltd",
    "01e7": "​IPS Group Inc.",
    "01e8": "​STIR",
    "01e9​": "Sano, Inc​",
    "01ea​": "Advanced Application Design, Inc.​",
    "01eb": "AutoMap LLC​",
    "01ec": "​Spreadtrum Communications Shanghai Ltd",
    "01ed": "​CuteCircuit LTD",
    "01ee": "​Valeo Service",
    "01ef": "​Fullpower Technologies, Inc. ",
    "01f0": "​KloudNation",
    "01f1": "​Zebra Technologies Corporation",
    "01f2": "​Itron, Inc.",
    "01f3": "​The University of Tokyo",
    "01f4": "​UTC Fire and Security",
    "01f5": "​Cool Webthings Limited",
    "01f6": "​DJO Global",
    "01f7": "​Gelliner Limited",
    "01f8": "​Anyka (Guangzhou) Microelectronics Technology Co, LTD",
    "01f9": "​Medtronic, Inc. ",
    "01fa": "​Gozio, Inc. ",
    "01fb": "​Form Lifting, LLC",
    "01fc": "​Wahoo Fitness, LLC",
    "01fd": "​Kontakt Micro-Location Sp. z o.o.",
    "01fe": "​Radio System Corporation",
    "01ff": "​Freescale Semiconductor, Inc. ",
    "0200": "​Verifone Systems PTe Ltd. Taiwan Branch",
    "0201": "​AR Timing",
    "0202": "​Rigado LLC",
    "0203": "​Kemppi Oy",
    "0204​": "​Tapcentive Inc.",
    "0205​": "Smartbotics Inc.​",
    "0206​": "Otter Products, LLC​",
    "0207​": "​STEMP Inc.",
    "0208": "​LumiGeek LLC",
    "0209​": "​InvisionHeart Inc.",
    "02​0a": "Macnica Inc. ​",
    "020b": "​Jaguar Land Rover Limited",
    "020c": "​CoroWare Technologies, Inc",
    "020d": "​Simplo Technology Co., LTD",
    "020e": "​Omron Healthcare Co., LTD",
    "020f": "​Comodule GMBH",
    "0210": "​ikeGPS",
    "0211": "​Telink Semiconductor Co. Ltd",
    "0212": "​Interplan Co., Ltd",
    "0213": "​Wyler AG",
    "0214": "​IK Multimedia Production srl",
    "0215": "​Lukoton Experience Oy",
    "0216": "​MTI Ltd",
    "0217": "​Tech4home, Lda",
    "0218": "​Hiotech AB",
    "0219": "​DOTT Limited",
    "021a": "​Blue Speck Labs, LLC",
    "021b": "​Cisco Systems Inc",
    "021c": "​Mobicomm Inc",
    "021d": "​Edamic",
    "021e": "​Goodnet Ltd",
    "021f": "​Luster Leaf Products Inc",
    "0220": "​Manus Machina BV",
    "0221": "​Mobiquity Networks Inc",
    "0222": "​Praxis Dynamics",
    "0223": "​Philip Morris Products S.A.",
    "0224": "Comarch SA",
    "0225": "Nestlé Nespresso S.A.",
    "0226": "​Merlinia A/S",
    "0227": "LifeBEAM Technologies",
    "0228": "​Twocanoes Labs, LLC",
    "0229": "​Muoverti Limited",
    "022a": "Stamer Musikanlagen GMBH",
    "022b": "​Tesla Motors",
    "022c": "​Pharynks Corporation",
    "022d": "​Lupine",
    "022e": "​Siemens AG",
    "022f": "​Huami (Shanghai) Culture Communication CO., LTD",
    "0230": "​Foster Electric Company, Ltd",
    "0231": "ETA SA",
    "0232": "​ x-Senso Solutions Kft",
    "0233": "​ Shenzhen SuLong Communication Ltd",
    "0234": "​ FengFan (BeiJing) Technology Co, Ltd",
    "0235": "​ Qrio Inc",
    "0236": "​ Pitpatpet Ltd",
    "0237": "​ MSHeli s.r.l.",
    "0238": "​Trakm8 Ltd",
    "0239": "​JIN CO, Ltd",
    "023a": "​Alatech Technology"
};

module.exports.companyNames = companyNames;