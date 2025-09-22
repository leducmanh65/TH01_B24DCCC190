import React, { useState } from "react";

function Todolist() {
  const [congViec, setCongViec] = useState("");
  const [danhSach, setDanhSach] = useState([]);

  const themCongViec = () => {
    if (congViec.trim() === "") return;
    setDanhSach([...danhSach, congViec]);
    setCongViec("");
  };

  const xoaCongViec = (index) => {
    setDanhSach(danhSach.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        value={congViec}
        onChange={(e) => setCongViec(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={themCongViec}>Thêm</button>
      <ul>
        {danhSach.map((cv, i) => (
          <li key={i}>
            {cv} <button onClick={() => xoaCongViec(i)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
