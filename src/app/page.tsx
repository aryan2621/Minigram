"use client";

import CreatePostForm from "@/elements/form";
import PostCard from "@/elements/post";
import Sidebar from "@/elements/sidebar";
import { Post, UserPost } from "@/model";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useToast } from "@/components/ui/use-toast";
import ky from "ky";
import { Skeleton } from "@/components/ui/skeleton";
import { FrownIcon } from "lucide-react";

export default function Component() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [selectedPost, setSelectedPost] = useState<Post>();

    const { toast } = useToast();
    const [currentUserPost, setCurrentUserPost] = useState<UserPost>(
        new UserPost({
            postId: nanoid(),
        })
    );

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsFetching(true);
                const res = await ky.get("/api/posts").json<{
                    data: Post[];
                    message: string;
                    status: number;
                }>();
                setPosts(res.data);
            } catch (error: any) {
                console.error("Error while fetching posts", error);
            } finally {
                setIsFetching(false);
            }
        };
        fetchPosts();
    }, []);

    const updatePost = (post: UserPost) => {
        setCurrentUserPost(post);
    };

    const uploadPost = async (post: UserPost) => {
        try {
            setSubmitting(true);
            post.validate();
            await ky.post("/api/post", {
                json: post,
            });
            toast({
                title: "Post uploaded successfully",
                description: "Your post has been uploaded successfully",
            });
            setPosts((prev) => [...prev, clonePost(currentUserPost)]);
            setCurrentUserPost(new UserPost({ postId: nanoid() }));
        } catch (error: any) {
            console.error("Error while uploading post", error);
            toast({
                title: "Error while uploading post",
                description:
                    "There was an error while uploading post, please try again later",
            });
        } finally {
            setSubmitting(false);
        }
    };

    const deletePost = async (postId: string) => {
        try {
            await ky.delete("/api/post", {
                json: {
                    postId,
                },
            });
            setPosts((prev) => prev.filter((post) => post.postId !== postId));
            toast({
                title: "Post deleted successfully",
                description: "Your post has been deleted successfully",
            });
        } catch (error: any) {
            console.error("Error while deleting post", error);
            toast({
                title: "Error while deleting post",
                description:
                    "There was an error while deleting post, please try again later",
            });
        }
    };

    const clonePost = (userPost: UserPost) => {
        const newPost = new Post({
            title: userPost.title,
            description: userPost.description,
            imageUri: userPost.imageUri,
            category: userPost.category,
            postId: userPost.postId,
        });
        return newPost;
    };

    return (
        <div className="container mx-auto grid gap-4 py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_400px] gap-4">
                <div className="hidden lg:block">
                    <Sidebar />
                </div>

                <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {isFetching ? (
                        <>
                            <Skeleton className="h-48 w-full rounded-md" />
                            <Skeleton className="h-48 w-full rounded-md" />
                            <Skeleton className="h-48 w-full rounded-md" />
                        </>
                    ) : !isFetching && posts.length === 0 ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <FrownIcon className="mx-auto h-12 w-12 text-primary" />
                            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center">
                                No records or entries found
                            </h1>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <PostCard
                                key={post.postId}
                                postId={post.postId}
                                title={post.title}
                                description={post.description}
                                imageUri={post.imageUri}
                                category={post.category}
                                createdBy={post.createdBy}
                                createdAt={post.createdAt}
                                deletePost={deletePost}
                            />
                        ))
                    )}
                </div>
                <div className="block lg:block">
                    <CreatePostForm
                        post={currentUserPost}
                        updatePost={updatePost}
                        uploadPost={uploadPost}
                    />
                </div>
            </div>
        </div>
    );
}
