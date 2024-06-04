import React, { useState, useEffect } from 'react';
import './WhyChooseUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../../assets/img/img1.jpg';
import img2 from '../../../assets/img/img2.jpg';
import img3 from '../../../assets/img/img3.jpg';

const WhyChooseUs = () => {
  const [selectedTopic, setSelectedTopic] = useState('education');
  const [selectedImages, setSelectedImages] = useState([]);
  const [transitionPhase, setTransitionPhase] = useState('fadeIn');

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    const initialTopic = getSelectedTopic(selectedTopic);
    setSelectedImages(initialTopic ? initialTopic.images : []);
  }, []);

  useEffect(() => {
    if (transitionPhase === 'fadeOut') {
      const topic = getSelectedTopic(selectedTopic);
      const timeout = setTimeout(() => {
        setSelectedImages(topic ? topic.images : []);
        setTransitionPhase('fadeIn');
      }, 500); // Allow fade-out animation to complete
      return () => clearTimeout(timeout);
    }
  }, [selectedTopic, transitionPhase]);

  const getSelectedTopic = (topicId) => {
    return topics.find((topic) => topic.id === topicId);
  };

  const handleTopicChange = (topicId) => {
    setTransitionPhase('fadeOut');
    setTimeout(() => {
      setSelectedTopic(topicId);
    }, 500); // Delay topic change to allow fade-out animation to complete
  };

  const topics = [
    {
      id: 'education',
      title: 'Best Education',
      description:
        'Our institute provides top-notch education with experienced faculty and a rich curriculum designed to foster learning and development.',
      images: [img1, img2],
    },
    {
      id: 'management',
      title: 'Top Management',
      description:
        'Our management team consists of industry leaders and academic professionals dedicated to ensuring the highest standards of education.',
      images: [img2, img3],
    },
    {
      id: 'meeting',
      title: 'Quality Meeting',
      description:
        'We host regular meetings and workshops that help in personal and professional development, ensuring our students are always ahead.',
      images: [img3, img1],
    },
  ];

  return (
    <section className="why-choose-us mt-5" id="why-choose-us">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Why Choose <span className='third-color'>E.D.I.T.S.H.</span>
        </h2>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="topic-selector" data-aos="fade-right">
              {topics.map((topic) => (
                <label key={topic.id} className="topic-option">
                  <input
                    type="radio"
                    name="topic"
                    value={topic.id}
                    checked={selectedTopic === topic.id}
                    onChange={() => handleTopicChange(topic.id)}
                  />
                  <span className="radio-custom"></span>
                  {topic.title}
                </label>
              ))}
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className={`topic-details ${transitionPhase}`} data-aos="fade-left">
              <h3>{getSelectedTopic(selectedTopic)?.title}</h3>
              <p>{getSelectedTopic(selectedTopic)?.description}</p>
              <div className="images">
                {selectedImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={getSelectedTopic(selectedTopic)?.title}
                    className={`topic-image ${transitionPhase}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
