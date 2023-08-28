export default function AuthFormContainer(props) {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="bg-white/60 px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <form className="space-y-6" action="#" method="POST">
          {props.children}
        </form>
      </div>
      {props.footer}
    </div>
  );
}
