"use strict";
Page({
    takephoto: function () {
        var ctx = wx.createCameraContext();
        ctx.takePhoto({
            quality: "high",
            success: function (res) {
                wx.setStorage({
                    key: "photoPeople",
                    data: res.tempImagePath,
                });
                wx.redirectTo({
                    url: "/pages/case/photo",
                });
            },
            fail: function (err) { },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUNILFNBQVM7UUFDUCxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNyQyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ1osT0FBTyxFQUFFLE1BQU07WUFDZixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUVYLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLGFBQWE7b0JBQ2xCLElBQUksRUFBRSxHQUFHLENBQUMsYUFBYTtpQkFDeEIsQ0FBQyxDQUFDO2dCQUlILEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1osR0FBRyxFQUFFLG1CQUFtQjtpQkFDekIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUcsSUFBTSxDQUFDO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcbiAgdGFrZXBob3RvKCkge1xuICAgIGNvbnN0IGN0eCA9IHd4LmNyZWF0ZUNhbWVyYUNvbnRleHQoKTtcbiAgICBjdHgudGFrZVBob3RvKHtcbiAgICAgIHF1YWxpdHk6IFwiaGlnaFwiLFxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAvLyDorr7nva7liLDmiJHku6znmoTnvJPlrZjkuK3jgIJcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XG4gICAgICAgICAga2V5OiBcInBob3RvUGVvcGxlXCIsXG4gICAgICAgICAgZGF0YTogcmVzLnRlbXBJbWFnZVBhdGgsXG4gICAgICAgIH0pO1xuICAgICAgICBcblxuICAgICAgICAvLyDot7PovazpobXpnaJcbiAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgdXJsOiBcIi9wYWdlcy9jYXNlL3Bob3RvXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IChlcnIpID0+IHt9LFxuICAgIH0pO1xuICB9LFxufSk7XG4iXX0=