# Notes on starting a React Application

##### Step 1

Open the terminal and navigate to the directory where you want to store your React project.

Run the following command

```
npx create-react-app nameOfProject
```

Once the code has finished it will say "happy hacking"

```
cd nameOfProject
code .
```

##### Step 2

There is alot created within the project when using create-react-app and we don't need all of it. Delete the following:

```
app.test.js
index.css
logo.svg
reportwebvitals.js
setUpTests.js
```

Follow these instructions in the remiaining files.:

###### app.css

- delete everything

###### app.js

- Delete import logo from "./logo.svg"
- Delete everything between the header element including the header element itself.

###### index.js

- Delete import "./index.css"
- Delete import reportWebVitals from "./reportWebVitals"
- Delete all the green code at the bottom of the component.

We now have the basis of our react project.

###### Step 3

- Create a Reset.css file if you want one.
- Add this to your App.js on the line before your App.css in the App.js file.
- Set up your components folder
- Start to build out your code

###### Functional component

- Shortcut for starter code rfc tab

First way to write the functional component, export the component, import the component.

```javascript
function Grid() {
  return (
    <div className="grid">
      <p>This is the Grid</p>
    </div>
  );
}
export default Grid;
```

Second way to write the functional component and export the component.

```javascript
export default function Grid() {
  return (
    <div>
      <p>This is the Grid</p>
    </div>
  );
}
```

import the component into the component you want to use it.

```javascript
import "./App.css";

import Grid from "./components/grid/Grid";

function App() {
  return (
    <div className="App">
      <Grid />
    </div>
  );
}

export default App;
```

###### Open the react project in the browser

We no longer use go live.

We now need to open a terminal and run the command npm start

###### Link Local repo to GitHub

- Go to github and click to create a new repository.
- Name the repo the same as the react project you created.
- Do not add a readme.md or a gitignore as these are created by create-react-app
- click create repository
- Scroll to where it says or push an existing repository from the command line
  - copy the first line from the instructions
  - paste this into the terminal on the main branch
  - copy the third line (miss out the second line)
  - paste this into the terminal on the main branch
- then run the following ACP commands as usual
  - git add .
  - git commit -m "update"
  - git push
