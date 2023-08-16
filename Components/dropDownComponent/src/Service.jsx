import car from '../src/assets/blackjeep.png'

const servicesData = [
    {
        id: 1,
        name: 'Deals for every budget',
        url: '../src/assets/tag.png'
    },
    {
        id: 2,
        name: 'Best price garunteed',
        url: '../src/assets/bag.png'
    },
    {
        id: 3,
        name: 'Support 24/7',
        url: '../src/assets/gear.png'
    },
]


const Service = () => {
  return (
<section className="even-col gap-14 lg:gap-24 md:mt-44 relative spacing md:pl-0 lg:pl-0">
        <div 
        className={`hero-cont-2 h-full relative bg-right bg-cover bg-no-repeat min-h-[22rem]`}
        style={{ backgroundImage: `url(${car})` }}
        >
            {/* <img className='md:scale-125' src={car} alt="" /> */}
            {/* <img className=' background absolute-center h-full md:h-[150%] w-full md:w-[70%] max-h-[850px]' src="https://i.pinimg.com/236x/9a/6a/1a/9a6a1ac67514b72545ad9d71960f9d3c.jpg" alt="" /> */}
        </div>

        <div className="grid place-items-center md:place-items-start mb-10">
                <h3 className="text-md font-medium text-center md:text-start">Best services</h3>
                <h1 className="text-2xl font-bold text-center md:text-start">Get the best possible deal in the Marcket</h1>
            <div className="flex gap-8 my-12 md:flex-col md:mt-5">
                {servicesData.map(item => (
                    <div key={item.id} className="grid place-items-center md:place-items-start md:flex md:justify-start gap-4">
                        <div className="p-4 border-2 border-slate-50 bg-black">
                            <img className="h-8 w-8 text-white" src={item.url} alt={item.name} />
                        </div>
                        <div className="text-center md:text-start py-4">
                            <h4 className="text-base font-bold">{item.name}</h4>
                            <p className="text-xs font-regular">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Service
