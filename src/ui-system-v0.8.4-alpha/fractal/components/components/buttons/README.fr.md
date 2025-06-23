**[Principe directeur]({{path '../../docs/documentation/design-principles.html'}})&nbsp;:** Faire preuve de cohérence

## Quand utiliser cette composante
Employez des boutons lorsque vous voulez que l’utilisateur **fasse** quelque chose (souvent appelé «&nbsp;appel à l’action&nbsp;»); par exemple, qu’il&nbsp;:

* lance un processus de demande ou une transaction;
* consente à faire un paiement;
* télécharge un <abbr title="portable document format">PDF</abbr>.

N’utilisez pas de bouton si vous n’encouragez pas une action. Les boutons **ne doivent pas avoir la même fonction qu’un hyperlien**, qui envoie habituellement l’utilisateur sur une autre page ou dans une partie différente de la même page.

<hr>

## Types de boutons
Employez un **bouton primaire** pour attirer l’attention sur la **principale action** que vous voulez inciter l’utilisateur à entreprendre. Évitez l’insertion de plusieurs boutons primaires sur une page, à moins que la page comporte des appels à l’action d’égale importance.

Employez un **bouton secondaire** pour un appel à l’action **moins important** sur une page. Évitez l’insertion de plusieurs boutons secondaires pour que l’utilisateur ne se demande pas ce qu’il doit faire ensuite. Demandez plutôt au rédacteur de simplifier ou de fragmenter le contenu de manière à ne pas avoir besoin de plusieurs boutons secondaires.

Employez des **boutons tertiaires** pour les hyperliens qui doivent fonctionner comme un bouton, comme «&nbsp;modifier&nbsp;» ou «&nbsp;annuler&nbsp;», dans des demandes. Le recours à plusieurs boutons tertiaires sur une page est correct.

### Boutons désactivés

La désactivation des boutons jusqu’au moment où les utilisateurs ont correctement rempli un formulaire peut générer des problèmes d’utilisation et d’accessibilité. Les boutons désactivés peuvent créer des barrières pour les utilisateurs de technologies d’assistance et les utilisateurs ayant des déficiences physiques ou cognitives. Ils peuvent en outre être déroutants et frustrants pour tous les utilisateurs – ils n’aident pas l’utilisateur à comprendre ce qu’il doit faire pour continuer sa démarche.

Une meilleure approche consisterait à **garder les boutons activés** et à **développer une gestion des erreurs** qui affiche des commentaires clairs sur les champs qui n’ont pas été saisis ou sur les erreurs de saisie lorsque l’utilisateur tente de soumettre le formulaire. Pour obtenir des conseils portant sur les messages d’erreur, consultez [Alertes de page]({{path './page-alerts.html'}}).


<hr>

## Spécifications techniques

| Type de bouton | Couleur | Largeur minimale |
|----------------------|---------------------------------------------|------------------------|
|Bouton primaire | Arrière-plan par défaut&nbsp;: `#0066CC`<br>Police&nbsp;: `#FFFFFF`<br>Arrière-plan de survol&nbsp;: `#00478F`<br>Arrière-plan actif&nbsp;: `#002142`|160px |
| Bouton secondaire | Arrière-plan par défaut&nbsp;: `#FFFFFF`<br>Bordure et police par défaut&nbsp;: `#0066CC`<br>Arrière-plan de survol&nbsp;: `#E0F0FF`<br>Bordure et police de survol&nbsp;: `#00478F`<br>Arrière-plan actif&nbsp;: `#C2E0FF`<br>Bordure et police actives&nbsp;: `#002142`| 160px |
| Bouton tertiaire | Arrière-plan par défaut&nbsp;: `aucun`<br>Bordure par défaut&nbsp;: `aucun`<br>Police par défaut&nbsp;: `#0066CC`<br>Arrière-plan de survol&nbsp;: `#E8E8E8`<br>Police de survol&nbsp;: `#00478F`<br>Arrière-plan actif&nbsp;: `#D1D1D1`<br>Police active&nbsp;: `#002142`<br>| 160px|

<hr>

La largeur des boutons primaires, secondaires et tertiaires (minimum de 160 px) doit être de la taille du texte de l’étiquette plus le remplissage additionnel&nbsp;:
* 24 px de remplissage interne sur la droite et la gauche du texte du bouton
* 16 px de remplissage interne en haut et en bas du texte du bouton

L’espacement entre les boutons devrait être de 32 px pour un ordinateur et de 24 px pour les appareils mobiles.

### Ordinateur

<img src="{{path '../../markdown-assets/buttons/DS_Buttons_DesktopPadding-fr.png'}}" alt="Exemples montrant le remplissage normal des boutons primaires, secondaires et tertiaires en mode bureau." />

### Appareil mobile

<img src="{{path '../../markdown-assets/buttons/DS_Buttons_MobilePadding-fr.png'}}" alt="Exemples montrant le remplissage normal des boutons primaires, secondaires et tertiaires en mode appareil mobile avec une limite de 25 caractères." />

### À faire&nbsp;:

* S’assurer que le texte est clair, descriptif et orienté vers l’action (p. ex. «&nbsp;Enregistrez votre profil&nbsp;» ou «&nbsp;Téléchargez votre reçu&nbsp;»).
* Rédiger en minuscules (les majuscules servent seulement de première lettre au premier mot).
* Utiliser un maximum de 25 caractères, espaces compris.
* Placer des boutons sous les éléments de formulaire.
  * Lors de la lecture en ligne, les yeux des lecteurs suivent habituellement un schéma en «&nbsp;F&nbsp;». Vous leur simplifiez donc la tâche si vous placez les appels à l’action dans un bouton vers lequel les yeux vont naturellement se diriger.


#### Schéma en «&nbsp;F&nbsp;»
<img src="{{path '../../markdown-assets/buttons/DS_Button_Fpattern.png'}}" alt="Illustration montrant divers points de lecture créant une forme en F de haut en bas menant à un bouton." />

### À ne pas faire&nbsp;:

* Changer la couleur des boutons.
* Souligner le texte des boutons primaires ou secondaires.
* Employer des boutons primaires et secondaires, à moins qu’ils soient absolument nécessaires.
  * Les boutons tertiaires ne sont pas aussi proéminents que les boutons primaires ou secondaires, donc vous pouvez en insérer quelques‑uns, au besoin.

<hr>

## Aidez à améliorer cette page
Si vous avez d’autres suggestions, des conseils ou des questions sur les boutons, l’[équipe du système de conception]({{path '../../docs/give-feedback.html'}}) serait heureuse de les connaître.
