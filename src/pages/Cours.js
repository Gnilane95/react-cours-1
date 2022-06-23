import React from 'react'
import Cardcours from "../components/Cardcours";

export default function Cours() {
  const datas = [
    {
      title: "Emily",
      src: "nyc-square.png",
      id: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, eveniet",
      lien: "Go somewhere",
    },
    {
      title: "Elon",
      src: "Elon_Musk_Royal_Society_(crop2).jpg",
      id: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, eveniet",
      lien: "Go somewhere",
    },
    {
      title: "Steve",
      src: "steve.jpg",
      id: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, eveniet",
      lien: "Go somewhere",
    },
  ];
  return (
    <div className='p-24'>
      <div className="grid grid-cols-4">
        {datas.map ((data)=>{
            return <Cardcours title = {data.title} src={data.src} description={data.description} lien={data.lien} key={data.id} />;
        }
        )}
      </div>
    </div>
  );
}
