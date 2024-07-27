import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface UserAvatarProps {
    src: string;
    alt: string;
    fallback: string;
}

function UserAvatar({ src, alt, fallback }: UserAvatarProps) {
    return (
        <Avatar>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    );
}

export default UserAvatar;
