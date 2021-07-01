import React from "react";
// const style = {
//   // backgroundColor: "#F8F8F8",
//   // borderTop: "1px solid #E7E7E7",
//   // textAlign: "center",
//   // padding: "20px",

//   left: "0",
//   bottom: "0",
//   height: "60px",
//   width: "100%",
//   zIndex: 10,
// };
// const phantom = {
//   display: "block",
//   padding: "20px",
//   height: "60px",
//   width: "100%",
//   zIndex: 10,
// };
// const mainDiv = {
//   zIndex: "-1",
//   position: "fixed",
//   left: 0,
//   bottom: 0,
//   width: "0%",
// };

const height = {
  height: "30px"
}

function Footer({ children }) {
  return (
    <div styl={height}>
      <div>© 2021 Copyright Text </div>
    </div>
    // <div style={mainDiv}>
    //   <div style={phantom} />
    //   <div style={style}>{children} Footer</div>
    // </div>
  );
}
export default Footer;
