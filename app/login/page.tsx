"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";


const FormSchema = z.object({
    email : z.string().min(1, "Email is required!").email("Invalid email!"),
    password : z.string().min(1, "Password is required!")
})

type FormSchemaType = z.infer<typeof FormSchema>

export default function Login() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormSchemaType>({resolver: zodResolver(FormSchema)})

    const onSubmit = (data: FormSchemaType) => {
        console.log(data)
    }

    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
            <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-xl shadow-black/40">

                <h1 className="text-white text-2xl font-semibold font-[Arial] tracking-tight">Welcome</h1>
                <p className="text-gray-400 font-[Arial] text-sm mt-1">Sign in to your account</p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4">

                    <div className="flex flex-col gap-1.5">
                        <input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="Email"
                            className="bg-neutral-800/60 border border-neutral-700 text-white font-[Arial] placeholder:text-gray-500 text-sm rounded-lg px-3 py-2.5 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        />
                        {errors.email && (
                            <p className="text-red-400 text-xs font-[Arial]">{errors.email?.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <input
                            id="password"
                            type="password"
                            {...register("password")}
                            placeholder="Password"
                            className="bg-neutral-800/60 border border-neutral-700 text-white font-[Arial] placeholder:text-gray-500 text-sm rounded-lg px-3 py-2.5 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        />
                        {errors.password && (
                            <p className="text-red-400 text-xs font-[Arial]">{errors.password?.message}</p>
                        )}
                    </div>

                    <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-blue-700 to-purple-600 text-white font-mono px-4 py-2 rounded-lg cursor-pointer inline-block transition-transform duration-300 ease-in-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2">
                        {isSubmitting? "Logging in..." : "Login"}
                    </button>
                </form>

                <Link
                    href="/signup"
                    className="mt-3 w-full text-center border border-neutral-700 text-gray-300 font-mono px-4 py-2 rounded-lg cursor-pointer block transition-colors duration-300 ease-in-out hover:border-neutral-500 hover:text-white"
                >
                    Continue as guest
                </Link>

                <p className="text-gray-400 font-[Arial] text-sm text-center mt-4">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-purple-400 hover:text-purple-300 transition">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}
