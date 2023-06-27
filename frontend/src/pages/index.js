import Image from 'next/image'
import MarkdownRenderer from 'react-markdown-renderer'
import './../styles/markdownStyle.css'
import PageContainer from '@/components/pageContainer'

const text = `# **Task Manager App**
## By Kasey Purvor
#### What started as a node.js course building a backend API, that I slowly completed part time, turned into something I wanted to finish and add additional features as well as a Next.JS / React front end. Hence the rather large initial commit containing most of the backened. I am not an experienced frontend developer, it's fair to say this wont be winning any awards to artistic design. But the project has been a valuable exersize in bringing together a full stack project using the technologies I am most interested in.

## **Project Description**
### **Backend**
The Backened used node and express to manage the restful API. Mongoose is used to perform data sanitization and validation as well as handle the connections to a Mongo-Atlas DB. There are routes for CRUD operations for users and tasks. Emails are sent out when tasks are due and when users signup / cancel accounts. As well as the ability to upload a user avatar is desired. JSON webtokens are used for authentication and are verified using express middleware. Passwords are stored encrypted using bcrypt.

### **Frontend**
The Frontend was started more recently as I began learning how to use Next.js with React, which i already had experience with. The frontend is server-side rendered and loads the tasks and user data from MongoDB, then loads them as React props before rendering and sending to the cient. There are still features to implement to compliment the backened routes I have implemented. I have used a proxy server to handle cookies, which I use to send JSONWebTokens for user authentication. 

### **Technologies**
* **Backend**
    * Node.js
    * Express
    * Mongoose
    * MongoDB & MongoDB Atlas
    * bcrypt
    * jwt
* **Frontend**
    * Next.js / Vercel
    * React
    * http-proxy
    * Tailwind.css
    * Cookies
    
## **Notes**
I am in the process of implementing the use of http-only cookies to store the JSONwebtokens for authentication. With this i can then implement the login / logout features. Currently the cookies are saving to the client but not being recieved by my proxy server. This has proven quite difficult. 

## **Features to add**
* Sorting features, to allow users to sort their tasks by their desired field
* Conditional rendering of the navbar. So that login is not shown when user is logged in.
* Account management page
* Email notification settings for tasks
* Many more I am sure I could spend years on but I likely move onto another project after this. 

`

export default function Home() {
  return (
    <main>
        <PageContainer>
            <MarkdownRenderer markdown={text} className='bg-orange-300 rounded-3xl p-5 max-w-3xl'/>
       </PageContainer>
    </main>
  )
}
