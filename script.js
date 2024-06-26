/*
const validation = () => {
    const inputObj = document.getElementById('id1');
10
    if(inputObj.validity.rangeOverflow){
        inputObj.setCustomValidity("You have made a range overflow error!");
    } else if(inputObj.validity.rangeUnderflow){
        inputObj.setCustomValidity("You have made a range underlow error!");
    } else if(inputObj.validity.valueMissing){
        inputObj.setCustomValidity("Value missing!");
        console.log('dfads')
    }

    if(!inputObj.checkValidity()){
        document.getElementById('demo').innerHTML = inputObj.validationMessage
    }
    else{
        inputObj.value = "";
        document.getElementById('demo').innerHTML = "";
    }
}
*/

/*
const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

const getLocalStorage = (key) => {
     value = localStorage.getItem(key);

    alert(value);
}

const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
}
const clearLocalStorage = () => {
    localStorage.clear();
}
*/

/*
let w;

const startWorker = () => {

    if(typeof Worker !== 'undefined'){
        //worker is available

        // if w worker is not already define
        if(typeof w === 'undefined'){
            w = new Worker('worker.js');
        }

        console.log(w)

        w.onmessage  = function(event) {

            document.getElementById('demo').innerHTML = event.data
        }
    }else{
        alert("Your browser does not support web worker!");
    }

}

const stopWorker = () => {
    if(typeof Worker !== 'undefined'){
        w.terminate();
        w = undefined;
    } else {
        alert("Your browser does not support web worker!");
    }
}
*/