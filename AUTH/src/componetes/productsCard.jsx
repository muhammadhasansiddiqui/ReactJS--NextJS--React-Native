const ProductsCard = ({ product }) => {
  // console.log("🚀 ~ ProductsCard ~ product:", product);

  return (
    <div className="w-full shadow p-9 lg:w-1/4 md:w-1/2">
    <a className="relative block overflow-hidden rounded h-49">
      <img
        alt="ecommerce"
        className="block object-cover object-center w-full h-50"
        src={product.thumbnail}
      />
    </a>
    <div className="mt-4">
      <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
        {product.category}
      </h3>
      <h2 className="text-lg font-medium text-gray-900 title-font">
        {product.title}
      </h2>
      <p className="mt-1">
        ${product.price}
      </p>
    </div>
  </div>
  );
};

export default ProductsCard;
