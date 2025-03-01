import type { Route } from "~/types";

interface JunghwaSquashPageProps extends Route.ComponentProps {}

export function meta(): Route.MetaFunction {
  return [
    { title: "중화스쿼시 - TopRacket" },
    { description: "중화스쿼시 A 코트 실시간 대기열 정보" }
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export default function JunghwaSquashPage({}: JunghwaSquashPageProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">중화스쿼시</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">A 코트 현황</h2>
          {/* 코트 현황 정보 */}
        </section>
      </div>
    </main>
  );
} 