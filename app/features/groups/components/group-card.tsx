import { Link } from "react-router";
import { ShieldHalfIcon, Users2Icon } from "lucide-react";
import { Button } from "../../../common/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../common/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../common/components/ui/avatar";
import { Badge } from "../../../common/components/ui/badge";

interface GroupCardProps {
  groupId: string;
  title: string;
  description: string;
  leaderName: string;
  leaderAvatarUrl: string;
  totalMembers: number;
}

export function GroupCard({
  groupId,
  title,
  description,
  leaderName,
  leaderAvatarUrl,
  totalMembers,
}: GroupCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 items-center">
          <span className="text-lg font-semibold">Leader : </span>
          <Badge
            variant="secondary"
            className="inline-flex shadow-sm items-center text-base"
          >
            <Avatar className="size-5">
              <AvatarImage src={leaderAvatarUrl} />
              <AvatarFallback className="bg-green-500/60">
                {leaderName[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span>{leaderName}</span>
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Users2Icon className="size-4" />
          <span>{totalMembers}명</span>
        </div>
        <Button variant="secondary" className="flex justify-end">
          <ShieldHalfIcon className="size-4 mr-2" />
          <Link to={`/group/${groupId}`}>참여 신청하기 &rarr;</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
