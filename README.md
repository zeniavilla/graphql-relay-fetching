# GraphQL: Data Fetching with Relay

## Overview

Leverage Relay to fetch GraphQL data into React components.

## Objectives

* Set up GraphQL server and use GraphQL to do some queries and mutations.
* Set up Relay and integrate GraphQL server.
* code GraphQL fragements directly inside React components, using Relay methods.

### Components

The `src` folder contains the following:
```
src/
├── __generated__
    ├── AppQuery.graphql.js
└── components/
    ├── __generated__
        ├── Friend_friend.graphql.js
        ├── Friend_viewer.graphql.js
        ├── Friends_viewer.graphql.js
        ├── FriendsList_viewer.graphql.js
    ├── Friend.js
    ├── Friends.js
    ├── FriendsList.js
├── App.js
```

#### `data.json`

This file contains seed data for __Friends__

## Component Info

#### `Friend`

This component renders the card information for each friend, which includes firstName, lastName, image, gender, email, and language.

#### `FriendsList`

This component creates an `<ul>` to render `<Friend>` components.

#### `Friends`

This component renders the navbar and `<FriendsList>` comonent.

## Resources

<p class='util--hide'>View <a href='https://www.lynda.com/GraphQL-tutorials/GraphQL-Data-Fetching-Relay/595829-2.html'>GraphQL: Data Fetching with Relay</a> on Lynda.com.</p>
