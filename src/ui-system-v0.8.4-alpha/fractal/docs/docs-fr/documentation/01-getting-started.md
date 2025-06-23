---
title: Démarrage
label: Démarrage
---

<p class="ontario-lead-statement">Le système de conception de l’Ontario fournit des principes, des directives et un code pour vous aider à concevoir et à construire des sites Web gouvernementaux et des services numériques accessibles et compatibles avec les appareils mobiles.</p>

<hr class="dark">

## Démarrage avec le système de conception
   
- [Développeurs](#developers)
- [Concepteurs](#designers)

## <a name="developers"></a> Développeurs

### Installation de la trousse de distribution 

Dans la trousse de distribution, vous trouverez tous les fichiers nécessaires (HTML, CSS/SCSS, JS) pour intégrer vos projets. La trousse comprend également les fichiers de polices de caractères et de favicônes. Vous trouverez les variables du code en SCSS et leur utilisation dans chaque partie de composantes.

[{{{render '@icons-secondary--ontario-icon-download' }}} Télécharger la dernière version ({{{ _config.project.version }}})]({{path '../../dist/ontario-design-system-dist-{{{ _config.project.version }}}.zip'}})

[Voir les notes de version et versions antérieures]({{path './release-notes.html'}}) 

Nous vous recommandons de créer un dossier dans lequel vous placerez tous vos fichiers pour qu’ils restent cohérents et séparés des autres fichiers du projet. Lorsqu’une nouvelle version est publiée, vous pouvez facilement remplacer ce dossier par la nouvelle version.  

### Utilisation
1.	Décompressez la trousse de distribution 
2.	Renommez le nom du dossier extrait en lui donnant le nom `ontario-design-system`
3.	Déplacez ce dossier dans votre projet (c’est-à-dire au même endroit que vos autres actifs statiques)
4.	Importez `ontario-design-system/styles/ds-theme.css` (ou ds-theme.min.css) globalement dans votre propre projet. Exemple utilisant les codes en SCSS et CSS&nbsp;: `@import « ontario-design-system/styles/ds-theme.css »;`

Maintenant que le système de conception fait partie de votre projet, tous les styles globaux sont appliqués automatiquement (styles d’en-tête, espacement des paragraphes, etc.). Vous pouvez également utiliser n’importe quelle catégorie de composantes pour créer des boutons, des cases à cocher, etc.

### Création de composantes personnalisées

La trousse de distribution du système de conception contient des fichiers SCSS avec des variables qui facilitent la création de nouvelles composantes et pages personnalisées en fonction du système de conception. Il suffit d’importer `ontario-design-system/styles/sass/_variables-import.scss` dans votre composante. Ce fichier importera plusieurs catégories de variables à la fois (grille, couleur, police, espacement, etc.).

Exemple&nbsp;: variables de couleur

`.ontario-callout-alert {`<br>
&nbsp;&nbsp;`border-color: $ontario-colour-alert;`<br>
`}`

<hr>

## <a name="designers"></a> Concepteurs
Le style visuel des composantes du système de conception offre une esthétique propre, souple et moderne qui répond à des normes élevées de convivialité et d’accessibilité tout en favorisant la crédibilité et la confiance.

Le système de conception contient des exemples HTML de composantes communes d’IU conçues pour suivre l’identification visuelle de l’Ontario. La plupart des composantes auront des propriétés de conception que vous pourrez utiliser dans vos outils de prototypage. Vous pouvez également utiliser les outils de développement de votre navigateur pour visualiser les spécifications de chaque exemple (par exemple, remplissage, marges, largeur de trait, hauteur de ligne, etc.).

### Téléchargement des polices du système de conception de l’Ontario 

Le système de conception de l’Ontario utilise principalement deux jeux de polices de caractères&nbsp;: Open Sans et une version modifiée de la police Raleway. Téléchargez et installez les polices dans votre ordinateur pour les utiliser dans vos outils de prototypage.

[{{{render '@icons-secondary--ontario-icon-download' }}} Téléchargement des polices du système de conception de l’Ontario ]({{path '../../fonts/ds-fonts.zip'}})

Avant de commencer, lisez les [directives sur les polices et la typographie]({{path '../basics/fonts.html'}}).


### Trousse de prototypage
**À venir bientôt&nbsp;:** nous sommes en train de créer une trousse de prototypage qui comprend toutes nos composantes de conception.

Vous trouverez dans la trousse de prototypage&nbsp;:

- des tableaux de points de rupture de la grille et des échantillons 
- des plages de couleur avec des codes hexagonaux
- des styles de typographie et d’en-têtes
- des composantes
- des modèles

### Logo de l’Ontario 

Si vous avez besoin d’une version haute résolution du logo de l’Ontario ou si vous avez des questions concernant l’utilisation du logo, envoyez un courriel à visual.Identity@ontario.ca.

Le logo de l’Ontario est une marque déposée et est réservé aux produits officiels du gouvernement de l’Ontario. Une exception est faite pour les parrainages et les bénéficiaires de paiements de transfert. S’il n’existe pas d’accord de partenariat officiel décrivant l’utilisation de nos marques officielles, vous ne pouvez pas utiliser le logo.

### Illustrations et images

- Nous recommandons d’utiliser des images et des photographies selon les principes de [l’identification visuelle de l’Ontario](https://intra.ontario.ca/tbs/visual-identity).
- Si vous envisagez de créer des illustrations personnalisées, lisez les directives. 

<hr>

## Aidez à améliorer le système de conception

Si vous avez d’autres suggestions, des conseils ou des questions sur le système de grille, [l’équipe du système de conception]({{path '../../docs/give-feedback.html'}}) serait heureuse de les connaître.

