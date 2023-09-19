import AppContainer from "../../sharable-components/AppContainer";
import ListItem from "./components/ListItem";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const profile = useSelector((state) => state.profile);

  return (
    <AppContainer>
        <div className=" sm:px-0">
          <h3 className="text-2xl font-semibold leading-7 text-gray-900 mb-4">
            Profile
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Complete Your Profile, Elevate Your Experience: With Personalized
            Highlights and Smart Autofill, We Are Here to Assist You Better!
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100 overflow-auto">
          <dl className="divide-y divide-gray-100">
            {Object.keys(profile).map((key) => (
              <ListItem key={key} profile={profile[key]} />
            ))}
          </dl>
        </div>
    </AppContainer>
  );
}
