interface Song {
  id: string;
  artist: string;
  title: string;
  image: string;
  duration: string;
  type: string;
}

export const songs: Song[] = [
  {
    id: "1",
    artist: "The Beatles",
    title: "Hey Jude",
    image:
      "https://people.com/thmb/GEMT5hOHPAnXPDfA3Bh1U2NuDJE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/the-beetles-1-1a971bd703a849268568fcf20bee9fe1.jpg",
    duration: "3:15",
    type: "single",
  },
];
