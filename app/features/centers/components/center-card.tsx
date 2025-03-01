import { Link } from "react-router";
import { SwordsIcon, UsersRoundIcon } from "lucide-react";
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
} from "~/common/components/ui/avatar";

interface CenterCardProps {
  centerId: string;
  centerName: string;
  centerAvatarUrl: string;
  courtName: string;
  currentMatch: {
    player1: string;
    player2: string;
  };
  totalParticipants: number;
}

export function CenterCard({
  centerId,
  centerName,
  centerAvatarUrl,
  courtName,
  currentMatch,
  totalParticipants,
}: CenterCardProps) {
  return (
    <Link to={`/center/${centerId}`}>
      <Card className="w-full h-full flex flex-col bg-transparent hover:bg-card/50">
        <CardHeader className="flex-1">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={centerAvatarUrl} />
              <AvatarFallback>
                {centerName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight mb-2">
              {centerName} {courtName} 현황
            </CardTitle>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground justify-center">
            <span>진행중인 매치 : </span>
            <span>{currentMatch.player1}</span>
            <SwordsIcon className="w-4 h-4" />
            <span>{currentMatch.player2}</span>
          </div>
        </CardHeader>
        <CardFooter className="mt-auto">
          <Button variant="outline" disabled className="ml-auto">
            <UsersRoundIcon className="w-4 h-4 mr-2" />
            <span>전체 참가자 수 : {totalParticipants} 명</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
