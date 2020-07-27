"use strict";
Page({
    data: {
        chooseImages: [
            "https://i.pinimg.com/236x/05/06/ab/0506abdd3341a7dfe59cc0e045be0c4c.jpg",
        ],
        imgUrl: "",
        downloadImg: "",
    },
    chooseImg: function () {
        var _this = this;
        wx.chooseImage({
            success: function (res) {
                console.log(res);
                _this.setData(_this.data.chooseImages.concat(res.tempFilePaths));
            },
        });
    },
    getImgInfo: function () {
        var _this = this;
        wx.getImageInfo({
            src: "https://i.pinimg.com/236x/05/06/ab/0506abdd3341a7dfe59cc0e045be0c4c.jpg",
            success: function (res) {
                console.log(res);
                _this.setData({ imgUrl: res.path });
            },
        });
    },
    previewImg: function () {
        wx.previewImage({
            urls: this.data.chooseImages,
            current: "https://i.pinimg.com/236x/a8/7d/d6/a87dd6345153760adb0b12dc0ce8513c.jpg",
            success: function (res) {
                console.log(res);
            },
        });
    },
    downloadImage: function () {
        var _this = this;
        wx.downloadFile({
            url: "https://i.pinimg.com/236x/a8/7d/d6/a87dd6345153760adb0b12dc0ce8513c.jpg",
            success: function (res) {
                if (res.statusCode === 200) {
                    console.log(res.tempFilePath);
                    _this.setData({
                        downloadImg: res.tempFilePath,
                    });
                }
            },
        });
    },
    saveImg: function () {
        wx.saveImageToPhotosAlbum({
            filePath: this.data.downloadImg,
            success: function (res) {
                console.log("保存成功", res);
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixZQUFZLEVBQUU7WUFDWix5RUFBeUU7U0FDMUU7UUFDRCxNQUFNLEVBQUUsRUFBRTtRQUNWLFdBQVcsRUFBRSxFQUFFO0tBQ2hCO0lBSUQsU0FBUztRQUFULGlCQU9DO1FBTkMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLE9BQU8sQ0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBSyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbEUsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxVQUFVO1FBQVYsaUJBU0M7UUFSQyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2QsR0FBRyxFQUNELHlFQUF5RTtZQUMzRSxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckMsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxVQUFVO1FBQ1IsRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDNUIsT0FBTyxFQUNMLHlFQUF5RTtZQUMzRSxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxhQUFhO1FBQWIsaUJBYUM7UUFaQyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2QsR0FBRyxFQUNELHlFQUF5RTtZQUMzRSxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxHQUFHLEVBQUU7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLFdBQVcsRUFBRSxHQUFHLENBQUMsWUFBWTtxQkFDOUIsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxPQUFPO1FBQ0wsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDL0IsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgY2hvb3NlSW1hZ2VzOiBbXG4gICAgICBcImh0dHBzOi8vaS5waW5pbWcuY29tLzIzNngvMDUvMDYvYWIvMDUwNmFiZGQzMzQxYTdkZmU1OWNjMGUwNDViZTBjNGMuanBnXCIsXG4gICAgXSxcbiAgICBpbWdVcmw6IFwiXCIsXG4gICAgZG93bmxvYWRJbWc6IFwiXCIsXG4gIH0sXG4gIC8qKlxuICAgKiDojrflj5blm77niYdcbiAgICovXG4gIGNob29zZUltZygpIHtcbiAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHRoaXMuc2V0RGF0YShbLi4udGhpcy5kYXRhLmNob29zZUltYWdlcywgLi4ucmVzLnRlbXBGaWxlUGF0aHNdKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIC8qKlxuICAgKiDojrflj5blm77niYfkv6Hmga9cbiAgICovXG4gIGdldEltZ0luZm8oKSB7XG4gICAgd3guZ2V0SW1hZ2VJbmZvKHtcbiAgICAgIHNyYzpcbiAgICAgICAgXCJodHRwczovL2kucGluaW1nLmNvbS8yMzZ4LzA1LzA2L2FiLzA1MDZhYmRkMzM0MWE3ZGZlNTljYzBlMDQ1YmUwYzRjLmpwZ1wiLFxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB0aGlzLnNldERhdGEoeyBpbWdVcmw6IHJlcy5wYXRoIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIOmihOiniOWbvueJh1xuICAgKi9cbiAgcHJldmlld0ltZygpIHtcbiAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgdXJsczogdGhpcy5kYXRhLmNob29zZUltYWdlcyxcbiAgICAgIGN1cnJlbnQ6XG4gICAgICAgIFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vMjM2eC9hOC83ZC9kNi9hODdkZDYzNDUxNTM3NjBhZGIwYjEyZGMwY2U4NTEzYy5qcGdcIixcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG4gIC8qKlxuICAgKiDkuIvovb3lm77niYdcbiAgICovXG4gIGRvd25sb2FkSW1hZ2UoKSB7XG4gICAgd3guZG93bmxvYWRGaWxlKHtcbiAgICAgIHVybDpcbiAgICAgICAgXCJodHRwczovL2kucGluaW1nLmNvbS8yMzZ4L2E4LzdkL2Q2L2E4N2RkNjM0NTE1Mzc2MGFkYjBiMTJkYzBjZTg1MTNjLmpwZ1wiLFxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50ZW1wRmlsZVBhdGgpO1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBkb3dubG9hZEltZzogcmVzLnRlbXBGaWxlUGF0aCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfSxcbiAgLyoqXG4gICAqIOS/neWtmOWIsOacrOacuuebuOWGjFxuICAgKi9cbiAgc2F2ZUltZygpIHtcbiAgICB3eC5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKHtcbiAgICAgIGZpbGVQYXRoOiB0aGlzLmRhdGEuZG93bmxvYWRJbWcsXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5L+d5a2Y5oiQ5YqfXCIsIHJlcyk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9LFxufSk7XG4iXX0=