Page({
  data: {},
  /**
   * 提交事件
   */
  formSubmit(e: any) {
    console.log(e.detail.value);
    // 1. 获取数据
    // 2. 处理数据
    // 3. 提交数据，数据的返回，然后做什么
  },
  /**
   * 重置事件
   */
  formReset(e: any) {
    console.log(e);
  },
});
