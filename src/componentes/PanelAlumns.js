import React from 'react'
import { CiFaceSmile } from "react-icons/ci";
import styles from '../estilos/Perfil.module.css'
import styles1 from '../estilos/estilosPaneles.module.css'

function PanelAlumns() {
  return (
    <div className={styles1.panel}>
      <nav className={styles1.encabezadoPanel}>
        <div className={styles1.logoEncabezado}>
          <CiFaceSmile className={styles1.logoXXL}/>
        </div>
        <div className={styles1.encabezadoTitulos}>
          <h1>Listado de Alumnos</h1>
          <h3>Test de tipo de aprendizaje</h3>
          <h5>Antonia Alberston</h5>
        </div>
      </nav>
      <hr color='#FEDC97'/>
      <div className={styles1.contenido}>
        <input type="text" name="text" value="Carlos"/>
        <input type="text" name="text" value="Monica"/>
        <input type="text" name="text" value="Karla"/>
        <input type="text" name="text" value="Moises"/>
        <input type="text" name="text" value="Alberto"/>
        <input type="text" name="text" value="David"/>
        <input type="text" name="text" value="Michel"/>
        <input type="text" name="text" value="Carlos"/>
        <input type="text" name="text" value="Monica"/>
        <input type="text" name="text" value="Karla"/>
        <input type="text" name="text" value="Moises"/>
        <input type="text" name="text" value="Alberto"/>
        <input type="text" name="text" value="David"/>
        <input type="text" name="text" value="Michel"/>
        <input type="text" name="text" value="Carlos"/>
        <input type="text" name="text" value="Monica"/>
        <input type="text" name="text" value="Karla"/>
        <input type="text" name="text" value="Moises"/>
        <input type="text" name="text" value="Alberto"/>
        <input type="text" name="text" value="David"/>
        <input type="text" name="text" value="Michel"/>
        <input type="text" name="text" value="Carlos"/>
        <input type="text" name="text" value="Monica"/>
        <input type="text" name="text" value="Karla"/>
        <input type="text" name="text" value="Moises"/>
        <input type="text" name="text" value="Alberto"/>
        <input type="text" name="text" value="David"/>
        <input type="text" name="text" value="Michel"/>
        <input type="text" name="text" value="Carlos"/>
        <input type="text" name="text" value="Monica"/>
        <input type="text" name="text" value="Karla"/>
        <input type="text" name="text" value="Moises"/>
        <input type="text" name="text" value="Alberto"/>
        <input type="text" name="text" value="David"/>
        <input type="text" name="text" value="Michel"/>
        <input type="text" name="text" value="Carlos"/>
        <input type="text" name="text" value="Monica"/>
        <input type="text" name="text" value="Karla"/>
        <input type="text" name="text" value="Moises"/>
        <input type="text" name="text" value="Alberto"/>
        <input type="text" name="text" value="David"/>
        <input type="text" name="text" value="Michel"/>
      </div>
      
    </div>
  )
}

export default PanelAlumns