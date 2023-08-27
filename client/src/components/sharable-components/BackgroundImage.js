import backgroundImage from '../../images/background.jpg'

export default function BackgroundImage({ className, position = 'left' }) {
  const backgroundClassName = `absolute inset-0 overflow-hidden bg-indigo-50 ${className}`;
  const positionClass =
    position === 'left'
      ? 'left-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]'
      : 'left-full -translate-x-1/2 sm:left-1/2 sm:translate-x-[-20%] sm:translate-y-[-15%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-x-[27%] xl:translate-y-[-8%]';
  
  return (
    <div className={backgroundClassName}>
      <div
        className={`absolute top-0 ${positionClass}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: '918px',
          height: '1495px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
    </div>
  );
}