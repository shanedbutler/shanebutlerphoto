import { LockClosedIcon, PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { updatePassword, signInWithEmailAndPassword } from 'firebase/auth';

export const Options = ({ auth }) => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Get the current user
        const user = auth.currentUser;

        try {
            // Reauthenticate the user with their current password
            await signInWithEmailAndPassword(auth, user.email, password);

            // Update the user's password
            await updatePassword(user, newPassword);

            // Reset the form and show a success message
            setPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setError(null);
            setSuccess(true);
        } catch (error) {
            console.error(error);
            setPassword('');
            setError('Change failed, try again');
        }
    };

    const handleLogout = async () => {
        try {
            // Sign out the user
            await auth.signOut();
        } catch (error) {
            console.error(error);
            setError('Logout failed');
        }
    };

    return (
        <div className="flex justify-center py-4 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-4">
                <div>
                    <h2 className="mt-3 text-center text-2xl font-bold tracking-tight text-gray-900">
                        Admin Password Change
                    </h2>
                </div>
                <div>
                    {error &&
                        <div className="text-center text-red-700">
                            {error}
                        </div>
                    }
                    {success &&
                        <div className="text-center text-green-700">
                            Password updated successfully
                        </div>
                    }
                    <form className="mt-6 space-y-6" onSubmit={handleChangePassword}>
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Current Password"
                                />
                            </div>
                            <div>
                                <label htmlFor="new-password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    id="new-password"
                                    name="new-password"
                                    type="password"
                                    required
                                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="New Password"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Confirm New Password"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-violet-200 focus:bg-violet-200"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <PencilIcon
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    aria-hidden="true"
                                />
                            </span>
                            Change Password
                        </button>
                    </form>
                </div>
                <div>
                    <button
                        onClick={handleLogout}
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-violet-200 focus:bg-violet-200"
                    >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon
                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                aria-hidden="true"
                            />
                        </span>
                        Logout
                    </button>
                </div>

            </div>
        </div>
    );
};
