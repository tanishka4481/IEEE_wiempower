import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaBars, FaEnvelope, FaTimes, FaDiscord } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Events, scrollSpy } from "react-scroll";

const handleEmailClick = (e) => {
  e.preventDefault();

  const emailTo = "igdtuieee@gmail.com";
  const ccEmail = "igdtuieee@gmail.com";
  const subject = encodeURIComponent("Contact from Website");
  const body = encodeURIComponent("Hello IEEE IGDTUW Team,");

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&cc=${ccEmail}&su=${subject}&body=${body}`;
  const newWindow = window.open(gmailLink, "_blank");

  if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
    alert("It seems like the pop-up was blocked. Please allow pop-ups for this site.");
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    scrollSpy.update();
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full h-[65px] bg-[rgba(3,0,20,0.15)] backdrop-blur-[10px] flex items-center justify-between px-10 border-b border-fuchsia-700/60 shadow-[0_0_30px_rgba(192,38,211,0.4)] z-[1000]">
      <div 
        className="cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => (window.location.href = "/")}
      >
        <img 
          src="/ieee-logo.png" 
          alt="IEEE logo" 
          className="h-[55px] w-auto"
        />
      </div>

      <div className="hidden md:flex items-center justify-center gap-[30px] border border-fuchsia-700/60 rounded-[40px] bg-[rgba(3,0,20,0.4)] px-[30px] py-[10px]">
        <a 
          href="https://ieee-igdtuw.github.io/ieeeigdtuw/" 
          className="no-underline text-fuchsia-400 font-medium transition-colors duration-300 hover:text-fuchsia-300"
        >
          IEEE IGDTUW
        </a>
        <a 
          href="#about" 
          className="no-underline text-[#ccc] font-medium transition-colors duration-300 hover:text-fuchsia-400"
        >
          About
        </a>
        <a 
          href="#timeline" 
          className="no-underline text-[#ccc] font-medium transition-colors duration-300 hover:text-fuchsia-400"
        >
          Timeline
        </a>
        <a 
          href="https://wiegnite2025.devfolio.co/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="no-underline text-[#ccc] font-medium transition-colors duration-300 hover:text-fuchsia-400"
        >
          Registration
        </a>
        <a 
          href="#events" 
          className="no-underline text-[#ccc] font-medium transition-colors duration-300 hover:text-fuchsia-400"
        >
          Events
        </a>
      </div>
      <div className="hidden md:flex items-center gap-5">
        <a 
          href="https://www.linkedin.com/company/ieee-igdtuw/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white text-[1.3rem] transition-all duration-300 hover:text-fuchsia-400 hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://x.com/ieeeigdtuw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white text-[1.3rem] transition-all duration-300 hover:text-fuchsia-400 hover:scale-110"
        >
          <SiX />
        </a>
        <a 
          href="https://www.instagram.com/ieeeigdtuw/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white text-[1.3rem] transition-all duration-300 hover:text-fuchsia-400 hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://discord.gg/XSHzpr29gD" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white text-[1.3rem] transition-all duration-300 hover:text-fuchsia-400 hover:scale-110"
        >
          <FaDiscord />
        </a>
        <a 
          href="mailto:igdtuieee@gmail.com" 
          onClick={handleEmailClick}
          className="text-white text-[1.3rem] transition-all duration-300 hover:text-fuchsia-400 hover:scale-110"
        >
          <FaEnvelope />
        </a>
      </div>
      <div 
        className="md:hidden text-[1.8rem] text-white cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-[65px] left-0 w-full bg-[rgba(3,0,20,0.95)] backdrop-blur-[10px] border-b border-fuchsia-700/60 shadow-[0_0_30px_rgba(192,38,211,0.4)]">
          <div className="flex flex-col items-center gap-5 py-6">
            <a 
              href="https://ieee-igdtuw.github.io/ieeeigdtuw/" 
              className="no-underline text-fuchsia-400 font-medium transition-colors duration-300 hover:text-fuchsia-300"
            >
              IEEE IGDTUW
            </a>
            <a 
              href="#about" 
              className="no-underline text-[#ccc] font-medium transition-colors duration-300 hover:text-fuchsia-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#timeline" 
              className="no-underline text-[#ccc] font-medium transition-colors duration-300 hover:text-fuchsia-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Timeline
            </a>
            <a 
              href="https://wiegnite2025.devfolio.co/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="no-underline text-[#ccc] font-medium transition-colors duration-300 hover:text-fuchsia-400"
            >
              Registration
            </a>
            <a 
              href="#events" 
              className="no-underline text-[#ccc] font-medium transition-colors duration-300 hover:text-fuchsia-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </a>
            
            <div className="flex items-center gap-5 mt-4">
              <a 
                href="https://www.linkedin.com/company/ieee-igdtuw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-[1.3rem] transition-all duration-300 hover:text-fuchsia-400"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://x.com/ieeeigdtuw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-[1.3rem] transition-all duration-300 hover:text-fuchsia-400"
              >
                <SiX />
              </a>
              <a 
                href="https://www.instagram.com/ieeeigdtuw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-[1.3rem] transition-all duration-300 hover:text-fuchsia-400"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://discord.gg/XSHzpr29gD" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-[1.3rem] transition-all duration-300 hover:text-fuchsia-400"
              >
                <FaDiscord />
              </a>
              <a 
                href="mailto:igdtuieee@gmail.com" 
                onClick={handleEmailClick}
                className="text-white text-[1.3rem] transition-all duration-300 hover:text-fuchsia-400"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;