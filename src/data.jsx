import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "pis nahuj dirsa jatais erzeli",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "pis nahuj dirsa jatais erzeli",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "pis nahuj dirsa jatais erzeli",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "fuck you !!!!!!",
    location:'China',
    duration:6,
    cost:2100
  },
  {
    id: 2,
    image: tour2,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "fuck you !!!!!!",
    location:'Indonesia',
    duration:6,
    cost:6100
  },
  {
    id: 3,
    image: tour3,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "fuck you !!!!!!",
    location:'Hong kong ',
    duration:6,
    cost:4100
  },
  {
    id: 4,
    image: tour4,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "fuck you !!!!!!",
    location:'Africa',
    duration:6,
    cost:3100
  },
];
