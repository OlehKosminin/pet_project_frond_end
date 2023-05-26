// import React from "react";
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { getIsLoggedIn } from "../../../redux/auth/auth-selector";
// import { ReactComponent as SmallCross } from "../../../assets/image/icons/plus-small.svg";
// import { styled } from "@mui/system";
// import { Box } from "@mui/system";

// const styles = {
//   navigationContainer: {
//     marginTop: "43px",
//     marginBottom: "42px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   linksContainer: {
//     display: "flex",
//     alignItems: "center",
//   },
//   link: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "fit-content",
//     height: "35px",
//     borderRadius: "40px",
//     background: "#CCE4FB",
//     color: "#000",
//     textDecoration: "none",
//     padding: "0 16px",
//     margin: "0 8px",
//     "&.active": {
//       background: "#54ADFF",
//       color: "#fff",
//     },
//   },
//   addButtonContainer: {
//     display: "flex",
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   addButton: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "fit-content",
//     height: "40px",
//     borderRadius: "40px",
//     background: "#54ADFF",
//     color: "#fff",
//     textDecoration: "none",
//     padding: "0 16px",
//   },
//   icon: {
//     marginLeft: "5px",
//   },
// };

// const StyledNavLink = styled(NavLink)(styles.link);
// const StyledAddLink = styled(NavLink)(styles.addButton);

// const NoticesCategoriesNavigation = () => {
//   const userToken = useSelector(getIsLoggedIn);

//   return (
//     <Box sx={styles.navigationContainer}>
//       <Box sx={styles.linksContainer}>
//         <StyledNavLink
//           to="/notices/sell"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           sell
//         </StyledNavLink>
//         <StyledNavLink
//           to="/notices/lost-found"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           lost/found
//         </StyledNavLink>
//         <StyledNavLink
//           to="/notices/for-free"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           in good hands
//         </StyledNavLink>
//         {userToken && (
//           <>
//             <StyledNavLink
//               to="/notices/favorite"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               favorite ads
//             </StyledNavLink>
//             <StyledNavLink
//               to="/notices/owner"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               my ads
//             </StyledNavLink>
//           </>
//         )}
//       </Box>
//       <Box sx={styles.addButtonContainer}>
//         <StyledAddLink to="/add-pet">
//           Add Pet <SmallCross className={styles.icon} />
//         </StyledAddLink>
//       </Box>
//     </Box>
//   );
// };

// export default NoticesCategoriesNavigation;
