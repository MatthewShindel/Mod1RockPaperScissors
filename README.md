# Rock-Paper-Scissors

### Abstract:
I created an application that allows a user to play Rock-Paper-Scissor and its variation of Rock-Paper-Scissor-Alien-Lizard. The web application allows a player to play these games against a computer, which randomly chooses a option from the same list to challenge you. The wins for you and the computer are recorded sepreately. You can change to the  other game

### Installation Instructions:
Clone the repository to your local machine. The user can then interact with the applicaiton by opening the index.html file.

### Preview of App:

[View Demo Here](https://www.loom.com/share/c69b9f6035124798ab8e2c24bb5966da?sid=c68196bd-7c8b-4c0d-b81e-25ca2edbd52e) 

### Context:
This is my final solo project for Mod1 @ Turing. I spent Hours around 12 hours on 

### Contributors:
* Matthew Shindel: https://github.com/MatthewShindel


### Learning Goals:
* Write semantic HTML and efficient CSS to form a usable UI
* Write clean, DRY JavaScript and leverage functions, creating and using an effective data model
* Manipulate the page after it has loaded: adding, removing, and updating elements on the DOM


### Wins + Challenges:
* Win 1: The mian problem I had was figuring out the logic for how to compute wins or loses for the two games. Since the logic for Rock-Paper-Scissor-Alien-Lizard contains the smaller game Rock-Paper-Scissor, I used the logic for the larger game in both scenarios, making sure that the comptuer cannot choose Alien or Lizard in the smaller game.

* Win 2:  I didn't want to have to code multiple set of webpages for this project, so i used a hidden class tag for some of my element to hide them from the user until they are needed, keeping loading times down.