import { updateProfile } from "../../../../redux/reducer/profileReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function ListItem(props) {
  const { key, title, value, isEditable } = props.profile;
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  }

  const handleSave = (e) => {
    setIsEditing(false);
    console.log({ key: key, value: e.target.value });
    dispatch(updateProfile({ key: key, value: inputValue }));
  };

  return (
    <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-medium leading-6 text-gray-900">{title}</dt>
      <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {isEditing ? (
          <>
            <input
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={inputValue}
            />
          </>
        ) : (
          <span className="flex-grow">{inputValue}</span>
        )}
        <span className="ml-16 flex-shrink-0">
          {isEditable &&
            (isEditing ? (
              <>
                <button
                  type="button"
                  className="rounded-md font-medium text-blue-600 hover:text-blue-500"
                  onClick={handleSave}
                >
                  Save
                </button>
              </>
            ) : (
              <button
                type="button"
                className="rounded-md font-medium text-blue-600 hover:text-blue-500"
                onClick={() => setIsEditing(true)}
              >
                Update
              </button>
            ))}
        </span>
      </dd>
    </div>
  );
}
