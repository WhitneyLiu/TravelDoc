import { XCircleIcon } from "@heroicons/react/24/outline";

export default function Warning(props) {
  return (
    <>
      <div className="flex items-center">
        <XCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
        <span className="ml-2 text-sm font-medium text-red-400">
          {props.message}
        </span>
      </div>
    </>
  );
}
