export default function ProductItem({ name, price, description, image, tag }) {
  return (
    <li className={tag === "home" ? "meal-item-home" : "meal-item"}>
      <article>
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p
            className={
              tag === "home"
                ? "meal-item-description-home"
                : "meal-item-description"
            }
          >
            {description}
          </p>
          <p
            className={
              tag === "home" ? "meal-item-price-home" : "meal-item-price"
            }
          >{`₹${price}`}</p>
        </div>
        <p className="meal-item-actions">
          <button className="button">Add to Cart</button>
        </p>
      </article>
    </li>
  );
}
