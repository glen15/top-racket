import { Link } from "react-router";
import { ListOrderedIcon, MedalIcon } from "lucide-react";
import { Button } from "../../../common/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../common/components/ui/card";

interface RankingBoardCardProps {
  type: "center" | "group";
  title: string;
  description: string;
}

export function RankingBoardCard({
  type,
  title,
  description,
}: RankingBoardCardProps) {
  return (
    <Link to={`/ranking?rankingType=${type}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader>
          <CardTitle className="flex text-2xl font-semibold leading-none tracking-tight mb-2">
            <MedalIcon className="size-6 mr-2" />
            <span>{title}</span>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-end">
          <Button variant="default">
            <ListOrderedIcon className="w-4 h-4 mr-2" />
            <span>랭킹 보러가기</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
