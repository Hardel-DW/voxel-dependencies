Types de Schémas Principaux

1. Schémas Primitifs StringSchema - Pour les chaînes NumberSchema - Pour les nombres BooleanSchema - Pour les booléens FloatSchema - Pour
   les nombres flottants Schémas Composés SchemaObject - Pour les objets avec des propriétés définies SchemaList - Pour les tableaux
   d'éléments SchemaMap - Pour les dictionnaires/maps SchemaAlternative - Pour les unions de types (choix entre plusieurs schémas) Schémas
   Utilitaires Reference - Pour référencer d'autres schémas Optional - Pour rendre un schéma optionnel Registry - Pour valider contre un
   registre externe Tag - Pour valider contre des tags Enum - Pour les énumérations Nothing - Pour représenter null/absence de valeur
   Système de Switch/Case Utilisé pour créer des schémas conditionnels basés sur une propriété discriminante.
2. Organisation des Schémas Métier Les schémas sont organisés par domaine dans /schema/, par exemple : /text_component/ - Pour les
   composants textuels /enchantment/ - Pour les enchantements
3. Registre Global SchemaRegistry est un singleton qui maintient tous les schémas enregistrés, permettant de les référencer par nom.
4. Exemple d'Utilisation Points Clés Extensibilité : Le système est facilement extensible grâce à l'interface Schema Composition : Les
   schémas peuvent être composés pour créer des structures complexes Validation Asynchrone : Support pour la validation asynchrone via
   validateAsync Type Safety : Utilisation intensive des types TypeScript pour la sécurité du typage Réutilisabilité : Les schémas peuvent
   être référencés et réutilisés via Reference Cette architecture permet de définir et valider des structures de données complexes de
   manière type-safe et maintenable.
