


function writeCards(people, celebraion) {
    let allCards = []
    for (let i = 0; i < people.length; i++) {
        allCards.push(`Thank you, ${people[i]}, for the wonderful ${celebraion} gift!`);
       
    }
    return allCards
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

let i = 10

function countDown(i) {
    while (i > -1) {
        console.log(i);
        i--
    }
}

countDown(i)