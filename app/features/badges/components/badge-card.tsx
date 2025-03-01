import { Link } from "react-router";
import {
  PaletteIcon,
  PartyPopperIcon,
  SwordsIcon,
  TrophyIcon,
} from "lucide-react";
import { Button } from "../../../common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../common/components/ui/card";
import { Badge } from "../../../common/components/ui/badge";

type BadgeVariant = "event" | "topRacket" | "custom";

interface BadgeCardProps {
  badgeId: string;
  variant: BadgeVariant;
  badgeImageUrl: string;
  targetUser: string;
  title: string;
  description: string;
  badges: {
    label: string;
    variant?: "default" | "outline" | "destructive";
  }[];
  start: string;
  end: string;
  location: string;
}

export function BadgeCard({
  badgeId,
  variant,
  badgeImageUrl,
  targetUser,
  title,
  description,
  badges,
  start,
  end,
  location,
}: BadgeCardProps) {
  const getBadgeIcon = () => {
    switch (variant) {
      case "event":
        return <PartyPopperIcon className="size-4 mr-2" />;
      case "topRacket":
        return <TrophyIcon className="size-4 mr-2" />;
      case "custom":
        return <PaletteIcon className="size-4 mr-2" />;
    }
  };

  const getBadgeLabel = () => {
    switch (variant) {
      case "event":
        return "Event Badge";
      case "topRacket":
        return "Top-Racket Badge";
      case "custom":
        return "Custom Badge";
    }
  };

  const getButtonVariant = () => {
    return variant === "topRacket" ? "destructive" : "default";
  };

  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <img
            src={badgeImageUrl}
            alt={title}
            className="size-10 rounded-full"
          />
          <span className="text-lg font-semibold">
            매치 대상 : {targetUser}
          </span>
        </div>
        <CardTitle>{title}</CardTitle>
        <span className="text-sm text-foreground/60">{description}</span>
      </CardHeader>
      <CardContent className="flex gap-2">
        <Badge variant={variant === "topRacket" ? "destructive" : "default"}>
          {getBadgeIcon()}
          {getBadgeLabel()}
        </Badge>
        {badges.map((badge, index) => (
          <Badge key={index} variant={badge.variant || "outline"}>
            {badge.label}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-muted-foreground">
            기간 : {start} ~ {end}
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            장소 : {location}
          </span>
        </div>
        <Button variant={getButtonVariant()} className="flex justify-end">
          <SwordsIcon className="size-4 mr-2" />
          <Link to={`/badge/${badgeId}`}>챌린지 신청하기</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
