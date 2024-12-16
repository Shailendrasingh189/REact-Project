import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 16,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1, // Start at page 1 instead of 0
      totalResults: 0,
    };

    // Capitalize category for the document title
    let capitalize =
      this.props.category.charAt(0).toUpperCase() +
      this.props.category.slice(1);
    document.title = `${capitalize} - NewsDaily`;
  }

  async fetchNews(page) {
    const { country, category, pageSize } = this.props;

    if (this.state.loading) return;

    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=b4aa2cd601444f808d659686452b8f92&page=${page}&pageSize=${pageSize}`;

    try {
      let response = await fetch(url);
      if (!response.ok) throw new Error(`Error ${response.status}`);
      let data = await response.json();

      if (data.articles) {
        this.setState({
          articles: [...this.state.articles, ...data.articles],
          totalResults: data.totalResults,
          loading: false,
        });
      }
    } catch (error) {
      console.error("Error fetching news articles:", error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.fetchNews(this.state.page);
  }

  fetchMoreData = () => {
    if (!this.state.loading) {
      this.setState(
        (prevState) => ({ page: prevState.page + 1 }),
        () => {
          this.fetchNews(this.state.page);
        },
      );
    }
  };

  render() {
    return (
      <div className="my-3 p-4 mt-5">
        <h2>{this.props.category} NewsDaily - Top Headlines</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
          style={{ overflow: "visible" }}
        >
          <div className="row m-2">
            {this.state.articles
              .filter((element) => element.title !== "[Removed]")
              .map((element, index) => (
                <div className="col-md-3 col-sm-6" key={index}>
                  <NewsItem
                    title={element.title}
                    desc={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    content={element.content}
                    source={element.source.name}
                  />
                </div>
              ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
