import Vue from "vue";
import Vuex from "vuex";
import moment from "moment";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    global: {
      phone: "0411 244 929",
      email: "bookings@verifiedautoshop.com",
      //
      // Original data for form
      //
      locationIndex: 0,
      locations: [
        {
          city: "Brisbane",
          token: "208c5f70fea76d55514cb31d4799f335353ea6ba",
          index: 0,
          phone: "0411 244 929"
        },
        {
          city: "Christchurch",
          token: "27b7c5186fa1eb92837c02a07b0227ca454fb598",
          index: 1,
          phone: "03 377 3716"
        }
        // {
        //   city: "Perth",
        //   token: "4a98d038aa7c10af0cdfa0489bd20dc1951b955d",
        //   index: 2,
        //   phone: ""
        // },
        // {
        //   city: "Broome",
        //   token: "",
        //   index: 3,
        //   phone: ""
        // }
      ],
      //
      // New data for pages
      //
      loc: {
        brisbane: {
          name: "Brisbane",
          street: "100 Longlands St",
          locality: "Woolloongabba",
          city: "Brisbane",
          postcode: "4102",
          phone: "0411 244 929",
          email: "bookings@verifiedautoshop.com",
          token: "208c5f70fea76d55514cb31d4799f335353ea6ba",
          map:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2104.470426525506!2d153.0445784004174!3d-27.4915643319131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x925433f346606b25!2sVerified%20Auto%20Shop!5e0!3m2!1sen!2sau!4v1630298591128!5m2!1sen!2sau",
          jsonld: {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            name: "Verified Auto Shop Brisbane",
            telephone: "0424 975 336",
            image:
              "https://res.cloudinary.com/dg5ybbkbh/image/upload/v1604462332/verified/v-exterior.jpg",
            logo:
              "https://res.cloudinary.com/dg5ybbkbh/image/upload/v1604462491/verified/verified-logo-dark-bg.jpg",
            email: "bookings@verifiedautoshop.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "46 Deshon St",
              postalCode: "4102"
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: {
                "@type": "DayOfWeek",
                name: "Mo-Fr 07:00-17:00"
              }
            },
            url: "http://www.verifiedautoshop.com/"
          }
        },
        christchurch: {
          name: "Christchurch",
          street: "135 Ferry St",
          locality: "Waltham",
          city: "Christchurch",
          postcode: "8011",
          phone: "03 377 3716",
          email: "bookings@verifiedautoshop.com",
          token: "27b7c5186fa1eb92837c02a07b0227ca454fb598",
          map:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11569.08424239832!2d172.6515898!3d-43.5383913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c4b43db87b3c0d5!2sverified%20auto%20shop!5e0!3m2!1sen!2sau!4v1604450474459!5m2!1sen!2sau",
          jsonld: {
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            name: "Verified Auto Shop Christchurch",
            image:
              "https://res.cloudinary.com/dg5ybbkbh/image/upload/v1604462851/verified/v-exterior-chch.jpg",
            logo:
              "https://res.cloudinary.com/dg5ybbkbh/image/upload/v1604462491/verified/verified-logo-dark-bg.jpg",
            telephone: "0424 975 336",
            email: "bookings@verifiedautoshop.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "135 Ferry Rd",
              addressLocality: "Christchurch",
              postalCode: "8011"
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: {
                "@type": "DayOfWeek",
                name: "Mo-Fr 08:00-16:00"
              }
            },
            url: "http://www.verifiedautoshop.com/"
          }
        }
        // broome: {
        //   name: "Broome",
        //   street: "2/97 Guy St",
        //   locality: "Bilingurr",
        //   city: "Broome",
        //   postcode: "6725",
        //   phone: "",
        //   email: "bookings@verifiedautoshop.com",
        //   token: "",
        //   map:
        //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15181.266497351337!2d122.21568443749314!3d-17.964000303766717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c7a2ee141754ced%3A0x49310c44b1301cf1!2s2%2F97%20Guy%20St%2C%20Broome%20WA%206725!5e0!3m2!1sen!2sau!4v1626389285812!5m2!1sen!2sau",
        //   jsonld: {
        //     "@context": "http://schema.org",
        //     "@type": "LocalBusiness",
        //     name: "Verified Auto Shop Broome",
        //     image: "",
        //     logo:
        //       "https://res.cloudinary.com/dg5ybbkbh/image/upload/v1604462491/verified/verified-logo-dark-bg.jpg",
        //     telephone: "",
        //     email: "bookings@verifiedautoshop.com",
        //     address: {
        //       "@type": "PostalAddress",
        //       streetAddress: "2/97 Guy St",
        //       addressLocality: "Bilingurr",
        //       postalCode: "6725"
        //     },
        //     openingHoursSpecification: {
        //       "@type": "OpeningHoursSpecification",
        //       dayOfWeek: {
        //         "@type": "DayOfWeek",
        //         name: "Mo-Fr 08:00-16:00"
        //       }
        //     },
        //     url: "http://www.verifiedautoshop.com/"
        //   }
        // },
        // perth: {
        //   name: "Perth",
        //   street: "28 Charles Street",
        //   locality: "Bentley",
        //   city: "Perth",
        //   postcode: "6102",
        //   phone: "",
        //   email: "bookings@verifiedautoshop.com",
        //   token: "4a98d038aa7c10af0cdfa0489bd20dc1951b955d",
        //   map:
        //     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13534.548626070284!2d115.91567024101118!3d-31.997850249426946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bc133cfe9a11%3A0xf48252fffe4fd3d6!2s28%20Charles%20St%2C%20Bentley%20WA%206102!5e0!3m2!1sen!2sau!4v1626389944031!5m2!1sen!2sau",
        //   jsonld: {
        //     "@context": "http://schema.org",
        //     "@type": "LocalBusiness",
        //     name: "Verified Auto Shop Perth",
        //     image: "",
        //     logo:
        //       "https://res.cloudinary.com/dg5ybbkbh/image/upload/v1604462491/verified/verified-logo-dark-bg.jpg",
        //     telephone: "",
        //     email: "bookings@verifiedautoshop.com",
        //     address: {
        //       "@type": "PostalAddress",
        //       streetAddress: "28 Charles Street",
        //       addressLocality: "Bentley",
        //       postalCode: "6102"
        //     },
        //     openingHoursSpecification: {
        //       "@type": "OpeningHoursSpecification",
        //       dayOfWeek: {
        //         "@type": "DayOfWeek",
        //         name: "Mo-Fr 08:00-16:00"
        //       }
        //     },
        //     url: "http://www.verifiedautoshop.com/"
        //   }
        // }
      }
    },
    selectedMake: "Vehicle Make",
    selectedModel: "Vehicle Model",
    form: {
      name: "",
      number: "",
      email: "",
      make: null,
      model: null,
      year: null,
      rego: null,
      comments: "",
      dropoff: moment()._d,
      dropoff_time: "09:00",
      pickup: moment()._d,
      pickup_time: "15:00"
    },
    makes: [
      { label: "Other/Not Listed", models: ["Other/Not Listed"] },
      {
        label: "Alfa Romeo",
        models: [
          "1300",
          "147",
          "155",
          "156",
          "159",
          "1600",
          "164",
          "166",
          "1750",
          "2000",
          "2600",
          "4C",
          "Alfa 33",
          "Alfa 75",
          "Alfetta",
          "Brera",
          "Giulia",
          "Giulietta",
          "GT",
          "GTV",
          "MiTo",
          "Montreal",
          "Spider",
          "Stelvio"
        ]
      },
      {
        label: "Audi",
        models: [
          "100",
          "90",
          "A1",
          "A2",
          "A3",
          "A4",
          "A5",
          "A6",
          "A7",
          "A8",
          "allroad",
          "e-tron",
          "Q2",
          "Q3",
          "Q5",
          "Q7",
          "Q8",
          "R8",
          "RS 13",
          "RS Q8",
          "RS3",
          "RS4",
          "RS5",
          "RS6",
          "RS7",
          "S1",
          "S3",
          "S4",
          "S5",
          "S6",
          "S7",
          "S8",
          "SQ5",
          "SQ7",
          "SQ8",
          "TT",
          "TT RS",
          "TTS"
        ]
      },
      {
        label: "Aston Martin",
        models: [
          "DB11",
          "DB2/4",
          "DB5",
          "DB7",
          "DB9",
          "DBS",
          "DBX",
          "Lagonda",
          "Rapide",
          "V12",
          "V8",
          "Vanquish",
          "Vantage"
        ]
      },
      {
        label: "BMW",
        models: [
          "1 Series",
          "1 Series M",
          "2 Seires",
          "2800",
          "3 Series",
          "4 Series",
          "5 Series",
          "6 Series",
          "7 Series",
          "8 Series",
          "i3",
          "i8",
          "M",
          "M2",
          "M3",
          "M4",
          "M5",
          "M6",
          "M8",
          "X1",
          "X2",
          "X3",
          "X3 M",
          "X4",
          "X4 M",
          "X5",
          "X5 M",
          "X6",
          "X6 M",
          "X7",
          "Z3",
          "Z4",
          "Z4 M"
        ]
      },
      {
        label: "Chevrolet",
        models: [
          "3100",
          "Apache",
          "Avalanche",
          "Bel Air",
          "Biscayne",
          "Blazer",
          "C10",
          "C30",
          "Camaro",
          "Caprice",
          "Chevelle",
          "Confederate",
          "Corvair",
          "Confederate",
          "Corvair",
          "Corvette",
          "El Camino",
          "Impala",
          "Kommando",
          "Master",
          "Monte Carlo",
          "Nova",
          "Panel Truck",
          "Sedan Delivery",
          "Silverado",
          "Standard",
          "Styleline",
          "Suburban",
          "Superior",
          "Tourer",
          "Two-Ten"
        ]
      },
      {
        label: "Chrysler",
        models: [
          "300",
          "300c",
          "62",
          "Crossfire",
          "Crown Imperial",
          "Fifth Avenue",
          "Grand Voyager",
          "Neon",
          "New York",
          "PT Cruiser",
          "Royal",
          "Sebring",
          "Valiant",
          "Valiant Charger",
          "Valiant Regal",
          "Voyager",
          "Wayfarer",
          "Windsor"
        ]
      },
      {
        label: "Citroen",
        models: [
          "2CV",
          "Berlingo",
          "BX",
          "C2",
          "C3",
          "C3 Aircross",
          "C4",
          "C4 Cactus",
          "C5",
          "C5 Aircross",
          "C6",
          "D",
          "Dispatch",
          "DS-23",
          "DS3",
          "DS4",
          "DS5",
          "Grand C4 Picasso",
          "SM"
        ]
      },
      {
        label: "Daewoo",
        models: [
          "BH117",
          "Cielo",
          "Kalos",
          "Lacetti",
          "Lanos",
          "Matiz",
          "Nubira",
          "Tacuma"
        ]
      },
      {
        label: "Daihatsu",
        models: [
          "Atrai",
          "Charade",
          "Cuore",
          "Feroza II",
          "Move",
          "Pyzar",
          "Sirion",
          "Terios",
          "YRV"
        ]
      },
      {
        label: "Dodge",
        models: [
          "AT4",
          "Avenger",
          "Caliber",
          "Challenger",
          "Charger",
          "D8",
          "Dart",
          "Four",
          "Journey",
          "Luxury Liner",
          "Nitro",
          "Phoenix",
          "Pickup",
          "Polara",
          "Ram",
          "Viper"
        ]
      },
      {
        label: "Fiat",
        models: [
          "1100",
          "124",
          "128",
          "130",
          "131",
          "1500",
          "500",
          "500C",
          "500X",
          "501",
          "521",
          "600",
          "Doblo",
          "Ducato",
          "Freemont",
          "Panda",
          "Punto",
          "Ritman",
          "Scudo",
          "Stilo",
          "X1/9"
        ]
      },
      {
        label: "Ford",
        models: [
          "Anglia",
          "Bronco",
          "Capri",
          "Corsair",
          "Cortina",
          "Cougar",
          "Courier",
          "Crestline",
          "De Luxe",
          "Econoline",
          "Econovan",
          "EcoSport",
          "Endura",
          "Escape",
          "Escort",
          "Everest",
          "F-1",
          "F100",
          "F150",
          "F250",
          "F350",
          "F450",
          "Fairlane",
          "Fairmont",
          "Falcon",
          "Falcon Ute",
          "Festiva",
          "Fiesta",
          "Focus",
          "GT40",
          "Ka",
          "Kuga",
          "Laser",
          "LTD",
          "Mainline",
          "Meteor",
          "Model A",
          "Model B",
          "Model T",
          "Mondeo",
          "Mustang",
          "Probe",
          "Puma",
          "Raider",
          "Ranchero",
          "Ranger",
          "TE50",
          "Telstar",
          "Telstar TX5",
          "Territory",
          "Thunderbird",
          "Tourneo Connect",
          "Tourneo Custom",
          "Transit",
          "Transit Custom",
          "TS50",
          "V-8",
          "Zephyr"
        ]
      },
      {
        label: "Ford Performance Vehicles",
        models: [
          "F6",
          "F6 E",
          "F6 Tornado",
          "F6 Typhoon",
          "F6X",
          "GS",
          "GT",
          "GT-F",
          "GT-E",
          "GT-P",
          "Pursuit",
          "Super Pursuit"
        ]
      },
      {
        label: "Great Wall",
        models: ["Steed", "V200", "V240", "X200", "X240"]
      },
      { label: "Hino", models: ["300 Series", "500 Series"] },
      {
        label: "Holden",
        models: [
          "Acadia",
          "Adventra",
          "Apollo",
          "Astra",
          "Barina",
          "Barina Spark",
          "Berlina",
          "Brock",
          "Brougham",
          "Calais",
          "Camira",
          "Caprice",
          "Captiva",
          "Cascada",
          "Colorado",
          "Colorado",
          "Combo",
          "Commodore",
          "Crewman",
          "Cruze",
          "EH",
          "EJ",
          "EK",
          "Epica",
          "EQuinox",
          "FC",
          "FE",
          "FJ",
          "HR",
          "Insignia",
          "Jackaroo",
          "Kindswoo",
          "Malibu",
          "Monaro",
          "Monterey",
          "Nova",
          "One tonner",
          "Piazza",
          "Premier",
          "Rodeo",
          "Sandman",
          "Spark",
          "Statesman",
          "Suburban",
          "Tigra",
          "Torana",
          "Trailblazer",
          "Trax",
          "Ute",
          "Vectra",
          "VG",
          "Viva",
          "Volt",
          "WB",
          "Zafira"
        ]
      },
      {
        label: "Holden Special Vehicles",
        models: [
          "Avalanche",
          "Clubsport",
          "Colorado",
          "Commodore",
          "Coupe",
          "Grange",
          "GTS",
          "Maloo",
          "Senator",
          "SV Clubsport",
          "SV99",
          "VXR",
          "XU6"
        ]
      },
      {
        label: "Honda",
        models: [
          "Accord",
          "Accord Euro",
          "Beat",
          "City",
          "Civic",
          "Concerto",
          "CR-V",
          "CR-Z",
          "CRX",
          "Fit",
          "HR-V",
          "Insight",
          "Integra",
          "Jazz",
          "Legend",
          "MDX",
          "NSX",
          "Odyssey",
          "Prelude",
          "S2000",
          "S660",
          "Stepwgn"
        ]
      },
      {
        label: "Hyundai",
        models: [
          "Accent",
          "Coupe",
          "Elantra",
          "Excel",
          "Genesis",
          "Getz",
          "Grandeur",
          "i20",
          "i30",
          "i40",
          "i45",
          "iLoad",
          "iMax",
          "IONIQ",
          "ix35",
          "Kona",
          "Lantra",
          "Mighty",
          "Santa Fe",
          "Terracan",
          "Tiburon",
          "Trajet",
          "Tucson",
          "Veloster",
          "Venue"
        ]
      },
      {
        label: "INFINITI",
        models: [
          "FX30d",
          "FX50",
          "G37",
          "M30d",
          "M35h",
          "Q30",
          "Q50",
          "Q60",
          "Q70",
          "QX30",
          "QX70",
          "QX80"
        ]
      },
      {
        label: "Isuzu",
        models: ["D-MAX", "F Series", "MU", "MU-X", "N Series"]
      },
      {
        label: "Jaguar",
        models: [
          "240",
          "420",
          "420G",
          "D Type",
          "E Type",
          "E-PACE",
          "F-PACE",
          "F-TYPE",
          "I-PACE",
          "Mark II",
          "Mark IV",
          "Mark IX",
          "Mark V",
          "Mark VII",
          "Mark VIII",
          "Mark X",
          "XE",
          "XF",
          "XJ",
          "XJ-SC",
          "XJ12",
          "XJ220",
          "XJ4.2",
          "XJ5.3",
          "XJ6",
          "XJ8",
          "XJR",
          "XJS",
          "XK",
          "XK120",
          "XK140",
          "XK150",
          "XK8",
          "XKR"
        ]
      },
      {
        label: "Jeep",
        models: [
          "Cherokee",
          "CJ7",
          "Commander",
          "Compass",
          "Gladiator",
          "Grand Cherokee",
          "Patriot",
          "Renegade",
          "Wrangler"
        ]
      },
      {
        label: "Kia",
        models: [
          "Carnival",
          "Cerato",
          "Ceres",
          "Grand Carnival",
          " K2700",
          "K2900",
          "Magentis",
          "Optima",
          "Picanto",
          "Pregio",
          "Rio",
          "Rondo",
          "Seltos",
          "Sorento",
          "Soul",
          "Spectra",
          "Sportage",
          "Stinger"
        ]
      },
      {
        label: "Land Rover",
        models: [
          "110",
          "Defender",
          "Discovery",
          "Discovery 3",
          "Discovery 4",
          "Discovery Sport",
          "Freelander",
          "Freelander 2",
          "Range Rover",
          "Range Raover Evoque",
          "Range Rover Sport",
          "Range Rover Velar",
          "Range Rover Vogue",
          "Rover"
        ]
      },
      {
        label: "Lexus",
        models: [
          "CT",
          "ES",
          "GS",
          "IS",
          "LC",
          "LS",
          "LX",
          "NX",
          "RC",
          "SC",
          "UX"
        ]
      },
      {
        label: "Maserati",
        models: [
          "3200GT",
          "3500GT",
          "Coupe",
          "Ghibli",
          "GranCabrio",
          "Gransport",
          "GranTurismo",
          "Indy",
          "Levante",
          "Quattroporte",
          "Shamal",
          "Spyder"
        ]
      },
      {
        label: "McLaren",
        models: [
          "540C",
          "570GT",
          "570S",
          "600LT",
          "650",
          "675LT",
          "720S",
          "GT",
          "MP4-12C"
        ]
      },
      {
        label: "Mazda",
        models: [
          "1000",
          "1200",
          "121",
          "2",
          "3",
          "323",
          "6",
          "808",
          "929",
          "B2600",
          "Bongo",
          "Bravo",
          "BT-50",
          "Cosmo",
          "CX-3",
          "CX-30",
          "CX-5",
          "CX-8",
          " CX9",
          "E1800",
          "E2000",
          "Eunos 30X",
          " Eunos 800",
          "MPV",
          "MX-5",
          " MX-6",
          "Premacy",
          "R100",
          "RX-3",
          "RX-4",
          "RX-7",
          "RX-8",
          "Tribute"
        ]
      },
      {
        label: "Mercedes-Benz",
        models: [
          "170S",
          "180E",
          "190B",
          "190E",
          "190SL",
          "220S",
          "220SE",
          "220SEb",
          "230",
          "230CE",
          "230E",
          "230SL",
          "250",
          "250CE",
          "250S",
          "250SE",
          "250SL",
          "260",
          "280CE",
          "280E",
          "280S",
          "280SE",
          "280SEL",
          "280SL",
          "280SLC",
          "300b",
          "300CE",
          "300CE-24",
          "300D",
          "300E",
          "300SE",
          "300SEL",
          "300SL-24",
          "300TE",
          "320CE",
          "320E",
          "350SL",
          "380SE",
          "380SEC",
          "380SEL",
          "380SL",
          "400SE",
          "420SEL",
          "450SEL",
          "450SL",
          "450SLC",
          "500SE",
          " 500SEC",
          "500SL",
          " 560SEL",
          "560SL",
          "600",
          "600SL",
          "A-Class",
          "AMG GT",
          " B-Class",
          "C-Class",
          "CL-Class",
          "CLA-Class",
          "CLC-Class",
          "CLK-CLass",
          "CLS-Class",
          "E-Class",
          "EQC",
          "G-CLass",
          "GL-Class",
          "GLA-CLass",
          "GLB-Class",
          "GLC-Class",
          "GLE-Class",
          "GLS-CLass",
          "M-Class",
          "Marco Polo ACTIVITY",
          "MB100",
          "MB140",
          "O 319",
          "R-Class",
          "S-Class",
          "SL-Class",
          "SLC-Class",
          "SLK-Class",
          "SLS-Class",
          " Sprinter",
          " V-Class",
          "Valente",
          "Viano",
          "Vito",
          "X-Class"
        ]
      },
      {
        label: "MG",
        models: [
          "1100",
          "A",
          "B",
          "C",
          "F",
          "GS",
          "HS",
          "Magnette",
          "MG3",
          "MG6",
          "MG6 PLUS",
          "Midget",
          "One And A Quarter",
          "PA",
          "RV8",
          "TC",
          "TD",
          "TF",
          "ZS",
          "ZST",
          "ZT"
        ]
      },
      {
        label: "Mini",
        models: [
          "Cabrio",
          "Clubman",
          "Convertible",
          "Countryman",
          "Coupe",
          "Hatch",
          "Paceman",
          "Roadster"
        ]
      },
      {
        label: "Mitsubishi",
        models: [
          "3000GT",
          "380",
          "Airtrek",
          "ASX",
          "Canter",
          "Challenger",
          "Colt",
          "Colt Galant",
          "Delica",
          "Eclipse Cross",
          "Express",
          "FTO",
          "Grandis",
          "GTO",
          "i-MiEV",
          "Lancer",
          "Magna",
          "Mirage",
          "Nimbus",
          "Outlander",
          "Pajero",
          "Pajero iO",
          "Pajero Sport",
          "Ralliart Evo",
          "Ralliart Magna",
          "ROSA BUS",
          "Sigma",
          "Starion",
          "Starwagon",
          "Triton",
          "Verada"
        ]
      },
      {
        label: "Nissan",
        models: [
          "1200",
          "200SX",
          "280ZX",
          "300ZX",
          "350Z",
          "370Z",
          "Almera",
          "Altima",
          "Bluebird",
          "Caravan",
          "Cedric",
          "Cima",
          "Civilian",
          "Cube",
          "Dualis",
          "e-NV200",
          "Elgrand",
          "Fairlady Z",
          "Figaro",
          "Fuga",
          "Gloria",
          "GT-R",
          "JUKE",
          "LEAF",
          "Maxima",
          "Micra",
          "Murao",
          "Navara",
          "Note",
          "NX",
          "Pathfinder",
          "Patrol",
          "Pintara",
          "Pulsar",
          "QASHQAI",
          "S Cargo",
          "Serena",
          "Silvia",
          "Skyline",
          "Stagea",
          "Terrano",
          "Tiida",
          "Titan XD",
          "Urvan",
          "Vanette",
          "X-TRAIL"
        ]
      },
      {
        label: "Proton",
        models: ["Exora", "Gen2", "Jumbuck", "Persona", "Preve", "S16", "Savvy"]
      },
      {
        label: "Peugeot",
        models: [
          "2008",
          "205",
          "206",
          "207",
          "208",
          "3008",
          "306",
          "307",
          "308",
          "4007",
          "4007",
          "406",
          "407",
          "5008",
          "505",
          "508",
          "607",
          "Boxer",
          "Expert",
          "Partner",
          "RCZ"
        ]
      },
      {
        label: "Porsche",
        models: [
          "356",
          "356A",
          "356B",
          "550",
          "718",
          "911",
          "912",
          "914",
          "924",
          "928",
          "930",
          "944",
          "968",
          "Boxster",
          "Carrera GT",
          "Cayenne",
          "Macan",
          "Panamera",
          "Taycan"
        ]
      },
      {
        label: "Renault",
        models: [
          "5",
          "750",
          "Captur",
          "Clio",
          "Fluence",
          "Grand scenic",
          "Kadjar",
          "Kangoo",
          "Koleos",
          "Laguna",
          "Latitude",
          "Master",
          "Megane",
          "R8",
          "Scenic",
          "Trafic",
          "Zoe"
        ]
      },
      {
        label: "SsangYong",
        models: [
          "Actyon",
          "Actyon Sports",
          "Korando",
          "Kyron",
          "Musso",
          "Rexton",
          "Stavic",
          "Tivoli",
          "Tivoli XLV"
        ]
      },
      {
        label: "Suburu",
        models: [
          "Brumby",
          "BRZ",
          "Forester",
          "Impreza",
          "Legacy",
          "Levorg",
          "Liberty",
          "Outback",
          "Tribeca",
          "WRX",
          "XV"
        ]
      },
      {
        label: "Suzuki",
        models: [
          "Alto",
          "APV",
          "Baleno",
          "Cappucino",
          "Carry",
          "Celerio",
          "Grand Vitara",
          "Ignis",
          "Jimny",
          "Kizashi",
          "Liana",
          "S-Cross",
          "Sierra",
          "Swift",
          "SX-4",
          "Vitara",
          "X-90",
          "XL-7"
        ]
      },
      { label: "Tesla", models: ["Model 3", "Model S", "Model X"] },
      {
        label: "Toyota",
        models: [
          "4Runner",
          "86",
          "Alphard",
          "Aurion",
          "Avalon",
          "Avensis Verso",
          "bB",
          "C-HR",
          "Caldina",
          "Camry",
          "Celica",
          "Century",
          "Chaser",
          "Coaster",
          "Corolla",
          "Corona",
          "Cressida",
          "Crown",
          "Dyna",
          "Echo",
          "Esquire",
          "Estima",
          "FJ Cruiser",
          "Frotuna",
          "Grand Hiace",
          "Granvia",
          "Hiace",
          "Hiace SBV",
          "Hilux",
          "Hilux Surf",
          "IQ",
          "Kluger",
          "Landcruiser",
          "Landcruiser Prado",
          "Lexcen",
          "Mark II",
          "Mark X",
          "MR2",
          "Noah",
          "Paseo",
          "Porte",
          "Prius",
          "Prius C",
          "Prius V",
          "Ractis",
          "Regius",
          "Rukus",
          "Soarer",
          "Spacia",
          "Spade",
          "Sprinter",
          "Starlet",
          "Supra",
          "Tarago",
          "Townace",
          "Tundra",
          "Vellfire",
          "Vienta",
          "Voxy",
          "Yaris"
        ]
      },
      { label: "TRD", models: ["Aurion", "Hilux"] },
      {
        label: "Volkswagon",
        models: [
          "1500",
          "1600",
          "Amarok",
          "Arteon",
          "Beetle",
          "Bora",
          "Caddy",
          "Caravelle",
          "CC",
          "Crafter",
          "Eos",
          "Golf",
          "Jetta",
          "Karmann Ghia",
          "Kombi Transporter",
          "Multivan",
          "Passat",
          "Polo",
          "Scirocco",
          "Superbug",
          "T-Cross",
          "T-Roc",
          "Tiguan",
          "Touareg",
          "Transporter",
          "up!"
        ]
      },
      {
        label: "Volvo",
        models: [
          "122S",
          "240",
          "245",
          "440",
          "850",
          "940",
          "C30",
          "C70",
          "Cross Country",
          "P1800",
          "S40",
          "S60",
          "S70",
          "S80",
          "S90",
          "V40",
          "V40 Cross Country",
          "V50",
          "V60",
          "V70",
          "V90 Cross Country",
          "XC40",
          "XC60",
          "XC70",
          "XC90"
        ]
      }
    ]
  },
  mutations: {
    // storeForm(state, n) {
    //   // state.form = n;
    //   // state.form.make = "Vehicle Make";
    //   // state.form.model = "Vehicle Model";
    // }
  },
  actions: {},
  modules: {}
});
