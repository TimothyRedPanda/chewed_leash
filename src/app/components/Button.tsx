function Button(props : {
    text: string;
}) {
    return(
        <button className='flex flex-row items-center justify-center bg-white text-gray-900 p-4 rounded-full text-2xl hover:bg-gray-900 hover:text-white transition-all duration-500'>
            {props.text}
        </button >
    )
}

export default Button