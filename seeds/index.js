const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 200; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "60b26af6e84d8e77845fbc8f",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      images: [
        {
          url: "https://res.cloudinary.com/deg6erafk/image/upload/v1613349417/YelpCamp/yulcicitoi6pp4tuy2qd.jpg",
          filename: "YelpCamp/yulcicitoi6pp4tuy2qd",
        },
        {
          url: "https://res.cloudinary.com/deg6erafk/image/upload/v1613349418/YelpCamp/hfvzedfzocb3rs2nmfww.jpg",
          filename: "YelpCamp/hfvzedfzocb3rs2nmfww",
        },
        {
          url: "https://res.cloudinary.com/deg6erafk/image/upload/v1613349418/YelpCamp/ai1d0simujb95a29bmwd.jpg",
          filename: "YelpCamp/ai1d0simujb95a29bmwd",
        },
        {
          url: "https://res.cloudinary.com/deg6erafk/image/upload/v1613349418/YelpCamp/irfos1cegoin2s9g0vq0.jpg",
          filename: "YelpCamp/irfos1cegoin2s9g0vq0",
        },
      ],
      price: price,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut cupiditate iure et numquam debitis dolores repellendus, voluptatum quaerat culpa. Nemo dolor dignissimos a id veniam exercitationem accusantium labore consequuntur deleniti beatae. Nulla, voluptates ad.",
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
