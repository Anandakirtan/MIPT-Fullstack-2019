import React from 'react'
import Folder from './Folder'
import './FolderList.css'

function FolderList() {
    return (
        <ul className="folder_list">
            <Folder name='Frontend'/>
            <Folder name='Backendend'/>
            <Folder name='Murders'/>
        </ul>
    )
}

export default FolderList