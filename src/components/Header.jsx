import React from 'react'
import { Instagram, Linkedin, Github } from "lucide-react"

const Header = () => {


  return (
    <div className="fixed z-30 h-14 w-full text-md  flex justify-center items-center  ">
      <div className="flex justify-between items-center w-[90%]  bg-black/0 backdrop-blur-lg rounded-4xl py-2 px-5 shadow-lg shadow-[#2A0E61]/50">
        <a href="#"><span className="w-[143px] text-[#e5e7eb] tracking-wide font-semibold pl-4">Tiago Lourenço</span></a>

        <div className=" hover-header h-10 px-6 py-4 rounded-full text-[#e5e7eb]
      shadow-inner bg-[rgba(3,0,20,0.37)]  flex justify-center items-center gap-10 tracking-wide">
          <a className="transition-colors" href="https://www.skills.com">About me</a>
          <a className="transition-colors" href="https://www.skills.com">Skills</a>
          <a className="transition-colors" href="https://www.skills.com">Projects</a>
          <a className="transition-colors" href="/Resume.pdf" download>Resume</a>

        </div>

        <div className="flex justify-center items-center gap-4 w-[143px]">
          <a href="#">
            <Instagram size={21} color="#e5e7eb" />
          </a>
          <a href="https://www.linkedin.com/in/tiagocamposlourenço">
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