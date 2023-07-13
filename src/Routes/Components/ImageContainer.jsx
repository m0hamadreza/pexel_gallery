import classes from "./ImageContainer.module.scss"
import { Link } from "react-router-dom";
const ImageContainer = ({ images }) => {
  return (
    images.map((image) => {
        return (
          <div
            key={image.id}
            id={image.id}
            className={classes["image-container"]}
          >
            <Link to={`/${image.id}`}>
              {" "}
              <img
                className={classes.img}
                src={image.src.large}
                alt={image.alt}
              />
            </Link>
            <div className={classes["text-container"]}>
              <h6>{image.alt}</h6>
              <p>{image.photographer}</p>
            </div>
          </div>
        );
      })
    
  );
};
export default ImageContainer;
