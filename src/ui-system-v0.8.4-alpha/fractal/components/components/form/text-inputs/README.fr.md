**[Principe directeur]({{path '../../docs/documentation/design-principles.html'}})&nbsp;:** Donner le contrôle à l’utilisateur

## Quand utiliser cette composante
Une saisie de texte est un **champ à une seule ligne** dans lequel l’utilisateur pour saisir des renseignements. Par exemple&nbsp;:

<img src="{{path '../../markdown-assets/text-inputs/DS_Textinputs_Label-Hinttext-Textinput-fr.png'}}" alt="Saisissez le titre de renseignements sur votre véhicule. Étiquette : numéro de plaque d'immatriculation (obligatoire). Texte d'indication : par exemple, AAAA111. Champ de saisie de texte vide." />


Utilisez une saisie de texte si&nbsp;:
* vous voulez que l’utilisateur ne saisisse **pas plus d’une** simple ligne de renseignements;
* vous avez besoin d’un **seul renseignement** de la part de l’utilisateur, comme son nom ou son numéro de téléphone;
* il est **plus rapide pour l’utilisateur** d’écrire une réponse que de la sélectionner dans une liste.
 
N’utilisez pas de boîte de texte si&nbsp;:
* vous voulez que les utilisateurs vous fournissent une réponse **en plus d’une ligne** (songez alors plutôt à une [zone de texte]({{path './text-areas.html'}}));
* vous voulez que les utilisateurs fassent un choix dans une **liste établie de réponses**, comme oui ou non (songez plutôt à des [cases d’option]({{path './radio-buttons.html'}}), à des [cases à cocher]({{path './checkboxes.html'}}) ou à des [listes déroulantes]({{path './dropdown-lists.html'}})).
<hr>

## Ayez recours à des saisies de texte de la bonne taille.
Toutes les saisies de texte ont une hauteur de 48 px.

Intégrer des [étiquettes]({{path './labels.html'}}) précises, un [texte d’indication]({{path './hint-text.html'}}) et une précision sur la largeur des champs **donne à l’utilisateur une indication sur la façon de remplir judicieusement le champ de saisie**. Décidez de la largeur de votre champ de saisie de texte en fonction du type de renseignements que vous demandez, mais ne limitez jamais le nombre de caractères qu’un utilisateur peut saisir.
### Longueur de saisie connue

Employez des **saisies à largeur fixe** pour un contenu de longueur précise et connue, comme un code postal. Ajoutez de l’espace pour 1 ou 2 caractères de plus, si l’utilisateur est susceptible d’ajouter des espaces ou des tirets. Voici nos largeurs normales de saisie fixe&nbsp;:
* 2 caractères (pour date, mois)
* 3 caractères (pour indicatif régional,  <abbr title="card verification code">CVC</abbr> sur une carte de crédit, âge)
* 4 caractères (pour année)
* 7 caractères (pour code postal [plus un caractère])
* 8 caractères (pour plaque d’immatriculation)
* 11 caractères (pour <abbr title="Numéro d'assurance sociale">NAS</abbr> NAS [plus deux caractères])

### Longueur de saisie inconnue
Si vous ne savez pas de combien de caractères l’utilisateur aura besoin dans sa saisie (p. ex. pour inscrire son nom), faites en sorte que la saisie de texte occupe **100 % du conteneur**.

<hr>

## Insertion du bon code de clavier
Insérez le bon code de manière à ce que le clavier des utilisateurs d’appareils mobiles corresponde au type de renseignements que vous demandez. Par exemple&nbsp;:
* `input type="text"`montre le clavier normal
* `input type="email"` montre le clavier normal plus «&nbsp;@&nbsp;» et «&nbsp;.com&nbsp;»
* `input type="tel"`montre le pavé numérique 0 à 9
* `input type="number"` montre un clavier avec chiffres et symboles
* `input type="date"`montre un sélecteur de date
* `input type="datetime"`montre un sélecteur de date et d’heure
* `input type="month"` montre un sélecteur de mois et d’année

<hr>

## Formatage à la discrétion des utilisateurs
Laissez les utilisateurs saisir les renseignements dans le format de leur choix et **reformatez‑les au besoin dans le système principal, pour votre base de données**. Si vous avez par exemple demandé un code postal, laissez les utilisateurs le saisir en lettres minuscules ou majuscules, avec ou sans espace et tiret, de façon à accepter ces versions&nbsp;:
* A1A1A1
* A1A-1A1
* A1A&nbsp;1A1
* a1A&nbsp;1a1

Reformatez les renseignements **seulement** dans le système principal – ne modifiez pas leur apparence pour l’utilisateur.
<hr>

## Des champs de saisie de texte vierges
N’insérez pas d’[étiquette]({{path './labels.html'}}) ou de [texte d’indication]({{path './hint-text.html'}}) dans la zone de texte. Utiliser un «&nbsp;espace réservé au texte&nbsp;» comme celui-ci **[n’est pas une bonne pratique](https://www.nngroup.com/articles/form-design-placeholders/) du point de vue de l’utilité et de l’accessibilité**, parce qu’il disparaît lorsque les utilisateurs commencent à taper.

<img src="{{path '../../markdown-assets/text-inputs/DS_Textinputs_Noplaceholder-fr.png'}}" alt="Ne pas insérer d’espace réservé au texte à l’intérieur du champ de texte. Étiquette : nom complet (obligatoire). Champ de saisie de texte indiquant de saisir votre nom complet comme texte de l’espace réservé au texte." />


<hr>

## Autres spécifications techniques
En règle générale, donnez le contrôle à l’utilisateur à propos de ce qu’il saisit et de sa façon de le faire.
### À faire&nbsp;:
* Toujours **insérer une [étiquette]({{path './labels.html'}}) associée à un identifiant correspondant** au‑dessus d’une boîte de texte.
* Intégrer un [texte d’indication]({{path './hint-text.html'}}) seulement si nécessaire.
* **Aligner à gauche** les zones de texte (ainsi que leurs étiquettes et le texte d’indication).
* Habituellement, **empiler les saisies de texte à la verticale.**
  * Exceptions&nbsp;: il pourrait parfois être plus logique d’insérer des saisies de texte à proximité l’une de l’autre, comme les saisies du jour/mois/année de naissance lorsque vous demandez la date de naissance de quelqu’un.
* Permettre à l’utilisateur de&nbsp;:
  * **copier-coller** du texte,
  * saisir **n’importe quel caractère** (même si cela ne signifie pas qu’il peut soumettre tout type de caractères),
  * rédiger une réponse **aussi longue qu’il le veut** (autrement, il pourrait avoir un message d’erreur),
* Recourir au **remplissage automatique**
  * si, par exemple, un utilisateur a stocké son adresse dans son navigateur Web pour qu’elle s’inscrive automatiquement dans les champs de formulaire, laissez-le s’en servir.
* Saisir sa réponse dans **un seul champ de saisie**, au lieu de répartir un élément de données dans plusieurs champs de saisie;
  * utiliser par exemple un seul champ pour son numéro de carte de crédit au lieu de le répartir dans quatre champs.


<img src="{{path '../../markdown-assets/text-inputs/DS_Textinputs_Separatefields-fr.png'}}" alt="Un champ de saisie portant l’étiquette « Numéro de carte de crédit (obligatoire) ». À ne pas faire : Champ de saisie séparé en 4 champs de saisie portant l'étiquette « numéro de carte de crédit (obligatoire) »" />


### À ne pas faire&nbsp;:
* **Limiter le nombre ou le type de caractères** que l’utilisateur peut insérer;
  * donner plutôt des directives précises ou déclencher un message d’erreur, au besoin.
* Employer une **tabulation automatique**, qui place automatiquement le curseur de l’utilisateur dans la saisie de texte suivante.

<hr>

## Aidez à améliorer cette page
Si vous avez d’autres suggestions, des conseils ou des questions sur les saisies de texte, l’[équipe du système de conception]({{path '../../docs/give-feedback.html'}}) serait heureuse de les connaître.
