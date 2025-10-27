"use client";

import React, { useRef, useState } from 'react';
import Box from '@/components/ui/Box'
import ScrollBar from '@/components/ui/ScrollBar'
import Tabs from '@/components/ui/Tabs'

const AboutSection = () => {
  const containerRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [tab, setTab] = useState(1);

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollPercent = container.scrollTop / (container.scrollHeight - container.clientHeight);
    setScrollTop(scrollPercent);
  };

  return (
    <div className='relative  w-[720px] h-[316px] px-[59px] py-4 bg-[#363C43] opacity-100 rounded-[18.89px] 
    shadow-[5.67px_5.67px_3.78px_0px_#00000066]'>
        <Tabs tab={tab} setTab={setTab} />
        <div ref={containerRef}
        onScroll={handleScroll}
        className='w-[611px] h-[175px] mt-[29px] overflow-y-auto'>
            {tab === 1 && (<p className='text-xl text-[#969696] '>Hello! I’m Dave, your sales rep here from Salesforce. 
                I’ve been working at this awesome company for 3 years now.
                <br />
                <br />
                I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. 
                Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                I’ve been working at this awesome company for 3 years now.<br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eum a vero quod, obcaecati non quisquam? Placeat laborum veniam optio accusamus, distinctio doloribus quas aperiam atque nobis nihil neque rem?
                Laboriosam animi hic quia ea unde vitae, quae odio.<br/><br/> Molestias facere dolor, distinctio cumque pariatur quo expedita ea. Aut inventore laudantium reiciendis temporibus amet officiis id repellat deleniti autem ducimus!
                Voluptatibus porro similique dolore? Esse quia velit ab ipsam labore ipsum necessitatibus atque mollitia nobis, iste, quos culpa hic sed! Temporibus magnam voluptatum iusto autem minima excepturi nulla consequuntur aspernatur!
                Maiores ullam nesciunt consequuntur atque voluptate.<br/><br/> Porro tempore omnis dicta eos id excepturi autem, molestias fugiat consequatur maxime, obcaecati, rerum quaerat? Et tenetur veritatis animi corrupti magnam tempore, harum modi.
                Natus, rerum nostrum quod perspiciatis repellendus nam molestiae sit doloremque nihil aliquid? Molestiae officia neque facere sapiente deleniti minus minima, veritatis quae eligendi quidem officiis libero sunt aliquam deserunt ipsam!
                
            </p>)}
            {tab === 2 && (<p className='text-xl text-[#969696] '>
              Dave is a highly motivated professional with a strong background in project coordination and client management. 
              Over the past few years, he has worked on multiple cross-functional teams, helping streamline workflows, improve communication, and deliver high-quality results on time. 
              <br />
              Dave takes pride in his ability to adapt quickly to new challenges and technologies, often taking initiative to identify process improvements that enhance overall team efficiency. 
              <br /><br />
              His hands-on experience with both independent and collaborative projects has equipped him with a well-rounded perspective and a strong sense of accountability in the workplace.
            </p>)}
            {tab === 3 && (
              <p className='text-xl text-[#969696] '>
                Dave is an exceptional professional who consistently goes above and beyond in every project he takes on. 
                His attention to detail, problem-solving mindset, and ability to stay calm under pressure make him a valuable asset to any team. 
                Colleagues often describe him as dependable, creative, and always willing to lend a hand. <br /><br/>
                Whether it’s leading a complex task or supporting team members, Dave approaches every challenge with positivity and dedication. I highly recommend Dave for any opportunity that values commitment, innovation, and teamwork.
              </p>

            )}
        </div>
        <Box />
        <ScrollBar scrollProgress={scrollTop} />
    </div>
  )
}

export default AboutSection