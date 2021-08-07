# Box Challenge: A memory game built with React

**Author: Riva Davidowski**

**How to install**

- Run `npm i` to install all dependencies
- Run `npm start` to run the server

**About box-challenge**

**1st phase:**
 Make a web page with a 3x3 grid of boxes, and when you click on a box it turns green. Only one box can be green, though. The boxes should all be the same component.

How do I break this down?

- App is the parent and can instantiate `GridOfBoxes.js`
- `GridOfBoxes.js` will render a grid of boxes
  - GridOfBoxes needs to know how MANY boxes to render
  - GridOfBoxes needs to remember which box is selected
  - GridOfBoxes needs to know when a box is clicked on
    - The `onClick()` handler will need some parameter to know which box is clicked
- `Box.js` will render a box
  - Box needs to know when itself is selected
  - Box needs to have behavior when it is clicked on
  - Box's click handler will to need some parameter to know which box is clicked 
  - The box needs to know which box it is
  - Box needs to change its class depending on whether it's selected

**2nd Phase:**

- First, if a box is selected, and clicked on, it should become unselected. In the first phase, the only way to deselect a box is to select a different one.
- Second, if one box (or no box) is selected, clicking on a box will select it.
- Third, if two boxes are selected, clicking on a new box will deselect the previous two boxes.

**3rd Phase:**

  - Make a list of nine colors and randomly assign them to the boxes. When a box is selected, it turns it's own unique color.
  - The random assignment should happen upon initial page load. Each a time a box is selected then deselected, the colors remains the same.

**4th phase:**

**This next phase is a fun one!**

- First, extend the grid to be 3x4. 
- Second, choose 6 random colors and apply each color to *two* boxes. 
  - There should be 12 boxes, 6 colors, and each color appears exactly twice.

**5th phase:**

- Create a counter that tracks box clicks, but only the first of the two. So each time the selection resets, the timer increments.
  - Show the counter at the bottom of the page
- When two boxes are selected at the same time, if they are the same color, they become invisible and are no longer clickable.

**6th phase:**

- It is time to introduce GIFs! When a box selected, it should show a Gif instead of a random color.
- There should be a total of 12 boxes, 6 GIFs, and each GIF appears twice

**7th Phase:**

- Set the players score to localStorage only when the game has ended
- Find a way to track to the player's bestScore
