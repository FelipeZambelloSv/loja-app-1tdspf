import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (<>
            <h1>Home</h1>

            <div>
              <h2>MEUS PRODUTOS</h2>
              <ul>
                <li><Link href="/Produtos/calca">CALÇA</Link></li>
                <li><Link href="/Produtos/meia">MEIA</Link></li>
                <li><Link href="/Produtos/camisa">CAMISA</Link></li>
                <li><Link href="/Produtos/tenis">TÊNIS</Link></li>
              </ul>
            </div> 

            <figure>
             <Image
              src="/img/home.jpg"
              alt='Travis Scott'
              width={640}
              height={360}
              />
            </figure>
         </>      
  )
}
