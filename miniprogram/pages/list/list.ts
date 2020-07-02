Page({
  data: {
    name: "cmw",
    age: 22,
    isAutoPlay: true,
    contentList: [
      "demo1",
      "demo2",
      "demo3",
      "demo4",
      "demo5",
      "demo6",
      "demo7",
      "demo8",
    ],
    isNowId: 0,
    newsNumbers: 100,
    articleNumbers: 3,
  },
  // 在这个生命周期获取数据最快的
  onLoad() {
    console.log("this is onLoad");
  },
  // 页面展示出来了
  onShow() {
    console.log("this is onShow");
  },
  getImage(event: object) {
    console.log(event);
  },
  stopPlay() {
    if (this.data.isAutoPlay === false) {
      return;
    }
    this.setData({
      ...this.data,
      isAutoPlay: false,
    });
  },
  startPlay() {
    if (this.data.isAutoPlay == true) {
      return;
    }
    this.setData({
      ...this.data,
      isAutoPlay: true,
    });
  },
  //   获取更多的信息
  getMoreNews() {
    this.setData({
      ...this.data,
      articleNumbers: this.data.articleNumbers + 10,
    });
  },
  //   下拉触底事件
  onReachBottom() {
    this.setData({
      ...this.data,
      articleNumbers: this.data.articleNumbers + 10,
    });
  },
  changePage(event: any) {
    const {
      currentTarget: {
        dataset: { index },
      },
    } = event;

    this.setData({
      ...this.data,
      isNowId: index,
    });
  },
});
