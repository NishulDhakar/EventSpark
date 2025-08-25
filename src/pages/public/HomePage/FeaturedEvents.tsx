import { Card } from "../../../components/common/Card"
import card1 from '../../../assets/card1.png';
import { Button } from "../../../components/common/Button";
import { IoChevronDown } from "react-icons/io5";
import { ToggleButton } from "../../../components/common/Button/ToggleButton";

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
        <Button variant="outline" className="flex gap-2">
         <span>Date</span>  <span className="text-lg mt-1"><IoChevronDown /></span>
        </Button>
                <Button variant="outline" className="flex gap-2">
         <span>Any Type</span>  <span className="text-lg mt-1"><IoChevronDown /></span>
        </Button>
                <Button variant="outline" className="flex gap-2">
         <span>Any Distance</span>  <span className="text-lg mt-1"><IoChevronDown /></span>
        </Button>
                <Button variant="outline" className="flex gap-2">
         <span>Category</span>  <span className="text-lg mt-1"><IoChevronDown /></span>
        </Button>


        </div>

        <div className="flex gap-4 text-xl">
         <span> Suggested 
            </span>    
                <ToggleButton />
            
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
