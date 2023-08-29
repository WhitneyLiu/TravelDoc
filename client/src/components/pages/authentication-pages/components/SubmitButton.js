import Button from "../../../sharable-components/Button";

export default function SubmitButton(props) {
  return (
    <div>
      <Button
        type="submit"
        className="w-full rounded-md px-3 py-1.5 text-sm leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        {props.text}
      </Button>
    </div>
  );
}
