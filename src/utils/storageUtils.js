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

const bucket = 'photos';

/**
 * Get an array of download URLs and alt text for images in a supabase storage folder
 * @param {object} supabase Supabase instance
 * @param {string} path Path to the folder in storage
 * @returns Promise of an array of objects with url and alt properties
 */
export const getUrls = async (supabase, path) => {
  const { data, error } = await supabase
    .storage
    .from(bucket)
    .list(path);

  if (data) {
    return _mapFilesUrls(data, supabase.storageUrl, path);
  } else {
    throw new Error(error);
  }
};

const _mapFilesUrls = (data, storageUrl, path) => {
  const pathCapitalized = path.charAt(0).toUpperCase() + path.slice(1);
  return data.map((file, i) => {
    return {
      url: `${storageUrl}/object/public/${bucket}/${path}/${file.name}`,
      alt: file.metadata.alt ? file.metadata.alt : `Shane Butler ${pathCapitalized} Photo - ${i + 1}`
    }
  });
};
