import Resume from "../components/resume";
import ClientOnly from "../components/ClientOnly";
import type { Route } from "./+types/resume";

export const links: Route.LinksFunction = () => [
  { rel: "preload", as: "image", href: "/gojo-mobile.webp", type: "image/webp", media: "(max-width: 767px)" },
  { rel: "preload", as: "image", href: "/gojo-tablet.webp", type: "image/webp", media: "(min-width: 768px) and (max-width: 1279px)" },
  { rel: "preload", as: "image", href: "/gojo-desktop.webp", type: "image/webp", media: "(min-width: 1280px)" },
  { rel: "preload", as: "image", href: "/profile-small.webp", type: "image/webp" },
];

export function meta() {
  return [
    { title: "Resume - Phon Ramy | Full Stack Developer" },
    {
      name: "description",
      content:
        "Professional resume of Phon Ramy - Full Stack Developer with expertise in AI integration, web and mobile development.",
    },
  ];
}

export default function ResumePage() {
  return (
    <ClientOnly>
      <Resume />
    </ClientOnly>
  );
}
