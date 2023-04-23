# MERN Stack Porject

This is a Node.js application using the Express Framework and MongoDB database. It includes APIs that perform various operations on the data stored in the MongoDB database. I have populated the database with the given sampledata.json file.

## Installation

To get started with this application, follow these steps:

1. Clone this repository to your local machine:

`git clone https://github.com/vishalsinghhh/MERN-Project.git`

2. Install the required dependencies using npm:

`npm install`

3. make `.env` file and add `MONGO_URL=YOUR_MONGO_DB_CONNECT_URL`

4. Start the server:

`npm start`

5. Populate your MongoDB database using code in `populate.js` in root folder.

The server will start at `http://localhost:5000'

## API Endpoints

The following API endpoints are available:

## Users with income lower than $5 USD and have a car of brand “BMW” or “Mercedes”

`GET` `/api/v1/allRouter/router1`

This endpoint returns a list of users who have an income less than $5 USD and own a car of the brand "BMW" or "Mercedes".

#Male users with phone price greater than $10,000

`GET` `/api/v1/allRouter/router2`

This endpoint returns a list of male users who have a phone with a price greater than $10,000.

## Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name

`GET` `/api/v1/allRouter/router3`

This endpoint returns a list of users whose last name starts with "M", whose quote character length is greater than 15, and whose email includes their last name.

## Users with a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit

`GET` `/api/v1/allRouter/router4`

This endpoint returns a list of users who own a car of the brand "BMW", "Mercedes", or "Audi" and whose email does not include any digits.

## Top 10 cities with highest number of users and their average income

`GET` `/api/v1/allRouter/router5`

This endpoint returns a list of the top 10 cities with the highest number of users and their average income.


For frontend, go to the client and follow readme file to get started.
