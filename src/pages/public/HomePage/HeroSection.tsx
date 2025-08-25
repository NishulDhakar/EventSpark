import backgroundImg from '../../../assets/hero.png';

export const HeroSection = () => {
  return (
    <div 
      className="bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${backgroundImg})` ,
                backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '60vh',

      }}
    >
      {/* Button will go here */}
    </div>
  );
};

