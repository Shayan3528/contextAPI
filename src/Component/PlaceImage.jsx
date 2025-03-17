import { useContext } from "react";
import { ImageSizeContext } from "../ContextAPi/LevelContext";
export default function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={place.imageId}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
