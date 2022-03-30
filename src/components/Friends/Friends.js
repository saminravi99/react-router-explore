import React, { useEffect, useState } from 'react';
import EachFriend from '../EachFriend/EachFriend';
import "./Friends.css"

const Friends = () => {

           const [friends, setFriends] = useState([])

           useEffect(() => {
               fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => setFriends(json))
           }
              , [])

              const friend = friends.map((friend) => {
                  return (
                      <EachFriend
                            key={friend.id}
                            {...friend}
                      ></EachFriend>
                  )
              })

    return (
        <div className="friends-container">
            {friend}
        </div>
    );
};

export default Friends;