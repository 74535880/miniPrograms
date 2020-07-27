Page({
  data: {
    cangotop: false,
  },
  /**
   * 页面滚动触发事件
   * @param e
   */
  onPageScroll(e: any) {
    const scrollTop = e.scrollTop;
    if (scrollTop >= 100) {
      // 单位是px
      this.setData({ cangotop: true });
    } else {
      this.setData({ cangotop: false });
    }
  },
});
