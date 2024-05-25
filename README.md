# Rock, Paper, Scissors

Rock Paper Scissors is a fun game based on the classic Rock, Paper, Scissors. It incorporates chance mechanics to allow users to compete against their own high score in a limited number of lives.

It provides lighthearted fun to de-stress and relax but adds just the right level of competitiveness to keep users engaged. 

![Screen reponse image](readme/images/screenresponse.png)


-https://danparkinso-project2rps-4ixxhuzfxk0.ws-eu114.gitpod.io

-https://danparkinson.github.io/project2rps/

## Planning 

## Target Audience

People who are looking to relax by playing a simple yet challenging game of rock paper scissors.

### User Goals 

- Play Rock, Paper, Scissors.
- learn the rules of Rock, Paper, Scissors.
- Challenge themselves by beating their highscore.

### Site Owner Goals

- Teach users how to play Rock, Paper Scissors.
- Allow users to play Rock, Paper, Scissors.
- Allow users to compete against themselves by beating their highscore.
- Engage in a challenging game that limits users witha  set amount of lives.

### User Stories

- As a user, I want to be able to play Rock, Paper, Scissors on various device sizes.
- As a user, I want to know the rules of Rock, Paper, Scissors.
- As a user, I want to challenge myself to beat my highscore.
- As a user, I want to be able to see the computers choice to know if I have won, drawn or lost.
- As a site owner, I want users to understand the rules and play the game Rock, Paper, Scissors.
- As a site owner, I want users to visit the website multiple times.

### Features to achieve these goals

- The website uses a responive design that can be seen clearly on different devices.
- To allow new players to access the game we included the rules in the footer.
- To allow users to challenge themselves to beat their highscores the website loads the highscore form their local storage.
- The website clearly shows the player and computer choices for each round played.
- To add challenge a lives system is included which decreases each time the player loses. 

### Colour scheme
The Colour Hunt website was used to choose the colour scheme. 
The colours where chosen to give a relaxed feeling to users but also aid in visibility for any potential imparied users. 

![colour scheme image](readme/images/colorpalet.png)

https://colorhunt.co/palette/92c7cfaad7d9fbf9f1e5e1da

### Wireframes

Figma Wireframes was used to create the wireframe. A simple one size fits all design that would only need to be a scaled for different screen sizes.

![Wireframe image](readme/images/wireframe.png)

https://www.figma.com/design/xG2N96cHdC29XXobLBx1vY/Figma-basics?node-id=601-10&t=5aTYeRgYSjFxa1A4-0

## Existing Features

### Heading
- The heading is clear and unambiguos about teh what the site provides to users through a bold title of "Rock, Paper, Scissors"

![Heading](readme/images/heading.png)

### Controls area

- The controls area is desinged to add content to the page instead of just buttons with words. Clear pictures of the users choices as well as a responisve design to clearly indicate that they are buttons.

![Contorls area](readme/images/controlsarea.png)

### Choice area
- This area is designed to show both user and computer choices which matching image designs to the intial buttons. As well as feeback of the result during the round in colour responisve text. 

![Choice area](readme/images/choicearea.png)

### Score area
- The score areas purpose is to show the current and high scores. As well as the lives the user has remaining. The current score upadtes with each win and restarts after each plythrough, The highscore updates with the highest score the local device has achieved. The lives reduce with each loss and trigger the game to end. 

![Score area](readme/images/scorearea.png)

### Game over screen
- The game over screen is simply designed to show clearly that the game has finsihed. initially the html is hidden but once the lives counter reaches 0 it will open. It contains a big centralised restart button to get users to continue playing. 

![Game over](readme/images/gameover.png)

### footer
- The footer contains the rules of the game to allow new users to understand the decisions and better progress their highscore. 

![Footer](readme/images/footer.png)

## Features left to implement
- A 2 player version allowing player2 to replace the computer
- A version of Rock, Paper, Scissors, Lizard, Spock to be selected
- A global leaderboard

## Testing

- Tested with different browsers such as Chrome, Firefox and Safari.
- Tested different screen sizes with developer tool.
- Tested all buttons start the game and give correct outcomes.
- Tested all choice selcetion are correct for both player and computer. 
- Tested highscore stays after page is refreshed.
- Tested lives decrease with each loss and when Lives hit 0 game over screen shows.
- Tested the restart button restarts the game.

User story testing

| User story                                                                                    | Expeceted result | Pass |
| ----------------------------------------------------------------------------------------------|--------------------------------------------------------------------|------|
| As a user, I want to be able to play Rock, Paper, Scissors on various device sizes.           | Screen sizes responisive on all screentypes                        |&check; |   
| As a user, I want to know the rules of Rock, Paper, Scissors.                                 | Rules included in the footer                                       |&check; | 
| As a user, I want to challenge myself to beat my highscore.                                   | Highscore is saved and loaded locally to allow users to come back  |&check; | 
| As a user, I want to be able to see the computers choice to know if I have won, drawn or lost.| Choice area display graphics of user and computer choice as well as the result |&check; | 
| As a site owner, I want users to understand the rules and play the game Rock, Paper, Scissors.| Rules and game included to allow users to do this                  |&check; | 
| As a site owner, I want users to visit the website multiple times.                            | Players encouraged to come back to beat their highscore           |&check; | 

## Validator Testing

### HTML

![html errors](readme/images/htmlerrors.png)

The html code passed all checks except for two empty image sections inside the choice area. This was left as the iamges are populated with src and alt text when the users clicks on one of the control buttons. Error left in.

### CSS

- No errors found

### JS

### Warnings Fixed

- missing semicolon on line 4.
- missing semicolon on line 40.
- missing semicolon on line 47.
- missing semicolon on line 58.
- missing semicolon on line 83.
- missing semicolon on line 125.

# Warnings not Fixed
- line 37 Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (playGame)
- line 45 Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (restart)

- not fixed as Code Institute tutorial said they were okay.

### Errors

- No errors

### Lighthouse report

![Lighthouse check](readme/images/lighthouse.png)

- Lighthouse reported no issues with the website.

## Deployment 

- webiste fully deployed to GitHub pages

## Credits

- Rock paper scissors images from https://www.shutterstock.com/image-vector/colorful-hand-icon-set-rock-paper-2151726093
- inspiration for playgame() switch mechanic in game came from https://www.youtube.com/watch?v=3uKdQx-SZ5A



















credits

screen size image - https://techsini.com/multi-mockup/index.php