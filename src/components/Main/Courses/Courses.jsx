import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faMobileAlt, faPaintBrush, faPalette } from '@fortawesome/free-solid-svg-icons';
import { faFly, faAndroid } from '@fortawesome/free-brands-svg-icons';
import './Courses.css';

const courses = [
  {
    id: 1,
    title: 'Web Developer',
    description: 'Learn to build dynamic websites and applications with HTML, CSS, JavaScript, and modern frameworks.',
    duration: '6 months',
    icon: faCode,
    color: '#000', // Black
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    description: 'Master both front-end and back-end development to become a versatile developer.',
    duration: '9 months',
    icon: faLaptopCode,
    color: '#000', // Black
  },
  {
    id: 3,
    title: 'Mobile App Developer',
    description: 'Develop mobile applications for both Android and iOS using modern technologies.',
    duration: '7 months',
    icon: faMobileAlt,
    color: '#000', // Black
  },
  {
    id: 4,
    title: 'Flutter Developer',
    description: 'Build high-performance, cross-platform mobile apps with Flutter.',
    duration: '5 months',
    icon: faFly,
    color: '#000', // Black
  },
  {
    id: 5,
    title: 'Android & iOS Developer',
    description: 'Specialize in native Android and iOS development to create robust mobile applications.',
    duration: '8 months',
    icon: faAndroid,
    color: '#000', // Black
  },
  {
    id: 6,
    title: 'UI/UX Designer',
    description: 'Learn the principles of design and user experience to create stunning and intuitive interfaces.',
    duration: '4 months',
    icon: faPaintBrush,
    color: '#000', // Black
  },
  {
    id: 7,
    title: 'Graphics Designer',
    description: 'Master graphic design skills to create visual content for various platforms and media.',
    duration: '6 months',
    icon: faPalette,
    color: '#000', // Black
  },
];

const CourseCard = ({ course }) => (
  <motion.div
    className="course-card"
    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    whileTap={{ scale: 0.95 }}
    style={{ borderColor: course.color }}
  >
    <div className="course-header" style={{ backgroundColor: course.color }}>
      <FontAwesomeIcon icon={course.icon} className="icon" />
      <h3 className="course-title">{course.title}</h3>
    </div>
    <div className="course-details">
      <p className="course-description">{course.description}</p>
      <span className="course-duration">Duration: {course.duration}</span>
    </div>
  </motion.div>
);

const Courses = () => {
  return (
    <section className="courses-section mt-5" id="courses">
      <div className="black-cover"></div>
      <div className="container">
        <h2 className="section-title">We Trained</h2>
        <div className="courses-grid">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
