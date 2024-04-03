/*
Promise = na object that manages asynchronus operations.
    Wrap a promis object around { asynchronous code}
    "i promise to return a value"
    Pending -> Resolved or Rejected
    new Promise((resolve, reject) => {asyncronus code})

*/

// Do these in order

// 1. walk the dog
// 2. clean the kitchen
// 3. take out the trash

function walkgDog(callback){
    setTimeout(() => {
        console.log("you walk the dog");
        callback();
    }, 1500);
}
function cleanKitchen(callback){
    setTimeout(() => {
        console.log("you clean the kitchen");
        callback();
    }, 2500);
}
function takeOutTrash(callback){
    setTimeout(() => {
        console.log("you take out the trash");
        callback();
    }, 500);
}


// callback hell forming
/*
walkgDog(()=>{
    cleanKitchen(() =>{
        takeOutTrash(() => {
            console.log("Finished");
        })
    })
});
*/

// using promises

const dogWalked = false;
const kitchenCleaned = true;
const trashTaken = true;

// if any chained promises are rejected the chain is stopped and the Reject is caught by the .catch()

function walkDogPromise(){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            if (dogWalked) {
                resolve("you walk the dog");
            } else {
                reject("dog not walked !!");
            }

        }, 1500);
    });
}
function cleanKitchenPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (kitchenCleaned){
                resolve("you clean the kitchen");
            } else {
                reject("You didnt clean the kitchen");
            }
    }, 2500);
    });
}

function takeOutTrashPromise(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (trashTaken) {
                resolve("you take out the trash");
            } else {
                reject("You Didnt take out the trash");
            }
            }, 500);
    });   
}

walkDogPromise().then(value => {console.log(value); return cleanKitchenPromise() })
                .then(value => {console.log(value); return takeOutTrashPromise() })
                .then(value => {console.log(value);console.log("Finished promises");})
                .catch(error => console.error(error));