import React from "react";

// interface Props {
//     id: String;
// }

const NoticesCategoryItemSvgSelector = ({ id }) => {

  switch (id) {
    case "location":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.7578 11C20.7578 15.4183 17.1761 19 12.7578 21C8.33953 19 4.75781 15.4183 4.75781 11C4.75781 6.58172 8.33953 3 12.7578 3C17.1761 3 20.7578 6.58172 20.7578 11Z"
            stroke="#54ADFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.7578 11C15.7578 12.6569 14.4147 14 12.7578 14C11.101 14 9.75781 12.6569 9.75781 11C9.75781 9.34315 11.101 8 12.7578 8C14.4147 8 15.7578 9.34315 15.7578 11Z"
            stroke="#54ADFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "heart":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z"
            stroke="#54ADFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "clock":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7578 7V12L15.7578 15M21.7578 12C21.7578 16.9706 17.7284 21 12.7578 21C7.78725 21 3.75781 16.9706 3.75781 12C3.75781 7.02944 7.78725 3 12.7578 3C17.7284 3 21.7578 7.02944 21.7578 12Z"
            stroke="#54ADFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "female":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7578 13C15.5192 13 17.7578 10.7614 17.7578 8C17.7578 5.23858 15.5192 3 12.7578 3C9.99639 3 7.75781 5.23858 7.75781 8C7.75781 10.7614 9.99639 13 12.7578 13ZM12.7578 13L12.7578 21M9.75781 18L15.7578 18"
            stroke="#F43F5E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "male":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 11C9.23858 11 7 13.2386 7 16C7 18.7614 9.23858 21 12 21C14.7614 21 17 18.7614 17 16C17 13.2386 14.7614 11 12 11ZM12 11V3M12 3L16 7M12 3L8 7"
            stroke="#54ADFF"

            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "trash":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M4 6H20M10 10V16M14 10V16"
            stroke="#54ADFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "heart-active":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z"
            fill="#54ADFF"
            stroke="#54ADFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

export default NoticesCategoryItemSvgSelector;
