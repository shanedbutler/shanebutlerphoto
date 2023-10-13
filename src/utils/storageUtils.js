import { ref, getDownloadURL, getMetadata, listAll } from "firebase/storage";

/**
 * Get an array of download URLs and alt text for images in a firebase storage folder
 * @param {object} storage Firebase storage object
 * @param {string} path Path to the folder in storage
 * @returns Promise of an array of objects with url and alt properties
 */
export const getDownloadURLs = async (storage, path) => {
    const storageRef = ref(storage, path);

    // List all files in the path folder
    const res = await listAll(storageRef);
  
    // Generate a download URL and get metadata for each file
    const urls = await Promise.all(res.items.map(async (item) => {
      const url = await getDownloadURL(item);
      const metadata = await getMetadata(item);
      const alt = metadata.customMetadata && metadata.customMetadata.alt ? metadata.customMetadata.alt : "Shane Butler Gallery Image";
      return { url, alt };
    }));
  
    return urls;
  };