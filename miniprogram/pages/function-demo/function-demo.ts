Page({
  data: {
    canUse: true,
    inputValue: "",
  },
  bindBlur(e: any) {
    this.setData({ inputValue: e.detail.value });
  },
  isCanUse(e: any) {
    this.setData({
      canUse: wx.canIUse(this.data.inputValue),
    });
  },
});
