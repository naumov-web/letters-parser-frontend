import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import CollectionsPage from './../../pages/collections';
import CreateCollectionPage from './../../pages/create-collection';
import CollectionItemsPage from './../../pages/collection-items';
import CreateCollectionItemPage from './../../pages/create-collection-item';
import CreateCollectionItemExamplePage from './../../pages/create-collection-item-example';

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <CollectionsPage />
        },
        {
            path: '/create-collection',
            element: <CreateCollectionPage />
        },
        {
            path: '/collections/:collectionId/items',
            element: <CollectionItemsPage />
        },
        {
            path: '/collections/:collectionId/create-item',
            element: <CreateCollectionItemPage />
        },
        {
            path: '/collections/:collectionId/items/:collectionItemId/create-example',
            element: <CreateCollectionItemExamplePage />
        }
    ]);

    return <div className="Page">
        <h1>Letters parser</h1>
        <RouterProvider router={router} />
    </div>;
}

export default Router;