import React from 'react'
import Folder from '../Folder/Folder'
import * as S from './styled'
import ApiClientService from '../../../services/ApiClientService'

export interface IFolder {
    name : string
}

function FolderList() {
    const [folders, setFolders] = React.useState<IFolder[]>([])

    React.useEffect(() => {
      void folderGet()
    }, [])
  
    const folderGet = React.useCallback(async () => {
      const response = await fetch('http://localhost:8000/api/my_folders/', {
        headers: {
          'Authorization' : `Bearer ${window.localStorage.getItem('access')}`
        }
      })
      const data = await response.json()
  
      setFolders(data)
    }, [])

    const [newFolder, setNewFolder] = React.useState('')
  
    const onSubmit = React.useCallback(
      async (event) => {
        event.preventDefault()
        const data = JSON.stringify({
          newFolder,
        })
  
        await fetch('http://localhost:8000/api/my_folders/', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${window.localStorage.getItem('access')}`
          },
          body: JSON.stringify({name: newFolder})
        })
      },
      [newFolder]
    )

    
    return (
        <S.FolderList>
            {folders.map((folder, index) => (
              <Folder key={index} name={folder.name}/>
            ))}
            <S.FolderAdd>
              <input
                type="text"
                name="newFolder"
                placeholder="Новая папка"
                required
                value={newFolder}
                onChange={(event) => setNewFolder(event.target.value)}
              />
              <button type="submit" onClick={onSubmit}>
                Добавить
              </button>
            </S.FolderAdd>
        </S.FolderList>
    )
}

export default FolderList