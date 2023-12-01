import days from "../data/data.js";

const $container = document.querySelector(".js-container");

const render = () => {
    let html = "";
    for (let i = 1; i <= 24; i++) {
        const template = `
        <div class="card">
            <div class="card_content card_front">December ${i}.</div>
            <div class="card_content card_back">
            Már csak ${24 - i} nap van Karácsonyig
            </div>
        </div>
        `;
        html += template;
    }
    $container.innerHTML = html;
};

render();