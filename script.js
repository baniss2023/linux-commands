// ===============================
// 1) TABLEAU DES COMMANDES
// ===============================
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
        description: "Liste détaillée avec droits, propriétaire, taille, etc.",
        example: "ls -l --color=auto /var/log"
      },
      {
        name: "cat fichier.txt",
        description: "Affiche le contenu d’un fichier texte sur la sortie standard.",
        example: "cat /var/log/syslog"
      },
      {
        name: "cut -d: -f1 /etc/passwd",
        description: "Extrait le 1er champ (séparateur `:`) du fichier passwd.",
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
        description: "Affiche un texte à l’écran (ou la valeur d’une variable).",
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
        description: "Affiche le contenu d’un fichier page par page (navigation facile).",
        example: "less /etc/services"
      },
      {
        name: "more",
        description: "Affiche un fichier page par page (moins flexible que less).",
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
        description: "Affiche de façon arborescente le contenu d’un répertoire.",
        example: "tree /home/projets"
      },
      {
        name: "id",
        description: "Affiche l'uid, gid et groupes de l'utilisateur courant.",
        example: "id"
      },
      {
        name: "groups",
        description: "Montre tous les groupes auxquels appartient l'utilisateur.",
        example: "groups"
      }
    ]
  },
  {
    name: "Création",
    commands: [
      {
        name: "touch fichier.txt",
        description: "Crée un nouveau fichier vide ou met à jour sa date s'il existe.",
        example: "touch rapport.txt"
      },
      {
        name: "mkdir mon_dossier",
        description: "Crée un nouveau dossier dans le répertoire courant ou spécifié.",
        example: "mkdir /home/username/Documents/Projets"
      },
      {
        name: "sudo useradd nom_utilisateur",
        description: "Crée un nouvel utilisateur (sans répertoire home par défaut).",
        example: "sudo useradd --create-home alice"
      },
      {
        name: "groupadd nom_du_groupe",
        description: "Crée un nouveau groupe (requiert privilèges admin).",
        example: "sudo groupadd developpeurs"
      },
      {
        name: "sudo adduser nom_utilisateur",
        description: "Crée un nouvel utilisateur via une interface plus conviviale.",
        example: "sudo adduser jean"
      },
      {
        name: "ln -s source cible",
        description: "Crée un lien symbolique (raccourci) vers un fichier ou dossier.",
        example: "ln -s /etc/nginx/nginx.conf ~/nginx.conf"
      },
      {
        name: "parted /dev/sda",
        description: "Ouvre l’outil pour créer/modifier des partitions sur /dev/sda.",
        example: "sudo parted /dev/sda"
      },
      {
        name: "mkfs -t ext4 /dev/sda1",
        description: "Formate la partition /dev/sda1 en ext4 (création système de fichiers).",
        example: "mkfs -t ext4 /dev/sdb2"
      },
      {
        name: "sudo apt install paquet",
        description: "Installe un paquet (ex: tree) depuis les dépôts (Debian/Ubuntu).",
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
        description: "Supprime un utilisateur du système (droits admin).",
        example: "sudo userdel alice"
      },
      {
        name: "groupdel nom_du_groupe",
        description: "Supprime un groupe du système (droits admin).",
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
        description: "Trouve et supprime tous les fichiers correspondant au motif.",
        example: "find /home/user -name '*.bak' -delete"
      },
      {
        name: "umount chemin_ou_device",
        description: "Démonte un système de fichiers (arrête de l’utiliser).",
        example: "sudo umount /mnt/usb"
      }
    ]
  },
  {
    name: "Modification",
    commands: [
      {
        name: "nano fichier.txt",
        description: "Édite un fichier texte avec l’éditeur Nano (ligne de commande).",
        example: "nano /etc/hosts"
      },
      {
        name: "chmod 755 fichier.txt",
        description: "Change les permissions d’un fichier (rwx pour propriétaire).",
        example: "chmod 755 monScript.sh"
      },
      {
        name: "chown user:group fichier.txt",
        description: "Change propriétaire et groupe d’un fichier ou dossier.",
        example: "sudo chown alice:developpeurs rapport.txt"
      },
      {
        name: "passwd nom_utilisateur",
        description: "Change (ou définit) le mot de passe d’un utilisateur.",
        example: "sudo passwd alice"
      },
      {
        name: "usermod -aG groupe utilisateur",
        description: "Ajoute un utilisateur à un groupe (sans enlever ses autres groupes).",
        example: "sudo usermod -aG sudo alice"
      },
      {
        name: "groupmod -n nouveau_nom ancien_nom",
        description: "Renomme un groupe existant (droits admin).",
        example: "sudo groupmod -n devSenior developpeurs"
      },
      {
        name: "crontab -e",
        description: "Modifie la table de cron (tâches planifiées) de l’utilisateur courant.",
        example: "crontab -e"
      },
      {
        name: "mount device repertoire",
        description: "Monte une partition ou un device sur un répertoire.",
        example: "sudo mount /dev/sdb1 /mnt/usb"
      },
      {
        name: "fsck device",
        description: "Vérifie/répare la cohérence du système de fichiers sur une partition.",
        example: "sudo fsck /dev/sda1"
      },
      {
        name: "sync",
        description: "Force l’écriture des données en attente sur le disque (flush).",
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
        description: "Copie tout le contenu d’un dossier vers un autre (récursivement).",
        example: "cp -r /var/www/html /var/www/html_backup"
      },
      {
        name: "scp fichier user@hote:chemin",
        description: "Copie sécurisée d’un fichier vers/depuis une machine distante via SSH.",
        example: "scp index.html user@192.168.1.10:/home/user/"
      },
      {
        name: "rsync -avz source destination",
        description: "Synchronise fichiers/dossiers en local ou à distance (incrémental, rapide).",
        example: "rsync -avz /home/user/docs/ user@192.168.1.10:/backup/docs/"
      },
      {
        name: "install -c fichier destination",
        description: "Copie un fichier et règle ses permissions (pour installer un script).",
        example: "install -m 755 monScript.sh /usr/local/bin/"
      },
      {
        name: "dd if=source of=dest",
        description: "Copie bloc à bloc (clonage de partition, image disque, etc.).",
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
        description: "Renomme un fichier ou un dossier (même commande que pour déplacer).",
        example: "mv cours_v1.pdf cours_final.pdf"
      },
      {
        name: "cd repertoire",
        description: "Change de répertoire courant (déplacement logique dans l’arborescence).",
        example: "cd /home/username/Documents"
      }
    ]
  }
];

// ===============================
// 2) LOGIQUE D'AFFICHAGE
// ===============================
window.addEventListener("DOMContentLoaded", () => {
  // On récupère les 3 colonnes
  const sidebar = document.getElementById("sidebar");
  const commandsSection = document.getElementById("commands");
  const detailsSection = document.getElementById("details");

  // 1) Générer la liste des catégories (colonne de gauche)
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

  // 2) Fonction pour afficher la liste des commandes (colonne du milieu)
  function displayCommands(catIndex) {
    // On vide le contenu avant d'afficher
    commandsSection.innerHTML = "";
    detailsSection.innerHTML = "<p>Sélectionnez une commande pour voir les détails.</p>";

    const selectedCategory = categoriesData[catIndex];
    const ulCommands = document.createElement("ul");

    selectedCategory.commands.forEach((cmd, cmdIndex) => {
      const liCommand = document.createElement("li");
      liCommand.textContent = cmd.name;

      // Au clic sur la commande, afficher ses détails
      liCommand.addEventListener("click", () => {
        displayCommandDetails(catIndex, cmdIndex);
      });

      ulCommands.appendChild(liCommand);
    });

    commandsSection.appendChild(ulCommands);
  }

  // 3) Fonction pour afficher les détails (colonne de droite)
  function displayCommandDetails(catIndex, cmdIndex) {
    const { name, description, example } = categoriesData[catIndex].commands[cmdIndex];

    // On nettoie la zone de droite
    detailsSection.innerHTML = "";

    // Titre (nom de la commande)
    const title = document.createElement("h2");
    title.textContent = name;

    // Barre horizontale sous le titre
    const hr = document.createElement("hr");

    // Paragraphe de description
    const descParagraph = document.createElement("p");
    descParagraph.innerHTML = `<strong>Description :</strong> ${description}`;

    // Paragraphe d'exemple
    const exampleParagraph = document.createElement("p");
    exampleParagraph.innerHTML = `<strong>Exemple :</strong> <code>${example}</code>`;

    detailsSection.appendChild(title);
    detailsSection.appendChild(hr);
    detailsSection.appendChild(descParagraph);
    detailsSection.appendChild(exampleParagraph);
  }
});
