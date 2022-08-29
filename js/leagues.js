const loadLeagues = (countryName) => {
    // loadSports();
    const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${countryName}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

const displayLeagues = (leagues) => {
    console.log(leagues);
}

loadLeagues("England");