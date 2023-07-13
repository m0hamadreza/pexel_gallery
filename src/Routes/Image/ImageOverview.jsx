import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios/instance";
import classes from "./ImageOverview.module.scss";
const ImageOverview = () => {
  const [image, setImage] = useState();
  let params = useParams();
  useEffect(() => {
    axiosInstance
      .get(`https://api.pexels.com/v1/photos/${params.imageId}`)
      .then((res) => {
        setImage(res.data);
      });
  }, []);
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.left}>
          {image && (
            <div className={classes.imgContainer}>
              <img src={image.src.large} alt="" />
              <div className={classes.box}>
                <h6>{image.alt}</h6>
                <p>{image.photographer}</p>
              </div>
            </div>
          )}
        </div>
        <div className={classes.right}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem
          perferendis doloribus obcaecati dicta culpa beatae nam blanditiis
          officia, praesentium a at voluptate dolor sit molestiae ut laudantium
          rerum suscipit! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iusto aut beatae obcaecati pariatur totam et animi eum, vero
          est, hic odio atque nulla laborum labore magni id tempore voluptas
          vitae! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Facere magni pariatur natus iste commodi minima, quia animi
          reprehenderit iusto voluptatibus tenetur nostrum sed consectetur
          tempore, odit voluptatem, praesentium molestias molestiae? Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Numquam, atque?
          Aliquam, magnam aut deserunt inventore saepe quaerat assumenda rem hic
          quos et earum atque quibusdam vero fugit esse non. Laborum! Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Iure at facilis
          expedita velit veritatis cum exercitationem quis veniam blanditiis
          soluta mollitia illum esse assumenda maxime labore, deleniti et modi
          placeat?
        </div>
      </div>
      <footer className={classes.footer}>
        {image && (
          <>
            <h6>{image.alt}</h6>
            <p>{image.photographer}</p>
          </>
        )}
      </footer>
    </Fragment>
  );
};
export default ImageOverview;
