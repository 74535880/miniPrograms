const app = getApp();
const scantype = {
  QR_CODE: "二维码",
  AZTEC: "一维码",
  CODABAR: "一维码",
  CODE_39: "一维码",
  CODE_93: "一维码",
  CODE_128: "一维码",
  DATA_MATRIX: "二维码",
  EAN_8: "一维码",
  EAN_13: "一维码",
  ITF: "一维码",
  MAXICODE: "一维码",
  PDF_417: "二维码",
  RSS_14: "一维码",
  RSS_EXPANDED: "一维码",
  UPC_A: "一维码",
  UPC_E: "一维码",
  UPC_EAN_EXTENSION: "一维码",
  WX_CODE: "二维码",
  CODE_25: "一维码",
};
interface IScanResult {
  isShow: boolean;
  type: string;
  text: string;
  msg: string;
  date?: number;
}

Page({
  data: {
    scanResult: {
      isShow: false,
      type: "",
      text: "",
      msg: "",
    } as IScanResult,
  },
  /**
   * 扫一扫
   */
  onscan() {
    wx.scanCode({
      success: (res) => {
        console.log(res);
        let msg = "";
        if (res.scanType == "WX_CODE" && res.result === "") {
          msg = "我真是不知道怎么得到";
        }
        this.setData({
          scanResult: {
            isShow: true,
            type: scantype[res.scanType],
            text: res.result,
            msg,
          },
        });
        // 存入storage
        if (this.data.scanResult.text !== "") {
          wx.getStorage({
            key: "scanLogs",
            success: (res) => {
              console.log(res);
              let scanLogs = res.data || [];
              this.data.scanResult.date = Date.now();
              scanLogs.unshift(this.data.scanResult);
              wx.setStorageSync("scanLogs", scanLogs);
            },
          });
        }
      },
      fail: (res) => console.log(res),
    });
  },
});
