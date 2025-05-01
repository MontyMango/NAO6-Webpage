  // src/components/Team.js

// src/pages/TeamPage.js
import React, { useState } from 'react';


const peopleData = [
  {
    name: 'Le Li Kruczek',
    role: 'Computer Science Department',
    phone: '', // No phone number provided
    email: 'lkruczek@iu.edu',
    avatar: 'https://rivet.iu.edu/img/placeholder/avatar-1.webp', // Placeholder for avatar
    category: 'Faculty',
  },
  {
    name: 'Will Keeler',
    role: 'Computer Science Department',
    phone: '', // No phone number provided
    email: 'wkeeler@iu.edu',
    avatar: 'https://rivet.iu.edu/img/placeholder/avatar-2.webp', // Placeholder for avatar
    category: 'Faculty',
  },
  {
    name: 'JAC Kruczek',
    role: 'Computer Science Department',
    phone: 'Do not dare call me', // No phone number provided
    email: 'jkruczek@iu.edu',
    avatar: 'https://rivet.iu.edu/img/placeholder/avatar-6.webp', // Placeholder for avatar
    category: 'Faculty',
  },

  {
    name: 'Shawn Byers',
    role: 'Computer Science Department',
    phone: '', // No phone number provided
    email: 'shjbyers@iu.edu',
    avatar: 'https://rivet.iu.edu/img/placeholder/avatar-4.webp', // You can replace this with an actual avatar URL
    category: 'Faculty', // You can change this to the appropriate category if needed
  },
  {
    name: 'Cameron Harter',
    role: 'Computer Science Department',
    phone: '', // No phone number provided
    email: 'camharte@iu.edu',
    avatar: 'https://rivet.iu.edu/img/placeholder/avatar-8.webp', // Placeholder for avatar
    category: 'Faculty',
  },
];

const Team = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLetter, setFilterLetter] = useState('All');

  const filteredPeople = peopleData.filter(person => {
    const nameStartsWithLetter =
      filterLetter === 'All' || person.name[0].toUpperCase() === filterLetter;
    const nameMatchesQuery = person.name.toLowerCase().includes(searchQuery.toLowerCase());
    return nameMatchesQuery && nameStartsWithLetter;
  });

  return (
    <div className="team-page">

      {/* Main content */}
      <main id="main-content" className="rvt-layout__wrapper">
        <div className="rvt-bg-crimson rvt-p-tb-xl rvt-p-tb-xxl-md-up">
          <div className="rvt-container-sm rvt-prose rvt-flow rvt-text-center">
            <h1 className="rvt-color-white">List of Team Members</h1>
            <p className="rvt-ts-20 rvt-color-white">Meet the Team behind the Nao6 Robot LLM at IUSB.</p>
          </div>
        </div>

       

        {/* People List */}
        <div className="rvt-container-lg rvt-p-tb-xl">
          <ul className="rvt-row rvt-row--loose">
            {filteredPeople.map((person, index) => (
              <li key={index} className="rvt-cols-6-md rvt-cols-4-lg rvt-flex rvt-m-bottom-xxl">
                <div className="rvt-card">
                  <div className="rvt-avatar rvt-avatar--lg">
                    <img className="rvt-avatar__image" src={person.avatar} alt={person.name} />
                  </div>
                  <div className="rvt-card__body">
                    <div className="rvt-card__eyebrow">{person.category}</div>
                    <h2 className="rvt-card__title">
                      <a href="#0">{person.name}</a>
                    </h2>
                    <div className="rvt-card__content rvt-flow">
                      <p>{person.role}</p>
                    </div>
                    <div className="rvt-card__meta">
                      <div className="rvt-flex rvt-items-center">
                        <svg
                          className="rvt-color-black-400 rvt-m-right-xs"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 1h1l1.5 5L5 7c0 2 2 4 4 4l1-1.5 5 1.5v1a3 3 0 0 1-3 3C5 15 1 10 1 4a3 3 0 0 1 3-3Z" />
                        </svg>
                        <p className="rvt-m-all-none">{person.phone}</p>
                      </div>
                      <div className="rvt-flex rvt-items-center rvt-m-top-xs">
                        <svg
                          className="rvt-color-black-400 rvt-m-right-xs"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 2v12h16V2H0Zm2 2.023V4h12v.023L8 7.356 2 4.023ZM2 6.31l6 3.333 6-3.333V12H2V6.31Z" />
                        </svg>
                        <a href="#0">{person.email}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      
    </div>
  );
};

export default Team;

