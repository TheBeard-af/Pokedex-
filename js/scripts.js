let pokemonRepository = (function () {
  let pokemonList = [
    // { name: "Pichu", height: 0.3, types: ['electric'] },
    // { name: "Bulbasaur", height: 0.7, types: ['grass', 'poison'] },
    // { name: "Squrtle", height: 0.5, types: ['water'] }
  ];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  function getAll() {
    return pokemonList;
  }
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function addListItem(pokemon) {
    let newlist = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    newlist.appendChild(listpokemon);
    button.addEventListener('click', () => showDetails(pokemon));
    {
      console.log(pokemon);
    };
  }
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});


















// for loop iterating over pokemon list instead of for each()
// for (let i = 0; i < pokemonList.length; i++) {
//     document.write(pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")");
//     if (pokemonList[i].height > 0.5) {
//         document.write("Wow, that's big!")
//     }
//     document.write ("<BR>")
// }

// for each () loop iterating over pokemon list
