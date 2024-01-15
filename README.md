## Project Description
    The React application will have two main components: the JSON editor component and the form preview component. The JSON editor component will allow users to paste the UI-Schema in JSON format on the left-hand side. The form preview component will automatically render the form based on the pasted UI-Schema and display it on the right-hand side.

## Features - (JSON Editor)

    - Ability to detect changes in the pasted JSON and update the form preview component in real-time.
    - Validation of the UI-Schema to ensure that it follows the required structure and properties.
## Features - (Form Preview)

    - Automatically render the form based on the pasted UI-Schema.
    - Dynamically update the form based on changes in the UI-Schema in the JSON editor component.
    - Handle different field types such as text input, radio, switch, group, etc., and render them accordingly with their respective properties.
    - Handle nested fields inside groups and show/hide them based on the user's interaction with the form.
    - Show tooltips for fields with descriptions when hovered.
    - Handle form submissions and show the form data to the user which is going to send to the backend using the jsonKey values as keys and the entered values as values.

## Getting Started
    These instructions will help you set up and run the project on your local machine for development and testing purposes.

## Prerequisites
- Node.js (v14.x.x or higher recommended)
- npm (v6.x.x or higher recommended)

## Installation

    1. Clone the repository
```bash
  git clone https://github.com/Priyanshu9898/Frontend-Assignment.git

```

    2. Install dependencies 
```bash
  cd Frontend-Assignment
  npm install
```


    3. Start the development server
```bash
  npm run dev
```

    This will run the app in development mode. Open http://localhost:5173 to view it in the browser. The page will reload if you make edits.

## Building for production
    To create a production build, run:

```bash
npm run build
```

    This will build the app for production and output the files to the build folder. The build is minified, and the filenames include the hashes for efficient caching.

