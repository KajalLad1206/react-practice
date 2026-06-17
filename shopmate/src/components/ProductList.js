import { useCallback, useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products");
    //console.log(products);
    //const [counter, setCounter] = useState(0);
    
    //using fetch then method
    // useEffect(() => {
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => setProducts(data));
    // }, [url]);

    // create function using async await fech using useCallback hook
    const FetchProductFn = useCallback( async() => {
        const response = await fetch(url)
        const data = await response.json()
        setProducts(data)        
        },[url])
      
    useEffect(() => {        
        FetchProductFn()
        },[FetchProductFn]
    )
        
        
    // useEffect(()=>{
    //     console.log(counter)
    // },[counter])

  return (
    <section>
       <div className="filter">
            {/* <button onClick={() => setCounter(counter + 1)}>{counter}</button> */}
            <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
            <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
        </div>
        {
            products.map((product)=>(
                <div className="card" key={product.id}>
                <p>{ product.name }</p>
                <p className="id">{product.id}</p>
                <p className="name">{product.name}</p>
                <p className="info">
                    <span>${product.price}</span>
                    <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                </p>
                </div>
            ))
        }
    </section>
  )
}
