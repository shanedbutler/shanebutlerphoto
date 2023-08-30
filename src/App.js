import {Cloudinary} from "@cloudinary/url-gen";
import Navbar from "./components/navbar";

const App = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'dgxomkis0'}});

  return (
    <Navbar />
  )
};

export default App;