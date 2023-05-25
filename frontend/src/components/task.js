import Link from "next/link";

export default function Task({
  due,
  description,
  owner,
  createdAt,
  updatedAt,
  completed,
  _id,
}) {
  return (
    <tr
        className="border-solid border-b border-gray-400 hover:bg-green-100"
      due={due}
      completed={completed}
      _id={_id}
      createdAt={createdAt}
      updatedAt={updatedAt}
      owner={owner}
      description={description}
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {due}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800">
        {description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {`${completed}`}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {createdAt}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link className="text-blue-500 hover:text-blue-700" href="#">
          Delete
        </Link>
        <> / </>
        <Link className="text-blue-500 hover:text-blue-700" href="#">
          Edit
        </Link>
      </td>
    </tr>
  );
}
