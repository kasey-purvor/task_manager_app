import PageContainer from "@/components/pageContainer";
import TaskForm from "@/components/taskForm";
export default function NewTask() {
    const emptyTaskData = {}
    return (
       <PageContainer>
            <TaskForm
                taskData={emptyTaskData}
                formEdit={false}
            />
       </PageContainer>
    );
}
