import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";

function ItemListContainer() {
  const { categoryId } = useParams();

  const getProductsFromFirestore = () => getProducts(categoryId);

  const { data, error, isLoading } = useAsync(getProductsFromFirestore, [categoryId]);

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);

  //   getProducts(categoryId)
  //     .then((products) => {
  //       setProducts(products);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [categoryId]);

  if (isLoading) {
    return <h1 className="spinner">Loading products...</h1>;
  }

  return (
    <div className="itemListContainer">
      <ItemList products={data} />
    </div>
  );
}
export default ItemListContainer;
