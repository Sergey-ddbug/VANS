import React from 'react';
import { Image } from 'cloudinary-react';

export default function CloudinaryImage({ publicId, crop, width, }) {

  return (
    <Image
      publicId={publicId}
      width={width}
      crop={crop}
      cloudName="dglreaoao"
    />
  )
}