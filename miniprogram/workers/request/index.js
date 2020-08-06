"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var DealArray = (function () {
    function DealArray(arr) {
        this.arr = arr;
    }
    DealArray.prototype.quickSort = function (left, right) {
        var _a, _b;
        if (left >= right || this.arr.length <= 1) {
            return this.arr;
        }
        var j = left + 1, middle = this.arr[left], arr = this.arr;
        for (var i = left + 1; i < right; i++) {
            if (arr[i] <= middle) {
                _a = __read([arr[i], arr[j]], 2), arr[j] = _a[0], arr[i] = _a[1];
                j++;
            }
        }
        _b = __read([arr[j - 1], arr[left]], 2), arr[left] = _b[0], arr[j - 1] = _b[1];
        this.quickSort(left, j - 1);
        this.quickSort(j, right);
        return arr;
    };
    return DealArray;
}());
var arrObj = new DealArray([2, 1, 1, 4, 5, 2, 7, 23, 67]);
var newArr = arrObj.quickSort(0, arrObj.arr.length);
console.log(newArr, '\r\n');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQ0UsbUJBQTRCLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO0lBQUcsQ0FBQztJQUV4Qyw2QkFBUyxHQUFULFVBQVUsSUFBWSxFQUFFLEtBQWE7O1FBQ25DLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ2pCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFDZCxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFDdkIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFFO2dCQUNwQixnQ0FBbUMsRUFBbEMsY0FBTSxFQUFFLGNBQU0sQ0FBcUI7Z0JBQ3BDLENBQUMsRUFBRSxDQUFDO2FBQ0w7U0FDRjtRQUNELHVDQUFpRCxFQUFoRCxpQkFBUyxFQUFFLGtCQUFVLENBQTRCO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFDRCxJQUFNLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUU1RCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRGVhbEFycmF5PFQ+IHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGFycjogVFtdKSB7fVxuICAvLyDlv6vpgJ/mjpLluo9cbiAgcXVpY2tTb3J0KGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlcik6IFRbXSB7XG4gICAgaWYgKGxlZnQgPj0gcmlnaHQgfHwgdGhpcy5hcnIubGVuZ3RoIDw9IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLmFycjtcbiAgICB9XG4gICAgbGV0IGogPSBsZWZ0ICsgMSxcbiAgICAgIG1pZGRsZSA9IHRoaXMuYXJyW2xlZnRdLFxuICAgICAgYXJyID0gdGhpcy5hcnI7XG4gICAgZm9yIChsZXQgaSA9IGxlZnQgKyAxOyBpIDwgcmlnaHQ7IGkrKykge1xuICAgICAgaWYgKGFycltpXSA8PSBtaWRkbGUpIHtcbiAgICAgICAgW2FycltqXSwgYXJyW2ldXSA9IFthcnJbaV0sIGFycltqXV07XG4gICAgICAgIGorKztcbiAgICAgIH1cbiAgICB9XG4gICAgW2FycltsZWZ0XSwgYXJyW2ogLSAxXV0gPSBbYXJyW2ogLSAxXSwgYXJyW2xlZnRdXTtcbiAgICB0aGlzLnF1aWNrU29ydChsZWZ0LCBqIC0gMSk7XG4gICAgdGhpcy5xdWlja1NvcnQoaiwgcmlnaHQpO1xuICAgIHJldHVybiBhcnI7XG4gIH1cbn1cbmNvbnN0IGFyck9iaiA9IG5ldyBEZWFsQXJyYXkoWzIsIDEsIDEsIDQsIDUsIDIsIDcsIDIzLCA2N10pO1xuXG5jb25zdCBuZXdBcnIgPSBhcnJPYmoucXVpY2tTb3J0KDAsIGFyck9iai5hcnIubGVuZ3RoKTtcbmNvbnNvbGUubG9nKG5ld0FyciwgJ1xcclxcbicpO1xuIl19