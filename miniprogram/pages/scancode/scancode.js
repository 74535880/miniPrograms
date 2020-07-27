"use strict";
Page({
    data: {
        imgData: "",
    },
    scanCode: function () {
        var _this = this;
        wx.scanCode({
            scanType: ["barCode", "qrCode", "datamatrix", "pdf417"],
            success: function (res) {
                console.log(res);
                _this.setData({
                    imgData: res.result,
                });
                console.log(_this.data.imgData);
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbmNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FuY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUNELFFBQVE7UUFBUixpQkFjQztRQWJDLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDVixRQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUM7WUFDdkQsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUlqQixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLE9BQU8sRUFBRSxHQUFHLENBQUMsTUFBTTtpQkFDcEIsQ0FBQyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgaW1nRGF0YTogXCJcIixcbiAgfSxcbiAgc2NhbkNvZGUoKSB7XG4gICAgd3guc2NhbkNvZGUoe1xuICAgICAgc2NhblR5cGU6IFtcImJhckNvZGVcIiwgXCJxckNvZGVcIiwgXCJkYXRhbWF0cml4XCIsIFwicGRmNDE3XCJdLFxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAvLyB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAvLyAgIHRpdGxlOiByZXMucmVzdWx0LFxuICAgICAgICAvLyB9KTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBpbWdEYXRhOiByZXMucmVzdWx0LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLmltZ0RhdGEpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbn0pO1xuICJdfQ==