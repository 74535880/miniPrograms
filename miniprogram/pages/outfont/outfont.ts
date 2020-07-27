Page({
  data: {
    loaded: false,
    fontFamily: "Bitstream Vera Serif Bold",
  },
  onLoad() {
    this.setData({ loaded: false });
  },
  getfont() {
    console.log("getfont");
    //    加载外部字体,的api
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: `url("https://sungd.github.io/Pacifico.ttf")`,
      success: (res) => {
        this.setData({ loaded: true });
        console.log("success", res);
      },
      fail: (err) => {
        console.log("fail", err);
      },
      complete: (res) => {
        console.log("complete", res);
      },
    });
  },
});
