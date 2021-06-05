const oikeatVastaukset = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const tulokset = document.querySelector('.result');
const pisteteksti = document.querySelector('span');

form.addEventListener('submit', e => {
    e.preventDefault();

    let pisteet = 0;

    const annetutVastaukset = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //Check asnwers
    annetutVastaukset.forEach((arvo, indeksi) => {
        if (arvo === oikeatVastaukset[indeksi]) {
            pisteet += 25;
        }
    });
    //window.scrollTo: ottaa x- ja y-koordinaatit parametreiksi
    scrollTo(0, 0);
    tulokset.classList.remove('d-none');
    // pisteteksti.textContent = pisteet + (' %');
    

    let output = 0;
    const timer = setInterval(() => {
        tulokset.querySelector('span').textContent = `${output} %`;
        if (output === pisteet) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);

});

//Window-object on globaali, ei tarvi kirjoittaa window.console.log...)
    //Tämä suorittaa funktion 3000 millisekunnin jälkeen
// setTimeout(() => {
//     alert('hello Ninjas!');
// }, 3000);

//Tämä suorittaa funktion 1000 millisekunnin jälkeen ja sen jälkeen joka 1000millisekunti
// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if (i ===5) {
//         clearInterval(timer);
//     }
// }, 1000);

