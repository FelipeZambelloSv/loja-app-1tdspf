import Image from 'next/image';
export default function tenis(){
    return(
        <div>
            <h1>TÊNIS</h1>
            <div>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sit ullam ex cupiditate, temporibus nemo rerum accusamus pariatur architecto harum possimus quis porro quia impedit a fugiat, numquam laboriosam. Tempora?
                </p>
            </div>

            
            <figure>
             <Image
              src="/img/jordan.jpg"
              alt='Jordan Travis Scott'
              width={640}
              height={360}
              />
            </figure>
        </div>
    )
}