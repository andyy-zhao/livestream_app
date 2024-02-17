import './Landing.css';

export default function Landing() {
    return (
        <div className="landing-container">
            <div id="landing-title">
                Interactive Chat & Streaming
            </div>
            <div id="landing-image">
                <img src={'twitch_peek.jpeg'} alt="Twitch Peek" />
            </div>
        </div>
    )
}