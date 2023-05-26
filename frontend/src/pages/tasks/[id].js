import { getAllTaskIds } from "@/utils/functions/tasksFunctions";
import { getTask } from "@/utils/apiCalls/tasks/tasksApiCalls";
export async function getStaticPaths() {
    const allTaskIds = await getAllTaskIds();
    return {
        allTaskIds,
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