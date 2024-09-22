import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

// Import the video
import backgroundVideo from '../videos/video1.mp4';
import test1 from '../videos/test1.mp4'
import test2 from '../videos/test2.mp4'
import test3 from '../videos/test3.mp4'

export default function AboutUs() {
  const videoRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const leaders = [
    { name: 'Dr. Jane Doe', role: 'Principal', image: 'https://static.vecteezy.com/system/resources/thumbnails/037/211/111/small_2x/ai-generated-portrait-of-pretty-female-professor-with-glasses-in-the-classroom-people-background-photo.jpg', bio: 'Dr. Jane Doe has been the principal of AMIGO College for 10 years, bringing forward a vision of global excellence in education.' },
    { name: 'Prof. John Smith', role: 'Dean of Academics', image: 'https://as2.ftcdn.net/v2/jpg/06/33/13/01/1000_F_633130190_CX9V4nFU7oInGKxb3v3adl9CRrt4syap.jpg', bio: 'Prof. John Smith oversees the academic programs at AMIGO College, ensuring high-quality education across all departments.' },
    { name: 'Dr. Emily Brown', role: 'Head of Research', image: 'https://static.vecteezy.com/system/resources/previews/035/668/677/non_2x/ai-generated-medical-school-female-professor-in-a-classroom-smiling-and-smiling-free-photo.jpg', bio: 'Dr. Emily Brown leads groundbreaking research initiatives, fostering innovation and academic excellence at AMIGO College.' }
  ];

  const testimonials = [
    { video: test1, quote: '"AMIGO College has transformed my life! The professors and opportunities here are unmatched." - John Doe' },
    { video: test2, quote: '"The hands-on learning experience at AMIGO College prepared me for my dream career." - Jane Smith' },
    { video: test3, quote: '"The diverse community and global perspective at AMIGO College broadened my horizons." - Alex Johnson' }
  ];

  const stats = [
    { number: 1200, label: 'Alumni' },
    { number: 98, label: 'Placement Rate (%)' },
    { number: 50, label: 'Research Papers' },
    { number: 25, label: 'International Partners' }
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold mb-4"
            >
              Welcome to AMIGO College
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Shaping future leaders with a commitment to excellence in education and innovation.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Explore Our Programs
            </motion.button>
          </div>
        </div>
      </section>

      {/* About Us Section with Parallax */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{backgroundImage: "url('https://example.com/beautiful-campus.jpg')"}}></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white bg-opacity-90 max-w-4xl mx-auto p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-blue-800">About Our Institution</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            AMIGO College has been a leader in education for over 100 years, shaping the minds of tomorrow with a focus on research, innovation, and community engagement. Our commitment to excellence and our diverse, inclusive environment provide students with unparalleled opportunities for personal and professional growth.
          </p>
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">Our Leadership</h2>
          <div className="flex flex-wrap justify-center">
            {leaders.map((leader, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-1/2 md:w-1/3 p-4"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
                  <img src={leader.image} alt={leader.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                    <p className="text-gray-600 mb-4">{leader.role}</p>
                    <p className="text-gray-700">{leader.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Student Testimonials</h2>
          <div className="flex flex-wrap -mx-4">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full md:w-1/3 px-4 mb-8"
              >
                <div className="bg-blue-800 rounded-lg shadow-lg overflow-hidden">
                  <video className="w-full" controls>
                    <source src={testimonial.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-6">
                    <p className="text-lg italic">{testimonial.quote}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={ref} className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">AMIGO College by the Numbers</h2>
          <div className="flex flex-wrap -mx-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8"
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">
                    <CountUp end={stat.number} duration={2.5} />
                  </h3>
                  <p className="text-xl text-gray-600">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Join AMIGO College?</h2>
          <p className="text-xl mb-12">Take the first step towards a bright future with us.</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Apply Now
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    if (inView) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return <span ref={ref}>{count}</span>;
};

CountUp.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired
};