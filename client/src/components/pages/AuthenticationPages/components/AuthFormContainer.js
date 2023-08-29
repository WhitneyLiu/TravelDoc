export default function AuthFormContainer(props) {
  const {footer, onSubmit, children} = props;
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="bg-white/60 px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <form className="space-y-6" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
      {footer}
    </div>
  );
}
