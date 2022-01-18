import React from "react";
import "../../css/style.css";
import axios from "axios";
import { useHistory } from "react-router";

export default function FamousPlaces() {
  const [places, setPlaces] = React.useState(null);
  const history = useHistory();
  React.useEffect(() => {
    const getFamousPlaces = async () => {
      const { data } = await axios.get(`/api/allRandomBusiness`);
      setPlaces(data);
    };
    getFamousPlaces();
  }, []);

  return (
    <section className="latest-blog bg-2">
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h6 text-color">Famous Places</span>
                <h2 className="mt-3 content-title text-white">
                  Famous Places to enrich your knowledge
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {places &&
              places?.resturants?.map((place) => {
                return (
                  <div className="col-lg-4 col-md-6 mb-5">
                    <div className="card bg-transparent border-0">
                      <img
                        src={
                          place?.image_url ||
                          "https://eventective-media.azureedge.net/1892263_md.jpg"
                        }
                        alt=""
                        className="img-fluid hotel_images rounded"
                      />

                      <div className="card-body mt-2">
                        <div className="blog-item-meta">
                          <a
                            href="#home"
                            className="text-white-50 text-capitalize"
                          >
                            Category / {place?.type}
                          </a>
                        </div>

                        <h3 className="mt-3 mb-4">
                          <p className="text-white place_name fs-4">
                            {place?.name.slice(0, 19)}
                          </p>
                        </h3>

                        <button
                          href="blog-single.html"
                          className="btn-small btn-solid-border btn-round-full text-white"
                          onClick={() =>
                            history.push({
                              pathname: "places-details",
                              state: {
                                place: place,
                              },
                            })
                          }
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            {places &&
              places?.hotels?.map((place) => {
                return (
                  <div className="col-lg-4 col-md-6 mb-5">
                    <div className="card bg-transparent border-0">
                      <img
                        src={
                          place?.image_url ||
                          "https://eventective-media.azureedge.net/1892263_md.jpg"
                        }
                        alt=""
                        className="img-fluid hotel_images rounded"
                      />

                      <div className="card-body mt-2">
                        <div className="blog-item-meta">
                          <a
                            href="#home"
                            className="text-white-50 text-capitalize"
                          >
                            Category / {place?.type}
                          </a>
                        </div>

                        <h3 className="mt-3 mb-4">
                          <a
                            href="#home"
                            className="text-white place_name fs-4"
                          >
                            {place?.name.slice(0, 20)}
                          </a>
                        </h3>

                        <button
                          href="blog-single.html"
                          className="btn-small btn-solid-border btn-round-full text-white"
                          onClick={() =>
                            history.push({
                              pathname: "places-details",
                              state: {
                                place: place,
                              },
                            })
                          }
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

// {places &&
//   places.hospitals.map((place) => {
//     return (
//       <div className="col-lg-4 col-md-6 mb-5">
//         <div className="card bg-transparent border-0">
//           <img
//             src={
//               place?.image_url ||
//               "https://eventective-media.azureedge.net/1892263_md.jpg"
//             }
//             alt=""
//             className="img-fluid hotel_images rounded"
//           />

//           <div className="card-body mt-2">
//             <div className="blog-item-meta">
//               <a
//                 href="#home"
//                 className="text-white-50 text-capitalize"
//               >
//                 Category / {place?.type}
//               </a>
//             </div>

//             <h3 className="mt-3 mb-4">
//               <a
//                 href="#home"
//                 className="text-white place_name fs-4"
//               >
//                 {place?.name.slice(0, 20)}
//               </a>
//             </h3>

//             <button
//               href="blog-single.html"
//               className="btn-small btn-solid-border btn-round-full text-white"
//               onClick={() =>
//                 history.push({
//                   pathname: "places-details",
//                   state: {
//                     place: place,
//                   },
//                 })
//               }
//             >
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   })}{" "}
// {places &&
//   places.barbers.map((place) => {
//     return (
//       <div className="col-lg-4 col-md-6 mb-5">
//         <div className="card bg-transparent border-0">
//           <img
//             src={
//               place?.image_url ||
//               "https://eventective-media.azureedge.net/1892263_md.jpg"
//             }
//             alt=""
//             className="img-fluid hotel_images rounded"
//           />

//           <div className="card-body mt-2">
//             <div className="blog-item-meta">
//               <a
//                 href="#home"
//                 className="text-white-50 text-capitalize"
//               >
//                 Category / {place?.type}
//               </a>
//             </div>

//             <h3 className="mt-3 mb-4">
//               <a
//                 href="#home"
//                 className="text-white place_name fs-4"
//               >
//                 {place?.name.slice(0, 20)}
//               </a>
//             </h3>

//             <button
//               href="blog-single.html"
//               className="btn-small btn-solid-border btn-round-full text-white"
//               onClick={() =>
//                 history.push({
//                   pathname: "places-details",
//                   state: {
//                     place: place,
//                   },
//                 })
//               }
//             >
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   })}
