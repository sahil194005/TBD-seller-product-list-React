import React, { useContext } from "react";
import SingleProduct from "../Products/SingleProduct/SingleProduct";
import { ProductsContext } from "../../Context/ProductsContext";

const ProductsList = (props) => {
	const { products } = useContext(ProductsContext);
	return products.map((singleProd) => {
		return (
			<SingleProduct
				key={singleProd.id}
				ShoeName={singleProd.ShoeName}
				description={singleProd.description}
				price={singleProd.price}
				large={singleProd.large}
				small={singleProd.small}
				medium={singleProd.medium}
			/>
		);
	});
};

export default ProductsList;
