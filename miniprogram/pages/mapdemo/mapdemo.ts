Page({
  data: {
    mapCtx: wx.createMapContext("my-map"),
    longitude: 113.32452,
    latitude: 23.099994,
    markers: [
      {
        id: 1,
        latitude: 23.099994,
        longitude: 113.32452,
        title: "T.T.T创意园",
      },
    ],
  },
  bindMarker(e: any) {
    console.log(e);
  },
  onReady() {},
  onShow() {
    this.data.mapCtx = wx.createMapContext("my-map");
  },
  /**
   * 获取当前视图的中心点位置
   */
  getPosition() {
    this.data.mapCtx.getCenterLocation({
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.log(err);
      },
    });
  },
  /**
   * 直接去某个位置或是当前位置的大概位置
   */
  getMovePosition() {
    this.data.mapCtx.moveToLocation({
      success: (res) => {
        console.log(res);
      },
    });
  },
  /**
   * 移动标注
   */
  translaterMarker() {
    this.data.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      rotate: 0,
      duration: 2000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3245211,
      },
      //   移动完成之后的回调
      animationEnd() {
        console.log("end");
      },
    });
  },
  zoomPosition() {
    this.data.mapCtx.includePoints({
      points: [
        {
          latitude: 23.10229,
          longitude: 113.3345211,
        },
        {
          latitude: 23.00229,
          longitude: 113.3345211,
        },
      ],
      padding: [10],
    });
  },
});
