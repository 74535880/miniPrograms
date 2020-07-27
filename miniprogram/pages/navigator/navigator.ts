Page({
  /**
   * 这是通过api接口进行跳转，而不是通过wxml跳转。
   */
  tabBarNavigator() {
    //   跳转到tabBar页面，关闭所有的非tabBar页面
    wx.switchTab({
      url: "/pages/index/index",
    });
  },
  otherNavigator() {
    //   其他类型的跳转，关闭当前的页面，然后，跳到其他的，但是不能跳到tabBar页面
    wx.redirectTo({
      url: "/pages/index/index",
    });
  },
});
