import React from "react";
import ActivityFeed from "./activity-feed";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faRetweet,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const Tweet = ({
  tweet = {
    avatarIcon: "elonmusk.jpeg",
    userName: "Elon Musk",
    handle: "elonmusk",
    time: "23h",
    tweetText: "Amazing show about @Inspiration4x mission",
    tweetLink: "",

    // link card
    hasLinkCard: true,
    linkCardImage: "inspiration4.jpeg",
    linkCardTitle:
      "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    linkCardText:
      "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
    linkCardLinkTitle: "netflix.com",

    // image
    hasImage: false,
    image: "",

    commentCount: "4.2K",
    retweetCount: "3.5K",
    likeCount: "37.5K",
  },
}) => {
  return (
    <>
      {/* infomation about your following on this tweet */}
      <div>
        <ActivityFeed activityFeed={tweet.activityFeed} />
      </div>

      {/* tweet */}
      <div className="card text-black rounded-0 bg-white border-1 border-secondary">
        <div className="card-body">
          <div className="d-flex justify-content-start">
            <img
              src={`/images/${tweet.avatarIcon}`}
              alt=""
              width="48px"
              height="48px"
              className="me-2 rounded-circle"
            />
            <div>
              <div className="d-flex">
                <h6 className="card-title me-1">{tweet.userName}</h6>
                <FontAwesomeIcon icon={faCircleCheck} />
                <div className="text-dark me-2">@{tweet.handle}</div>
                <div className="text-dark">- {tweet.time}</div>
              </div>
              <p className="card-text">
                {tweet.tweetText}
                {tweet.hastweetLink
                  ? `<a href={tweet.tweetLink} className="text-decoration-none">{tweet.tweetLink}</a>`
                  : ""}
              </p>
              {/* link card in tweet */}
              {tweet.hasLinkCard ? (
                <div
                  className="card border-1 border-secondary mb-3 btn p-0 text-start"
                  href="#"
                >
                  <img
                    src={`/images/${tweet.linkCardImage}`}
                    className="card-img-top"
                    alt="..."
                    maxHeight="200px"
                    width
                  />
                  <div className="card-body">
                    <h6 className="">{tweet.linkCardTitle}</h6>
                    <div className="card-text text-dark">
                      {tweet.linkCardText}
                    </div>
                    <div className="text-dark d-flex align-items-center">
                      <i className="fa-solid fa-link me-1"></i>
                      {tweet.linkCardLinkTitle}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* image in tweet */}
              {tweet.hasImage
                ? `
                <div
                  className="card border-1 border-secondary mb-3 btn p-0 text-start"
                  href="#"
                >
                  <img
                    src={tweet.image}
                    className="card-img-top"
                    alt="..."
                    maxHeight="200px"
                    width
                  />
                </div>
              `
                : ""}
              <div className="row text-dark">
                <div className="col-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faComment} />
                  <span>{tweet.commentCount}</span>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faRetweet} />
                  <span>{tweet.retweetCount}</span>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faHeart} />
                  <span>{tweet.likeCount}</span>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// function addLinkToHandle(tweetText) {
//   // Find all instances of "@" followed by a word
//   let mentions = tweetText.match("/@w+/g") || [];
//   console.log("mentions:", mentions);

//   // Iterate through each mention
//   for (let i = 0; i < mentions.length; i++) {
//     // Get the username
//     let username = mentions[i].substring(1);

//     // Replace the mention with a link to the user's profile
//     tweetText = tweetText.replace(
//       mentions[i],
//       '<a href="https://twitter.com/' +
//         username +
//         '" className="text-decoration-none">' +
//         mentions[i] +
//         "</a>"
//     );
//   }
//   return tweetText;
// }

export default Tweet;
