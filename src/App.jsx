// App.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin, FaBars, FaTimes, FaInstagram, FaWhatsappSquare } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles


export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  // const [state] = useForm("xjkrjpjz");


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission (no redirect)
    
    setIsSubmitting(true); // Set submitting state

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      // Use the Formspree API endpoint to send the form data (replace with your form ID)
      const response = await fetch("https://formspree.io/f/xjkrjpjz", {
        method: "POST",
        headers: {
          "Accept": "application/json" // 👈 Prevents redirect & enables CORS
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Thanks! We'll get back to you as soon as Possible.");
        setName("");
        setEmail(""); // reset form
        setMessage("");
      } else if (result.errors) {
        toast.error(result.errors[0].message || "Error submitting form.");
      }
       else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Reset the submitting state
    }
  };



  return (
    <div className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-black-900'} min-h-screen font-sans`}
    >
      <header className={`p-6 shadow-lg sticky top-0 z-10 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition duration-300`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight hover:cursor-pointer" onClick={()=>{"/"}}>AkashWeb.dev</h1>
          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#portfolio" className="hover:text-blue-500 transition">Portfolio</a>
            <a href="#services" className="hover:text-blue-500 transition">Services</a>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#testimonials" className="hover:text-blue-500 transition">Testimonials</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
            <button onClick={() => setDarkMode(!darkMode)} className="ml-4 px-3 py-1 rounded border border-gray-400 text-xs">
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </nav>
        </div>
        {navOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center space-y-4 text-sm font-medium">
            <a href="#portfolio" className="hover:text-blue-500 transition" onClick={() => setNavOpen(false)}>Portfolio</a>
            <a href="#services" className="hover:text-blue-500 transition" onClick={() => setNavOpen(false)}>Services</a>
            <a href="#about" className="hover:text-blue-500 transition" onClick={() => setNavOpen(false)}>About</a>
            <a href="#testimonials" className="hover:text-blue-500 transition" onClick={() => setNavOpen(false)}>Testimonials</a>
            <a href="#contact" className="hover:text-blue-500 transition" onClick={() => setNavOpen(false)}>Contact</a>
            <button onClick={() => { setDarkMode(!darkMode); setNavOpen(false); }} className="px-3 py-1 rounded border border-gray-400 text-xs">
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        )}
      </header>

      <div className="fixed right-4 bottom-8 z-50">
        <a
          className="whatsapp-btn flex items-center gap-3 bg-white text-[#00ff26] p-3 rounded-full text-[20px] shadow-lg"
          href="https://wa.me/917068311385?text=Hi%20Akash!%20I%20saw%20your%20portfolio.%20Would%20love%20to%20talk." 
          target="_blank" rel="noopener noreferrer"
          aria-label="Message on WhatsApp"
        >
          <span className="whatsapp-halo" aria-hidden="true"></span>
          <span className="text-black text-sm font-semibold whatsapp-pulse">Message me</span>
          <FaWhatsappSquare className="text-3xl whatsapp-pulse" />
        </a>
      </div>

      {/* HERO */}
      <motion.section className="px-6 py-24 text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <img src="/mypic.jpeg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg" />
        <h2 className="text-5xl font-extrabold mb-4">Hi, I’m Codret <span className=''>(Akash)</span> 👋</h2>
        <p className="text-xl text-gray-500 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          Freelance Web Developer building modern, fast, responsive websites with React/Next.js & Tailwind.
        </p>
        
        {/* <div className="mb-8">
          <video controls className="mx-auto rounded-2xl shadow-2xl max-w-full w-[480px] border border-gray-300">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
        <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-medium shadow-lg">
          Let’s Work Together
        </a>
        
        <div className="flex justify-center space-x-6 mt-8 text-2xl">
          <a href="https://x.com/Codeyet_" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="https://github.com/Codret" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/akashmaurya-codret/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedin /></a>
          <a href="https://www.instagram.com/real_codret/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600"><FaInstagram /></a>
        </div>
      </motion.section>


            {/* SKILLS SECTION */}
      {/* <section className="px-6 py-20 bg-white dark:bg-gray-400 text-white"> */}
      <motion.section className="px-6 py-24 text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10 text-black">Skills & Tools</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8 items-center justify-center">
            {[
              { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
              { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
              { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
              { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
              { name: 'GitHub',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'},
              { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
              { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
              { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            ].map((skill, i) => (
              <div key={i} className="flex flex-col items-center overflow-x-auto">
                <img src={skill.src} alt={skill.name} className="w-12 h-12" />
                <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      {/* </section> */}
      </motion.section>

      {/* PROJECTS */}
      <section id="portfolio" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {[{
             id: 1,
             title: 'Scrut Automation Website',
             image: "/scrut.png",
             description: 'Scrut — A modern, security-first GRC (Governance, Risk & Compliance) platform built for cloud-native growth companies. It unifies risk observability, continuous compliance, automated evidence collection and audit readiness—helping teams move fast, stay secure and remain audit-ready at all times.',
             liveDemo: 'https://www.scrut.io/',
             codeLink: 'https://github.com/Codret/task_scrut',
            } ,{
              id: 2,
              title: 'Cloud Hybrid Network Yottabyte Defense',
              image: "/cloud1.png",
              description: 'A cybersecurity-focused platform offering advanced compliance, risk management, and vulnerability assessment solutions. The website showcases professional services like VAPT certification, ISO compliance audits ',
              liveDemo: 'https://chnydtrace.in/',
              codeLink: 'https://github.com/Codret/Digital-cloudhybrid',
            } ,{
              id: 3,
              title: 'Real Time Chat Application',
              image: "/p1.png",
              description: 'A Real-Time Chat Application is a web or mobile app that enables users to send and receive messages instantly. It uses technologies like WebSockets, Socket.IO, or Firebase to establish a live connection between clients and the server, ensuring messages appear without needing to refresh the page',
              liveDemo: 'https://chatapp-website-eight-bice-80.vercel.app/',
              codeLink: 'https://github.com/Codret/fullstack-chat-app',
             } , {
              id: 4,
              title: 'Employee Management System App',
              image: "/p2.png",
              description: 'The Employee Management System is a web-based application that allows administrators to manage employees, assign tasks, track task statuses, and monitor productivity. Built with React, it features user authentication, dynamic task assignment, and a responsive dashboard for real-time management.',
              liveDemo: 'https://employement-management-app.vercel.app',
              codeLink: 'https://github.com/Codret/employement-management-app',
             },{
              id: 5,
              title: 'Bakery Website',
              image: "/p3.png",
              description: 'The Bake House is a responsive bakery website built with React and Tailwind CSS. It features a product showcase of delicious cakes, a gallery section, and a simple shopping cart interface. Designed with a clean and modern UI, this project demonstrates component-based architecture and responsive design for an engaging user experience across devices.',
              liveDemo: 'https://bakery-website-tau.vercel.app/',
              codeLink: 'https://github.com/Codret/bakery-website',
             }].map((project, id) => (
              <motion.div key={id} className="bg-white dark:bg-gray-800 rounded-xl  overflow-hidden shadow-lg hover:shadow-xl transition" whileHover={{ scale: 1.03 }}>
                <img src={` ${project.image}`} alt={`${project.title}`} className="w-full object-cover h-48" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-amber-50">{project.title}</h4>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}.</p>
                  <div className="flex space-x-4">
                    <a href={`${project.liveDemo}`} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href={`${project.codeLink}`} className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition text-sm" target="_blank" rel="noopener noreferrer">View Code</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10 text-amber-50">What I Offer</h3>
          <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left ">
            <li className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow  text-amber-50">✅ Website Design & Development</li>
            <li className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-amber-50">✅ Landing Pages for Startups</li>
            <li className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-amber-50">✅ eCommerce Store Setup</li>
            <li className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-amber-50">✅ Speed Optimization & SEO</li>
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <img src="/mypic.jpeg" alt="Your profile" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg" />
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I’m a freelance web developer based in India, working with international clients to build beautiful, responsive, and high-performance websites. I specialize in React and Tailwind CSS, Javascript.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-6 py-20 bg-gray-50 dark:bg-gray-900 text-center">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-amber-50">What Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Lucas Andersen",
                quote: "Working with you was a fantastic experience. My website looks stunning and works flawlessly!",
                image: "https://randomuser.me/api/portraits/men/75.jpg"
              },
              {
                name: "Jane Williams",
                quote: "You delivered everything on time and exceeded expectations. Highly recommend your services!",
                image: "https://randomuser.me/api/portraits/women/65.jpg"
              },
              {
                name: "Sebastian Müller",
                quote: "Professional, responsive, and incredibly talented. I’m thrilled with the results.",
                image: "https://randomuser.me/api/portraits/men/45.jpg"
              },
              {
                name: "Emily Davis",
                quote: "From design to deployment, you handled everything beautifully. Thank you!",
                image: "https://randomuser.me/api/portraits/women/35.jpg"
              }
            ].map((testimonial, i) => (
              <motion.div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-md transition text-left" whileHover={{ scale: 1.02 }}>
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14  rounded-full mr-4 border-2 border-blue-500" />
                  <div>
                    <h5 className="text-lg text-amber-50 font-semibold">{testimonial.name}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 bg-gray-100 dark:bg-gray-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-amber-50">Let’s Connect</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">Have a project in mind? I’d love to hear about it.</p>

          <form 
          className="space-y-4 text-left max-w-md mx-auto" onSubmit={handleSubmit}
          >
            <input
             type="text"
              htmlFor="name"
              name='name' 
              id="name"
               value={name} 
               onChange={(e) => {setName(e.target.value)}}
               placeholder="Your Name" 
               className="w-full p-3 border rounded text-amber-50" required />

            <input
             type="email" 
             name='email'
             htmlFor="name"
             id="email"  
             value={email} 
             onChange={(e) => {setEmail(e.target.value)}}
             placeholder="Your Email" 
             className="w-full p-3 border rounded text-amber-50" required />

             <ValidationError 
              prefix="Email" 
              field="email"
              // errors={state.errors}
              />

            <textarea
             placeholder="Your Message" 
             name='message' value={message} 
             htmlFor="message"
             id="email"
             onChange={(e) => {setMessage(e.target.value)}}
             className="w-full p-3 border rounded text-amber-50" rows="4" required></textarea>

            <ValidationError 
              prefix="Message" 
              field="message"
              // errors={state.errors}
              />      

            <button type="submit"
            disabled={isSubmitting}
            //  disabled={state.submitting} 
             className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition font-semibold">Send Message</button>
          </form>

           {/* Toast notifications container */}
          <ToastContainer />

        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <span className="block">Email: <a href="mailto: akash45492@gmail.com" className="text-blue-500 hover:underline">akash45492@gmail.com</a></span>
        <span className="block">Phone: <a href="tel:+91 7068311385" className="text-blue-500 hover:underline">+91 7068311385</a></span>
        <span className="block mt-2">© {new Date().getFullYear()} Codret.dev — All rights reserved.</span>
      </footer>
    </div>
  );
}






