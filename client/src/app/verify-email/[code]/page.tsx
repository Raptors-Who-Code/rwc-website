"use client";

import { verifiyEmail } from "@/api/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useParams } from "next/navigation";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdError } from "react-icons/md";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TailSpin } from "react-loader-spinner";

function VerifyEmail() {
  const router = useRouter();
  const params = useParams();
  const code = Array.isArray(params.code) ? params.code[0] : params.code; // Ensure code is a string

  const { isPending, isSuccess, isError } = useQuery({
    queryKey: ["emailVerification", code],
    queryFn: () => verifiyEmail(code as string),
  });

  return (
    <div className="dark flex items-center justify-center h-screen overflow-hidden">
      <Card className="mx-auto w-full max-w-lg min-h-[20rem] border-none flex flex-col p-6 overflow-hidden justify-center items-center">
        {isSuccess && (
          <>
            {" "}
            <CardHeader>
              <IoIosCheckmarkCircle className="text-green-500 text-9xl" />
            </CardHeader>
            <div className="flex flex-col gap-10 items-center">
              <h1>Email was successfully verified!</h1>
              <Link href="/">
                <Button className="text-lg py-6 px-12 bg-green-500 hover:bg-green-400">
                  Back to home
                </Button>
              </Link>
            </div>
          </>
        )}

        {isPending && (
          <CardHeader>
            <TailSpin
              visible={true}
              height="100"
              width="100"
              color="#9632D7"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </CardHeader>
        )}

        {isError && (
          <>
            <CardHeader>
              <MdError className="text-red-500 text-9xl" />
            </CardHeader>
            <div className="flex flex-col gap-10 items-center">
              <h1>
                The link is either invalid or expired.{" "}
                <a href="/password-reset" className="text-blue-500">
                  Get a new link
                </a>
              </h1>
              <Link href="/">
                <Button className="text-lg py-6 px-12 bg-mainPurple">
                  Back to home
                </Button>
              </Link>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
export default VerifyEmail;