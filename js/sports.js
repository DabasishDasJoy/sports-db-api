const loadSports = () => {
    const url = "https://www.thesportsdb.com/api/v1/json/2/all_sports.php";

    fetch(url)
        .then(response => response.json())
        .then(data => displaySports(data.sports))
        .catch(error => console.log(error))
}

const displaySports = (sports) =>{
    console.log(sports);

    const sportsContainer = document.getElementById('sport-container');
    sportsContainer.textContent = ``;
    document.getElementById('heading').innerText = "All Sports"
    sports.forEach(sport => {
        const div = document.createElement('div');
        div.classList.add('px-3', 'py-2')
        div.innerHTML =`
            <img src="${sport.strSportIconGreen}"></img>
        `;      

        sportsContainer.appendChild(div);
    });
}