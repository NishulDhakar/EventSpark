import { Card } from "../../../components/common/Card"
import card1 from '../../../assets/card1.png';

const FeaturedEvents = () => {

      const handleJoin = () => {
    console.log('Joining the class!');
  };

  return (
    <div className="p-26">
       
       <div className="text-3xl font-bold">
         Upcoming Events
       </div>

       <div className="flex justify-between  mt-10">
        <div className="flex gap-4 ">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">View All</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">View All</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">View All</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">View All</button>

        </div>
        <div>
            Suggested 
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4">View All</button>
            
        </div>
       </div>

       <div className="text-xl font-bold mt-10">
         Suggested Events
       </div>   

       <div className="flex justify-between mt-10">
            <Card
      imageUrl={card1}
      title="Yoga for Beginners"
      date="Mon, Aug 5"
      time="4:00 PM IST"
      location="Online"
      host="CalmCircle Wellness"
      onJoin={handleJoin}
    />

            <Card
      imageUrl={card1}
      title="Yoga for Beginners"
      date="Mon, Aug 5"
      time="4:00 PM IST"
      location="Online"
      host="CalmCircle Wellness"
      onJoin={handleJoin}
    />
    
                <Card
      imageUrl={card1}
      title="Yoga for Beginners"
      date="Mon, Aug 5"
      time="4:00 PM IST"
      location="Online"
      host="CalmCircle Wellness"
      onJoin={handleJoin}
    />

                <Card
      imageUrl={card1}
      title="Yoga for Beginners"
      date="Mon, Aug 5"
      time="4:00 PM IST"
      location="Online"
      host="CalmCircle Wellness"
      onJoin={handleJoin}
    />
        </div> 
    </div>
  )
}

export default FeaturedEvents
