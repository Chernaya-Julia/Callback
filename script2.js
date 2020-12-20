// forEach some every

const arrFuncs = {
    myForEach: function(cbf) {
        for (i=0; i<=this.length-1; i++) {
            cbf(this[i]);
        }
    },
    
    mySome: function(cbf) {
        var res = false;
        for (i=0; i<=this.length-1; i++) {
            res = cbf(this[i]);
            if (res == true) {
                break;
            }
        }
        return res;
    },

    myEvery: function(cbf) {
        var res = true;
        for (i=0; i<=this.length-1; i++) {
            res = cbf(this[i]);
            if (res == false) {
                break;
            }
        }
        return res;
    }
}

var myArray = [1,2,3];
var myArray2 = [4,2,6];

var myLogFunc = function(element) {
    console.log(element);
}

var myIsEven = function(element) {
    if (element%2 == 0) {
        return true;
    } else {
        return false;
    }

}


arrFuncs.myForEach.call(myArray, myLogFunc);
console.log(arrFuncs.mySome.call(myArray, myIsEven));
console.log(arrFuncs.myEvery.call(myArray, myIsEven));
console.log(arrFuncs.myEvery.call(myArray2, myIsEven));