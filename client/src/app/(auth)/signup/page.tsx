"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState } from "react";
import { SignupSchema } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { signup, SignUpFormFields } from "@/api/authApi";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setCredentials, User } from "@/features/auth/authSlice";

export default function SignUpPage() {
  const [confirmPasswordOpen, setConfirmPasswordOpen] =
    useState<boolean>(false);
  const dispatch = useDispatch();

  const { register, handleSubmit, watch } = useForm<SignUpFormFields>({
    resolver: zodResolver(SignupSchema),
  });

  const {
    mutate: createAccount,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: signup,
    onSuccess: (data: User) => {
      router.replace("/");
      dispatch(setCredentials({ user: data }));
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpFormFields> = (data) => {
    createAccount(data);
  };

  const name = watch("name");
  const email = watch("email");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-center h-[100%] w-full overflow-hidden">
        <Card className="dark w-[36rem] min-h-[20rem] border-none flex flex-col gap-[3rem] p-6 mt-[2rem] overflow-hidden">
          <CardHeader className="flex flex-row justify-evenly">
            <div className="flex flex-col gap-2 justify-center">
              <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
              <CardDescription>
                Enter your details to create an account
              </CardDescription>
            </div>
            <Image
              src="/assets/images/logo.png"
              alt="Raptors Who Code Logo"
              className="w-48 h-[10rem] object-contain transform transition-all duration-200 hover:scale-105 hover:z-10"
              width={10000}
              height={10000}
              priority
            />
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="p-6"
                  {...register("name")}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="p-6"
                  {...register("email")}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="p-6"
                  {...register("password")}
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  className="p-6"
                  {...register("confirmPassword")}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit(onSubmit)}
                />

                {isError && (
                  <p className="text-red-500">
                    {error?.message || "An error occured"}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <Button
                  type={confirmPasswordOpen ? "submit" : "button"}
                  className="w-full p-6 transform transition-all duration-200 hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100"
                  onClick={() => setConfirmPasswordOpen(true)}
                  disabled={
                    isPending ||
                    password !== confirmPassword ||
                    !name ||
                    !email ||
                    !password ||
                    !confirmPassword
                  }
                >
                  {isPending ? "Loading..." : "Sign Up"}
                </Button>

                <div className="mt-4 text-center text-sm">
                  Have an account?{" "}
                  <Link href="/login" className="underline">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
