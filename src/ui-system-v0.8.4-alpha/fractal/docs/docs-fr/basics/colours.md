## Types de palettes

La palette complète des couleurs numériques de l’Ontario (selon la palette de couleurs de marketing pour l’impression et les médias sociaux) se compose de ce qui suit:

* **1 [palette de couleurs du système](#system)** – à utiliser exclusivement pour les fins attribuées (comme le texte régulier, les hyperliens non visités/visités, le texte de bouton et le texte de confirmation – la liste complète se trouve dans le graphique ci-dessous)
* **1 [palette échelle de gris](#greyscale)** – principalement incorporée aux composantes (comme les tableaux), mais vous pouvez utiliser les gris à votre discrétion, pour répondre aux mêmes besoins que la palette de couleurs d’accompagnement
* **1 [palette de couleurs d’accompagnement](#accent)**  en **3 tons** ([base](#base), [pâle](#light) and [foncé](#dark)) – à utiliser pour les éléments de marketing numérique ou d’autres éléments de page (comme les graphiques, les bannières, les illustrations et les icônes)


<hr>

## <a name="system"></a> Palette de couleurs du système

Ces couleurs sont utilisées de manières particulières pour assurer **l’uniformité dans tous les services numériques** (ontario.ca, applications, services transactionnels, marketing numérique). Ne vous en servez pas à d’autres fins (exceptions : noir‑système et blanc‑système – utilisez‑les selon les besoins).

<div class="fractal-table-scroll">

| Couleur | Nom de la couleur  | Hex code | SCSS variable | Remarques |
|---|---|---|---|---|
| <div class="ontario-bg-black fractal-colour-circle fractal-colour-outline"></div>   | Noir-système | `#1A1A1A` | `$ontario-colour-black` | Couleur par défaut pour la majorité des textes (comme corps, titres, sous‑titres) |
| <div class="fractal-bg-white fractal-colour-circle fractal-colour-outline"></div>   | Blanc-système | `#FFFFFF` | `$ontario-colour-white` | Texte sur les principaux boutons, les arrière‑plans noirs |
| <div class="fractal-bg-alert fractal-colour-circle fractal-colour-outline"></div>   | Alerte | `#CD0000` | `$ontario-colour-alert` | Icônes de niveau alerte, barre verticale à gauche de la boîte d’alerte ou boîte d’alerte |
| <div class="fractal-bg-alert-light fractal-colour-circle fractal-colour-outline"></div>   | Alerte pâle | `#FCEFF0` | `$ontario-colour-alert-light` | Arrière-plan de la boîte d’alerte |
| <div class="fractal-bg-success fractal-colour-circle fractal-colour-outline"></div>   | Réussite | `#118847` | `$ontario-colour-success` | Icônes de niveau réussite, barre verticale à gauche de la boîte d’alerte |
| <div class="fractal-bg-success-light fractal-colour-circle fractal-colour-outline"></div>   | Réussite pâle| `#E5f0E9` | `$ontario-colour-success-light` | Arrière-plan de la boîte de réussite |
| <div class="fractal-bg-warning fractal-colour-circle fractal-colour-outline"></div>   | Avertissement | `#FFD440` | `$ontario-colour-warning` | Icônes de niveau avertissement, barre verticale à gauche de la boîte d’avertissement |
| <div class="fractal-bg-warning-light fractal-colour-circle fractal-colour-outline"></div>   | Avertissement pâle | `#FEF6DC` | `$ontario-colour-warning-light` | Arrière-plan de la boîte d’avertissement |
| <div class="fractal-bg-information fractal-colour-circle fractal-colour-outline"></div>   | Information | `#1080A6` | `$ontario-colour-information` | Icônes de niveau information, barre verticale à gauche de la boîte d’information |
| <div class="fractal-bg-information-light fractal-colour-circle fractal-colour-outline"></div>   | Information pâle | `#E2F0F4` | `$ontario-colour-information-light` | Arrière-plan de la boîte d’information|
| <div class="fractal-bg-link fractal-colour-circle fractal-colour-outline"></div>   | Hyperlien | `#0066cc` | `$ontario-colour-link` | Boutons et hyperliens non visités |
| <div class="fractal-bg-link--hover fractal-colour-circle fractal-colour-outline"></div>   | Hyperlien – effet de survol | `#00478F` | `$ontario-colour-link--hover` | État de survol d’un bouton et d’un hyperlien |
| <div class="fractal-bg-link--active fractal-colour-circle fractal-colour-outline"></div>   | Hyperlien – actif | `#002142` | `$ontario-colour-link--active` | État actif d’un bouton et d’un hyperlien |
| <div class="fractal-bg-link--visited fractal-colour-circle fractal-colour-outline"></div>   | Hyperlien – visité | `#551A8B` | `$ontario-colour-link--visited` | État visité d’un hyperlien (mais non des boutons, qui restent bleus) |
| <div class="fractal-bg-secondary--hover fractal-colour-circle fractal-colour-outline"></div>   | Secondaire – effet de survol | `#E0F0FF` | `$ontario-colour-secondary--hover` | État de survol d’un bouton secondaire |
| <div class="fractal-bg-secondary--active fractal-colour-circle fractal-colour-outline"></div>   | Secondaire – actif | `#C2E0FF` | `$ontario-colour-secondary--active` | État actif d’un bouton secondaire |
| <div class="fractal-bg-tertiary--hover fractal-colour-circle fractal-colour-outline"></div>   | Tertiaire – effet de survol | `#E8E8E8` | `$ontario-colour-tertiary--hover` | État de survol d’un bouton tertiaire |
| <div class="fractal-bg-tertiary--active fractal-colour-circle fractal-colour-outline"></div>   | Tertiaire – actif | `#D1D1D1` | `$ontario-colour-tertiary--active` | État actif d’un bouton tertiaire |
| <div class="fractal-bg-focus fractal-colour-circle fractal-colour-outline"></div>   | Bague de mise au point | `#009ADB` | `$ontario-colour-focus` | État de mise au point qui souligne les saisies, les hyperliens et les boutons |

</div>

<hr>

## <a name="greyscale"></a> Palette échelle de gris
Les gris de cette palette sont principalement incorporés aux éléments (comme les tableaux), mais vous pouvez utiliser les gris à votre discrétion, pour répondre aux mêmes besoins que la palette de couleurs d’accompagnement. 

**N’utilisez pas d’autres nuances de gris** – les gris de cette palette ont été sélectionnés spécifiquement pour éliminer les teintes de gris qui paraissent trop semblables. À titre d’information, regardez l’[opacité de contraste de la palette échelle de gris](https://contrast-grid.eightshapes.com/?background-colors=%23F2F2F2%2C%20Greyscale%205%0D%0A%23CCCCCC%2C%20Greyscale%2020%0D%0A%23999999%2C%20Greyscale%2040%0D%0A%23666666%2C%20Greyscale%2060%0D%0A%234D4D4D%2C%20Greyscale%2070%0D%0A%0D%0A&foreground-colors=%23FFFFFF%2C%20System-white%0D%0A%231A1A1A%2C%20System-black&es-color-form__tile-size=compact) avec un texte en noir‑système et en blanc‑système.

<div class="fractal-table-scroll">

| Couleur | Nom de la couleur  | Hex code | SCSS variable | Remarques |
|---|---|---|---|---|
| <div class="ontario-bg-greyscale-5 fractal-colour-circle fractal-colour-outline"></div>   | Greyscale-5 | `#F2F2F2` | `$ontario-greyscale-5` | Si vous l’utilisez comme couleur de fond, utilisez un texte en **noir-système** |
| <div class="ontario-bg-greyscale-20 fractal-colour-circle fractal-colour-outline"></div>   | Greyscale-20 | `#CCCCCC` | `$ontario-greyscale-20` | Si vous l’utilisez comme couleur de fond, utilisez un texte en **noir-système** |
| <div class="ontario-bg-greyscale-40 fractal-colour-circle fractal-colour-outline"></div>   | Greyscale-40 | `#999999` | `$ontario-greyscale-40` | Si vous l’utilisez comme couleur de fond, utilisez un texte en **noir-système** |
| <div class="ontario-bg-greyscale-60 fractal-colour-circle fractal-colour-outline"></div>   | Greyscale-60 | `#666666` | `$ontario-greyscale-60` | Si vous l’utilisez comme couleur de fond, utilisez un texte en **blanc-système** |
| <div class="ontario-bg-greyscale-70 fractal-colour-circle fractal-colour-outline"></div>   | Greyscale-70 | `#4D4D4D` | `$ontario-greyscale-70` | Si vous l’utilisez comme couleur de fond, utilisez un texte en **blanc-système** |

</div>

<hr>

## <a name="accent"></a> Palette de couleurs d’accompagnement
Chaque couleur de la palette de couleurs d’accompagnement comporte une version [de base](#base), [foncée](#dark) (à utiliser avec un texte en blanc‑système) et [pâle](#light) (à utiliser avec un texte en noir‑système).

Vous pouvez vous servir de n’importe laquelle de ces couleurs dans vos conceptions, tant que vous:
*  ne les utilisez pas pour les éléments qui ont une couleur système assignée (ces éléments sont énumérés dans le graphique de la [palette de couleurs du système](#system))
* vous assurez d’avoir une [opacité de contrastes acceptable](#accessibility)

Endroits où utiliser ces couleurs:
* icônes sans hyperlien
* illustrations
* graphiques
* calendriers
* légendes
* images de bannière
* images

Endroits où ne pas utiliser ces couleurs:
* arrière-plan de page
* éléments de formulaire
* contours de tableau
* tout élément apparaissant dans le graphique de la [palette de couleurs du système](#system)

### <a name="base"></a> Palette de couleurs d’accompagnement de base
Utilisez ces couleurs uniquement avec du **texte en noir-système** (souligné pour les hyperliens). À titre d’information, regardez [l’opacité de contrastes de la palette de couleurs d’accompagnement de base](https://contrast-grid.eightshapes.com/?background-colors=%23CBA52E%2C%20Gold%0D%0A%23FCAF17%2C%20Yellow%0D%0A%23C1B28F%2C%20Taupe%0D%0A%2339B54A%2C%20Green%0D%0A%238DC63F%2C%20Lime%0D%0A%2349A7A2%2C%20Teal%0D%0A%2300B2E3%2C%20Sky%0D%0A%233193CC%2C%20Blue%0D%0A%23B975B7%2C%20Purple%0D%0A%23F15A22%2C%20Orange%0D%0A%23F0454B%2C%20Red%0D%0A%23F03093%2C%20Magenta%0D%0A%0D%0A&foreground-colors=%231A1A1A%2C%20System-black%0D%0A%0D%0A&es-color-form__tile-size=compact) avec un **texte en noir‑système.**. 

<div class="fractal-table-scroll">

| Couleur | Nom de la couleur  | Hex code | SCSS variable | 
|---|---|---|---|
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-gold"></div>    | Doré | `#CBA52E` | `$ontario-colour-gold` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-yellow"></div>    | Jaune | `#FCAF17` | `$ontario-colour-yellow` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-taupe"></div>    | Taupe | `#C1B28F` | `$ontario-colour-taupe` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-green"></div>    | Vert | `#39B54A` | `$ontario-colour-green` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-lime"></div>    | Lime | `#8DC63F` | `$ontario-colour-lime` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-teal"></div>    | Sarcelle | `#49A7A2` | `$ontario-colour-teal` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-sky"></div>    | Ciel | `#00B2E3` | `$ontario-colour-sky` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-blue"></div>    | Bleu | `#3193CC` | `$ontario-colour-blue` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-purple"></div>    | Mauve | `#B975B7` | `$ontario-colour-purple` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-orange"></div>    | Orange | `#F15A22` | `$ontario-colour-orange` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-red"></div>    | Rouge | `#F0454B` | `$ontario-colour-red` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-magenta"></div>    | Magenta | `#F03093` | `$ontario-colour-magenta` |

</div>

<hr>

### <a name="light"></a> Palette de couleurs d’accompagnement pâles
Utilisez ces couleurs uniquement avec du **texte en noir‑système** (hyperlien bleu et souligné pour les hyperliens). À titre d’information, regardez [l’opacité de contrastes de la palette de couleurs d’accompagnement pâles](https://contrast-grid.eightshapes.com/?background-colors=%23F0E7CC%2C%20Light%20gold%0D%0A%23F8E5C3%2C%20Light%20yellow%0D%0A%23EBE7DB%2C%20Light%20taupe%0D%0A%23D1EFD4%2C%20Light%20green%0D%0A%23DDEDC7%2C%20Light%20lime%0D%0A%23CFEDED%2C%20Light%20teal%0D%0A%23C5EEFA%2C%20Light%20sky%0D%0A%23DBE9F5%2C%20Light%20blue%0D%0A%23F1E3F2%2C%20Light%20purple%0D%0A%23FEE1D9%2C%20Light%20orange%0D%0A%23FFE0E2%2C%20Light%20red%0D%0A%23FEDFF0%2C%20Light%20magenta%0D%0A&foreground-colors=%231A1A1A%2C%20System-black%0D%0A%230066CC%2C%20Link%20blue&es-color-form__tile-size=compact) avec un **texte en noir‑système** et **hyperlien bleu.** 

<div class="fractal-table-scroll">

| Couleur | Nom de la couleur  | Hex code | SCSS variable |
|---|---|---|---|
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-gold"></div>    | Doré pâle | `#F0E7CC` | `$ontario-colour-light-gold` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-yellow"></div>    | Jaune pâle | `#F8E5C3` | `$ontario-colour-light-yellow` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-taupe"></div>    | Taupe pâle | `#EBE7DB` | `$ontario-colour-light-taupe` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-green"></div>    | Vert pâle | `#D1EFD4` | `$ontario-colour-light-green` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-lime"></div>    | Lime pâle | `#DDEDC7` | `$ontario-colour-light-lime` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-teal"></div>    | Sarcelle pâle | `#CFEDED` | `$ontario-colour-light-teal` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-sky"></div>    | Ciel pâle | `#C5EEFA` | `$ontario-colour-light-sky` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-blue"></div>    | Bleu pâle | `#DBE9F5` | `$ontario-colour-light-blue` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-purple"></div>    | Mauve pâle | `#F1E3F2` | `$ontario-colour-light-purple` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-orange"></div>    | Orange pâle | `#FEE1D9` | `$ontario-colour-light-orange` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-red"></div>    | Rouge pâle | `#FFE0E2` | `$ontario-colour-light-red` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-light-magenta"></div>    | Magenta pâle| `#FEDFF0` | `$ontario-colour-light-magenta` |

</div>

<hr>

### <a name="dark"></a> Palette de couleurs d’accompagnement foncées
Utilisez ces couleurs uniquement avec du **texte en blanc‑système** (souligné pour les hyperliens). À titre d’information, regardez [l’opacité de contrastes de la palette de couleurs d’accompagnement foncées](https://contrast-grid.eightshapes.com/?background-colors=%2386743D%2C%20Dark%20gold%0D%0A%238A600D%2C%20Dark%20yellow%0D%0A%237B725C%2C%20Dark%20taupe%0D%0A%232B8737%2C%20Dark%20green%0D%0A%235F8129%20Dark%20lime%0D%0A%23367A76%2C%20Dark%20teal%0D%0A%231080A6%2C%20Dark%20sky%0D%0A%230369AC%2C%20Dark%20blue%0D%0A%2392278F%2C%20Dark%20purple%0D%0A%23C64A1C%2C%20Dark%20orange%0D%0A%23D81A21%2C%20Dark%20red%0D%0A%23C00264%2C%20Dark%20magenta%0D%0A%0D%0A&foreground-colors=%23FFFFFF%2C%20System-white%0D%0A%0D%0A&es-color-form__tile-size=compact) avec un **texte en blanc‑système.** 

<div class="fractal-table-scroll">

| Couleur | Nom de la couleur  | Hex code | SCSS variable | 
|---|---|---|---|
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-gold"></div>    | Doré foncé| `#86743D` | `$ontario-colour-dark-gold` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-yellow"></div>    | Jaune foncé| `#8A600D` | `$ontario-colour-dark-yellow` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-taupe"></div>    | Taupe foncé| `#7B725C` | `$ontario-colour-dark-taupe` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-green"></div>    | Vert foncé| `#2B8737` | `$ontario-colour-dark-green` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-lime"></div>    | Lime foncé| `#5F8129` | `$ontario-colour-dark-lime` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-teal"></div>    | Sarcelle foncé| `#367A76` | `$ontario-colour-dark-teal` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-sky"></div>    | Ciel foncé| `#1080A6` | `$ontario-colour-dark-sky` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-blue"></div>    | Bleu foncé| `#0369AC` | `$ontario-colour-dark-blue` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-purple"></div>    | Mauve foncé| `#92278F` | `$ontario-colour-dark-purple` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-orange"></div>    | Orange foncé| `#C64A1C` | `$ontario-colour-dark-orange` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-red"></div>    | Rouge foncé| `#D81A21` | `$ontario-colour-dark-red` |
| <div class="fractal-colour-circle fractal-colour-outline ontario-bg-dark-magenta"></div>    | Magenta foncé| `#C00264` | `$ontario-colour-dark-magenta` |

</div>

<hr>

## <a name="accessibility"></a> Accessibilité
Si vous utilisez une couleur pour transmettre de l’information, veillez à [insérer également un équivalent textuel](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html) destiné aux personnes ayant du mal à distinguer les couleurs.

Composer avec une **bonne opacité des contrastes** (qui fait ressortir le texte de son arrière-plan) facilite la lecture pour tout le monde. Il est également prescrit par [la loi](https://www.ontario.ca/page/how-make-websites-accessible#section-3) de satisfaire au moins aux règles du <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0, qui stipulent que le texte régulier doit comporter une opacité de contrastes de couleurs de 4.5:1 et le texte en gros caractères, une opacité de contrastes de 3:1.

L’opacité des contrastes des palettes du système de conception de l’Ontario satisfait au niveau AA des règles du [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.1](https://www.w3.org/TR/WCAG21/#use-of-color) en matière de contraste des couleurs. Ainsi, **tant que vous recourez aux couleurs de la palette selon les indications de la présente ligne directrice, votre texte sera accessible.**

### Revérification de l’accessibilité
À mesure que vous concevez, consultez le vérificateur de contrastes de couleurs pour revérifier la conformité de votre conception aux règles du <abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0, au minimum. Voici quelques options de rechange&nbsp;: 
* [Vérificateur gratuit de contrastes en ligne](https://webaim.org/resources/contrastchecker/) de WebAIM
* Programme [Analyseur de contrastes de couleurs](http://www.paciellogroup.com/resources/contrastanalyser/) du Groupe Paciello 
  * Le téléchargement de ce programme est gratuit, mais vous devrez soumettre une demande <abbr title="Service Desk Online">S.ODO</abbr> pour l’installer sur un ordinateur de la FPO si vous n’avez pas de droits d’administration

<hr>

## Aidez à améliorer cette page

Si vous avez d’autres suggestions, des conseils ou des questions sur les couleurs, [l’équipe du système de conception]({{path '../../docs/give-feedback.html'}}) serait heureuse de les connaître.
