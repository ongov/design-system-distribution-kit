## Quand utiliser cette composante
Les alertes de page contiennent des renseignements pouvant nécessiter **une attention rapide** et apparaissent généralement en haut d’une page pour attirer l’attention de l’utilisateur. 
 
Utilisez des alertes de page pour&nbsp;:
 
* attirer l’attention de l’utilisateur sur les renseignements importants d’une page ou sur l’état du système
* communiquer le résultat d’une action de l’utilisateur (par exemple, une erreur ou une confirmation)
 
N’utilisez pas les alertes de page pour simplement insister sur le contenu ou le mettre en évidence; utilisez plutôt des encadrés et des apartés.

<hr>

## Comment fonctionnent les alertes de page
Les alertes de page apparaissent après un changement de contexte. Par exemple, lorsqu’un utilisateur clique sur un lien ou soumet un formulaire, lançant une nouvelle page ou un affichage mis à jour.
 
Les alertes de résumé de confirmation et d’erreur sont émises **à la suite de la soumission d’un formulaire**. Lorsque la nouvelle page ou le nouvel affichage apparaît pour la première fois, assurez-vous que la focalisation est déplacée vers l’alerte de résumé de confirmation ou d’erreur. Les lecteurs d’écran annoncent alors l’alerte, indiquant à l’utilisateur l’état de soumission de son formulaire et la marche à suivre.
 
L’élément de titre HTML doit également commencer par un contenu qui indique l’état (par exemple, «&nbsp;Success:&nbsp;» ou «&nbsp;Error:&nbsp;» ou «&nbsp;There is a problem:&nbsp;») afin de s’assurer que le retour d’information est fourni dans le nom de la page.

<hr>
 
## Types d’alertes de page
 
Il existe quatre principaux types d’alertes de page&nbsp;:
 
* [Information](#info)
* [Avertissement](#warning)
* [Confirmation](#success)
* [Erreur](#error)
 
### <a name="info"></a> Information
Utilisez les **alertes d’information** pour les renseignements importants et pouvant nécessiter **une attention rapide**. Par exemple, les dates importantes, les mises à jour récentes du contenu, les nouvelles politiques ou la confirmation par courriel.
 
### <a name="warning"></a> Avertissement
Les **alertes d’avertissement** informent l’utilisateur d’un élément **urgent** ou l’aident à **éviter un problème**. Par exemple, les renseignements sur les voyages, les mises en garde concernant le contenu ou les fermetures de sites.
 
### <a name="success"></a> Confirmation
Les **alertes de confirmation** doivent être utilisées pour indiquer à l’utilisateur que **l’action est réussie**. Utilisez-les pour envoyer des messages de confirmation lorsqu’un utilisateur remplit un formulaire web. Par exemple, lorsqu’un paiement a été effectué avec succès lors d’une transaction.
 
### <a name="error"></a> Erreur
Les **alertes d’erreur** indiquent aux utilisateurs que l’action **n’a pas été réussie** ou qu’il y a eu une **erreur de validation** lors de la soumission d’un formulaire. Par exemple, lorsqu’un utilisateur remplit incorrectement un champ et le système ne lui permet pas de terminer la tâche au moment de la soumission, à moins que les erreurs ne soient corrigées.

<hr> 
 
## Pratiques exemplaires
 
Les alertes de page se trouvent généralement en haut de la page et au-dessus du contenu corps de message principal. Dans certains cas, une alerte peut être nécessaire pour une section particulière d’une page&nbsp;: dans ce cas, placez l’alerte à côté des points de service ou d’information visés.
 
Si un utilisateur doit effectuer une action à la suite d’une alerte, faites-lui savoir ce qu’il doit faire et rendez cette tâche aussi facile que possible, par exemple en lui fournissant un lien

À faire&nbsp;:
* essayer de se limiter à une alerte par page
* rédiger des titres concis et des contenus totalisant un maximum de **280 caractères**
* inclure des titres qui indiquent clairement l’objet de l’alerte (par exemple, «&nbsp;Avertissement&nbsp;»)

À ne pas faire&nbsp;:
* utiliser les alertes de page uniquement pour la mise en forme du contenu régulier (pour souligner ou mettre en évidence)
* inclure des alertes qui ne sont pas liées à l’objectif actuel de l’utilisateur
