/*import libs*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import LocalOffer from '@material-ui/icons/LocalOffer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {NavLink} from "react-router-dom";

/*import components*/
import ThemeContext from './configs/context';
import route from './configs/route';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },

  navlink:{
    textDecoration:'none'
  },
  nav_active:{
    background:'red'
  }
});

class NavBar extends React.Component {
  state = {
    submenu:{
      is_open_course_menu:false,
      is_open_class_menu:false,
      is_open_post_menu:false
    }
  };

  handleClick = (param) => {
    this.setState(state => (
      {
        submenu:{
          [param]:!this.state.submenu[param]
        }
      }
    ));
  };

  render() {
    const { classes } = this.props;

    return (
        <ThemeContext.Consumer>
          {context=>(
              <div className={classes.root}>
                <List  component="nav">

                  {/*Menu quản lý khóa học */}
                  <ListItem button onClick={this.handleClick.bind(this,"is_open_course_menu")}>
                    <ListItemIcon>
                      <LocalOffer />
                    </ListItemIcon>
                    <ListItemText inset primary={context.txt_nav_menus.txt_course_management} />

                    {this.state.submenu.is_open_course_menu ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>


                  <Collapse in={this.state.submenu.is_open_course_menu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <NavLink className={classes.navlink} to={route.base + route.nav.course.base + route.nav.course.course_list}>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText inset primary={context.txt_nav_menus.txt_course_list} />
                        </ListItem>
                      </NavLink>

                      <NavLink className={classes.navlink} to={route.base + route.nav.course.base + route.nav.course.course_reg}>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText inset primary={context.txt_nav_menus.txt_course_reg} />
                        </ListItem>
                      </NavLink>

                    </List>
                  </Collapse>
                  {/*Kết thúc Menu quản lý khóa học*/}

                  {/*Menu quản lý lớp học*/}
                  <ListItem button onClick={this.handleClick.bind(this,"is_open_class_menu")}>
                    <ListItemIcon>
                      <LocalOffer />
                    </ListItemIcon>
                    <ListItemText inset primary={context.txt_nav_menus.txt_class_management} />

                    {this.state.submenu.is_open_class_menu ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>

                  <Collapse in={this.state.submenu.is_open_class_menu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <NavLink className={classes.navlink} to={route.base + route.nav.classs.base + route.nav.classs.class_list}>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText inset primary={context.txt_nav_menus.txt_class_list} />
                        </ListItem>
                      </NavLink>

                      <NavLink className={classes.navlink} to={route.base + route.nav.classs.base + route.nav.classs.class_reg}>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText inset primary={context.txt_nav_menus.txt_class_reg} />
                        </ListItem>
                      </NavLink>

                    </List>
                  </Collapse>
                  {/*Kết thúc menu quả lý lớp học*/}

                  {/*Quản lý bài viết*/}
                  <ListItem button onClick={this.handleClick.bind(this,'is_open_post_menu')}>
                    <ListItemIcon>
                        <LocalOffer />
                    </ListItemIcon>
                    <ListItemText inset primary={context.txt_nav_menus.txt_post_management} />
                    {this.state.submenu.is_open_post_menu ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={this.state.submenu.is_open_post_menu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <NavLink className={classes.navlink} to={route.base + route.nav.post.base + route.nav.post.post_list}>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary={context.txt_nav_menus.txt_post_list} />
                      </ListItem>
                      </NavLink>
                      <NavLink className={classes.navlink} to={route.base + route.nav.post.base + route.nav.post.post_create}>
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText inset primary={context.txt_nav_menus.txt_post_create} />
                      </ListItem>
                      </NavLink>
                    </List>
                  </Collapse>
                  {/*Kết thúc menu quản lý bài viết*/}

                  {/*menu cài đặt kênh*/}
                  <NavLink className={classes.navlink} to={route.base + route.nav.channel_settings.base}>
                    <ListItem button>
                      <ListItemIcon>
                          <LocalOffer />
                      </ListItemIcon>
                      <ListItemText inset primary={context.txt_nav_menus.txt_channel_settings} />
                    </ListItem>
                  </NavLink>
                  {/*kết thúc menu cài đặt kênh*/}

                </List>
              </div>
            )
          }
          </ThemeContext.Consumer>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
