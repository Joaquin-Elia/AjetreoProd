import { useContext } from "react";
import BeatsContext from "../../context/BeatsContext";
import { CartContext } from "../../context/CartContext";

export const Dropdown = ({beatsFiles}) => {
    const value = useContext(CartContext);
    const [license, setLicense] = value.license;


  return (
    <div className='dropdown-container'>
        <select>
            {beatsFiles.map(({id, license}) => 
                <option                     
                    key={id}
                    onClick={() => {setLicense(license)}} 
                    className="dropdown-item"
                >
                    {license}
                </option>
            )}
        </select>
    </div>
  )
}
