import React from 'react';
import {Button} from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// yarn add @mui/material @emotion/react @emotion/styled
class AppMUI extends React.Component {
  state = {number: 0};
  increment_onclick = () => {
    this.setState({number:this.state.number+25});
  }
  decrement_onclick = () => {
    this.setState({number:this.state.number-1});
  }
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <Button variant='contained' onClick={this.increment_onclick}>
            +
        </Button>
        <Button variant='contained' onClick={this.decrement_onclick}>
            -
        </Button>
        <br/>
        <Button variant="contained">Contained</Button>
        <BottomNavigation
  showLabels
  value={1}
  onChange={(event, newValue) => {
  }}
>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>
      </div>
    );
  }
}

export default AppMUI;
