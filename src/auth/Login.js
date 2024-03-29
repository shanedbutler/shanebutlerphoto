import { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { ForgotPasswordModal } from './ForgotPasswordModal';

export const Login = ({ auth }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState(null);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { _user, error } = await auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) {
                setError(error.message);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleOpenRecoveryModal = (e) => {
        e.preventDefault();
        if (!email) {
            setError("Please enter your email address before requesting a password reset");
        }
        else {
            setModalOpen(true);
        }
    };

    const handleRecovery = async (e) => {
        e.preventDefault();
        try {
            await auth.resetPasswordForEmail(email, {
                redirectTo: 'https://shanebutlerphoto.com/admin/update-password',
            });
            setModalOpen(false);
        } catch (error) {
            console.error(error);
            setError('Password reset failed, check your email address');
            setModalOpen(false);
        }
    };

    return (
        <>
            <div className="flex justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-4">
                    <div>
                        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
                            Admin Login
                        </h2>
                    </div>
                    <div>
                        {error && <p className="text-center text-red-500">{error}</p>}
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
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
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    value={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <div
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={handleOpenRecoveryModal}
                                >
                                    Forgot your password?
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-300 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-violet-200 focus:bg-violet-200"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon
                                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                        aria-hidden="true"
                                    />
                                </span>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ForgotPasswordModal open={modalOpen} setOpen={setModalOpen} email={email} handleRecovery={handleRecovery} />
        </>
    );
};
