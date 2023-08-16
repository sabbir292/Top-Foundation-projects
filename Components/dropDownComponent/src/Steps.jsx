const data = [
    {
        id: 1,
        name: 'Choose location',
        url: '../src/assets/location.png'
    },
    {
        id: 2,
        name: 'Select date',
        url: '../src/assets/today.png'
    },
    {
        id: 3,
        name: 'Book car',
        url: '../src/assets/bookmark.png'
    },
]

const Steps = () => {
    return (
        <section className="spacing | grid place-items-center">
            <div className="grid place-items-center mb-10">
                <h3 className="text-md font-medium">How it works</h3>
                <h1 className="text-2xl font-bold text-center">Rent car follows {data.length} working steps</h1>
            </div>
            <div className="flex gap-8">
                {data.map(item => (
                    <div key={item.id} className="grid place-items-center">
                        <div className="p-4 border-2 border-slate-50 bg-slate-200">
                            <img className="h-8 w-8 text-white" src={item.url} alt={item.name} />
                        </div>
                        <div className="text-center py-4">
                            <h4 className="text-base font-bold">{item.name}</h4>
                            <p className="text-xs font-regular">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Steps;
