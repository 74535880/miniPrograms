Page({
  // 定义坐标变量
  startX: 0,
  startY: 0,
  context: wx.createCanvasContext("my-canvas"),
  data: {
    pen: 2,
    color: "#008c8c",
  },
  // 触摸开始触发
  touchStart(e: any) {
    // 获取当前的坐标位置
    this.startX = e.changedTouches[0].x;
    this.startY = e.changedTouches[0].y;
    // 创建绘图上下文对象
    this.context = wx.createCanvasContext("my-canvas");
    // 设置颜色
    this.context.setStrokeStyle(this.data.color);
    // 设置笔触
    this.context.setLineWidth(this.data.pen);
    // 设置笔边
    this.context.setLineCap("round");
    // 开始绘画
    this.context.beginPath();
  },
  /**
   * 触摸的移动事件
   * @param e
   */
  touchMove(e: any) {
    const { x: moveX, y: moveY } = e.changedTouches[0];
    // 设置画笔移动到相应的点
    this.context.moveTo(this.startX, this.startY);
    // 绘制一条到x1，y1的直线
    this.context.lineTo(moveX, moveY);
    // 需要进行路径的描边(内存完成)
    this.context.stroke();

    // 重新设置坐标点
    this.startX = moveX;
    this.startY = moveY;
    // 绘制
    this.context.draw(true);
  },
  /**
   * 选取笔粗细的操作
   * @param e
   */
  penSelect(e: any) {
    this.setData({ pen: parseInt(e.currentTarget.dataset.param) });
  },
  /**
   * 选取颜色的操作
   * @param e
   */
  colorSelect(e: any) {
    this.setData({ color: e.currentTarget.dataset.color });
  },
});
