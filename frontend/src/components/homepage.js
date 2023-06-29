import Image from 'next/image'
import MarkdownRenderer from 'react-markdown-renderer'
import styles from  './homepage.module.css'
import PageContainer from '@/components/pageContainer'

const text = `# **Task Manager App**  
### *By Kasey Purvor*
### [Please see Github Page](https://github.com/kasey-purvor/task_manager_app)
## **Project Description**

#### What started as a node.js course, building a backend API, that I slowly completed part time - turned into a full stack project with a Next.JS / React frontend. Hence the rather large initial commit. It's fair to say this wont be winning any awards to artistic design. But the project has been a valuable exersize in bringing together a full stack project using the technologies I am interested in.
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
    
### **Updates!** 
* During my latest branch merge the getAllTasks fetch call has began causing client side errors. For now I have sent task requests straight to the backend server, bypassing the proxy, so that the app functions with 1 universal user. As I am unable to handle jwt cookies with the proxy. The error is complex as the proxy handles User requests fine. Currently investigating. 
* Being new to Next.js I was unaware dynamic pages were only rendered at build time in production, this is not the case in development mode. This means the edit page for newly created tasks do not exist. Need to implement a server side rendering feature. 

## **Structure**
* ### **Backend**
The Backened used node and express to manage the restful API. Mongoose is used to perform data sanitization and validation as well as handle the connections to a Mongo-Atlas DB. There are routes for CRUD operations for users and tasks. Emails are sent out when tasks are due and when users signup / cancel accounts. As well as the ability to upload a user avatar is desired. JSON webtokens are used for authentication and are verified using express middleware. Passwords are stored encrypted using bcrypt.

* ### **Frontend**
The Frontend was started more recently as I began learning how to use Next.js with React, which i already had experience with. The frontend is server-side rendered and loads the tasks and user data from MongoDB, then loads them as React props before rendering and sending to the cient. There are still features to implement to compliment the backened routes I have implemented. I have used a proxy server to handle cookies, which I use to send JSONWebTokens for user authentication. 


## **Features to add**
* Sorting features, to allow users to sort their tasks by their desired field
* Conditional rendering of the navbar. So that login is not shown when user is logged in.
* Account management page
* Email notification settings for tasks
* Many more I am sure I could spend years on but I likely move onto another project after this. 

`

export default function Home() {
  return (
    <main className={styles.homepage}>
        <PageContainer >
            <MarkdownRenderer markdown={text} className='bg-orange-300 rounded-3xl p-5 max-w-3xl'/>
       </PageContainer>
    </main>
  )
}
