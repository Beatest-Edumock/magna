# Beatest - Magna

This is the source of our (Hopefully) upcoming UI. 




### File structure Conventions


`index.js`  --> Entry point of the app 

`routes.js` --> Definitions of different pages using `React-Router`

`setUp.js`  --> Factory function that does setup work (like setting global defaults)

`stories/`  --> Storybook folder for UI testing (more details coming soon)

`__internals/` --> Code that are required for the functioning of the app itself

`_Api/` --> All external api calls are placed under here. Each logical group of api calls 
should be placed in the same file. 

`_Redux/` --> Redux related code. This includes things like action constants,action creators and
reducers

`Layout/` --> Commonly used components that are used for almost all pages. This includes
components like header and footers

`Common/` --> Reusable components that are required throughout the app.

`CSS/`  --> Custom css theme to be applied to the entire website 


### Page naming conventions

Pages should be placed directly under `src/` with the suffix `page`. 
So the Login Page should be placed under `src/LoginPage/` as `LoginPage.js`. 


If the page requires components, its recommended to add them as different
files next to the page's js file in a new folder. 


### Component naming conventions 

E.g. the `LoginForm` component should be placed under 
`src/LoginPage/LoginForm.js`

If the component is complex (i.e. not just presentational),
a companion Container component should be placed next to the component's file.

E.g. for `LoginForm.js`, there should be a `LoginFormContainer.js`
file at the same level as `LoginForm.js`


If a component requires to connect to the redux store, it **must have a container component**


Components that are part of the general page layout 
should be placed in `layout`. Extremely commonly used
components like `header` , `footer` should be under here. 
Each component should have its own folder.

Components that are reused should be placed in Common
but are not part of the layout of a page should be placed under 
`Common`.
Each component should have its own folder.

