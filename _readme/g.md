# Numéro #3

## `ÉTAPE 3` - On choisi un fruit de façon aléatoire

Notre tableau contient `4` fruits, il nous faudrait donc un numéro aléatoire entre 1 et 4. Cependant, l'index du premier élément d'un tableau commence à `0` plutôt qu'à `1`... Nous aurons donc besoin, au final, d'un nombre entre `0 et 3`.


1. Au tout début de la méthode `addFruit`, créez une variable `locale` nommée `number` en lui assignant `Math.random()`. Ceci retournera une valeur entre `0` (inclus) et `1` (exclus). Mettez un console.log juste au dessous pour valider la valeur.

Suivez les étapes suivantes et `testez` à plusieurs reprises en rafraichissant afin de voir le nombre aléatoire changer pour bien comprendre.

2. Modifiez l'assignation de la variable `number` en multipliant le résultat le `this.fruits.length`, soit la propriété du tableau qui indique le nombre d'éléments qu'il contient.

Ceci retourne un nombre avec décimal entre 0 (inclus) et 4 (exclus). Cependant, l'index d'un tableau doit absolument être un entier.

3. Arrondissez la valeur vers le bas en englobant l'assignation de la variable `number`... `= Math.floor(Math.random() * this.fruits.length)`;

4. Finalement, au lieu de toujours aller chercher le fruit à l'emplacement `[0]` dans le tableau, utilisez la variable `number` pour dynamiser la sélection.

<br><br>

Dernière chose. Retournez à la page d'accueil des exercices et ouvrez votre console. Vous y verrez l'erreur JavaScript `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')`.

Cette dernière indique que l'élément sur lequel vous avez ajouté `addEventListener` est non existant. Il n'y a pas de bouton avec la classe `.js-button` dans cette page. Utilisons la programmation défensive pour éviter que notre JavaScript brise, ce qui pourrait rendre la page inutilisable.

5. Englobez votre ligne d'écouteur de click par Ajoutez `if (this.button) { ... }`. Ainsi, si `this.button` ne contient aucun élément HTML, ça ne retournera aucune erreur.

## Bravo, vous avez complété l'exercice!

<br><br><hr>


[◀ Retourner à l'étape précédente](d.md)
