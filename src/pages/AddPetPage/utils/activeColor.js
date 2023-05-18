export const activeColor = (activeForm, el) => {
  switch (activeForm) {
    case "":
      switch (el) {
        case 1:
          return "#54ADFF";
        case 2:
        case 3:
          return "#CCE4FB";
        default:
          return "";
      }
    case "yourPet":
    case "sell":
    case "lost":
    case "good":
      switch (el) {
        case 1:
          return "#00C3AD";
        case 2:
          return "#54ADFF";
        case 3:
          return "#CCE4FB";
        default:
          return "";
      }
    case "yourPetInfo":
    case "sellPetInfo":
    case "lostPetInfo":
    case "goodPetInfo":
      switch (el) {
        case 1:
          return "#00C3AD";
        case 2:
          return "#00C3AD";
        case 3:
          return "#54ADFF";
        default:
          return "";
      }
    default:
      return "";
  }
};

export const activeTitle = (activeForm) => {
  switch (activeForm) {
    case "":
      return "Add pet";
    case "yourPet":
      return "Add my pet";
    case "yourPetInfo":
      return "Add my pet";
    case "sell":
      return "Add pet for sell";
    case "sellPetInfo":
      return "Add pet for sell";
    case "lost":
      return "Add lost pet";
    case "lostPetInfo":
      return "Add lost pet";
    case "good":
      return "Add pet in good hands";
    case "goodPetInfo":
      return "Add pet in good hands";
    default:
      return "Add pet";
  }
};
