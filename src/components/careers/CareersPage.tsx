import { useState } from "react";
import CareersHero from "./CareersHero";
import CultureValues from "./CultureValues";
import OpenRoles from "./OpenRoles";
import ApplicationForm from "./ApplicationForm";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState("General Application");

  return (
    <div className="bg-white">
      <CareersHero />
      <CultureValues />
      <OpenRoles onApply={setSelectedRole} />
      <ApplicationForm selectedRole={selectedRole} onSelectedRoleChange={setSelectedRole} />
    </div>
  );
}
