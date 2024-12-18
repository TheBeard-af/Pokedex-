let pokemonRepository = (function () {
  let pokemonList = [];
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
  
  function showModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>" + item.name + "</h1>");
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr("src", item.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%">');
    imageElementBack.attr("src", item.imageUrlBack);
    let heightElement = $("<p>" + "height : " + item.height + "</p>");
    let weightElement = $("<p>" + "weight : " + item.weight + "</p>");
    let typesElement = $("<p>" + "types : " + item.types + "</p>");
    let abilitiesElement = $("<p>" + "abilities : " + item.abilities + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
    
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


  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon.name,"Height: " + pokemon.height,
      pokemon.imageUrl);
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

