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
        description: "Affiche un texte ou la valeur d’une variable à l’écran.",
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
      },
      {
        name: "less",
        description: "Affiche un fichier page par page (plus flexible que more).",
        example: "less /etc/services"
      },
      {
        name: "more",
        description: "Affiche un fichier page par page (plus basique que less).",
        example: "more /etc/protocols"
      },
      {
        name: "pwd",
        description: "Affiche le chemin complet du répertoire courant.",
        example: "pwd"
      },
      {
        name: "man commande",
        description: "Affiche le manuel d’une commande (options, usage).",
        example: "man ls"
      },
      {
        name: "tree chemin",
        description: "Affiche l’arborescence d’un répertoire.",
        example: "tree /home/projets"
      },
      {
        name: "id",
        description: "Affiche l'uid, gid et groupes de l'utilisateur courant.",
        example: "id"
      },
      {
        name: "groups",
        description: "Montre les groupes auxquels appartient l'utilisateur.",
        example: "groups"
      }
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
      },
      {
        name: "groupadd nom_du_groupe",
        description: "Crée un nouveau groupe (droits admin).",
        example: "sudo groupadd developpeurs"
      },
      {
        name: "sudo adduser nom_utilisateur",
        description: "Crée un nouvel utilisateur via une interface plus conviviale.",
        example: "sudo adduser jean"
      },
      {
        name: "ln -s source cible",
        description: "Crée un lien symbolique (raccourci) vers fichier/dossier.",
        example: "ln -s /etc/nginx/nginx.conf ~/nginx.conf"
      },
      {
        name: "parted /dev/sda",
        description: "Ouvre l’outil parted pour créer/modifier des partitions.",
        example: "sudo parted /dev/sda"
      },
      {
        name: "mkfs -t ext4 /dev/sda1",
        description: "Formate la partition /dev/sda1 en ext4.",
        example: "mkfs -t ext4 /dev/sdb2"
      },
      {
        name: "sudo apt install paquet",
        description: "Installe un paquet (ex: tree) depuis les dépôts (apt).",
        example: "sudo apt install tree"
      }
    ]
  },
  {
    name: "Suppression",
    commands: [
      {
        name: "rm fichier.txt",
        description: "Supprime un fichier.",
        example: "rm rapport.txt"
      },
      {
        name: "rm -r mon_dossier",
        description: "Supprime un dossier et son contenu (récursif).",
        example: "rm -r /home/username/Documents/Projets"
      },
      {
        name: "rmdir dossier_vide",
        description: "Supprime un répertoire vide uniquement.",
        example: "rmdir monDossierVide"
      },
      {
        name: "sudo userdel nom_utilisateur",
        description: "Supprime un utilisateur (droits admin).",
        example: "sudo userdel alice"
      },
      {
        name: "groupdel nom_du_groupe",
        description: "Supprime un groupe (droits admin).",
        example: "sudo groupdel developpeurs"
      },
      {
        name: "rm -f fichier.txt",
        description: "Force la suppression d’un fichier sans confirmation.",
        example: "rm -f importantFile.txt"
      },
      {
        name: "shred fichier.txt",
        description: "Écrase un fichier plusieurs fois puis le supprime (sécurité).",
        example: "shred -u -n 3 secret.txt"
      },
      {
        name: "find /chemin -name \"*.tmp\" -delete",
        description: "Trouve et supprime les fichiers correspondant au motif.",
        example: "find /home/user -name '*.bak' -delete"
      },
      {
        name: "umount chemin_ou_device",
        description: "Démonte un système de fichiers.",
        example: "sudo umount /mnt/usb"
      }
    ]
  },
  {
    name: "Modification",
    commands: [
      {
        name: "nano fichier.txt",
        description: "Édite un fichier texte (interface terminal).",
        example: "nano /etc/hosts"
      },
      {
        name: "chmod 755 fichier.txt",
        description: "Change les permissions (rwx) d’un fichier/dossier.",
        example: "chmod 755 monScript.sh"
      },
      {
        name: "chown user:group fichier.txt",
        description: "Change le propriétaire et le groupe d’un fichier.",
        example: "sudo chown alice:dev rapport.txt"
      },
      {
        name: "passwd nom_utilisateur",
        description: "Change ou définit le mot de passe d’un utilisateur.",
        example: "sudo passwd alice"
      },
      {
        name: "usermod -aG groupe utilisateur",
        description: "Ajoute un utilisateur à un groupe (sans enlever les autres).",
        example: "sudo usermod -aG sudo alice"
      },
      {
        name: "groupmod -n nouveau_nom ancien_nom",
        description: "Renomme un groupe existant (droits admin).",
        example: "sudo groupmod -n devSenior developpeurs"
      },
      {
        name: "crontab -e",
        description: "Modifie la table de cron (tâches planifiées) de l’utilisateur.",
        example: "crontab -e"
      },
      {
        name: "mount device repertoire",
        description: "Monte une partition ou un device sur un répertoire.",
        example: "sudo mount /dev/sdb1 /mnt/usb"
      },
      {
        name: "fsck device",
        description: "Vérifie/répare la cohérence d’un système de fichiers.",
        example: "sudo fsck /dev/sda1"
      },
      {
        name: "sync",
        description: "Force l’écriture des données en attente sur le disque.",
        example: "sync"
      },
      {
        name: "rename 's/ancien/nouveau/' *.txt",
        description: "Renomme par substitution tous les fichiers correspondant au motif.",
        example: "rename 's/v1/v2/' *.txt"
      }
    ]
  },
  {
    name: "Copie",
    commands: [
      {
        name: "cp fichier1 fichier2",
        description: "Copie un fichier vers un autre fichier ou dossier.",
        example: "cp /etc/hosts ~/hosts_backup"
      },
      {
        name: "cp -r dossier1 dossier2",
        description: "Copie tout le contenu d’un dossier (récursivement).",
        example: "cp -r /var/www/html /var/www/html_backup"
      },
      {
        name: "scp fichier user@hote:chemin",
        description: "Copie sécurisée (SSH) d’un fichier vers/depuis une machine distante.",
        example: "scp index.html user@192.168.1.10:/home/user/"
      },
      {
        name: "rsync -avz source destination",
        description: "Synchronise fichiers/dossiers (local ou distant, incrémental).",
        example: "rsync -avz /home/user/docs/ user@192.168.1.10:/backup/docs/"
      },
      {
        name: "install -c fichier destination",
        description: "Copie un fichier en réglant les permissions.",
        example: "install -m 755 monScript.sh /usr/local/bin/"
      },
      {
        name: "dd if=source of=dest",
        description: "Copie bloc à bloc (image disque, clonage...).",
        example: "sudo dd if=/dev/sdb of=/home/user/backup.img bs=4M"
      }
    ]
  },
  {
    name: "Déplacement",
    commands: [
      {
        name: "mv fichier.txt dossier/",
        description: "Déplace un fichier vers un autre répertoire.",
        example: "mv rapport.txt /home/username/Documents/"
      },
      {
        name: "mv ancien.txt nouveau.txt",
        description: "Renomme un fichier ou un dossier (même syntaxe).",
        example: "mv cours_v1.pdf cours_final.pdf"
      },
      {
        name: "cd repertoire",
        description: "Change de répertoire courant (déplacement logique).",
        example: "cd /home/username/Documents"
      }
    ]
  }
];

// ==========================================================
// 2) LOGIQUE D'INTERACTION : Categories, Commands, Details
// ==========================================================
window.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const commandsSection = document.getElementById("commands");
  const detailsSection = document.getElementById("details");
  // Champ de recherche + bouton loupe
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  // Bouton pour activer/désactiver le mode sombre
  const darkModeToggle = document.getElementById("darkModeToggle");

  // A) Injection des catégories dans la colonne de gauche
  const ulCategories = document.createElement("ul");
  categoriesData.forEach((cat, catIndex) => {
    const liCat = document.createElement("li");
    liCat.textContent = cat.name;

    liCat.addEventListener("click", () => {
      displayCommands(catIndex);
    });
    ulCategories.appendChild(liCat);
  });
  sidebar.appendChild(ulCategories);

  // B) Afficher la liste des commandes (colonne du milieu)
  function displayCommands(catIndex) {
    commandsSection.innerHTML = "";
    detailsSection.innerHTML = "<p>Sélectionnez une commande pour voir les détails.</p>";

    const selectedCat = categoriesData[catIndex];
    if (!selectedCat) return;

    const ulCmd = document.createElement("ul");
    selectedCat.commands.forEach((cmd, cmdIndex) => {
      const liCmd = document.createElement("li");
      liCmd.textContent = cmd.name;

      liCmd.addEventListener("click", () => {
        displayCommandDetails(catIndex, cmdIndex);
      });

      ulCmd.appendChild(liCmd);
    });

    commandsSection.appendChild(ulCmd);
  }

  // C) Afficher les détails (colonne de droite)
  function displayCommandDetails(catIndex, cmdIndex) {
    detailsSection.innerHTML = "";

    const cmd = categoriesData[catIndex].commands[cmdIndex];
    if (!cmd) return;

    const h2 = document.createElement("h2");
    h2.textContent = cmd.name;

    const hr = document.createElement("hr");

    const pDesc = document.createElement("p");
    pDesc.innerHTML = `<strong>Description :</strong> ${cmd.description}`;

    const pEx = document.createElement("p");
    pEx.innerHTML = `<strong>Exemple :</strong> <code>${cmd.example}</code>`;

    detailsSection.appendChild(h2);
    detailsSection.appendChild(hr);
    detailsSection.appendChild(pDesc);
    detailsSection.appendChild(pEx);
  }

  // ==========================================================
  // 3) RECHERCHE (champ + bouton loupe)
  // ==========================================================
  //  A) Écoute la saisie
  searchInput.addEventListener("input", handleSearch);
  //  B) Écoute le clic sur le bouton
  searchBtn.addEventListener("click", handleSearch);

  function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      // Si le champ est vide, on réinitialise
      commandsSection.innerHTML = "<p>Sélectionnez une catégorie pour afficher les commandes.</p>";
      detailsSection.innerHTML = "<p>Sélectionnez une commande pour voir les détails.</p>";
      return;
    }

    // Recherche dans toutes les catégories
    let matched = [];
    categoriesData.forEach((cat) => {
      cat.commands.forEach((cmd) => {
        const allText = (cmd.name + " " + cmd.description + " " + cmd.example).toLowerCase();
        if (allText.includes(query)) {
          matched.push({
            category: cat.name,
            name: cmd.name,
            description: cmd.description,
            example: cmd.example
          });
        }
      });
    });

    displaySearchResults(matched);
  }

  // Affiche la liste filtrée (colonne du milieu)
  function displaySearchResults(results) {
    commandsSection.innerHTML = "";
    detailsSection.innerHTML = "<p>Cliquez sur une commande pour voir les détails.</p>";

    if (results.length === 0) {
      commandsSection.innerHTML = "<p>Aucun résultat pour cette recherche.</p>";
      return;
    }

    const ul = document.createElement("ul");
    results.forEach((item) => {
      const li = document.createElement("li");
      // On affiche le nom + (Catégorie: X)
      li.textContent = `${item.name} (Catégorie: ${item.category})`;

      li.addEventListener("click", () => {
        displaySearchedCommandDetails(item);
      });
      ul.appendChild(li);
    });
    commandsSection.appendChild(ul);
  }

  // Affiche les détails d'un item trouvé via recherche
  function displaySearchedCommandDetails(item) {
    detailsSection.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = item.name;

    const hr = document.createElement("hr");

    const pDesc = document.createElement("p");
    pDesc.innerHTML = `<strong>Description :</strong> ${item.description}`;

    const pEx = document.createElement("p");
    pEx.innerHTML = `<strong>Exemple :</strong> <code>${item.example}</code>`;

    detailsSection.appendChild(h2);
    detailsSection.appendChild(hr);
    detailsSection.appendChild(pDesc);
    detailsSection.appendChild(pEx);
  }

  // ==========================================================
  // 4) MODE SOMBRE - Toggle
  // ==========================================================
  darkModeToggle.addEventListener("click", () => {
    // Bascule la classe "dark-mode" sur le <body>
    document.body.classList.toggle("dark-mode");
  });

});
