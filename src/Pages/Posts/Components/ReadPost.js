import React from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEye } from "@fortawesome/free-regular-svg-icons";
import useDatas from "../../../Hooks/useDatas";
import { Col, Container, Row } from "react-bootstrap";
import RecentPosts from "../../RecentPosts/RecentPosts";
import TagCloud from "../../TagCloud/TagCloud";
import Social from "../../Social/Social";
import Advertising from "../../Advertising/Advertising";
import styles from "../../../Assets/styles.module.css";

const ReadPost = () => {
    const title = useParams();
    const [datas] = useDatas();

    const selectedPost = datas.filter(data => data.title === title.title);
    const post = selectedPost[0];

    return (
        <>
            <div className={styles.bgColor1 + " " + styles.paddingTopBottom1}>
                <Container>
                    <Row>
                        <Col sm={12} md={8} lg={8} className={styles.bgColor2 + " " + styles.paddingTopBottom2}>
                            <Container>
                                <Container className="text-center">
                                    <img width="100%" src={post?.banner} alt="banner" />
                                    <h3 className="py-3">{post?.title}</h3>
                                    <h5 className="py-3">{post?.date} <b style={{ "color": "#F248BD" }}>&#8212;</b> {post?.readTime} min read <FontAwesomeIcon icon={faComment} style={{ "color": "#F248BD", paddingLeft: "8px", paddingRight: "5px" }} />{post?.totalComment} <FontAwesomeIcon icon={faEye} style={{ "color": "#F248BD", paddingLeft: "8px", paddingRight: "5px" }} />{post?.totalViews}</h5>
                                    <p className="text-start pt-3">{post?.post}</p>
                                </Container>
                                <Container className="d-flex align-items-center justify-content-center">
                                    <div>
                                        <img style={{ borderRadius: "50%" }} width="40px" src={post?.author_img} alt="author_img" />
                                    </div>
                                    <div className="ps-2">
                                        <small>{post?.author}</small>
                                    </div>
                                </Container>
                                <h6 className="text-center py-3">Catagorized in: {post?.catagory}</h6>
                            </Container>
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <Row xs={1} md={1} lg={1} className="g-5">
                                <Col>
                                    <RecentPosts />
                                    <TagCloud />
                                    <Social />
                                    <Advertising />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <Container>
                <Container className="text-center">
                    <img src={post?.banner} alt="banner" />
                    <h3 className="py-3">{post?.title}</h3>
                    <h5 className="py-3">{post?.date} <b style={{ "color": "#F248BD" }}>&#8212;</b> {post?.readTime} min read <FontAwesomeIcon icon={faComment} style={{ "color": "#F248BD", paddingLeft: "8px", paddingRight: "5px" }} />{post?.totalComment} <FontAwesomeIcon icon={faEye} style={{ "color": "#F248BD", paddingLeft: "8px", paddingRight: "5px" }} />{post?.totalViews}</h5>
                    <p className="text-start pt-3">{post?.post}</p>
                </Container>
                <Container className="d-flex align-items-center justify-content-center">
                    <div>
                        <img style={{ borderRadius: "50%" }} width="40px" src={post?.author_img} alt="author_img" />
                    </div>
                    <div className="ps-2">
                        <small>{post?.author}</small>
                    </div>
                </Container>
                <h6 className="text-center py-3">Catagorized in: {post?.catagory}</h6>
            </Container> */}
        </>
    );
};

export default ReadPost;