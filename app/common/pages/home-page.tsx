import { Link, type MetaFunction } from "react-router";
import { Button } from "../components/ui/button";
import { CenterCard } from "../../features/centers/components/center-card";
import { RankingBoardCard } from "../../features/rankingboard/components/rankingboard-card";
import { PostCard } from "../../features/community/components/post-card";
import { BadgeCard } from "../../features/badges/components/badge-card";
import { GroupCard } from "../../features/groups/components/group-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Top-Racket" },
    { name: "description", content: "Welcome to top-racket" },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            실시간 코트 현황
          </h2>
          <p className="text-2xl font-semibold text-foreground/60">
            각 센터의 게임 코트 실시간 현황 확인
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/center">전체 게임 코트 보기 &rarr;</Link>
          </Button>
        </div>
        <div>
          <CenterCard
            centerId="junghwasquash"
            centerName="중화스쿼시"
            centerAvatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLfTzLl8PXci3dn76I9yMJ6tfx3eH26Ns1Pw&s"
            courtName="A 코트"
            currentMatch={{
              player1: "이정훈",
              player2: "이용근",
            }}
            totalParticipants={6}
          />
        </div>
        <div>
          <CenterCard
            centerId="seokyeong"
            centerName="서경스포렉스"
            centerAvatarUrl=""
            courtName="B 코트"
            currentMatch={{
              player1: "이지형",
              player2: "양태근",
            }}
            totalParticipants={4}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            랭킹보드
          </h2>
          <p className="text-2xl font-semibold text-foreground/60">
            포인트 랭킹 확인
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ranking">전체 포인트 랭킹 보기 &rarr;</Link>
          </Button>
        </div>
        <div>
          <RankingBoardCard
            type="center"
            title="센터별 랭킹보드"
            description="센터별 매치 포인트 순위를 확인합니다."
          />
        </div>
        <div>
          <RankingBoardCard
            type="group"
            title="그룹별 랭킹보드"
            description="그룹별 매치 포인트 순위를 확인합니다."
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            뱃지 챌린지
          </h2>
          <p className="text-2xl font-semibold text-foreground/60">
            획득 가능한 뱃지 확인
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/badge">전체 뱃지 보기 &rarr;</Link>
          </Button>
        </div>
        <div>
          <BadgeCard
            badgeId="starter-badge"
            variant="event"
            badgeImageUrl="https://i.namu.wiki/i/C5hitbKaMw-OgyQ2M68sMyxQaX6YuH5PlrJXzeKpP_U8Ru3DhE2v9iT9C1UXNiJCDbgkLN_SzuxBoJDYWXZcbfOM458cwyHqrXXukpgiHQSnf_x7t5UpgsDenUoHGULGe9jxTxDbpWEGuelgqT9Spg.webp"
            targetUser="이정훈"
            title="TopRacket 스타터 뱃지"
            description="시스템 제작자에게 승리시 부여되는 뱃지입니다."
            badges={[{ label: "남" }, { label: "실버" }, { label: "미니엄" }]}
            start="2025-01-01"
            end="2025-12-31"
            location="중화스쿼시"
          />
        </div>
        <div>
          <BadgeCard
            badgeId="season-badge-junghwa"
            variant="topRacket"
            badgeImageUrl="https://i.namu.wiki/i/tmcwbdri1PAX21EuB7aVk_B4u-8tgLbgX5Tcoay0HIkTvyb0w078taROiN4DHMvr8daUQXA9P7pUf0MwbB-QA5rwzGBj91NhePRLMvqrLknXCjVL_3A2QH63B88VULlknXbfslyqKmhaG7EA5wclvQ.webp"
            targetUser="강문철"
            title="TopRacket 시즌 뱃지 : 중화 2025 상반기"
            description="해당 시즌 센터 대표에게 승리시 부여되는 뱃지입니다."
            badges={[{ label: "남" }, { label: "베테랑" }, { label: "마스터" }]}
            start="2025-03-01"
            end="2025-07-31"
            location="중화스쿼시"
          />
        </div>
        <div>
          <BadgeCard
            badgeId="season-badge-seokyeong"
            variant="topRacket"
            badgeImageUrl="https://i.namu.wiki/i/_pOqVziYiE1raRmoN_bw1bBHcIyD8xUWJd7UZQ2Ijgk3D5_Jx5bLG1mkX8vHvV92cgqmXsqU1J4coguoHa8e3UpziPDPJUEoDro9BtQtSRHJsaooKwHJ4dcWEuo1kQrVjZ6ibaayT2U2YId9He6jrw.webp"
            targetUser="이지형"
            title="TopRacket 시즌 뱃지 : 서경 2025 상반기"
            description="해당 시즌 센터 대표에게 승리시 부여되는 뱃지입니다."
            badges={[{ label: "남" }, { label: "베테랑" }, { label: "마스터" }]}
            start="2025-03-01"
            end="2025-07-31"
            location="서경 스포렉스"
          />
        </div>
        <div>
          <BadgeCard
            badgeId="custom-badge-sungchun"
            variant="custom"
            badgeImageUrl="https://i.namu.wiki/i/uB2o75AE8rjWC04yGKPUty2332WDTwmKcjgrrFwQ5T08svJEWPwzh1GNfjpF-u5_7oKkYrYsNwpbYVeF417bNoy0snqBYItxiUFy4wIf8_MrzA_68K6BbRIw0X8DkZq86kTTzQ1CXJ_BHs6L7rASHA.webp"
            targetUser="김병규"
            title="커스텀 뱃지 : 센터 코치 뱃지"
            description="커스텀하게 제작되어 특정 조건에 맞춰 부여되는 뱃지입니다."
            badges={[{ label: "남" }, { label: "마스터" }]}
            start="2025-03-01"
            end="2025-07-31"
            location="중화스쿼시"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            그룹
          </h2>
          <p className="text-2xl font-semibold text-foreground/60">
            새 멤버를 찾고 있는 그룹에 참여
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/group">전체 그룹 보기 &rarr;</Link>
          </Button>
        </div>
        <div>
          <GroupCard
            groupId="junghwa-ranking"
            title="중화랭킹전"
            description="중화스쿼시 센터에서 매달 1회 리그전으로 순위를 내는 매치를 진행합니다."
            leaderName="강문철"
            leaderAvatarUrl="https://github.com/shadcn.png"
            totalMembers={9}
          />
        </div>
        <div>
          <GroupCard
            groupId="squashcity"
            title="스쿼시티"
            description="서울시립대 웰니스 센터에서 매주 친선 매치를 진행합니다."
            leaderName="이동우"
            leaderAvatarUrl="https://github.com/apple.png"
            totalMembers={10}
          />
        </div>
        <div>
          <GroupCard
            groupId="uso"
            title="U.S.O"
            description="주로 힐스포파크에서 월 1회 친선 매치를 진행합니다."
            leaderName="유재덕"
            leaderAvatarUrl="https://github.com/facebook.png"
            totalMembers={24}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            게시글
          </h2>
          <p className="text-2xl font-semibold text-foreground/60">
            작성된 게시글을 확인
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">전체 게시글 보기 &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <PostCard
              postId={`postId-${index}`}
              title={`게시글 제목 ${index}`}
              authorName="이정훈"
              authorAvatarUrl="https://github.com/glen15.png"
              createdDate="2025-02-23"
              createdTime="12:00"
              likes={2}
              views={6}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
