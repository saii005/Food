import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);   // For fetching the Products
  const [search, setSearch] = useState("");      // For searching the items
  const [cart, setCart] = useState([]);          // For add to cart
  const [gocart, setgocart] = useState(false);   // For displaying the cart

  // Fetches the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setProducts(data?.recipes ?? []);
        console.log(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchProducts();
  }, []);

  // Function to remove item one by one
  const handleRemove = (indexToRemove) => {
    const cartCopy = [...cart];
    cartCopy.splice(indexToRemove, 1);
    setCart(cartCopy);
  };

  // Logic to get only the unique cuisines for the filter list
  const uniqueCuisines = [...new Set(products.map((item) => item.cuisine))];

  // Updated Filter: Checks if the search state matches the Name OR the Cuisine
  const filteredProducts = products.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase()) ||
    recipe.cuisine.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main">
      <div className="top">
        <h3>Recipes List:</h3>
        <input 
          type="text" 
          placeholder="Search recipes or cuisines..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
        
        <div className="cart-status">
          <p>Items in Cart: <strong>{cart.length}</strong></p>
          <button onClick={() => setgocart(!gocart)}>
            {gocart ? "Close Cart" : "Open Cart"}
          </button>
        </div>
      </div> 

      {gocart && (
        <div className="cart-update">
          <h4>Your Cart</h4>
          {cart.length === 0 ? <p>Cart is empty</p> : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} 
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <hr />

      <div className="filter">
        <h4>FILTER BY CUISINE</h4>
        <button onClick={() => setSearch("")}>Show All</button>
        <ul>
          {uniqueCuisines.map((cuisine) => (
            <li 
              key={cuisine} 
              onClick={() => setSearch(cuisine)}
              style={{ cursor: "pointer" }}
            >
              {cuisine}
            </li>
          ))}
        </ul>
      </div>

      <div className="recipe-grid">
        {filteredProducts.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} width="150" />
            <p><strong>{recipe.name}</strong></p>
            <p>cuisine: {recipe.cuisine} </p>
            <p>Rating: {recipe.rating} ⭐</p>
            <button onClick={() => setCart([...cart, recipe])}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;