import { useContext } from "react"
import ThemeContext from "./ThemeContext";

export default function Button() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return <span>test</span>
}