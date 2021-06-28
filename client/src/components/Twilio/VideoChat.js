import React, { useState, useCallback, useEffect } from "react";
import Room from "./Room";

const VideoChat = ({ roomName, room, handleLogout }) => {

  let render;
  if (room) {
    render = (
      <Room roomName={roomName} room={room} handleLogout={handleLogout} />
    );
  } else {
    render = (
      <>
      </>
    );
  }
  return render;
};

export default VideoChat;
