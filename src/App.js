import React, { useEffect, useState } from "react";
import Aos from "aos";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "aos/dist/aos.css";
import "./App.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledCarousel,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
    FaSearch,
    FaRegHeart,
    FaUserAlt,
    FaPhoneAlt,
    FaBullhorn,
    FaUtensils,
} from "react-icons/fa";

import { FiShoppingCart, } from "react-icons/fi";
import { GiRockingChair, GiTable, GiBed, GiSofa } from "react-icons/gi";
import { RiArchiveDrawerFill, RiSettings5Line, RiShoppingCart2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocalShipping } from "react-icons/md";
import { BsGiftFill } from "react-icons/bs";
import { GiRoundStar } from "react-icons/gi";
import img1 from "./assets/slide1.jpg";
import img2 from "./assets/slide2.jpg";
import img3 from "./assets/slide3.jpg";
import logo from "./assets/shop.png";
import sofaIllustration from "./assets/sofa-illustration.jpg";
import flor from "./assets/flor.png";
import wing_chair from "./assets/wing_chair.png";
import Background_1 from "./assets/Background_1.jpg";
import a from "./assets/a.jpg";
import b from "./assets/b.jpg";
import c from "./assets/c.jpg";
import d from "./assets/d.jpg";
import e from "./assets/e.jpg";
import f from "./assets/f.jpg";
import g from "./assets/g.jpg";
import h from "./assets/h.jpg";

const items = [
    {
        src: img1,
        key: "1",
    },
    {
        src: img2,
        key: "2",
    },
    {
        src: img3,
        key: "3",
    },
];
const Example = (props) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle1 = () => setModal(!modal);

    return (
        <div>
            <div className="nav1 bg-light">
                <Nav className="mr-auto">
                    <NavItem>
                        <NavLink href="#"><FaPhoneAlt />   1234567890</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"><HiOutlineMail />  support@shopify.com</NavLink>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem>
                        <NavLink href="#">Register</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Login</NavLink>
                    </NavItem>
                </Nav>
            </div>
            <Navbar color="light" light expand="md">
                <NavbarBrand className="mainlogo" href="/" data-aos="zoom-in-down"><div className="iconlogo"><RiSettings5Line /></div><div className="cartlogo"><RiShoppingCart2Fill /></div> <span className="firstletter">S</span>hopify </NavbarBrand>
                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="animation">
                            <NavLink onClick={toggle1}>
                                <FaSearch />
                            </NavLink>
                        </NavItem>
                        <NavItem className="animation">
                            <NavLink href="/components/">
                                <FiShoppingCart />
                            </NavLink>
                        </NavItem>
                        <NavItem className="animation">
                            <NavLink href="/components/">
                                <FaRegHeart />
                            </NavLink>
                        </NavItem>
                        <NavItem className="animation">
                            <NavLink href="/components/">
                                <CgProfile />
                            </NavLink>
                        </NavItem>
                        <NavItem className="animation">
                            <NavLink href="/components/">
                                <FaUserAlt />
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="nav-justify">
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Shop</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">AboutUs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">FAQ</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">ContactUs</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
            <div className="main-items rubberBand">
                <a href="#"><div className="items">< GiRockingChair /></div><span className="item-name">CHAIR</span></a>
                <a href="#"><div className="items">< GiTable /></div><span className="item-name">TABLE</span></a>
                <a href="#"><div className="items">< GiBed /></div><span className="item-name">BED</span></a>
                <a href="#"><div className="items">< GiSofa /></div><span className="item-name">SOFA</span></a>
                <a href="#"><div className="items">< FaUtensils /></div><span className="item-name">UTENSILS</span></a>
                <a href="#"><div className="items">< RiArchiveDrawerFill /></div><span className="item-name">DRAWER</span></a>
            </div>
            <div>
                {" "}
                <UncontrolledCarousel items={items} />
            </div>
            <div>
                <h1 className="heading">How Can We Help ?</h1>
            </div>
            <div className="cardRow1">
                <Row className="row-width">
                    <Col sm="2" data-aos="flip-left">
                        <Card body>
                            <img
                                width="100%"
                                src={sofaIllustration}
                                alt="Card image cap"
                            />
                            <CardTitle tag="h5" className="cardHeading">
                                Sofas
                            </CardTitle>
                        </Card>
                    </Col>
                    <Col sm="2" data-aos="flip-left">
                        <Card body>
                            <img
                                width="100%"
                                src={sofaIllustration}
                                alt="Card image cap"
                            />
                            <CardTitle tag="h5" className="cardHeading">
                                Sofas
                            </CardTitle>
                        </Card>
                    </Col>
                    <Col sm="2" data-aos="flip-left">
                        <Card body>
                            <img
                                width="100%"
                                src={sofaIllustration}
                                alt="Card image cap"
                            />
                            <CardTitle tag="h5" className="cardHeading">
                                Sofas
                            </CardTitle>
                        </Card>
                    </Col>
                    <Col sm="2" data-aos="flip-left">
                        <Card body>
                            <img
                                width="100%"
                                src={sofaIllustration}
                                alt="Card image cap"
                            />
                            <CardTitle tag="h5" className="cardHeading">
                                Sofas
                            </CardTitle>
                        </Card>
                    </Col>
                    <Col sm="2" data-aos="flip-left">
                        <Card body>
                            <img
                                width="100%"
                                src={sofaIllustration}
                                alt="Card image cap"
                            />
                            <CardTitle tag="h5" className="cardHeading">
                                Sofas
                            </CardTitle>
                        </Card>
                    </Col>
                    <Col sm="2" data-aos="flip-left">
                        <Card body>
                            <img
                                width="100%"
                                src={sofaIllustration}
                                alt="Card image cap"
                            />
                            <CardTitle tag="h5" className="cardHeading">
                                Sofas
                            </CardTitle>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div>
                <div className="Offer">
                    <div className="sofaOffer">++++++++++
                        <div className="Offer-content">
                            <h3 className="Offer-heading">50% OFF</h3>
                            <Button color="info">Shop Now</Button>
                        </div>
                    </div>
                    <div className="bedOffer">
                        <div className="Offer-content">
                            <h3 className="Offer-heading">50% OFF</h3>
                            <Button color="info">Shop Now</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="information">
                <div className="information-content">
                    <div className="shipping informationInfo">
                        <h6>
                            {" "}
                            <MdLocalShipping className="icon" />
                        </h6>
                        <h6>Free Shipping</h6>
                        <p className="informationInfo-description">
                            on all order over $2000
                        </p>
                    </div>
                    <div className="return informationInfo">
                        <h6>
                            {" "}
                            <FaBullhorn className="icon" />
                        </h6>
                        <h6>Free Return</h6>
                        <p className="informationInfo-description">
                            on first exchange in 30 days
                        </p>
                    </div>
                    <div className="discount informationInfo">
                        <h6>
                            {" "}
                            <BsGiftFill className="icon" />
                        </h6>
                        <h6>Member Discount</h6>
                        <p className="informationInfo-description">
                            Register and save up to $29%
                        </p>
                    </div>
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle1} className={className}>
                <ModalHeader toggle={toggle1}>SEARCH</ModalHeader>
                <Form>
                    <FormGroup>
                        <Input type="text" name="text" id="exampleEmail" placeholder="Search Here" />
                    </FormGroup>
                </Form>
                {/* <ModalBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ModalBody> */}
                <ModalFooter>
                    <Button color="primary" onClick={toggle1}>SEARCH</Button>{' '}
                    <Button color="secondary" onClick={toggle1}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <div className="products">
                <div className="greatdeal" data-aos="flip-up"><h1>GREAT DEALS  < GiRoundStar /></h1></div>
                <div className="products-items">
                    <div className="id-product" data-aos="fade-right">
                        <img className="product-img" src={flor} />
                        <p className="product-name">FLOR POUFFE</p>
                        <p className="product-pricelist"><span className="price-underline">₹ 17,800   </span>₹ 15,130  <span className="price-off"> 15% OFF </span></p>
                    </div>
                    <div className="id-product-1" data-aos="fade-left">
                        <img className="product-img" src={wing_chair} />
                        <p className="product-name">EZMERALDA TWO SEATER FABRIC WING CHAIR</p>
                        <p className="product-pricelist"><span className="price-underline">₹ 62,400   </span>₹ 53,040 <span className="price-off"> 15% OFF </span></p>
                    </div>
                </div>
            </div>
            <div className="col-card" data-aos="zoom-in">
                <div className="greatdeal" data-aos="flip-up"><h1>NEW ARRIVALS  < GiRoundStar /></h1></div>
                <div style={{ width: '60%', display: 'flex', flexFlow: 'wrap', justifyContent: 'center', margin: '0 auto', paddingBottom: '10%'}}>
                    <div className="card" data-aos="zoom-out-up" style={{ width: '300px', margin: '20px' }}>
                        <img className="card-img-top" src={a} alt="Card image" style={{ width: '100%' }} />
                        <a href="#" className="dollar">15% OFF</a>
                        <div className="card-body">
                            <h4 className="card-title">SELESIO SILVER NESTED TABLESAFILO GOLD TROLLEY</h4>
                            <p className="card-text product-pricelist">₹ 15,130 </p>
                            <div className="star">
                                <span className="price-underline">₹ 17,800</span>
                                <div style={{ display: 'inline-block', float: 'right' }}>
                                    <a className="col-shopnow" href="#" style={{ color: '#7a838b', textDecoration: 'none' }}>SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-out-up" style={{ width: '300px', margin: '20px' }}>
                        <img className="card-img-top" src={b} alt="Card image" style={{ width: '100%' }} />
                        <a href="#" className="dollar">15% OFF$</a>
                        <div className="card-body">
                            <h4 className="card-title">HADRIAN DOUBLE BENCH</h4>
                            <p className="card-text product-pricelist">₹ 15,130 </p>
                            <div className="star">
                                <span className="price-underline">₹ 17,800</span>
                                <div style={{ display: 'inline-block', float: 'right' }}>
                                    <a className="col-shopnow" href="#" style={{ color: '#7a838b', textDecoration: 'none' }}>SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-out-up" style={{ width: '300px', margin: '20px' }}>
                        <img className="card-img-top" src={c} alt="Card image" style={{ width: '100%' }} />
                        <a href="#" className="dollar">15% OFF$</a>
                        <div className="card-body">
                            <h4 className="card-title">ALEENA FABRIC TUB CHAIR</h4>
                            <p className="card-text product-pricelist">₹ 15,130 </p>
                            <div className="star">
                                <span className="price-underline">₹ 17,800</span>
                                <div style={{ display: 'inline-block', float: 'right' }}>
                                    <a className="col-shopnow" href="#" style={{ color: '#7a838b', textDecoration: 'none' }}>SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-out-up" style={{ width: '300px', margin: '20px' }}>
                        <img className="card-img-top" src={d} alt="Card image" style={{ width: '100%' }} />
                        <a href="#" className="dollar">15% OFF$</a>
                        <div className="card-body">
                            <h4 className="card-title">AFILO GOLD TROLLEY</h4>
                            <p className="card-text product-pricelist">₹ 15,130 </p>
                            <div className="star">
                                <span className="price-underline">₹ 17,800</span>
                                <div style={{ display: 'inline-block', float: 'right' }}>
                                    <a className="col-shopnow" href="#" style={{ color: '#7a838b', textDecoration: 'none' }}>SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-out-up" style={{ width: '300px', margin: '20px' }}>
                        <img className="card-img-top" src={e} alt="Card image" style={{ width: '100%' }} />
                        <a href="#" className="dollar">15% OFF$</a>
                        <div className="card-body">
                            <h4 className="card-title">AURELIO CONSOLE TABLE</h4>
                            <p className="card-text product-pricelist">₹ 15,130 </p>
                            <div className="star">
                                <span className="price-underline">₹ 17,800</span>
                                <div style={{ display: 'inline-block', float: 'right' }}>
                                    <a className="col-shopnow" href="#" style={{ color: '#7a838b', textDecoration: 'none' }}>SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-out-up" style={{ width: '300px', margin: '20px' }}>
                        <img className="card-img-top" src={f} alt="Card image" style={{ width: '100%' }} />
                        <a href="#" className="dollar">15% OFF$</a>
                        <div className="card-body">
                            <h4 className="card-title">FAUSTINO COFFEE TABLE </h4>
                            <p className="card-text product-pricelist">₹ 15,130 </p>
                            <div className="star">
                                <span className="price-underline">₹ 17,800</span>
                                <div style={{ display: 'inline-block', float: 'right' }}>
                                    <a className="col-shopnow" href="#" style={{ color: '#7a838b', textDecoration: 'none' }}>SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-out-up" style={{ width: '300px', margin: '20px' }}>
                        <img className="card-img-top" src={g} alt="Card image" style={{ width: '100%' }} />
                        <a href="#" className="dollar">15% OFF$</a>
                        <div className="card-body">
                            <h4 className="card-title">BENITO KING BED WITH STORAGE</h4>
                            <p className="card-text product-pricelist">₹ 15,130 </p>
                            <div className="star">
                                <span className="price-underline">₹ 17,800</span>
                                <div style={{ display: 'inline-block', float: 'right' }}>
                                    <a className="col-shopnow" href="#" style={{ color: '#7a838b', textDecoration: 'none' }}>SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-out-up" style={{ width: '300px', margin: '20px' }}>
                        <img className="card-img-top" src={h} alt="Card image" style={{ width: '100%' }} />
                        <a href="#" className="dollar">15% OFF$</a>
                        <div className="card-body">
                            <h4 className="card-title">CARIANN FABRIC STAINLESS STEEL LEISURE CHAIR </h4>
                            <p className="card-text product-pricelist">₹ 15,130 </p>
                            <div className="star">
                                <span className="price-underline">₹ 17,800</span>
                                <div style={{ display: 'inline-block', float: 'right' }}>
                                    <a className="col-shopnow" href="#" style={{ color: '#7a838b', textDecoration: 'none' }}>SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pg-footer">
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-content-column">
                            <div className="footer-logo">
                                <a className="footer-logo-link" href="#">
                                    <span className="mainlogo" href="/" data-aos="zoom-in-down">Shopify </span>
                                </a>
                            </div>
                            <div className="footer-menu" data-aos="fade-right">
                                <h2 className="footer-menu-name"> Get Started</h2>
                                <ul id="menu-get-started" className="footer-menu-list">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-product">
                                        <a href="#">HOME</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-product">
                                        <a href="#">ORDERS</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-product">
                                        <a href="#">MY CART</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content-column" data-aos="fade-up">
                            <div className="footer-menu">
                                <h2 className="footer-menu-name"> POLICY</h2>
                                <ul id="menu-company" className="footer-menu-list">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">RETURN POLICY</a>
                                    </li>
                                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                        <a href="#">TERMS OF USE</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">PRIVACY</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-menu" data-aos="fade-up">
                                <h2 className="footer-menu-name"> HELP</h2>
                                <ul id="menu-legal" className="footer-menu-list">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                                        <a href="#">EMAIL US</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">CALL US</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content-column" data-aos="fade-up">
                            <div className="footer-menu">
                                <h2 className="footer-menu-name"> Quick Links</h2>
                                <ul id="menu-quick-links" className="footer-menu-list">
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                        <a target="_blank" rel="noopener noreferrer" href="#">HOME</a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                        <a target="_blank" rel="noopener noreferrer" href="#">SHOP</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">SEARCH</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">MY WISHLIST</a>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                                        <a href="#">ORDERS</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="#">COMPLAINTS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content-column" data-aos="fade-left">
                            <div className="footer-call-to-action">
                                <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                                <p className="footer-call-to-action-description"> Have a support question?</p>
                                <a className="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
                            </div>
                            <div className="footer-call-to-action">
                                <h2 className="footer-call-to-action-title"> You Call Us</h2>
                                <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> 0124-64XXXX </a></p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="footer-copyright-wrapper">
                            <p className="footer-copyright-text">
                                <a className="footer-copyright-link" href="#" target="_self"> ©2021. | SHOPIFY | All rights reserved. </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Example;
