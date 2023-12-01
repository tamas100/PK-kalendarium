import days from "../data/data.js";

const $container = document.querySelector(".js-container");

function templateCard(day) {  // TODO
    const card = document.createElement("div");
    const front = document.createElement("div");
    const back = document.createElement("div");

    card.classList = "card";
    front.classList = "card_content card_front";
    back.classList = "card_content card_back";

    front.innerHTML = `<h2>December ${day}.</h2>`
    back.innerHTML = `<p>Már csak ${24 - day} nap van Karácsonyig</p>`

    card.appendChild(front);
    card.appendChild(back);
    return card;
}

const render = () => {
    let html = "";
    for (let i = 1; i <= 24; i++) {
        const newCard = templateCard(i);
        $container.appendChild(newCard);
    }
};

render();