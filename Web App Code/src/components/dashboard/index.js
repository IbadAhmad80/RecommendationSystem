import React from "react";
import "./styles/index.css";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout, storage } from "../../firebase";
import { ClipLoader } from "react-spinners";
import cogoToast from "cogo-toast";
import { AiOutlineCloudUpload } from "react-icons/ai";
import firebase from "firebase/compat/app";
import StarRatings from "react-star-ratings";
import axios from "axios";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [noOfReviews, setNoOfReviews] = React.useState(null);
  const history = useHistory();
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
  const [userImage, setUserImage] = React.useState(null);
  const [favPlaces, setFavPlaces] = React.useState(null);

  const handleChange = async (e) => {
    let selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setError("");
      const storageRef = storage.ref(selected.name);
      storageRef.put(selected).on(
        "state_changed",
        (snap) => {},
        (err) => {
          setError(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          url &&
            db
              .collection("users")
              .get()
              .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                  if (doc.data().email === currentUser?.email) {
                    firebase
                      .firestore()
                      .collection("users")
                      .doc(doc.id)
                      .update({
                        photoURL: url,
                      })
                      .then(() => {
                        cogoToast.info("Image has been updated successfully");
                        setUserImage(url);
                      });
                  }
                });
              });
        }
      );
    } else {
      setFile(null);
    }
  };

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();

      const data = await query.docs[0]?.data();

      setCurrentUser(data);

      setUserImage(data?.photoURL);
    } catch (err) {
      alert("An error occured while fetching user data");
    }
  };

  React.useEffect(() => {
    if (loading) return;
    if (!user) {
      cogoToast.error("Please Log in / Sign Up First!");
      return history.replace("/sign-in");
    }
    fetchUserName();
    cogoToast.success(`Welcome ${currentUser?.name || ""}!`);
  }, [user, loading]);

  React.useEffect(() => {
    if (!currentUser) return;
    axios.get(`/api/reviewsCount?userID=${currentUser?.email}`).then((res) => {
      if (res.status === 204) {
        setNoOfReviews(0);
      } else setNoOfReviews(res.data);
    });
  }, [currentUser]);

  React.useEffect(() => {
    if (!currentUser) return;
    axios
      .get(`/api/getFavPlace?userID=${currentUser?.email}`)
      .then(({ data, status }) => {
        if (status === 200) {
          setFavPlaces(data);
        }
      });
  }, [currentUser]);

  const sortPlaces = () => {
    if (favPlaces) {
      let places = favPlaces;
      places.sort(
        (a, b) => parseFloat(b.review_count) - parseFloat(a.review_count)
      );

      setFavPlaces(places);
      setError("");
    }
  };

  return (
    <div className="wrapper">
      <nav className="nav">
        <ul className="nav__list" role="menubar">
          <li className="nav__item nav__item--isActive" title="Home">
            <Link
              to="/"
              className="nav__link focus--box-shadow"
              role="menuitem"
              aria-label="Home"
            >
              <svg
                className="nav__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path
                  fill="#6563ff"
                  d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"
                />
              </svg>
            </Link>
          </li>

          <li className="nav__item" title="About">
            <Link
              to="/about"
              className="nav__link focus--box-shadow"
              role="menuitem"
              aria-label="Informational messages"
            >
              <svg
                className="nav__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path d="M7,10H9A1,1,0,0,0,9,8H7a1,1,0,0,0,0,2ZM21,4H13V3a1,1,0,0,0-2,0V4H3A1,1,0,0,0,2,5V15a3,3,0,0,0,3,3H9.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L11,19.41V21a1,1,0,0,0,2,0V19.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L14.41,18H19a3,3,0,0,0,3-3V5A1,1,0,0,0,21,4ZM20,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V6H20ZM7,14h6a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z" />
              </svg>
            </Link>
          </li>
          <li className="nav__item" title="Search Place">
            <Link
              to="/search"
              className="nav__link focus--box-shadow"
              role="menuitem"
              aria-label="Collections"
            >
              <svg
                className="nav__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
              </svg>
            </Link>
          </li>
          {/* <li className="nav__item">
            <Link
              to="/contact"
              className="nav__link focus--box-shadow"
              role="menuitem"
              aria-label="Analytics"
            >
              <svg
                className="nav__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="new 0 0 24 24"
                role="presentation"
              >
                <path d="M12,11a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V12A1,1,0,0,0,12,11Zm0-3a1,1,0,1,0,1,1A1,1,0,0,0,12,8Zm0-6A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z" />
              </svg>
            </Link>
          </li> */}
        </ul>
      </nav>
      <main className="main">
        <header className="header">
          <div className="header__wrapper">
            <div className="profile"></div>
          </div>
        </header>
        <section className="wrapper_section">
          <header className="section__header">
            <h2 className="section__title">Statistics</h2>
          </header>
          <ul className="team">
            <li className="team__item">
              <a className="team__link focus--box-shadow" href="#home">
                {/* <div className="team__header">
                   <ul className="photo">
                    <li className="photo__item">
                      <span className="photo__substrate">+2</span>
                    </li>
                    <li className="photo__item">
                      <img
                        src="/images/img/julian-wan-WNoLnJo7tS8-unsplash.jpg"
                        alt="Jack's photo"
                      />
                    </li>
                    <li className="photo__item">
                      <img
                        src="/images/img/seth-doyle-uJ8LNVCBjFQ-unsplash.jpg"
                        alt="Jessica's photo"
                      />
                    </li>
                  </ul> 
                </div> */}
                <div className="team__inform text-center">
                  <p className="team__name">No of Reviews Posted</p>
                  <p className="text-center fw-bolder text-black">
                    {noOfReviews === null ? (
                      <ClipLoader color="maroon" loading size={20} />
                    ) : (
                      noOfReviews
                    )}
                  </p>
                </div>
              </a>
            </li>
            <li className="team__item">
              <a className="team__link focus--box-shadow" href="#home">
                {/* <div className="team__header">
                  <ul className="photo">
                    <li className="photo__item">
                      <span className="photo__substrate">+6</span>
                    </li>
                    <li className="photo__item">
                      <img
                        src="/images/img/raychan-9UkAHVs5y7Y-unsplash.jpg"
                        alt="Yulia's photo"
                      />
                    </li>
                    <li className="photo__item">
                      <img
                        src="/images/img/seth-doyle-uJ8LNVCBjFQ-unsplash.jpg"
                        alt="Jessica's photo"
                      />
                    </li>
                  </ul>
                </div> */}
                <div className="team__inform text-center">
                  <p className="team__name">No of Favourite Places</p>
                  <p className="text-center fw-bolder text-black">
                    {favPlaces?.length}
                  </p>
                </div>
              </a>
            </li>
            <li className="team__item">
              <a className="team__link focus--box-shadow" href="#home">
                <div className="team__header">
                  <ul className="photo">
                    <li className="photo__item">
                      <img
                        src="/images/img/seth-doyle-uJ8LNVCBjFQ-unsplash.jpg"
                        alt="Jessica's photo"
                      />
                    </li>
                  </ul>
                </div>
                <div className="team__inform">
                  <p className="team__name">Design development</p>
                  <time className="date" datetime="2020-01-10T10:00:00">
                    10 January, 2020
                  </time>
                </div>
              </a>
            </li>
          </ul>
        </section>
        <section className="wrapper_section">
          <header className="section__header">
            <h2 className="section__title">Favourite Places</h2>
            <div className="section__control">
              <button
                className="section__button focus--box-shadow"
                type="button"
                aria-label="Filter projects"
                onClick={sortPlaces}
                title="Sort Places"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <path d="M20,8.18V3a1,1,0,0,0-2,0V8.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V13.82a3,3,0,0,0,0-5.64ZM19,12a1,1,0,1,1,1-1A1,1,0,0,1,19,12Zm-6,2.18V3a1,1,0,0,0-2,0V14.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V19.82a3,3,0,0,0,0-5.64ZM12,18a1,1,0,1,1,1-1A1,1,0,0,1,12,18ZM6,6.18V3A1,1,0,0,0,4,3V6.18a3,3,0,0,0,0,5.64V21a1,1,0,0,0,2,0V11.82A3,3,0,0,0,6,6.18ZM5,10A1,1,0,1,1,6,9,1,1,0,0,1,5,10Z" />
                </svg>
              </button>
              <button
                className="section__button section__button--painted focus--box-shadow"
                title="Add New Place"
                type="button"
                aria-label="Add New project"
                onClick={() => history.replace("/search")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="presentation"
                >
                  <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
                </svg>
              </button>
            </div>
          </header>
          <ul className="project">
            {favPlaces &&
              favPlaces.map((place) => {
                return <SingleItem place={place} />;
              })}
          </ul>
        </section>
      </main>
      <aside className="aside">
        <section className="wrapper_section">
          <div className="aside__control">
            <div>
              <button
                className="aside__button aside__button--notification focus--box-shadow "
                type="button"
                onClick={logout}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 27 27"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
              <p
                className="text-black fs-5  d-inline"
                style={{ paddingTop: "5px !important" }}
              >
                Logout
              </p>
            </div>
          </div>
          <div className="profile-main">
            <button className="profile-main__setting" type="button">
              {userImage ? (
                <img
                  className="profile-main__photo"
                  src={userImage}
                  alt="Profile pic"
                />
              ) : (
                <p className="generated_photo">
                  {currentUser?.name.slice(0, 1).toUpperCase() || (
                    <ClipLoader color="maroon" loading size={20} />
                  )}
                </p>
              )}
              <div className="image-overlay">
                <label for="image-input" classsName="image-upload-icon">
                  <AiOutlineCloudUpload />
                  <input
                    type="file"
                    id="image-input"
                    onChange={handleChange}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
            </button>
            <h1 className="profile-main__name">
              {currentUser?.name?.split(" ")[0] || (
                <ClipLoader color="maroon" loading size={20} />
              )}
            </h1>
          </div>
          <ul className="statistics">
            <li className="statistics__entry">
              <h6 className="statistics__entry-description" href="#home">
                Username
              </h6>
              <span className="statistics__entry-quantity">
                {currentUser?.name || (
                  <ClipLoader color="maroon" loading size={20} />
                )}
              </span>
            </li>
            <li className="statistics__entry">
              <h6 className="statistics__entry-description" href="#home">
                Email
              </h6>
              <span className="statistics__entry-quantity">
                {" "}
                {currentUser?.email || (
                  <ClipLoader color="maroon" loading size={20} />
                )}
              </span>
            </li>
            <li className="statistics__entry">
              <h6 className="statistics__entry-description" href="#home">
                Created At
              </h6>
              <span className="statistics__entry-quantity">
                {currentUser &&
                  new Date(currentUser.createdAt).toISOString().slice(0, 10)}
              </span>
            </li>
          </ul>
          <div className="banner-wrapper">
            {" "}
            <div className="banner">
              <h3 className="banner__title">Want Us on Call?</h3>
              <p className="banner__description">
                Can Absolutely do it easy way
              </p>
              <a
                href="tel:+23-3032182370"
                className="banner__button"
                type="button"
              >
                Lets Go
              </a>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
}

function SingleItem({ place }) {
  const history = useHistory();
  return (
    <li className="project__item">
      <a className="project__link focus--box-shadow">
        <div className="project__wrapper">
          <div className="project__element project__icon">
            <img
              src={place?.image_url}
              alt="place image"
              className="place-image"
            />
          </div>
          <div className="project__element project__inform">
            <h6
              className="project__inform-name cursor-pointer"
              style={{ lineHeight: "1", cursor: "pointer" }}
              onClick={() =>
                history.push({
                  pathname: "places-details",
                  state: {
                    place,
                  },
                })
              }
            >
              {place?.name}
            </h6>
            <h6
              className="project__inform-desc pt-1"
              style={{ lineHeight: "1.2" }}
            >
              {place?.location?.address1},{place?.location?.city},
              {place?.location?.country}
            </h6>
            <span>
              <StarRatings
                rating={place?.system_rating || place?.rating}
                starDimension="18px"
                starSpacing="0px"
                starRatedColor={"#F77575"}
                emptyRatedColor={"white"}
              />
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}
