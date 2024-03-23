import React from "react";

function Map() {
  return (
    <>
      <div className="container_map pb-5 pt-0">
        <iframe
          title="Google Map"
          className="mt-5"
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1975211196595!2d72.80524107865129!3d21.184311030235676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04deeaaaaaaab%3A0x223e8d295aaf4946!2sVanita%20Vishram!5e0!3m2!1sen!2sin!4v1711191866968!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          style={{
            height: "500px",
            display: "block",
            margin: "0 auto",
          }}></iframe>
      </div>
    </>
  );
}
export default Map;
