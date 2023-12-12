import { Link, useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import {COLLECTION_ITEMS_URL } from '../../config/api';

function CollectionItems() {
    const { collectionId } = useParams();
    const [collectionItems, setCollectionItems] = useState([]);
    function loadCollectionItems() {
        if (collectionId) {
            fetch(COLLECTION_ITEMS_URL.replace('{collectionId}', collectionId.toString()))
                .then((res) => res.json())
                .then(res => setCollectionItems(res.items));
        }
    }

    useEffect(() => {
        loadCollectionItems();
    });

    return <div>
        <h2>Collection items</h2>
        <div className="add-button-row">
            <Link className="btn btn-success" to={`/collections/${collectionId}/create-item`}>Create</Link>
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
                {collectionItems.map(
                    (item: any) => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                            <Link to={`/collections/${collectionId}/items/${item.id}/create-example`}>
                                Create item example
                            </Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>;
}

export default CollectionItems;