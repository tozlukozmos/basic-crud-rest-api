# Basic CRUD Rest API Documentation ![GitHub](https://img.shields.io/github/license/tozlukozmos/basic-crud-rest-api) ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/tozlukozmos/basic-crud-rest-api?filename=package.json) ![GitHub last commit](https://img.shields.io/github/last-commit/tozlukozmos/basic-crud-rest-api)
I have been searching best folder structure for a backend project, and then I have understood that it depends on the project requirements. When I consider what I want to achieve with a Node.js Rest API project, I have chosen this folder structure to manage all of these necessary actions. This is absolutely not obligatory, you can choose or create best one for your project. I have just created this CRUD Rest API template in order to take an action quicker when I should start a new backend project.

<br/>

## Folder structure
```
├── src
│   ├── api
|   |   ├── v1
|   |   |   ├── controllers
|   |   |   ├── logs
|   |   |   ├── middlewares
|   |   |   ├── models
|   |   |   ├── routes
|   |   |   ├── scripts
|   |   |   ├── services
|   |   |   └── validations
│   ├── config
│   └── index.js
```

<br/>

## Dependencies
* [CORS](https://www.npmjs.com/package/cors)
(v2.8.5) for cors policy restrictions
* [Express](https://www.npmjs.com/package/express)
(v4.17.3) for creating server
* [Helmet](https://www.npmjs.com/package/helmet)
(v5.0.2) for protecting header against attacks
* [Dotenv](https://www.npmjs.com/package/dotenv)
(v16.0.0) for hiding sensitive information
* [Crypto.js](https://www.npmjs.com/package/crypto-js)
(v4.1.1) for hashing data, especially passwords
* [Nodemon](https://www.npmjs.com/package/nodemon)
(v2.0.15) for automatically restarting the project when changes are detected in the file.

<br/>

> **OPTIONAL:** You can use [JWT](https://www.npmjs.com/package/jsonwebtoken) to authenticate an user, [Joi](https://joi.dev/) to validate taken data, and [Mongoose](https://www.npmjs.com/package/mongoose) to make database operations easier if you are using [MongoDB](https://www.mongodb.com/) as a database.

<br/>

## Setup
To run this project, install it locally using npm. Keep in mind that you should be in the root directory before running these commands.
```
$ npm install
$ npm start
```

<br/>

## Routes
There is only basic routes for a user.
| HTTP Methods  | Endpoints     |
| ------------- | ------------- | 
| `POST`        | /users/signup | 
| `POST`        | /users/login  | 
| `GET`         | /users        | 
| `PATCH`       | /users/:id    | 
| `DELETE`      | /users/:id    | 

<br/>

## Sample user data
You can use this sample user data in HTTP request body.
```json
{
    "id": 1234567890,
    "name": "Gerald",
    "surname": "Mitchell",
    "email": "gerald.mitchell@example.com",
    "birthday": {
        "day": 6,
        "month": 10,
        "year": 1973
    },
    "password": "kdsh7323£#05"
}
```
