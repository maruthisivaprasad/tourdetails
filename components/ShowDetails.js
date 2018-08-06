import React, { Component } from 'react'
import { View, TouchableHighlight, Text, ScrollView, ListView } from 'react-native'

_pressRow = (rowID: number) => {
  alert("aaaa")
}

class ShowDetails extends Component {
  constructor(props) {
    super(props)

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })

    this.state = {
      dataSource: this.dataSource.cloneWithRows([
        { nom: 'c' },
        { nom: 'd' },
      ]),
    }
  }

  renderRow(record) {
    return (
      <View>
        <TouchableHighlight onPress={() => this._pressRow.bind(this)}>
          <View>
            <Text>{record.nom}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <ScrollView scrollsToTop={false}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </ScrollView>
    )
  }
}

export default ShowDetails