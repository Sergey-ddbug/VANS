import React from "react"
import { FaReact, FaBootstrap, FaVideo, FaDatabase } from "react-icons/fa";
import '../pages/assets/Login.css';
 
const Footer = () => <footer className="page-footer font-small blue pt-4">
  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <h5 className="text-uppercase text-danger">Video Audio Networking Service</h5>
        <p>Welcome to the VANS family. Learn the latest skills to reach your professional goals.
          <p>Online video courses with new additions published every week.
          </p>
        </p>
      </div>


      <hr className="clearfix w-100 d-md-none pb-0" />

      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase text-danger" >Our Team</h5>
        <ul className="list-unstyled">
          <li><a href="https://github.com/vmidor">Viktoriia Midor</a></li>
          <li><a href="https://github.com/aaronweiner2016">Aaron Weiner </a></li>
          <li><a href="https://github.com/naisthorpe">Nick Aisthorpe</a></li>
          <li><a href="https://github.com/Sergey-ddbug">Sergey Ishimov</a></li>
        </ul>
      </div>

      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase text-danger icons">We Use</h5>
        <ul>
          <a className="mr-1"><FaReact /></a>
          <a className="mr-1 ml-1"><FaBootstrap /></a>
          <a className="mr-1 ml-1"><FaVideo /></a>
          <a className="ml-1"><FaDatabase /></a>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-copyright text-center py-3">© VANS 2021

  </div>

</footer>

export default Footer