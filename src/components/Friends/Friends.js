import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import EachFriend from '../EachFriend/EachFriend';
import "./Friends.css"

const Friends = () => {

           const [friends, setFriends] = useState([])

            const [loading,  setLoading] = useState(false);


         


           useEffect(() => {
                setLoading(true);
               fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {setFriends(json)
                setLoading(false)

                })
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
       <div>
           { loading ?
                 <div className="d-flex justify-content-center align-items-center spinner">
                   <Button variant="primary" disabled>
                        <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        Loading...
                    </Button>

                </div>
                :
                 <div className="friends-container">
                    {friend}
                </div>
           }
       </div>
    );
};

export default Friends;