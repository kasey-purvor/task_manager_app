import Head from "next/head";
import {useRouter} from "next/router";   
import {useState} from "react"; 
export default function TaskEditForm({ taskData }) {
    const [completed, setCompleted] = useState(taskData.completed);
    if(taskData.due) {
        const [due, setDue] = useState(taskData.due);
    } else {
        const [due, setDue] = useState("");
    }
    const [taskDescription, setDescription] = useState(taskData.description);
    const router = useRouter();

    if (taskData.due) {
        var dueDataHTMLLine = (
            <>
                <p className="text-medium text-gray-800 mt-2">Task Due: </p>
                <p className="text-sm text-gray-500">{taskData.due}</p>
            </>
        );
    }
    function handleSubmit (e){
        e.preventDefault();
        router.push({
            pathname: `/tasks/`,
        })
        console.log(e.target)
    }
    
    return (
        <main className="p-6 max-h-120  mx-auto sm:max-w-3xl sm:w-3/4 md:w-1/2 bg-orange-300  rounded-3xl">
            <Head>
                <title>Edit Task</title>
            </Head>

            <div className=" hover:bg-orange-400 border-orange-400 rounded-3xl p-3">
                <p className="text-lg text-center">Task Details</p>
                <p className="text-medium text-gray-800 mt-2">Task Created: </p>
                <p className="text-sm text-gray-500">{taskData.createdAt}</p>
                <p className="text-medium text-gray-800 mt-2">Task Updated: </p>
                <p className="text-sm text-gray-500">{taskData.updatedAt}</p>
                {dueDataHTMLLine}
            </div>
            <br />
            <form
                onSubmit={() => handleSubmit(e)}
                method="patch"
                
            >
                <div className=" hover:bg-orange-400 border-orange-400 rounded-3xl p-3">
                    <p className="text-lg text-center">Edit Task</p>
                    <p className="text-medium text-gray-800 mt-2">Task Description</p>
                    <input
                        type="text"
                        name="description"
                        className="py-3 px-4 block w-full  border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500bg-grey-150border-gray-700 text-gray-400"
                        placeholder={taskData.description}
                        // defaultValue={taskData.description}
                        onChange={(e) => setDescription(e.target.value)}
                        value={taskDescription}
                        aria-describedby="hs-input-helper-text"
                    />
                    <p
                        className="text-sm text-gray-500 mt-2"
                        id="hs-input-helper-text"
                    >
                        "Please edit the Task Description if you desire"
                    </p>
                    <br />

                    <p className="text-medium text-gray-800 mt-2">Due Date</p>
                    <input
                        type="datetime-local"
                        name="due"
                        placeholder={`${taskData.due}`}
                        defaultValue={  `${taskData.due}`}
                        onChange={(e) => setDue(e.target.value)}
                        aria-describedby="hs-input-helper-text"
                        className="py-3 px-4 block w-full  border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500bg-grey-150border-gray-700 text-gray-400"
                        
                    />
                    <p
                        className="text-sm text-gray-500 mt-2"
                        id="hs-input-helper-text"
                    >
                        "Please edit Task Due Date & Time if you desire"
                    </p>
                    <br />

                    <p className="text-medium text-gray-800 mt-2">Completed</p>
                    <input
                        type="checkbox"
                        name="completed"
                        defaultChecked={taskData.completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                        className="py-3 px-4 block w-auto  border-gray-800 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-grey-150text-gray-400"
                        placeholder={`${taskData.due}`}
                        aria-describedby="hs-input-helper-text"
                    />
                    <p
                        className="text-sm text-gray-500 mt-2"
                        id="hs-input-helper-text"
                    >
                        "Please edit Task Completed Status if you desire"
                    </p>
                    <br />
                    <div className="flex justify-center items-center">
                        <button
                            className=" bg-green-700 hover:bg-grey-400 text-white font-bold py-2 px-4 rounded-3xl mt-2"
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </form>
            <br />
        </main>
    );
}
