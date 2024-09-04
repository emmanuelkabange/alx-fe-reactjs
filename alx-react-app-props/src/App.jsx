import ProfilePage from "./components/ProfilePage";
import UserProfile from "./components/UserProfile";
import UserContext from "./components/UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <div>
      <UserContext.Provider value={userData}>
        <ProfilePage userData={userData} />
      </UserContext.Provider>
      <UserProfile />
    </div>
  );
}

export default App;
