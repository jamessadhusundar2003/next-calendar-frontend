"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";


const FormSchema = z.object({
    name : z.string().min(1, "Name is required!"),
    email : z.string().min(1, "Email is required!").email("Invalid email!"),
    password : z.string().min(1, "Password is required!").min(4, "Password must be atleast 4 characters long.")
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

                <h1 className="text-white text-2xl font-semibold font-[Arial] tracking-tight">Create an account</h1>
                <p className="text-gray-400 font-[Arial] text-sm mt-1">Sign up to get started</p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4">

                    <div className="flex flex-col gap-1.5">
                        <input
                            id="name"
                            type="text"
                            {...register("name")}
                            placeholder="Name"
                            className="bg-neutral-800/60 border border-neutral-700 text-white font-[Arial] placeholder:text-gray-500 text-sm rounded-lg px-3 py-2.5 outline-none transition focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        />
                        {errors.name && (
                            <p className="text-red-400 text-xs font-[Arial]">{errors.name?.message}</p>
                        )}
                    </div>

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
                        {isSubmitting? "Signing up..." : "Sign up"}
                    </button>
                </form>

                <p className="text-gray-400 font-[Arial] text-sm text-center mt-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-purple-400 hover:text-purple-300 transition">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
