import { useContext } from "react";
import Banner from "../components/Banner";
import LatestVisas from "../components/LatestVisas";
import OurOfferings from "../components/Ourofferings";
import Statistics from "../components/Statistics";
import { AuthContext } from "../provider/AuthProvider";
import OurTeam from "../components/OurTeam";

const HomePage = () => {
    const {isDarkMode} = useContext(AuthContext);

    return (
        <div className={`${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
            <Banner></Banner>
            <LatestVisas></LatestVisas>
            <Statistics></Statistics>
            <OurOfferings></OurOfferings>
            <OurTeam></OurTeam>
        </div>
    );
};

export default HomePage;