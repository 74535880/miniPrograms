"use strict";
Page({
    onLoad: function () {
        var worker = wx.createWorker('workers/request/index.js');
        worker.onMessage(function (res) {
            console.log(res);
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsTUFBTTtRQUNKLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBvbkxvYWQoKSB7XG4gICAgY29uc3Qgd29ya2VyID0gd3guY3JlYXRlV29ya2VyKCd3b3JrZXJzL3JlcXVlc3QvaW5kZXguanMnKTtcbiAgICB3b3JrZXIub25NZXNzYWdlKHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIH0pO1xuICB9LFxufSk7XG4iXX0=