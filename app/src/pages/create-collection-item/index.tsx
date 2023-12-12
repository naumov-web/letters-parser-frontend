import { ChangeEvent, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { filterBase64 } from '../../utils/file';
import { IFile } from '../../types/file';
import { COLLECTION_ITEMS_URL } from "../../config/api";

function CreateCollectionItem() {
    const { collectionId } = useParams();
    const [name, setName] = useState('');
    const [file, setFile] = useState<IFile|null>(null);
    const navigate = useNavigate();

    function save() {
        if (collectionId) {
            fetch(
                COLLECTION_ITEMS_URL.replace('{collectionId}', collectionId.toString()),
                {
                    method: 'post',
                    body: JSON.stringify({ name, file }),
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            ).then(() => {
                navigate(`/collections/${collectionId}/items`);
            });
        }
    }

    function onChangeFile(event: ChangeEvent<HTMLInputElement>): void {
        if (event.target && event.target.files) {
            const fieldFile = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    setFile({
                        name: fieldFile.name,
                        mime: fieldFile.type,
                        content: filterBase64(reader.result.toString())
                    });
                }
            };
            reader.readAsDataURL(fieldFile);
        }
    }

    return <div>
        <h2>Create collection item</h2>
        <form action="" method="post">
            <div className="form-row">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="form-row">
                <input type="file" onChange={onChangeFile} />
            </div>
            <div className="form-row">
                <button type="button" className="btn btn-success" onClick={save}>
                    Save
                </button>
            </div>
        </form>
    </div>;
}

export default CreateCollectionItem;