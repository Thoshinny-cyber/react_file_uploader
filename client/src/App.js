import FormData from "form-data";
import Axios from "axios";
import { useState } from "react";
function App() {
  const [file, setFile] = useState(null);
  const upload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("screenshot", file);
    Axios.post("https://1xfdu99kh7.execute-api.ap-south-1.amazonaws.com/prod/file-upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log("Success ", res);
    });
  };
  return (
    <div className="App">
      <input
        type="file"
        name="screenshot"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button onClick={(e) => upload(e)}>Submit</button>
    </div>
  );
}

export default App;
