import TaskList from '@/components/taskList';
import { getAllTasks } from '@/utils/apiCalls/tasks/tasksApiCalls';
import Head from 'next/head';


export async function getServerSideProps() {
    try {
        const allTasks = await getAllTasks();
        console.log("All Tasks Page. Logging task data", allTasks);
    } catch (e) {
        console.log("All tasks Page. getAllTasks failed: ", e)
    }  
    return {
        props: {
            allTasks,
        },
    };
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
