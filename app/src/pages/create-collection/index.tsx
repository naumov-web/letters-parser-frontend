import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { COLLECTIONS_URL } from '../../config/api';

function CreateCollection() {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    function save() {
        fetch(
            COLLECTIONS_URL,
            {
                method: 'post',
                body: JSON.stringify({ name }),
                headers: {
                    "Content-Type": "application/json",
                }
            }
        ).then(() => {
            navigate('/');
        });
    }

    return <div>
        <h2>Create collection</h2>
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
                <button type="button" className="btn btn-success" onClick={save}>
                    Save
                </button>
            </div>
        </form>
    </div>;
}

export default CreateCollection;