"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthLayout, { ChromeIcon } from "@/layout/auth";
import { useState } from "react";
import { SignUpUser } from "@/model";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import ky from "ky";
import { nanoid } from "nanoid";
import { ReloadIcon } from "@radix-ui/react-icons"

export default function Signup() {
    const { toast } = useToast();
    const router = useRouter();
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [signUpUser, setSignUpUser] = useState(
        new SignUpUser({
            id: nanoid(),
        })
    );

    const handleSignUpUser = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsSigningUp(true);
            signUpUser.validate();
            await ky.post("/api/signup", { json: signUpUser });
            toast({
                title: "Account created",
                description: "Your account has been created successfully",
            });
            router.push("/login");
        } catch (error: any) {
            console.error("Error while signing up", error);
            toast({
                title: "Error while signing up",
                description:
                    "There was an error while signing up, please try again later",
            });
        } finally{
            setIsSigningUp(false)
        }
    };

    return (
        <AuthLayout
            title="Welcome to our platform"
            description="Join our community and unlock a world of possibilities. Sign up now to get started."
            imageUrl="/signup.jpeg"
            linkText="Go to Login"
            linkHref="/login"
            linkLabel="Go to Login"
        >
            <div>
                <h2 className="text-2xl font-bold">Sign Up</h2>
                <p className="text-muted-foreground">
                    Enter your details to create an account.
                </p>
            </div>
            <form className="space-y-4" onSubmit={handleSignUpUser}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            onChange={(e) =>
                                setSignUpUser(
                                    new SignUpUser({
                                        ...signUpUser,
                                        firstName: e.target.value,
                                    })
                                )
                            }
                            id="firstName"
                            placeholder="John"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                            onChange={(e) =>
                                setSignUpUser(
                                    new SignUpUser({
                                        ...signUpUser,
                                        lastName: e.target.value,
                                    })
                                )
                            }
                            id="lastName"
                            placeholder="Doe"
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        onChange={(e) =>
                            setSignUpUser(
                                new SignUpUser({ ...signUpUser, email: e.target.value })
                            )
                        }
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        autoComplete="new-password"
                        onChange={(e) =>
                            setSignUpUser(
                                new SignUpUser({
                                    ...signUpUser,
                                    password: e.target.value,
                                })
                            )
                        }
                        id="password"
                        type="password"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                        autoComplete="new-password"
                        onChange={(e) =>
                            setSignUpUser(
                                new SignUpUser({
                                    ...signUpUser,
                                    confirmPassword: e.target.value,
                                })
                            )
                        }
                        id="confirmPassword"
                        type="password"
                        required
                    />
                </div>
                <Button
                    disabled={isSigningUp}
                    type="submit" className="w-full">
                    {isSigningUp ? (
                        <>
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </>
                    ) : (<>
                        Sign Up
                    </>)}
                </Button>
                <Button
                    variant="outline" className="w-full">
                    <ChromeIcon className="mr-2 h-4 w-4" />
                    Sign up with Google
                </Button>
            </form>
        </AuthLayout>
    );
}
