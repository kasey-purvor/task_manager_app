import Homepage from "@/components/homepage";
const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_ADDRESS;

import {useEffect, useState} from "react";
import sequenceDiagram from './../../public/sequence_diagram.jpg'

export async function getStaticProps() {
    // Get the path to the image file
    console.log(sequenceDiagram);
    // const imagePath = path.join(process.cwd(), 'public', 'my-image.jpg');
  
    // // Read the image file
    // const imageData = fs.readFileSync(imagePath);
  
    // // Encode the image data as a base64 string
    // const imageBase64 = imageData.toString('base64');
  
    // Pass the image data to the page component as a prop
    return {
      props: {
        // imageBase64,
      },
    };
  }

export default function Home() {
    useEffect(() => {
        fetch(`${backendApiUrl}/api/allTasks`);
    }, [])
    return (
        <main>
            <Homepage />
            <div className=" bg-green-200 h-auto w-auto  flex justify-center py-6 sm:px-6 rounded-3xl sm:m-2 md:m-5">
            <img src={sequenceDiagram.src} alt="Sequence Diagram"/>
            </div>
        </main>
    );
}
