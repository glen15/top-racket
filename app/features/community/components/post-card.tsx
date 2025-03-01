import { Link } from "react-router";
import { EyeIcon, HeartIcon } from "lucide-react";
import { Button } from "../../../common/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../common/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../common/components/ui/avatar";

interface PostCardProps {
  postId: string;
  title: string;  
  authorName: string;
  authorAvatarUrl: string;
  createdDate: string;
  createdTime: string;
  likes: number;
  views: number;
}

export function PostCard({
  postId,
  title,
  authorName,
  authorAvatarUrl,
  createdDate,
  createdTime,
  likes,
  views,
}: PostCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <Link to={`/community/${postId}`}>
        <CardHeader className="flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarImage src={authorAvatarUrl} />
            <AvatarFallback>
              {authorName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex gap-2 text-sm text-muted-foreground leading-tight">
              <span>{authorName}</span>
              <span>{createdDate}</span>
              <span>{createdTime}</span>
            </div>
            <div className="flex gap-2 text-sm text-muted-foreground leading-tight">
              <HeartIcon className="size-4" />
              <span>{likes}</span>
              <EyeIcon className="size-4" />
              <span>{views}</span>
            </div>
          </div>
        </CardHeader>
      </Link>
      <CardFooter className="flex justify-end">
        <Button variant="link" className="flex justify-end">
          댓글 보기 &rarr;
        </Button>
      </CardFooter>
    </Card>
  );
} 