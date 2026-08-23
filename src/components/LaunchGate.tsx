import { useState, type ReactNode } from "react";
import LaunchCountdown from "./LaunchCountdown";

const rawLaunchAt = import.meta.env.VITE_LAUNCH_AT;
const launchTimestamp = rawLaunchAt ? new Date(rawLaunchAt).getTime() : NaN;
const hasValidLaunchTime = !Number.isNaN(launchTimestamp);

/** Gates the whole site behind a countdown until VITE_LAUNCH_AT (an ISO
 *  date-time, e.g. "2026-09-01T09:00:00+05:30", set in .env). Unset, invalid,
 *  or already-past values just render the site immediately — this only ever
 *  blocks access when a real future launch time is configured. */
export default function LaunchGate({ children }: { children: ReactNode }) {
  const [isLive, setIsLive] = useState(() => !hasValidLaunchTime || Date.now() >= launchTimestamp);

  if (!isLive) {
    return <LaunchCountdown target={launchTimestamp} onComplete={() => setIsLive(true)} />;
  }

  return <>{children}</>;
}
