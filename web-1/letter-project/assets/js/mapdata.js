var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#000000",
    popups: "detect",
    
    //State defaults
    state_description: "State Description",
    state_color: "#88A4BC",
    state_hover_color: "#ff0000",
    state_url: "",
    border_size: "2.0",
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      hide: "yes"
    },
    AK: {
      name: "Alaska",
      hide: "yes"
    },
    FL: {
      name: "Florida",
      hide: "yes"
    },
    NH: {
      name: "New Hampshire",
      hide: "yes"
    },
    VT: {
      name: "Vermont",
      hide: "yes"
    },
    ME: {
      name: "Maine",
      hide: "yes"
    },
    RI: {
      name: "Rhode Island",
      hide: "yes"
    },
    NY: {
      name: "New York",
      hide: "yes"
    },
    PA: {
      name: "Pennsylvania",
      hide: "yes"
    },
    NJ: {
      name: "New Jersey",
      hide: "yes"
    },
    DE: {
      name: "Delaware",
      hide: "yes"
    },
    MD: {
      name: "Maryland",
      hide: "yes"
    },
    VA: {
      name: "Virginia",
      hide: "yes"
    },
    WV: {
      name: "West Virginia",
      hide: "yes"
    },
    OH: {
      name: "Ohio",
      hide: "yes"
    },
    IN: {
      name: "Indiana",
      hide: "yes"
    },
    IL: {
      name: "Illinois",
      hide: "yes"
    },
    CT: {
      name: "Connecticut",
      hide: "yes"
    },
    WI: {
      name: "Wisconsin",
      hide: "yes"
    },
    NC: {
      name: "North Carolina",
      hide: "yes"
    },
    DC: {
      name: "District of Columbia",
      hide: "yes"
    },
    MA: {
      name: "Massachusetts",
      hide: "yes"
    },
    TN: {
      name: "Tennessee",
      hide: "yes"
    },
    AR: {
      name: "Arkansas",
      hide: "no",
      zoomable: "yes",
      color: "white"
    },
    MO: {
      name: "Missouri",
      hide: "yes"
    },
    GA: {
      name: "Georgia",
      hide: "yes"
    },
    SC: {
      name: "South Carolina",
      hide: "yes"
    },
    KY: {
      name: "Kentucky",
      hide: "yes"
    },
    AL: {
      name: "Alabama",
      hide: "yes"
    },
    LA: {
      name: "Louisiana",
      hide: "yes"
    },
    MS: {
      name: "Mississippi",
      hide: "yes"
    },
    IA: {
      name: "Iowa",
      hide: "yes"
    },
    MN: {
      name: "Minnesota",
      hide: "yes"
    },
    OK: {
      name: "Oklahoma",
      hide: "yes"
    },
    TX: {
      name: "Texas",
      hide: "yes"
    },
    NM: {
      name: "New Mexico",
      hide: "yes"
    },
    KS: {
      name: "Kansas",
      hide: "yes"
    },
    NE: {
      name: "Nebraska",
      hide: "yes"
    },
    SD: {
      name: "South Dakota",
      hide: "yes"
    },
    ND: {
      name: "North Dakota",
      hide: "yes"
    },
    WY: {
      name: "Wyoming",
      hide: "yes"
    },
    MT: {
      name: "Montana",
      hide: "yes"
    },
    CO: {
      name: "Colorado",
      hide: "yes"
    },
    UT: {
      name: "Utah",
      hide: "yes"
    },
    AZ: {
      name: "Arizona",
      hide: "yes"
    },
    NV: {
      name: "Nevada",
      hide: "yes"
    },
    OR: {
      name: "Oregon",
      hide: "yes"
    },
    WA: {
      name: "Washington",
      hide: "yes"
    },
    CA: {
      name: "California",
      hide: "yes"
    },
    MI: {
      name: "Michigan",
      hide: "yes"
    },
    ID: {
      name: "Idaho",
      hide: "yes"
    },
    GU: {
      name: "Guam",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes"
    },
    AS: {
      name: "American Samoa",
      hide: "yes"
    }
  },
  locations: {
    "0": {
      lat: "34.2354",
      lng: "-91.2891",
      name: "Arkansas County",
      description: "Arkansas County",
      color: "Black",
      url: "https://mobile-web-2020.schluterman.repl.co/letter-project/counties/arkansas.html"
    },
    "1": {
      lat: "34.7592",
      lng: "-91.9099",
      name: "Lonoke County",
      color: "Black",
      description: "Lonoke County",
      url: "https://mobile-web-2020.schluterman.repl.co/letter-project/counties/lonoke.html"
    },
    "2": {
      lat: "35.2727",
      lng: "-92.4421",
      name: "Conway County",
      description: "Conway County",
      color: "Black",
      url: "https://mobile-web-2020.schluterman.repl.co/letter-project/counties/conway.html"
    },
    "3": {
      lat: "34.7539",
      lng: "-92.2237",
      name: "Pulaski County",
      color: "Black",
      description: "Pulaski County",
      url: "https://mobile-web-2020.schluterman.repl.co/letter-project/counties/pulaski.html"
    },
    "4": {
      lat: "35.2901",
      lng: "-91.7539",
      name: "White County",
      color: "Black",
      description: "White County",
      url: "https://mobile-web-2020.schluterman.repl.co/letter-project/counties/white.html"
    }
  },
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "no"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "no"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "no"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "no"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "no"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "no"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "no"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "no"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "no"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes",
      display: "no"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368",
      scale: "yes",
      display: "all"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  regions: {}
};