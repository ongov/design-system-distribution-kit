**[Principe directeur]({{path '../../docs/documentation/design-principles.html'}})&nbsp;:** Aider l’utilisateur à réussir au premier essai

## Quand utiliser cette composante
Employez toujours des étiquettes pour les **éléments de saisie d’un formulaire** comme des&nbsp;:
* [cases d’option]({{path './radio-buttons.html'}})
* [listes déroulantes]({{path './dropdown-lists.html'}}) 
* [cases à cocher]({{path './checkboxes.html'}})
* [saisies de texte]({{path './text-inputs.html'}})

Les hyperliens n’ont pas besoin d’étiquettes, qu’ils soient façonnés sous forme de boutons, d’icônes ou d’hyperliens réguliers.

<img src="{{path '../../markdown-assets/labels/DS_Labels_Label-Hinttext-Textinput-fr.png'}}" alt="Étiquette : Numéro de plaque d’immatriculation (obligatoire). Texte d’indication : par exemple, AAAA111. Champ de saisie de texte vide." />

<hr>

## Spécifications techniques
### Emploi des étiquettes en tant que titres
Si la page renferme **un seul** élément de formulaire (p. ex. la page n’affiche qu’une étiquette demandant le numéro de plaque d’immatriculation et une saisie de texte)&nbsp;:

* faites de l’étiquette le titre de la page en l’insérant dans la catégorie H1;
* utilisez le formatage «&nbsp;grande étiquette&nbsp;».

### À faire&nbsp;:
* **Aligner à gauche** les étiquettes, les saisies de texte et le texte d’indication.
* **Toujours employer un attribut «&nbsp;pour&nbsp;»** qui relie l’étiquette à une saisie particulière – il s’agit d’une exigence liée à l’accessibilité.
* Veiller à placer les étiquettes **à proximité du champ auquel elles sont associées**.
* Toujours préciser entre parenthèses si une réponse est **facultative ou obligatoire** à la fin de l’étiquette.
  * Ajouter (obligatoire) près des questions auxquelles l’utilisateur doit répondre pour poursuivre.
  * Ajouter (facultative) près des questions auxquelles l’utilisateur n’a pas à répondre pour poursuivre.

<img src="{{path '../../markdown-assets/labels/DS_Labels_RequiredOptional-fr.png'}}" alt="Partie intitulée Inscrire vos coordonnées. Nom (obligatoire), adresse courriel (obligatoire) et numéro de téléphone (facultatif), avec trois champs de saisie de texte vides sous chaque étiquette." />


### À ne pas faire&nbsp;:
* Employer des étiquettes pour des éléments interactifs autres que des éléments de saisie de formulaire (comme des boutons).
* Placer des étiquettes à l’intérieur de saisies de texte. Il s’agit d’une [pratique nuisant à l’accessibilité]({{path './text-inputs.html#des-champs-de-saisie-de-texte-vierges'}}).
<hr>

##  Spécifications des étiquettes

| Type de composante |  Spécif. pour mobiles | Spécif. pour ordinateurs |
| ------------------ | ------------------------- | ------------------ |
| Étiquette normale | Text Couleur du texte&nbsp;:&nbsp;#1A1A1A<br>Arrière-plan&nbsp;:&nbsp;#FFFFFF<br>Police&nbsp;:&nbsp;Raleway Modified<br>Taille&nbsp;:&nbsp;18px<br>Hauteur de ligne&nbsp;:&nbsp;1.56<br>Épaisseur&nbsp;:&nbsp;700<br>Espacement&nbsp;:&nbsp;0.03rem | Text Couleur du texte&nbsp;:&nbsp;#1A1A1A<br>Arrière-plan&nbsp;:&nbsp;#FFFFFF<br>Police&nbsp;:&nbsp;Raleway Modified<br>Taille&nbsp;:&nbsp;19px<br>Hauteur de ligne&nbsp;:&nbsp;1.5<br>Épaisseur&nbsp;:&nbsp;700<br>Espacement&nbsp;:&nbsp;0.025rem |
| Grande étiquette | Text&nbsp;Couleur du texte&nbsp;:&nbsp;#1A1A1A<br>Arrière-plan&nbsp;:&nbsp;#FFFFFF<br>Police&nbsp;:&nbsp;Raleway Modified<br>Taille&nbsp;:&nbsp;23px<br>Line&nbsp;Height:&nbsp;1.39<br>Épaisseur&nbsp;:&nbsp;700<br>Espacement&nbsp;:&nbsp;0.02rem |Text&nbsp;Couleur du texte&nbsp;:&nbsp;#1A1A1A<br>Arrière-plan&nbsp;:&nbsp;#FFFFFF<br>Police&nbsp;:&nbsp;Raleway Modified<br>Taille&nbsp;:&nbsp;28px<br>Line&nbsp;Height:&nbsp;1.43<br>Épaisseur&nbsp;:&nbsp;700<br>Espacement&nbsp;:&nbsp;0.02rem |

<hr>

## Aidez à améliorer cette page
Si vous avez d’autres suggestions, des conseils ou des questions sur les étiquettes, l’[équipe du système de conception]({{path '../../docs/give-feedback.html'}}) serait heureuse de les connaître.
