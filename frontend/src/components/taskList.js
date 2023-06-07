import Task from '@/components/task';

export default function TaskList({ allTasks }) {
    const renderedTasks = allTasks.map((task) => {
        return (
            <Task
                due={task.due}
                description={task.description}
                completed={task.completed}
                createdAt={task.createdAt}
                key={task._id}
                id={task._id}
            />
        );
    });

    return (
        <div className='flex flex-col'>
            <div className='-m-1.5 overflow-x-auto'>
                <div className='p-1.5 min-w-full inline-block align-middle'>
                    <div className='border rounded-lg overflow-hidden border-gray-700'>
                        <table className='min-w-full divide-y divide-gray-700 overflow-x-auto'>
                            <thead className='bg-orange-300'>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                                    >
                                        Due
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                                    >
                                        Description
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                                    >
                                        Completed
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
                                    >
                                        Created
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-6 py-3 text-center   text-xs font-medium text-gray-500 uppercase'
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='divide-y  bg-green-200'>{renderedTasks}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
