import React, { useEffect, useState } from "react";
import { getAllFaculty, getAllTeam } from "../../service/service";
import Skeleton from "@material-ui/lab/Skeleton";
import { Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import useSWR from 'swr';

function Members() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p style={{ margin: "100px" }}>
            With the rich and vast experience of almost all the promoters, it is
            analysed that there was nobody in Secunderabad area who was offering
            medicines at wholesale price with discounts which ranges up to 20%
            apart from the traders situated in Inderbagh, Koti. That made us to
            start Medicare Galaxy LLP in that area and we are proud to say, that
            we are in the top 3 in terms of range and availability and are far
            better than our competitors including the leading chain pharmacies
            in the city.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Members;
