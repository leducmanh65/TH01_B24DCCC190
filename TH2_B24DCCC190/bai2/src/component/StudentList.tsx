import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
}

function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Danh sách sinh viên</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/student/${student.id}`}>
              <strong>{student.name}</strong> - {student.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
