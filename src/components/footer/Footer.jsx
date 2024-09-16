import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate()
  const Click = ()=>{
    sessionStorage.clear('token');
    navigate('/login')
  }
  return (
    <>
      <div class="card text-center">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button class="btn btn-primary" onClick={Click}>
            Log Out
          </button>
        </div>
      
      </div>
    </>
  );
};

export default Footer;
