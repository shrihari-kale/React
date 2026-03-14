import "./box.css";

 function Box({ size = "small", className, style, ...rest }) {
  let defaultClass = `box ${size === "small" ? "box-small" : size === "medium" ? "box-medium" : size === "large" ? "box-large" : " "}`;

  return (
    <div
      className={`box ${className} ${className ? className : ""}`}
      style={{
        ...style,
        fontSize: "italic",
      }}
      {...rest}
    >
    </div>
  );
}
export default Box;