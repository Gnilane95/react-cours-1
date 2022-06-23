import React from 'react'


export default function Cardcours({src,alt,description,title,lien}) {
    
  return (
    <div className="">
      <div className="py-5 px-11 w-80">
        <img src={src} className="rounded-t-2xl object-cover w-full h-52" alt={alt} />
        <div className="p-4 shadow-xl rounded-2xl">
          <h5 className="text-blue-500 font-black">{title}</h5>
          <p className="py-5">{description}</p>
          <a href="#" className="text-sm text-cyan-500">
            {lien}
          </a>
        </div>
      </div>
    </div>
  );
}
