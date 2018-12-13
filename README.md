
Below you will find some information on how to perform common tasks.<br>

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    actions/
    assets/
      images/
      jss/
      scss/
    components/
      App.js
      main.js
      Routing.js
    constants/
      actionTypes.js
    store/
    styles/
    index.js

```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## INSTALLATION STEPS

* Install any node (any version higher than v6.9.5) server on your machine.
* To Clone this repository run : `git@github.com:maulik-soni/react-simple-homepage-with-card.git`.
* Run `npm install` command inside the project folder.
* After it downloads all the dependemcies run `npm start` command to start the app.
* Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.