const useFileChange = () => {
  const handleFileUpload = (event, setState) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setState(reader.result);
    };

    reader.readAsDataURL(file);
  };
  return { handleFileUpload };
};

export default useFileChange;
