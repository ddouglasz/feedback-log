# FeedbackLog Project

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

***Data source***

location: `src > data > customerData`
- There is an array of objects responsible for holding customer data.

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

- `Styling:` I would most likely invest more time in styling and maybe painting the page.

- `Tests:` I would write more tests on the FeedbackLog and write more indepth tests if I had more time.

-  `Types:` There are some places where I used `any` for typing my datatype, I would look deeper if I had more time to make sure I properly define the datatype.
