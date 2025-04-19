interface AnimatedCardProps {
  digit: string | number;
  animation: "fold" | "unfold";
}

const AnimatedCard = ({ digit, animation }: AnimatedCardProps) => {
  return (
    <div className={`flip-card ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

export default AnimatedCard;
