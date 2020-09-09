import React, {Component} from "react";
import ReactDOM from 'react-dom';


import Aboutsection from  '../components/about_section/Aboutsection'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import Navbar from '../components/Navbar/index';
import CardHackrio from '../components/cardHackrio/cardHackrio';
import Footer from '../components/footer/index';
import ReferenceCourseTag from '../components/ReferenceCourseTag/ReferenceCourseTag'

class ParticularOuterMostCategory extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
      }
    render() {
        return (
        <div>
            <Navbar/>
            <Aboutsection displayName={this.props.displayName} />
            <BreadCrumb />  
            <CardHackrio category={this.props.displayName}/>
            <ReferenceCourseTag category={this.props.displayName} />
            <Footer />
        </div>
        );
    }
}

export default ParticularOuterMostCategory;