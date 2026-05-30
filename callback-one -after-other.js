let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 resolved");
    }, 6000);
});

//Define Promise2 as a function;

function myPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise2 resolved");
        }, 3000);
    });
}

// Define the call sequence or (order)
myPromise1.then((successMessage) => {
    console.log("From callback " + successMessage);
    return myPromise2();
}).then((successMessage) => {
    console.log("From callback " + successMessage);
});
