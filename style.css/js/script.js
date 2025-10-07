let score = 0;

function jouer(joueur) {
  const options = ["pierre", "feuille", "ciseaux"];
  const ordi = options[Math.floor(Math.random() * 3)];

  let resultat = "";

  if (joueur === ordi) {
    resultat = "Égalité ! 🤝";
  } else if (
    (joueur === "pierre" && ordi === "ciseaux") ||
    (joueur === "feuille" && ordi === "pierre") ||
    (joueur === "ciseaux" && ordi === "feuille")
  ) {
    resultat = "Tu gagnes ! 🎉";
    score++;
  } else {
    resultat = "Tu perds ! 😢";
    score--;
  }

  document.getElementById("resultat").innerHTML = `Tu as choisi : ${joueur} <br> L'ordi a choisi : ${ordi} <br> ${resultat}`;
  document.getElementById("score").textContent = `Score : ${score}`;
}
