import type { CSSProperties, ReactNode } from "react";

type StickerProps = {
  children: ReactNode;
  rotate?: number;
  shape?: "square" | "circle";
  size?: number;
  opacity?: number;
  style?: CSSProperties;
};

// A small floating "sticker" — currently holds icons, but designed to hold
// images too (drop an <Image fill className="object-cover" /> inside and
// bump up `size` for theodore.net-style photo stickers).
export default function Sticker({
  children,
  rotate = 0,
  shape = "square",
  size = 30,
  opacity = 0.7,
  style,
}: StickerProps) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid currentColor",
        borderRadius: shape === "circle" ? "50%" : 8,
        transform: `rotate(${rotate}deg)`,
        opacity,
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
