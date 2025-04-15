// ==========================================================
// 1) TABLEAU CATEGORIES + COMMANDES
// ==========================================================
const categoriesData = [
  {
    name: "Affichage",
    commands: [
      {
        name: "ls",
        description: "Liste les fichiers et dossiers du répertoire courant (ou spécifié).",
        example: "ls -lh /home/username"
      },
      {
        name: "ls -l",
        description: "Liste détaillée (droits, propriétaire, taille...).",
        example: "ls -l --color=auto /var/log"
      },
      {
        name: "cat fichier.txt",
        description: "Affiche le contenu d’un fichier texte.",
        example: "cat /var/log/syslog"
      },
      {
        name: "cut -d: -f1 /etc/passwd",
        description: "Extrait le 1er champ (séparateur :) du fichier passwd.",
        example: "cut -d: -f1 /etc/passwd"
      },
      {
        name: "cut -d: -f1 /etc/group",
        description: "Extrait le 1er champ du fichier group.",
        example: "cut -d: -f1 /etc/group"
      },
      {
        name: "whoami",
        description: "Affiche l'utilisateur actuellement connecté.",
        example: "whoami"
      },
      {
        name: "echo \"Hello World\"",
        description: "Affiche un texte (ou la valeur d’une variable) à l’écran.",
        example: "echo $PATH"
      },
      {
        name: "head fichier.txt",
        description: "Affiche les premières lignes d’un fichier (10 par défaut).",
        example: "head -n 5 /var/log/syslog"
      },
      {
        name: "tail fichier.txt",
        description: "Affiche les dernières lignes d’un fichier (10 par défaut).",
        example: "tail -f /var/log/syslog"
      }
      // ... vous pouvez en ajouter plus si besoin ...
    ]
  },
  {
    name: "Création",
    commands: [
      {
        name: "touch fichier.txt",
        description: "Crée un nouveau fichier vide ou met à jour sa date.",
        example: "touch rapport.txt"
      },
      {
        name: "mkdir mon_dossier",
        description: "Crée un nouveau dossier (répertoire).",
        example: "mkdir /home/username/Documents/Projets"
      },
      {
        name: "sudo useradd nom_utilisateur",
        description: "Crée un nouvel utilisateur (sans /home par défaut).",
        example: "sudo useradd --create-home alice"
      }
      // ... restez libre d'ajouter d'autres commandes ...
    ]
  },
  // ... Ajoutez toutes les autres catégories (Suppression, Modification, Copie, Déplacement) ...
];


// ==========================================================
// 2) LOGIQUE POUR AFFICHER CATEGORIES / COMMANDES
// ==========================================================
window.addEventListener("DOMContentLoaded", () => {
  // Récupération des éléments HTML
  const sidebar = document.getElementById("sidebar");
  const commandsSection = document.getElementById("commands");
  const detailsSection = document.getElementById("details");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  // A) Injection des catégories (colonne de gauche)
  const ulCategories = document.createElement("ul");
  categoriesData.forEach((category, catIndex) => {
    const liCategory = document.createElement("li");
    liCategory.textContent = category.name;

    // Au clic sur une catégorie, on affiche ses commandes
    liCategory.addEventListener("click", () => {
      displayCommands(catIndex);
    });

    ulCategories.appendChild(liCategory);
  });
  sidebar.appendChild(ulCategories);


  // B) Fonction pour afficher la liste des commandes (colonne du milieu)
  function displayCommands(catIndex) {
    commandsSection.innerHTML = "";
    detailsSection.innerHTML = "<p>Sélectionnez une commande pour voir les détails.</p>";

    const selectedCategory = categoriesData[catIndex];
    if (!selectedCategory) return;

    const ulCommands = document.createElement("ul");

    selectedCategory.commands.forEach((cmd, cmdIndex) => {
      const liCommand = document.createElement("li");
      liCommand.textContent = cmd.name;

      // Au clic, afficher détails
      liCommand.addEventListener("click", () => {
        displayCommandDetails(catIndex, cmdIndex);
      });

      ulCommands.appendChild(liCommand);
    });

    commandsSection.appendChild(ulCommands);
  }


  // C) Fonction pour afficher détails (colonne de droite)
  function displayCommandDetails(catIndex, cmdIndex) {
    detailsSection.innerHTML = "";

    const cmd = categoriesData[catIndex].commands[cmdIndex];
    if (!cmd) return;

    const title = document.createElement("h2");
    title.textContent = cmd.name;

    const hr = document.createElement("hr");

    const descParagraph = document.createElement("p");
    descParagraph.innerHTML = `<strong>Description :</strong> ${cmd.description}`;

    const exampleParagraph = document.createElement("p");
    exampleParagraph.innerHTML = `<strong>Exemple :</strong> <code>${cmd.example}</code>`;

    detailsSection.appendChild(title);
    detailsSection.appendChild(hr);
    detailsSection.appendChild(descParagraph);
    detailsSection.appendChild(exampleParagraph);
  }


  // ==========================================================
  // 3) RECHERCHE (champ + bouton loupe)
  // ==========================================================
  //  A) Sur écoute de saisie dans le champ
  searchInput.addEventListener("input", handleSearch);

  //  B) Ou sur clic du bouton loupe
  searchBtn.addEventListener("click", () => {
    handleSearch();
  });

  function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();

    if (!query) {
      // Si le champ est vide, on réinitialise l'affichage
      commandsSection.innerHTML = "<p>Sélectionnez une catégorie pour afficher les commandes.</p>";
      detailsSection.innerHTML = "<p>Sélectionnez une commande pour voir les détails.</p>";
      return;
    }

    // Recherche dans toutes les catégories / commandes
    let matchedCommands = [];
    categoriesData.forEach((cat) => {
      cat.commands.forEach((cmd) => {
        const searchString = (cmd.name + " " + cmd.description + " " + cmd.example).toLowerCase();
        if (searchString.includes(query)) {
          matchedCommands.push({
            category: cat.name,
            name: cmd.name,
            description: cmd.description,
            example: cmd.example
          });
        }
      });
    });

    // Affiche la liste filtrée dans la colonne du milieu
    displaySearchResults(matchedCommands);
  }

  // Génère la liste des résultats
  function displaySearchResults(results) {
    commandsSection.innerHTML = "";
    detailsSection.innerHTML = "<p>Cliquez sur une commande pour voir les détails.</p>";

    if (results.length === 0) {
      commandsSection.innerHTML = "<p>Aucun résultat pour cette recherche.</p>";
      return;
    }

    const ul = document.createElement("ul");

    results.forEach((item, index) => {
      const li = document.createElement("li");
      // On affiche "nom de la commande (Catégorie: X)"
      li.textContent = `${item.name} (Catégorie: ${item.category})`;

      // Au clic, on montre ses détails
      li.addEventListener("click", () => {
        displaySearchedCommandDetails(item);
      });

      ul.appendChild(li);
    });

    commandsSection.appendChild(ul);
  }

  // Affiche les détails d'un item trouvé
  function displaySearchedCommandDetails(item) {
    detailsSection.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = item.name;

    const hr = document.createElement("hr");

    const descP = document.createElement("p");
    descP.innerHTML = `<strong>Description :</strong> ${item.description}`;

    const exP = document.createElement("p");
    exP.innerHTML = `<strong>Exemple :</strong> <code>${item.example}</code>`;

    detailsSection.appendChild(title);
    detailsSection.appendChild(hr);
    detailsSection.appendChild(descP);
    detailsSection.appendChild(exP);
  }
});
