const loadCountries = () => {
    const url = "https://www.thesportsdb.com/api/v1/json/2/all_countries.php";

    fetch(url)
        .then(response => response.json())
        .then(data => displayCountry(data.countries))
        .catch(error => console.log(error))
}


const displayCountry = (countries) =>{
    console.log(countries);

    const sportsContainer = document.getElementById('sport-container');
    sportsContainer.textContent = ``;
    document.getElementById('heading').innerText = "All Contries"
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('px-3', 'py-2')
        div.innerHTML =`
            <div class="border rounded border-3">${country.name_en}</div>
        `;      

        sportsContainer.appendChild(div);
    });
}

loadCountries();