# Campgrounds :tent:

## Description

This project is the major part of the Udemy course [The Web Developer Bootcamp 2022](https://www.udemy.com/course/the-web-developer-bootcamp/) made by @Colt Steele.

It marks my entry into the world of web development in early 2020 [^1] and taught me the concepts of MVC, APIs, database, microservices, client to server communication, authentication and in general HTML, CSS, Express, NodeJS, MongoDB, EJS and Javascript. It's a 63 hours course so there was a LOT covered! :exploding_head:

Basically Campgrounds is a website where a registered user can add, edit or delete campgrounds to a database and create reviews for it.

**Check out the production build [here](https://young-dusk-51666.herokuapp.com/)**

[^1]: The course was re-done in 2021, but initially started a few years earlier.

## Features

-   Express app |[Link](https://expressjs.com/de/)
-   MongoDB with Mongoose | [MongoDB](https://www.mongodb.com/) + [mongoose](https://mongoosejs.com/)
-   EJS view | [Link](https://ejs.co/)
-   Passport Local for authentication | [Link](http://www.passportjs.org/)
-   Cloudinary API for image optimization | [Link](https://cloudinary.com/)
-   Bootstrap CSS Library | [Link](https://getbootstrap.com/)
-   schema validation wit Joi | [Link](https://joi.dev/)
-   Session Store with connect-mongo | [Link](https://www.npmjs.com/package/connect-mongo)
-   HTTP headers security with helmet | [Link](https://www.npmjs.com/package/helmet)
-   flash messaging with connect-flash | [Link](https://www.npmjs.com/package/connect-flash)
-   database seeding with helper functions and libraries

## Project Explanation

The [index.js](./index.js) as an entry-point initializes MongoDB connection and starts the server to listen for requests basically from the same domain and microservice urls as helmet supplies an extended configuration for that.

The different [view files](./views/) render the content dynamically through EJS-syntax which allows to access variables (mostly arrays of objects) passed through by various Express [routes](./routes/) that call the dedicated [controller](./controllers/) to act on the different paths taken.

To check for potential errors, redirect the user or authenticate Express allows us to use [middleware](./middleware.js) right before a request to deal with those situations. If the request passes the middleware "test" it gets passed further via the next() function. If for any reason an error occurs it gets catched and passed into an ErrorHandler from where it renders a specific page.

In terms of the database, Mongoose comes with a great set of functions to interact with the database for standard CRUD operations, sorting, filtering and more. To make all this work it is necessary to create [models](./models/) which base on pre-defined Schemas that comprehend all fields and their types to make sure only valid data reaches the database.

To extend this validation Joi [schemas](./schemas.js) provide us with a more user friendly validation that let us customize the error messages so it becomes more clear what went wrong in the frontend in contrast to the somewhat cryptic MongoDB error handling.

The authentication of users is handled through express-session which stores sessions in the database and setting a cookie with the connection ID of this session. Express itself then gives access to the session data via the session object on each request which makes it really simple to authenticate if a certain user is logged in or not. Passport Local on the other hand is handling registration of users and works as a plugin of the [user schema](./models/user.js). It then allows to use methods like register() on the User model to do it's magic hashing and salting passwords and what not :wink:

## Additional Infos / Thoughts

Since this was my first course on Udemy, and many should follow, I did not complete it at first. Which was actually a good decision retrospectively. On the second go, when it was actually renewed I had gained so much more understanding of the given topics in the meantime that I could manage to finish it almost with ease.

I really liked coding this full stack site, because it showed to me really well how front- and backend work together to make a dynamic page that renders user-specific contents as well as microservices managing important issues.
