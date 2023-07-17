import { logoutUser } from "@/utils/apiCalls/users/userAPIcalls";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Navbar({ isLoggedIn }) {
    const [userLogedIn, setUserLoggedIn] = useState(false);
    const router = useRouter();
    const handleLogout = async () => {
        await logoutUser();
        sessionStorage.clear();
        setUserLoggedIn(false);
        router.push(`/signin/?reload=${Date.now()}`);
    };
    useEffect(() => {
        const userData = sessionStorage.getItem("userData");
        // console.log("Navbar useEffect Says:", userData);
        if (userData) {
            setUserLoggedIn(true);
        }
    });
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4 bg-gray-700">
            <nav
                className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
                aria-label="Global"
            >
                <div className="flex items-center justify-between">
                    <Link
                        className="flex-none text-xl font-semibold text-white"
                        href="/"
                    >
                        Task Manager
                    </Link>
                    <div className="sm:hidden">
                        <button
                            type="button"
                            className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-blue-600 transition-all text-sm bg-slate-900 hover:bg-slate-800 border-gray-700 text-gray-400 hover:text-white focus:ring-offset-gray-800"
                            data-hs-collapse="#navbar-with-collapse"
                            aria-controls="#navbar-with-collapse"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className="hs-collapse-open:hidden w-4 h-4"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                            <svg
                                className="hs-collapse-open:block hidden w-4 h-4"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    id="navbar-with-collapse"
                    className="hidden basis-full grow sm:block"
                >
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                        {userLogedIn && (
                            <Link href="/tasks/newTask">
                                <button className="bg-green-700 hover:bg-grey-400 text-white font-bold py-2 px-3 mr-1  rounded-3xl">
                                    New Task
                                </button>
                            </Link>
                        )}
                        {userLogedIn && (
                            <Link
                                className="font-bold text-blue-500"
                                href="/tasks/allTasks"
                                aria-current="page"
                            >
                                Tasks
                            </Link>
                        )}
                        {userLogedIn && (
                            <Link
                                className="font-medium text-gray-200 hover:text-gray-500"
                                href="/account"
                            >
                                Account
                            </Link>
                        )}
                        {!userLogedIn && (
                            <Link
                                className="font-medium text-gray-200 hover:text-gray-500"
                                href="/signup"
                            >
                                Sign Up
                            </Link>
                        )}
                        {!userLogedIn && (
                            <Link
                                className="font-medium text-gray-200 hover:text-gray-500"
                                href="/signin"
                            >
                                Sign In
                            </Link>
                        )}
                        {userLogedIn && (
                            <button
                                className="font-medium text-gray-200 hover:text-gray-500"
                                //   href='/signin'
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
