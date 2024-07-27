"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AuthLayout, { ChromeIcon } from "@/layout/auth";
import ky from "ky";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { SignInUser } from "@/model";
import { useRouter } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons"

export default function Login() {
    const { toast } = useToast();
    const router = useRouter();
    const [signInUser, setSignInUser] = useState(new SignInUser({}));
    const [isSigningIn, setIsSigningIn] = useState(false);

    const handleSignInUser = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsSigningIn(true);
            signInUser.validate();
            await ky.post("/api/login", { json: signInUser });
            toast({
                title: "Signed in",
                description: "You have been signed in successfully",
            });
            router.push("/");
        } catch (error) {
            console.error("Error while signing in", error);
            toast({
                title: "Error while signing in",
                description:
                    "There was an error while signing in, please try again later",
            });
        } finally {
            setIsSigningIn(false);
        }
    };

    return (
        <AuthLayout
            title="Welcome back!"
            description="Sign in to your account and start exploring our powerful features."
            imageUrl="/login.jpeg"
            linkText="Go to Signup"
            linkHref="/signup"
            linkLabel="Go to Signup"
        >
            <div>
                <h2 className="text-2xl font-bold">Sign in to your account</h2>
                <p className="text-muted-foreground">
                    Enter your email and password below.
                </p>
            </div>
            <form className="space-y-4" onSubmit={handleSignInUser}>
                <div>
                    <Label htmlFor="email">Email address</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        autoComplete="email"
                        onChange={(e) =>
                            setSignInUser(
                                new SignInUser({
                                    ...signInUser,
                                    email: e.target.value,
                                })
                            )
                        }
                    />
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link
                            href="#"
                            className="text-sm font-medium text-primary hover:underline"
                            prefetch={false}
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <Input
                        autoComplete="new-password"
                        id="password"
                        type="password"
                        required
                        onChange={(e) =>
                            setSignInUser(
                                new SignInUser({
                                    ...signInUser,
                                    password: e.target.value,
                                })
                            )
                        }
                    />
                </div>
                <Button
                    disabled={isSigningIn}
                    type="submit" className="w-full">
                    {isSigningIn ? (
                        <>
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </>
                    ) : (<>
                        Sign In
                    </>)}
                </Button>
                <Button variant="outline" className="w-full">
                    <ChromeIcon className="mr-2 h-4 w-4" />
                    Sign in with Google
                </Button>
            </form>
        </AuthLayout>
    );
}
