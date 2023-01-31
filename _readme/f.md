# Numéro #3

## `ÉTAPE 2` - On prépare nos variables

### Débutons la nouvelle classe Main

1. Dans la méthode `constructor`, créez une variable `globale` nommée `fruits` à laquelle vous assignerez le tableau suivant : `['banane', 'fraise', 'pomme', 'framboise']`.

Nous la créons ici, ainsi que les suivantes, dans l'espace globale car nous en aurons besoin à plus d'un endroit dont dans une méthode qui sera appellée à la suite d'un événement `click`.

Si vous regardez dans `numero3.html`, vous pourrez voir un `div` avec la classe `js-container` ainsi qu'un bouton avec la classe `.js-add`. Le click sur l'un injectera des éléments HTML dynamiques dans l'autre.

Nous devons stocker une référence à ces deux éléments HTML comme nous voulons les utiliser en JavaScript.

2. Créez une autre variable `globale` nommée `container` dans le `constructor` et utilisez `querySelector` pour aller chercher la référence.

3. Faites la même chose pour le bouton sous votre variable `container` en utilisant le nom de variable `buttonAdd`.

4. Créez ensuite la méthode `addFruit` dans votre classe et, dans la méthode `init`, ajouter un écouteur de `click` sur le bouton qui l'appelera. N'oubliez pas `l'exception` de contexte pour un événement.

5. Mettez un console log et à l'aide d'un `Template String`, affichez la phrase suivante: `Le fruit du jour est la NOM_DU_FRUIT!`. Vous devez remplacer `NOM_DU_FRUIT` par le tout premier élément du tableau contenu dans la variable `this.fruits`. Utilisez les crochets et allez chercher la référence à la première position du tableau `this.fruits[0]`.

Maintenant, nous allons créer un élément HTML dynamiquement (il n'existe pas dans le HTML).

6. Dans la méthode `addFruit`, créez une variable `p` (qui ne sera accessible que de cette méthode (pas globale)). Vous allez ensuite lui assigner un nouvel object en utilise la méthode `document.createElement('p');`

Afin de mettre du contenu texte dans cet élément, nous utiliserons la propriété `innerText`.

7. Sous la ligne précédence, ajoutez `p.innerText = ` puis déplacez le `Template String` de votre console.log à la suite du égal.

Pour insérer le `p` dans le conteneur. Il faut une référence à un élément HTML `(on a déjà this.container)`.

8. Tappez ceci à la suite de votre méthode `this.container.appendChild(p);`

<br><br><hr>

[Passer à l'étape suivante ▶](g.md)

<hr>

[◀ Retourner à l'étape précédente](e.md)
