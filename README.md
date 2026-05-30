# Hotel Management System

A full-stack Hotel Management System built using Node.js, Express.js, MongoDB, and Mongoose. This project helps manage hotel staff and menu items through REST APIs.

## Features

* Add new staff members
* View all staff details
* Update staff information
* Delete staff records
* Add menu items
* View menu items
* Update menu information
* MongoDB database integration
* RESTful API architecture

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Tools

* Postman
* Nodemon
* Git & GitHub

## Project Structure

```bash
Hotels_Management/
│
├── models/
│   ├── Person.js
│   └── MenuItem.js
│
├── routes/
│   ├── personRoutes.js
│   └── menuRoutes.js
│
├── db.js
├── server.js
├── package.json
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/Shikhar-pal/Hotels_Management.git
```

### Move to Project Directory

```bash
cd Hotels_Management
```

### Install Dependencies

```bash
npm install
```

## Configure MongoDB

Make sure MongoDB service is running.

```bash
net start MongoDB
```

MongoDB connection:

```javascript
mongodb://localhost:27017/hotels
```

## Run Project

```bash
nodemon server.js
```

or

```bash
node server.js
```

Server will start on:

```bash
http://localhost:3000
```

## API Endpoints

### Person Routes

#### Create Person

```http
POST /person
```

#### Get All Persons

```http
GET /person
```

#### Update Person

```http
PUT /person/:id
```

#### Delete Person

```http
DELETE /person/:id
```

### Menu Routes

#### Create Menu Item

```http
POST /menu
```

#### Get All Menu Items

```http
GET /menu
```

#### Update Menu Item

```http
PUT /menu/:id
```

#### Delete Menu Item

```http
DELETE /menu/:id
```

## Sample Person Data

```json
{
  "name": "Shikhar Pal",
  "age": 21,
  "work": "manager",
  "mobile": "9876543210",
  "email": "shikhar@example.com",
  "address": "Greater Noida",
  "salary": 50000
}
```

## Sample Menu Item Data

```json
{
  "name": "Chicken Biryani",
  "price": 250,
  "taste": "spicy",
  "is_drink": false,
  "ingredients": [
    "Rice",
    "Chicken",
    "Spices"
  ],
  "num_sales": 120
}
```

## Future Improvements

* Authentication & Authorization
* JWT Security
* Role-based Access Control
* Admin Dashboard
* Hotel Room Management
* Online Booking System
* Payment Gateway Integration

## Author

Shikhar Pal

GitHub: https://github.com/Shikhar-pal
