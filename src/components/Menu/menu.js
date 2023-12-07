import "./menu.css";

function Menu() {
  const options = ["Categoria", "Favoritos", "Minha Estante"];

  return (
    <ul className="menu">
      {options.map((option) => (
        <li className="optns">
          <a href="#">{option}</a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
