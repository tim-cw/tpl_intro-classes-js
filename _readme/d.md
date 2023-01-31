# Numéro #2

## `ÉTAPE 2` - Analyser un événement
On veut savoir sur quel élément html on a cliqué. Lorsqu'un élément est déclanché, un objet contenant une multitude d'information accompagne l'événement. Il est alors possible d'utiliser cet objet pour savoir sur quel élément a été déclanché le dit événement. Cet objet est _toujours_ disponible.

1. Dans la définition de votre méthode `onClick()`, on va lui passer le paramètre `event`. 

Ce paramètre devient donc disponible dans le contexte de la méthode `onClick`.

2. `event` contient, entre autre, l'élément html sur lequel l'écouteur a été créé avec le `addEventListener`. Effectuez un `console.log` avec `event` pour voir ce qu'il contient

La propriété `currentTarget` est celle qui nous intéresse alors qu'elle nous donne justement accès à l'élément en question. On va alors aller chercher le texte contenu dans cet élément.

Si on utilise l'élément `event.currentTarget.innerText`, c'est possible d'aller chercher la valeur de texte de l'élément en question.

3. Faites apparaître dans la `console` la phrase suivante à l'aide d'un `Template String` : Le bouton ${METTRE LA VALEUR DU TEXTE DU BOUTON ICI} a été cliqué et testez avec le premier bouton.

Si vous cliquez sur les deuxièmes et troisièmes boutons, rien ne se passe. Pourquoi?
Parce que `querySelector` ne retourne que le premier élément correspondant.

4. Adaptez le code en remplaçant `querySelector` par `querySelectorAll` et la boucle `for` afin que les 3 boutons fonctionnent de la même façon.### Analyser l'événement click qui vient de se produire.

N'oubliez pas de renommer votre variable `button` pour `buttons`, ça fera plus de sens ainsi comme vous utilisez `querySelectorAll`.



<br><br><hr>

[Passer à l'étape suivante ▶](e.md)

<hr>

[◀ Retourner à l'étape précédente](c.md)
