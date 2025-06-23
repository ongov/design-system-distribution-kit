**[Principe directeur]({{path '../../docs/documentation/design-principles.html'}})&nbsp;:** Faire preuve de cohérence.

<hr class="dark">

## À propos de cette composante

Le système de grille (quadrillage) structure votre page et facilite une disposition uniforme de son contenu pour les différents types d’appareils. Nous appliquons un système de grille adaptable à 12 colonnes, qui comprend des colonnes, des espaces intercolonnes et des marges.

Toutes nos composantes ont été **créées** et **mises à l’essai** dans ce système de grille.


### Colonnes
Les colonnes renferment le principal contenu du corps d’une page. Un élément de contenu peut être destiné au remplissage de plusieurs colonnes. Le nombre de colonnes consacrées à un élément de contenu détermine la largeur de cet élément de contenu.

La largeur de colonne est établie à l’aide de pourcentages au lieu de valeurs fixes afin de permettre d’adapter le contenu avec souplesse à toute taille d’écran. Notre grille à 12 colonnes divise l’espace en 12 colonnes, quelle que soit la taille de l’écran. Afin de simplifier la disposition du contenu pour différentes tailles d’écran, un élément de contenu peut remplir un nombre différent de colonnes pour chaque champ de point de rupture (un champ de tailles d’écran préétablies) correspondant à la vue d’un écran, qu’il s’agisse de points de rupture pour des tailles d’écran d’appareils mobiles (petits), de tablettes (moyens) et d’ordinateur (grands).

<img src="{{path '../../markdown-assets/grid/DS_Grid-Columns_Guidance.png'}}" alt="Image montrant 12 colonnes" />

### Espaces intercolonnes
Les espaces intercolonnes sont des espaces entre les colonnes. Elles permettent de séparer le contenu.

Les largeurs d’espaces intercolonnes sont des valeurs fixes qui ne s’ajustent pas à la taille de l’écran. Pour une grille à 12 colonnes, une espace intercolonnes sera toujours de 16 pixels de chaque côté d’une colonne.

<img src="{{path '../../markdown-assets/grid/DS_Grid-Gutters_Guidance.png'}}" alt="Image montrant 12 colonnes avec des espaces entre chaque colonne pour représenter les espaces intercolonnes" />

### Marges
Les marges sont des espaces entre la zone de contenu et les bords gauche et droit de l’écran.
Pour bien s’adapter à l’écran, la largeur de la marge peut varier à différents points de rupture. Dans notre grille à 12 colonnes, nous avons établi la marge des petits et moyens points de rupture à 16 pixels – la même valeur que nos espaces intercolonnes. Pour les écrans d’ordinateur aux points de rupture de grande taille, nous avons réglé la marge pour qu’elle s’ajuste automatiquement. Cela permet de maintenir la zone de contenu au centre de la page pour les grands écrans, et ce, même à la fin de l’élargissement de la principale zone de contenu.

<img src="{{path '../../markdown-assets/grid/DS_Grid-Margins_Guidance.png'}}" alt="Image montrant 12 colonnes avec des marges sur les bords gauche et droit de l’image." />

### Points de rupture
Nous avons modifié notre système de grille pour l’adapter aux besoins du site ontario.ca. Nous recourons également à ces points de rupture pour les transactions et les applications qui ne sont pas créées dans ontario.ca :
* **petits** pour 0 px à 639 px (< 40 em)
* **moyens** pour 640 px à 1167 px (40 em à < 73 em)
* **grands** pour 1168 px à 1535 px (73 em à < 96 em)

Nous avons deux points de rupture plus grands, qui peuvent servir lors du façonnement d’éléments qui s’étendent sur toute la zone de page :
* **très grands** pour 1536 px à 1919 px (96 em à < 120 em)
* **très très grands** pour 1920 px et plus (120 em et plus)

<hr>

## Options de colonne de la grille

La largeur des zones de contenu d’une page se fonde sur notre grille à 12 colonnes. Toute section de contenu peut atteindre la largeur des 12 colonnes et se diviser en plus petits contenants. Pour respecter les pratiques exemplaires, vous pouvez décider d’implanter :
* 1 conteneur entier de 12 colonnes
* 2 conteneurs de 6 colonnes
* 3 conteneurs de 4 colonnes
* 4 conteneurs de 3 colonnes
* 1 conteneur de 8 colonnes et 1 conteneur de 4 colonnes
* 1 conteneur de 4 colonnes et 1 conteneur de 8 colonnes

Pour les appareils mobiles, la majorité des éléments occuperont toute la largeur de la page, quelle que soit leur taille à l’ordinateur. Si un élément est par exemple d’une largeur de 4 colonnes à l’ordinateur, il s’affichera tout de même en pleine largeur sur un appareil mobile. Il existe quelques exceptions, comme les icônes ou les saisies de texte avec contournements.


<div class="fractal-image-row-flex">

<img src="{{path '../../markdown-assets/grid/DS_Grid-ColumnDesktop_Guidance-fr.png'}}" alt=" Image montrant 12 colonnes, indiquant les options de grille à implanter pour les écrans d’ordinateur. Options affichées : un conteneur entier de 12 colonnes, deux conteneurs de six colonnes, trois conteneurs de quatre colonnes, quatre conteneurs de trois colonnes, huit colonnes et quatre colonnes, ou quatre colonnes et huit colonnes." />

<img src="{{path '../../markdown-assets/grid/DS_Grid-ColumnTablet_Guidance-fr.png'}}" alt="Texte de remplacement : Image montrant 12 colonnes, indiquant les options de grille à implanter pour les écrans d’ordinateur. Options affichées : un conteneur entier de 12 colonnes, deux conteneurs de six colonnes, trois conteneurs de quatre colonnes, quatre conteneurs de trois colonnes, huit colonnes et quatre colonnes, ou quatre colonnes et huit colonnes." />

<img src="{{path '../../markdown-assets/grid/DS_Grid-ColumnMobile_Guidance-fr.png'}}" alt="Image montrant 12 colonnes, indiquant les options de grille à implanter pour les écrans d’appareil mobile. Options affichées : un conteneur entier de 12 colonnes, deux conteneurs de six colonnes, trois conteneurs de quatre colonnes, quatre conteneurs de trois colonnes, huit colonnes et quatre colonnes, ou quatre colonnes et huit colonnes." />

</div>

<hr>

## Autres ressources
Notre grille à 12 colonnes est une version modifiée de la grille Foundation 5. Apprenez‑en davantage sur [le mode d’emploi de la grille Foundation 5](https://get.foundation/sites/docs-v5/components/grid.html). 

Voici comment [Material Design](https://material.io/design/layout/responsive-layout-grid.html#) décrit les colonnes, les espaces intercolonnes et les marges.

<hr>

## Aidez à améliorer cette page

Si vous avez d’autres suggestions, des conseils ou des questions sur le système de grille, l’[équipe du système de conception]({{path '../../docs/give-feedback.html'}}) serait heureuse de les connaître.
