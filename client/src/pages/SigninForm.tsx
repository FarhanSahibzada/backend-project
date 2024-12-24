import Input from '@/components/Input';
import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';

interface SignInFormData {
    username: string;
    email: string;
    password: string;
}

export default function SignInForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();

    const onSubmit = async (data: SignInFormData) => {
        console.log(data);
    };

    return (
        <div className="flex w-full h-full justify-center items-center min-h-screen p-2 sm:p-0">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full sm:w-[35%] h-auto bg-white border-4 border-red-400 px-4 py-2 rounded-2xl shadow-xl"
            >
                <h1 className="text-center mt-2 font-semibold text-xl">
                    Sign In to Your <span className="text-red-500 font-bold">Account</span>
                </h1>

                <div className="mt-4 px-4">
                    <Input
                        label="Username"
                        placeholder="Enter Your Username"
                        type="text"
                        {...register('username', { required: 'Username is required' })}
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm">{errors.username.message}</p>
                    )}
                </div>

                <div className="mt-4 px-4">
                    <Input
                        label="Email"
                        placeholder="Enter Your Email"
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Enter a valid email',
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                <div className="mt-4 px-4">
                    <Input
                        label="Password"
                        placeholder="Enter Your Password"
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 2, message: 'Min length is 2' },
                            maxLength: { value: 8, message: 'Max length is 8' },
                        })}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="text-white font-semibold cursor-pointer bg-red-500 px-4 py-2 rounded-full mt-4 block"
                    >
                        Sign In
                    </button>
                </div>
                <div className='flex items-center justify-center gap-1 mt-3 px-4'>
                    <div className="h-[2px] w-full bg-red-500"></div>
                    <h1>OR</h1>
                    <div className="h-[2px] w-full bg-red-500"></div>
                </div>
                <div className="mt-1 text-center">
                    <div className="text-gray-600">
                        Dont't have any {' '}
                        {/* <Link to="/signup">
                            <span className="text-red-500 cursor-pointer">account? </span>
                        </Link> */}
                    </div>
                </div>

            </form>

        </div>
    );
}