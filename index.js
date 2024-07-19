
function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

countDown(10);

const  writeCards = (names, event)=>{
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

let namesArray = ["Guadalupe", "Ollie", "Aki"];
let event = "surprise";
let thankYouMessages = writeCards(namesArray, event);
console.log(thankYouMessages);
