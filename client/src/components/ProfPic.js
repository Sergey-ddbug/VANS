import React from "react";
import ReactDOM from "react-dom";
import API from "../lib/API";
import { useStoreContext } from '../store/store';
import { SET_IMG_ID } from '../store/actions';
import '../pages/style.css';

function ProfPic({ state, dispatch }) {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
      console.log("file here")
      sendImg(file);
    }
  };

  const sendImg = async (file) => {

    const imgData = await API.Images.sendProfilePic(file);

    console.log(imgData.data.profileImgPublicId);

    dispatch({ type: SET_IMG_ID, profileImgPublicId: imgData.data.profileImgPublicId })

  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "left"
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div
        style={{
          height: "200px",
          width: "200px",
          border: "1px dashed black"
        }}
        // onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
            position: "acsolute"
          }}
        />
      </div>
      <button onClick={() => imageUploader.current.click()}>Upload Profile Picture</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ProfPic />, rootElement);
export default ProfPic;