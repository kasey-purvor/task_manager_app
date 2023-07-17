import { useState, useEffect } from "react";
import { formatDates } from "@/utils/functions/generalFunctions";
import FormLine from "./formLine";
import { editUser, deleteUser} from "@/utils/apiCalls/users/userAPIcalls";
import { useRouter } from "next/router";

export default function Account() {
    const [userData, setUserData] = useState({});
    const [email, setEmail] = useState("");
    const [name, setName] = useState(undefined);
    const [age, setAge] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const router = useRouter();

    useEffect(() => {
        const userDataString = sessionStorage.getItem("userData");
        if (userDataString) {
            const userDataObject = JSON.parse(userDataString);
            setUserData(userDataObject);
            console.log(userDataObject);
            setEmail(userDataObject.email);
            userDataObject.name ? setName(userDataObject.name) : setName("");
            userDataObject.age ? setAge(userDataObject.age) : setAge("");
        }
    }, []); // this [] is the effects dependancies. If none are given then the effect will not re-render. If I were to put a state it would rerender everytime the state changes

    async function handleEdit(e) {
        e.preventDefault;
        const response = await editUser(name, email, password, age);
        sessionStorage.setItem("userData", JSON.stringify(response)); 
        router.push(`/tasks/allTasks/?reload=${Date.now()}`);
    }
    async function handleDelete(e) {
        e.preventDefault
        const response  = await deleteUser()
        sessionStorage.clear();
        router.push("/");
    }
    return (
        <main className="p-6 max-h-120  mx-auto sm:max-w-3xl sm:w-3/4 md:w-1/2 bg-orange-300  rounded-3xl">
            <div className=" hover:bg-orange-400 border-orange-400 rounded-3xl p-3">
                <p className="text-lg text-center">Account Details</p>
                <br />
                <p className="text-medium text-gray-800 mt-2">Username: </p>
                <p className="text-sm text-gray-500">{`${email}`}</p>

                <p className="text-medium text-gray-800 mt-2">Name: </p>
                <p className="text-sm text-gray-500">{!name && "No name given"}</p>
                <p className="text-sm text-gray-500">{name && `${name}`}</p>

                <p className="text-medium text-gray-800 mt-2">Age:: </p>
                <p className="text-sm text-gray-500">{!age && "No age given"}</p>
                <p className="text-sm text-gray-500">{age && `${userData.age}`}</p>

                <p className="text-medium text-gray-800 mt-2">Created On: </p>
                <p className="text-sm text-gray-500">{`${formatDates(userData.createdAt)}`}</p>

                {formatDates(userData.createdAt) !== formatDates(userData.updatedAt) && (
                    <>
                        <p className="text-medium text-gray-800 mt-2">Updated On: </p>
                        <p className="text-sm text-gray-500">{`${formatDates(userData.createdAt)}`}</p>
                    </>
                )}
                <br />
            </div>
            <div className="hover:bg-orange-400 border-orange-400 rounded-3xl p-3">
                <FormLine
                    id={userData.email}
                    desc="Username:"
                    additionalInfo="Please enter a new username if you wish to change it."
                    formLineType="email"
                    value={email}
                    onTextChange={setEmail}
                />
                <FormLine
                    id={userData.name}
                    desc="Name:"
                    additionalInfo="Please enter a new name if you wish to change it."
                    formLineType="text"
                    value={name}
                    onTextChange={setName}
                />
                <FormLine
                    id={userData.age}
                    desc="Age:"
                    additionalInfo="Please enter a new age if you wish to change it."
                    formLineType="number"
                    value={age}
                    onTextChange={setAge}
                />
                <FormLine
                    id={userData.email}
                    desc="Password:"
                    additionalInfo="Please enter a new password if you wish to change it. Do not worry if you have forgotten your password, you will be authenticated throgh your browser cookies."
                    formLineType="password"
                    placeholderText="Enter a new password"
                    onTextChange={setPassword}
                />

                <div className="flex justify-center items-center">
                    <button
                        className=" bg-green-700 hover:bg-grey-400 text-white font-bold py-2 px-4 mx-4 rounded-3xl mt-2"
                        onClick={handleEdit}
                    >
                        Update
                    </button>
                    <button
                        className=" bg-green-700 hover:bg-grey-400 text-white font-bold py-2 px-4 mx-4 rounded-3xl mt-2"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </main>
    );
}
