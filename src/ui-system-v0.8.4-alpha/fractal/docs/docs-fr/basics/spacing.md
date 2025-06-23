**[Principe directeur]({{path '../../docs/documentation/design-principles.html'}})&nbsp;:** Faire preuve de cohérence

<hr class="dark">

## À propos de cette composante
L’espacement est la distance séparant les éléments sur une page. 

Nous employons deux types d’espacement&nbsp;:
* **le remplissage** est la quantité d’espace excédentaire que comportera un élément;
* **les marges** correspondent à la quantité d’espace excédentaire qui entourera un élément.

### L’espacement est intégré aux composantes
Nous avons donné à chaque élément du système de conception une valeur par défaut pour le remplissage et les marges, qui fonctionne dans notre grille d’espacement à 8 pixels et devrait, en règle générale, fonctionner sans modification, quelle que soit la page ou la disposition.

Un élément compte habituellement une marge inférieure de 40 px, par défaut. Les étiquettes auront une marge inférieure de 16 px afin d’être étroitement liées à l’élément de formulaire qui y est associé. Consultez l’exemple ci-dessous&nbsp;:

<img src="{{path '../../markdown-assets/spacing/DS_Spacing_Guidance-fr.png'}}" alt="Formulaire avec deux champs de saisie de texte obligatoires vides : Nom sur la carte et numéro de la carte. L'image montre un espacement de 16 pixels entre l'étiquette « Nom sur la carte (obligatoire) » et le champ de saisie de texte vide situé en dessous. Elle montre ensuite un espacement de 40 pixels entre le champ de saisie de texte vide et le texte « Numéro de carte (obligatoire) », ainsi qu’un espacement de 16 pixels entre l'étiquette « Numéro de la carte (obligatoire) » et le champ de saisie de texte vide situé en dessous" />

### Catégories de contournements
Si l’espacement par défaut pour un élément donné s’intègre mal à votre conception, vous pouvez utiliser des **catégories de contournements** pour le personnaliser.

Recourez à des catégories de contournements pour ajouter séparément un remplissage et des marges de tout côté d’un élément.

Utilisez les catégories de contournements pour l’espacement seulement si la valeur de celui entourant un élément pose un problème dans votre conception.

### Directives pour les catégories de contournements

Alignez de préférence votre espacement sur une **grille à 8 pixels** – ce qui signifie que la quantité totale des espacements est un multiple de 8 pixels.

Si une grille à 8 pixels ne fonctionne pas, vous pouvez utiliser une **grille à 4 pixels** – peut-être lorsque vous devez aligner icônes.

En règle générale, ajoutez de l’espace dans la partie inférieure des éléments, pas dans la partie supérieure. Ainsi, ils défileront mieux sur les écrans de différentes tailles.

Il existe différentes catégories de remplissage et de marges. **Utilisez les catégories de contournements en respectant les indications du graphique suivant.**

<hr>

## Remplissage
Dans la mesure du possible, utiliser des variables d’espacement qui sont des multiples de 8. Elles sont préférables aux multiples de 4.

<div class="fractal-table-scroll">

| Taille |            Haut           |            Droite           |            Bas           |            Gauche           |
| ---- | ------------------------ | -------------------------- | --------------------------- | ------------------------- |
|  *0* | ontario-padding-top-0-!  | ontario-padding-right-0-!  | ontario-padding-bottom-0-!  | ontario-padding-left-0-!  |
|   4  | ontario-padding-top-4-!  | ontario-padding-right-4-!  | ontario-padding-bottom-4-!  | ontario-padding-left-4-!  |
|  *8* | ontario-padding-top-8-!  | ontario-padding-right-8-!  | ontario-padding-bottom-8-!  | ontario-padding-left-8-!  |
|  12  | ontario-padding-top-12-! | ontario-padding-right-12-! | ontario-padding-bottom-12-! | ontario-padding-left-12-! |
| *16* | ontario-padding-top-16-! | ontario-padding-right-16-! | ontario-padding-bottom-16-! | ontario-padding-left-16-! |
|  24  | ontario-padding-top-24-! | ontario-padding-right-24-! | ontario-padding-bottom-24-! | ontario-padding-left-24-! |
| *32* | ontario-padding-top-32-! | ontario-padding-right-32-! | ontario-padding-bottom-32-! | ontario-padding-left-32-! |
|  40  | ontario-padding-top-40-! | ontario-padding-right-40-! | ontario-padding-bottom-40-! | ontario-padding-left-40-! |
| *48* | ontario-padding-top-48-! | ontario-padding-right-48-! | ontario-padding-bottom-48-! | ontario-padding-left-48-! |
|  64  | ontario-padding-top-64-! | ontario-padding-right-64-! | ontario-padding-bottom-64-! | ontario-padding-left-64-! |


</div>

<hr>

<div class="fractal-table-scroll">

## Margins

| Taille |           Haut           |           Droite           |           Bas           |           Gauche           |
| ---- | ----------------------- | ------------------------- | -------------------------- | ------------------------ |
|  *0* | ontario-margin-top-0-!  | ontario-margin-right-0-!  | ontario-margin-bottom-0-!  | ontario-margin-left-0-!  |
|   4  | ontario-margin-top-4-!  | ontario-margin-right-4-!  | ontario-margin-bottom-4-!  | ontario-margin-left-4-!  |
|  *8* | ontario-margin-top-8-!  | ontario-margin-right-8-!  | ontario-margin-bottom-8-!  | ontario-margin-left-8-!  |
|  12  | ontario-margin-top-12-! | ontario-margin-right-12-! | ontario-margin-bottom-12-! | ontario-margin-left-12-! |
| *16* | ontario-margin-top-16-! | ontario-margin-right-16-! | ontario-margin-bottom-16-! | ontario-margin-left-16-! |
|  24  | ontario-margin-top-24-! | ontario-margin-right-24-! | ontario-margin-bottom-24-! | ontario-margin-left-24-! |
| *32* | ontario-margin-top-32-! | ontario-margin-right-32-! | ontario-margin-bottom-32-! | ontario-margin-left-32-! |
|  40  | ontario-margin-top-40-! | ontario-margin-right-40-! | ontario-margin-bottom-40-! | ontario-margin-left-40-! |
| *48* | ontario-margin-top-48-! | ontario-margin-right-48-! | ontario-margin-bottom-48-! | ontario-margin-left-48-! |
|  64  | ontario-margin-top-64-! | ontario-margin-right-64-! | ontario-margin-bottom-64-! | ontario-margin-left-64-! 


</div>

<hr>

## Aidez à améliorer cette page
Si vous avez d’autres suggestions, des conseils ou des questions sur l’espacement, ou sur la nécessité de personnaliser l’espacement de votre conception, l’[équipe du système de conception]({{path '../../docs/give-feedback.html'}}) serait heureuse de les connaître.
