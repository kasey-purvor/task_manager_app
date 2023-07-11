import { getAllTaskIds, getSingleTask }  from '@/utils/functions/tasksFunctions';
// import { getTask } from '@/utils/apiCalls/tasks/tasksApiCalls';
import { useState } from 'react';
import TaskForm from '@/components/taskForm';
import PageContainer from '@/components/pageContainer';

export async function getStaticPaths() {
    const allTaskIds = await getAllTaskIds();
    return {
        paths: allTaskIds,
        fallback: 'blocking',
    };
}
export async function getStaticProps({ params }) {
    const taskData = await getSingleTask(params.id);
    // const taskData = getFakeTask()
    return {
        props: {
            taskData
        },
    };
}

export default function TaskDetailsPage({ taskData }) {

    return (
        <PageContainer>    
            <TaskForm
                taskData={taskData}
                formEdit={true}
            />

        </PageContainer>
    );
}
