**[Principe directeur]({{path '../../docs/documentation/design-principles.html'}})&nbsp;:** Donner le contrôle à l’utilisateur

## Quand utiliser cette composante
Puisque certains utilisateurs estiment qu’elles sont **difficiles à parcourir**, employez des listes déroulantes seulement (aussi appelées «&nbsp;boîtes de sélection&nbsp;») quand vous&nbsp;:
* voulez que l’utilisateur fasse un choix à partir d’une **liste d’options établies**;
* ne pouvez pas saisir de renseignements à l’aide **d’autres éléments de formulaire**, comme des [cases d’option]({{path './radio-buttons.html'}}) ou un [champ de saisie de texte]({{path './text-inputs.html'}}).
 
Habituellement, les listes déroulantes fonctionnent bien avec les entrées pour lesquelles&nbsp;:
* il existe un **ensemble précis d’options**;
* **une seule** option peut être sélectionnée;
* il n’y a que **7 à 15 options** possibles.


<hr>

## Options des listes déroulantes
En règle générale, les options doivent être **intuitives** pour les utilisateurs, mais **ne pas les influencer** pour qu’ils donnent une réponse particulière.

### Nombre d’options
Les listes déroulantes qui fonctionnent le mieux comptent **7 à 15 options**. En présence de&nbsp;:
* moins de 7 options, utilisez plutôt une liste de [cases d’option]({{path './radio-buttons.html'}});
* plus de 15 options, songez à un [champ de saisie de texte]({{path './text-inputs.html'}}) avec [des options prévues ou déjà saisies](https://en.wikipedia.org/wiki/Incremental_search).

### Ordre des options
Les options des listes déroulantes doivent être énoncées par **ordre alphabétique**, à moins de concorder avec un autre ordre logique. Si vous dressez par exemple une liste de provinces, il serait logique de placer l’Ontario au sommet.

Placez les options **«&nbsp;Aucune de ces réponses&nbsp;»** ou **«&nbsp;Je ne sais pas&nbsp;» à la fin de la liste**.

### Choix d’une option par défaut
L’«&nbsp;option par défaut&nbsp;» est celle qui apparaît sur la liste déroulante avant que l’utilisateur clique dessus.

Ne laissez **jamais** l’option par défaut **vierge**.

Si l’objet de la liste déroulante est de **filtrer les résultats**, optez plutôt pour «&nbsp;Tous&nbsp;» comme valeur par défaut. Cette image montre par exemple l’option par défaut «&nbsp;Toutes les catégories&nbsp;»&nbsp;:

<img src="{{path '../../markdown-assets/dropdowns/DS_Dropdowns_Defaultoption-fr.png'}}" alt="Champ obligatoire avec sélection d'une étiquette de catégorie et une liste déroulante affichant toutes les catégories comme l’option par défaut." />

Utilisez une option en tant que valeur par défaut **seulement** si vous savez que [**90 % ou plus](https://uxplanet.org/ux-design-drop-downs-in-forms-c6943ec30037) de vos utilisateurs** sélectionneront cette option en particulier. Dans cet exemple, le Canada est le pays par défaut parce que, dans ce cas, nous sommes sûrs qu’au moins 90 % de nos utilisateurs vivent au Canada&nbsp;:

<img src="{{path '../../markdown-assets/dropdowns/DS_Dropdowns_90percentrule-fr.png'}}" alt="Titre d'adresse de livraison avec une liste déroulante pour remplir le champ obligatoire du pays. L'option « Canada » est sélectionnée par défaut." />

Dans **tous les autres cas**, employez l’option par défaut pour **répéter l’étiquette** – cela aide davantage les utilisateurs ayant des dispositifs d’assistance comme des lecteurs sonores d’écran.

<img src="{{path '../../markdown-assets/dropdowns/DS_Dropdowns_Repeatlabel-fr.png'}}" alt="Étiquette : Choisir une langue (obligatoire). Liste déroulante ayant comme option par défaut « Choisir une langue »." />

<hr>

## Spécifications techniques

L’apparence et le fonctionnement de la liste déroulante dépendent du navigateur de l’utilisateur. **La valeur par défaut du navigateur est la plus accessible** (il prendra par exemple en charge une saisie sur le clavier en plus de pointer avec la souris), alors **n’ajoutez pas de styles personnalisés aux listes déroulantes**.


| Propriété | Appareil mobile | Ordinateur |
|---------------|---------|--------|
| Couleur de bordure | #1a1a1a | #1a1a1a |
| Largeur de bordure | 2px | 2px |
| Hauteur | 48px | 48px |
| Largeur | 160px   | 240px   |

Voici un exemple de Chrome dans IOS&nbsp;:

<img src="{{path '../../markdown-assets/dropdowns/DS_Dropdowns_Chrome-fr.png'}}" alt="Exemple de liste déroulante développée sur laquelle figure les provinces et territoires canadiens sous « Sélectionner la province/le territoire ». Sélectionner est l’option par défaut." />

Les listes déroulantes (et tous les éléments de saisie de formulaire) **doivent comprendre une étiquette et un identifiant correspondant pour être accessibles**. Veuillez consulter les [directives pour les étiquettes]({{path './labels.html'}}) pour veiller à insérer des étiquettes accessibles.

<hr>

## Aidez à améliorer cette page
Si vous avez d’autres suggestions, des conseils ou des questions sur les listes déroulantes, l’[équipe du système de conception]({{path '../../docs/give-feedback.html'}}) serait heureuse de les connaître.
