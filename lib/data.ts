import jsLogo from "../public/assets/js-logo.png";
import tsLogo from "../public/assets/typescript.png";
import css from "../public/assets/css3.png";
import html from "../public/assets/html5.png";
import firebase from "../public/assets/firebase.png";
import react from "../public/assets/reactjs.png";
import git from "../public/assets/git.png";
import nextjs from "../public/assets/nextjs.png";
import tailwind from "../public/assets/tailwind.png";
import nodejs from "../public/assets/nodejs.png";
import post from "../public/assets/post.png";
import insomnia from "../public/assets/Insomnia.png";
import mongo from "../public/assets/mongo.png";
import sass from "../public/assets/sass.png";
import postgre from "../public/assets/postgre.png";
import reactNative from "../public/assets/react-native.png";
import pizza1 from "../public/port-images/pizza/pizza1.png";
import pizza2 from "../public/port-images/pizza/pizza2.png";
import pizza3 from "../public/port-images/pizza/pizza3.png";
import pizza4 from "../public/port-images/pizza/pizza4.png";
import blog1 from "../public/port-images/blog/blog1.png";
import blog2 from "../public/port-images/blog/blog2.png";
import blog3 from "../public/port-images/blog/blog3.png";
import blog4 from "../public/port-images/blog/blog4.png";
import blog5 from "../public/port-images/blog/blog5.png";
import blog6 from "../public/port-images/blog/blog6.png";
import netflix1 from "../public/port-images/netflix/netflix1.png";
import netflix2 from "../public/port-images/netflix/netflix2.png";
import netflix3 from "../public/port-images/netflix/netflix3.png";
import netflix4 from "../public/port-images/netflix/netflix4.png";
import mess5 from "../public/port-images/messanger/mess5.png";
import mess6 from "../public/port-images/messanger/mess6.png";
import todo6 from "../public/port-images/to-do/todo6.png";
import todo7 from "../public/port-images/to-do/todo7.png";
import store1 from "../public/port-images/fake-store/store1.png";
import store2 from "../public/port-images/fake-store/store2.png";
import store3 from "../public/port-images/fake-store/store3.png";
import store4 from "../public/port-images/fake-store/store4.png";
import store5 from "../public/port-images/fake-store/store5.png";
import msg from "../public/port-images/msg/msg.png";
import { ProjectType } from "./types";

export const navigation = [
  { name: "Home", href: "home" },
  { name: "Tech Stack", href: "tech" },
  { name: "Portfolio", href: "portfolio" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

export const techStack = [
  { name: "JavaScript", href: "javascript", image: jsLogo },
  { name: "TypeScript", href: "typescript", image: tsLogo },
  { name: "HTML", href: "html", image: html },
  { name: "CSS", href: "css", image: css },
  { name: "React", href: "react", image: react },
  { name: "React Native", href: "react-native", image: reactNative },
  { name: "Next.js", href: "next", image: nextjs },
  { name: "Tailwind", href: "tailwind", image: tailwind },
  { name: "Git", href: "git", image: git },
  { name: "Firebase", href: "firebase", image: firebase },
  { name: "Node.js", href: "node", image: nodejs },
  { name: "Postman", href: "post", image: post },
  { name: "Insomnia", href: "insomnia", image: insomnia },
  { name: "MongoDB", href: "mongo", image: mongo },
  { name: "Sass", href: "sass", image: sass },
];

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "Blog",
    image: [blog5, blog1, blog2, blog3, blog4, blog6],
    github: [
      "https://github.com/Nijekt/reactMyBlogFront",
      "https://github.com/Nijekt/reactMyBlockBack",
    ],
    description:
      "A full-stack platform where users can create, edit, and manage articles. Built with React, Node.js, and MongoDB, it features JWT authentication and Redux Toolkit for state management.",
  },
  {
    id: 4,
    title: "Messenger React Native",
    image: [mess5, mess6],
    github: ["https://github.com/Nijekt/chat-native"],
    description:
      "A real-time chat app built with React Native and Expo. Uses Firebase Firestore for instant messaging and Firebase Auth for secure logins.",
  },
  {
    id: 3,
    title: "Mini Netflix Clone",
    image: [netflix2, netflix1, netflix3, netflix4],
    github: ["https://github.com/Nijekt/next-netflix-clone"],
    description:
      "A streaming platform prototype developed with Next.js and TypeScript. Features authentication via NextAuth, server-side rendering for performance, and Zustand for state management.",
  },
  {
    id: 2,
    title: "React Pizza",
    image: [pizza1, pizza2, pizza3, pizza4],
    github: ["https://github.com/Nijekt/react_pizza"],
    description:
      "An interactive app for ordering pizzas, built with React and Redux Toolkit. Includes a dynamic shopping cart, filtering options, and real-time price updates.",
  },
  {
    id: 5,
    title: "React Native Notes",
    image: [todo6, todo7],
    github: ["https://github.com/Nijekt/react_native_notes"],
    description:
      "A cross-platform note-taking app with real-time syncing via Appwrite. Features a sleek UI, modal-based note input, and seamless data management.",
  },
  {
    id: 7,
    title: "Message Board",
    image: [msg],
    github: ["https://github.com/Nijekt/Message-board"],
    description:
      "A discussion platform built with Next.js and Express, using MySQL for data storage. Features user authentication, Redux-powered state management, and a Tailwind-styled UI.",
  },
  {
    id: 6,
    title: "Fake Store",
    image: [store1, store2, store3, store4, store5],
    github: ["https://github.com/Nijekt/fakeStore"],
    description:
      "An interactive application built with React and Basic Redux. Fetches product data from a public API, enabling users to browse, filter, and add items to a dynamic shopping cart. Features include real-time price calculations, product detail pages, and a seamless user experience.",
  },
];
