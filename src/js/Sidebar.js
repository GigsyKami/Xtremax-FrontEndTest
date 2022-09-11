import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { OffCanvasContext } from "./OffCanvasProvider";
import axios from 'axios';

export default function Sidebar() {
    const [locations, setLocations] = React.useState([])
    const [offCanvasForm, setOffCanvasForm] = React.useContext(OffCanvasContext);

    function setMenuFunc(props) {
        // this function triggered when location list on sidebar is clicked 

        // change all map data
        setOffCanvasForm({ refMapId: props.id, refMapTitle: props.title, refMapSubTitle: props.subTitle, refMapDescription: props.description, refMapAddress: props.address, refMapWebsite: props.website, refMapImg: props.img, refMapClass: '', mapWidth: '18vw' })
    };

    const Sidebar = props => {
        return <>
            <li className={"list-group-item selected-loc-" + props.id} onClick={setMenuFunc.bind(this, props)}>
                <div className='d-flex justify-content-between align-items-center'>
                    {props.title}
                </div>
            </li>
            <hr />
        </>
    }

    React.useEffect(function () {
        // fetch data from /public/dataLocation.json
        axios.get('./dataLocation.json').then(function (data) {
            setLocations(data.data)
        }).catch(function (error) {
            alert(error);
        })
    }, [])

    return (
        <div className="side-bar">
            <div className='d-flex'>
                <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action p-3 text-center active" href="#!" data-bs-toggle="collapse" data-bs-target="#sidebar-collapse" aria-expanded="false" aria-controls="sidebar-collapse">
                        <FontAwesomeIcon icon={solid('earth-asia')} className="fa-3x" />
                        <p>Browse</p>
                    </a>
                    <a className="list-group-item list-group-item-action p-3 text-center" href="#!">
                        <FontAwesomeIcon icon={solid('heart')} className="fa-3x" />
                        <p>Suggest Attraction</p>
                    </a>
                    <a className="list-group-item list-group-item-action p-3 text-center" href="#!">
                        <FontAwesomeIcon icon={solid('video')} className="fa-3x" />
                        <p>Videos</p>
                    </a>
                    <a className="list-group-item list-group-item-action p-3 text-center" href="#!">
                        <FontAwesomeIcon icon={solid('comment')} className="fa-3x" />
                        <p>Blog</p>
                    </a>
                    <a className="list-group-item list-group-item-action p-3 text-center" href="#!">
                        <FontAwesomeIcon icon={solid('circle-exclamation')} className="fa-3x" />
                        <p>About</p>
                    </a>
                </div>
                <div className="collapse show" id="sidebar-collapse">
                    <div className="px-3 py-4">
                        <ul className="list-group">
                            <li className="list-group-item my-4">
                                <div className='d-flex justify-content-between align-items-center'>
                                    Filter by favorite
                                    <FontAwesomeIcon icon={solid('caret-down')} />
                                </div>
                            </li>
                            <hr />
                            {locations.map(function (val) {
                                return <Sidebar key={val.id} id={val.id} lat={val.lat} lng={val.lng} title={val.title} subTitle={val.subtitle} description={val.description} address={val.address} website={val.website} img={val.img} />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
}