# MiCasa

MiCasa is a mobile app that helps individuals looking to rent to find available units without having to constantly check rental websites. It was is final project that was built during the Lighthouse Labs Web Development Bootcamp. A user sets their preferences and what they're looking for in the desired property, then once they pass that location their receive a cellular notification. 
MiCasa was built using the PERN stack (PostgreSQL, Express, React, and NodeJS). It aims to help the average person find an appropriate property more easily. This is achieved through the user simply setting the aforementioned preferences to what they look for in a rental, and then passively receiving pings when such properties are found. There were backend specific difficulties during the creation of the app, yet the frontend presented challenges and learning experiences as well.

## Related Videos

- (https://www.youtube.com/watch?v=ltRnT-FhmcY)

- (https://www.youtube.com/watch?v=u5RIqlsm_eg)

## Final Product 
<p float="center">
  <img src="https://github.com/elliottthomlison/MiCasa/blob/master/images/firstpage.png?raw=true" class="center" width=237px height=465px/>
  <img src="https://github.com/elliottthomlison/MiCasa/blob/master/images/registerpage.png?raw=true" class="center" width=237px height=465px/>
  <img src="https://github.com/elliottthomlison/MiCasa/blob/master/images/preferecespage.png?raw=true" class="center" width=237px height=465px/>
  <img src="https://github.com/elliottthomlison/MiCasa/blob/master/images/messagingImage.jpg?raw=true" class="center" width=237px height=465px/>
  
  <img src="https://github.com/elliottthomlison/MiCasa/blob/master/images/mainpage.png?raw=true" width=962px height=500px />
  <img src="https://github.com/elliottthomlison/MiCasa/blob/master/images/mappage.png?raw=true" width=962px height=500px />
</p>

## Contributors:
- Ban Qaddoori (https://github.com/ban-mazin)

- Leighton Chien (https://github.com/leightonchien)

- Elliott Thomlison (https://github.com/elliottthomlison)

## Initial Setup
To run the following project on your machine please follow the steps below:  
### Backend setup:
1. Create an <code> .env </code> in the main backend directory where you'll be providing the required API Keys. 
2. Obtain an API key from **Google map** https://developers.google.com/maps/gmp-get-started Place these in the ```.env ``` file you created in the backend. 
You will need to use the same Google map API Key for the Frontend setup as well so keep this handy for now.
### Frontend setup:
3. Create an <code> .env </code> in the main frontend directory where you'll be providing the required API Keys. 
4. Take the **Google map**  API key you obtained earlier for the backend setup and put this in the .env file. 

## Getting Started 
1. Install all frontend dependencies while in the main frontend directory.
```
npm install
```
2. Install all backend dependencies while in the main backend directory.
```
npm install
```
3. Reset the database.
```
npm run db:reset
```
4. Run the server for the frontend and backend.
```
npm start
```
5. Lastly, visit the website on your localhost.
```
http://localhost:3000/ 
```

## Dependencies
- Axios: ^0.18.1,
- BCrypt: ^5.0.1,
- Body-Parser: ^1.18.3,
- Cookie-Parser: ~1.4.4,
- Cookie-Session: ^1.4.0,
- Debug: ~2.6.9,
- Express: ~4.16.1,
- Morgan: ~1.9.1,
- PG: ^8.5.1,
- PG-Native: ^3.0.0,
- Yelp-Fusion: ^3.0.0
- Material-ui/icons: ^4.11.2
- Bootstrap": ^5.0.0
- Google-Map-React": ^2.1.9
- React-Google-Maps/api: ^2.1.1
