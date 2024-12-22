# Consignes

- **Nombre de personnes par groupe** : 3
- **Règles de constitution des groupes** : Libre

# Objectifs

- **Sujet du projet** : Création d'une API Restfull (pas de front à créer)
- **Type de rendu** : Sources du projet (sans `node_modules`)
- **Date de rendu de projet** : 22/12/2024 à 23h42

Le code doit être rendu sous Git (GitHub ou GitLab, projet public).
Chaque étudiant du groupe doit avoir travaillé sur le projet (avoir des commits à son nom), sinon la note sera 0.

Soumettre le lien Git dans le champ texte de soumission.

# Évaluations

- En l'absence de travail d'un étudiant, l'étudiant se verra attribuer la note de 0.
- Si une triche est détectée, la note du groupe sera de 0.
- L'aspect technique du projet sera testé automatiquement. Il faudra donc bien respecter :
  - Les normes RESTFULL
  - Les formats des entités
  - Les règles de gestion des données

# Cahier des charges

Créer une API RESTFULL sur un projet libre.

## Critères :

- Avoir au moins 3 entités en plus de l'entité (Model) `User`
- Mettre en place l'authentification JWT
- Utiliser Sequelize pour la partie BDD
- Avoir une gestion de droits (unitaire, par rôle ou les deux)
- Avoir une bonne hiérarchie de projet
- Avoir une bonne architecture logicielle
- Respecter la norme RESTFULL

Rendu Indiquer dans le champs de rendu :

https://github.com/hzllfeu/NodeJsCine

### NOM_DU_PROJET
Cinema API
### Description
Une API développé en javascript qui permet de stocké des données sur des cinémas, des films, des événements et des avis d'utilisateurs.
# Membres 

Giougt : Alexandre LOGUT <br />
hzllfeu : Louis Mouchon 

## Fonctionnalités
évènement lié au cinema: ajouter un nouvel évènement , modifier un évènement planifié , supprimer un évènement a venir et trouver un évènement spécifique. <br>
film: ajouter des nouveaux films , mettre a jour un film spécifique , supprimer un film existant par son ID. <br>
cinema: sélectionner un cinema , ajouté un nouveau cinéma , mettre a jour ces informations et le supprimé par son ID. <br>
commentaire: ajouter un nouvel avis sur un film , modifier son propre avis , supprimer son avis et trouver un avis spécifique. <br>
