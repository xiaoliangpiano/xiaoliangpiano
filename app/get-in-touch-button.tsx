interface GetInTouchButtonProps {
  /** Matches the page background this button sits on. */
  theme?: "light" | "dark";
  className?: string;
}

export default function GetInTouchButton({
  theme = "light",
  className = "",
}: GetInTouchButtonProps) {
  const isDark = theme === "dark";

  return (
    <a
      href="mailto:xiaoliangpiano@gmail.com"
      aria-label="Email Xiao Liang"
      className={`rounded-full px-4 py-2.5 text-[0.65rem] font-semibold tracking-widest sm:px-6 sm:py-3 sm:text-xs ${
        isDark
          ? "border border-[#8B5CF6]/30 bg-white/[0.06] text-[#EDE7F6] backdrop-blur-sm"
          : "bg-[#7757CC] text-white"
      } ${className}`}
    >
      GET IN TOUCH
    </a>
  );
}
