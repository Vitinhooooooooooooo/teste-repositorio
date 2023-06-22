import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import react, {useState} from "react";

function Notas(){
const [nota1, setNota1] = useState(0);
const [nota2, setNota2] = useState(0);
const [nota3, setNota3] = useState(0);


const [media, setMedia] = useState(0)
const [situacao, setSituacao] = useState()


function calculaMedia(){
 const media = (nota1 + nota2 + nota3)  / 3;
setMedia(media);
setSituacao(media >= 6 ? "Aprovado!!" : "Reprovado!")


}

return (

<div>
<h2> Média de Notas Alunos 3B2 Lado B</h2>
<label htmlFor="nota1"> Nota1</label>



<input
id="Nota1"
type="number"
value={nota1}
onChange={(event) =>
setNota1 (Number(event.target.value))}
/><br></br>
<label htmlFor="nota2"> Nota2</label>
<input
id="Nota2"
type="number"
value={nota2}
onChange={(event) =>
setNota2 (Number(event.target.value))}
/><br></br>

<label htmlFor="nota3"> Nota3</label>
<input
id="Nota3"
type="number"
value={nota3}
onChange={(event) =>
setNota3 (Number(event.target.value))}
/>
<br></br><br></br>

<button onClick={calculaMedia}> calcula Média </button>
{media > 0 && (
  <div>
    <p>A média do: victor {media}</p>
    <p>A situação do: victor {situacao}</p>


  </div>
)}



</div>




);


}
export default Notas;

