Page({
  data: {
    isDown: false,
    percent: 0,
  },
  /**
   * 开始下载
   */
  startDown() {
    this.setData({
      isDown: true,
      percent: 100,
    });
  },
});
