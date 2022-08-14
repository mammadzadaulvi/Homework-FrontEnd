// Task 1 

const arr1 = [1, 3, 5, 7, 9];

const CustomPush = function (array, index, element) {
    const arr11 = [];
    for (let i = 0; i < array.length; i++) {
        if (i === index) {
            arr11.push(element)
        }
        arr11.push(array[i]);
    }
    if (index > array.length - 1) {
        arr11.push(element)
    }
    return arr11;
}
const pushresult = CustomPush(arr1, 2, "--100 bal--");
console.log(pushresult);


// Task 2

const arr2 = [2, 4, 6, 8, 0];

const CustomPop = function (array, index) {
    const arr22 = [];
    for (let i = 0; i < array.length; i++) {
        if (i !== index) {
            arr22.push(array[i]);
        }
    }
    if (index < 0 || index > array.length - 1) {
        console.log("Please enter right index next time");
    }
    return arr22;
}

const popresult = CustomPop(arr2, 4);
console.log(popresult);