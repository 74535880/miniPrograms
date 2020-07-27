"use strict";
Page({
    onLoad: function () {
        wx.startCompass({
            success: function () {
                console.log("罗盘开始监听");
                wx.onCompassChange(function (res) {
                    console.log(res);
                });
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbXBhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUNILE1BQU07UUFDSixFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLEVBQUUsQ0FBQyxlQUFlLENBQUMsVUFBQyxHQUFHO29CQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG4gIG9uTG9hZCgpIHtcbiAgICB3eC5zdGFydENvbXBhc3Moe1xuICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIue9l+ebmOW8gOWni+ebkeWQrFwiKTtcbiAgICAgICAgd3gub25Db21wYXNzQ2hhbmdlKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG59KTtcbiJdfQ==