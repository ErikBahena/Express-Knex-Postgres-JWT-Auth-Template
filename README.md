<h1 align="center">Welcome to The Backend Express and Postgres Auth Template 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This is boilerplate code for when you're starting a new postgres backend project

### The Tech:

- Node.js
- Express.js
- Knex.js
- Postgres
- JWT for authentication and authorization
- Bycrypt.js for passwords and stuff 😆

The repo includes a users table migration with the following object shape

```javascript
{
  first_name: "",
  last_name: "",
  email: "",
  photo_url: "",
  password: "",
}
```

Along with the users table migration, some endpoints!

## Endpoints

### Auth Endpoints

**POST**: `/api/auth/login`

- requires an email and password
- returns a JWT token and the following on success:

  ```javascript
  {
  first_name: "first_name",
  last_name: "last_name",
  email: "email",
  user_id: "user_id",
  photo_url: "photo_url",
  token: "jsonwebtoken",
  }
  ```

- returns "invalid login" on failure

**POST**: `/api/auth/register`

- valid request body example:

```javascript
 {
  first_name: "firstname",
  last_name: "lastname",
  email: "validemail@gmail.com",
  photo_url: "stringasdfdfasdf",
  password: "stringadsf",
  }
```

- returns a JWT token

#### User

**GET**: `/api/user/:user_id`

- requires a valid token in the headers of the request; getting that token would mean hitting the `/api/auth/register` endpoint successfully
- returns the following object shape on success `200`:
  ```javascript
  {
  user_id: 2,
  email: "emailexample@gmail.com",
  photo_url: "photourlexample"
  }
  ```

**PUT**: `/api/user/:user_id`

- requires a valid token in the headers of the request; getting that token would mean hitting the `/api/auth/register` endpoint successfully
- returns `201` on success

I built this because I got tired of doing it over and over again from scratch.

The `package.json` includes some scripts for migrating, rollingback, and seeding your database. Locally and with a Heroku Postgres Database. Be sure to update the `package.json` file with your information and change the `.env.sample` file to an actual `.env` file with your information as well

## Install

```sh
npm run freshy
```

when you run `npm run freshy` in your terminal, the following things will happen:

<ol>
  <li>Install required dependencies with <br/>

```sh
npm install
```

</li>

  <li>Initialize a git repo with

```sh
git init
```

</li>
   
  <li>Create a license of your choosing with <br/> 
  
  ``` sh 
  npx license mit
  ``` 
  
  </li>
  <li>Create a gitignore file for node with <br/> 
  
  ``` sh 
  npx gitignore node
  ``` 
  </li>
  <li>Have you generate a custom readme.md file with <br/>
  
  
  ``` sh 
  npx readme-md-generator
  ``` 
  
  </li>
</ol>

## Usage

```sh
npm run watch:dev
```

will run your index.js file with nodemon on your selected port found in the `/config/index.js` and `.env.sample` files

## Run tests

```sh
npm run test
```

will run your tests with jest but you'll need to install jest if you want that

## Author

👤 **Erik Bahena**

- Github: [ErikBahena](https://github.com/ErikBahena)
- LinkedIn: [ErikBahena](https://linkedin.com/in/ErikBahena)

## Show your support

Give a ⭐️ if this project helped you!

##### Or Maybe

[Buy me a sweet cup of coffee](https://www.buymeacoffee.com/ErikBahena) ☕
