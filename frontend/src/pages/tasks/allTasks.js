import TaskList from "@/components/taskList";

export async function getServerSideProps(){
    const allTasks = [
      {
        _id: "646f3b244eed976f00593840",
        description: "this is a new test1111111111111111111111111111111111111",
        completed: false,
        owner: "646f3aa74eed976f00593834",
        due: "2024-02-03T00:00:00.000Z",
        createdAt: "2023-05-25T10:40:36.651Z",
        updatedAt: "2023-05-25T10:40:36.651Z",
        __v: 0,
      },
      {
        _id: "646f3b344eed976f00593844",
        description: "this is a new test1111111111111111111111111111111111111",
        completed: false,
        owner: "646f3aa74eed976f00593834",
        due: "2024-02-03T00:00:00.000Z",
        createdAt: "2023-05-25T10:40:52.595Z",
        updatedAt: "2023-05-25T10:40:52.595Z",
        __v: 0,
      },
      {
        _id: "646f3b354eed976f00593848",
        description: "this is a new test1111111111111111111111111111111111111",
        completed: false,
        owner: "646f3aa74eed976f00593834",
        due: "2024-02-03T00:00:00.000Z",
        createdAt: "2023-05-25T10:40:53.849Z",
        updatedAt: "2023-05-25T10:40:53.849Z",
        __v: 0,
      },
      {
        _id: "646f3b364eed976f0059384c",
        description: "this is a new test1111111111111111111111111111111111111",
        completed: false,
        owner: "646f3aa74eed976f00593834",
        due: "2024-02-03T00:00:00.000Z",
        createdAt: "2023-05-25T10:40:54.533Z",
        updatedAt: "2023-05-25T10:40:54.533Z",
        __v: 0,
      },
      {
        _id: "646f3b374eed976f00593850",
        description: "this is a new test1111111111111111111111111111111111111",
        completed: false,
        owner: "646f3aa74eed976f00593834",
        due: "2024-02-03T00:00:00.000Z",
        createdAt: "2023-05-25T10:40:55.195Z",
        updatedAt: "2023-05-25T10:40:55.195Z",
        __v: 0,
      },
      {
        _id: "646f3b374eed976f00593854",
        description: "this is a new test1111111111111111111111111111111111111",
        completed: false,
        owner: "646f3aa74eed976f00593834",
        due: "2024-02-03T00:00:00.000Z",
        createdAt: "2023-05-25T10:40:55.797Z",
        updatedAt: "2023-05-25T10:40:55.797Z",
        __v: 0,
      },
      {
        _id: "646f3b384eed976f00593858",
        description: "this is a new test1111111111111111111111111111111111111",
        completed: false,
        owner: "646f3aa74eed976f00593834",
        due: "2024-02-03T00:00:00.000Z",
        createdAt: "2023-05-25T10:40:56.355Z",
        updatedAt: "2023-05-25T10:40:56.355Z",
        __v: 0,
      },
      {
        _id: "646f3b384eed976f0059385c",
        description: "this is a new test1111111111111111111111111111111111111",
        completed: false,
        owner: "646f3aa74eed976f00593834",
        due: "2024-02-03T00:00:00.000Z",
        createdAt: "2023-05-25T10:40:56.951Z",
        updatedAt: "2023-05-25T10:40:56.951Z",
        __v: 0,
      },
      {
        _id: "646f3b394eed976f00593860",
        description: "this is a new test1111111111111111111111111111111111111",
        completed: false,
        owner: "646f3aa74eed976f00593834",
        due: "2024-02-03T00:00:00.000Z",
        createdAt: "2023-05-25T10:40:57.512Z",
        updatedAt: "2023-05-25T10:40:57.512Z",
        __v: 0,
      },
      {
        _id: "646f3b3a4eed976f00593864",
        description: "this is a new test1111111111111111111111111111111111111",
        completed: false,
        owner: "646f3aa74eed976f00593834",
        due: "2024-02-03T00:00:00.000Z",
        createdAt: "2023-05-25T10:40:58.016Z",
        updatedAt: "2023-05-25T10:40:58.016Z",
        __v: 0,
      },
      {
        _id: "646f3b3a4eed976f00593868",
        description: "this is a new test1111111111111111111111111111111111111",
        completed: false,
        owner: "646f3aa74eed976f00593834",
        due: "2024-02-03T00:00:00.000Z",
        createdAt: "2023-05-25T10:40:58.552Z",
        updatedAt: "2023-05-25T10:40:58.552Z",
        __v: 0,
      },
      {
        _id: "646f3b3b4eed976f0059386c",
        description: "this is a new test1111111111111111111111111111111111111",
        completed: false,
        owner: "646f3aa74eed976f00593834",
        due: "2024-02-03T00:00:00.000Z",
        createdAt: "2023-05-25T10:40:59.066Z",
        updatedAt: "2023-05-25T10:40:59.066Z",
        __v: 0,
      },
    ];
    return {
      props: {
        allTasks,
      },
    };
  };
export default function AllTasks({allTasks}) {
    return (
        <div>
            <TaskList allTasks={allTasks}/>
        </div>
    );
}