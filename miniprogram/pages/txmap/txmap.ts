Page({
  data: {
    markers: [
      {
        id: 1,
        latitude: 23.10229,
        longitude: 113.32458,
        title: "goods",
        iconPath:
          "https://img.tukuppt.com/png_preview/00/42/51/sxfedHX6ar.jpg!/fw/780",
        width: 50,
        height: 50,
      },
    ],
    polygons: [
      {
        points: [
          { latitude: 23.10229, longitude: 113.32452 },
          { latitude: 23.10229, longitude: 113.3245211 },
        ],
        color: "#008c8c",
        width: 2,
        dettedline: true,
      },
    ],
  },
  markettap(e: any) {
    console.log(e);
  },
});
