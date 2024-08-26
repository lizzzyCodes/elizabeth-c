// Page for Buttons
import Link from "next/link";

interface ButtonProps {
  text?: string;
  link: string;
  color?: string;
  onClick?: () => void; // State handler function passed as a prop
}
//       className={`text-center py-2 px-2 rounded-xl font-press-start text-white ${color} hover:bg-sky-700 uppercase sm:w-150 sm:h-48 md:w-266 md-h-59 lg:w-268 lg:h-59 sm:text-sm lg:size-7`}
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

// const Button: React.FC<ButtonProps> = ({ text, link, color, onClick }) => {
/* export default function Button({
  text,
  link,
  color,
  
}: {
  link: string;
  text: string;
  color: string;
}) {
  // className={`text-center py-2 px-2 rounded-xl font-press-start text-white ${color} hover:bg-sky-700 uppercase sm:w-150 sm:h-48 lg:w-268 lg:h-59 sm:text-sm lg:text-lg`}

  return (
    <Link
      onClick={onclick}
      href={link}
      className={`text-center py-2 px-2 rounded-xl font-press-start text-white ${color} hover:bg-sky-700 uppercase sm:w-150 sm:h-48 md:w-266 md-h-59 lg:w-268 lg:h-59 sm:text-sm lg:size-7`}
    >
      {" "}
      {text}{" "}
    </Link>
  );
}
*/
