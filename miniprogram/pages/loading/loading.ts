Page({
  data: {
    hidden: true,
  },
  loadingChange: function () {
    this.setData({
      hidden: true,
    });
    console.log("loadingChange");
  },
  loadingTap: function () {
    this.setData({
      hidden: false,
    });
  },
  /**
   * 展示消息提示框
   */
  getShowTost() {
    wx.showToast({
      title: "正在加载",
      icon: "success",
      mask: true,
      duration: 2000,
      success: (res) => {
        console.log(res);
      },
    });
  },
  closeLoading() {
    wx.hideLoading();
  },
  showModal() {
    wx.showModal({
      title: "这是一个模态对话框",
      content: "你到底想要什么东西",
      success: (res) => {
        if (res.confirm) {
          console.log("用户点击了确定");
        } else {
          console.log("用户点击了取消");
        }
      },
    });
  },
});
