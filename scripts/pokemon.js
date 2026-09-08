const container = document.querySelector("#game-container");
const modal = document.querySelector("#game-modal");
const modalContent = document.querySelector("#modal-content");
const closeModal = document.querySelector("#close-modal");

fetch("data/pokemon.json")
    .then(res => res.json())
    .then(data => {
        data.games.forEach(game => {
            const card = document.createElement("div");
            card.classList.add("game-card");

            card.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>Generation ${game.generation}</p>
            `;

            card.addEventListener("click", () => {
                modalContent.innerHTML = `
                <h2>${game.title}</h2>
                <img src="${game.image}" alt="${game.title}">
                <p><strong>Generation:</strong> ${game.generation}</p>
                <p><strong>Release Year:</strong> ${game.year}</p>
                <p><strong>Platform:</strong> ${game.platform}</p>
                <p>${game.description}</p>
                `;
                modal.style.display = "block"
            });

            container.appendChild(card);
        });
    });

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});