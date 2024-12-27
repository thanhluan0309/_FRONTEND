import Header from "../../component/Header/Header";
import Transfer from "../../component/Transfer/Transfer";
import Matches from "../../component/Matches/Matches";
const Profile = ({ statePlayerInfo, stateMatches }) => {
  return (
    <div className="flex flex-col w-full gap-8">
      <Header statePlayerInfo={statePlayerInfo}></Header>
      <Transfer></Transfer>
      <Matches stateMatches={stateMatches}></Matches>
    </div>
  );
};
export default Profile;
