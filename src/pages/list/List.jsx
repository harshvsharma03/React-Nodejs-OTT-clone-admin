import { Link } from "react-router-dom";
import "./list.css";
import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function List() {
    const location = useLocation();
    const list  = location.list;
    
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  {list?<span className="productName">{list.title}</span>:<span className="productName">Apple Airpods</span>}
                  
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      {list?<span className="productInfoValue">{list._id}</span>:<span className="productInfoValue">123</span>}
                      
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre:</span>
                      {list?<span className="productInfoValue">{list.genre}</span>:<span className="productInfoValue">5123</span>}    
                  </div>
                  
                  <div className="productInfoItem">
                      <span className="productInfoKey">type:</span>
                      {list?<span className="productInfoValue"> {list.type} </span>:<span className="productInfoValue">no</span>}
                      
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>List Title</label>
                  {list?<input type="text" placeholder={list.title} />:<input type="text" placeholder="" />}
                  <label>Type</label>
                  {list?<input type="text" placeholder={list.type} />:<input type="text" placeholder="" />}
                  <label>Genre</label>
                  {list?<input type="text" placeholder={list.genre} />:<input type="text" placeholder="" />}
              </div>
              <div className="productFormRight">
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
