import { Container,Col,Row } from "react-bootstrap"
import {useState, useEffect} from "react";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";


export const Banner= () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Credit Exchange Platform", "Risk Analysis Engine","Credit Cloud", "Embedded finance as a Service", "Arthmate"];
    const [text,setText] =useState('');
    const [delta,setDelta] = useState(300-Math.random()*100);
    const period =2000;

    useEffect(() =>{
        let ticker = setInterval(()=>{
        tick();
        },delta)

        return () =>{clearInterval(ticker)};
    },[text])

    const tick = () =>{
        let i = loopNum%toRotate.length;
        let fullText = toRotate[i];
        let UpdatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);
        setText(UpdatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && UpdatedText === fullText)
        {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && UpdatedText === '')
        {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
<section className="banner " id="home">
 <Container>
    <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to Arthmate</span>
            <h1>{`Welcome to  `}<span classNme="wrap ">{text}</span></h1>
            <p>Arthmate is India's premier embedded fintech platform leveraging technology to provide on-demand seamless deployment of credit across fintechs, digital platforms and SME anchors. With our at-scale credit exchange platform, we strive to transform digital lending through proprietary tech and advanced analytics solutions.</p>
            <a href ="mailto:anujaiswal9087@gmail.com"><button onClick={() =>console.log('connect')}> Let's Connect <ArrowRightCircle size={25}/> </button></a>
        </Col>
        <Col xs={12} md={6} xl={5}>
        <img src={headerImg} alt="Header Img"/>
         
        </Col>
    </Row>
 </Container>
</section>
    )
}