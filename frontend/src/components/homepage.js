import Image from 'next/image'
import MarkdownRenderer from 'react-markdown-renderer'
import styles from  './homepage.module.css'
import PageContainer from '@/components/pageContainer'
import {getAllTasks} from '@/utils/apiCalls/tasks/tasksApiCalls'

const text = `# **Task Manager App**  
### *By Kasey Purvor*
### [Please see Github Page](https://github.com/kasey-purvor/task_manager_app)
### ***Please Signup and create a task ro see the program features. You can manage your tasks and account from the relevant pages. A simplified sequence diagram is shown below but this does not cover next.js rendering and re-rendering processes***
## **Project Description**

#### What started as a **node/express/mongoDB** backend API, that I slowly part time, turned into a full stack project with a Next.JS / React frontend.
A user can create an account and create a digital "To Do" list with full CRUD control of their user and tasks. Route authentication is done using **JWT** **http-only cookies** and a **htp-proxy server** sending a jwt to **express middleware** for verification, the jwt token key stored as an **.env variable**. Passwords are stored **hashed using bcrypt**. 

It's fair to say this wont be winning any awards to artistic design. But the project has been a valuable exercise in bringing together a complex full stack project using the technologies I am interested in.
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
    * http-only cookies
    * http-proxy
    * Tailwind.css
    * Cookies
    
## **Structure**
* ### **Backend**
Node and express used to host the restful API. Mongoose is used to perform data sanitization and validation as well as handle the mongoDB connection. Full CRUD control for users and tasks. **JSON webtokens** are used for **authentication**, stored by frontend **proxy server** as **http-only cookie**,  and are verified using express middleware. **Passwords are stored encrypted using bcrypt**.

* ### **Frontend**
The Frontend uses Next.js with React. It uses server-side rendering and loads the tasks and user data from MongoDB, then loads them as React props before rendering and sending to the client. A proxy server is used to handle cookies, which store and send JSONWebTokens for user authentication. There are still features to implement to compliment the backend routes I have implemented.  

## **Features to add**
* Sorting features, to allow users to sort their tasks by their desired field
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
