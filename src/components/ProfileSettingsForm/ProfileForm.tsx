import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { userValidationSchema } from "../../constant/userSchema";
import { userInitialValues } from "../../type/userTypes";
import Loader from "../../loader/Loader";
import { useUserProfile } from "../../hooks/useUserProfile";
import { EditIcon } from "../../assets/Icons";

const ProfileForm: React.FC = () => {
  const {
    userData,
    loading,
    error,
    selectedImage,
    handleImageChange,
    handleSubmit,
  } = useUserProfile();

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <Formik
      initialValues={userData || userInitialValues}
      enableReinitialize
      validationSchema={userValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="py-6">
          <div className="grid lg:grid-cols-5 gap-4 overflow-x-hidden">
            {/* Left Column: Avatar */}
            <div className="mb-4">
              <div className="relative w-24 mx-auto md:mx-0">
                {userData && (
                  <img
                    src={
                      selectedImage || userData?.avatar || "/defaultImage.png"
                    }
                    alt="Profile"
                    className="w-[90px] h-[90px] rounded-full object-cover"
                  />
                )}
                <span className="absolute right-0 bottom-0 cursor-pointer">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="opacity-0 absolute cursor-pointer"
                  />
                  <EditIcon style={{ height: "30px", width: "30px" }} />
                </span>
              </div>
            </div>

            {/* Middle + Right Columns: Form Fields */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Column 1 */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-base font-normal text-[#232323] mb-1">
                      Your Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      className="w-full bg-white border border-[#DFEAF2] rounded-2xl px-4 text-sm focus:outline-none h-[50px] text-[#718EBF] placeholder:text-[#718EBF]"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-normal text-[#232323] mb-1">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="w-full bg-white border border-[#DFEAF2] rounded-2xl px-4 text-sm focus:outline-none h-[50px] text-[#718EBF] placeholder:text-[#718EBF]"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-normal text-[#232323] mb-1">
                      Date of Birth
                    </label>
                    <Field
                      type="text"
                      name="dob"
                      className="w-full bg-white border border-[#DFEAF2] rounded-2xl px-4 text-sm focus:outline-none h-[50px] text-[#718EBF] placeholder:text-[#718EBF]"
                    />
                    <ErrorMessage
                      name="dob"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-normal text-[#232323] mb-1">
                      Permanent Address
                    </label>
                    <Field
                      type="text"
                      name="permanantAddress"
                      className="w-full bg-white border border-[#DFEAF2] rounded-2xl px-4 text-sm focus:outline-none h-[50px] text-[#718EBF] placeholder:text-[#718EBF]"
                    />
                    <ErrorMessage
                      name="permanantAddress"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-normal text-[#232323] mb-1">
                      Postal Code
                    </label>
                    <Field
                      type="text"
                      name="postalCode"
                      className="w-full bg-white border border-[#DFEAF2] rounded-2xl px-4 text-sm focus:outline-none h-[50px] text-[#718EBF] placeholder:text-[#718EBF]"
                    />
                    <ErrorMessage
                      name="postalCode"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>
                {/* Column 2 */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-base font-normal text-[#232323] mb-1">
                      User Name
                    </label>
                    <Field
                      type="text"
                      name="userName"
                      className="w-full bg-white border border-[#DFEAF2] rounded-2xl px-4 text-sm focus:outline-none h-[50px] text-[#718EBF] placeholder:text-[#718EBF]"
                    />
                    <ErrorMessage
                      name="userName"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-normal text-[#232323] mb-1">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      className="w-full bg-white border border-[#DFEAF2] rounded-2xl px-4 text-sm focus:outline-none h-[50px] text-[#718EBF] placeholder:text-[#718EBF]"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-normal text-[#232323] mb-1">
                      Present Address
                    </label>
                    <Field
                      type="text"
                      name="address"
                      className="w-full bg-white border border-[#DFEAF2] rounded-2xl px-4 text-sm focus:outline-none h-[50px] text-[#718EBF] placeholder:text-[#718EBF]"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-normal text-[#232323] mb-1">
                      City
                    </label>
                    <Field
                      type="text"
                      name="city"
                      className="w-full bg-white border border-[#DFEAF2] rounded-2xl px-4 text-sm focus:outline-none h-[50px] text-[#718EBF] placeholder:text-[#718EBF]"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-normal text-[#232323] mb-1">
                      Country
                    </label>
                    <Field
                      type="text"
                      name="country"
                      className="w-full bg-white border border-[#DFEAF2] rounded-2xl px-4 text-sm focus:outline-none h-[50px] text-[#718EBF] placeholder:text-[#718EBF]"
                    />
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>
              </div>
              {/* Save Button */}
              <div className="mt-6 md:text-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="md:w-[190px] h-[50px] bg-black text-white px-6 py-2 rounded-2xl text-sm hover:bg-gray-800 w-full"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;
