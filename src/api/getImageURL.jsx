export const getImageURL = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_imageBb_Key
  }`;

  const response = await fetch(url, {
    method: "post",
    body: formData,
  });

  const imageData = await response.json();

  return imageData;
};
