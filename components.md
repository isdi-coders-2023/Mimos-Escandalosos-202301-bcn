# DATA

## DATA LAYER

URL api.
Error message
Add recipes favorites message
Add modification recipe message
Recipe info:

Fat
Sugar
Carbs
Colesterol
Proteins
Ingredients
Image
Cuisine type
Kcal.

New recipe.
Add isLiked button (true or false). Toggle.

## DATA MODIFICATIONS

Change recipes url
Create recipe
Delete recipe
Add modification recipe
isLike button (true or false). Toggle.
Change cuisine type background color —> nice to have

# COMPONENTS

## APP

## PROVIDER

Contains the function getInfo()

Contains the function addMeal()
Contains the function deleteMeal()
Contains the function editMeal()
Contains the function favouriteCard()
Contains the function to change page.

Contains the function deleteAllFavourites() —> nice to have
Contains the function addValoration() —-> nice to have
Contains the function modifyValoration() —> nice to have
Contains the function deleteValoration() —-> nice to have

Sends the function to create card to form component
Sends the function to delete card to card component
Sends the function to create a recipe to the form component
Sends the function to delete a recipe to the favourites created cards.
Sends the function to toggle the card to the favourite button
Sends the function getInfo to the card

## CARD

Receives card info.
Receives getInfo function

## CARD CONTAINER

Receives cards
Receives card info.

## BUTTON

Receives the function favouriteMeal()
Receives the function changePage()
Receives the function deleteMeal()
Receives the function editMeal()

## FORM

Receives the function to create a meal.
Received the function to modify a meal.

## HEADER (layout)

Contains logo and nav bar.

## MEAL DETAILS

Receives card info.

## RATING —> nice to have.

## SEARCH BAR

Receives URL api.
Receives getInfo() function

## FAVOURITE SECTION

Receives URL local api
Receives getInfo function
