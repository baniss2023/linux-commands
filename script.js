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
          fr: "Liste les fichiers et dossiers du répertoire courant (ou spécifié).",
          en: "Lists files and directories in the current (or specified) directory."
        },
        example: {
          fr: "ls -lh /home/username",
          en: "ls -lh /home/username"
        }
      },
      {
        name: { fr: "ls -l", en: "ls -l" },
        description: {
          fr: "Liste détaillée (droits, propriétaire, taille...).",
          en: "Displays detailed info (permissions, owner, size...)."
        },
        example: {
          fr: "ls -l --color=auto /var/log",
          en: "ls -l --color=auto /var/log"
        }
      },
      {
        name: { fr: "cat fichier.txt", en: "cat file.txt" },
        description: {
          fr: "Affiche le contenu d’un fichier texte.",
          en: "Displays the content of a text file."
        },
        example: {
          fr: "cat /var/log/syslog",
          en: "cat /var/log/syslog"
        }
      },
      {
        name: { fr: "cut -d: -f1 /etc/passwd", en: "cut -d: -f1 /etc/passwd" },
        description: {
          fr: "Extrait le 1er champ (séparateur :) du fichier passwd.",
          en: "Extracts the first field (':' separator) from /etc/passwd."
        },
        example: {
          fr: "cut -d: -f1 /etc/passwd",
          en: "cut -d: -f1 /etc/passwd"
        }
      },
      {
        name: { fr: "cut -d: -f1 /etc/group", en: "cut -d: -f1 /etc/group" },
        description: {
          fr: "Extrait le 1er champ du fichier group.",
          en: "Extracts the first field from /etc/group."
        },
        example: {
          fr: "cut -d: -f1 /etc/group",
          en: "cut -d: -f1 /etc/group"
        }
      },
      {
        name: { fr: "whoami", en: "whoami" },
        description: {
          fr: "Affiche l'utilisateur actuellement connecté.",
          en: "Shows the currently logged-in user."
        },
        example: {
          fr: "whoami",
          en: "whoami"
        }
      },
      {
        name: { fr: "echo \"Hello World\"", en: "echo \"Hello World\"" },
        description: {
          fr: "Affiche un texte ou la valeur d’une variable à l’écran.",
          en: "Displays text or a variable’s value on screen."
        },
        example: {
          fr: "echo $PATH",
          en: "echo $PATH"
        }
      },
      {
        name: { fr: "head fichier.txt", en: "head file.txt" },
        description: {
          fr: "Affiche les premières lignes d’un fichier (10 par défaut).",
          en: "Shows the first lines of a file (10 by default)."
        },
        example: {
          fr: "head -n 5 /var/log/syslog",
          en: "head -n 5 /var/log/syslog"
        }
      },
      {
        name: { fr: "tail fichier.txt", en: "tail file.txt" },
        description: {
          fr: "Affiche les dernières lignes d’un fichier (10 par défaut).",
          en: "Shows the last lines of a file (10 by default)."
        },
        example: {
          fr: "tail -f /var/log/syslog",
          en: "tail -f /var/log/syslog"
        }
      },
      {
        name: { fr: "less", en: "less" },
        description: {
          fr: "Affiche un fichier page par page (plus flexible que more).",
          en: "Displays a file page by page (more flexible than 'more')."
        },
        example: {
          fr: "less /etc/services",
          en: "less /etc/services"
        }
      },
      {
        name: { fr: "more", en: "more" },
        description: {
          fr: "Affiche un fichier page par page (plus basique que less).",
          en: "Displays a file page by page (simpler than 'less')."
        },
        example: {
          fr: "more /etc/protocols",
          en: "more /etc/protocols"
        }
      },
      {
        name: { fr: "pwd", en: "pwd" },
        description: {
          fr: "Affiche le chemin complet du répertoire courant.",
          en: "Prints the current directory path."
        },
        example: {
          fr: "pwd",
          en: "pwd"
        }
      },
      {
        name: { fr: "man commande", en: "man command" },
        description: {
          fr: "Affiche le manuel d’une commande (options, usage).",
          en: "Displays the manual for a command (options, usage)."
        },
        example: {
          fr: "man ls",
          en: "man ls"
        }
      },
      {
        name: { fr: "tree chemin", en: "tree path" },
        description: {
          fr: "Affiche l’arborescence d’un répertoire.",
          en: "Displays a directory tree structure."
        },
        example: {
          fr: "tree /home/projets",
          en: "tree /home/projets"
        }
      },
      {
        name: { fr: "id", en: "id" },
        description: {
          fr: "Affiche l'uid, gid et groupes de l'utilisateur courant.",
          en: "Shows the current user's uid, gid, and groups."
        },
        example: {
          fr: "id",
          en: "id"
        }
      },
      {
        name: { fr: "groups", en: "groups" },
        description: {
          fr: "Montre les groupes auxquels appartient l'utilisateur.",
          en: "Shows the groups of the current user."
        },
        example: {
          fr: "groups",
          en: "groups"
        }
      }
    ]
  },
  {
    name: { fr: "Création", en: "Creation" },
    commands: [
      {
        name: { fr: "touch fichier.txt", en: "touch file.txt" },
        description: {
          fr: "Crée un nouveau fichier vide ou met à jour sa date.",
          en: "Creates a new empty file or updates its timestamp."
        },
        example: {
          fr: "touch rapport.txt",
          en: "touch report.txt"
        }
      },
      {
        name: { fr: "mkdir mon_dossier", en: "mkdir my_folder" },
        description: {
          fr: "Crée un nouveau dossier (répertoire).",
          en: "Creates a new directory (folder)."
        },
        example: {
          fr: "mkdir /home/username/Documents/Projets",
          en: "mkdir /home/username/Documents/Projects"
        }
      },
      {
        name: { fr: "sudo useradd nom_utilisateur", en: "sudo useradd username" },
        description: {
          fr: "Crée un nouvel utilisateur (sans /home par défaut).",
          en: "Creates a new user (no /home by default)."
        },
        example: {
          fr: "sudo useradd --create-home alice",
          en: "sudo useradd --create-home alice"
        }
      },
      {
        name: { fr: "groupadd nom_du_groupe", en: "groupadd groupname" },
        description: {
          fr: "Crée un nouveau groupe (droits admin).",
          en: "Creates a new group (admin rights)."
        },
        example: {
          fr: "sudo groupadd developpeurs",
          en: "sudo groupadd developers"
        }
      },
      {
        name: { fr: "sudo adduser nom_utilisateur", en: "sudo adduser username" },
        description: {
          fr: "Crée un nouvel utilisateur via une interface plus conviviale.",
          en: "Creates a new user via a more user-friendly interface."
        },
        example: {
          fr: "sudo adduser jean",
          en: "sudo adduser john"
        }
      },
      {
        name: { fr: "ln -s source cible", en: "ln -s source target" },
        description: {
          fr: "Crée un lien symbolique (raccourci) vers fichier/dossier.",
          en: "Creates a symbolic link (shortcut) to a file/folder."
        },
        example: {
          fr: "ln -s /etc/nginx/nginx.conf ~/nginx.conf",
          en: "ln -s /etc/nginx/nginx.conf ~/nginx.conf"
        }
      },
      {
        name: { fr: "parted /dev/sda", en: "parted /dev/sda" },
        description: {
          fr: "Ouvre l’outil parted pour créer/modifier des partitions.",
          en: "Opens parted to create/modify partitions."
        },
        example: {
          fr: "sudo parted /dev/sda",
          en: "sudo parted /dev/sda"
        }
      },
      {
        name: { fr: "mkfs -t ext4 /dev/sda1", en: "mkfs -t ext4 /dev/sda1" },
        description: {
          fr: "Formate la partition /dev/sda1 en ext4.",
          en: "Formats the /dev/sda1 partition as ext4."
        },
        example: {
          fr: "mkfs -t ext4 /dev/sdb2",
          en: "mkfs -t ext4 /dev/sdb2"
        }
      },
      {
        name: { fr: "sudo apt install paquet", en: "sudo apt install package" },
        description: {
          fr: "Installe un paquet (ex: tree) depuis les dépôts (apt).",
          en: "Installs a package (e.g. tree) from apt repositories."
        },
        example: {
          fr: "sudo apt install tree",
          en: "sudo apt install tree"
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
          fr: "Supprime un fichier.",
          en: "Removes a file."
        },
        example: {
          fr: "rm rapport.txt",
          en: "rm report.txt"
        }
      },
      {
        name: { fr: "rm -r mon_dossier", en: "rm -r my_folder" },
        description: {
          fr: "Supprime un dossier et son contenu (récursif).",
          en: "Removes a directory and its content (recursive)."
        },
        example: {
          fr: "rm -r /home/username/Documents/Projets",
          en: "rm -r /home/username/Documents/Projects"
        }
      },
      {
        name: { fr: "rmdir dossier_vide", en: "rmdir empty_folder" },
        description: {
          fr: "Supprime un répertoire vide uniquement.",
          en: "Removes an empty directory only."
        },
        example: {
          fr: "rmdir monDossierVide",
          en: "rmdir myEmptyFolder"
        }
      },
      {
        name: { fr: "sudo userdel nom_utilisateur", en: "sudo userdel username" },
        description: {
          fr: "Supprime un utilisateur (droits admin).",
          en: "Deletes a user (admin rights)."
        },
        example: {
          fr: "sudo userdel alice",
          en: "sudo userdel alice"
        }
      },
      {
        name: { fr: "groupdel nom_du_groupe", en: "groupdel groupname" },
        description: {
          fr: "Supprime un groupe (droits admin).",
          en: "Deletes a group (admin rights)."
        },
        example: {
          fr: "sudo groupdel developpeurs",
          en: "sudo groupdel developers"
        }
      },
      {
        name: { fr: "rm -f fichier.txt", en: "rm -f file.txt" },
        description: {
          fr: "Force la suppression d’un fichier sans confirmation.",
          en: "Forces file deletion without confirmation."
        },
        example: {
          fr: "rm -f importantFile.txt",
          en: "rm -f importantFile.txt"
        }
      },
      {
        name: { fr: "shred fichier.txt", en: "shred file.txt" },
        description: {
          fr: "Écrase un fichier plusieurs fois puis le supprime (sécurité).",
          en: "Overwrites a file multiple times, then removes it (security)."
        },
        example: {
          fr: "shred -u -n 3 secret.txt",
          en: "shred -u -n 3 secret.txt"
        }
      },
      {
        name: { fr: "find /chemin -name \"*.tmp\" -delete", en: "find /path -name \"*.tmp\" -delete" },
        description: {
          fr: "Trouve et supprime les fichiers correspondant au motif.",
          en: "Finds and deletes files matching the pattern."
        },
        example: {
          fr: "find /home/user -name '*.bak' -delete",
          en: "find /home/user -name '*.bak' -delete"
        }
      },
      {
        name: { fr: "umount chemin_ou_device", en: "umount path_or_device" },
        description: {
          fr: "Démonte un système de fichiers.",
          en: "Unmounts a filesystem."
        },
        example: {
          fr: "sudo umount /mnt/usb",
          en: "sudo umount /mnt/usb"
        }
      }
    ]
  },
  {
    name: { fr: "Modification", en: "Modification" },
    commands: [
      {
        name: { fr: "nano fichier.txt", en: "nano file.txt" },
        description: {
          fr: "Édite un fichier texte (interface terminal).",
          en: "Edits a text file (terminal interface)."
        },
        example: {
          fr: "nano /etc/hosts",
          en: "nano /etc/hosts"
        }
      },
      {
        name: { fr: "chmod 755 fichier.txt", en: "chmod 755 file.txt" },
        description: {
          fr: "Change les permissions (rwx) d’un fichier/dossier.",
          en: "Changes the (rwx) permissions of a file/folder."
        },
        example: {
          fr: "chmod 755 monScript.sh",
          en: "chmod 755 myScript.sh"
        }
      },
      {
        name: { fr: "chown user:group fichier.txt", en: "chown user:group file.txt" },
        description: {
          fr: "Change le propriétaire et le groupe d’un fichier.",
          en: "Changes the owner and group of a file."
        },
        example: {
          fr: "sudo chown alice:dev rapport.txt",
          en: "sudo chown alice:dev report.txt"
        }
      },
      {
        name: { fr: "passwd nom_utilisateur", en: "passwd username" },
        description: {
          fr: "Change ou définit le mot de passe d’un utilisateur.",
          en: "Changes or sets a user password."
        },
        example: {
          fr: "sudo passwd alice",
          en: "sudo passwd alice"
        }
      },
      {
        name: { fr: "usermod -aG groupe utilisateur", en: "usermod -aG group user" },
        description: {
          fr: "Ajoute un utilisateur à un groupe (sans enlever les autres).",
          en: "Adds a user to a group (without removing others)."
        },
        example: {
          fr: "sudo usermod -aG sudo alice",
          en: "sudo usermod -aG sudo alice"
        }
      },
      {
        name: { fr: "groupmod -n nouveau_nom ancien_nom", en: "groupmod -n new_name old_name" },
        description: {
          fr: "Renomme un groupe existant (droits admin).",
          en: "Renames an existing group (admin rights)."
        },
        example: {
          fr: "sudo groupmod -n devSenior developpeurs",
          en: "sudo groupmod -n devSenior developers"
        }
      },
      {
        name: { fr: "crontab -e", en: "crontab -e" },
        description: {
          fr: "Modifie la table de cron (tâches planifiées) de l’utilisateur.",
          en: "Modifies the user's cron table (scheduled tasks)."
        },
        example: {
          fr: "crontab -e",
          en: "crontab -e"
        }
      },
      {
        name: { fr: "mount device repertoire", en: "mount device directory" },
        description: {
          fr: "Monte une partition ou un device sur un répertoire.",
          en: "Mounts a partition or device to a directory."
        },
        example: {
          fr: "sudo mount /dev/sdb1 /mnt/usb",
          en: "sudo mount /dev/sdb1 /mnt/usb"
        }
      },
      {
        name: { fr: "fsck device", en: "fsck device" },
        description: {
          fr: "Vérifie/répare la cohérence d’un système de fichiers.",
          en: "Checks/repairs filesystem consistency."
        },
        example: {
          fr: "sudo fsck /dev/sda1",
          en: "sudo fsck /dev/sda1"
        }
      },
      {
        name: { fr: "sync", en: "sync" },
        description: {
          fr: "Force l’écriture des données en attente sur le disque.",
          en: "Forces unwritten data to be written to disk."
        },
        example: {
          fr: "sync",
          en: "sync"
        }
      },
      {
        name: { fr: "rename 's/ancien/nouveau/' *.txt", en: "rename 's/old/new/' *.txt" },
        description: {
          fr: "Renomme par substitution tous les fichiers correspondant au motif.",
          en: "Renames by pattern substitution all matching files."
        },
        example: {
          fr: "rename 's/v1/v2/' *.txt",
          en: "rename 's/v1/v2/' *.txt"
        }
      }
    ]
  },
  {
    name: { fr: "Copie", en: "Copy" },
    commands: [
      {
        name: { fr: "cp fichier1 fichier2", en: "cp file1 file2" },
        description: {
          fr: "Copie un fichier vers un autre fichier ou dossier.",
          en: "Copies a file to another file or folder."
        },
        example: {
          fr: "cp /etc/hosts ~/hosts_backup",
          en: "cp /etc/hosts ~/hosts_backup"
        }
      },
      {
        name: { fr: "cp -r dossier1 dossier2", en: "cp -r folder1 folder2" },
        description: {
          fr: "Copie tout le contenu d’un dossier (récursivement).",
          en: "Copies all contents of a folder recursively."
        },
        example: {
          fr: "cp -r /var/www/html /var/www/html_backup",
          en: "cp -r /var/www/html /var/www/html_backup"
        }
      },
      {
        name: { fr: "scp fichier user@hote:chemin", en: "scp file user@host:path" },
        description: {
          fr: "Copie sécurisée (SSH) d’un fichier vers/depuis une machine distante.",
          en: "Secure copy (SSH) of a file to/from a remote machine."
        },
        example: {
          fr: "scp index.html user@192.168.1.10:/home/user/",
          en: "scp index.html user@192.168.1.10:/home/user/"
        }
      },
      {
        name: { fr: "rsync -avz source destination", en: "rsync -avz source destination" },
        description: {
          fr: "Synchronise fichiers/dossiers (local ou distant, incrémental).",
          en: "Synchronizes files/folders (local or remote, incremental)."
        },
        example: {
          fr: "rsync -avz /home/user/docs/ user@192.168.1.10:/backup/docs/",
          en: "rsync -avz /home/user/docs/ user@192.168.1.10:/backup/docs/"
        }
      },
      {
        name: { fr: "install -c fichier destination", en: "install -c file destination" },
        description: {
          fr: "Copie un fichier en réglant les permissions.",
          en: "Copies a file and sets permissions."
        },
        example: {
          fr: "install -m 755 monScript.sh /usr/local/bin/",
          en: "install -m 755 myScript.sh /usr/local/bin/"
        }
      },
      {
        name: { fr: "dd if=source of=dest", en: "dd if=source of=dest" },
        description: {
          fr: "Copie bloc à bloc (image disque, clonage...).",
          en: "Copies block by block (disk image, cloning...)."
        },
        example: {
          fr: "sudo dd if=/dev/sdb of=/home/user/backup.img bs=4M",
          en: "sudo dd if=/dev/sdb of=/home/user/backup.img bs=4M"
        }
      }
    ]
  },
  {
    name: { fr: "Déplacement", en: "Move" },
    commands: [
      {
        name: { fr: "mv fichier.txt dossier/", en: "mv file.txt folder/" },
        description: {
          fr: "Déplace un fichier vers un autre répertoire.",
          en: "Moves a file to another directory."
        },
        example: {
          fr: "mv rapport.txt /home/username/Documents/",
          en: "mv report.txt /home/username/Documents/"
        }
      },
      {
        name: { fr: "mv ancien.txt nouveau.txt", en: "mv old.txt new.txt" },
        description: {
          fr: "Renomme un fichier ou un dossier (même syntaxe).",
          en: "Renames a file or folder (same syntax)."
        },
        example: {
          fr: "mv cours_v1.pdf cours_final.pdf",
          en: "mv course_v1.pdf course_final.pdf"
        }
      },
      {
        name: { fr: "cd repertoire", en: "cd directory" },
        description: {
          fr: "Change de répertoire courant (déplacement logique).",
          en: "Changes the current directory."
        },
        example: {
          fr: "cd /home/username/Documents",
          en: "cd /home/username/Documents"
        }
      }
    ]
  }
];

// [AJOUT] TEXTES D'INTERFACE
const uiTexts = {
  fr: {
    selectCategory: "Sélectionnez une catégorie pour afficher les commandes.",
    selectCommand: "Sélectionnez une commande pour voir les détails.",
    noResults: "Aucun résultat pour cette recherche.",
    clickCommandForDetails: "Cliquez sur une commande pour voir les détails.",
    noFavorites: "Aucun favori pour le moment.",
    placeholderSearch: "Rechercher une commande..."
  },
  en: {
    selectCategory: "Select a category to display commands.",
    selectCommand: "Select a command to see details.",
    noResults: "No results for this search.",
    clickCommandForDetails: "Click a command to see details.",
    noFavorites: "No favorites yet.",
    placeholderSearch: "Search a command..."
  }
};

// ==========================================================
// 2) LOGIQUE D'INTERACTION
// ==========================================================

let currentLanguage = localStorage.getItem("lang") || "fr";

window.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const commandsSection = document.getElementById("commands");
  const detailsSection = document.getElementById("details");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const langToggleBtn = document.getElementById("langToggleBtn");

  // Variables pour colorer la sélection
  let selectedCatIndex = null;
  let selectedCmdIndex = null;

  // 1) Bouton langue : si c'est FR, on affiche "Anglais"; si EN, "Français"
  setLangButtonText();
  langToggleBtn.addEventListener("click", () => {
    currentLanguage = (currentLanguage === "fr") ? "en" : "fr";
    localStorage.setItem("lang", currentLanguage);
    setLangButtonText();
    updateUITexts();
    buildSidebar();
    commandsSection.innerHTML = `<p>${uiTexts[currentLanguage].selectCategory}</p>`;
    detailsSection.innerHTML = `<p>${uiTexts[currentLanguage].selectCommand}</p>`;
    searchInput.placeholder = uiTexts[currentLanguage].placeholderSearch;
    selectedCatIndex = null; // on réinitialise la sélection
    selectedCmdIndex = null;
  });

  function setLangButtonText() {
    if (currentLanguage === "fr") {
      langToggleBtn.textContent = "Anglais";
    } else {
      langToggleBtn.textContent = "Français";
    }
  }

  // 2) Recherche + mode sombre
  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener("input", handleSearch);

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Construction initiale
  buildSidebar();
  commandsSection.innerHTML = `<p>${uiTexts[currentLanguage].selectCategory}</p>`;
  detailsSection.innerHTML = `<p>${uiTexts[currentLanguage].selectCommand}</p>`;
  searchInput.placeholder = uiTexts[currentLanguage].placeholderSearch;

  // ============================
  // buildSidebar() - Catégories + Favoris
  // ============================
  function buildSidebar() {
    sidebar.innerHTML = "";
    const ulCategories = document.createElement("ul");

    categoriesData.forEach((cat, catIndex) => {
      const liCat = document.createElement("li");
      liCat.textContent = cat.name[currentLanguage];

      // Si c'est la catégorie sélectionnée
      if (catIndex === selectedCatIndex) {
        liCat.classList.add("selected");
      }

      liCat.addEventListener("click", () => {
        selectedCatIndex = catIndex;
        selectedCmdIndex = null;
        updateSidebarSelection(ulCategories);
        displayCommands(catIndex);
      });

      ulCategories.appendChild(liCat);
    });

    const hrFavorites = document.createElement("hr");
    ulCategories.appendChild(hrFavorites);

    const liFavorites = document.createElement("li");
    liFavorites.textContent = "Favoris";
    liFavorites.style.marginTop = "0.5rem";
    liFavorites.addEventListener("click", () => {
      displayFavorites();
    });
    ulCategories.appendChild(liFavorites);

    sidebar.appendChild(ulCategories);
  }

  // ============================
  // displayCommands(catIndex)
  // ============================
  function displayCommands(catIndex) {
    commandsSection.innerHTML = "";
    detailsSection.innerHTML = `<p>${uiTexts[currentLanguage].selectCommand}</p>`;

    const selectedCat = categoriesData[catIndex];
    if (!selectedCat) return;

    const ulCmd = document.createElement("ul");
    selectedCat.commands.forEach((cmd, cmdIndex) => {
      const liCmd = document.createElement("li");
      liCmd.textContent = cmd.name[currentLanguage];

      // commande sélectionnée ?
      if (cmdIndex === selectedCmdIndex) {
        liCmd.classList.add("selectedCmd");
      }

      liCmd.addEventListener("click", () => {
        selectedCmdIndex = cmdIndex;
        updateCommandsSelection(ulCmd);
        displayCommandDetails(catIndex, cmdIndex);
      });

      ulCmd.appendChild(liCmd);
    });

    commandsSection.appendChild(ulCmd);
  }

  // ============================
  // displayCommandDetails
  // ============================
  function displayCommandDetails(catIndex, cmdIndex) {
    detailsSection.innerHTML = "";

    const cmd = categoriesData[catIndex].commands[cmdIndex];
    if (!cmd) return;

    const h2 = document.createElement("h2");
    h2.textContent = cmd.name[currentLanguage];

    const hr = document.createElement("hr");

    const pDesc = document.createElement("p");
    pDesc.innerHTML = `<strong>Description :</strong> ${cmd.description[currentLanguage]}`;

    const pEx = document.createElement("p");
    pEx.innerHTML = `<strong>Exemple :</strong> <code>${cmd.example[currentLanguage]}</code>`;

    detailsSection.appendChild(h2);
    detailsSection.appendChild(hr);
    detailsSection.appendChild(pDesc);
    detailsSection.appendChild(pEx);

    // Trait + conteneur de boutons
    const hr2 = document.createElement("hr");
    detailsSection.appendChild(hr2);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");

    // Bouton "Copier"
    const copyBtn = document.createElement("button");
    copyBtn.textContent = (currentLanguage === "fr") ? "Copier la commande" : "Copy command";
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(cmd.example[currentLanguage])
        .then(() => {
          copyBtn.textContent = (currentLanguage === "fr") ? "Copié !" : "Copied!";
          setTimeout(() => {
            copyBtn.textContent = (currentLanguage === "fr") ? "Copier la commande" : "Copy command";
          }, 1000);
        })
        .catch(err => {
          console.error("Erreur lors de la copie : ", err);
        });
    });
    buttonContainer.appendChild(copyBtn);

    // Bouton "Favoris"
    const favoriteBtn = document.createElement("button");
    favoriteBtn.textContent = (currentLanguage === "fr") ? "Ajouter aux favoris" : "Add to favorites";
    favoriteBtn.addEventListener("click", () => {
      addToFavorites(
        cmd.name[currentLanguage],
        cmd.description[currentLanguage],
        cmd.example[currentLanguage]
      );
    });
    buttonContainer.appendChild(favoriteBtn);

    detailsSection.appendChild(buttonContainer);

    applySyntaxHighlighting();
  }

  // ============================
  // handleSearch()
  // ============================
  function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      commandsSection.innerHTML = `<p>${uiTexts[currentLanguage].selectCategory}</p>`;
      detailsSection.innerHTML = `<p>${uiTexts[currentLanguage].selectCommand}</p>`;
      return;
    }

    let matched = [];
    categoriesData.forEach((cat) => {
      cat.commands.forEach((cmd) => {
        const fullText = (
          cmd.name[currentLanguage] + " " +
          cmd.description[currentLanguage] + " " +
          cmd.example[currentLanguage]
        ).toLowerCase();
        if (fullText.includes(query)) {
          matched.push({
            category: cat.name[currentLanguage],
            name: cmd.name[currentLanguage],
            description: cmd.description[currentLanguage],
            example: cmd.example[currentLanguage]
          });
        }
      });
    });

    displaySearchResults(matched);
  }

  // ============================
  // displaySearchResults
  // ============================
  function displaySearchResults(results) {
    commandsSection.innerHTML = "";
    detailsSection.innerHTML = `<p>${uiTexts[currentLanguage].clickCommandForDetails}</p>`;

    if (results.length === 0) {
      commandsSection.innerHTML = `<p>${uiTexts[currentLanguage].noResults}</p>`;
      return;
    }

    const ul = document.createElement("ul");
    results.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} (${item.category})`;
      li.addEventListener("click", () => {
        displaySearchedCommandDetails(item);
      });
      ul.appendChild(li);
    });
    commandsSection.appendChild(ul);
  }

  // ============================
  // displaySearchedCommandDetails
  // ============================
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

    // Trait + conteneur de boutons
    const hr2 = document.createElement("hr");
    detailsSection.appendChild(hr2);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");

    // Bouton "Copier"
    const copyBtn = document.createElement("button");
    copyBtn.textContent = (currentLanguage === "fr") ? "Copier la commande" : "Copy command";
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(item.example)
        .then(() => {
          copyBtn.textContent = (currentLanguage === "fr") ? "Copié !" : "Copied!";
          setTimeout(() => {
            copyBtn.textContent = (currentLanguage === "fr") ? "Copier la commande" : "Copy command";
          }, 1000);
        })
        .catch(err => {
          console.error("Erreur lors de la copie : ", err);
        });
    });
    buttonContainer.appendChild(copyBtn);

    // Bouton "Favoris"
    const favoriteBtn = document.createElement("button");
    favoriteBtn.textContent = (currentLanguage === "fr") ? "Ajouter aux favoris" : "Add to favorites";
    favoriteBtn.addEventListener("click", () => {
      addToFavorites(item.name, item.description, item.example);
    });
    buttonContainer.appendChild(favoriteBtn);

    detailsSection.appendChild(buttonContainer);

    applySyntaxHighlighting();
  }

  // ============================
  // displayFavorites() -> Colonne du milieu
  // ============================
  function displayFavorites() {
    commandsSection.innerHTML = "";
    detailsSection.innerHTML = `<p>${uiTexts[currentLanguage].clickCommandForDetails}</p>`;

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length === 0) {
      commandsSection.innerHTML = `<p>${uiTexts[currentLanguage].noFavorites}</p>`;
      return;
    }

    const ul = document.createElement("ul");
    favorites.forEach((favItem) => {
      const li = document.createElement("li");
      li.textContent = favItem.name;
      li.addEventListener("click", () => {
        displayFavoriteCommandDetails(favItem);
      });
      ul.appendChild(li);
    });

    commandsSection.appendChild(ul);
  }

  // ============================
  // displayFavoriteCommandDetails
  // ============================
  function displayFavoriteCommandDetails(favItem) {
    detailsSection.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = favItem.name;

    const hr = document.createElement("hr");

    const pDesc = document.createElement("p");
    pDesc.innerHTML = `<strong>Description :</strong> ${favItem.description}`;

    const pEx = document.createElement("p");
    pEx.innerHTML = `<strong>Exemple :</strong> <code>${favItem.example}</code>`;

    detailsSection.appendChild(h2);
    detailsSection.appendChild(hr);
    detailsSection.appendChild(pDesc);
    detailsSection.appendChild(pEx);

    // Trait + conteneur de boutons
    const hr2 = document.createElement("hr");
    detailsSection.appendChild(hr2);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");

    // Bouton "Copier"
    const copyBtn = document.createElement("button");
    copyBtn.textContent = (currentLanguage === "fr") ? "Copier la commande" : "Copy command";
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(favItem.example)
        .then(() => {
          copyBtn.textContent = (currentLanguage === "fr") ? "Copié !" : "Copied!";
          setTimeout(() => {
            copyBtn.textContent = (currentLanguage === "fr") ? "Copier la commande" : "Copy command";
          }, 1000);
        })
        .catch(err => {
          console.error("Erreur lors de la copie : ", err);
        });
    });
    buttonContainer.appendChild(copyBtn);

    detailsSection.appendChild(buttonContainer);

    applySyntaxHighlighting();
  }

  // ============================
  // addToFavorites
  // ============================
  function addToFavorites(name, description, example) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let alreadyExists = favorites.some(item => item.name === name && item.example === example);
    if (!alreadyExists) {
      favorites.push({ name, description, example });
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert((currentLanguage === "fr") ? "Ajouté aux favoris !" : "Added to favorites!");
    } else {
      alert((currentLanguage === "fr") ? "Cette commande est déjà dans vos favoris." : "This command is already in your favorites.");
    }
  }

  // ============================
  // applySyntaxHighlighting
  // ============================
  function applySyntaxHighlighting() {
    document.querySelectorAll('code').forEach(block => {
      hljs.highlightElement(block);
    });
  }

  // ============================
  // updateUITexts (si besoin de maj)
  // ============================
  function updateUITexts() {
    searchInput.placeholder = uiTexts[currentLanguage].placeholderSearch;
  }

  // ============================
  // updateSidebarSelection
  // ============================
  function updateSidebarSelection(ulCategories) {
    const liList = ulCategories.querySelectorAll("li");
    liList.forEach((li) => {
      li.classList.remove("selected");
    });
    if (selectedCatIndex !== null && selectedCatIndex < liList.length) {
      liList[selectedCatIndex].classList.add("selected");
    }
  }

  // ============================
  // updateCommandsSelection
  // ============================
  function updateCommandsSelection(ulCmd) {
    const liList = ulCmd.querySelectorAll("li");
    liList.forEach((li) => {
      li.classList.remove("selectedCmd");
    });
    if (selectedCmdIndex !== null && selectedCmdIndex < liList.length) {
      liList[selectedCmdIndex].classList.add("selectedCmd");
    }
  }
});
