# Project Overview (old portfolio)
Link to new portfolio: [Here](https://www.tt-moon.com/)

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 2| HTML, css, research simple css animations | Incomplete
|Day 3| Javascript, research advanced JS animations
|Day 4| Rework on css/js, MVP | Incomplete
|Day 5| Bug fix, Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description
This project is a personal portfolio that will showcase my skills and recent projects. The project will include html, css, javascript, jquery.  The project will be responsive with a mobile-first approach. Project will include some animations using css/js in order to be more interactive. Project will use some libraries such as fromspree, fontawesome, simple Icons, google fonts.


## Wireframes

- [Mobile Home](https://i.imgur.com/dHnWZ2u.png)


- [Desktop Home](https://i.imgur.com/8gIn372.png)


## Time/Priority Matrix 

- [Time Priority Matrix](https://i.imgur.com/h97LPOS.png)

#### MVP

- Layout and Structure
- Menu interaction
- Project tiles
- Adding Form
- Aesthetics (home, about, projects, contact)
- Using jquery for animations


#### PostMVP 

- Dynamic Background
- extra transitions (css/jquery)
- Styling form
- Image carousel(decided not to use image carousel. Didn't have enough projects)

## Functional Components

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Layout and Structure | H | 8 |  | 10|
| Hamburger Menu | M | 1 |  | 0 |
| Dynamic Background | M | 3 |  | tbd |
| Adding Form | H | 1|  | < 1 |
| Styling Form | M | 3 |  | tbd |
| Working with jquery animation| H | 4 |  | 2 |
| Dynamic Transitions | M | 4 |  | 4 |
| Project Tile Hover | L | 2 |  | 4|
| Aesthetics Home | M | 1 |  | combined |
| Aesthetics About | M | 3 |  | combined |
| Aesthetics Projects | M | 2 |  | combined |
| Aesthetics Contact | M | 3 |  | combined |
| Aesthetics Combined | M | 9 | | 8 |
| Interactive Menu buttons | M | 1 | | 1 |
| Carrousel | L | 5 | | N/A |
| css animation | M | 4 | | tbd |
| Total | H | 36 |  | 30 |

## Additional Libraries
 - svg sourced from [Simple Icons](https://simpleicons.org/))
 - logo from https://www.freelogodesign.org/
 - icons from icon8.com
 - img's from vecteezy.com (link at the bottom of page)
 

## Code Snippet


## Issues and Resolutions
gradient text: https://css-tricks.com/snippets/css/gradient-text/
may or may not use. I already knew how to use linear gradient with background colors but couldn't get it to work on text. css-tricks had a quick trick that uses webkit and turning the text to transparent before filling in the gradient. Transparency is needed because the text will default to using the original color if no value is given.

skewing divs w/o skewing text: https://stackoverflow.com/questions/17947565/how-to-skew-element-but-keep-text-normal-unskewed

Used mdn/w3schools as a reference to skew the divs to create a slanted line between each div(header, projects, skills, collab).  Had a hard time with slanting the div without getting the text to slant with it.  Used this stackoverflow as a reference.  Solved issue by creating another div within the main div and unslanting everything inside the nested div. Used something along the lines of transform: skewY(x) to get the initial line at the top/bottom of divs then unskewed by using transform: skewY(-x) on the inner div to bring all the content inside back to normal.

back and forth css animation: https://developer.mozilla.org/en-US/docs/Web/CSS/animation

https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes

Used CSS for one of my animations to make the ufo-image go back and forth in the header portion.  Had trouble using the keyframes because I was going from 10% to 20% but fixed once I changed to either pixels or from 0 -> any %. 
