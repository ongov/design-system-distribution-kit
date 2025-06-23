**[Principe directeur]({{path '../../docs/documentation/design-principles.html'}})&nbsp;:** Aider l’utilisateur à réussir au premier essai

## Quand utiliser cette composante

### Texte d’indication
Utilisez le texte d’indication uniquement lorsque vous devez&nbsp;:
* expliquer la raison pour laquelle vous posez une certaine question
  * exemple&nbsp;: «&nbsp;Nous enverrons un courriel seulement en cas de problème avec votre commande&nbsp;».
* fournir des éclaircissements
  * exemple&nbsp;: «&nbsp;Par exemple, A1A&nbsp;1A1&nbsp;».
* dire à l’utilisateur où trouver les renseignements que vous lui demandez
  * exemple&nbsp;: «&nbsp;Vous trouverez le montant des impôts exigibles à la ligne 435 de votre avis de cotisation&nbsp;».

### Élargisseur d’indication
Un élargisseur d’indication est un texte d’indication qu’il est possible d’afficher ou de masquer à l’aide d’une touche à bascule. Utilisez un élargisseur d’indication lorsque&nbsp;:
* le texte d’indication fait plus de deux phrases;
* vous voulez donner à l’utilisateur la possibilité de voir une image utile, comme celle de l’emplacement d’un numéro de permis,
  * rappelez-vous que vous avez aussi besoin de texte pour expliquer l’image;
* vous devez vous assurer que la touche à bascule indique à l’utilisateur ce qu’il verra avant qu’il clique,
  * si, par exemple, l’élargisseur d’indication est l’image d’un numéro de permis encerclé, le texte devra dire «&nbsp;Où trouver mon numéro de permis?&nbsp;».
 
N’imbriquez pas d’élargisseurs d’indication et essayez de vous limiter à un par étiquette.
<hr>

## Spécifications techniques

### À faire&nbsp;:
* Aligner le texte d’indication à gauche.
* Placer le texte d’indication sous l’étiquette correspondante.
* Utiliser un identifiant unique qui relie le texte d’indication à une saisie particulière.

### À ne pas faire&nbsp;:
* Placer un texte d’indication à l’intérieur de saisies de texte. Il s’agit d’une [pratique nuisant à l’accessibilité]({{path './text-inputs.html'}}).
* Insérer des photos ou plus de deux phrases dans un texte d’indication (recourir plutôt à un élargisseur d’indication).
* Insérer des sauts de ligne manuels (balises `<br>`).

<hr>

## Spécifications relatives au texte d’indication (graphique sommaire)
| Type de composante | Spécif. pour mobiles | Spécif. pour ordinateurs |
| ------------------ | -------------------- | ------------------ |
| Texte d’indication |  Couleur du texte&nbsp;:&nbsp;#666666<br>Arrière-plan&nbsp;:&nbsp;#FFFFFF<br>Police&nbsp;:&nbsp;Open&nbsp;Sans<br>Taille&nbsp;:&nbsp;16px<br>Hauteur de ligne&nbsp;:&nbsp;1.6<br>Épaisseur&nbsp;:&nbsp;400 | Couleur du texte&nbsp;:&nbsp;#666666<br>Arrière-plan&nbsp;:&nbsp;#FFFFFF<br>Police&nbsp;:&nbsp;Open&nbsp;Sans<br>Taille&nbsp;: 16px<br>Hauteur de ligne&nbsp;:&nbsp;1.6<br>Épaisseur&nbsp;:&nbsp;400|
| Élargisseur d’indication |  Couleur du texte&nbsp;:&nbsp;#1A1A1A<br>Arrière-plan&nbsp;:&nbsp;#FFFFFF<br>Police&nbsp;:&nbsp;Open&nbsp;Sans<br>Taille&nbsp;:&nbsp;16px<br>Hauteur de ligne&nbsp;:&nbsp;1.6<br>Épaisseur&nbsp;:&nbsp;400 | Couleur du texte&nbsp;:&nbsp;#1A1A1A<br>Arrière-plan&nbsp;:&nbsp;#FFFFFF<br>Police&nbsp;:&nbsp;Open&nbsp;Sans<br>Taille&nbsp;:&nbsp;16px<br>Hauteur de ligne&nbsp;:&nbsp;1.6<br>Épaisseur&nbsp;:&nbsp;400 |

<hr>

## Aidez à améliorer cette page
Si vous avez d’autres suggestions, des conseils ou des questions sur le texte d’indication, l’[équipe du système de conception]({{path '../../docs/give-feedback.html'}}) serait heureuse de les connaître.
