import FormLine from "./formLine";
import { data } from "../data/data";
import { useState } from "react";
import { loginUser, signUpUser } from "@/utils/apiCalls/users/userAPIcalls";
import { useRouter } from "next/router";
export default function Form({ formType }) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    // const [userData, setUserData] = useState({});

    const formData = data.forms.filter((form) => form.type === formType)[0];
    let response = undefined;
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        formType === "signIn" ? response = await loginUser(email, password) : response = await signUpUser(name, email, password, age);
        // const userData = await response.json();
        console.log(response)
        sessionStorage.setItem("userData", JSON.stringify(response)); 
        router.push(`/tasks/allTasks/?reload=${Date.now()}`);

    };
    const renderedForm = (
        <>
            <div className="flex justify-center"> 
                <span className="text-lg text-justify-center">{formType === "signIn" && "Please enter your Username & Password"}</span>
                <span className="text-lg text-justify-center">{formType !== "signIn" && "Please create a Username and Password."}</span>
                
            </div>
            <br />
            <FormLine
                id={formData.formRows[0].desc}
                desc={formData.formRows[0].desc}
                additionalInfo={formData.formRows[0].additionalInfo}
                formLineType={formData.formRows[0].formLineType}
                placeholderText={formData.formRows[0].placeholderText}
                onTextChange={setEmail}
            />
            <br />
            <FormLine
                id={formData.formRows[1].desc}
                desc={formData.formRows[1].desc}
                additionalInfo={formData.formRows[1].additionalInfo}
                formLineType={formData.formRows[1].formLineType}
                placeholderText={formData.formRows[1].placeholderText}
                onTextChange={setPassword}
            />
            <br />
            {formType === "signUp" && (
                <>
                    <FormLine
                        id={formData.formRows[2].desc}
                        desc={formData.formRows[2].desc}
                        additionalInfo={formData.formRows[2].additionalInfo}
                        formLineType={formData.formRows[2].formLineType}
                        placeholderText={formData.formRows[2].placeholderText}
                        onTextChange={setName}
                    />
                    <br />
                    <FormLine
                        id={formData.formRows[3].desc}
                        desc={formData.formRows[3].desc}
                        additionalInfo={formData.formRows[3].additionalInfo}
                        formLineType={formData.formRows[3].formLineType}
                        placeholderText={formData.formRows[3].placeholderText}
                        onTextChange={setAge}
                    />
                </>
            )}
        </>
    );
    return (
        <main className="p-6 max-h-auto  mx-auto sm:max-w-3xl sm:w-3/4 md:w-1/2 bg-orange-300  rounded-3xl">
            {renderedForm}
            <div className="flex justify-center">
                <button
                    className=" bg-green-700 hover:bg-grey-400 text-white font-bold py-2 px-4 mx-4 rounded-3xl mt-2"
                    onClick={handleSubmit}
                >
                    {formType === "signIn" ? "Sign In" : "Sign Up"}
                </button>
            </div>
        </main>
    );
}
