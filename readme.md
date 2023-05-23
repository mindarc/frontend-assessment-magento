Completed Assessment -- Jerome Manceau
---


* * *
## Instructions

I have added a new folder to the repository called `assessment-JeromeManceau`

If you open this folder in your browser it will call an `index.html` page displaying two buttons, each one leading to the respective exercise.

***

## Exercise 1


### Request
Build a responsive page based on the designs.

## Solution
The design examples for this assessment showed 2 stages of the responsiveness without specifying the exact breakpoints. I took the liberty to have the layout go through more stages.

The exercise has been solved using HTML, CSS and jQuery. 

The jQuery code has been implemented directly at the bottom of the HTML page as it is quite short.

The CSS uses the `:root` pseudo-class to define variables that might need to be updated in the future.

**Please Note:** The design for the exercise displays 3 box elements below the banner. The solution allows to extend this easily to 4, 5 or 6 boxes by simply adding the corresponding DIV elements to the HTML.

### Folder Structure

```
├── assets
│   ├── css
│   │   └── style.css
│   └── images
│       ├── banner-desktop-1920x650.png
│       ├── banner-mobile-600x600.png
│       └── image-400x300.png
└── exercise-1.html
```

<br>

### Added Effects

**Buttons**
A hover effect has been added to the buttons for better UX.
This has been solved using CSS.

**Sections**
The top section (header/banner) appears with a slight delay.
The main section with boxes appears when it scrolls into view.
This has been solved using jQuery which is found in the **exercise-1.html** file.

***
<br>

## Exercise 2


### Request
Read the `data.json` file and display the data as tabs on desktop and an accordion on mobile.

## Solution
The exercise has been solved using HTML, CSS, Knockout.js and jQuery.

### Folder Structure
```
├── assets
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── custom.js
│   └── json
│       └── data.json
└── exercise-2.html
```

### Added Effects

- **Tabs** 
No effect has been added to the tabs to keep them simple. They switch on click and the active tab is highlighted.

- **Accordion**
A smooth effect has been added to the accordion so that the content doesn't appear too brusquely.

<br>

***
<br>

## Bonus Question

Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.

### Answer
The 2 + signs in the middle will trigger an increment of the preceding/following variable. In the above formula the first `b` and `a` are added together which leaves the second `a` to be interpreted with the double plus sign. However because this variable is a string it cannot be incremented which results in a `NaN` output. The whole line is displayed in lower case characters, hence: `b a NaN a` becomes `banana`.