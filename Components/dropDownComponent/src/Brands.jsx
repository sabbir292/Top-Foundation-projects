const carData = [
    {
      id: 1,
      brandName: 'Tesla',
      logoLink: '../src/assets/tesla.png'
    },
    {
      id: 2,
      brandName: 'Ford',
      logoLink: '../src/assets/ford.png'
    },
    {
      id: 3,
      brandName: 'Lamborghini',
      logoLink: '../src/assets/lambo.png'
    },
    {
      id: 4,
      brandName: 'Mitsubisi',
      logoLink: '../src/assets/mitsu.png'
    },
    {
      id: 5,
      brandName: 'Volkswagen',
      logoLink: '../src/assets/ww.png'
    },
    {
      id: 6,
      brandName: 'BMW',
      logoLink: '../src/assets/bmw.png'
    },
    {
      id: 7,
      brandName: 'Mercedes-Benz',
      logoLink: '../src/assets/mercedes.png'
    },
    {
      id: 8,
      brandName: 'Honda',
      logoLink: '../src/assets/honda.png'
    },
  ];
  
  
  const Brands = () => {
    return (
      <section className="grid grid-cols-4 gap-y-4 place-items-center py-8 w-full px-4 lg:flex items-center lg:justify-between md:px-[10%] lg:px-[20%] overflow-hidden md:mt-28 lg:mt-40">
        {carData.map(item => (
          <img key={item.id} src={item.logoLink} alt={item.brandName} className="p-2 h-14 w-14 opacity-[.7]" />
        ))}
      </section>
    );
  };
  
  export default Brands;
