"use client";

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { UserPost } from "@/model";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { DeleteIcon } from "./icon";
import { uploadImage } from "@/server/storage";
interface FormProps {
    post: UserPost;
    updatePost: (post: UserPost) => void;
    uploadPost: (post: UserPost) => void;
}

function CreatePostForm({ post, updatePost, uploadPost }: FormProps) {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    }, [file]);

    const clearImage = () => {
        setFile(null);
        setPreview(null);
        /**
         * Clear the file input value
         */
        if (ref.current) {
            ref.current.value = "";
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files as FileList;
        setFile(files[0]);
        const url = await uploadImage(files[0]);
        updatePost(new UserPost({ ...post, imageUri: url }));
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                uploadPost(post);
                clearImage();
            }}
        >
            <Card>
                <CardHeader>
                    <CardTitle>Create a new post</CardTitle>
                    <CardDescription>
                        Fill out the form below to create a new post.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                required
                                id="title"
                                type="text"
                                placeholder="Enter a title"
                                value={post.title ?? ""}
                                onChange={(e) =>
                                    updatePost(
                                        new UserPost({ ...post, title: e.target.value })
                                    )
                                }
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                required
                                id="description"
                                placeholder="Enter a description"
                                className="min-h-[120px]"
                                value={post.description ?? ""}
                                onChange={(e) =>
                                    updatePost(
                                        new UserPost({
                                            ...post,
                                            description: e.target.value,
                                        })
                                    )
                                }
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="category">Category</Label>
                            <Select
                                value={post.category ?? ""}
                                onValueChange={(value) =>
                                    updatePost(
                                        new UserPost({ ...post, category: value })
                                    )
                                }
                                required
                            >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="news">News</SelectItem>
                                    <SelectItem value="product">Product</SelectItem>
                                    <SelectItem value="event">Event</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="image">Image</Label>
                            <div className="flex items-center gap-2">
                                <Input
                                    ref={ref}
                                    required
                                    accept="image/*"
                                    id="profile-picture"
                                    type="file"
                                    onChange={handleFileChange}
                                />
                            </div>
                            {preview && (
                                <div className="relative mt-2 w-full max-w-md">
                                    <Image
                                        src={preview}
                                        alt="Image Preview"
                                        width={500}
                                        height={300}
                                        className="rounded-md"
                                    />
                                    <button
                                        onClick={clearImage}
                                        className="absolute top-2 right-2 bg-white rounded-full p-1"
                                        aria-label="Remove Image"
                                    >
                                        <DeleteIcon className="w-5 h-5 text-red-500" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">
                        Create Post
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
}

export default CreatePostForm;
