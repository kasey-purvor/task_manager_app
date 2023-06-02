import PageContainer from "@/components/pageContainer";
import TaskEditForm from "@/components/taskForm";
export default function NewTask() {
    const emptyTaskData = {}
    return (
       <PageContainer>
            <TaskEditForm
                taskData={emptyTaskData}
                editOrNew={"new"}
            />
       </PageContainer>
    );
}
