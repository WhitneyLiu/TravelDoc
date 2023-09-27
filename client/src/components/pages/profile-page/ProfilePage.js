import AppContainer from "../../sharable-components/AppContainer";
import ListItem from "./components/ListItem";
import { fetchProfileAPI } from "../../../redux/reducer/profileReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProfilePage() {
  //console.log("ProfilePage rendering");
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  //console.log("Original Profile:", profile);
  const session = useSelector((state) => state.authentication.session);
  const userEmail = session ? session.email : "";

  useEffect(() => {
    dispatch(fetchProfileAPI())
      .then(() => {
        console.log("Profile fetched successfully");
      })
      .catch((error) => {
        console.error("Failed to fetch profile:", error);
      });
  }, [dispatch]);

  // Merge email into profile object
  const { user_email, ...restOfProfile } = profile;
  const mergedProfile = {
    user_email: {
      key: "user_email",
      title: "Email Address",
      value: userEmail,
      isEditable: false,
    },
    ...restOfProfile,
  };

  //console.log("Session:", session);
  //console.log("User Email:", userEmail);
  //console.log("Merged Profile:", mergedProfile);

  // Check for errors first
  if (profile.error) {
    return <div>Error: {profile.error}</div>;
  }

  return (
    <AppContainer>
      <div className="sm:px-0">
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
          {Object.keys(mergedProfile).map((key) => (
            <ListItem key={key} profile={mergedProfile[key]} />
          ))}
        </dl>
      </div>
    </AppContainer>
  );
}
