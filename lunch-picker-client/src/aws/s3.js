import { Storage } from 'aws-amplify';

export const upload = async file => {
  const filename = `${Date.now()} - ${file.name}`;
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type
  });

  return stored.key;
};

export const getUrl = async key => {
  return Storage.vault.get(key);
};

export const getThumbnailUrl = async key => {
  return Storage.vault.get(`thumbnails/${key}`);
};
