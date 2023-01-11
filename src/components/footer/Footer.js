import React from 'react';
import { BsInstagram } from 'react-icons/bs'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./footer.scss"

const Footer = () => {
    return (
        <>
            <footer className='h-72 bg-white mx'>
                <div className='border-solid border-b-[1px] mx-8'></div>
                <h2 className='text-regal-borown text-[22px] font-light md:text-[28px] tracking-[16px] text-center my-4'>Akwa</h2>
                <div className='socailMSection flex gap-12 justify-center'>
                    <a href="https://web.facebook.com/" target="_blank" rel="noreferrer">
                        <GrFacebookOption size={20} />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <AiOutlineTwitter size={20} />
                    </a>
                    <a href="https://pinterest.com/" target="_blank" rel="noreferrer">
                        <FaPinterestP size={20} />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <BsInstagram size={20} />
                    </a>
                </div>
                <div className='allLink my-7'>
                    {/**Men */}
                    <div className='contentLink'>
                        <div className='menLink'>
                            <Link to="/men">
                                <h2>Men's</h2>
                            </Link>
                            <Link to="/men/clothing">
                                <h3>clothing</h3>
                            </Link>
                            <Link to="/men/jackets">
                                <h3>Jackets</h3>
                            </Link>
                            <Link to="/men/shorts">
                                <h3>Shorts</h3>
                            </Link>
                            <Link to="/men/pants">
                                <h3>Pants</h3>
                            </Link>
                            <Link to="/men/jeans">
                                <h3>Jeans</h3>
                            </Link>
                        </div>
                        {/**Women */}
                        <div className='womenLink'>
                            <Link to="/women">
                                <h2>Women's</h2>
                            </Link>
                            <Link to="/women/clothing">
                                <h3>clothing</h3>
                            </Link>
                            <Link to="/women/jackets">
                                <h3>Jackets</h3>
                            </Link>
                            <Link to="/women/dresses">
                                <h3>Dresses</h3>
                            </Link>
                            <Link to="/women/pants">
                                <h3>Pants</h3>
                            </Link>
                            <Link to="/women/jeans">
                                <h3>Jeans</h3>
                            </Link>
                        </div>
                    </div>
                    <div className='inputSection mt-3 mb-6'>
                        <form>
                            <label htmlFor="fname">Be The First To Know With Our Emails</label>
                            <p>If texts are more your style, we can send those too.</p>
                            <input id='fname' type="email"
                                placeholder="Enter your Email Address"
                            />
                            <button className='btnSub'>Subscribe</button>
                        </form>
                        <img className='mt-2' src='https://i.ibb.co/Qfvn4z6/payment.png' alt='' />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;