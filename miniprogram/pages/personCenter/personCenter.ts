Page({
  // 表单数据变量
  personName: "",
  password: "",
  gender: "",
  hobby: "",
  birthday: "",
  workYears: "",
  isMenber: "",
  data: {},
  /**
   * 获取姓名
   * @param e
   */
  getName(e: any) {
    const { value } = e.detail;
    this.personName = value;
    console.log(this.personName);
  },
  getPassword(e: any) {
    const { value } = e.detail;
    this.password = value;
    console.log(value);
  },
  bindSexChange(e: any) {
    const { value } = e.detail;
    this.gender = value;
    console.log(value);
  },
  bindSubmit(e: any) {
    console.log(e.detail);
  },
});
