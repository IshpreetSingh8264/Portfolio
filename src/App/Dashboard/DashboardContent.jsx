import React, { useEffect, useRef } from 'react';

const DashboardContent = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(scrollRef.current);

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  return (
    <div className='dashboard-main-content scroll-animation' ref={scrollRef}>
      <div className='dashboard-about-main' >
        <div className='dashboard-about-heading'>
          <h2>About Me</h2>
        </div>
        <div className='about-text'>
          <h3>Hey there!</h3>
          <p>
            I'm Ishpreet Singh, a 16-year-old tech enthusiast currently
            enrolled in a Computer Science and Engineering Diploma. Coding
            and building things with technology is my jam!
          </p>
          <br></br>
          <p>
            With experience as a junior full stack web developer at
            Cognito Blocks, I'm passionate about transforming ideas into
            user-friendly and engaging web experiences. ️
          </p>
          <br></br>
          <p>
            My journey in tech is an ongoing exploration fueled by
            constant learning and a drive to push boundaries. I'm eager
            to leverage my skills to create exceptional digital
            solutions.
          </p>
          <br></br>
          <p>
            Let's build something awesome together! Check out my
            portfolio and feel free to connect if you have a project in
            mind, or just want to chat. I'm always up for new challenges
            and contributing to the exciting world of web development!
          </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardContent
