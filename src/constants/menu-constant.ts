export const HEADER_TABLE_MENU = [
  "No",
  "Name",
  "Category",
  "Price",
  "Available",
  "Action",
];

export const CATEGORY_LIST = [
  {
    value: "Coffee",
    label: "Coffee",
  },
  {
    value: "Non-Coffee",
    label: "Non-Coffee",
  },
  {
    value: "Mains",
    label: "Mains",
  },
  {
    value: "Snack",
    label: "Snack",
  },
  {
    value: "Dessert",
    label: "Dessert",
  },
  {
    value: "Combo",
    label: "Combo",
  },
];

export const INITIAL_MENU = {
  name: "",
  description: "",
  price: "",
  discount: "",
  category: "",
  image_url: "",
  is_available: "",
};

export const INITIAL_STATE_MENU = {
  status: "idle",
  errors: {
    id: [],
    name: [],
    description: [],
    price: [],
    discount: [],
    category: [],
    image_url: [],
    is_available: [],
    _form: [],
  },
};
