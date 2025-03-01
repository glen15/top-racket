import { Link } from "react-router";
import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  BarChart3Icon,
  BellIcon,
  LogOutIcon,
  MessageCircleIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

const menues = [
  {
    name: "센터",
    to: "/centers",
    items: [
      {
        name: "중화스쿼시",
        description: "중화스쿼시 A 코트 실시간 대기열 확인",
        to: "/centers/junghwasquash",
      },
      {
        name: "서경 스포렉스",
        description: "서경 스포렉스 B 코트 실시간 대기열 확인",
        to: "/centers/seokyeong",
      },
    ],
  },
  {
    name: "랭킹보드",
    to: "/rankingboard",
    items: [
      {
        name: "전체 랭킹보드",
        description: "전체 랭킹 포인트 확인 ",
        to: "/rankingboard?type=all",
      },
      {
        name: "센터별 랭킹보드",
        description: "센터별 랭킹 포인트 확인",
        to: "/rankingboard?type=center",
      },
      {
        name: "그룹별 랭킹보드",
        description: "그룹별 랭킹 포인트 확인",
        to: "/rankingboard?type=group",
      },
    ],
  },

  {
    name: "뱃지 챌린지",
    to: "/badge",
    items: [
      {
        name: "뱃지 전체 목록",
        description: "뱃지 전체 목록 확인하기",
        to: "/badge",
      },
      {
        name: "일반 뱃지",
        description:
          "연승, 연패, 무실점 승리 등 일상 게임에서 얻을 수 있는 뱃지",
        to: "/badge?type=general",
      },
      {
        name: "이벤트 뱃지",
        description: "스타터 뱃지 등 이벤트 참여 및 달성 시 얻을 수 있는 뱃지",
        to: "/badge?type=event",
      },
      {
        name: "시즌 탑라켓 뱃지",
        description: "해당 시즌 센터 대표 상대로 승리시 얻을 수 있는 뱃지",
        to: "/badge?type=topracket",
      },
      {
        name: "커스텀 뱃지",
        description: "특정 대상, 장소, 행사를 위해 제작된 뱃지",
        to: "/badge?type=custom",
      },
      {
        name: "뱃지 생성 요청",
        description: "뱃지 생성 요청",
        to: "/badge/create",
      },
    ],
  },
  {
    name: "그룹",
    to: "/group",
    items: [
      {
        name: "전체 그룹",
        description: "전체 그룹 선택",
        to: "/group",
      },
      {
        name: "그룹 생성",
        description: "그룹 생성",
        to: "/group/create",
      },
    ],
  },
  {
    name: "커뮤니티",
    to: "/community",
    items: [
      {
        name: "전체 게시글",
        description: "전체 게시글 선택",
        to: "/community?center=all",
      },
      {
        name: "TOP 게시글",
        description: "TOP 게시글 선택",
        to: "/community?sort=top",
      },
      {
        name: "최신 게시글",
        description: "최신 게시글 선택",
        to: "/community?sort=latest",
      },
      {
        name: "게시글 생성",
        description: "게시글 생성",
        to: "/community/create",
      },
    ],
  },

  //   {
  //     name: "쇼핑",
  //     to: "/shop",
  //     items: [
  //       {
  //         name: "전체 아이템",
  //         description: "전체 아이템 보기",
  //         to: "/shop",
  //       },
  //       {
  //         name: "운동용품",
  //         description: "운동용품 보기",
  //         to: "/shop?category=sports",
  //       },
  //       {
  //         name: "뱃지",
  //         description: "뱃지 보기",
  //         to: "/shop?category=badge",
  //       },
  //       {
  //         name: "지비츠",
  //         description: "지비츠 보기",
  //         to: "/shop?category=zibits",
  //       },
  //       {
  //         name: "키링",
  //         description: "키링 보기",
  //         to: "/shop?category=keychain",
  //       },
  //     ],
  //   },
];

export default function Navigation({
  isLoggedIn,
  hasNotifications,
  hasMessages,
}: {
  isLoggedIn: boolean;
  hasNotifications: boolean;
  hasMessages: boolean;
}) {
  return (
    <nav className="flex justify-between items-center p-4 backdrop-blur-sm fixed top-0 left-0 right-0 z-10 bg-background/80">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-lg font-bold tracking-tighter">
          TopRacket
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menues.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <Link to={menu.to}>
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] font-light gap-3 p-4 grid-cols-2">
                        {menu.items?.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn([
                              "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent",
                              item.to === "/center/junghwasquash" &&
                                "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                            ])}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                className="p-3 space-y-1 block leading-none no-underline outline-none"
                                to={item.to}
                              >
                                <span className="text-sm font-medium leading-none">
                                  {item.name}
                                </span>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {isLoggedIn ? (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link to="/my/notifications">
              <BellIcon className="w-4 h-4" />
              {hasNotifications && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link to="/my/notifications">
              <MessageCircleIcon className="w-4 h-4" />
              {hasMessages && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/glen15.png" />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="flex flex-col">
                <span className="font-medium">Glen</span>
                <span className="text-xs text-muted-foreground">@username</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/dashboard">
                    <BarChart3Icon className="w-4 h-4 mr-2" />
                    대시보드
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/profile">
                    <UserIcon className="w-4 h-4 mr-2" />
                    프로필
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/settings">
                    <SettingsIcon className="w-4 h-4 mr-2" />
                    설정
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/logout">
                    <LogOutIcon className="w-4 h-4 mr-2" />
                    로그아웃
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/login">로그인</Link>
          </Button>
          <Button asChild>
            <Link to="/join">회원가입</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
