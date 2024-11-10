let pokemonRepository = (function () {
  let pokemonList = [
    { name: "Pichu", height: 0.3, types: ['electric'] },
    { name: "Bulbasaur", height: 0.7, types: ['grass', 'poison'] },
    { name: "Squrtle", height: 0.5, types: ['water'] }
  ];

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
    button.addEventListener('click', showDetails(pokemon){
      console.log(pokemon);  
    });
  }
  function showDetails(pokemon){
    console.log(pokemon)    
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
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
