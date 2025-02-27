import React from "react";

const TechIcon = ({Icon, color,label}) => {
    return (
       <div className="flex justify-start items-center gap-2 text-[20px] font-light">
        <Icon size={30} color={color} />
        <span>{label}</span>
       </div>
    );

};

export default TechIcon;