interface StaticCardProps {
  position: "upper-card" | "lower-card";
  digit: string | number;
}

const StaticCard = ({ position, digit }: StaticCardProps) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

export default StaticCard;
