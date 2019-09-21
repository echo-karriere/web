export interface VolunteersInterface {
  name: string;
  picture: string;
  about: string;
}

const volunteers: VolunteersInterface[] = [
  {
    name: "Eirin Sognnes",
    picture: "/pictures/EirinSognnes.jpg",
    about: "Master, programutvikling"
  },
  {
    name: "Eivind D. Halderaker",
    picture: "/pictures/EivindHalderaker.jpg",
    about: "Master, programutvikling"
  },
  {
    name: "Jonas Triki",
    picture: "/pictures/JonasTriki.jpg",
    about: "Master, maskinlæring"
  },
  {
    name: "Maren Aleksandersen",
    picture: "/pictures/MarenAleksandersen.jpg",
    about: "Post-bachelor"
  },
  {
    name: "Marie Heggebakk",
    picture: "/pictures/MarieHeggebakk.jpg",
    about: "Bachelor, datasikkerhet"
  },
  {
    name: "Sondre Nilsen",
    picture: "/pictures/SondreNilsen.jpg",
    about: "Bachelor, datateknologi"
  }
];

export default volunteers;
