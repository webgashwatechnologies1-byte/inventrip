
import { tracking } from './tracking';
import { transport } from './transport';
import { expeditions } from './expeditions';
import { destinations } from './destinations';

// Re-export specific data so they can be imported directly if needed
export { tracking, transport, expeditions, destinations };

// Aggregator function
export const getPackageBySlug = (slug) => {
  // 1. Search in Tracking
  const trackingPkg = tracking.find(p => p.slug === slug);
  if (trackingPkg) return trackingPkg;

  // 2. Search in Expeditions
  const bikePkg = expeditions.bike.find(p => p.slug === slug);
  if (bikePkg) return bikePkg;

  const suvPkg = expeditions.suv.find(p => p.slug === slug);
  if (suvPkg) return suvPkg;

  // 3. Search in Destinations
  for (const key in destinations) {
    const dest = destinations[key];
    const pkg = dest.packages.find(p => p.slug === slug);
    if (pkg) return pkg;
  }

  return null;
};
