const menuList = ["选项1", "选项2", "选项3", "选项4", "选项5"];
Page({
  data: {
    isShow: false,
  },
  userAction() {
    wx.showActionSheet({
      itemList: menuList,
      itemColor: "#ccc",
      success: (res) => {
        console.log(res);
        if (res.tapIndex === 0) {
          wx.showLoading({
            title: "正在跳转",
          });
          setTimeout(() => {
            wx.navigateTo({
              url: "/pages/workOrder/workOrder",
              success: (res) => {
                console.log("页面跳转成功", res);
                this.setData({ isShow: !this.data.isShow });
                wx.hideLoading();
                wx.showToast({ title: "跳转成功" });
              },
            });
          }, 1400);
          // 手工填写表单
        }
      },
      fail: (err) => {
        console.log(err);
      },
    });
  },
  hurryUp() {
    setTimeout(() => {
      wx.showToast({
        title: "已经帮你催办了，请稍等",
        icon: "success",
        duration: 3000,
        success: (res) => {
          // 数据的存储
          console.log("progress", res);
        },
        fail: (err) => {
          wx.showToast({
            title: "很抱歉，我们倒逼哦",
            icon: "none",
            success: (res) => {
              console.log(err, res);
            },
          });
        },
        complete: (res) => {
          this.setData({ isShow: !this.data.isShow });
        },
      });
    }, 2000);
  },
});
