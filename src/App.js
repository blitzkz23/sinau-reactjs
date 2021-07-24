import logo from './logo.svg';
import './App.css';

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

function ReviewItems() {
  // Mempersiapkan data dummy JSON
  const users = [
    {
      "id": 1,
      "picture": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "name": "Naufal",
      "review": "I feel like i can fly after using this pair of beast",
    },
    {
      "id": 2,
      "picture": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      "name": "Aldy",
      "review": "I feel like i can fly after using this pair of beast",
    },
    {
      "id": 3,
      "picture": "https://images.unsplash.com/photo-1611774119019-461b5dbd3ae8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      "name": "Pradana",
      "review": "I feel like i can fly after using this pair of beast",
    }
  ];

  const listReview = users.map((itemReview) => 
  <div className="User">
    <img src={itemReview.picture}></img>
    <div className="UserInfo">
      <h3>{itemReview.name}</h3>
      <p>{itemReview.review}</p>
    </div>
  </div>
  );
  return (
    <div className="ReviewBox">
          <h2>Reviews</h2>
          {listReview}
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
  const {isDiscount} = props;
  if (isDiscount==="yes") {
    return (
      <p>Discount 50% off</p>
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

// Ini Komponen
function ProductInfo(props) {
  const { category, name, isDiscount } = props;
  const price = "4.300.000";
  const benefits = ['Waterproof', 'High Quality Leather', 'Swift design'];
  const listBenefit = benefits.map((benefit) => 
    <li>{benefit}</li>
  );

  return (    
      <div className="Deskripsi">
        <h4 className="Category">{category}</h4>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR {price}</p>
        {/* Passing conditional rendering props */}
        <CheckDiscount isDiscount={isDiscount}/>
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
