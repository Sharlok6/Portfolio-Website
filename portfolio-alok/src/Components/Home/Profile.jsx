import React from 'react'
import Typical from 'react-typical';
import { Button,makeStyles } from '@material-ui/core';
import "./Profile.css";

const useStyles = makeStyles({
    resumebtn: {
        backgroundColor: '#ff5823',
        color:'white',
        borderRadius: '25px',
        fontSize: '10px',
        paddingLeft: '40px',
        paddingRight: '40px',
        padding:'10px',
        fontWeight: 'bold',
        "&:hover": {
            backgroundColor: 'aliceblue',
            color: 'black',
            borderColor: 'black'
        },
        margin: '10px'
    },
    hirebtn: {
        backgroundColor: '#1f2235',
        color:'white',
        borderRadius: '25px',
        fontSize: '10px',
        paddingLeft: '40px',
        paddingRight: '40px',
        padding:'10px',
        fontWeight: 'bold',
        "&:hover": {
            backgroundColor: 'aliceblue',
            color: 'black',
            borderColor: 'black',
        },
        margin:'10px'
    },
    name: {
        fontFamily: 'Palatino'
    },
    profileroletagline: {
        fontFamily: "Monospace",
        color: 'rgb(221, 66, 18)',
        fontSize: '20px'
    }
})

const Profile =()=>{
    const styles = useStyles();
    return(
        <>
            <div className='profile-container'>
                <div className="profile-parent">
                    <div className="profile-details">
                        <div className="colz">
                            <div className="colz-icon">
                            <a href='#'>
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href='#'>
                                <i className="bi bi-google"></i>
                            </a>
                            <a href='#'>
                                <i className="bi bi-whatsapp"></i>
                            </a>
                            <a href='#'>
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href='#'>
                                <i className="bi bi-twitter"></i>
                            </a>
                            </div>
                        </div> {/*colz div end here*/ }
                        <div className="profile-details-name">
                            <span >
                                {" "}
                                Hello, I'm <span className="highlighted-text">Alok Sharma</span>
                            </span>
                        </div>
                        <div className="profile-details-role">
                            <span className="primary-text">
                                {" "}
                                <h1>
                                    {" "}
                                    <Typical 
                                    loop = {Infinity}
                                    steps = {[
                                        "Enthusiastic Dev ♥️",
                                        1000,
                                        "Front end Developer😇",
                                        1000,
                                        "Competetive Programming expert 😎",
                                        1000,
                                        "Worked on MySQL😌",
                                        1000,
                                        "Adobe Priemere Pro knowledge💻",
                                        1000,
                                    ]}
                                    />
                                </h1>
                                <span className={styles.profileroletagline}>
                                    Knack of solving problems in Competetive Programming
                                </span>
                            </span>
                        </div>
                        <div className="profile-options">
                            <Button variant='outlined' className={ styles.hirebtn}>
                                {""}
                                Hire Me babe
                            </Button>
                            <Button variant='outlined' className = {styles.resumebtn} href='Resume.pdf' download='Resume.pdf'>
                                    Get Resume
                                </Button>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <div className="profile-picture-background"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profile;
