# Software Engineer Coding Exercise - Apolitical

## Getting started

### Prerequisites

- You will need node and yarn installed
- An IDE to work from
- A Gitlab account so you can fork this repo and make commits

### To run

- Fork this repo
- Run `yarn install`
- Run `yarn start`
- Open [http://localhost:3020](http://localhost:3020) to view this project in the browser.
- To run tests, run `yarn test`

## Coding Exercise

### Overview

The Head of HR has asked you to help them organise a list of employee names. They would like a page where they can view a table of all employees' names, and the ability to enter new names. They would also like to be able to alphabetize the names as this makes it easier for them to read the list. 
You will also need to consider styling the page to make it more visually appealing to the user. 

You shouldn't spend too long on this task, approx 2-3 hours should be enough. We are more interested in seeing how you approach the problem at hand and the way you tackle it than spending too long making it perfect. 
Please do separate commits as you go along, with clear commit messages. 

This page should show: 
- A title for the page
- A table of all the already-entered names
- An input field to enter new names
- New names to appear in the table alongside the existing ones

### Javascript

Using React, please create the necessary components to as described in the overview. 

Please consider:

- The field for employee's names should only accept names
- A method to get the name from the input field and display it in the table below
- A table displaying all the names of employees
- A method to alphabetize the names
- It's fine to use React state to store the names rather than connecting to a database


### Styling

Without any styling, the page doesn't look very visually appealing to a user. Please add styling to give the user a better experience on the page. How this is done and how it looks is entirely up to you. You're free to use vanilla CSS, StyledComponents, Sass/Less (or similar preprocessor) - whatever you're most comfortable with. 

We want to see how you handle styling, so we would prefer that you didn't use existing design systems such as MaterialUI. 

We will be looking for considerations such as:

- Responsiveness
- Good practice UX
- Accessibility

### Advanced:

If you have time, additional considerations you can add are: 

- An input field for employee email addresses and a way to display the email address next to the correct person's name
- A way to remove employee details from the list
- A way to edit the employee details
- An icon next to each user's name
- Unit test (you can use any testing library you're comfortable with for this)
- Any other features or considerations you think would be useful to the user (you are welcome to use any yarn/npm packages you wish for this)


## Submitting your work

- In your forked repo, make your commits and push.
- Ensure your repo is set to public view
- Share the link to your repo with us
