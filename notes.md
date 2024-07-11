# CSS
- 1em is 100% of parent tag's font size. basically relative sizing.
- 1rem is 100% of root tag's font size.
- [flexbox cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

# Document Object Model (DOM)
- document.getElementBy...() functions: Id, TagName, ClassName
- document.querySelector(): returns first element that matches given selector
- document.querySelectorAll(): returns list of elements that matches given selector
- styles, classes, content, etc. can be manipulated using JavaScript

# Node.js
- REPL: Read Eval Print Loop
- Required to set `"type": "module"` in package.json to be able to use external modules in project
- `npm install <module-name>` will install the module and also add it to package.json
- It's bad practice to push node_modules directory to version control or servers

# Express.js
- Express.js consists of libraries which implement backend functions like HTTP, etc.
- **Middleware** perform processing and additional functions before sending response
- Middlewares order specified in code is important
- The `result` parameter of request-response callback functions has a property `locals` which always exists, this can be used to store data
- Static files can be declared using `app.use(express.static(<file-path>))`, these files are now directly served
- To serve these static files at a specific path, use `app.use(<host-path>, express.static(<file-path>))`

# Embedded JavaScript
- Templating language for JavaScript
- Used to dynamically render HTML pages using JS
- EJS files can be sent using res.render() instead of res.sendFile()
- Static files and Partials
