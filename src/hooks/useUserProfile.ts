import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../config/store";
import { fetchUserData, updateUserData } from "../redux/user/userAPI";
import { UserData } from "../type/userTypes";

export const useUserProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userData, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleSubmit = async (values: UserData) => {
    const updatedUserData = {
      ...values,
      avatar: selectedImage || values.avatar,
    };

    return dispatch(updateUserData(updatedUserData));
  };

  return {
    userData,
    loading,
    error,
    selectedImage,
    handleImageChange,
    handleSubmit,
  };
};
