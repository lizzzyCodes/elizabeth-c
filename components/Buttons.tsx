// Page for Buttons
import Link from "next/link";

interface ButtonProps {
  text?: string;
  link: string;
  color?: string;
  onClick?: () => void; // State handler function passed as a prop
}

const Button: React.FC<ButtonProps> = ({ text, link, color, onClick }) => {
  return (
    <Link
      onClick={onClick}
      href={link}
      className={`text-center py-2 px-2 rounded-xl font-press-start text-white ${color} hover:bg-sky-700 uppercase `}
    >
      {" "}
      {text}{" "}
    </Link>
  );
};

export default Button;
