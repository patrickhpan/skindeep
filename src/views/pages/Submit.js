import React from 'react';
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  Button
} from 'react-mdl'
import Dropzone from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss'
import $ from 'jquery';

class Submit extends React.Component {
  constructor() {
    super();
    this.state = {
      file: [],
      crop: null,
      token: null
    };
  }
  onDrop(file) {
    this.setState({file: file});
  }
  onChangeCrop(crop) {
    this.setState({crop: crop});
  }
  onClickSubmit() {
    var reader = new window.FileReader();
    console.log(this.state.file[this.state.file.length-1]);
    reader.readAsDataURL(this.state.file[this.state.file.length-1]);
    reader.onloadend = function() {
      $.ajax({
        url: 'http://localhost:3001/submit',
        data: {
          image: reader.result,
          crop: this.state.crop
        },
        success: function(data) {
          this.setState({token: <div><br/>Your submission token is: <pre>{data}</pre></div>})
        }.bind(this),
        error: function() {
          this.setState({token: <div><br/>Your submission token is: <pre>abc</pre></div>})
        }.bind(this)
      })
    }.bind(this)
  }
  render() {
    if(this.state.file.length !== 0) {
      var before = "Please crop your image such that the mole is centered and occupies around half of the image."
      var inner = <ReactCrop keepSelection onChange={this.onChangeCrop.bind(this)} src={this.state.file[this.state.file.length-1].preview} />;
      var after = <Button disabled={this.state.crop == null} className="margin-center" raised colored ripple onClick={this.onClickSubmit.bind(this)}>{this.state.crop === null? "Crop Required" : "Submit!" }</Button>
    } else {
      var before = "Submit an image here for a diagnosis. After submission, you'll receive a token and be able to claim your diagnosis. Then, please crop your image such that the mole is centered and occupies around half of the image."
      var inner = <Dropzone id="dropzone" onDrop={this.onDrop.bind(this)}>
        <div>Tap to select an image!</div>
      </Dropzone>
      var after = null;
    }
    return <Grid className="MainGrid">
      <Cell col={12}>
        <Card shadow={4} className="TextCard">
          <CardTitle className="CardTitle">Submit an Image</CardTitle>
          <CardText>
            {before}<br/>
            {inner}
            {after}
            {this.state.token}
          </CardText>
        </Card>
      </Cell>
    </Grid>
  }
}

export default Submit;
