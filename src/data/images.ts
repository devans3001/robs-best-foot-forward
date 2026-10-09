// Hotlinked photography (Pexels CDN allows hotlinking).
// Swap these for the shop's real workbench photos when available.
const px = (id: number, w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMAGES = {
  hero: px(14832520, 1600),
  story: px(34211794, 1200),
  gallery: [
    { src: px(27697060, 900), label: "At the workbench" },
    { src: px(30954128, 900), label: "Stitched, not glued" },
    { src: px(6195834, 900), label: "Leather, revived" },
    { src: px(6196057, 900), label: "The finishing touch" },
  ],
  pricing: px(4637874, 1200),
  visit: px(8069881, 1200),
};
