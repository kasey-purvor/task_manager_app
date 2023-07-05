import TaskList from '@/components/taskList';
import { getAllTasks } from '@/utils/apiCalls/tasks/tasksApiCalls';
import Head from 'next/head';


export async function getServerSideProps(context) {
    try {
        const cookies = context.req.headers.cookie;
        let allTasks
        let notification
        if(cookies) {
            allTasks = await getAllTasks(cookies)
        } else{
            // console.log("no cookies")
             notification = "Please create a user or login."
            allTasks = [{
                description: "Please create a user or login to perform CRUD operations on tasks.",
                completed: "",
                owner: "",
                due: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            }]
            allTasks = JSON.stringify(allTasks)
            allTasks = JSON.parse(allTasks)
        } 
        // console.log("All Tasks Page. Logging task data", allTasks);
        return {
            props: {
                allTasks,
            },
        }
    } catch (e) {
        console.log("All tasks Page. getAllTasks failed: ", e)
        return e
    }  
    
}

export default function AllTasks({ allTasks, notification }) {
    return (
        <div>
            <Head>
                <title>All Tasks</title>
            </Head>
            <TaskList allTasks={allTasks} />
            {/* <div className="flex items-center justify-center">
            <p className="text-red-800 p-20 text-2xl ">{notification}</p>
            </div> */}
            
        </div>
    );
}
