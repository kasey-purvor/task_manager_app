import TaskList from "@/components/taskList";
import { getAllTasks } from "@/utils/apiCalls/tasks/tasksApiCalls";
export async function getServerSideProps() {

  const allTasks = await getAllTasks()
  return {
    props: {
      allTasks,
    },
  };
}

export default async function AllTasks( {allTasks} ) {
  return (
    <div>
      <TaskList allTasks={allTasks} />
    </div>
  );
}
