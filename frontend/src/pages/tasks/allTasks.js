import TaskList from '@/components/taskList';
import { getAllTasks } from '@/utils/apiCalls/tasks/tasksApiCalls';
import Head from 'next/head';


export async function getServerSideProps() {
    const allTasks = await getAllTasks();
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
