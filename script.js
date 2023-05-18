const getGamesReference = async (content) => {
  try {
    debugger
    const response = await fetch(`http://universities.hipolabs.com/search?name=${content}`, {
      method: 'GET',
     
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
  
  catch (error) {
    console.log(error);
    return;
  }
}

const GamesList = async (gamesResult) => {
  // debugger
  const SearchGame = document.getElementById("result_card");
  games = gamesResult

  let listOfElement = "";

  // debugger
  for (let i = 1; i < games.length; i++) {
    const gamesData = {
      title: games[i].name,
      desc: games[i].country,
      content: games[i].content,
      game_url: games[i].web_pages,
      img : games.thumbnail

    }

    const element = `
        <div id="result_card" class="word-container card mt-3 mb-3">
        <div class="card-body">
          <h5>title:  ${gamesData.title}  </h5>
          <p>Country:  ${gamesData.desc}</p>
          </div>
          <a href="${gamesData.game_url}" class="stretched-link"></a>
        </div>
      `;
    listOfElement += element;
  }

  SearchGame.innerHTML = listOfElement;
}

const searchGames = async () => {
  var message = "we cant find it"
  // debugger
  const search = document.getElementById("Games_Reference").value
  if (search.value = null) {
    return message
  }
debugger
  getGamesReference(search).then(gamesData => {
    GamesList(gamesData);
  })
}

