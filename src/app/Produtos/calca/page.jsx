import Image from 'next/image';

export default function calca(){
    return(
        <div>
            <h1>CALÇA</h1>
            <div>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sit ullam ex cupiditate, temporibus nemo rerum accusamus pariatur architecto harum possimus quis porro quia impedit a fugiat, numquam laboriosam. Tempora?
                </p>
            </div>

            <figure>
             <Image
              src="/img/calca.jpg"
              alt='Camisa Travis Scott'
              width={640}
              height={360}
              />
            </figure>
        </div>
    )
}