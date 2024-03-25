'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul>
        <li>University of Sydney, Australia</li>
        <li>
          Master of Information Technology and Master of Information Technology
          Management
        </li>
        <li>2021-2023</li>
        <br></br>
        <li>Monash University, Australia</li>
        <li>Graduate Cetificate of Business Information System</li>
        <li>2010-2021</li>
      </ul>
    ),
  },
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul>
        <li>Frontend Developer</li>
        <li>Company</li>
        <li>2020-2022</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('education');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, nunc non egestas luctus, odio nunc lacinia nunc, vel
            tincidunt justo libero sed sem. Sed in justo nec libero ultricies
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
