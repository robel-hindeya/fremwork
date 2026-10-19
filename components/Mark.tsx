type Props = { size: number; frame?: string; core?: string; label?: string; className?: string };

/** The Fremwork mark, drawn with CSS so it stays crisp at any size. */
export default function Mark({ size, frame = "#fff", core = "#8C8C8C", label, className }: Props) {
  return (
    <div
      className={`mk ${className ?? ""}`}
      style={{ width: size, height: size, ["--f" as string]: frame, ["--c" as string]: core }}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <i className="f" />
      <i className="c" />
    </div>
  );
}
