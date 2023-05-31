import { getAllTaskIds } from "@/utils/functions/tasksFunctions";
import { getTask } from "@/utils/apiCalls/tasks/tasksApiCalls";
export async function getStaticPaths() {
    const allTaskIds = await getAllTaskIds();
    return {
        paths: allTaskIds,
        fallback: false
    }

}
export async function getStaticProps({params}) {
  const task = await getTask(params.id);
  return {
    props: {
      task,
    },
  };

} 

export default function TaskDetailsPage ({task}) {
    return (
        <div>
            <h1>{task.description}</h1>
            <h2>{task.due}</h2>
            <h3>{task.completed}</h3>
        </div>
    );
}