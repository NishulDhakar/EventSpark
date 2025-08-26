import { Card } from "../../../components/common/Card";
import card from "../../../assets/card.jpeg";
import { Button } from "../../../components/common/Button";
import { IoChevronDown } from "react-icons/io5";
import { ToggleButton } from "../../../components/common/Button/ToggleButton";
import { useState } from "react";

const categories = [
  "Coding",
  "Sports",
  "Music",
  "Art",
  "Gaming",
  "Dance",
  "Cooking",
  "Reading",
  "Writing",
  "Photography",
  "Cooking",
  "Reading",
  "Writing",
  "Photography",
];

const FeaturedEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCategories, setShowCategories] = useState(false);
  const filteredCatagories = selectedCategory
    ? categories.filter((loc) =>
        loc.toLowerCase().startsWith(selectedCategory.toLowerCase())
      )
    : categories;

  const handleJoin = () => {
    console.log("Joining the class!");
  };

  return (
    <div className="p-20">
      <div className="text-3xl font-bold">Upcoming Events</div>

      <div className="flex justify-between  mt-10">
        <div className="flex gap-4 ">
          <Button variant="outline" className="flex gap-2">
            <span>Date</span>{" "}
            <span className="text-lg mt-1">
              <IoChevronDown />
            </span>
          </Button>
          <Button variant="outline" className="flex gap-2">
            <span>Any Type</span>{" "}
            <span className="text-lg mt-1">
              <IoChevronDown />
            </span>
          </Button>
          <Button variant="outline" className="flex gap-2">
            <span>Any Distance</span>{" "}
            <span className="text-lg mt-1">
              <IoChevronDown />
            </span>
          </Button>
          <Button
            variant="outline"
            className="flex gap-2"
            onClick={() => setShowCategories(!showCategories)}
          >
            <span>Category</span>{" "}
            <span className="text-lg mt-1">
              <IoChevronDown />
            </span>
          </Button>
  {showCategories && (
            <ul className=" left-0 w-full bg-white shadow-md rounded-lg max-h-30 overflow-y-auto z-20">
              {categories.map((category, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowCategories(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left text-gray-700"
                >
                  <ul>
                    {filteredCatagories.map((category) => (
                      <li key={category}>{category}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex gap-4 text-xl">
          <span> Suggested</span>
          <ToggleButton />
        </div>
      </div>

      <div className="text-xl font-bold mt-10">Suggested Events</div>

      <div className="flex justify-between mt-10">
        <Card
          imageUrl={card}
          title="Averoft coding event"
          date="Mon, Aug 5"
          time="4:00 PM"
          location="Online"
          host="Averoft foundation"
          onJoin={handleJoin}
        />
        <Card
          imageUrl={card}
          title="Averoft coding event"
          date="Mon, Aug 5"
          time="4:00 PM"
          location="Online"
          host="Averoft foundation"
          onJoin={handleJoin}
        />
        <Card
          imageUrl={card}
          title="Averoft coding event"
          date="Mon, Aug 5"
          time="4:00 PM"
          location="Online"
          host="Averoft foundation"
          onJoin={handleJoin}
        />
        
      </div>
    </div>
  );
};

export default FeaturedEvents;
