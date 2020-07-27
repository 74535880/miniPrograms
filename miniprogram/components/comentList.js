"use strict";
Component({
    behaviors: [],
    properties: {
        id: {
            type: String,
            value: "10",
        },
    },
    lifetimes: {
        attached: function () {
            console.log(this.id);
            console.log("attached");
        },
        moved: function () {
            console.log("movied");
        },
        detached: function () {
            console.log("detached");
        },
    },
    pageLifetimes: {
        show: function () {
            console.log("show");
        },
        hide: function () {
            console.log("hide");
        },
        resize: function () {
            console.log("resize");
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tZW50TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbWVudExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUNSLFNBQVMsRUFBRSxFQUFFO0lBQ2IsVUFBVSxFQUFFO1FBQ1YsRUFBRSxFQUFFO1lBQ0YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUU7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFDRCxLQUFLLEVBQUU7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFDRCxRQUFRLEVBQUU7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFCLENBQUM7S0FDRjtJQUNELGFBQWEsRUFBRTtRQUNiLElBQUksRUFBRTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUNELElBQUksRUFBRTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUNELE1BQU0sRUFBRTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgYmVoYXZpb3JzOiBbXSxcbiAgcHJvcGVydGllczoge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogXCIxMFwiLFxuICAgIH0sXG4gIH0sXG4gIGxpZmV0aW1lczoge1xuICAgIGF0dGFjaGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmlkKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXR0YWNoZWRcIik7XG4gICAgfSxcbiAgICBtb3ZlZDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJtb3ZpZWRcIik7XG4gICAgfSxcbiAgICBkZXRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJkZXRhY2hlZFwiKTtcbiAgICB9LFxuICB9LFxuICBwYWdlTGlmZXRpbWVzOiB7XG4gICAgc2hvdzogKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJzaG93XCIpO1xuICAgIH0sXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJoaWRlXCIpO1xuICAgIH0sXG4gICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc2l6ZVwiKTtcbiAgICB9LFxuICB9LFxufSk7XG4iXX0=