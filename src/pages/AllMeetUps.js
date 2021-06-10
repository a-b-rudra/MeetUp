import MeetupList from '../pages/layout/MeetupList'
import {useState, useEffect} from 'react'


function AllMeetUps() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://project-r-bdf6f-default-rtdb.firebaseio.com/meetups.json').then((response) => {
        return response.json()}).then((data) =>{
        const meetups = []
        for (const key in data) 
        {
            const meetup = {
            id:key,
            ...data[key]
          }
          meetups.push(meetup)
        }
        setIsLoading(false)
        setLoadedMeetups(meetups)
      })
  }, [])
  

      if(isLoading){
        return <section>
          <p>Loading...</p>
        </section>
      }
    return (
            <section>
                <h1>All Meet Ups</h1>
                <MeetupList meetups={loadedMeetups} />
            </section>
    )
}

export default AllMeetUps