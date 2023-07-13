import { useEffect } from "react";
import { Grid } from "@mui/material";
import classes from "./Images.module.scss";
import {
  fetchImages,
  fetchSearchImages,
  setPage,
  setSearchValue,
  clearSearchImages,
} from "../../redux/imageSlice";
import { useSelector, useDispatch } from "react-redux";
import ImageContainer from "../Components/ImageContainer";
import Loading from "../Components/Loading";
import Input from "../Components/Input";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
function Images() {
  const { isLoading, images, searchImages, page, searchValue } = useSelector(
    (state) => state.image
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (images.length == 0) {
      dispatch(fetchImages(page));
    }
  }, []);

  const handleSearch = (e) => {
    dispatch(setSearchValue(e.target.value));
    if (e.target.value.length == 0) {
      dispatch(clearSearchImages());
    }
    if (e.target.value.length > 3) {
      dispatch(fetchSearchImages(e.target.value));
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Input
        placeholder="search"
        value={searchValue}
        onChange={(e) => handleSearch(e)}
      />
      {/* *********with material ui********* */}
      {/* <Masonry sx={{display:"flex",alignItems:"center"}} columns={{ xs: 1, sm: 2, md: 4, }} spacing={2}>
                {images.map((image) => (
                    <ImageListItem key={image.id}>
                        <img
                            src={`${image.src.large}?w=248&fit=crop&auto=format`}
                            srcSet={`image.src.large}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={image.alt}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </Masonry> */}
      
      <div className={classes.container}>
        {searchImages.length > 1 ? (
          <ImageContainer images={searchImages} />
        ) : (
          <ImageContainer images={images} />
        )}
      </div>

      {!(searchImages.length > 1) && (
        <button
          className={classes.btn}
          onClick={() => {
            dispatch(fetchImages(page + 1));
            dispatch(setPage());
          }}
        >
          Load More
        </button>
      )}
    </>
  );
}

export default Images;
