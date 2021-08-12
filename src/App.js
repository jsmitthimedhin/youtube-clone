import React from 'react';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import youtube from './components/youtube';
import YoutubeEmbed from './components/YoutubeEmbed';
import 'semantic-ui-css/semantic.min.css';
import './style.css';

class App extends React.Component {
  state = { videos: [], selectedVideo: null }
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { 
        q: term,
      }
    })
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
    console.log(video);
  }

  componentDidMount() {
    this.onTermSubmit('Buildings');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                  <YoutubeEmbed embedId={this.state.selectedVideo} />
                  <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="five wide column">
                  <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App;