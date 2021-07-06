import React from 'react';
import { Image } from 'cloudinary-react';
import API from '../lib/API';
import { useStoreContext } from '../store/store';
import { SET_IMG_ID } from '../store/actions';

export default function CloudinaryImage({ publicId, crop, width, state, dispatch }) {

  function deleteProfileImg() {
    const confirmation = window.confirm("Are you sure?");

    if (confirmation) {
      API.Images.deleteProfilePic({publicId: publicId});
      
      dispatch({ type: SET_IMG_ID, profileImgPublicId: null });
    }
  }

  return (
    <>
      <Image
        publicId={publicId}
        width={width}
        crop={crop}
        cloudName="dglreaoao"
      />
      <button>Edit</button>
      <button onClick={deleteProfileImg}>Delete</button>
    </>
  )
}