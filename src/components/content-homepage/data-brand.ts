export const data_Brand = [
  {
    title: "weibo Woman",
    image: "/woman.png",
    text: "Elevate your style with our collection of women's jewelry. From elegant necklaces to delicate bracelets, each piece is a work of art that reflects your unique beauty",
    textButton: "Shop now",
  },
  {
    title: "weibo Child",
    image: "torus-child.png",
    text: "Spark joy and fun with our line of children's jewelry. From adorable necklaces to colorful bracelets, let your little ones shine with our playful collection.",
    textButton: "Shop now",
  },
  {
    title: "weibo Man",
    image: "/weibo-man.png",
    text: "Add a touch of sophistication to your look with our men's jewelry. From sturdy chains to bold rings, express your distinctive style with our collection.",
    textButton: "Shop now",
    buttonColor: "weibo-yellow",
  },
  // Aggiungi qui altri oggetti se necessario
];
export type Item = {
  image: string;
  text: string;
  title: string;
  textButton: string;
  buttonColor?: string;
};
