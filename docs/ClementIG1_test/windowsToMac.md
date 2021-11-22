---
title: Compiler sur mac
---

Si jamais vous désirez télécharger le pdf : [CompilerMac.pdf](../../static/pdf/Compiler_mac.pdf)

Vous aurez vite remarqué que toutes les commandes vues en cours ne sont pas toutes valides sur votre mac. 
On va reprendre ici les plus basiques ainsi que la manière dont on compile sur mac afin de pouvoir travailler les cours de C. 

## Voyager entre les dossiers en ligne de commande 

**- Ouvrir le terminal via spotlight** :mag_right: : 
```
cmd + espace 
Puis tapez : "terminal"
```

**- Afficher les sous dossiers et fichiers de notre répertoire** :  
*commande windows équivalente :* dir 
```
ls
```

**- Rentrer dans un dossier** :file_folder::
```
cd + <nom_de_votre_dossier>

Exemple :
cd Downloads
```

**- Revenir en arrière dans les dossiers** :  
*Commande windows équivalente :* cd..
```
cd -
```

**- Changer de disque** :floppy_disk::  
*Commande windows équivalente :* <lettre_du_disque> :
```
cd /volumes
cd <nom_de_votre_disque>
```

## Compiler le code C

Si sur windows cela fonctionne avec Visual Studio 2019 et la commande cl, ici c'est un petit peu plus complexe, bien qu'en contrepartie on ai rien à installer !

Pour commencer il faudra évidemment retrouver le chemin d'accès de votre fichier.c .

Une fois que vous l'avez, il faudra taper la commande suivante :
```
gcc fichier.c -o <nom_choisi_pour_le_fichier_en_sorti>
```

Un bête exemple, si j'ai un fichier "TableauEx1.c", on peut écrire la commande suivante : 
```
gcc TableauEx1.c -o tableau
```

A noter que ici "tableau" sera le nom donné à notre fichier "éxécutable". (Abus de language). On peut evidemment choisir de l'appeler comme on veut. 

Juste petit tips : 
- Puisqu'on recompile énormément de fois le même code, garder toujours le même nom de sortie. Cela permettra d'écraser le fichier précédent et d'avoir 1 seul fichier "exécutable" à jour.

Pour terminer, la commande pour lancer notre code une fois copiler :
```
./<nom_choisi_pour_le_fichier_en_sorti>

Exemple :
./tableau
```

## Récapitulatif rapide

![recap](../../static/img/ClemIG1_recap.png)
