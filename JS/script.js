let tacheEntree = document.getElementById("todo");
let bouttonAjout = document.getElementById("btn");
let listeDeTaches = document.getElementById("taskList");

// Barrer une tache
function barrerTache(event) {
  event.target.style.textDecoration = "line-through";
}

// Supprimer une tache
function supprimerTache(event) {
  event.target.remove();
}

// ajouter une tache
function ajoutTache() {
  const nouvelleTache = tacheEntree.value.trim();

  if (nouvelleTache !== "") {
    const li = document.createElement("li");
    li.textContent = nouvelleTache;
    li.addEventListener("click", barrerTache);
    li.addEventListener("dblclick", supprimerTache);
    listeDeTaches.appendChild(li);
    tacheEntree.value = "";
    tacheEntree.focus();
  }
}

bouttonAjout.addEventListener("click", ajoutTache);

// Ajouter une tache avec la touche Entree
tacheEntree.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    ajoutTache();
  }
});

// Mode nuit
let modeBtn = document.getElementById("modeBtn");

function modeNuit() {
  document.body.classList.toggle("nuit");
  if (document.body.classList.contains("nuit")) {
    modeBtn.textContent = "Mode Jour";
  } else {
    modeBtn.textContent = "Mode Nuit";
  }
}

modeBtn.addEventListener("click", modeNuit);
