import React from 'react';
import {Route} from "react-router-dom";

import HomeMaster from './homepage/HomeMaster';
import BlogMaster from './blog/BlogMaster';
import CourseMaster from './course/CourseMaster';
import LiveMaster from './live/LiveMaster';

const HomeMasterPage = ()=>(
  <HomeMaster/>
)

const BlogMasterPage = ()=>(
  <BlogMaster/>
)

const CourseMasterPage = ()=>(
  <CourseMaster/>
)

const LiveMasterPage = ()=>(
  <LiveMaster/>
)


export default class  MainContent extends React.Component{
  render(){
    return(
      <div  style={{minHeight:400}}>
        <Route exact path="/" component={HomeMasterPage} />
        <Route exact path="/blogs" component={BlogMasterPage} />
        <Route exact path="/courses" component={CourseMasterPage} />
        <Route exact path="/live" component={LiveMasterPage} />
      </div>
    )
  }
}
