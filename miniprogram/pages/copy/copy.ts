Page({
  data: {
    detail: "dsdjfldshfodsd大锅饭的是非得失shfodhfo",
    val: "",
  },
  onLoad() {
    /**
     * 监听内存不足告警事件，res里面就是警告的等级，不代表小程序已经关闭，不会报给用户，会清空缓存
     */
    wx.onMemoryWarning((res) => {
      console.log(res);
    });
  },
  copy() {
    // 设置剪切板的内容
    wx.setClipboardData({
      data: this.data.detail,
      success: () => {
        wx.getClipboardData({
          success: (res) => {
            console.log(res);
          },
        });
      },
    });
  },
  blur(e: any) {
    this.setData({ val: e.detail.value });
  },
});
