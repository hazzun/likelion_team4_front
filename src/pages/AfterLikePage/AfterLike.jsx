import React from "react";
import "./AfterLike.css";
import DetailContent from "../../components/afterlike/DetailContent";
import Relatedvideo from "../../components/afterlike/RelatedVideo.jsx";
import Comment from "../../components/afterlike/Comment.jsx";

const AfterLike = () => {
  return (
    <>
      <div class="wrap">
        <div>
          <DetailContent></DetailContent>
          <Comment></Comment>
        </div>

        <div class="RelatedVideoList">
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
        </div>
      </div>
    </>
  );
};

export default AfterLike;
