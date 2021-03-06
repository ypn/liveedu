import React from 'react';
import {Route,Router} from "react-router-dom";

import route from './configs/route';

/*import pages*/
import CourseRegister from './pages/courses/course_reg/CourseRegister';
import ClassRegister from './pages/classes/class_reg/ClassRegister';
import PostCreate from './pages/posts/post_create/PostCreate';
import ChannelSettings from './pages/channel_settings/ChannelSettings';
import Profile  from './pages/profile/Profile';

const CourseList = ()=> (
  <h1>CourseList</h1>
)

const CourseReg = ()=> (
  <CourseRegister/>
)

const ClassList = ()=> (
  <h1>ClassList</h1>
)

const ClassReg = ()=> (
  <ClassRegister/>
)

const PostList = ()=> (
  <h1>PostList</h1>
)

const PostCreatePage = ()=> (
  <PostCreate/>
)

const ChannelSettingsPage = () =>(
  <ChannelSettings/>
)

const ProfileComponent =()=>(
  <Profile/>
)

export default class MainContent extends React.Component{
  render(){
    return(
      <div>
        <div>
          <Route exact path={route.base + route.nav.course.base + route.nav.course.course_list} component={CourseList} />
          <Route exact path={route.base + route.nav.course.base + route.nav.course.course_reg} component={CourseReg} />

          <Route path={route.base + route.nav.classs.base + route.nav.classs.class_list} component={ClassList} />
          <Route path={route.base + route.nav.classs.base + route.nav.classs.class_reg} component={ClassReg} />

          <Route path={route.base + route.nav.post.base + route.nav.post.post_list} component={PostList} />
          <Route path={route.base + route.nav.post.base + route.nav.post.post_create} component={PostCreatePage} />

          <Route path={route.base + route.nav.channel_settings.base} component={ChannelSettingsPage} />

          <Route path={route.base + route.account_menu.base + route.account_menu.profile} component={ProfileComponent}/>
        </div>
      </div>
    )
  }
}
