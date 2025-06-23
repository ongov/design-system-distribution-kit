**[Principe directeur]({{path '../../docs/documentation/design-principles.html'}}):** Concevoir pour tous.

<hr class="dark"> 

## Quand souligner

En général, il **faut** souligner les hyperliens lorsqu’ils se trouvent&nbsp;:
* dans le corps du texte (y compris les listes à puces)
* dans un état de survol

En général, ne soulignez pas les hyperliens lorsqu’ils se trouvent dans de grands panneaux de navigation comme :
* les menus déroulants
* les panneaux latéraux
* les tables des matières de la page

([source](https://www.nngroup.com/articles/guidelines-for-visualizing-links/))

### Quand contrevenir aux règles de soulignement

Ne contrevenez à ces règles que si le fait de souligner ou de ne pas souligner **commence à nuire à la lisibilité**. Consultez la [partie sur l’accessibilité](#accessibility) pour en savoir plus à ce sujet.

## Caractéristiques techniques

* Les hyperliens doivent toujours être  `$ontario-colour-link` (`#0066CC`) 
* L’état de survol de l’hyperlien doit toujours être  `$ontario-colour-link--hover` (`#002142`) 
* L’état visité d’un hyperlien doit toujours être  `$ontario-colour-link--visited` (`#551A8B`) 
* Les hyperliens doivent avoir un état de mise au point

  
### Hyperliens qui s’ouvrent dans une nouvelle fenêtre

Si l’utilisateur se trouve au milieu d’une opération ou d’un formulaire, les hyperliens doivent s’ouvrir dans une nouvelle fenêtre.

Si un hyperlien s’ouvre dans une nouvelle fenêtre ou un nouvel onglet, mettez cette icône standard à la fin de l’hyperlien&nbsp;: <svg class="ontario-icon" alt="new window" aria-hidden="true" focusable="false" sol:category="primary" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><use xlink:href="#ontario-icon-new-window"></use></svg>.


### Hyperliens couplés aux icônes

Ne couplez les icônes que lorsque l’hyperlien se trouve dans une liste, jamais dans un paragraphe.

Exemple&nbsp;:
<ul style="padding-left: 1.5rem">
<li style="list-style-type: none;"><svg class="ontario-icon" alt="telephone icon" aria-hidden="true" focusable="false" sol:category="primary" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><use xlink:href="#ontario-icon-phone"></use></svg> Tél.&nbsp;: 416-325-3000</li>
<li style="list-style-type: none;"><svg class="ontario-icon" alt="" aria-hidden="true" focusable="false" sol:category="primary" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><use xlink:href="#ontario-icon-tty"></use></svg> ATS&nbsp;: 1-855-889-5775</li>
</ul>

Icônes pouvant être couplées aux liens&nbsp;:

* Téléphone
* Courriel
* Médias sociaux
* Télécopieur
* Site Web

## <a name="accessibility"></a> Accessibilité

[Le soulignement est généralement une bonne pratique d’accessibilité](https://www.usability.gov/get-involved/blog/2007/05/underlining-links.html).

Soulignez les hyperliens autant que possible **jusqu’à ce que cela commence à avoir un effet sur la lisibilité**. Utilisez votre jugement. Par exemple, si vous avez une longue liste de liens à puces, elle peut être difficile à lire si tous les hyperliens sont soulignés. C’est un exemple de situation où le fait de ne pas souligner les hyperliens facilitera la lisibilité.

Si vous avez des doutes sur l’effet du soulignement des liens sur la lisibilité, vous pouvez effectuer un essai avec certains utilisateurs.

<hr>

## Aidez-nous à améliorer cette page

Si vous avez d’autres suggestions, des conseils ou des questions sur les hyperliens, [l’équipe du système de conception]({{path '../../docs/give-feedback.html'}}) serait heureuse de les connaître.
