import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { OffCanvasContext } from './OffCanvasProvider';
import React from 'react'

export default function Offcanvas() {
    // use all map data here
    const [offCanvasForm, setOffCanvasForm] = React.useContext(OffCanvasContext);

    return (<div className={"custom-offcanvas " + offCanvasForm.refMapClass}>
        <img className='w-100' src={offCanvasForm.refMapImg} alt="img" />
        <div className='title py-2 px-3 fs-4'>{offCanvasForm.refMapTitle}</div>
        <div className='detail py-3 px-3'>
            <p>
                {offCanvasForm.refMapSubTitle}
            </p>
            <p>
                {offCanvasForm.refMapDescription}
            </p>
            <p>
                <FontAwesomeIcon icon={solid('map-marker-alt')} className="pe-1 icon-map" />
                <span>{offCanvasForm.refMapAddress}</span>
            </p>
            <p>
                <FontAwesomeIcon icon={solid('earth-asia')} className="pe-1 icon-web" />
                <span>{offCanvasForm.refMapWebsite}</span>
            </p>
        </div>
    </div >)
}