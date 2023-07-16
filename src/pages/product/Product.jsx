import { Link } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function Product() {
    const location = useLocation();
    const movie  = location.movie;
    console.log("this"+movie);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                {
                  movie?
                  <img src= {movie.img} alt="" className="productInfoImg" />:<img src= "" alt="" className="productInfoImg" />
                  }
                  {movie?<span className="productName">{movie.title}</span>:<span className="productName">Apple Airpods</span>}
                  
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      {movie?<span className="productInfoValue">{movie._id}</span>:<span className="productInfoValue">123</span>}
                      
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre:</span>
                      {movie?<span className="productInfoValue">{movie.genre}</span>:<span className="productInfoValue">5123</span>}
                      
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">year:</span>
                      {movie?<span className="productInfoValue">{movie.year}</span>:<span className="productInfoValue">2008</span>}

                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">limit:</span>
                      {movie?<span className="productInfoValue"> {movie.limit} </span>:<span className="productInfoValue">no</span>}
                      
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Movie Title</label>
                  {movie?<input type="text" placeholder={movie.title} />:<input type="text" placeholder="" />}
                  <label>Year</label>
                  {movie?<input type="text" placeholder={movie.year} />:<input type="text" placeholder="" />}
                  <label>Genre</label>
                  {movie?<input type="text" placeholder={movie.genre} />:<input type="text" placeholder="" />}
                  <label>Limit</label>
                  {movie?<input type="text" placeholder={movie.limit} />:<input type="text" placeholder="" />}
                  <label>Trailer</label>
                  {movie?<input type="file" placeholder={movie.trailer} />:<input type="file" placeholder="" />}
                  <label>Video</label>
                  {movie?<input type="file" placeholder={movie.video} />:<input type="file" placeholder="" />}
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      {movie?<img src={movie.img} alt="" className="productUploadImg" />:<img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />}
                      
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
