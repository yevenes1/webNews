import imgArticle from '../assets/images/image-retro-pcs.jpg'

export const Article = ({img, number, title, text}) => {
  return (
    <article className='flex h-[162px] md:w-[343px] md:flex-grow'>
        <div className='w-[100px] flex-none'>
            <img src={img} alt="Imagenes referenciales" />
        </div>
        <div className='pl-6 '>
            <p className='text-GrayishBlue text-3xl mb-[12px] font-bold'>{number}</p>
            <h2 className='font-bold mb-[10px] hover:text-SoftOrange cursor-pointer'>{title}</h2>
            <p className='text-DarkGrayishBlue text-[16px]'>{text}</p>
        </div>
    </article>
  )
}

