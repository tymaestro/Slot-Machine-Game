# In It To Win It!
<br>

In It To Win It! is an online player vs computer game that aims to provide some fun and excitement through the element of chance. The player can generate random animal icons that each have a specific value. The aim of the game is to have a combined higher value than the computer. If so, you're a winner!
<br>
<br>
<img src="./assets/images/multi-device.png">

## Features
<br>

### Favicon

I have used a Favicon logo to display in the title bar. This adds more authenticity to this webpage and it is an easily recognisable logo if you have several tabs open and need to find your way back to this game.

<img src="./assets/images/favicon-head.png">
<br>
<br>

### Main heading

The main heading which is inside a header to ensure good semantic HTML gives users an insight into this game. The In It To Win It heading flanked by two euro symbols (favicons) suggests to the user that they have the possibility of winning a prize.

<img src="./assets/images/main-heading.png">
<br>
<br>

### Game Instructions

The game instructions section explains clearly and concisely how to play the game. It states that the game is easy to understand and accessible to all.

<img src="./assets/images/game-instructions.png">
<br>
<br>

### Animal Values

The animal values section informs the user of the value of each animal in the game. This is an expansion of the introduction and rules section and makes sure that the user has all information needed to play and understand the game.

<img src="./assets/images/animal-values.png">
<br>
<br>

### Main Game Section

This is the main section of the webpage where users will play the game in a player vs computer scenario. This is where they encounter JavaScript through the use of the "Generate Numbers!" button. This is a visually appealing section and the use of symbols instead of numbers lends to the engagement of a younger audience as well as for older audiences. Once the "Generate Numbers!" button is clicked, the numbers function is called in JavaScript to generate the random numbers. These numbers are then calculated and converted back into animals in HTML.

<img src="./assets/images/main-game-section.png">
<br>
<br>

### Alerts and Score Incrementation

Furthermore, an alert tells the user if they have won, drawn, or lost and increments the score at the bottom of this section depending on the result.

<img src="./assets/images/win.png">
<br>
<br>

<img src="./assets/images/draw.png">
<br>
<br>

<img src="./assets/images/loss.png">
<br>
<br>

<img src="./assets/images/increment-score.png">
<br>
<br>

### Footer

There is a footer to ensure good semantic HTML with a nice message about this game.

<img src="./assets/images/footer.png">

### 404-Page Not Found

I have included a 404 error page so that the user can find their way back to the game if their request cannot be found. Clicking the hyperlink "Continue Playing!" will direct them back to the game without the need to click the back button.

<img src="./assets/images/error-page.png">

### Features Left To Implement

Add an endgame function so that there is a set number of points available before the game ends. e.g. First to reach 10 points wins and ends the game.

## Testing
<br>

### Technologies

HTML5, CSS3, JavaScript
<br>

### Validator Testing

HTML: No errors were returned when passing through the official W3C validator.
<br>

### Index HTML Validation
<img src="./assets/images/html-validator.png">
<br>
<br>

### Error Page Validation
<img src="./assets/images/error-page-validator.png">
<br>
<br>

CSS: No errors were returned when passing through the official (Jigsaw) validator.
<br>
<img src="./assets/images/css-validator.png">
<br>
<br>

JavaScript: No errors were returned when passing through the official JSHint validator.

### Google Lighthouse Testing

Webpage passed through Lighthouse testing for mobile and desktop with near perfect scores in Accessibility, SEO, Best Practices and Performance.

### Mobile Results
<br>
<img src="./assets/images/mobile.png">
<br>
<br>

### Desktop Results
<br>
<img src="./assets/images/desktop.png">
<br>
<br>

### Responsivity
<br>

This game has many responsive features for several different screen sizes.

In the main game section, the animal symbols are responsive for screens of 935px and lower. They have less padding and a smaller margin.

The central game background is responsive for screens 864px and lower. I have given it a width of 'auto' and altered the padding and margin.

The animals in the main game section are responsive for screens of 600px and lower. I have adjusted their padding, width, and margin.

I removed the padding on span elements for screens of 520px and lower.

For screen sizes of 421px and lower I have reduced the font size of the main heading and the i elements.

### Feature Function

### Cross Browser Testing

This project has been tested on the Google Chrome browser, Safari browser, and the DuckDuckGo browser and is fully functional on both desktop and mobile versions.

## Deployment

## Credits

Fonts used were Open-Sans and Roboto and were taken from [Google Fonts](https://fonts.google.com/).

Font icons were used throughout the webpage and have been taken from [Font Awesome](https://fontawesome.com/).

Favicon icon for use in the tab bar was taken from [Favicon](https://favicon.io/)

Time delay function learned from [W3Schools](https://www.w3schools.com/js/js_timing.asp);

## Acknowledgements

Thank you to my mentor who gave me very helpful feedback and was very encouraging during our mentor sessions.

Also, a big thank you to the Slack community over the course of this entire module.