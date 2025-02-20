import React from 'react'
import { Instagram, Linkedin, Github } from "lucide-react"

const Header = () => {

  const handleDownload = async () => {
    try {
      const response = await fetch('blackhole.webm');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Resume.pdf'; // Forces the download
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };
  
  
  
  return (
    <div className=" fixed z-10 text-md h-14 flex justify-center items-center w-full ">
        <div className="flex justify-between items-center w-[90%] max-w-7xl bg-black/0 backdrop-blur-lg rounded-4xl py-2 px-5">
          <a href="#"><span className="w-[143px] text-[#e5e7eb] tracking-wide font-semibold pl-4">Tiago Lourenço</span></a>

          <div className="h-10 px-6 py-4 rounded-full text-[#e5e7eb]
      shadow-inner bg-black/30 flex justify-center items-center gap-10 tracking-wide">
            <a className="hover:text-[#8a50ff] transition" href="https://www.skills.com">About me</a>
            <a className="hover:text-[#8a50ff] transition" href="https://www.skills.com">Skills</a>
            <a className="hover:text-[#8a50ff] transition" href="https://www.skills.com">Projects</a>
            {/* <a className="hover:text-[#8a50ff] transition" href="public/CVatualizado.pdf" download="Resume.pdf">Resume</a> */}
            <button onClick={handleDownload}>Download Resume</button>
      
          </div>

          <div className="flex justify-center items-center gap-4 w-[143px]">
            <a href="#">
              <Instagram size={21} color="#e5e7eb" />
            </a>
            <a href="https://www.linkedin.com/in/tiagocamposlourenço-66b5b9237">
              <Linkedin size={21} color="#e5e7eb" />
            </a>
            <a href="https://github.com/Tiagocl">
              <Github size={21} color="#e5e7eb" />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Header