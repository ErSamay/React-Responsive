import React , {useRef} from 'react'
import Card from "./Card" 
import { motion } from "framer-motion"

export default function Forground() {
    const ref = useRef(null);

    const data = [
        {
            desc : "This is the background color of the card that will be displayed" , 
            filesize : ".9mb" , 
            close : true , 
            tag : {isOpen : false , tagTittle : "Download Now" , tagColor : "green"},
        },
        {
            desc : "This is the background color of the card that will be displayed" , 
            filesize : ".9mb" , 
            close : true , 
            tag : {isOpen : true , tagTittle : "upload" , tagColor : "blue"},
        },
        {
            desc : "This is the background color of the card that will be displayed" , 
            filesize : ".9mb" , 
            close : true , 
            tag : {isOpen : true , tagTittle : "Download Now" , tagColor : "green"},
        },
       
    ]
  return (
    <div>
             <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
                {data.map((item , index) => (
                    <Card data={item} reference={ref}/>
                ))}
             </div>
    </div>
  )
}

