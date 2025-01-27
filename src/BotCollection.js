import BotCard from "./BotCard";

function BotCollection({ bots, onEnlist, onDischarge }) {
    return (
        <div className="bot-collection">
            <h2 className="section-title">Bot Collection</h2>
            <div className="bot-grid">
                {bots.map(bot => (
                    <BotCard
                        key={bot.id}
                        bot={bot}
                        onEnlist={() => onEnlist(bot)}
                        onDischarge={onDischarge}
                        showEnlist={true}
                    />
                ))}
            </div>
        </div>
    )

}

export default BotCollection;