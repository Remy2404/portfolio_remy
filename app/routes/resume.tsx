import Resume from "../components/Resume";
import ClientOnly from "../components/ClientOnly";

export function meta() {
  return [
    { title: "Resume - Phon Ramy | Full Stack Developer" },
    { name: "description", content: "Professional resume of Phon Ramy - Full Stack Developer with expertise in AI integration, web and mobile development." },
  ];
}

export default function ResumePage() {
  return (
    <ClientOnly>
      <Resume />
    </ClientOnly>
  );
}
