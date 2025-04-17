// script.js
// ==========================================================
// 1) TABLEAU CATEGORIES + COMMANDES (FR/EN intégrés)
// ==========================================================
const categoriesData = [
  {
    name: { fr: "Affichage", en: "Display" },
    commands: [
      {
        name: { fr: "ls", en: "ls" },
        description: {
          fr: "Liste les fichiers et dossiers du répertoire courant.",
          en: "Lists files and directories in the current directory."
        },
        example: {
          fr: "ls -lha --color=auto /var/log",
          en: "ls -lha --color=auto /var/log"
        },
        bullets: {
          fr: [
            "La commande <code>ls</code> permet d’<strong>énumérer les fichiers et dossiers</strong> contenus dans un répertoire.",
            "Elle est très utilisée pour <strong>visualiser rapidement le contenu d’un dossier</strong>."
          ],
          en: [
            "The <code>ls</code> command <strong>lists files and directories</strong> in a folder.",
            "It is widely used for a <strong>quick look</strong> at a directory’s contents."
          ]
        },
        options: {
          fr: [
            { opt: "-l", desc: "liste détaillée (droits, propriétaire, taille…)" },
            { opt: "-a", desc: "affiche tous les fichiers, y compris cachés" },
            { opt: "-h", desc: "tailles lisibles (Ko, Mo…)" }
          ],
          en: [
            { opt: "-l", desc: "long listing (permissions, owner, size…)" },
            { opt: "-a", desc: "show hidden files" },
            { opt: "-h", desc: "human‑readable sizes" }
          ]
        },
        extraExample: {
          fr: "ls -lha --color=auto /var/log",
          en: "ls -lha --color=auto /var/log"
        },
        recap: {
          fr: "🔁 Cette commande affiche tous les fichiers, même cachés, dans un format détaillé et lisible.",
          en: "🔁 This command lists every file, including hidden ones, in a detailed, readable format."
        }
      },
      {
        name: { fr: "ls -l", en: "ls -l" },
        description: {
          fr: "Liste les fichiers et dossiers sous forme de liste détaillée.",
          en: "Displays files and directories in a detailed list format."
        },
        example: {
          fr: "ls -lha --color=auto /var/log",
          en: "ls -lha --color=auto /var/log"
        },
        bullets: {
          fr: [
            "Affiche le contenu d’un répertoire avec <strong>plus d’informations</strong> (droits, taille, date).",
            "Pratique pour vérifier rapidement les <strong>droits d’accès</strong> et la taille des fichiers."
          ],
          en: [
            "Shows directory contents with <strong>detailed information</strong> (permissions, size, date).",
            "Handy for quickly checking <strong>permissions</strong> and file sizes."
          ]
        },
        options: {
          fr: [
            { opt: "-h", desc: "tailles lisibles (Ko, Mo, Go)" },
            { opt: "-a", desc: "inclut les fichiers cachés" }
          ],
          en: [
            { opt: "-h", desc: "human‑readable sizes (KB, MB, GB)" },
            { opt: "-a", desc: "include hidden files" }
          ]
        },
        extraExample: {
          fr: "ls -lha --color=auto /var/log",
          en: "ls -lha --color=auto /var/log"
        },
        recap: {
          fr: "📂 Cette commande détaille chaque fichier avec ses droits, son propriétaire et une taille lisible.",
          en: "📂 This command details each file with permissions, owner, and a human‑readable size."
        }
      },
      {
        name: { fr: "cat fichier.txt", en: "cat file.txt" },
        description: {
          fr: "Affiche le contenu d’un fichier texte.",
          en: "Displays the content of a text file."
        },
        example: {
          fr: "cat -n /var/log/syslog | less",
          en: "cat -n /var/log/syslog | less"
        },
        bullets: {
          fr: [
            "<code>cat</code> concatène et affiche un ou plusieurs fichiers.",
            "Pratique pour examiner rapidement un fichier ou fusionner des fichiers."
          ],
          en: [
            "<code>cat</code> concatenates and displays one or more files.",
            "Useful for quickly inspecting a file or merging files."
          ]
        },
        options: {
          fr: [
            { opt: "-n", desc: "numérote toutes les lignes" },
            { opt: "-b", desc: "numérote uniquement les lignes non vides" }
          ],
          en: [
            { opt: "-n", desc: "number all output lines" },
            { opt: "-b", desc: "number non‑blank lines" }
          ]
        },
        extraExample: {
          fr: "cat -n /var/log/syslog | less",
          en: "cat -n /var/log/syslog | less"
        },
        recap: {
          fr: "📄 Cette commande affiche un fichier avec numérotation, idéale pour repérer les lignes.",
          en: "📄 This command shows a file with line numbers, great for locating lines."
        }
      },
      {
        name: { fr: "cut -d: -f1 /etc/passwd", en: "cut -d: -f1 /etc/passwd" },
        description: {
          fr: "Extrait le premier champ de chaque ligne du fichier /etc/passwd.",
          en: "Extracts the first field from each line of the /etc/passwd file."
        },
        example: {
          fr: "cut -d: -f1 /etc/passwd",
          en: "cut -d: -f1 /etc/passwd"
        },
        bullets: {
          fr: [
            "La commande <code>cut</code> sert à extraire des champs d’un fichier selon un délimiteur.",
            "Parfait pour lister uniquement les noms d’utilisateurs ou de groupes."
          ],
          en: [
            "The <code>cut</code> command extracts fields from a file using a delimiter.",
            "Great for listing only usernames or groups."
          ]
        },
        options: {
          fr: [
            { opt: "-d:", desc: "définit ':' comme séparateur" },
            { opt: "-f1", desc: "sélectionne le premier champ" }
          ],
          en: [
            { opt: "-d:", desc: "sets ':' as delimiter" },
            { opt: "-f1", desc: "selects the first field" }
          ]
        },
        extraExample: {
          fr: "cut -d: -f1 /etc/group",
          en: "cut -d: -f1 /etc/group"
        },
        recap: {
          fr: "✂️ Cette commande filtre un fichier système pour n’afficher que le champ désiré.",
          en: "✂️ This command filters a system file to show only the desired field."
        }
      }
    ]
  },
  {
    name: { fr: "Création", en: "Creation" },
    commands: [
      {
        name: { fr: "mkdir répertoire", en: "mkdir directory" },
        description: {
          fr: "Crée un nouveau répertoire dans le système de fichiers.",
          en: "Creates a new directory in the filesystem."
        },
        example: {
          fr: "mkdir mon_dossier",
          en: "mkdir my_folder"
        },
        bullets: {
          fr: [
            "La commande <code>mkdir</code> sert à <strong>créer des répertoires</strong>.",
            "Indispensable pour organiser les fichiers dans des dossiers dédiés."
          ],
          en: [
            "The <code>mkdir</code> command is used to <strong>create directories</strong>.",
            "Essential for organizing files into dedicated folders."
          ]
        },
        options: {
          fr: [
            { opt: "-p", desc: "crée également les répertoires parents manquants" },
            { opt: "-v", desc: "affiche un message pour chaque répertoire créé" }
          ],
          en: [
            { opt: "-p", desc: "create parent directories as needed" },
            { opt: "-v", desc: "print a message for each created directory" }
          ]
        },
        extraExample: {
          fr: "mkdir -p /tmp/a/b/c",
          en: "mkdir -p /tmp/a/b/c"
        },
        recap: {
          fr: "📂 Crée un répertoire, avec l’option -p pour créer plusieurs niveaux.",
          en: "📂 Creates a directory, with -p to create nested directories."
        }
      },
      {
        name: { fr: "touch fichier.txt", en: "touch file.txt" },
        description: {
          fr: "Crée un fichier vide ou met à jour la date de dernier accès d’un fichier existant.",
          en: "Creates an empty file or updates access and modification timestamps of an existing file."
        },
        example: {
          fr: "touch nouveau_fichier.txt",
          en: "touch new_file.txt"
        },
        bullets: {
          fr: [
            "La commande <code>touch</code> crée un fichier vide si celui-ci n’existe pas.",
            "Sinon, elle met à jour les horodatages du fichier."
          ],
          en: [
            "The <code>touch</code> command creates an empty file if it does not exist.",
            "Otherwise, it updates the file’s timestamps."
          ]
        },
        options: {
          fr: [
            { opt: "-c", desc: "ne crée pas de fichier s’il n’existe pas" },
            { opt: "-t", desc: "spécifie un horodatage personnalisé" }
          ],
          en: [
            { opt: "-c", desc: "do not create file if it does not exist" },
            { opt: "-t", desc: "use specified time instead of current time" }
          ]
        },
        extraExample: {
          fr: "touch -t 202501011200 mon_fichier.txt",
          en: "touch -t 202501011200 my_file.txt"
        },
        recap: {
          fr: "📄 Crée un fichier vide ou met à jour ses horodatages.",
          en: "📄 Creates an empty file or updates its timestamps."
        }
      },
      {
        name: { fr: "sudo useradd", en: "sudo useradd" },
        description: {
          fr: "Ajoute un nouvel utilisateur au système.",
          en: "Adds a new user to the system."
        },
        example: {
          fr: "sudo useradd alice",
          en: "sudo useradd alice"
        },
        bullets: {
          fr: [
            "La commande <code>useradd</code> crée un compte utilisateur.",
            "Permet de paramétrer le dossier personnel et le shell."
          ],
          en: [
            "The <code>useradd</code> command creates a user account.",
            "Allows setting up the home directory and the shell."
          ]
        },
        options: {
          fr: [
            { opt: "-m", desc: "crée le répertoire personnel" },
            { opt: "-s", desc: "définit le shell de l’utilisateur" }
          ],
          en: [
            { opt: "-m", desc: "create home directory" },
            { opt: "-s", desc: "specify user’s login shell" }
          ]
        },
        extraExample: {
          fr: "sudo useradd -m -s /bin/bash bob",
          en: "sudo useradd -m -s /bin/bash bob"
        },
        recap: {
          fr: "👤 Crée un utilisateur avec répertoire perso et shell spécifié.",
          en: "👤 Creates a user with home directory and specified shell."
        }
      }
    ]
  },
  {
    name: { fr: "Suppression", en: "Deletion" },
    commands: [
      {
        name: { fr: "rm fichier.txt", en: "rm file.txt" },
        description: {
          fr: "Supprime des fichiers ou des répertoires.",
          en: "Removes files or directories."
        },
        example: {
          fr: "rm fichier.txt",
          en: "rm file.txt"
        },
        bullets: {
          fr: [
            "La commande <code>rm</code> supprime définitivement des fichiers.",
            "Attention : sans option, elle ne demande pas de confirmation."
          ],
          en: [
            "The <code>rm</code> command permanently deletes files.",
            "Be careful: by default it does not prompt for confirmation."
          ]
        },
        options: {
          fr: [
            { opt: "-r", desc: "supprime récursivement dossiers et fichiers" },
            { opt: "-i", desc: "demande confirmation avant chaque suppression" }
          ],
          en: [
            { opt: "-r", desc: "remove directories and their contents recursively" },
            { opt: "-i", desc: "prompt before every removal" }
          ]
        },
        extraExample: {
          fr: "rm -ri dossier_backup",
          en: "rm -ri backup_folder"
        },
        recap: {
          fr: "🗑️ Supprime récursivement avec confirmation.",
          en: "🗑️ Recursively removes with confirmation."
        }
      },
      {
        name: { fr: "rmdir répertoire", en: "rmdir directory" },
        description: {
          fr: "Supprime un répertoire vide.",
          en: "Removes an empty directory."
        },
        example: {
          fr: "rmdir mon_dossier",
          en: "rmdir my_folder"
        },
        bullets: {
          fr: [
            "La commande <code>rmdir</code> enlève un dossier vide.",
            "Elle échoue si le répertoire contient des fichiers."
          ],
          en: [
            "The <code>rmdir</code> command removes an empty directory.",
            "It fails if the directory is not empty."
          ]
        },
        options: {
          fr: [
            { opt: "-p", desc: "supprime les répertoires parents s’ils deviennent vides" }
          ],
          en: [
            { opt: "-p", desc: "remove parent directories if they become empty" }
          ]
        },
        extraExample: {
          fr: "rmdir -p a/b/c",
          en: "rmdir -p a/b/c"
        },
        recap: {
          fr: "🗑️ Supprime un dossier vide et ses parents s’ils sont vides.",
          en: "🗑️ Removes an empty directory and its empty parent directories."
        }
      }
    ]
  },
  {
    name: { fr: "Modification", en: "Modification" },
    commands: [
      {
        name: { fr: "chmod permissions", en: "chmod permissions" },
        description: {
          fr: "Change les permissions d’un fichier ou d’un répertoire.",
          en: "Changes the permissions of a file or directory."
        },
        example: {
          fr: "chmod 755 script.sh",
          en: "chmod 755 script.sh"
        },
        bullets: {
          fr: [
            "La commande <code>chmod</code> modifie les droits d’accès.",
            "Utilisée pour rendre un script exécutable."
          ],
          en: [
            "The <code>chmod</code> command modifies access permissions.",
            "Used to make a script executable."
          ]
        },
        options: {
          fr: [
            { opt: "-R", desc: "applique récursivement le changement" },
            { opt: "--reference=ref", desc: "copie les permissions d’un autre fichier" }
          ],
          en: [
            { opt: "-R", desc: "apply changes recursively" },
            { opt: "--reference=ref", desc: "use permissions of reference file" }
          ]
        },
        extraExample: {
          fr: "chmod -R 644 /var/www/html",
          en: "chmod -R 644 /var/www/html"
        },
        recap: {
          fr: "🔒 Définit précisément les permissions pour sécuriser l’accès.",
          en: "🔒 Precisely sets permissions to secure access."
        }
      },
      {
        name: { fr: "sudo chown user:group", en: "sudo chown user:group" },
        description: {
          fr: "Modifie le propriétaire et/ou le groupe d’un fichier ou répertoire.",
          en: "Changes the owner and/or group of a file or directory."
        },
        example: {
          fr: "sudo chown alice:users fichier.txt",
          en: "sudo chown alice:users file.txt"
        },
        bullets: {
          fr: [
            "La commande <code>chown</code> change le propriétaire et le groupe.",
            "Nécessite souvent les droits superutilisateur."
          ],
          en: [
            "The <code>chown</code> command changes owner and group.",
            "Often requires superuser privileges."
          ]
        },
        options: {
          fr: [
            { opt: "-R", desc: "applique récursivement" },
            { opt: "--from=old", desc: "change seulement si propriétaire/groupe actuel correspond" }
          ],
          en: [
            { opt: "-R", desc: "apply recursively" },
            { opt: "--from=old", desc: "only change if current owner/group match" }
          ]
        },
        extraExample: {
          fr: "sudo chown -R www-data:www-data /var/www/html",
          en: "sudo chown -R www-data:www-data /var/www/html"
        },
        recap: {
          fr: "👥 Permet de transférer la propriété d’un fichier ou dossier.",
          en: "👥 Allows transferring file or directory ownership."
        }
      }
    ]
  },
  {
    name: { fr: "Copie", en: "Copy" },
    commands: [
      {
        name: { fr: "cp source destination", en: "cp source destination" },
        description: {
          fr: "Copie des fichiers ou des répertoires.",
          en: "Copies files or directories."
        },
        example: {
          fr: "cp source.txt destination.txt",
          en: "cp source.txt destination.txt"
        },
        bullets: {
          fr: [
            "La commande <code>cp</code> duplique des fichiers.",
            "Pratique pour sauvegarder ou cloner du contenu."
          ],
          en: [
            "The <code>cp</code> command duplicates files.",
            "Useful for backing up or cloning content."
          ]
        },
        options: {
          fr: [
            { opt: "-r", desc: "copie récursivement dossiers et fichiers" },
            { opt: "-i", desc: "demande confirmation avant écrasement" }
          ],
          en: [
            { opt: "-r", desc: "copy directories recursively" },
            { opt: "-i", desc: "prompt before overwrite" }
          ]
        },
        extraExample: {
          fr: "cp -ri dossier1/ dossier2/",
          en: "cp -ri folder1/ folder2/"
        },
        recap: {
          fr: "📋 Duplique fichiers et dossiers avec confirmation si nécessaire.",
          en: "📋 Duplicates files and folders with confirmation when needed."
        }
      }
    ]
  },
  {
    name: { fr: "Déplacement", en: "Move" },
    commands: [
      {
        name: { fr: "mv source cible", en: "mv source target" },
        description: {
          fr: "Déplace ou renomme des fichiers ou répertoires.",
          en: "Moves or renames files or directories."
        },
        example: {
          fr: "mv ancien_nom nouveau_nom",
          en: "mv old_name new_name"
        },
        bullets: {
          fr: [
            "La commande <code>mv</code> déplace un fichier vers un autre emplacement.",
            "Elle permet aussi de renommer un fichier."
          ],
          en: [
            "The <code>mv</code> command moves a file to a new location.",
            "It can also rename a file."
          ]
        },
        options: {
          fr: [
            { opt: "-i", desc: "demande confirmation avant écrasement" },
            { opt: "-v", desc: "affiche les fichiers déplacés" }
          ],
          en: [
            { opt: "-i", desc: "prompt before overwrite" },
            { opt: "-v", desc: "show files being moved" }
          ]
        },
        extraExample: {
          fr: "mv -v fichier.txt /tmp/",
          en: "mv -v file.txt /tmp/"
        },
        recap: {
          fr: "🚚 Déplace ou renomme facilement des fichiers et dossiers.",
          en: "🚚 Easily moves or renames files and folders."
        }
      }
    ]
  }
];
const contenuExercice = `
  <h2>Exercice pratique</h2>
  <p>Créez un script Bash ou PowerShell permettant de lister automatiquement tous les fichiers modifiés au cours des 7 derniers jours dans un répertoire donné, puis d’envoyer ce rapport par e-mail à un administrateur.</p>
`;


// Textes d'interface
const uiTexts = {
  fr: {
    selectCategory: "Sélectionnez une catégorie pour afficher les commandes.",
    selectCommand:  "Sélectionnez une commande pour voir les détails.",
    noResults:      "Aucun résultat pour cette recherche.",
    clickCommandForDetails: "Cliquez sur une commande pour voir les détails.",
    noFavorites:    "Aucun favori pour le moment.",
    placeholderSearch: "Rechercher une commande..."
  },
  en: {
    selectCategory: "Select a category to display commands.",
    selectCommand:  "Select a command to see details.",
    noResults:      "No results for this search.",
    clickCommandForDetails: "Click a command to see details.",
    noFavorites:    "No favorites yet.",
    placeholderSearch: "Search a command..."
  }
};

let currentLanguage = localStorage.getItem("lang") || "fr";
let selectedCatIndex = null;
let selectedCmdIndex = null;

// Sélecteurs pour l’interface admin

const modalAddCmd  = document.getElementById("modalAddCmd");
const formAddCmd   = document.getElementById("formAddCmd");
const cancelAddCmd = document.getElementById("cancelAddCmd");

const modalAddExo  = document.getElementById("modalAddExo");
const formAddExo   = document.getElementById("formAddExo");
const cancelAddExo = document.getElementById("cancelAddExo");

window.addEventListener("DOMContentLoaded", () => {
  const sidebar         = document.getElementById("sidebar");
  const commandsSection = document.getElementById("commands");
  const detailsSection  = document.getElementById("details");
  const searchInput     = document.getElementById("searchInput");
  const searchBtn       = document.getElementById("searchBtn");
  const darkModeToggle  = document.getElementById("darkModeToggle");
  const langToggleBtn   = document.getElementById("langToggleBtn");

  setLangButtonText();
  updateUITexts();
  buildSidebar();

  commandsSection.innerHTML = `<p>${uiTexts[currentLanguage].selectCategory}</p>`;
  detailsSection.innerHTML  = `<p>${uiTexts[currentLanguage].selectCommand}</p>`;

  langToggleBtn.addEventListener("click", () => {
    currentLanguage = currentLanguage === "fr" ? "en" : "fr";
    localStorage.setItem("lang", currentLanguage);
    setLangButtonText();
    updateUITexts();
    buildSidebar();
    commandsSection.innerHTML = `<p>${uiTexts[currentLanguage].selectCategory}</p>`;
    detailsSection.innerHTML  = `<p>${uiTexts[currentLanguage].selectCommand}</p>`;
    selectedCatIndex = selectedCmdIndex = null;
  });

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener("input", handleSearch);

  // Admin modals
  btnAddCmd.addEventListener("click", () => modalAddCmd.classList.remove("hidden"));
  cancelAddCmd.addEventListener("click", () => modalAddCmd.classList.add("hidden"));
  formAddCmd.addEventListener("submit", handleAddCommand);

  btnAddExo.addEventListener("click", () => modalAddExo.classList.remove("hidden"));
  cancelAddExo.addEventListener("click", () => modalAddExo.classList.add("hidden"));
  formAddExo.addEventListener("submit", handleAddExercise);
});

function setLangButtonText() {
  const langToggleBtn = document.getElementById("langToggleBtn");
  langToggleBtn.textContent = currentLanguage === "fr" ? "Anglais" : "Français";
}

function updateUITexts() {
  const searchInput = document.getElementById("searchInput");
  searchInput.placeholder = uiTexts[currentLanguage].placeholderSearch;
}

// script.js
// ==========================================================
// 1) TABLEAU CATEGORIES + COMMANDES (FR/EN intégrés)
// ==========================================================
// (le contenu de categoriesData reste inchangé...)

// ...code précédent conservé...

function buildSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = "";
  const ul = document.createElement("ul");

  // Catégories
  categoriesData.forEach((cat, idx) => {
    const li = document.createElement("li");
    li.textContent = cat.name[currentLanguage];
    if (idx === selectedCatIndex) li.classList.add("selected");
    li.addEventListener("click", () => {
      selectedCatIndex = idx;
      selectedCmdIndex = null;
      buildSidebar();
      displayCommands(idx);
    });
    ul.appendChild(li);
  });

  ul.appendChild(document.createElement("hr"));

  // Favoris
  const favLi = document.createElement("li");
  favLi.textContent = currentLanguage === "fr" ? "Favoris" : "Favorites";
  favLi.addEventListener("click", displayFavorites);
  ul.appendChild(favLi);

  // Exercice 1
  const practice1Li = document.createElement("li");
  practice1Li.textContent = currentLanguage === "fr" ? "Pratique 1" : "Exercise 1";
  practice1Li.addEventListener("click", displayPractice);
  ul.appendChild(practice1Li);

  // Exercice 2
  const practice2Li = document.createElement("li");
  practice2Li.textContent = currentLanguage === "fr" ? "Pratique 2" : "Exercise 2";
  practice2Li.addEventListener("click", displayPractice2);
  ul.appendChild(practice2Li);

  sidebar.appendChild(ul);
}

// ❌ Suppression des fonctions liées à "ajouter commande" et "ajouter exercice" car les boutons n'existent plus.



function displayCommands(catIdx) {
  const commandsSection = document.getElementById("commands");
  const detailsSection  = document.getElementById("details");
  commandsSection.innerHTML = "";
  detailsSection.innerHTML  = `<p>${uiTexts[currentLanguage].selectCommand}</p>`;

  categoriesData[catIdx].commands.forEach((cmd, j) => {
    const li = document.createElement("li");
    li.textContent = cmd.name[currentLanguage];
    if (j === selectedCmdIndex) li.classList.add("selectedCmd");
    li.addEventListener("click", () => {
      selectedCmdIndex = j;
      displayCommandDetails(catIdx, j);
    });
    commandsSection.appendChild(li);
  });
}

function displayCommandDetails(catIdx, cmdIdx) {
  const cmd = categoriesData[catIdx].commands[cmdIdx];
  const detailsSection = document.getElementById("details");
  detailsSection.innerHTML = "";

  // En-tête
  const h2 = document.createElement("h2");
  h2.textContent = cmd.name[currentLanguage];
  detailsSection.append(h2, document.createElement("hr"));

  // Description & Exemple
  const pDesc = document.createElement("p");
  pDesc.innerHTML = `<strong>Description :</strong> ${cmd.description[currentLanguage]}`;
  const pEx   = document.createElement("p");
  pEx.innerHTML   = `<strong>Exemple :</strong> <code>${cmd.example[currentLanguage]}</code>`;
  detailsSection.append(pDesc, pEx, document.createElement("hr"));

  // Boutons
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("buttonContainer");

  const copyBtn = document.createElement("button");
  copyBtn.textContent = currentLanguage === "fr" ? "Copier la commande" : "Copy command";
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(cmd.example[currentLanguage]);
    copyBtn.textContent = currentLanguage === "fr" ? "Copié !" : "Copied!";
    setTimeout(() => copyBtn.textContent = currentLanguage === "fr" ? "Copier la commande" : "Copy command", 1000);
  });

  const favBtn = document.createElement("button");
  favBtn.textContent = currentLanguage === "fr" ? "Ajouter aux favoris" : "Add to favorites";
  favBtn.addEventListener("click", () => {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favs.find(f => f.name === cmd.name[currentLanguage])) {
      favs.push({ name: cmd.name[currentLanguage], description: cmd.description[currentLanguage], example: cmd.example[currentLanguage] });
      localStorage.setItem("favorites", JSON.stringify(favs));
      alert(currentLanguage === "fr" ? "Ajouté aux favoris !" : "Added to favorites!");
    } else {
      alert(currentLanguage === "fr" ? "Déjà en favoris" : "Already in favorites");
    }
  });

  btnContainer.append(copyBtn, favBtn);
  detailsSection.appendChild(btnContainer);

  // Bloc étendu
  const extendedDiv = document.createElement("div");
  let html = `<div style="margin-top:1rem;padding:0.5rem 1rem;width:100%;font-size:0.92rem;">`;
  html += `<p><strong>${currentLanguage === "fr" ? "Description étendue" : "Extended description"} :</strong></p>`;
  html += `<ul>`;
  cmd.bullets[currentLanguage].forEach(item => html += `<li>${item}</li>`);
  html += `</ul>`;
  html += `<p><strong>${currentLanguage === "fr" ? "Options utiles" : "Useful options"} :</strong></p>`;
  html += `<ul>`;
  cmd.options[currentLanguage].forEach(opt => html += `<li><code>${opt.opt}</code> : ${opt.desc}.</li>`);
  html += `</ul>`;
  html += `<p><strong>${currentLanguage === "fr" ? "Exemple complet" : "Complete example"} :</strong></p>`;
  html += `<pre><code>${cmd.extraExample[currentLanguage]}</code></pre>`;
  html += `<p>${cmd.recap[currentLanguage]}</p>`;
  html += `</div>`;
  extendedDiv.innerHTML = html;
  detailsSection.appendChild(extendedDiv);

  if (typeof hljs !== "undefined") {
    document.querySelectorAll("code").forEach(b => hljs.highlightElement(b));
  }
}

function handleSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const cmds = document.getElementById("commands");
  const dets = document.getElementById("details");
  if (!query) {
    cmds.innerHTML = `<p>${uiTexts[currentLanguage].selectCategory}</p>`;
    dets.innerHTML = `<p>${uiTexts[currentLanguage].selectCommand}</p>`;
    return;
  }
  const matches = [];
  categoriesData.forEach(cat => cat.commands.forEach(cmd => {
    const text = `${cmd.name[currentLanguage]} ${cmd.description[currentLanguage]} ${cmd.example[currentLanguage]}`.toLowerCase();
    if (text.includes(query)) matches.push({ cmd, category: cat.name[currentLanguage] });
  }));
  displaySearchResults(matches);
}

function displaySearchResults(results) {
  const cmds = document.getElementById("commands");
  const dets = document.getElementById("details");
  dets.innerHTML = `<p>${uiTexts[currentLanguage].clickCommandForDetails}</p>`;
  if (!results.length) {
    cmds.innerHTML = `<p>${uiTexts[currentLanguage].noResults}</p>`;
    return;
  }
  const ul = document.createElement("ul");
  results.forEach(({ cmd, category }) => {
    const li = document.createElement("li");
    li.textContent = `${cmd.name[currentLanguage]} (${category})`;
    li.addEventListener("click", () => {
      categoriesData.forEach((cat, i) => {
        const idx = cat.commands.indexOf(cmd);
        if (idx !== -1) {
          selectedCatIndex = i;
          selectedCmdIndex = idx;
          displayCommandDetails(i, idx);
        }
      });
    });
    ul.appendChild(li);
  });
  cmds.innerHTML = "";
  cmds.appendChild(ul);
}

function displayFavorites() {
  const cmds = document.getElementById("commands");
  const dets = document.getElementById("details");
  dets.innerHTML = `<p>${uiTexts[currentLanguage].clickCommandForDetails}</p>`;
  const favs = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favs.length) {
    cmds.innerHTML = `<p>${uiTexts[currentLanguage].noFavorites}</p>`;
    return;
  }
  const ul = document.createElement("ul");
  favs.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    li.addEventListener("click", () => {
      dets.innerHTML = `
        <h2>${item.name}</h2><hr>
        <p><strong>Description :</strong> ${item.description}</p>
        <p><strong>Exemple :</strong> <code>${item.example}</code></p>
      `;
      if (typeof hljs !== "undefined") {
        document.querySelectorAll("code").forEach(b => hljs.highlightElement(b));
      }
    });
    ul.appendChild(li);
  });
  cmds.innerHTML = "";
  cmds.appendChild(ul);
}

async function displayPractice() {
  const details = document.getElementById("details");
  try {
    const res = await fetch("exercice1.html");
    if (!res.ok) throw new Error(res.statusText);
    details.innerHTML = await res.text();
  } catch (err) {
    details.innerHTML = `<p>Impossible de charger l’exercice 1 : ${err.message}</p>`;
  }
}

async function displayPractice2() {
  const details = document.getElementById("details");
  try {
    const res = await fetch("exercice2.html");
    if (!res.ok) throw new Error(res.statusText);
    details.innerHTML = await res.text();
  } catch (err) {
    details.innerHTML = `<p>Impossible de charger l’exercice 2 : ${err.message}</p>`;
  }
}

// Handler admin command addition
function handleAddCommand(e) {
  e.preventDefault();
  const data     = new FormData(formAddCmd);
  const category = data.get("category");
  let cat = categoriesData.find(c => c.name.fr === category || c.name.en === category);
  if (!cat) {
    cat = { name: { fr: category, en: category }, commands: [] };
    categoriesData.push(cat);
  }
  cat.commands.push({
    name:        { fr: data.get("nameFr"), en: data.get("nameEn") },
    description: { fr: data.get("descFr"), en: data.get("descEn") },
    example:     { fr: "", en: "" }, bullets: { fr: [], en: [] },
    options:     { fr: [], en: [] },
    extraExample:{ fr: "", en: "" }, recap: { fr: "", en: "" }
  });
  buildSidebar();
  modalAddCmd.classList.add("hidden");
  formAddCmd.reset();
}

// Handler admin exercise addition
function handleAddExercise(e) {
  e.preventDefault();
  const data     = new FormData(formAddExo);
  const fileName = data.get("fileName");
  const html     = data.get("htmlContent");
  const blob     = new Blob([html], { type: "text/html" });
  const url      = URL.createObjectURL(blob);
  const a        = document.createElement("a");
  a.href         = url;
  a.download     = fileName;
  a.click();
  URL.revokeObjectURL(url);
  // Ajout dans le menu
  const li = document.createElement("li");
  li.textContent = currentLanguage === "fr" ? `Pratique (${fileName})` : `Exercise (${fileName})`;
  li.addEventListener("click", async () => {
    const res = await fetch(fileName);
    document.getElementById("details").innerHTML = await res.text();
  });
  document.getElementById("sidebar").querySelector("ul").appendChild(li);
  modalAddExo.classList.add("hidden");
  formAddExo.reset();
}
