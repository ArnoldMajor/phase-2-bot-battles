function BotCard({ bot, onEnlist, onRelease, onDischarge, showEnlist }) {
    return (
        <div className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <p>❤️ {bot.health} ⚔️ {bot.damage} 🛡️ {bot.armor}</p>

            <div className="bot-actions">
                {showEnlist && (
                    <button onClick={() => onEnlist(bot)}>Enlist</button>
                )}

                {!showEnlist && (
                    <button onClick={() => onRelease(bot.id)}>Release</button>
                )}

                <button
                    className="discharge-btn"
                    onClick={() => onDischarge(bot.id)}
                >
                    x
                </button>
            </div>
        </div>
    );
}

export default BotCard;