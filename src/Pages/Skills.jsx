import React from 'react'
import StarsCanvas from '../components/Stars'
import GradientSpan from '../components/GradientSpan'
import { FaReact, FaHtml5, FaJs, FaCss3Alt, FaGitAlt, FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";



const Skills = () => {
  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <StarsCanvas />
      <div className='h-full w-[90%] flex flex-col justify-start items-center m-auto mt-24  text-[#e5e7eb] text-[50px]'>
        <GradientSpan text="About me." />
        {/* <PurpleTag  text="About Me" width="200"/> */}
        <div className='flex justify-center items-start h-full w-full mt-16'>
          <div className='w-1/2 text-justify text-xl px-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor tempore cupiditate
            debitis aliquam, distinctio nam alias, repellat dolore natus nostrum obcaecati? Fuga a
            obcaecati tenetur perspiciatis nam ipsum at.
          </div>
          <div class="grid grid-cols-3 grid-rows-3 gap-10 w-1/2 max-w-md mx-auto text-white text-center font-bold">

            <div className='flex justify-start items-center gap-2 text-[20px] font-light'>
              <FaHtml5 size={30} color="#E14E1D" />
              <span>HTML</span>
            </div>

            <div className='flex justify-start items-center gap-2 text-[20px] font-light'>
              <FaCss3Alt size={30} color="#0277BD" />
              <span>CSS</span>
            </div>

            <div className='flex justify-start items-center gap-2 text-[20px] font-light'>
              <FaJs size={30} color="#F0DB4F" />
              <span>Javacript</span>
            </div>

            <div className='flex justify-start items-center gap-2 text-[20px] font-light'>
              <FaReact size={30} color="#61DAFB" />
              <span>React</span>
            </div>

            <div class="flex justify-start items-center"> <svg viewBox="0 0 162 24" fill="none" class="h-6 text-black dark:text-white"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.668 2c-4.445 0-7.223 2.222-8.334 6.667 1.667-2.222 3.611-3.055 5.833-2.5 1.268.317 2.175 1.236 3.178 2.255C18.979 10.081 20.87 12 25 12c4.445 0 7.223-2.222 8.334-6.666-1.666 2.222-3.61 3.055-5.833 2.5-1.269-.318-2.175-1.237-3.178-2.255C22.69 3.919 20.8 2 16.668 2zM8.334 12C3.889 12 1.11 14.222 0 18.667c1.667-2.222 3.612-3.056 5.833-2.5 1.269.316 2.175 1.236 3.178 2.255C10.645 20.081 12.536 22 16.668 22c4.444 0 7.222-2.222 8.333-6.666-1.667 2.222-3.611 3.055-5.833 2.5-1.268-.317-2.175-1.238-3.177-2.255C14.356 13.92 12.463 12 8.334 12z" class="fill-sky-400"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M50 10.427h-2.908v5.63c0 1.501.985 1.477 2.909 1.383v2.276c-3.895.47-5.443-.61-5.443-3.66v-5.63H42.4V7.988h2.158v-3.15l2.534-.751v3.901H50v2.44zm11.088-2.44h2.533v11.729h-2.533v-1.689c-.892 1.243-2.276 1.994-4.105 1.994-3.19 0-5.841-2.698-5.841-6.17 0-3.494 2.65-6.169 5.84-6.169 1.83 0 3.215.75 4.106 1.97V7.988zm-3.706 9.618c2.111 0 3.706-1.572 3.706-3.754s-1.595-3.753-3.706-3.753c-2.111 0-3.706 1.572-3.706 3.753 0 2.182 1.595 3.754 3.706 3.754zM67.844 6.228c-.891 0-1.618-.75-1.618-1.619.002-.43.173-.842.476-1.145a1.612 1.612 0 012.283 0c.304.303.475.715.477 1.145 0 .868-.727 1.619-1.618 1.619zm-1.267 13.488V7.987h2.534v11.729h-2.534zm5.466 0V2.59h2.533v17.124h-2.533zM91.021 7.987h2.674l-3.683 11.729h-2.487l-2.44-7.905-2.463 7.905h-2.486L76.453 7.987h2.674l2.276 8.092 2.463-8.092h2.416l2.44 8.092 2.299-8.092zm5.817-1.759c-.892 0-1.619-.75-1.619-1.619.003-.43.174-.842.477-1.145a1.612 1.612 0 012.284 0c.303.303.475.715.477 1.145 0 .868-.727 1.619-1.619 1.619zm-1.266 13.488V7.987h2.533v11.729H95.57zm11.634-12.034c2.628 0 4.504 1.783 4.504 4.833v7.2h-2.533v-6.943c0-1.783-1.032-2.72-2.627-2.72-1.666 0-2.979.985-2.979 3.377v6.287h-2.534V7.987h2.534V9.49c.774-1.22 2.04-1.807 3.635-1.807zm16.515-4.386h2.533v16.42h-2.533v-1.69c-.891 1.244-2.275 1.994-4.105 1.994-3.19 0-5.841-2.697-5.841-6.17 0-3.494 2.651-6.168 5.841-6.168 1.83 0 3.214.75 4.105 1.97V3.296zm-3.707 14.309c2.112 0 3.707-1.572 3.707-3.754s-1.595-3.753-3.707-3.753c-2.111 0-3.706 1.572-3.706 3.753 0 2.182 1.595 3.754 3.706 3.754zm14.732 2.416c-3.542 0-6.193-2.698-6.193-6.17 0-3.494 2.651-6.169 6.193-6.169 2.299 0 4.293 1.196 5.231 3.026l-2.182 1.267c-.516-1.102-1.665-1.806-3.072-1.806-2.065 0-3.636 1.572-3.636 3.682 0 2.111 1.571 3.683 3.636 3.683 1.407 0 2.556-.727 3.119-1.806l2.182 1.243c-.985 1.853-2.979 3.05-5.278 3.05zm9.453-8.797c0 2.135 6.311.844 6.311 5.185 0 2.346-2.041 3.612-4.574 3.612-2.346 0-4.035-1.056-4.786-2.745l2.182-1.266c.375 1.055 1.313 1.689 2.604 1.689 1.126 0 1.993-.376 1.993-1.315 0-2.087-6.31-.914-6.31-5.113 0-2.205 1.9-3.589 4.293-3.589 1.924 0 3.519.892 4.34 2.44l-2.135 1.196c-.422-.915-1.243-1.337-2.205-1.337-.915 0-1.713.399-1.713 1.243zm10.815 0c0 2.135 6.31.844 6.31 5.185 0 2.346-2.041 3.612-4.575 3.612-2.345 0-4.034-1.056-4.785-2.745l2.182-1.266c.375 1.055 1.313 1.689 2.603 1.689 1.126 0 1.995-.376 1.995-1.315 0-2.087-6.31-.914-6.31-5.113 0-2.205 1.899-3.589 4.292-3.589 1.924 0 3.519.892 4.34 2.44l-2.135 1.196c-.422-.915-1.243-1.337-2.205-1.337-.915 0-1.712.399-1.712 1.243z" fill="currentColor"></path></svg></div>

            <div className='flex justify-start items-center gap-2 text-[20px] font-light'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt="Figma Logo"
                className=" w-7 h-7" />
              <span>Figma</span>
            </div>

            <div className='flex justify-start items-center gap-2 text-[20px] font-light'>
              <GrMysql size={30} color="" />
              <span>MySQL</span>
            </div>

            <div className='flex justify-start items-center gap-2 text-[20px] font-light'>
              <FaGitAlt size={30} color="#E14E1D" />
              <span>Git</span>
            </div>

            <div className='flex justify-start items-center gap-2 text-[20px] font-light'>
              <FaPhp size={30} color="#4F5B93" />
              <span>PHP</span>
            </div>




          </div>
        </div>
        {/* <img src="https://skillicons.dev/icons?i=react,tailwind,javascript,html,css,vscode,github,figma,git" /> */}
      </div>
    </div>

  )
}

export default Skills