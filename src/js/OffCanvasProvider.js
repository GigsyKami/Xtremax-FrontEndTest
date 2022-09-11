import React from "react";

export const OffCanvasContext = React.createContext();

export const OffCanvasProvider = props => {
    const [offCanvasForm, setOffCanvasForm] = React.useState({ refMapId: "", refMapTitle: "", refMapSubTitle: "", refMapDescription: "", refMapAddress: "", refMapWebsite: "", refMapImg: "", refMapClass: "d-none", mapWidth: '0vw' });

    React.useEffect(function () {
        const elGroupItems = document.querySelectorAll('#sidebar-collapse .list-group-item')
        elGroupItems.forEach(el => {
            el.classList.remove('active');
        });
        const elGroupItem = document.querySelector('.selected-loc-' + offCanvasForm.refMapId)
        if (elGroupItem != null) elGroupItem.classList.add('active')
        const elMapBox = document.querySelector('#map')
        if (elMapBox != null) elMapBox.style.setProperty('width', 'calc(100% - ' + offCanvasForm.mapWidth + ')')
    }, [offCanvasForm])


    return (
        <OffCanvasContext.Provider value={[offCanvasForm, setOffCanvasForm]}>
            {props.children}
        </OffCanvasContext.Provider>
    )
}