// Hotlinked photography (Pexels CDN allows hotlinking).
// Swap these for the shop's real workbench photos when available.
const px = (id: number, w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMAGES = {
  heroBg: px(14832520, 1920),
  chapter1: px(34211794, 1200),
  panels: [px(27697060, 1200), px(30954128, 1200), px(6195834, 1200)],
  servicePreview: [
    px(6196057, 800),
    px(4637874, 800),
    px(6765524, 800),
    px(8069881, 800),
    px(27697060, 800),
    px(30954128, 800),
  ],
  visit: px(4637874, 1400),
};
