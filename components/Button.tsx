interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  outline?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  outline,
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 ${
        fullWidth ? "w-full" : "w-fit"
      }
      ${
        secondary
          ? "bg-white text-black border-black"
          : "bg-sky-500 text-white border-sky-500"
      }
      ${large ? "px-5 py-3 text-xl" : "px-4 py-2 text-md"}
      ${outline ? "bg-transparent border-white text-white" : ""}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
