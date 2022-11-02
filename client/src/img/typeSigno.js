import iconos from "./pokemon-types-icons.png"
import pokeBall from "./PokeBall.png"
import huevo from "./Huevo.png"
const positiontype = {
  normal: "-40px -181px",
  fighting: "-294px -65px",
  flying: "-90px -123px",
  poison: "-90px -181px",
  ground: "-243px -123px",
  rock: "-192px -181px",
  bug: "-40px -65px",
  ghost: "-141px -123px",
  steel: "-243px -181px",
  fire: "-40px -123px",
  water: "-294px -181px",
  grass: "-192px -123px",
  electric:  "-192px -65px",
  psychic: "-141px -181px",
  ice: "-294px -123px",
  dragon: "-141px -65px",
  dark: "-91px -65px",
  fairy: "-243px -65px",
  unknown: "-40px -181px",
  shadow: "-40px -181px",
}





const type = {
  normal: "#a0a0a0",
  fighting: "#c30301",
  flying: "#a8ffe5",
  poison: "#d60094",
  ground: "#c1af00",
  rock: "#a86509",
  bug: "#8ac700",
  ghost: "#da55f6",
  steel: "#38506a",
  fire: "#ff1448",
  water: "#009e8a",
  grass: "#1fb900",
  electric: "#ffd903",
  psychic: "#ff4676",
  ice: "#0097cf",
  dragon: "#3519ff",
  dark: "#444",
  fairy: "#ffd1cd",
  unknown: "#000",
  shadow: "#bfc0c1",
}
//0 = verde
//55 verde agua
//100= celeste
//155 = violeta claro
//200= violeta
//230= rosa
//250 = rojo
//300= marron
const huevo_type = {
  normal: "grayscale(100%)",
  fighting: "hue-rotate(250deg)",
  flying: "hue-rotate(95deg)",
  poison: "hue-rotate(200deg)",
  ground: "hue-rotate(300deg)",
  rock: "hue-rotate(302deg)",
  bug: "hue-rotate(10deg)",
  ghost: "hue-rotate(150deg)",
  steel: "hue-rotate(155deg) grayscale(80%)",
  fire: "hue-rotate(240deg)",
  water: "hue-rotate(55deg)",
  grass: "hue-rotate(0deg)",
  electric: "hue-rotate(300deg)",
  psychic: "hue-rotate(230deg)",
  ice: "hue-rotate(100deg)",
  dragon: "hue-rotate(100deg)",
  dark: "hue-rotate(200deg) invert(100%)",
  fairy: "hue-rotate(230deg)",
  unknown: "invert(50%)",
  shadow: "grayscale(100%)",
}

export { iconos, positiontype, pokeBall, type, huevo, huevo_type }