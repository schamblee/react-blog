import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
};

let fakeServerData = {
  user: {
    name: 'Steph',
    blogs: [
      {
        title: 'Blog 1',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut eget mollis odio. Maecenas id mi volutpat, vehicula elit at, 
        molestie ex. Maecenas et ex diam. Mauris et placerat nisi, ut finibus nisi. Praesent arcu justo, 
        elementum id leo in, porta fermentum felis. Maecenas a justo augue. Duis blandit nunc orci, 
        ac imperdiet felis pretium non. Aliquam a nisl dolor. Etiam vestibulum fermentum enim. 
        Aliquam nisi lorem, sollicitudin vitae eleifend at, accumsan id mauris. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Quisque vitae nisl congue, sodales nunc condimentum, imperdiet turpis.`
      },
      {
        title: 'Blog 2',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut eget mollis odio. Maecenas id mi volutpat, vehicula elit at, 
        molestie ex. Maecenas et ex diam. Mauris et placerat nisi, ut finibus nisi. Praesent arcu justo, 
        elementum id leo in, porta fermentum felis. Maecenas a justo augue. Duis blandit nunc orci, 
        ac imperdiet felis pretium non. Aliquam a nisl dolor. Etiam vestibulum fermentum enim. 
        Aliquam nisi lorem, sollicitudin vitae eleifend at, accumsan id mauris. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Quisque vitae nisl congue, sodales nunc condimentum, imperdiet turpis.`
      },{
        title: 'Blog 3',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut eget mollis odio. Maecenas id mi volutpat, vehicula elit at, 
        molestie ex. Maecenas et ex diam. Mauris et placerat nisi, ut finibus nisi. Praesent arcu justo, 
        elementum id leo in, porta fermentum felis. Maecenas a justo augue. Duis blandit nunc orci, 
        ac imperdiet felis pretium non. Aliquam a nisl dolor. Etiam vestibulum fermentum enim. 
        Aliquam nisi lorem, sollicitudin vitae eleifend at, accumsan id mauris. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Quisque vitae nisl congue, sodales nunc condimentum, imperdiet turpis.`
      },{
        title: 'Blog 4',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut eget mollis odio. Maecenas id mi volutpat, vehicula elit at, 
        molestie ex. Maecenas et ex diam. Mauris et placerat nisi, ut finibus nisi. Praesent arcu justo, 
        elementum id leo in, porta fermentum felis. Maecenas a justo augue. Duis blandit nunc orci, 
        ac imperdiet felis pretium non. Aliquam a nisl dolor. Etiam vestibulum fermentum enim. 
        Aliquam nisi lorem, sollicitudin vitae eleifend at, accumsan id mauris. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Quisque vitae nisl congue, sodales nunc condimentum, imperdiet turpis.`
      }
    ]
  }
}

class BlogCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>{this.props.blogs.length} blogs </h2>
      </div>
    );
  }
}

/*class WordsCounter extends Component {
  render() {
    let allSongs = this.props.blogs.reduce((content, eachblog) => {
      return songs.concat(eachblog.songs)
    }, [])
    let totalwordCount = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.wordCount
    }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>{totalwordCount} words </h2>
      </div>
    );
  }
}*/

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
        
      </div>
    );
  }
}

class Blog extends Component {
  render() {
    let blog = this.props.blog
    return (
      <div style={{...defaultStyle, width: "25%", display: "inline-block"}}>
        <img />
        <h3>{blog.name}</h3>
        <ul>
          {blog.songs.map(song =>
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style={{...defaultStyle, "fontSize": "54px" }}>
            {this.state.serverData.user.name}'s blog
          </h1>
          <BlogCounter blogs={this.state.serverData.user.blogs}/>
          <HoursCounter blogs={this.state.serverData.user.blogs}/>
          <Filter/>
          {this.state.serverData.user.blogs.map(blog =>
            <Blog blog={blog} /> 
          )}
        </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}


export default App;