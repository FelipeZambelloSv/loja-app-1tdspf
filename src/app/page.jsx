import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (<>
            <h1>Home</h1>

            <div>
            <figure>
             <Image
              src="/img/home.jpg"
              alt='Travis Scott'
              width={640}
              height={360}
              />
            </figure>
            </div> 
         </>      
  )
}
