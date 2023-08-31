import included from '../src/assets/includedbw.png'

const Service2 = () => {
  return (
    <section className='spacing bg-orange-500'>
        <div className="grid place-items-center mb-10 md:mb-24">
                <h3 className="text-md font-medium text-center md:text-start">Best services</h3>
                <h1 className="text-2xl font-bold text-center md:text-start">Get the best possible deal in the Marcket</h1>
        </div>
        <img className='p-6' src={included} alt="" />
    </section>
  )
}

export default Service2
