# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Features
* Dynamic Form Generation: The application dynamically generates a form based on a JSON schema.

* JSON Editor: Users can create and modify the form schema using a built-in JSON editor.

* Dark Mode Support: Toggle between light and dark modes for better user experience.

* Form Validation: Form fields are validated based on the provided schema.

* Download JSON: Upon form submission, the form data can be downloaded as a JSON file.

* Clipboard Copy: Copy the JSON schema to the clipboard with one click.

# Technologies Used
* React: The core front-end library used for building the application.
  
* React Hook Form: For handling form validation and submission.

* TypeScript: For type safety and better developer experience.

* Tailwind CSS: For styling the components and handling the responsive design.

* react-json-editor-ajrm: A package used to create a JSON editor for users to modify the schema.

# Project Struccture
```
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── JSONEditor.tsx
│   │   └── GeneratedForm.tsx
│   ├── types/
│   │   └── schema.ts
│   ├── utils/
│   │   └── downloadJSON.ts
│   ├── App.tsx
│   └── index.tsx
├── public/
├── package.json
├── tailwind.config.js
└── tsconfig.json
```
# Installation

1. Clone the repository:
```
   git clone https://github.com/your-username/dynamic-form-generator.git
```

2. Navigate to the project directory:
```
cd dynamic-form-generator

```
3. Install the dependencies:
```
npm install

```
4. Start the development server:
```
npm start
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

