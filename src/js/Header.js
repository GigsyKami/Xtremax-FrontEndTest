import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { OffCanvasContext } from "./OffCanvasProvider";
import React from 'react';

export default function Header() {
    const [offCanvasForm, setOffCanvasForm] = React.useContext(OffCanvasContext);

    function closeOffCanvas() {
        setOffCanvasForm({ refMapClass: 'd-none', mapWidth: '0vw' })
    }

    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-3">
            <b>TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE</b>
            <div className='justify-content-end'>
                <FontAwesomeIcon icon={solid('gear')} className="px-2 fa-lg" />
                <FontAwesomeIcon icon={solid('circle-question')} className="px-2 fa-lg" />
                <FontAwesomeIcon icon={solid('circle-xmark')} className="px-2 fa-lg" onClick={closeOffCanvas} />
            </div>
        </div>
    </nav>)

}