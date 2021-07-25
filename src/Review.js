import './App.css';

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
    <div key={itemReview.id} className="User">
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

  export default ReviewItems;