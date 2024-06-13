# Weather App

A responsive weather application that provides current weather information for any city. Users can switch between light and dark modes.

Live at - 'https://randeepraghav.github.io/weather-app/'

<<<<<<< HEAD
![alt text](<Screenshot 2024-06-12 232836.png>)

=======
>>>>>>> ec2ea8f8dc9bcfbd5c1323f23bbd9bb408496ae1
## Table of Contents
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)
- [Approach](#approach)
- [Known Issues and Limitations](#known-issues-and-limitations)

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/RandeepRaghav/weather-app.git
```

2. Navigate to the project directory:
```bash
cd weather-app
```

3.Install the dependencies:
```bash
npm install
```
## Running the Application
1. Start the development server:
```bash
npm start
```
2. Open your browser and go to:
```bash
http://localhost:3000
```
You should see the weather app running.

## Technologies Used
* **React:** A JavaScript library for building user interfaces.
* **Axios:** A promise-based HTTP client for making API requests.
* **OpenWeather API:** An API service to fetch weather data.
* **CSS:** Styling for the application, including responsive design.

## Approach
  1. Project Setup:
     * Used Create React App to set up the initial project structure.
     * Installed necessary dependencies like Axios for API calls.
       
  2. Component Structure:
     * Created a main App component to manage the state and render the UI.
     * Used useState and useEffect hooks to manage state and side effects.

  3. Fetching Data:
     * Integrated the OpenWeather API to fetch weather data based on the user's input.
     * Displayed various weather details such as temperature, humidity, wind speed, and additional information like pressure, visibility, and cloudiness.
       
  4. Responsive Design:
     * Utilized CSS media queries to ensure the application is responsive across different screen sizes (desktops, tablets, and mobiles).
  5. Dark Mode:
     * Implemented a toggle for dark and light modes, adjusting the UI accordingly.
## Known Issues and Limitations
- ### API Key Management:
  - The API key is hardcoded in the code for simplicity. In a production environment, this should be handled securely (e.g., using environment variables).
- ### Error Handling:
  - Basic error handling is implemented. However, more specific error messages could enhance the user experience (e.g., distinguishing between different types of API errors).

- ### Accessibility:
  - While basic accessibility is considered, more comprehensive testing and improvements could be made to ensure the app is fully accessible to all users.

- ### Performance:
  - For a larger scale application, further optimizations and performance improvements would be necessary, such as lazy loading of components and better state management solutions.

- ### Testing:
  - Unit and integration tests are not included in this version. Adding tests would improve the reliability of the application.

## Future Improvements
  - User Authentication:
    - Implement user authentication to save favorite locations and settings.

  - Enhanced UI/UX:
    - Improve the user interface with more detailed weather forecasts and animations.

  - Advanced Error Handling:
    - Provide more granular error messages and recovery options for users.

  - Caching:
    - Implement caching strategies to minimize API calls and improve performance.
   
* * *  
Feel free to contribute to this project by submitting issues or pull requests.


Make sure to replace `https://github.com/RandeepRaghav/weather-app.git` with the actual URL of your repository if you plan to publish it on GitHub or another platform. 

This README provides clear instructions on running the app locally, a brief description of the approach and technologies used, and mentions any known issues or limitations.
