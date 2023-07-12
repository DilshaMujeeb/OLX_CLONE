import React,{useEffect,useState,useContext} from 'react';

import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/FirebaseContext';
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";


function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails,setPostDetails } = useContext(PostContext);
  console.log(postDetails);
  const { firebase } = useContext(FirebaseContext)
  

  useEffect(() => {
    const{userId}=postDetails
    firebase.firestore().collection('users').where("id", "==", userId).get().then((res) => {
      res.forEach(doc => {
        setUserDetails(doc.data())
        
      });
    })
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails && postDetails?.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails?.username}</p>
          <p>{userDetails?.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;


// import React, { useContext, useEffect, useState } from "react";
// import { PostContext } from "../../store/PostContext";
// import "./View.css";
// import { FirebaseContext } from "../../store/FirebaseContext";
// import {
//   collection,
//   getDocs,
//   getFirestore,
//   query,
//   where,
// } from "firebase/firestore";
// // import { getAuth } from "firebase/auth";
// function View() {
//   const [userDetails, setUserDetails] = useState();
//   const { postDetails,setPostDetails } = useContext(PostContext);
//   const db = getFirestore();
//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       if (postDetails && postDetails.userId) {
//         const userId = postDetails.userId;
//         const userData = collection(db, "users");
//         const queryData = query(userData, where("id", "==", userId));
//         const querySnapshot = await getDocs(queryData);
//         querySnapshot.forEach((doc) => {
//           setUserDetails(doc.data());
//         });
//       }
//     };

//     fetchUserDetails();
//   }, []);

//   useEffect(()=>{
//     if(postDetails){
//       localStorage.setItem('postDetails',JSON.stringify(postDetails))
//     }
//   },[postDetails])

//   useEffect(()=>{
//     const storedPostDetails = JSON.parse(localStorage.getItem('postDetails'))
//     if(storedPostDetails){
//       setPostDetails(storedPostDetails)
//     }
//   },[])

//   useEffect(()=>{
//     if(userDetails){
//       localStorage.setItem('userDetails',JSON.stringify(userDetails))
      
//     }
//   },[userDetails])
//   useEffect(() => {
//     try {
//       const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));
//       if (storedUserDetails) {
//         setUserDetails(storedUserDetails);
//       }
//     } catch (error) {
//       setUserDetails(null);
//     }
//   }, []);
//   if(!postDetails){
//     return null
//   }
//   if(!userDetails){
//     return null
//   }

//   return (
//     <div className="viewParentDiv">
//       <div className="imageShowDiv">
//         <img src={postDetails && postDetails.image} alt="" />
//       </div>
//       <div className="rightSection">
//         <div className="productDetails">
//           <p>&#x20B9; {postDetails && postDetails.price} </p>
//           <span>{postDetails && postDetails.name}</span>
//           <p>{postDetails && postDetails.category}</p>
//           <span>{postDetails && postDetails.createdAt}</span>
//         </div>
//         <div className="contactDetails">
//           <p>Seller details</p>
//           <p>{userDetails && userDetails.name}</p>
//           <p>{userDetails && userDetails.phone}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default View;