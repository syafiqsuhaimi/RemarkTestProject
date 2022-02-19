import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import movie from '../api/movie';

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    movie.getMovies()
      .then(res => this.setState({ movies: res.data.Search }))
      .catch(err => console.log("fetch movies error", err))
  }

  render() {
    const { movies } = this.state

    if (movies.length === 0)
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.infoText}>No movies available for you right now</Text>
        </View>
      )

    return (
      <ScrollView>
        {movies.map(movie => {
          return (
            <View key={movie.imdbID} style={styles.row}>
              <Image style={styles.imgContainer} source={{ uri: movie.Poster }} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{movie.Title}</Text>
                <Text>{movie.Year}</Text>
                <Text>{movie.Type}</Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  emptyContainer: {
    marginTop: 40,
    display: "flex",
    alignItems: "center"
  },
  infoText: {
    textAlign: "center"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#3D3D3D"
  },
  imgContainer: {
    width: 100,
    height: 100
  },
  textContainer: {
    marginLeft: 10
  },
  title: {
    fontWeight: "bold",
    color: "black"
  }
})

export default Dashboard;