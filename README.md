# Arcadia Bomber — V0.2

Jeu d’arène autonome en pixel art, inspiré des jeux de bombes rétro. Un joueur face à trois robots. Premier à trois manches gagnées.

## État du projet

Version initiale jouable. Dépôt indépendant : `Franckmo/Arcadia-bomber`. Le dépôt Breakout ne doit jamais être modifié pour ce jeu.

- HTML Canvas, CSS et JavaScript natif, sans compilation, framework, serveur ni dépendance réseau.
- Interface tactile, flèches/ZQSD/WASD et espace. P : pause ; M : son.
- Carte 13 × 11 aléatoire, départs protégés, murs fixes et caisses destructibles.
- Bombes à retardement, explosions en croix, réactions en chaîne.
- Bonus de capacité, portée et vitesse ; malus de commandes inversées pendant 7 secondes.
- Bruitages électroniques synthétisés. Pas encore de musique.
- Entrée INSERT COIN et pièce virtuelle animée. Le monnayeur détaillé de Breakout n’est pas encore repris.
- PWA, cache hors connexion, icônes Android et Apple.
- Sauvegarde locale toutes les secondes en jeu et lors de pause/quitter ; reprise volontaire via bouton. Scores des manches en cours et palmarès local conservés.
- Sauvegardes propres à chaque navigateur/appareil. Pas de synchronisation réseau.
- Pas de multijoueur humain dans cette version.

## Fichiers

`index.html` contient interface, styles, moteur, IA et stockage. `manifest.webmanifest` décrit la PWA. `sw.js` met en cache les fichiers. `icon.svg`, les icônes PNG et `.nojekyll` complètent le déploiement.

## Publication GitHub Pages

Le code est publié à la racine du dépôt public `Franckmo/Arcadia-bomber`, branche `main`. Dans Settings > Pages, choisir Deploy from a branch, `main`, `/ (root)`. Adresse attendue après déploiement : https://franckmo.github.io/Arcadia-bomber/ (non confirmée tant que Pages n’a pas publié).

Le mode hors connexion nécessite une première ouverture en HTTPS connecté et le chargement du cache. Pour Android, ouvrir dans Chrome puis installer/ajouter à l’écran d’accueil. Sur iOS, ouvrir dans Safari, Partager > Sur l’écran d’accueil. L’installation dépend du navigateur. Le jeu reste utilisable sans installation.

## Mises à jour et sauvegardes

À chaque publication, augmenter `CACHE` dans `sw.js`. Le nouveau Service Worker attend que les anciennes fenêtres du jeu soient fermées : quitter toutes les fenêtres de la PWA puis rouvrir pour appliquer une mise à jour. Ne pas forcer le rechargement d’une partie active.

La version de cache est indépendante des schémas de sauvegarde. Clés : `arcadia-bomber-save-v1`, `arcadia-bomber-settings-v1`, `arcadia-bomber-records-v1`. Conserver ces clés lors des mises à jour compatibles. Pour tout changement incompatible, écrire une migration ; ne pas supprimer les données en bloc. Le stockage peut être indisponible ou effacé par le navigateur, notamment en mode privé.

## Vérifications

V0.1 : 100 générations de cartes, sorties de départ, obstacle aux explosions, destruction, capacité des bombes, collision, 21 manches simulées et lancement observé dans un navigateur.
V0.2 : vérifier le chargement/reprise du stockage, les références du manifeste et le cache. Les essais sur un téléphone réel restent à faire avec Franck.

## Prochaines petites évolutions après test

Ajuster la jouabilité tactile et l’IA selon les retours. Ajouter ensuite un véritable monnayeur rétro, de nouveaux décors et éventuellement de la musique. Ne pas étendre le périmètre sans demande.
