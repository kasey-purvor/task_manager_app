import Image from 'next/image'
import MarkdownRenderer from 'react-markdown-renderer'
import styles from  './homepage.module.css'
import PageContainer from '@/components/pageContainer'
import {getAllTasks} from '@/utils/apiCalls/tasks/tasksApiCalls'

const text = `# **Task Manager App**  
### *By Kasey Purvor*
### [Please see Github Page](https://github.com/kasey-purvor/task_manager_app)
### ***Please Signup and create a task to try the CRUD operations. __Please be patient__ as the docker backend may have gone to sleep and may take a few seconds to start up - causing you first attempt to load the tasks page to timeout. A page refresh may be required.*** 
## **Project Description**

#### What started as a node.js course, building a backend API, that I slowly completed part time - turned into a full stack project with a Next.JS / React frontend. Hence the rather large initial commit. It's fair to say this wont be winning any awards to artistic design. But the project has been a valuable exercise in bringing together a full stack project using the technologies I am interested in.
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
* http-only cookies have been implmented and are now used for user identification. Now a user must first signup or login to perform CRUD operations to tasks.   
## **Structure**
* ### **Backend**
The Backend used node and express to manage the restful API. Mongoose is used to perform data sanitization and validation as well as handle the connections to a Mongo-Atlas DB. There are routes for CRUD operations for users and tasks. Emails are sent out when tasks are due and when users signup / cancel accounts. JSON webtokens are used for authentication and are verified using express middleware. Passwords are stored encrypted using bcrypt.

* ### **Frontend**
The Frontend was started more recently as I began learning how to use Next.js with React, which i already had experience with. The frontend is server-side rendered and loads the tasks and user data from MongoDB, then loads them as React props before rendering and sending to the client. There are still features to implement to compliment the backend routes I have implemented. I have used a proxy server to handle cookies, which I use to send JSONWebTokens for user authentication. 

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
