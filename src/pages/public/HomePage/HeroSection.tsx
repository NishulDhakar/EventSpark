import { useCallback, useEffect, useState } from "react";
import Event1 from "../../../assets/Event1.jpeg";
import Event2 from "../../../assets/Event2.jpeg";
import Event3 from "../../../assets/Event3.jpeg";
import Event5 from "../../../assets/Event5.jpeg";

const eventList = [
  "Art Expo",
  "Annual Tech Conference",
  "AI Summit",
  "Book Fair",
  "Business Meetup",
  "Concert Night",
  "Dance Fest",
];

const locationList = [
  "Bhopal",
  "Delhi",
  "Mumbai",
  "Kolkata",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Ahmedabad",
  "Pune",
  "Surat",
];

export const HeroSection = () => {
  const backgroundImages = [Event1 , Event2, Event3, Event5];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchEvent, setSearchEvent] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [showEventSuggestions, setShowEventSuggestions] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);

  const slideToNextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
  }, [backgroundImages.length]);

  useEffect(() => {
    const intervalId = setInterval(slideToNextImage, 3000);
    return () => clearInterval(intervalId);
  }, [slideToNextImage]);

  const handleSearch = () => {
    console.log("Searching for:", { event: searchEvent, location: searchLocation });
  };

  const filteredEvents = searchEvent
    ? eventList.filter((event) =>
        event.toLowerCase().startsWith(searchEvent.toLowerCase())
      )
    : eventList;

  const filteredLocations = searchLocation
    ? locationList.filter((loc) =>
        loc.toLowerCase().startsWith(searchLocation.toLowerCase())
      )
    : locationList;

  return (
    <div className="relative flex items-center justify-center h-[60vh] overflow-hidden">
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-80" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Your Next Great
          <br />
          Event Starts Here
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Discover and host unforgettable experiences - all in one place
        </p>

        <div className="bg-white rounded-full p-2 flex items-center max-w-2xl mx-auto shadow-lg relative">
          <div className="flex-1 flex flex-col px-4 relative">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search events..."
                value={searchEvent}
                onChange={(e) => {
                  setSearchEvent(e.target.value);
                  setShowEventSuggestions(true);
                }}
                onFocus={() => setShowEventSuggestions(true)}
                onBlur={() =>
                  setTimeout(() => setShowEventSuggestions(false), 200)
                }
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {showEventSuggestions && filteredEvents.length > 0 && (
              <ul className="absolute top-12 left-0 w-full bg-white shadow-md rounded-lg max-h-30 overflow-y-auto z-20">
                {filteredEvents.map((event, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSearchEvent(event);
                      setShowEventSuggestions(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left text-gray-700"
                  >
                    {event}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="w-px h-8 bg-gray-300"></div>
          <div className="flex-1 flex flex-col px-4 relative">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search location..."
                value={searchLocation}
                onChange={(e) => {
                  setSearchLocation(e.target.value);
                  setShowLocationSuggestions(true);
                }}
                onFocus={() => setShowLocationSuggestions(true)}
                onBlur={() =>
                  setTimeout(() => setShowLocationSuggestions(false), 200)
                }
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {showLocationSuggestions && filteredLocations.length > 0 && (
              <ul className="absolute top-12  left-0 w-full bg-white shadow-md rounded-lg max-h-30 overflow-y-auto z-20">
                {filteredLocations.map((loc, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSearchLocation(loc);
                      setShowLocationSuggestions(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left text-gray-700"
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors duration-200"
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};
