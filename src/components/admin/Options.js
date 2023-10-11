import { LockClosedIcon } from "@heroicons/react/24/solid";

export const Options = ({ onLogout }) => {
    return (
        <div className="flex justify-center py-4 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-4">
                <div>
                    <h2 className="mt-3 text-center text-2xl font-bold tracking-tight text-gray-900">
                        Logout Admin?
                    </h2>
                </div>
                <div>
                    <button
                        onClick={onLogout}
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-violet-200 focus:bg-violet-200"
                    >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon
                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                aria-hidden="true"
                            />
                        </span>
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};
