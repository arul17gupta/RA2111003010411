# Average Calculator Microservice

This project implements an Average Calculator microservice that exposes a REST API to calculate the average of numbers based on their type (prime, Fibonacci, even, random). The microservice fetches numbers from dummy APIs and calculates the average, ensuring stored numbers are unique and limited by a window size.

## Features

- Exposes a REST API /numbers/{type} to calculate the average of numbers of a given type.
- Supported number types include prime, Fibonacci, even, and random.
- Fetches numbers from dummy APIs for prime, Fibonacci, even, and random numbers.
- Stores unique numbers and limits them by a configurable window size.
- Calculates the average of stored numbers.
- Responds with the previous and current window state, stored numbers, and average in JSON format.

## How to Run

### Clone the repository:

git clone https://github.com/your_username/average-calculator.git

### Navigate to the project directory:
cd average-calculator
### Install dependencies:
npm install
### Start the server:
node server.js

### Follow these Steps.
- Open your web browser and navigate to http://localhost:9876 to access the Average Calculator interface.

- Select a number type from the dropdown menu and click the "Calculate Average" button to see the result.

### Dependencies
Express.js: Web framework for Node.js used to create the REST API.
Axios: Promise-based HTTP client for making requests to the dummy APIs.
Directory Structure
java
Copy code
average-calculator/
│
├── public/
│   └── index.html
│   └── script.js
│   └── styles.css
├── server.js
├── README.md
└── package.json


## ScreenShots

### FrontEnd

![WhatsApp Image 2024-04-03 at 7 45 27 PM](https://github.com/arul17gupta/RA2111003010411/assets/91671631/497f76b0-6e41-41fb-a35a-7d9d62b587da)

### BackEnd
![WhatsApp Image 2024-04-03 at 7 42 07 PM](https://github.com/arul17gupta/RA2111003010411/assets/91671631/af8b0823-7537-4aa1-961b-25575358d4ea)

### After Making a Dummy API

![WhatsApp Image 2024-04-03 at 7 42 10 PM](https://github.com/arul17gupta/RA2111003010411/assets/91671631/5b739650-485f-4098-876d-6750279cd97b)




