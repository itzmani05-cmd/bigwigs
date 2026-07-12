export interface TrustedBrand {
  name: string;
  logo: string;
  href?: string;
}

// Placeholder client marks — swap `logo` with real client assets under
// /public/assets/logos and add `href` where a link should be clickable.
export const trustedBrands: TrustedBrand[] = [
  { name: "Nexora", logo: "/assets/logos/nexora.svg" },
  { name: "Verdant", logo: "/assets/logos/verdant.svg" },
  { name: "Quantaforge", logo: "/assets/logos/quantaforge.svg" },
  { name: "Helion", logo: "/assets/logos/helion.svg" },
  { name: "Meridian", logo: "/assets/logos/meridian.svg" },
  { name: "Orbital", logo: "/assets/logos/orbital.svg" },
];
