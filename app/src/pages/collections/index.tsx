import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COLLECTIONS_URL } from '../../config/api';

function Collections() {
    const [collections, setCollections] = useState([]);
    function loadCollections(): void {
        fetch(COLLECTIONS_URL)
            .then((res) => res.json())
            .then(res => setCollections(res.items))
    }

    useEffect(() => {
        loadCollections();
    });

    return <div>
        <h2>Collections</h2>
        <div className="add-button-row">
            <Link className="btn btn-success" to='/create-collection'>Create</Link>
        </div>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {collections.map(
                    (item: any) => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                            <Link to={`/collections/${item.id}/items`}>
                                Show items
                            </Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>;
}

export default Collections;