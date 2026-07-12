export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  isHQ?: boolean;
  tint: "green" | "blue";
}

// Placeholder offices — swap in real addresses before this ships.
export const officeLocations: OfficeLocation[] = [
  {
    city: "San Francisco",
    country: "United States",
    address: "100 Market Street, Suite 400, San Francisco, CA 94105",
    isHQ: true,
    tint: "green",
  },
  {
    city: "Austin",
    country: "United States",
    address: "500 Congress Avenue, Austin, TX 78701",
    tint: "blue",
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "1 Fitzroy Square, London W1T 5HE",
    tint: "green",
  },
  {
    city: "Bengaluru",
    country: "India",
    address: "MG Road, Bengaluru, Karnataka 560001",
    tint: "blue",
  },
];
