Markdown Live PreviewReset

* Email notification settings for tasks. 


Task Manager App
By Kasey Purvor
What started as a node.js course building a backend API, that I slowly completed part time, turned into something I wanted to finish and add additional features as well as a Next.JS / React front ened. Hence the rather large initial commit containing most opf the backened. I am not an experienced frontend developer, it's fair to say this wont be winning any awards to artistic design. But the project has been a valuable exersieze in bringing together a full stack project using the technologies I am most interested in.

Project Description
Backeed
The Backened used node and express to manage the restful API. Mongoose is used to perform data sanitization and validation as well as handle the connections to a Mongo-Atlas DB. There are routes for CRUD operations for users and tasks. Emails are sent out when tasks are due and when users signup / cancel accounts. As well as the ability to upload a user avatar is desired. JSON webtokens are used for authentication and are verified using express middleware. Passwords are stored encrypted using bcrypt.

Frontend
The Frontend was started more recently as I began learning how to use Next.js with React, which i already had experience with. The frontend is server-side rendered and loads the tasks and user data from MongoDB and loads them as React props before rendering and sending to the cient. There are still features to implement to compliment the backened routes I have implemented.

Notes
I am in the process of implementing the use of http-only cookies to store the JSONwebtokens for authentication. With this i can then implement the login / logout features

Features to add
Http-only storage cookies for cleint authentication.
Sorting features, to allow users to sort their tasts by their desired field
Conditional rendering of the navbar. So that login is not shown when user is logged in.
Account management page
Homepage.. I am not sure what I want to display here yet.
Email notification settings for tasks.
