import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useAllPokemos() {
  const Api_Pokemos = useSelector(s => s.pokemons);
  const [get_All_Pokemos, Set_All_Pokemos] = useState(null)
  const [Entre, Set_Entre] = useState(false)
  useEffect(() => {

      Set_All_Pokemos(Api_Pokemos)

  }, [Api_Pokemos])
  return get_All_Pokemos
}