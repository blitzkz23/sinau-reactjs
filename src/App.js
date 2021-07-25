import './App.css';
import ReviewItems from './Review';
import PropTypes from 'prop-types';

// Ini Komponen
function App() {

  return (
    <div>
      <div className="ParentBox">
        <div className="row1">
          <ProductPics />
          {/* Data dari props */}
          <ProductInfo name="Nike Shadow Gray-raven" category="RUNNING SHOES" isDiscount="yes"/>
        </div>
          <ReviewItems />
        
        
      </div> 
    </div> 
      
  );
}

// Ini Komponen
function ProductPics() {
  return (
      <div className="Foto">
        <img src="nike1.jpg"></img>
      </div>
  );
      
}

// Conditional rendering
function CheckDiscount(props) {
  const {isDiscount, discount} = props;
  if (isDiscount==="yes") {
    return (
      <p>Discount {discount}% off</p>
    );
  } else if (isDiscount==="coming") {
    return(
      <p>Coming soon...</p>
    );
  } 
  else {
    return (
      <p>Regular price</p>
    );
  }
}

CheckDiscount.propTypes = {
  discount: PropTypes.number
}

// Ini Komponen
function ProductInfo(props) {
  const { category, name, isDiscount, discount } = props;
  const price = "4.300.000";
  const benefits = ['Waterproof', 'High Quality Leather', 'Swift design'];
  const listBenefit = benefits.map((benefit) => 
    <li key={benefit}>{benefit}</li>
  );

  return (    
      <div className="Deskripsi">
        <h4 className="Category">{category}</h4>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR {price}</p>
        {/* Passing conditional rendering props */}
        <CheckDiscount isDiscount={isDiscount} discount={50}/>
        <p className="Info">The Jordan Delta 2 offers a fresh, fearless take on the features you want: durability, comfort and an attitude that's Jordan to the core.  We updated design lines and swapped out some components, but the idea is the same as the first Delta.The 2 still has that clashing combination of supportive and space age-like materials, with lots of different textures and heavy stitching to create a look that's both adventurous and iconic.
        </p>
        {/* Mapping items */}
        <ul>
          <li>{listBenefit}</li>
        </ul>
        {/* Onclick event dengan argumen */}
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
      </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli produk " + e);
}

export default App;
