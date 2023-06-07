import Link from 'next/link';
import { deleteTask } from '@/utils/apiCalls/tasks/tasksApiCalls';
import { useRouter } from 'next/router';
export default function Task({ due, description, owner, createdAt, updatedAt, completed, id }) {
    const router = useRouter();
    const handleTaskDeleteButton = (e) => {
        e.preventDefault
        deleteTask(id);
        router.push(`/tasks/allTasks/?reload=${Date.now()}`);
    };
    return (
        <tr className='border-solid border-b border-gray-400 hover:bg-green-100'>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>{due}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm  text-gray-800 max-w-[500px] overflow-hidden truncate'>
                {description}
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>{`${completed}`}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>{createdAt}</td>
            <td className='px-6 py-4 whitespace-nowrap text-center text-sm max-w-sm font-medium'>
                <Link href={`/tasks/${id}`}>
                    <button className=' bg-green-700 hover:bg-grey-400 text-white font-small py-2 px-3 mr-1  rounded-3xl '>
                        Edit
                    </button>
                </Link>
                <button
                    className=' bg-green-700 hover:bg-grey-400 text-white font-small py-2 px-3 ml-1 rounded-3xl'
                    onClick={handleTaskDeleteButton}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
