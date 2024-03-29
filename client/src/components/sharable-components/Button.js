export default function Button({ className, href, ...props }) {
  const buttonClassName = `inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 ${className}`

  if (typeof href === 'undefined') {
    return <button className={buttonClassName} {...props} />
  } else {
    return (
      <a href={href} className={buttonClassName} {...props}>
        {props.children}
      </a>
    )
  }
}
