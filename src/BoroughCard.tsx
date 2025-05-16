type BoroughCardProps = {
  borough?: string;
  bgColor?: string;
};

const emojiMap: Record<string, string> = {
  Queens: "🟣",
  Brooklyn: "🟤",
  Manhattan: "⚪",
  Bronx: "🔵",
  "Staten Island": "🟢",
};

function BoroughCard({ borough = "Queens", bgColor = "lightgray" }: BoroughCardProps) {
  const cardStyle: React.CSSProperties = {
  backgroundColor: bgColor,
  padding: 20,
  margin: 10,
  borderRadius: 8,
  fontWeight: "bold",
  textAlign: "center"
};


  const emoji = emojiMap[borough] || "";

  return <div className="borough-card" style={cardStyle}>Hello from {borough}! {emoji}</div>;

}

export default BoroughCard;
