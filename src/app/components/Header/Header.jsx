import './Header.css';
import 'components/Button/RoomButton.css';

export default function Header() {
    return (
        <div className="header">
            <div className="domain-container">
                <img src={'twitch.png'} alt="Placeholder Icon" className="domain-icon" />
                <h2 className="domain">Stream</h2>
            </div>
            <div className="header-btn-group">
                <button className="join-room-button">Join Room</button>
                <button className="room-button">Create Room</button>
            </div>
        </div>
    )
}