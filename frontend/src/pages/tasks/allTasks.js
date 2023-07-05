import TaskList from '@/components/taskList';
import { getAllTasks } from '@/utils/apiCalls/tasks/tasksApiCalls';
import Head from 'next/head';


export async function getServerSideProps(context) {
    try {
        const cookies = context.req.headers.cookie;
        const allTasks = await getAllTasks(cookies);
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

export default function AllTasks({ allTasks }) {
    return (
        <div>
            <Head>
                <title>All Tasks</title>
            </Head>
            <TaskList allTasks={allTasks} />
        </div>
    );
}
