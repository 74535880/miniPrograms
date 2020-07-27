"use strict";
Page({
    data: {
        src: "",
    },
    camera: function () {
        var _this = this;
        var ctx = wx.createCameraContext();
        ctx.takePhoto({
            quality: "high",
            success: function (res) {
                _this.setData({ src: res.tempImagePath });
            },
            fail: function (err) {
                console.log(err);
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FtZXJhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0QsTUFBTTtRQUFOLGlCQWFDO1FBWEMsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFckMsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUNaLE9BQU8sRUFBRSxNQUFNO1lBQ2YsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBzcmM6IFwiXCIsXG4gIH0sXG4gIGNhbWVyYSgpIHtcbiAgICAvLyAgIOiOt+WPluebuOacuuWvueixoVxuICAgIGNvbnN0IGN0eCA9IHd4LmNyZWF0ZUNhbWVyYUNvbnRleHQoKTtcbiAgICAvLyDpgJrov4fmjqXlj6PosIPnlKjmi43nhafmlrnms5VcbiAgICBjdHgudGFrZVBob3RvKHtcbiAgICAgIHF1YWxpdHk6IFwiaGlnaFwiLFxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoeyBzcmM6IHJlcy50ZW1wSW1hZ2VQYXRoIH0pO1xuICAgICAgfSxcbiAgICAgIGZhaWwoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxufSk7XG4iXX0=