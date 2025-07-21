import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "small";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  className,
}: ButtonProps) {
  const baseClass = `${styles.btn} ${styles[`btn-${variant}`]} ${
    className || ""
  }`;

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
}
