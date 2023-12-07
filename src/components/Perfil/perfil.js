import "./perfil.css"
import perfil from "../assets/imgs/perfil.svg";
import sacola from "../assets/imgs/sacola.svg";

function Perfil(){
    const icons = [perfil, sacola];

    return(
        <div className="icons">
        {icons.map((icone) => (
          <a href="#"><img className="icons" src={icone} /></a>
        ))}
      </div>
    )
}

export default Perfil;