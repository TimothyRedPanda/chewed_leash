import {StaticImport} from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image'

function Photo(props: { src: string | StaticImport, alt: string }) {
    return (
        <Image
            className='object-cover aspect-1 object-right-top'
            src={props.src}
            alt={props.alt}
        />
    )
}

export default Photo;