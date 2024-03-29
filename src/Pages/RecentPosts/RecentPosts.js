import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useDatas from "../../Hooks/useDatas";
import styles from "../../Assets/styles.module.css"

const RecentPosts = () => {
    const [datas] = useDatas();

    const selectedDatas = datas.slice(0, 3);

    return (
        <Container className={styles.paddingBottom3}>
            <h5 className={styles.textColorHeading1}>Recent Posts <b style={{ "color": "#F248BD" }}>&#8212;</b></h5>
            <Row>
                {
                    selectedDatas.map(data =>
                        <Col key={data._id}>
                            <Card className={styles.bgColor1 + " " + styles.border0}>
                                <Card.Body className={styles.flexCenterStart + " " + styles.paddingX0}>
                                    <div>
                                        <Card.Img onClick={event => window.location.href = `/post/${data.title}`} className={styles.bannerSize2 + " " + styles.tranformOnHover} src={data.banner} />
                                    </div>
                                    <div className={styles.paddingStart3}>
                                        <Card.Title onClick={event => window.location.href = `/post/${data.title}`} className={styles.textColorHeading2 + " " + styles.heading1}>{data.title}</Card.Title>
                                        <Card.Text className={styles.textColorBody2}>
                                            {data.date} <b style={{ "color": "#F248BD" }}>&#8212;</b> {data.readTime} min read
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default RecentPosts;