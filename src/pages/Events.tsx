import { useEffect } from "react";
import { CalendarDays } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import EventsTimeline from "@/components/events/EventsTimeline";

const TITLE = "Events | BigWigs Technologies";
const DESCRIPTION =
  "Webinars, meetups, and conferences from BigWigs Technologies — where to find our team next.";

export default function Events() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = TITLE;

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? null;
    metaDescription?.setAttribute("content", DESCRIPTION);

    return () => {
      document.title = previousTitle;
      if (previousDescription !== null) {
        metaDescription?.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <div className="bg-white">
      <PageHero
        icon={CalendarDays}
        eyebrow="Events"
        title={
          <>
            Where to find us{" "}
            <span className="bg-gradient-to-r from-brand-green-500 via-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
              next.
            </span>
          </>
        }
        description="Webinars, meetups, and conferences we host or attend — in person and online."
      />
      <EventsTimeline />
    </div>
  );
}
