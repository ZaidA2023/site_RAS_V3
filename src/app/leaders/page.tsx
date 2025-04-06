import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import {leaders, officers, teamleads} from '../components/officersData';
import Footer from '../components/footer';

const LeaderPage: React.FC = () => {
  return (
    <>
    <Navbar scrollSet = {false}/>
      <main className="mx-24 py-8 mt-20">
        <h1 className="text-5xl font-bold text-black text-center mb-8">RAS Leadership</h1>
        <h1 className="text-4xl font-bold text-black text-start mb-5">Officers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {officers.map((member, index) => (
            <div key={index} className="bg-[#e6e4d8] shadow rounded-lg p-6 text-center">
              <div className="mb-4">
              <a target="_blank" rel="noopener noreferrer" href={member.profileLink} 
                 className={member.profileLink.length < 5 ? "pointer-events-none" : ""}>
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto"
                    />
                  </a>
              </div>
              <h2 className="text-2xl text-black font-semibold">{member.name}</h2>
              <p className="text-black text-lg">{member.title}</p>
              <p className="text-[#BF5700]">
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </p>
            </div>
          ))}
        </div>
        <h1 className="text-4xl font-bold text-black text-start mb-5 mt-15">Committee Heads</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamleads.map((member, index) => (
            <div key={index} className="bg-[#e6e4d8] shadow rounded-lg p-6 text-center">
              <div className="mb-4">
              <a target="_blank" rel="noopener noreferrer" href={member.profileLink} 
                 className={member.profileLink.length < 5 ? "pointer-events-none" : ""}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="mx-auto rounded-full"
                />
              </a>
              </div>
              <h2 className="text-black text-2xl font-semibold">{member.name}</h2>
              <p className="text-black text-lg mb-2">{member.title}</p>
              <p className="text-[#BF5700]">
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </p>
            </div>
          ))}
        </div>
        <h1 className="text-4xl font-bold text-black text-start mb-5 mt-15">General Leaders</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {leaders.map((member, index) => (
        <div key={index} className="bg-[#e6e4d8] shadow rounded-lg p-6">
        <div className="flex items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={member.profileLink}
            className={member.profileLink.length < 5 ? "pointer-events-none" : ""}
          >
            <Image
              src={member.photo}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full"
            />
          </a>
          <div className="ml-4 w-1/2">
            <h2 className="text-black text-center text-2xl font-semibold">{member.name}</h2>
            <p className="text-[#BF5700] text-center text-xl">
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </p>
          </div>
          </div>
        </div>
        ))}
      </div>
      </main>
    <Footer/>
    </>
  );
};

export default LeaderPage;
