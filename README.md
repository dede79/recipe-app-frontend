# DLicious Recipe Storage (frontend)

DLicious is a recipe database that allows users to enter their own recipes for private storage and access from any web browser. Users can enter ingredients, preperation steps, cuisine, servings, etc. This was built alongside the backend as a final group project from the Command Shift March 2023 cohort.

## Features

- **User login and authentication** provided by Firebase Cloud.
- **Detailed options** for user recipes including cuisine, preperation time and servings.
- **New recipes every day** thanks to the Spoonacular API (currently bugged)
- **Attractive and easy to use interface** for even the most tech-illiterate among us.

## How to Use

To use DLicious, clone the repo and run the development server in your local environment. To send or receive any data correctly, you'll also need to spin up the [backend repo](https://github.com/Korjubzot/recipe-app-backend).

1. Clone the repository:

   ```bash
   git clone https://github.com/korjubzot/recipe-app-frontend.git
   ```

2. Install dependencies:

   ```bash
   cd recipe-app-frontend
   npm install
   ```

3. Run the development server:

   ```bash
   npm start
   ```

4. Access the app at [http://localhost:3000](http://localhost:3000).

## Known Issues

- Firebase authentication needs to be reworked
- Spoonacular API fails to pull data in certain environments

## To Do

- Allow users to add recipes directly to their own database from Spoonacular API

## Technologies Used

HTML, CSS, JavaScript, React, Splides
Food Data API: Spoonacular API
Icons: FontAwesome

## Licensing

This project is licensed under the MIT License. For more details, see the LICENSE file.

## Contact

If you have any questions, suggestions, or issues, please feel free to contact me:

Email: korjubzot@gmail.com
