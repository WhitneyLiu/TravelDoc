export default function AuthFooter(props) {
  const { title, text, herf } = props;
  return (
    <p className="mt-10 text-center text-sm text-gray-500">
      {title}{" "}
      <a
        href={herf}
        className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
      >
        {text}
      </a>
    </p>
  );
}
