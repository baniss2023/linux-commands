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
      },
      {
        name: "less",
        description: "Affiche un fichier page par page (navigation plus flexible).",
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
        description: "Affiche en arborescence le contenu d’un répertoire.",
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
        description: "Installe un paquet (ex: tree) via apt (Debian/Ubuntu).",
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
        description: "Supprime un dossier et tout son contenu (récursif).",
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
        description: "Édite un fichier texte avec Nano (terminal).",
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
        example: "sudo chown alice:developpeurs rapport.txt"
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
        description: "Synchronise fichiers/dossiers en local ou distant (incrémental).",
        example: "rsync -avz /home/user/docs/ user@192.168.1.10:/backup/docs/"
      },
      {
        name: "install -c fichier destination",
        description: "Copie un fichier en réglant les permissions (installation).",
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
// 2) LOGIQUE POUR AFFICHER CATEGORIES / COMMANDES
// ==========================================================
window.addEventListener("DOMContentLoaded", () => {
  // Récupération des éléments HTML
  const sidebar = document.getElementById("sidebar");
  const commandsSection = document.getElementById("commands");
  const detailsSection = document.getElementById("details");
  const searchInput = document.getElementById("searchInput");

  // --- A) Injection des catégories (colonne de gauche) ---
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

  // --- B) Fonction pour afficher les commandes d'une catégorie ---
  function displayCommands(catIndex) {
    commandsSection.innerHTML = "";
    detailsSection.innerHTML = "<p>Sélectionnez une commande pour voir les détails.</p>";

    const selectedCategory = categoriesData[catIndex];
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

  // --- C) Fonction pour afficher les détails d'une commande (colonne de droite) ---
  function displayCommandDetails(catIndex, cmdIndex) {
    const { name, description, example } = categoriesData[catIndex].commands[cmdIndex];

    detailsSection.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = name;

    const hr = document.createElement("hr");

    const descParagraph = document.createElement("p");
    descParagraph.innerHTML = `<strong>Description :</strong> ${description}`;

    const exampleParagraph = document.createElement("p");
    exampleParagraph.innerHTML = `<strong>Exemple :</strong> <code>${example}</code>`;

    detailsSection.appendChild(title);
    detailsSection.appendChild(hr);
    detailsSection.appendChild(descParagraph);
    detailsSection.appendChild(exampleParagraph);
  }

  // ==========================================================
  // 3) CHAMP DE RECHERCHE (Filtrage en temps réel)
  // ==========================================================
  // Ecoute l'événement "input" sur #searchInput
  searchInput.addEventListener("input", handleSearch);

  function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();

    if (!query) {
      // Si le champ est vide, on réinitialise l'affichage
      commandsSection.innerHTML = "<p>Sélectionnez une catégorie pour afficher les commandes.</p>";
      detailsSection.innerHTML = "<p>Sélectionnez une commande pour voir les détails.</p>";
      return;
    }

    // Rechercher dans toutes les catégories / commandes
    let matchedCommands = [];
    categoriesData.forEach((cat) => {
      cat.commands.forEach((cmd) => {
        // On concatène name + description + example pour la recherche
        const searchString = (cmd.name + " " + cmd.description + " " + cmd.example).toLowerCase();
        if (searchString.includes(query)) {
          // On stocke la commande trouvée, en notant aussi sa catégorie
          matchedCommands.push({
            category: cat.name,
            name: cmd.name,
            description: cmd.description,
            example: cmd.example
          });
        }
      });
    });

    // Affiche la liste des résultats dans la colonne du milieu
    displaySearchResults(matchedCommands);
  }

  // Génère la liste des résultats (colonne du milieu). Au clic, on montre les détails.
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
      // On affiche le nom de la commande, et la catégorie pour info
      li.textContent = `${item.name} (Catégorie: ${item.category})`;

      li.addEventListener("click", () => {
        // Afficher les détails de cet item
        displaySearchCommandDetails(item);
      });

      ul.appendChild(li);
    });

    commandsSection.appendChild(ul);
  }

  // Affiche les détails d'une commande trouvée par la recherche
  function displaySearchCommandDetails(item) {
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
