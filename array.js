const minPlayliste = ["Desert nights", "Eyes", "No Place", "Tragic Satar", "Give Yourself A Try", "Fever", "Alive"];

console.log(minPlayliste);

minPlayliste.forEach(visEnAfGangen);

function visEnAfGangen(enSang) {
  console.log(enSang);
  document.querySelector("main").innerHTML += `<ul>${enSang}</ul>`;
}
