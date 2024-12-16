import React, { Component } from "react";
import newImage from "../assets/image.png"

export default class NewsItem extends Component {
  constructor() {
    super();
  }

  truncateString = (str, num) => {
    if (!str) {
      return "";
    }

    return str.length <= num ? str : str.slice(0, num) + "...";
  };

  formatDate = (date) => {
    const dateTo = new Date(date);

    const year = dateTo.getFullYear();
    const month = String(dateTo.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(dateTo.getDate()).padStart(2, "0");

    // Extract the time part (HH:MM)
    const hours = String(dateTo.getHours()).padStart(2, "0");
    const minutes = String(dateTo.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}: ${minutes}`;
  };

  render() {
    let { title, desc, imageUrl, newsUrl, author, date, source } = this.props;

    let shortTitle = this.truncateString(title, 60);
    let shortDesc = this.truncateString(desc, 80);

    return (
      <div className="m-3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : newImage
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title ? shortTitle : "No Title Available"}
            </h5>
            <p className="card-text">
              {desc ? shortDesc : "No Description Available"}
              {/* <strong>{content}</strong> */}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : ""} on {date ? this.formatDate(date) : ""}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-info">
              Read More
            </a>
          </div>
          <span className="position-absolute top-0 end-0 translate-end badge rounded-pill bg-danger">
            {source}
            {/* <span className="visually-hidden">unread messages</span> */}
          </span>
        </div>
      </div>
    );
  }
}
