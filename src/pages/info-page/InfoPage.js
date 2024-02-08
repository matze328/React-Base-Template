import styles from "./InfoPage.module.css";
import { useEffect, useState } from "react";
import LoadingDiv from "../../components/common/templates/loading-div";
import Checkbox from "../../components/common/buttons/checkbox";

function InfoPage() {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  function onClickStayLoggedIn() {
    setStayLoggedIn(!stayLoggedIn);
  }
       return <div className={styles.mainContainer}> 
        <div>This is my InfoPage</div>;
         <LoadingDiv />
         <Checkbox isChecked={stayLoggedIn} onClick={onClickStayLoggedIn} />
     </div>
     }
    
export default InfoPage;
