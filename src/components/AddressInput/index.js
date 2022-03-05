// // import * as React from "react";
// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import css from "./addressInput.module.css";

// function AddressInput() {
//   const [state, setState] = useState({
//     addressone: "",
//     addresstwo: "",
//     city: "",
//     region: "",
//     postcode: "",
//     lastName: ""
//   });

//   function handleChange(e) {
//     const value = e.target.value;
//     setState({
//       ...state,
//       [e.target.name]: value
//     });
//   }

//   return (
//     <Box
//       component="form"
//       //   sx={{
//       //     "& .MuiTextField-root": { m: 1, width: "25ch" }
//       //   }}
//       //   noValidate
//       //   autoComplete="off"
//     >
//       <div className={css.addressContainer}>
//         <div>
//           <TextField
//             required
//             id="standard-required"
//             label="Address Line 1 "
//             placeholder="Required"
//             variant="standard"
//             value={state.addressone}
//             name="addressone"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <TextField
//             required
//             id="standard-required"
//             label="Address Line 2"
//             placeholder="Required"
//             variant="standard"
//             value={state.addresstwo}
//             name="addresstwo"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <TextField
//             required
//             id="standard-required"
//             label="City"
//             placeholder="Required"
//             variant="standard"
//             name="city"
//             value={state.city}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <TextField
//             required
//             id="standard-required"
//             label="Region"
//             placeholder="Required"
//             variant="standard"
//             name="region"
//             value={state.region}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <TextField
//             required
//             id="standard-required"
//             label="Postal Code"
//             placeholder="Required"
//             variant="standard"
//             name="postcode"
//             value={state.postcode}
//             onChange={handleChange}
//           />
//         </div>
//       </div>
//     </Box>
//   );
// }

// export default AddressInput;
