import type { Route } from "~/types";

interface CenterPageProps extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "스쿼시 센터 목록 - TopRacket" },
    { description: "TopRacket의 제휴 스쿼시 센터 목록입니다" }
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export default function CenterPage({}: CenterPageProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">스쿼시 센터</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 센터 목록 */}
      </div>
    </main>
  );
} 