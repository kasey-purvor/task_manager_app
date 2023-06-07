import { getAllTaskIds } from '@/utils/functions/tasksFunctions';
import { getTask } from '@/utils/apiCalls/tasks/tasksApiCalls';
import { useState } from 'react';
import TaskEditForm from '@/components/taskForm';
import PageContainer from '@/components/pageContainer';
export async function getStaticPaths() {
    const allTaskIds = await getAllTaskIds();
    return {
        paths: allTaskIds,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const taskData = await getTask(params.id);
    return {
        props: {
            taskData,
        },
    };
}

export default function TaskDetailsPage({ taskData }) {

    return (
        <PageContainer>    
               
            <TaskEditForm
                taskData={taskData}
                formEdit={true}
            />

        </PageContainer>
    );
}
