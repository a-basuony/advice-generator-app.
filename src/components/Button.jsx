import diceIcon from "/icon-dice.svg";
import { Loader } from "lucide-react";

const Button = ({ loading, fetchAdvice }) => {
  return (
    <button
      onClick={fetchAdvice}
      disabled={loading}
      className="
        absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2
        bg-accent-300 hover:shadow-[0_0_40px_hsl(150,100%,66%)]
        disabled:opacity-60
        p-5 rounded-full transition-all duration-300
        hover:scale-110
        
      "
    >
      {loading ? (
        <Loader className="w-5 h-5 animate-spin text-primary-950" />
      ) : (
        <img src={diceIcon} alt="dice icon" className="w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
