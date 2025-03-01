import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("common/pages/home-page.tsx"),
    ...prefix("centers", [
        index("features/centers/pages/center-page.tsx"),
        route("/junghwasquash", "features/centers/pages/junghwasquash-page.tsx"),
        route("/seokyeong", "features/centers/pages/seokyeong-page.tsx"),
    ]),
] satisfies RouteConfig;
