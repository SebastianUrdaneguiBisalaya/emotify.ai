interface Song {
  id: string;
  artist: string;
  title: string;
  image: string;
  duration: string;
  type: string;
}

interface Songs {
  id: string;
  artist: string;
  title: string;
}

interface Data {
  id: string;
  role: "user" | "bot";
  text: string;
  songs?: Songs[];
}

export const data: Data[] = [
  {
    id: "1",
    role: "user",
    text: "Hola, me siento motivado para empezar a trabajar.",
  },
  {
    id: "2",
    role: "bot",
    text: "¡Hola! Me alegra que estés motivado para empezar a trabajar. Te recomiendo las siguientes canciones para que te sientas más motivado y que te ayuden a alcanzar tus metas.",
    songs: [
      {
        id: "1",
        artist: "The Beatles",
        title: "Hey Jude",
      },
      {
        id: "2",
        artist: "The Beatles",
        title: "Let It Be",
      },
      {
        id: "3",
        artist: "The Beatles",
        title: "I Want to Hold Your Hand",
      },
    ],
  },
  {
    id: "3",
    role: "user",
    text: "Perfecto, muchas gracias.",
  },
  {
    id: "4",
    role: "bot",
    text: "¡De nada! Me alegra que hayas encontrado las canciones que te gustarían. Recuerda que la música es una herramienta poderosa para ayudarte a alcanzar tus metas y mejorar tus habilidades. ¡Buena suerte en tu camino!",
  },
  {
    id: "5",
    role: "user",
    text: "Puedes agregar más canciones?",
  },
  {
    id: "6",
    role: "bot",
    text: "¡Por supuesto!",
    songs: [
      {
        id: "4",
        artist: "The Beatles",
        title: "I Want to Hold Your Hand",
      },
      {
        id: "5",
        artist: "The Beatles",
        title: "Let It Be",
      },
      {
        id: "6",
        artist: "The Beatles",
        title: "Hey Jude",
      },
      {
        id: "7",
        artist: "The Beatles",
        title: "Let It Be",
      },
    ],
  },
  {
    id: "7",
    role: "user",
    text: "¿Qué música te gusta?",
  },
  {
    id: "8",
    role: "bot",
    text: "¡Genial! Me alegra que hayas encontrado las canciones que te gustarían. Recuerda que la música es una herramienta poderosa para ayudarte a alcanzar tus metas y mejorar tus habilidades. ¡Buena suerte en tu camino!",
  },
  {
    id: "9",
    role: "user",
    text: "Puedes agregar más canciones?",
  },
  {
    id: "10",
    role: "bot",
    text: "¡Por supuesto!",
    songs: [
      {
        id: "8",
        artist: "The Beatles",
        title: "I Want to Hold Your Hand",
      },
      {
        id: "9",
        artist: "The Beatles",
        title: "Let It Be",
      },
      {
        id: "10",
        artist: "The Beatles",
        title: "Hey Jude",
      },
    ],
  },
];

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
