const formConfig = {
  sections: [
    {
      id: 1,
      heading: "Personal Details",
      fields: [
        {
          id: 11,
          name: "fullName",
          type: "text",
          label: "Full Name",
          placeholder: "Enter your full name",
        },
        {
          id: 12,
          name: "gender",
          type: "select",
          label: "Gender",
          defaultValue: "",
          options: [
            {
              value: "",
              label: "Select a gender",
              disabled: true,
            },
            {
              value: "male",
              label: "Male",
            },
            {
              value: "female",
              label: "Female",
            },
            {
              value: "others",
              label: "Others",
            },
          ],
        },
        {
          id: 13,
          name: "dob",
          type: "date",
          label: "DOB",
        },
        {
          id: 14,
          name: "fatherName",
          type: "text",
          label: "Father Name",
          placeholder: "Enter your father's name",
        },
        {
          id: 15,
          name: "grandFatherName",
          type: "text",
          label: "Grand Father Name (optional)",
          placeholder: "Enter your grand father's name",
        },
        {
          id: 16,
          name: "maritalStatus",
          type: "select",
          label: "Marital Status (optional)",
          defaultValue: "",
          options: [
            {
              value: "",
              label: "Select a status",
              disabled: true,
            },
            {
              value: "single",
              label: "Single",
            },
            {
              value: "married",
              label: "Married",
            },
          ],
        },
        {
          id: 17,
          name: "occupation-field",
          type: "select",
          label: "Occupation Field",
          defaultValue: "",
          options: [
            {
              value: "",
              label: "Select Occupation",
              disabled: true,
            },
            {
              value: "student",
              label: "Student",
            },
            {
              value: "business",
              label: "Business",
            },
            {
              value: "tourism",
              label: "Tourism",
            },
            {
              value: "agriculture",
              label: "Agriculture",
            },
            {
              value: "trade",
              label: "Trade",
            },
            {
              value: "tech",
              label: "Tech",
            },
            {
              value: "medical",
              label: "Medical",
            },
            {
              value: "education",
              label: "Education",
            },
            {
              value: "self",
              label: "Self Employed",
            },
          ],
        },
        {
          id: 18,
          name: "emailAddress",
          type: "text",
          label: "Email Address",
          placeholder: "Enter your email address",
        },
        {
          id: 19,
          name: "contactNumber",
          type: "text",
          label: "Contact Number",
          placeholder: "Enter your contact number",
        },
      ],
    },

    {
      id: 2,
      heading: "Address Details",
      fields: [
        {
          id: 21,
          name: "state",
          type: "select",
          label: "State",
          defaultValue: "",
          options: [
            {
              value: "",
              label: "Select State",
              disabled: true,
            },
            {
              value: "andhra_pradesh",
              label: "Andhra Pradesh",
            },
            {
              value: "arunachal_pradesh",
              label: "Arunachal Pradesh",
            },
            {
              value: "assam",
              label: "Assam",
            },
            {
              value: "bihar",
              label: "Bihar",
            },
            {
              value: "chhattisgarh",
              label: "Chhattisgarh",
            },
            {
              value: "goa",
              label: "Goa",
            },
            {
              value: "gujarat",
              label: "Gujarat",
            },
            {
              value: "haryana",
              label: "Haryana",
            },
            {
              value: "himachal_pradesh",
              label: "Himachal Pradesh",
            },
            {
              value: "jharkhand",
              label: "Jharkhand",
            },
            {
              value: "karnataka",
              label: "Karnataka",
            },
            {
              value: "kerala",
              label: "Kerala",
            },
            {
              value: "madhya_pradesh",
              label: "Madhya Pradesh",
            },
            {
              value: "maharashtra",
              label: "Maharashtra",
            },
            {
              value: "manipur",
              label: "Manipur",
            },
            {
              value: "meghalaya",
              label: "Meghalaya",
            },
            {
              value: "mizoram",
              label: "Mizoram",
            },
            {
              value: "nagaland",
              label: "Nagaland",
            },
            {
              value: "odisha",
              label: "Odisha",
            },
            {
              value: "punjab",
              label: "Punjab",
            },
            {
              value: "rajasthan",
              label: "Rajasthan",
            },
            {
              value: "sikkim",
              label: "Sikkim",
            },
            {
              value: "tamil_nadu",
              label: "Tamil Nadu",
            },
            {
              value: "telangana",
              label: "Telangana",
            },
            {
              value: "tripura",
              label: "Tripura",
            },
            {
              value: "uttar_pradesh",
              label: "Uttar Pradesh",
            },
            {
              value: "uttarakhand",
              label: "Uttarakhand",
            },
            {
              value: "west_bengal",
              label: "West Bengal",
            },
            {
              value: "andaman_nicobar",
              label: "Andaman and Nicobar Islands",
            },
            {
              value: "chandigarh",
              label: "Chandigarh",
            },
            {
              value: "dadra_nagar_haveli",
              label: "Dadra and Nagar Haveli and Daman and Diu",
            },
            {
              value: "delhi",
              label: "Delhi",
            },
            {
              value: "lakshadweep",
              label: "Lakshadweep",
            },
            {
              value: "puducherry",
              label: "Puducherry",
            },
          ],
        },
        {
          id: 22,
          name: "district",
          type: "text",
          label: "District",
          placeholder: "Enter your district name",
        },
        {
          id: 23,
          name: "municipality",
          type: "text",
          label: "Municipality",
          placeholder: "Enter your municipality name",
        },
        {
          id: 24,
          name: "wardNumber",
          type: "text",
          label: "Ward No",
          placeholder: "Enter your Ward Number",
        },
        {
          id: 25,
          name: "toleName",
          type: "text",
          label: "Tole Name (optional)",
          placeholder: "Enter your tole name",
        },
      ],
    },

    {
      id: 3,
      heading: "Document Details",
      fields: [
        {
          id: 31,
          name: "documentType",
          type: "select",
          label: "Document Type",
          defaultValue: "",
          options: [
            {
              value: "",
              label: "Select a document type",
              disabled: true,
            },
            {
              value: "citizenship",
              label: "Citizenship",
            },
            {
              value: "license",
              label: "License",
            },
            {
              value: "passport",
              label: "Passport",
            },
          ],
        },
        {
          id: 32,
          name: "profilePicture",
          type: "file",
          label: "your profile picture (optional)",
        },
      ],
    },
  ],
};

export default formConfig;
