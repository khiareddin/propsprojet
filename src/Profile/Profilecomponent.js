import React from "react";
import PropTypes from 'prop-types';

const Profilecomponent = (props) => {
    // props destructring ==> const Profilecomponent = ({FullName}) => {
    // console.log(props);
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', flexWrap:'wrap', width:'20%', margin:'auto auto'}}>
            <h3 onClick={()=>props.handlename(props.FullName)}>My Full Name is: {props.FullName}</h3>
            <h3>Bio:{props.bio}</h3>
            <h3>Profession: {props.Profession}</h3>
            <br/>
            {props.children}
            {/* call the default props */}
            {props.ProfilImage}
        </div>

    );
};

export default Profilecomponent;
// Define the default props for Profile component. 
Profilecomponent.defaultProps={
ProfilImage: "loading..."
}
// Use PropsType to check props
Profilecomponent.propTypes={
    FullName: PropTypes.string
}
