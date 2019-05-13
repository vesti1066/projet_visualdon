#Importations et exportations des fruits et légumes en Suisse

## Les données
Les données de ce projet sont issues du site web : https://www.agrarbericht.ch/fr/ 
Ce site est directement lié à l'OFAG (Office fédéral de l'agriculture) et propose toutes sortes de données liées au domaine de l'agriculture en Suisse. En plus de leurs nombreuses rubriques détaillées, il produise chaque année un rapport agricole complet.

## Transformation des données
Les données ont été récupérées sous la forme d'un fichier excel. Ces dernières ont été triées dans un premier temps directement dans le fichier excel dans le but de récupérer seulement les parties du fichier adéquates ; à savoir, l'importation et l'exportation des fruits et légumes uniquement. Par la suite, le fichier a été enregistré en format CSV, puis en format JSON grâce à un web service (https://csvjson.com/csv2json). Par la suite les données ont encore été formatées à l'aide de code JavaScript pour générer un nouveau fichier JavaScript plus facilement utilisable.

## Choix
Plusieurs bibliothèques JavaScript ont été utilisées dans ce projet ; Ramda.js pour faciliter la récupération des données et le tri ainsi que Chart.js pour la génération du graphique principal. Chart.js est un outil puissant permettant de générer toutes sortes de graphiques à l'aide de l'élément HTML canvas. Cette dernière a été utilisée dans le but de ne pas réinviter la roue avec D3.js par exemple, étant donné que le type de graphique choisi pour la représentation de données est simple (Linechart). Il aurait aussi été possible d'utiliser la librairie Billboard.js ; le problème de cette dernière réside dans le fait que les modifications et les choix sur les graphiques proposés sont énormément restreints. Pour le CSS, l'approche Bootstrap a été préconisée ; ici aussi dans un but de faciliter la création et également le redimensionnement mobile de l'application (responsive).

## Visualisation des données
L'utilisateur peut choisir plusieurs filtres sous formes de boutons ; à savoir, plusieurs fruits et légumes ainsi que l'importation ou l'exportation de ces derniers. Un graphique (linechart) se génère automatiquement à chaque clique de bouton ; si l'utilisateur ajoute un fruit / légumes ou s'il en enlève et bien évidemment, s'il change l'importation / l'exportation. Chaque fruits et légumes ont une couleur distincte (sur leur bouton respectif) qui se retrouve également sur la ligne assignée du graphique pour une reconnaissance visuelle accrue. 

## Type de représentation
Le graphique utilisé est de type Linechart, c'est-à-dire, un graphique avec des lignes ou plutôt des courbes. L'axe X correspond aux années et l'axe Y aux importations / exportations en tonnes. Ce type de graphique a été choisi dans le but de dégager une tendance en un coup d'œil rapide. De plus, il est très intéressant de pouvoir comparer les divers données des fruits et légumes en même temps et ainsi dégager des tendances.

## Démonstration
Durant cette année, dans le cadre d'un cours de veille sociétale, nous avons étudié la tendance actuelle de la consommation locale. Ce travail s'inscrit dans cette tendance ; le but premier de ce graphique est de démontrer qu'en Suisse nous importons beaucoup plus que nous exportons de fruits et légumes et ainsi faire prendre conscience à la population de l'importance de la baisse de l'importation en termes d'écologie. Le deuxième but de ce graphique est de montrer les différences entre les divers fruits et légumes en matière d'importation et d'exportation. 

## Public cible
Le public visé par ce projet est assez large. En effet, il s'adresse à tous types de consommateur dans un but de sensibilisation. De plus, il peut également s'adresser aux agriculteurs ou au gens dans le domaine agricole au sens large.
