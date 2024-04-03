/*
    Async / Await = Async = makes a function return a promise
                    Await = makes an async function wait for a promise

                    Allows you to write asyncronous code in a synchronus manner
                    Async doesn't have to resolve or reject parameters
                    Everything after Await is placed in an event queue. 
*/

const dogWalked = true;
const kitchenCleaned = false;
const trashTaken = true;

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

async function doChores(){
    try{
        const walkDogResult = await walkDogPromise();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchenPromise();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrashPromise();
        console.log(takeOutTrashResult);
    
        console.log("all the chores are finished");
    }
    catch(error){
        console.error(error);
    }

}

doChores();