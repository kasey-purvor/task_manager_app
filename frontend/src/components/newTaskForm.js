import Head from "next/head";
export default function NewTaskForm() {
    return (
        <main className="p-6 max-h-120  mx-auto sm:max-w-3xl sm:w-3/4 md:w-1/2 bg-orange-300  rounded-3xl">
        <Head>
            <title>Edit Task</title>
        </Head>
        <form >
                <div className=" hover:bg-orange-400 border-orange-400 rounded-3xl p-3">
                    <p className="text-lg text-center">Edit Task</p>
                    <p className="text-medium text-gray-800 mt-2">Task Description</p>
                    <textarea
                        type="text"
                        name="description"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md
                        text-sm focus:border-blue-500 focus:ring-blue-500bg-grey-150border-gray-700 text-gray-400"
                      
                        aria-describedby="hs-input-helper-text"
                    ></textarea>
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
                    {/* perhaps consider using a select dropdown instead?  */}
                    <input
                        type="checkbox"
                        name="completed"


                        className="py-3 px-4 block w-auto  border-gray-800 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 bg-grey-150text-gray-400"

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
                            className=" bg-green-700 hover:bg-grey-400 text-white font-bold py-2 px-4 mx-4 rounded-3xl mt-2"
                            type="submit"
                        >
                            Update
                        </button>
                        <button
                            className=" bg-green-700 hover:bg-grey-400 text-white font-bold py-2 px-4 mx-4 rounded-3xl mt-2"
                            
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );
}