import React from 'react'
import './school_info_style.css';
import logo from '../Images/logo.jpg';
const SchoolInfo=()=>{
    return(
        <>
        <div class="school_info">
            <div className="container">    
                      
                <div className="logo_container">
                    <img src={logo} alt="logo" />
                </div>
                <div class="name_container">
                    <div className="school_name">
                        <div>Divine Public School</div>
                    </div>
                    <div className='school_address'>
                        <div>Chandlasho Kuru Lohardaga 835213</div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default SchoolInfo;

