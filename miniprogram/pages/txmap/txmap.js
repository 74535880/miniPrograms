"use strict";
Page({
    data: {
        markers: [
            {
                id: 1,
                latitude: 23.10229,
                longitude: 113.32458,
                title: "goods",
                iconPath: "https://img.tukuppt.com/png_preview/00/42/51/sxfedHX6ar.jpg!/fw/780",
                width: 50,
                height: 50,
            },
        ],
        polygons: [
            {
                points: [
                    { latitude: 23.10229, longitude: 113.32452 },
                    { latitude: 23.10229, longitude: 113.3245211 },
                ],
                color: "#008c8c",
                width: 2,
                dettedline: true,
            },
        ],
    },
    markettap: function (e) {
        console.log(e);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHhtYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eG1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFO1lBQ1A7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixLQUFLLEVBQUUsT0FBTztnQkFDZCxRQUFRLEVBQ04scUVBQXFFO2dCQUN2RSxLQUFLLEVBQUUsRUFBRTtnQkFDVCxNQUFNLEVBQUUsRUFBRTthQUNYO1NBQ0Y7UUFDRCxRQUFRLEVBQUU7WUFDUjtnQkFDRSxNQUFNLEVBQUU7b0JBQ04sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUU7b0JBQzVDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFO2lCQUMvQztnQkFDRCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsVUFBVSxFQUFFLElBQUk7YUFDakI7U0FDRjtLQUNGO0lBQ0QsU0FBUyxZQUFDLENBQU07UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcbiAgZGF0YToge1xuICAgIG1hcmtlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGxhdGl0dWRlOiAyMy4xMDIyOSxcbiAgICAgICAgbG9uZ2l0dWRlOiAxMTMuMzI0NTgsXG4gICAgICAgIHRpdGxlOiBcImdvb2RzXCIsXG4gICAgICAgIGljb25QYXRoOlxuICAgICAgICAgIFwiaHR0cHM6Ly9pbWcudHVrdXBwdC5jb20vcG5nX3ByZXZpZXcvMDAvNDIvNTEvc3hmZWRIWDZhci5qcGchL2Z3Lzc4MFwiLFxuICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgIGhlaWdodDogNTAsXG4gICAgICB9LFxuICAgIF0sXG4gICAgcG9seWdvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgcG9pbnRzOiBbXG4gICAgICAgICAgeyBsYXRpdHVkZTogMjMuMTAyMjksIGxvbmdpdHVkZTogMTEzLjMyNDUyIH0sXG4gICAgICAgICAgeyBsYXRpdHVkZTogMjMuMTAyMjksIGxvbmdpdHVkZTogMTEzLjMyNDUyMTEgfSxcbiAgICAgICAgXSxcbiAgICAgICAgY29sb3I6IFwiIzAwOGM4Y1wiLFxuICAgICAgICB3aWR0aDogMixcbiAgICAgICAgZGV0dGVkbGluZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgbWFya2V0dGFwKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9LFxufSk7XG4iXX0=