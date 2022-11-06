function createGame(player1 , hour , player2 , ){
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira de ${player2}">
    </li>
    `
}

let delay = -0.5;

function createCard(date , dayWeek , games) {
    
    delay = delay + 0.5;

    return  `
        <div class="card" style="animation: appear ${delay}s;">
            <h2>${date} <span>${dayWeek}</span></h2>
            <ul>
            ${games}
            </ul>
        </div>

    `
}

document.querySelector("#cards").innerHTML =

    createCard("24/11", "quinta", createGame("brazil","16:00","serbia"))
    + createCard("28/11", "segunda", createGame("brazil","13:00","switzerland"))
    + createCard("02/12", "sexta", createGame("brazil","16:00","cameron"))