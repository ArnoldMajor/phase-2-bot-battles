function BotCard({ bot, onEnlist, onRelease, onDischarge, showEnlist }) {
    return (
        <div className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
            <h3 className="bot-name">{bot.name}</h3>
            <p className="bot-class">Class: <span>{bot.bot_class}</span></p>
            <p className="bot-stats">❤️ {bot.health} ⚔️ {bot.damage} 🛡️ {bot.armor}</p>

            <div className="bot-actions">
                {showEnlist && (
                    <button onClick={() => onEnlist(bot)} className="button main">Enlist</button>
                )}

                {!showEnlist && (
                    <button onClick={() => onRelease(bot.id)} className="button main">Release</button>
                )}

                <button
                    className="button discharge"
                    onClick={() => onDischarge(bot.id)}
                >
                    x
                </button>
            </div>
        </div >
    );
}

export default BotCard;