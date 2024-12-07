import Banner from "../components/Banner";
import LatestVisas from "../components/LatestVisas";
import OurOfferings from "../components/Ourofferings";
import Statistics from "../components/Statistics";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestVisas></LatestVisas>
            <Statistics></Statistics>
            <OurOfferings></OurOfferings>
        </div>
    );
};

export default HomePage;