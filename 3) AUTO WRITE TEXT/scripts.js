console.log("hello world")

// const message = "hello i am farhan ahmad"
// let index = 0;

// function writetext(){
//     document.body.innerText = message.slice(0,index);
//     index++;
//     if(index>message.length){
//         index = 0;
//     }
// }
// setInterval(writetext,100)

// let text = "Hey there , I am Farhan Ahmad ( IT STUDENT ) "
let text = "HELLO EVERYONE , THIS IS FARHAN AHMAD  "
start = 0;
function displayMessage() {
    document.body.innerText = text.slice(0, start)
    start++;
    if (start > text.length) {
        start = 0;
    }
}
setInterval(() => {
    displayMessage();
}, 100);