export default function Container({ className, ...props }) {
    const containerClasses = `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className || ''}`;
  
    return (
      <div className={containerClasses.trim()} {...props} />
    );
  }