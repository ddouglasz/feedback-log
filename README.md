# Project

- This project is a dashboard that managers customer feedback

Project is available on [github](https://github.com/ddouglasz/feedback-log)



## Available Scripts

In the project directory, you can run:

## `yarn install`

Install all app dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### App structure

***Components***
- There are two kinds of components: `Presentational components` and `Smart components`

- The main functionality is and most of the state management exists in `src > components > smart > FeedbackLog.tsx`

***styles***
- I used [styled component](https://styled-components.com/) for then styling.

- For bigger styling(like the styling for FeedbackLog component), I created a new directory for them to make the project more readable and modular.

- Find in `src > styles`



### tests 

- Run test using: `yarn test`

- Unit tests are written using react testing library [React testing librady](https://testing-library.com/docs/react-testing-library/intro/).

- Each component has at least test case.

### things to improve on

- `Responsiveness: ` I would normally use media query to rearrange the app to fit multiple screen sizes ranging from tablet to mobile if I had more time to invest in the project.

- I would reite more tests on the FeedbackLog.
