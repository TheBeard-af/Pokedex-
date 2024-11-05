let pokemonList = [
    { name: "Pichu", height: 0.3, types: ['electric'] },
    { name: "Bulbasaur", height: 0.7, types: ['grass', 'poison'] },
    { name: "Squrtle", height: 0.5, types: ['water'] }    
];

// for loop iterating over pokemon list

// for (let i = 0; i < pokemonList.length; i++) {
//     document.write(pokemonList[i].name + " " + "(height: " + pokemonList[i].height + ")");
//     if (pokemonList[i].height > 0.5) {
//         document.write("Wow, that's big!")
//     }
//     document.write ("<BR>")
// }

// for each () loop iterating over pokemon list

pokemonList.forEach(function(pokemon) {
    document.write(pokemon.name + " " + "(height: " + pokemon.height + ") ");
    if (pokemon.height > 0.5) {
        document.write("Wow, that's big!")
    }
    document.write ("<BR>")
  });