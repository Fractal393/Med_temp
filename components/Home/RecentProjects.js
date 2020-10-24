import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Router from "next/router";
import { getRecentProjects } from "../../service/service";
import useSWR from "swr";
import Skeleton from "@material-ui/lab/Skeleton";

const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  autoplay: true,
  nav: false,
  loop: false,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,

  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 4
    }
  }
};

const RecentProjects = () => {
  return (
    <>
      <section className="project-area pt-50">
        <div className="container">
          <div className="section-title">
            <h2>What our customers say about us!</h2>
            <div className="bar" />
            <script
              src="https://apps.elfsight.com/p/platform.js"
              defer
            ></script>
            <div class="elfsight-app-5f0f3196-2e60-420a-8013-170bd3f0c687"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProjects;
