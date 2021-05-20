# MiCasa

MiCasa is a mobile app that helps renters to find available units without having to constantly check rental websites.
An user can simply set preferences to what they look for in a rental, and forget it.
Walk around the neighbourhood, if any listings match your preferences, 
it will push notify the user providing the listing details and can chat with the owner directly.


## Video Walkthrough of MiCasa

(https://www.youtube.com/watch?v=ltRnT-FhmcY)
(https://www.youtube.com/watch?v=u5RIqlsm_eg)


## Screenshots

![Register Page](https://github.com/elliottthomlison/MiCasa/blob/master/images/registerpage.png?raw=true)
![Main Page](https://github.com/elliottthomlison/MiCasa/blob/master/images/firstpage.png?raw=true)
![Home Page](https://github.com/elliottthomlison/MiCasa/blob/master/images/mainpage.png?raw=true)
![Map Page](https://github.com/elliottthomlison/MiCasa/blob/master/images/mappage.png?raw=true)


## Contributors:
Ban Qaddoori (https://github.com/Alshaikhly/)
Leighton Chien (https://github.com/leightonchien)
Elliott Thomlison (https://github.com/elliottthomlison)


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
- axios: ^0.18.1,
- bcrypt: ^5.0.1,
- body-parser: ^1.18.3,
- cookie-parser: ~1.4.4,
- cookie-session: ^1.4.0,
- debug: ~2.6.9,
- express: ~4.16.1,
- morgan: ~1.9.1,
- pg: ^8.5.1,
- pg-native: ^3.0.0,
- yelp-fusion: ^3.0.0
- material-ui/icons: ^4.11.2
- bootstrap": ^5.0.0
- google-map-react": ^2.1.9
- react-google-maps/api: ^2.1.1


