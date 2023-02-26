## Installation steps 

Load each directory and install dependencies

cd GondwanaRecordsV2/backend-main
npm install
npm start 

then

cd GondwanaRecordsV2/frontend-main
npm install

In the front-end directory, you can then run:

npm start 

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

You can find a version of the website deployed on Heroku at [https://gondwana-demo.onrender.com/](https://gondwana-demo.onrender.com/)

## Packages and APIs used

This website makes use of the following packages and APIs

[ReactJS](https://reactjs.org/)
[Express](https://www.react.express/)
[StripeAPI](https://stripe.com/docs/stripe-js/react?locale=en-GB)
[Redux](https://redux.js.org/)
[React-bootstrap](https://react-bootstrap.github.io/)
[CloudinaryAPI](https://cloudinary.com/documentation/image_upload_api_reference)
[Axios](https://www.npmjs.com/package/axios)
[Bcrypt](https://www.npmjs.com/package/bcrypt)

You will need to create and add your own API keys to the .env file in the 'backend-main' folder. These include keys for MongoDB, Cloudinary and Stripe.

The '.env' should be in the following format 

MONGO_USERNAME=yourusername
MONGO_PW=yourpassword

CLOUD_NAME=cloudname
API_KEY=cloudkey
API_SECRET=cloudsecret

STRIPE_SECRET=yourstripesecret

Your MongoDB will also need to be connected to your personal database by adding your API link to the backend-main/connections.js file

The Coudinary API will alos need to be linked up in the frontend-main/pages/NewProduct.js & EditProductPage.js pages on line 63 by inputting your cloudName and uploadPreset values.

[Cloudinary preset values](https://cloudinary.com/documentation/upload_presets)

## Security and authentication

The website uses bcrypt to hash sensitive information before sending it to the server. Information on Bcryot can be found [here] (https://medium.com/boca-code/how-to-encrypt-password-in-your-react-app-before-you-send-it-to-the-api-6e10a06f0a8e)

The StripeAPI handles all card payments and forces all transactions through HTTPS - no card information is held by the website. 

[Information on Stripe API security](https://stripe.com/docs/security?locale=en-GB)


## Splitting the front & backend folders

For this project we decided to split the server and front-end folders due to a number of considerations:

Scalability: Splitting the two folders can make it easier to scale the website, as you can add more servers to handle the load on the backend, without affecting the front-end code.

Modularity: By separating the server and front-end folders, you can ensure that the code is modular and easier to maintain.

Security: Separating the two folders can help improve the security, as it can be more difficult for attackers to access both the server and front-end code.

Flexibility: Splitting the two folders can give you greater flexibility to change your front-end and back-end technologies independently of one another, without affecting the other part of the codebase.

# Gondwana Records - Website upgrade

The goal of the updated Gondwana Records website is to provide a platform for the label and artists fans to access and purchase music directly from the Gondwana Records catalog. Up until now they have relied on Bandcamp for online sales which takes a 10% cut off sales revenue. The website will include features such as user login and authentication, a store, artists profiles, embedded audio and video, and payment processing.

The primary user for the Gondwana Records website are jazz music enthusiasts who are interested in the label's catalog of music. These users are looking for a user-friendly and secure platform to browse and purchase music, as well as access to additional content such as music videos, artist interviews and live performances.

## Product features

- User Authentication: Users will be able to create an account, log in, and edit their profile information. This feature will enable a personalised experience for the user, as well as providing a secure platform for making purchases.
- Store: The store will contain a catalog of music from the Gondwana Records label, including albums, EPs, and individual tracks. Users will be able to browse and search the catalog, view album art, and listen to audio samples. Users will also be able to purchase music using Stripe payment processing.
- Audio and Video: The website will include embedded audio and video content, such as artist interviews, live performances, and music videos. This feature will provide users with additional content related to the label, as well as an immersive and engaging experience.

## System architecture

The Gondwana Records website will be built using the MERN web stack, consisting of MongoDB, Express.js, React, and Node.js. 

The backend will be built using Node.js and Express.js, while the front-end will be built using React. MongoDB will be used as the database management system. Stripe, a popular payment gateway, will be integrated into the system architecture to handle payment processing. Stripe will be used to authenticate users during the payment process, create accounts, and take payments for music purchases.

## Functional requirements

- User registration and authentication
- Catalog browsing and search functionality
- Music playback and purchasing
- Payment processing with Stripe
- Embedded media content (audio and video)

## Nonfunctional requirements

- Website responsiveness and speed
- Secure payment processing and user authentication
- Scalability to handle large amounts of traffic

## Distribution of functions

The website will consist of several modules, including the user authentication module, store module, audio and video module, dashboard module, and header/footer modules. These modules will interact with each other to provide a seamless user experience. For example, when a user logs in, personalised recommendations will be based on their purchase history.

- User authentication module: This module will be responsible for user registration, login, and account management.
- Store module: The store module will be responsible for browsing and purchasing music from the Gondwana Records label.
- Audio and video modules: The audio and video modules will be responsible for providing users with embedded media content such as music videos, live performances, and artist interviews.
- Dashboard module: The dashboard will be responsible for providing users with an overview of their account and purchase history.
- Header and footer modules: The header and footer modules will be used to display the logo, menu, and search features across all pages on the site.

## User stories

- As a music enthusiast, I want to be able to browse the Gondwana Records catalog of music and purchase albums and individual tracks.
- As a fan of Matthew Halsall, a Gondwana Records artist, I want to be able to view embedded media content such as music videos and live performances.
- A registered user will want to be able to save payment information for faster checkout in the future.
- I want to be able to create and manage a wish list of releases from the Gondwana Records catalog, so that I can easily keep track of albums and tracks that I am interested in purchasing

## Similar software

Other music e-commerce platforms such as Bandcamp, Warp Records and  Erased Tapes offer similar functionality to the Gondwana Records website. However, the Gondwana Records website will differentiate itself by focusing specifically on the label's catalog of music, providing a personalised experience for users, and offering embedded media content.


## Deployment

The website will be deployed on a cloud-based server, such as Amazon Web Services (AWS), Heroku or Google Cloud Platform. Iterative updates, fixes and upgrades will be managed using GitHub which will allow for efficient testing and deployment of new features.

## Release

The website will be released when all the functional and nonfunctional requirements have been met. These include user authentication, store functionality, audio/video embedding and Stripe payment processing. Nonfunctional requirements include responsiveness, security, and scalability. User testing will be conducted to ensure that the website is secure, easy-to-use and payments can me then safely with user data encryption a priority.


