import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDischarge }) {
    return (
        <div className="your-army">
            <h2 className="section-title">Your Bot Army</h2>
            <div className="army-grid">
                {army.map(bot => (
                    <BotCard
                        key={bot.id}
                        bot={bot}
                        onRelease={onRelease}
                        onDischarge={onDischarge}
                        showEnlist={false}
                    />
                ))}
            </div>
        </div>
    );
}

export default YourBotArmy;