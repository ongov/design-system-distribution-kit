**[Principe directeur]({{path '../../docs/documentation/design-principles.html'}})&nbsp;:** Donner le contrôle à l’utilisateur

## Quand utiliser cette composante
Employez des cases d’option si vous voulez que l’utilisateur sélectionne **une seule option** dans une liste.

Si vous voulez que l’utilisateur sélectionne plus d’une seule option, utilisez une liste pourvue de [cases d’option]({{path './checkboxes.html'}}).
<hr>

## Ordre des listes de cases d’option

Mettez les listes de cases d’option en ordre **alphabétique**, sauf pour ces exceptions&nbsp;:
* inscrire **oui avant non**;
* si vous savez qu’une proportion de **[90 % ou plus](https://uxplanet.org/ux-design-drop-downs-in-forms-c6943ec30037) de vos utilisateurs** sélectionneront une option en particulier, placez‑la au sommet de la liste;
  * inscrivez par exemple «&nbsp;Ontario&nbsp;» au sommet de la liste si les utilisateurs sélectionnent leur province dans une liste;
  * prenez soin de ne pas influencer le choix de l’utilisateur ou d’insister sur l’importance de la première option par rapport à une autre;
* placez les options **«&nbsp;Aucune de ces réponses&nbsp;»** ou **«&nbsp;Je ne sais pas&nbsp;» à la fin de la liste**.

<hr>

## Spécifications techniques

<img src="{{path '../../markdown-assets/radio-buttons/DS_Radiobuttons_Label-fr.png'}}" alt="Choisir votre période de renouvellement (obligatoire). Deux cases à cocher avec les options Deux ans et Un an. Flèche pointant vers l'option Deux ans pour indiquer l’étiquette." />

### À faire&nbsp;:
* **Toujours insérer une [étiquette]({{path './labels.html'}})  associée à un identifiant correspondant** près de chaque case d’option.
* Placer les cases d’option **à gauche de leurs étiquettes.**
* **Aligner les cases d’option à gauche.**
* Toujours permettre **la sélection de l’étiquette et de la case d’option.**
* Empiler les cases d’option **à la verticale.**
  * Exception&nbsp;: oui/non peuvent être placés à l’horizontale.
* **Insérer l’option «&nbsp;Aucune de ces réponses&nbsp;»** ou **«&nbsp;Je ne sais pas&nbsp;»**, si elle est valide, parce que les utilisateurs ne peuvent pas revenir en arrière pour ne pas sélectionner d’option une fois qu’ils en ont sélectionné une.


### À ne pas faire&nbsp;:
* Changer la **taille par défaut** d’une case d’option (32 px pour ordinateur et 36 px pour appareils mobiles, et une zone de touche de 48 px pour les deux).
* **Présélectionner** des cases d’option (les utilisateurs pourraient rater la question ou soumettre la mauvaise réponse).


<hr>

## Aidez à améliorer cette page
L’équipe du système de conception songe à proposer une case d’option plus petite – veuillez [nous faire savoir]({{path '../../docs/give-feedback.html'}}) si ce genre de case vous serait utile.

Si vous avez d’autres suggestions, des conseils ou des questions sur les cases d’option, l’[équipe du système de conception]({{path '../../docs/give-feedback.html'}}) serait heureuse de les connaître.
