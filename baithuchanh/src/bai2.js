import React, {useState} from "react";
function ColorBox({color}) {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: color,
        marginTop: 10,
        border: "1px solid black",
      }}
    ></div>
  );
}

function ColorPicker() {
  const [color, setColor] = useState("white");

  return (
    <div>
      <h2>Bài 2: Color Picker</h2>
      <button onClick={() => setColor("red")}>Đỏ</button>
      <button onClick={() => setColor("green")}>Xanh</button>
      <button onClick={() => setColor("yellow")}>Vàng</button>
      <ColorBox color={color} />
    </div>
  );
}

export default ColorPicker;
