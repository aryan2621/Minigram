import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DeleteIcon } from "./icon";
import { useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PostCardProps {
    postId: string;
    title: string;
    description: string;
    imageUri: string;
    category: string;
    createdBy: string;
    createdAt: string;
    deletePost: (postId: string) => void;
}

function timeAgo(date: string): string {
    const now = new Date();
    const postDate = new Date(date);
    const differenceInSeconds = Math.floor(
        (now.getTime() - postDate.getTime()) / 1000
    );

    const intervals = [
        { label: "year", seconds: 31536000 },
        { label: "month", seconds: 2592000 },
        { label: "day", seconds: 86400 },
        { label: "hour", seconds: 3600 },
        { label: "minute", seconds: 60 },
        { label: "second", seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(differenceInSeconds / interval.seconds);
        if (count >= 1) {
            return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
        }
    }

    return "just now";
}

function PostCard({
    postId,
    title,
    description,
    imageUri,
    category,
    createdAt,
    createdBy,
    deletePost,
}: PostCardProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const formattedDate = timeAgo(createdAt);

    return (
        <>
            <Card
                className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full max-h-[400px] relative cursor-pointer"
                onClick={() => setIsDialogOpen(true)}
            >
                <CardHeader className="p-4 border-b border-gray-200 relative">
                    <p className="text-xs text-gray-500">{formattedDate}</p>
                    <button
                        className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                        onClick={(e) => {
                            e.stopPropagation();
                            deletePost(postId);
                        }}
                    >
                        <DeleteIcon className="w-4 h-4" />
                    </button>
                </CardHeader>
                <CardContent className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
                    <p className="text-gray-700 mb-4 overflow-hidden text-ellipsis line-clamp-3">
                        {description}
                    </p>
                    {imageUri && (
                        <div className="relative h-48 w-full mb-4 flex-shrink-0 overflow-hidden">
                            <Image
                                src={imageUri}
                                alt="Post image"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                    )}
                    <div className="mt-auto">
                        <span className="text-sm text-gray-500">{category}</span>
                    </div>
                </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent >
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>{category}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                        {imageUri && (
                            <div className="relative h-64 w-full mb-4">
                                <Image
                                    src={imageUri}
                                    alt="Post image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                        )}
                        <p>{description}</p>
                        <p className="mt-2 text-sm text-gray-500">
                            Posted: {formattedDate}
                        </p>
                    </div>
                    <DialogClose asChild>
                        <Button>Close</Button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default PostCard;
