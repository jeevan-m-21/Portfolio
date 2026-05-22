import eventsphereHome from "../assets/projects/eventsphere/home.png"
import eventsphereDashboard from "../assets/projects/eventsphere/dashboard.png"
import eventsphereRole from "../assets/projects/eventsphere/role.png"

import campusvoteHome from "../assets/projects/campusvote/home.png"
import campusvoteDashboard from "../assets/projects/campusvote/dashboard.png"
import campusvoteResults from "../assets/projects/campusvote/results.png"

export const projects = [
  {
    id: "campushive",
    title: "CampusHive",
    isFeatured: true,
    shortDescription: "A comprehensive campus management and engagement platform.",
    fullDescription: "CampusHive is an integrated digital ecosystem designed to streamline campus operations, foster student engagement, and provide a unified platform for academic and extracurricular activities. It bridges the communication gap between administration, faculty, and students.",
    problem: "Traditional campus management relies on fragmented systems—separate portals for attendance, events, announcements, and resources. This leads to information silos, missed updates, and a disconnected student experience.",
    solution: "CampusHive unifies these functions into a single, cohesive platform. It provides real-time notifications, event discovery, resource sharing, and centralized administration, built with a scalable and responsive architecture.",
    features: [
      "Centralized event discovery and registration",
      "Real-time announcements and push notifications",
      "Resource sharing repository for study materials",
      "Admin dashboard for managing users and content",
      "Role-based access control (Student, Faculty, Admin)"
    ],
    technologies: ["Flutter - Dart", "Flask", "MySQL", "FireBase Storage/ AWS S3", "AI/ML Concepts"],
    githubUrl: "https://github.com/jeevan-m-21/Campus-Hive",
    demoUrl: "",
    preview: null,
    images: []
  },
  {
    id: "eventsphere",
    title: "EventSphere",
    shortDescription: "Dynamic event management and ticketing platform.",
    fullDescription: "EventSphere is a robust platform designed to simplify the process of organizing, promoting, and attending events. From seamless ticketing to dynamic venue mapping, it provides an end-to-end solution for event organizers and attendees alike.",
    problem: "Organizing events involves juggling multiple tools for ticketing, marketing, attendee management, and communication, making it difficult to maintain a unified brand experience and track analytics.",
    solution: "EventSphere consolidates the event lifecycle. It offers customizable event pages, secure payment processing for ticketing, automated reminders, and detailed analytics for organizers to measure success.",
    features: [
      "Customizable event landing pages",
      "Secure ticketing and QR code generation",
      "Automated email reminders and updates",
      "Interactive venue maps and seating selection",
      "Organizer analytics dashboard"
    ],
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/jeevan-m-21/EventSphere",
    demoUrl: "",
    preview: eventsphereHome,
    images: [eventsphereDashboard, eventsphereRole]
  },
  {
    id: "voting-system",
    title: "CampusVote",
    shortDescription: "A blockchain-inspired decentralized and secure voting application.",
    fullDescription: "The Secure Voting System addresses the critical need for transparency, immutability, and security in digital elections. Utilizing cryptographic principles, it ensures that every vote is verifiably counted without compromising voter anonymity.",
    problem: "Current digital voting solutions often face skepticism regarding data integrity, potential tampering by central authorities, and lack of end-to-end verifiability.",
    solution: "By leveraging a distributed architecture and cryptographic hashing, this system creates an immutable ledger of votes. Once cast, a vote cannot be altered or deleted, ensuring complete trust in the election results.",
    features: [
      "End-to-end encrypted vote casting",
      "Immutable vote logging and verification",
      "Real-time, transparent result tallying",
      "Voter authentication and identity verification",
      "Admin panel for election creation and monitoring"
    ],
    technologies: ["Flask", "MySQL", "HTML/CSS", "JavaScript", "AWS EC2"],
    githubUrl: "https://github.com/jeevan-m-21/Campus-Vote",
    demoUrl: "",
    preview: campusvoteHome,
    images: [campusvoteDashboard, campusvoteResults]
  }
];

