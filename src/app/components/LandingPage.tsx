import Header from "components/Header/Header";
import Landing from "components/Landing/Landing";
import LiveNow from "components/LiveNow/LiveNow";
import './LandingPage.css';

export default function LandingPage() {
    return (
        <>
            <Header />
            <div className="landing-page-container">
                <Landing />
                <LiveNow />
            </div>
        </>
        
    )
}