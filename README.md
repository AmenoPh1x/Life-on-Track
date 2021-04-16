# Life-on-track browser extension

The web extension that allows you to block you from wasting your time in the websites where you spend too much time or stimulates you to buy. Only the domains of your choice will be blocked, so you will have the power to decide how and when you want to spend time allowing you to put your life back on track again, helping you to accomplish your goals.

**Targeted browsers:**

- Firefox
- Chrome

## Installing / Testing

Open `about:debugging#/runtime/this-firefox` in Firefox, click "Load Temporary Add-on" and select any file in your extension's directory.

### Packaging and publishing

For other people to use your extension, you need to package it and submit it to Mozilla for signing. To learn more about that, see ["Publishing your extension"](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension).

## Features

- Block urls showing a page to help you ho back to your goals

## To do

- Manage the domains to block
- Customize your goals, and track if they are done or not (TO DO capabilities)
- Show motivational/inspirational quotes to help cultivating motivation and self-confidence
- Select when should you be able to be in a page (by day and hours)
- Select the maximum amount of time to spend in a specific domain per day/week/month
- Quick button to go to setting or to add the current domain as a blocked domain
- Add personal stats about how many pages have been blocked, percentage of each page, ...
- Focus/Music sounds
- Add an add-on management to add or remove more or less functionalities
- Use an article provider from the github repository
- Multilanguage support
- In settings page, be able to configure:
  - Language
  - Banned URLs
  - Alternative activities (with suggestions)
  - Activate/Deactivate the different widgets:
    - Alternative activities
    - Inspirational quotes
    - Sounds/Music for concentration

## Resources

- [How to do a chrome extension](https://medium.freecodecamp.org/how-to-create-a-chrome-extension-part-1-ad2a3a77541)

## Lesons learnt

- `Import`, `export` and `require` directives do not work in extensions. If we need to import code from another javascript file, we need to list the script in the `manifest.json` file before the script where it's needed. The import order keeps the declaration order defined in the manifest file. Once a javascript is added, all variables and methods are available as if they where delcareg globally.
- React by default generates minified CSS and JS files with the styles and the logic to build our application. Those files are later included in the main index.html file using absolute routes. This default behavior was stablished with the application running in the root of a domain in mind, but it can be changed adding the attribute `homepage` in the package.json file. If you want to use routes relative to the index.html, you can use the value `.` for the attribute. More details in the file `package.json`.
- If you use Create React App to generate a react application, it will embed a runtime script into the file `index.html` generate at build time. This allows to reduce the number of HTTP requests, but when working with extensions, it wont allow to load normally, generating [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) errors. To avoid this behavior, you can add a file `.env` in the root of the react app folder with the value `INLINE_RUNTIME_CHUNK=false`.

## React part

Initialized using:

```bash
$ npx create-react-app react
```

Serve the developed solution locally:

```bash
$ cd dashboard
$ npm start
```

Build the solution:

```bash
$ cd dashboard
$ npm run build
```

## Create extension file

Grab the files located in the `build` folder and copy them to `TO BE DEFINED`, and then ... (TO BE DEFINED).
