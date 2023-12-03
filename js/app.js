import data from "../data/data.js"; //TODO

const $container = document.querySelector(".js-container");

function templateCard(day) {  // TODO
    const card = document.createElement("div");
    const front = document.createElement("div");
    const back = document.createElement("div");

    card.classList = "card";
    front.classList = "card_content card_front";
    back.classList = "card_content card_back is-flipped";

    front.innerHTML = `<h2>December ${day.day}.</h2>`;

    // if (day === 24) {
    //     back.innerHTML = `<p>Ma van szenteste</p>`;
    // }
    // else {
    //     back.innerHTML = `<p>Már csak ${24 - day.day} nap van Karácsonyig</p>`
    // }

    back.innerHTML = `
        <div class = "card_header">
            <iframe
                title = "Youtube video player"
                src = "${day.link}"
                frameborder = "0"
                allowfullscreen
            >
            </iframe>
        </div>
        <div class = "card_body">
            <p>Már csak ${24 - day.day} nap van Karácsonyig</p>
        </div>
    `

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", () => {
        front.classList.toggle("is-flipped");
        back.classList.toggle("is-flipped");
    });

    return card;
}

const render = () => {
    let html = "";
    for (let day of data) {
        const newCard = templateCard(day);
        $container.appendChild(newCard);
    }
};

render();