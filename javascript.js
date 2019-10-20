var length=parseInt(prompt('Chieu dai la : '));
var width=parseInt(prompt('Chieu rong la : '));
let hcn = new hinhchunhat();
alert(hcn.perimeter(length,width));
alert(hcn.acreage(length,width));
function hinhchunhat() {
    this.perimeter = function (a, b) {
        return (a + b) * 2;
    }
    this.acreage = function (a, b) {
        return a * b;

    }
}