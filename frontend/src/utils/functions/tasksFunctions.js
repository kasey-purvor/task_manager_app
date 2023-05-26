import { getAllTasks } from "@/utils/apiCalls/tasks/tasksApiCalls";
export const getAllTaskIds = async () => {
    const allTasks = await getAllTasks();
    return allTasks.map((task) => {
      return {
        params: {
          id: task.id.toString(),
        },
      };
    });
}