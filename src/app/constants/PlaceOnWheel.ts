import Jaipur1 from "../../app/assests/jaipur.png";
import Jaipur2 from "../../app/assests/jaipur-2.png";
import Sawai from "../../app/assests/sawai-1.png";
import Sawai2 from "../../app/assests/sawai-2.png";
import UdaiPur1 from "../../app/assests/udaipur-1.png";
import UdaiPur2 from "../../app/assests/udaipur-2.png";
import Jaisalmer from "../../app/assests/jaisalmer.png";
import Jodhpur from "../../app/assests/jodhpur.png";
import Agra from "../../app/assests/agra.png";
import BharatPur from "../../app/assests/bharatpur.png";
import Delhi1 from "../../app/assests/delhi-2.png";
import Delhi2 from "../../app/assests/delhi-3.png";
import Delhi3 from "../../app/assests/delhi-4.png";
import Delhi4 from "../../app/assests/delhi-1.png";

const data = {
  wednesday: {
    desc: "The land of marvellous beauty, Udaipur is named after Rana Udai Singh, the dynamic ruler of this princely state. This City of Lakes has a long, glorious history and is also considered as the romantic city of Rajasthan, thanks to the endless love sagas of its rulers.",
    images: [Jaipur1, Jaipur2],
    table: [
      {
        time: "4:00 PM",
        detail:
          "Welcome on arrival at Safdarjung Railway Station. Red Carpet, Garlands, Shehnai, Soft Drink & Welcome drink in Bar.",
      },
      {
        time: "5:00 PM",
        detail: "Guests are issued boarding pass and escorted to their rooms.",
      },
      {
        time: "6:30 PM",
        detail: "Departure for Jaipur.",
      },
      {
        time: "8:00 PM Onwards",
        detail: "Dinner onboard Palace on Wheels.",
      },
    ],
  },
  thursday: {
    desc: "Your first stop will be at the magnificent Pink City, Jaipur. The city displays graceful architecture in a unique pink shade. Established in 1727 by the then Maharaja, Sawai Jai Singh II, Jaipur is known as one of the most well-planned cities of its time.",
    images: [Jaipur1, Jaipur2],
    table: [
      {
        time: "4:30 AM",
        detail: "Arrival at Gandhinagar, Jaipur on platform number 2.",
      },
      {
        time: "7:00 AM",
        detail: "Breakfast on board.",
      },
      {
        time: "8:00 AM",
        detail:
          "Welcome with Rangoli, Shehnai, Elephants, Kachi Ghodi Dance, etc.",
      },
      {
        time: "8:15 AM",
        detail: "Departure for sight-seeing. Train leaves for workshop.",
      },
      {
        time: "9:00 AM",
        detail: "Visit Albert Hall Museum.",
      },
      {
        time: "10:00 AM",
        detail: "Visit to Hawa Mahal (from outside).",
      },
      {
        time: "10:30 AM",
        detail: "Visit Jantar Mantar.",
      },
      {
        time: "11:30 AM",
        detail: "Visit City Palace.",
      },
      {
        time: "12:30 PM",
        detail: "Explore the amazing handicraft of Jaipur.",
      },
      {
        time: "1:30 PM",
        detail: "Elephant ride and lunch at Amer Fort.",
      },
      {
        time: "3:00 PM",
        detail: "Visit Amer Fort.",
      },
      {
        time: "6:00 PM",
        detail:
          "See some more intricate handmade art pieces from local Jaipur artisans.",
      },
      {
        time: "7:15 PM",
        detail: "Arrival on Palace on Wheels at Durgapura.",
      },
      {
        time: "8:00 PM",
        detail: "Dinner onboard. Palace on Wheels departs for Sawai Madhopur.",
      },
    ],
  },
  friday: {
    desc: "Your first stop will be at the magnificent Pink City, Jaipur. The city displays graceful architecture in a unique pink shade. Established in 1727 by the then Maharaja, Sawai Jai Singh II, Jaipur is known as one of the most well-planned cities of its time.",
    images: [Sawai, Sawai2],
    table: [
      {
        time: "6:50 AM",
        detail: "Arrival at Sawai Madhopur.",
      },
      {
        time: "7:00 AM",
        detail:
          "Set out for Ranthambhore National Park (Sanctuary visit) by open canters.",
      },
      {
        time: "8:45 AM",
        detail: "Breakfast on board.",
      },
      {
        time: "11:30 AM",
        detail: "Departure for Chittorgarh.",
      },
      {
        time: "1:00 PM",
        detail: "Lunch onboard Palace on Wheels.",
      },
      {
        time: "4:35 PM",
        detail: "Departure for sight-seeing. High tea at Fort.",
      },
      {
        time: "7:15 PM",
        detail: "Return to Palace on Wheels.",
      },
      {
        time: "8:00 PM",
        detail: "Dinner on Palace on Wheels.",
      },
      {
        time: "1:40 AM",
        detail: "Enroute Udaipur.",
      },
    ],
  },
  saturday: {
    desc: "The land of marvellous beauty, Udaipur is named after Rana Udai Singh, the dynamic ruler of this princely state. This City of Lakes has a long, glorious history and is also considered as the romantic city of Rajasthan, thanks to the endless love sagas of its rulers.",
    images: [UdaiPur1, UdaiPur2],
    table: [
      {
        time: "8:00 AM",
        detail: "Arrival at Udaipur.",
      },
      {
        time: "8:15 AM",
        detail: "Breakfast onboard Palace on Wheels.",
      },
      {
        time: "9:00 AM",
        detail: "Sight-seeing by coach.",
      },
      {
        time: "9:30 AM",
        detail: "Visit to Saheliyon Ki Bari.",
      },
      {
        time: "10:00 AM",
        detail: "Explore some beautiful paintings from the city of lakes.",
      },
      {
        time: "11:00 AM",
        detail: "Visit City Palace.",
      },
      {
        time: "1:00 PM",
        detail: "Lunch at a 5-Star Hotel.",
      },
      {
        time: "3:00 PM",
        detail: "Arrival at Palace on Wheels.",
      },
      {
        time: "4:25 PM",
        detail: "High Tea onboard Palace on Wheels.",
      },
      {
        time: "8:00 PM",
        detail: "Dinner onboard Palace on Wheels. Enroute Jaisalmer.",
      },
    ],
  },
  sunday: {
    desc: "The day unfolds in the heart of the desert at Jaisalmer, the Golden City of India. Jaisalmer is christened after its founder Rawal Jaisal and means 'the hill fort of Jaisal', which was established in the year 1156.",
    images: [Jaisalmer],
    table: [
      {
        time: "7:30 AM",
        detail: "Breakfast on Palace on Wheels.",
      },
      {
        time: "9:30 AM",
        detail: "Arrival at Jaisalmer with a grand welcome.",
      },
      {
        time: "9:45 AM",
        detail:
          "Departure for sight-seeing. Visit to Gadsisar Lake, Fort, Havelies & City.",
      },
      {
        time: "1:30 PM",
        detail: "Lunch onboard Palace on Wheels.",
      },
      {
        time: "3:30 PM",
        detail: "Departure for Sam sand dunes. Camel ride and high-tea.",
      },
      {
        time: "7:00 PM",
        detail: "Return to Palace on Wheels.",
      },
      {
        time: "7:45 PM",
        detail: "Set out for Dinner & Cultural Programme at 5-Star Hotel.",
      },
      {
        time: "11:00 PM",
        detail: "Return onboard Palace on Wheels.",
      },
      {
        time: "11:30 PM",
        detail: "Enroute Jodhpur.",
      },
    ],
  },

  monday: {
    desc: "Jodhpur, the land of majestic and mystic glory, welcomes you warmly. Currently, the second largest city of Rajasthan, Jodhpur was established in the year 1459 by Rao Jodha, a Rajput king.",
    images: [Jodhpur],
    table: [
      {
        time: "7:00 AM",
        detail: "Arrival at Mandor, Jodhpur. Welcome with Mehrangarh Band.",
      },
      {
        time: "7:30 AM",
        detail: "Breakfast onboard Palace on Wheels.",
      },
      {
        time: "9:00 AM",
        detail: "Departure for Sight Seeing.",
      },
      {
        time: "9:30 AM",
        detail: "See the wonderful Jaswant Thada.",
      },
      {
        time: "10:00 AM",
        detail: "Visit the majestic Mehrangarh fort.",
      },
      {
        time: "12:00 PM",
        detail:
          "See the intricate patchwork and authentic designer textile pieces.",
      },
      {
        time: "1:30 PM",
        detail: "Lunch at a 5-star hotel.",
      },
      {
        time: "2:30 PM",
        detail: "Visit the historic Umaid Bhawan museum.",
      },
      {
        time: "3:30 PM",
        detail: "Return to Palace on Wheels.",
      },
      {
        time: "4:30 PM",
        detail:
          "High-tea onboard Palace on Wheels and departure for Bharatpur.",
      },
      {
        time: "8:00 PM",
        detail: "Dinner onboard Palace on Wheels.",
      },
    ],
  },

  tuesday: {
    desc: [
      "Established in the 17th century by Maharaja Suraj Mal, Bharatpur was once an invincible and well-fortified city. Aptly called the iron fort, its stern military construction helped fight off many a foreign siege.Bharatpur is close to the Keoladeo Ghana National Park, a world heritage site as declared by UNESCO. This region attracts a large variety of birds such as the Siberian crane, storks, herons, kingfishers, partridges, and bee-eaters, some of which migrate from dfferent parts of the world.",
      "Agra is located on the banks of the river Yamuna and was established in 1504 by the then ruler of Delhi, Sultan Sikandar Lodi. The city is home to one of the Seven Wonders of the World, the Taj Mahal. It is one of the most visited sites in India.",
    ],
    images: [Agra, BharatPur],
    table: [
      {
        time: "5:00 AM",
        detail: "Arrival at Bharatpur.",
      },
      {
        time: "6:00 AM",
        detail: "Set out for Ghana Bird Sanctuary by coach.",
      },
      {
        time: "6:30 AM",
        detail: "Arrival at the sanctuary.",
      },
      {
        time: "6:45 AM",
        detail: "Meet the exquisite and exotic birds by cycle rickshaw.",
      },
      {
        time: "8:15 AM",
        detail: "Breakfast onboard Palace on Wheels.",
      },
      {
        time: "9:20 AM",
        detail: "Enroute Agra.",
      },
      {
        time: "11:45 AM",
        detail: "Arrive at Agra Cantt.",
      },
      {
        time: "12:15 PM",
        detail: "Visit the Agra Fort.",
      },
      {
        time: "1:30 PM",
        detail: "Lunch at a 5-Star Hotel.",
      },
      {
        time: "3:00 PM",
        detail: "Experience the breathtaking Taj Mahal!",
      },
      {
        time: "5:30 PM",
        detail: "Visit some local marble artifacts from Agra.",
      },
      {
        time: "8:00 PM",
        detail: "Dinner onboard Palace on Wheels.",
      },
      {
        time: "8:45 PM",
        detail: "Departure from Agra Cantt.",
      },
    ],
  },

  Wednesday: {
    desc: "",
    images: [Delhi1, Delhi2, Delhi3, Delhi4],
    table: [
      {
        time: "2:15 AM",
        detail: "Arrival at Safdarjung Railway Station",
      },
      {
        time: "7:00 AM",
        detail: "	Breakfast onboard Palace on Wheels",
      },
      {
        time: "8:30 AM",
        detail: "Farewell from Palace on Wheels",
      },
    ],
  },
};

export default data;
