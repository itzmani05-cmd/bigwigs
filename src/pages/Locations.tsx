import { useEffect } from "react";
import { Building2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import LocationsGrid from "@/components/locations/LocationsGrid";

const TITLE = "Locations | BigWigs Technologies";
const DESCRIPTION = "Where BigWigs Technologies operates and delivers enterprise AI, around the world.";

export default function Locations() {
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
        icon={Building2}
        eyebrow="Locations"
        title={
          <>
            Wherever our clients{" "}
            <span className="bg-gradient-to-r from-brand-green-500 via-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
              build, we're close by.
            </span>
          </>
        }
        description="Offices across the globe, delivering enterprise AI on the ground and remotely."
      />
      <LocationsGrid />
    </div>
  );
}
