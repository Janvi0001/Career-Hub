import React from 'react';
import profile1 from "../../assets/Team-member/khush.jpeg";
import profile2 from "../../assets/Team-member/harsh.jpg";
import profile3 from "../../assets/Team-member/jay.jpg";
import profile4 from "../../assets/Team-member/rajan.jpg";
import profile5 from "../../assets/Team-member/janvi.jpg";
import profile6 from "../../assets/Team-member/harita.jpeg";
import profile7 from "../../assets/Team-member/harita.jpeg";
import profile8 from "../../assets/Team-member/jay.jpg";

function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const teamMembers = [
  { 
    name: 'Khush Prajapati', 
    role: 'Full Stack Developer', 
    image: profile1,
    gitlab: 'https://gitlab.com/khushprajapati',
    instagram: 'https://instagram.com/khushprajapati',
    linkedin: 'https://linkedin.com/in/khushprajapati'
  },
  { 
    name: 'Harsh Akbari', 
    role: 'Full Stack Developer', 
    image: profile2,
    gitlab: 'https://gitlab.com/harshakbari',
    instagram: 'https://instagram.com/harshakbari',
    linkedin: 'https://linkedin.com/in/harshakbari'
  },
  { 
    name: 'Jay Patel', 
    role: 'Full Stack Developer', 
    image: profile3,
    gitlab: 'https://gitlab.com/jaypatel',
    instagram: 'https://instagram.com/jaypatel',
    linkedin: 'https://linkedin.com/in/jaypatel'
  },
  { 
    name: 'Rajan Ghelani', 
    role: 'Full Stack Developer', 
    image: profile4,
    gitlab: 'https://gitlab.com/rajanghelani',
    instagram: 'https://instagram.com/rajanghelani',
    linkedin: 'https://linkedin.com/in/rajanghelani'
  },
  { 
    name: 'Janvi Upadhyay', 
    role: 'Front-end Developer', 
    image: profile5,
    gitlab: 'https://gitlab.com/janviupadhyay',
    instagram: 'https://instagram.com/janviupadhyay',
    linkedin: 'https://linkedin.com/in/janviupadhyay'
  },
  { 
    name: 'Harita Gothi', 
    role: 'Front-end Developer', 
    image: profile6,
    gitlab: 'https://gitlab.com/haritagothi',
    instagram: 'https://instagram.com/haritagothi',
    linkedin: 'https://linkedin.com/in/haritagothi'
  },
  { 
    name: 'Aayushi Banugariya', 
    role: 'Front-end Developer', 
    image: profile7,
    gitlab: 'https://gitlab.com/aayushibanugariya',
    instagram: 'https://instagram.com/aayushibanugariya',
    linkedin: 'https://linkedin.com/in/aayushibanugariya'
  },
  { 
    name: 'Bhaumik Goswami', 
    role: 'Front-end Developer', 
    image: profile8,
    gitlab: 'https://gitlab.com/bhaumikgoswami',
    instagram: 'https://instagram.com/bhaumikgoswami',
    linkedin: 'https://linkedin.com/in/bhaumikgoswami'
  }
];

export default function Component() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 px-28">
      {teamMembers.map((member) => (
        <div key={member.name} className="bg-white rounded-lg shadow-md duration-700 border hover:shadow-xl">
          <div className="flex flex-col items-center justify-center p-6">
            <img className="rounded-full w-20 h-20 mb-4" src={member.image} alt={`${member.name} Avatar`} />
            <h3 className="text-lg text-gray-800 font-semibold">{member.name}</h3>
            <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
            <div className="flex items-center space-x-4 mt-4">
              <a href={member.gitlab} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                <GitlabIcon className="w-5 h-5" />
              </a>
              <a href={member.instagram} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href={member.linkedin} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}