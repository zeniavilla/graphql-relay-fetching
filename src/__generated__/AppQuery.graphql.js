/**
 * @flow
 * @relayHash eab8a06493bbfa78c3d8ea55756156b0
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppQueryResponse = {|
  +viewer: ?{| |};
|};
*/


/*
query AppQuery {
  viewer {
    ...Friends_viewer
    id
  }
}

fragment Friends_viewer on User {
  id
  ...FriendsList_viewer
}

fragment FriendsList_viewer on User {
  friends {
    edges {
      node {
        id
        ...Friend_friend
      }
    }
  }
  id
  ...Friend_viewer
}

fragment Friend_friend on Friend {
  id
  firstName
  lastName
  gender
  language
  email
  image
}

fragment Friend_viewer on User {
  id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Friends_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "FriendConnection",
            "name": "friends",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "FriendEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Friend",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "firstName",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "lastName",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "gender",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "language",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "email",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "image",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AppQuery {\n  viewer {\n    ...Friends_viewer\n    id\n  }\n}\n\nfragment Friends_viewer on User {\n  id\n  ...FriendsList_viewer\n}\n\nfragment FriendsList_viewer on User {\n  friends {\n    edges {\n      node {\n        id\n        ...Friend_friend\n      }\n    }\n  }\n  id\n  ...Friend_viewer\n}\n\nfragment Friend_friend on Friend {\n  id\n  firstName\n  lastName\n  gender\n  language\n  email\n  image\n}\n\nfragment Friend_viewer on User {\n  id\n}\n"
};

module.exports = batch;
