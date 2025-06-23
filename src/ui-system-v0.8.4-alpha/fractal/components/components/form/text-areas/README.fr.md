**[Principe directeur]({{path '../../docs/documentation/design-principles.html'}})&nbsp;:** Donner le contrôle à l’utilisateur

## Quand utiliser cette composante
Une zone de texte (ou boîte de texte) est un **champ à lignes multiples** dans lequel l’utilisateur peut saisir des renseignements.

Employez une zone de texte si vous voulez que l’utilisateur saisisse **plus d’une** simple ligne de renseignements.

N’utilisez pas de zone de texte si&nbsp;:

* vous voulez que les utilisateurs vous fournissent une réponse **en une seule ligne** (songez alors plutôt à une [saisie de texte]({{path './text-inputs.html'}}));
* il est plus simple que l’utilisateur fasse un choix à partir d’une **liste d’options établies**
  * les utilisateurs estiment parfois qu’il est difficile de répondre à des questions ouvertes, alors ne les utilisez que lorsqu’il est insensé de leur offrir un choix de réponses dans une [liste déroulante]({{path './dropdown-lists.html'}})), des [cases d’option]({{path './radio-buttons.html'}})) ou des [cases à cocher]({{path './checkboxes.html'}})).
 

### Exemples
Exemples de cas d’utilisation de zones de texte&nbsp;:

* Commentaires et rétroaction de l’utilisateur
* Sections pour <q>parler de soi</q>
* Demandes de renseignements supplémentaires

<img src="{{path '../../markdown-assets/textarea/DS_Textarea_Feedback-fr.png'}}" alt="Communication de vos commentaires. Commentaires (obligatoire). Prière de n’insérer aucun renseignement personnel ou financier. Flèche pointant sur une zone de texte vide." />

<hr>

## Spécifications techniques
En règle générale, donnez le contrôle à l’utilisateur à propos de ce qu’il saisit.

### À faire&nbsp;:
* Toujours **insérer une [étiquette]({{path './labels.html'}}) associée à un identifiant correspondant**.
* Intégrer un [texte d’indication]({{path './hint-text.html'}}) seulement si nécessaire.
* **Aligner à gauche** les champs de texte (ainsi que leurs étiquettes et le texte d’indication).
* Permettre à l’utilisateur de&nbsp;:
  * **copier-coller** du texte;
  * saisir **n’importe quel caractère** (même si cela ne signifie pas qu’il puisse soumettre tout type de caractères, et rappelez-vous que vous pouvez reformater les réponses dans le système principal);
  * rédiger une réponse **aussi longue qu’il le veut** (autrement, il pourrait avoir un message d’erreur).
* Régler le champ de saisie à la **hauteur qui convient** au type de réponse escompté;
  * cela sert d’indicateur visuel de la longueur de réponse de l’utilisateur (p.&nbsp;ex. environ trois lignes).
* Faire en sorte que la zone de texte remplisse **toute la largeur du conteneur l’entourant**.
* **Conserver les sauts de ligne** à `white-space: pre-wrap;`

### À ne pas faire&nbsp;:
* **Limiter le nombre ou le type de caractères** que l’utilisateur peut insérer.
  * Donner plutôt des directives précises ou déclencher un message d’erreur, au besoin – p.&nbsp;ex. <q> Parlez-nous de vous (200 mots maximum) </q>.
* Insérer un espace réservé ou un texte d’indication **dans la zone de texte**.
* **Supprimer la poignée de redimensionnement qui se trouve** dans le coin supérieur de la zone de texte, qui permet aux utilisateurs de faire glisser le coin du champ pour l’agrandir ou le réduire.
* Insérer une [étiquette]({{path './labels.html'}}) ou un [texte d’indication]({{path './hint-text.html'}}) **dans la zone de texte**.
  * Utiliser un «&nbsp;espace réservé au texte&nbsp;» comme celui-ci [n’est pas une bonne pratique](https://www.nngroup.com/articles/form-design-placeholders/) du point de vue de l’utilité et de l’accessibilité, parce qu’il disparaît lorsque les utilisateurs commencent à taper.

<hr>

## Aidez à améliorer cette page
Si vous avez d’autres suggestions, des conseils ou des questions sur les zones de texte, l’[équipe du système de conception]({{path '../../docs/give-feedback.html'}}) serait heureuse de les connaître.
